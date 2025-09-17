"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useStorageContext } from "@bewise/ui/providers/Storage/useContext";
import { addMilliseconds } from "date-fns";
import { UseCachedStateSettings } from "./Props";

export const useCachedState = <T = unknown>(
  key: string,
  initialValue: T,
  settings?: UseCachedStateSettings<T>,
): [T, (state: T) => void] => {
  const { localStorage } = useStorageContext();
  const {
    ttl = Infinity,
    storage = localStorage,
    loader,
    onChange,
  } = useMemo(() => settings || {}, [settings, localStorage]);

  const readCache = useCallback(async () => {
    if (!storage) return null;
    const item = await storage.getItem(key);
    if (!item) return null;
    try {
      const parsed = JSON.parse(item);
      if (!parsed.expiresAt || parsed.expiresAt >= new Date().toISOString())
        return parsed.value;
      await storage.removeItem(key);
    } catch {
      await storage.removeItem(key);
    }
    return null;
  }, [key, storage]);

  const writeCache = useCallback(
    (value: T) => {
      if (!storage) return;
      const item = JSON.stringify({
        expiresAt:
          ttl === Infinity
            ? null
            : addMilliseconds(new Date(), ttl).toISOString(),
        value,
      });
      storage.setItem(key, item);
    },
    [key, storage, ttl],
  );

  const [state, setState] = useState<T>(initialValue);

  useEffect(() => {
    onChange?.(state);
  }, [state]);

  const updateState = useCallback(
    (newState: T) => {
      setState(newState);
      writeCache(newState);
    },
    [writeCache],
  );

  const loadCache = useCallback(async () => {
    const cached = await readCache();
    if (cached) {
      setState(cached);
      return;
    }
    if (loader) {
      const loaded = await loader();
      updateState(loaded);
    }
  }, [readCache, updateState]);

  useEffect(() => {
    loadCache();
  }, [loadCache]);

  return [state, updateState];
};
