"use client";

import { useCallback } from "react";
import { useResize } from "@bewise/ui/hooks/useResize";
import {
  BreakpointProviderCompareOperation,
  BreakpointProviderProps,
  BreakpointProviderSetupConfig,
  BreakpointProviderSize,
} from "./Props";
import { _BreakpointContext } from "./_Context";

const isMatchSize = (size: BreakpointProviderSize, width?: number) => {
  const { min = null, max = null } = size;
  if (!width) return false;
  if (min == null && max == null) return true;
  if (min == null) return width <= max!;
  if (max == null) return width >= min;
  return width >= min && width <= max;
};

export const BreakpointProvider = ({
  config = {
    mobile: { max: 599 },
    tablet: { min: 600, max: 999 },
    desktop: { min: 1000 },
    xs: { max: 399 },
    sm: { min: 400, max: 699 },
    md: { min: 700, max: 999 },
    lg: { min: 1000, max: 1299 },
    xl: { min: 1300 },
  },
  children,
}: BreakpointProviderProps) => {
  const layout = useResize();

  const setupBreakpoint = useCallback(
    (props: BreakpointProviderSetupConfig = {}) => {
      const extendedConfig = { ...config, ...props };

      const sortedKeys = Object.entries(extendedConfig)
        .sort(([, a], [, b]) => {
          const aVal = a.min ?? a.max ?? 0;
          const bVal = b.min ?? b.max ?? 0;
          return aVal - bVal;
        })
        .map(([key]) => key);

      const matches: Record<string, boolean> = {};
      for (const [key, size] of Object.entries(extendedConfig)) {
        matches[key] = isMatchSize(size, layout?.w);
      }

      const compare = (
        target: string,
        operation: BreakpointProviderCompareOperation,
      ): boolean => {
        if (!layout) return false;
        const targetIndex = sortedKeys.indexOf(target);
        if (targetIndex === -1) return false;

        const activeIndices = sortedKeys
          .map((key, i) => (matches[key] ? i : -1))
          .filter(i => i !== -1);
        if (!activeIndices.length) return false;

        switch (operation) {
          case "eq":
            return matches[target];
          case "lt":
            return !matches[target] && activeIndices.some(i => i < targetIndex);
          case "lte":
            return activeIndices.some(i => i <= targetIndex);
          case "gt":
            return !matches[target] && activeIndices.some(i => i > targetIndex);
          case "gte":
            return activeIndices.some(i => i >= targetIndex);
          default:
            return false;
        }
      };

      function select<T = unknown>(targets: Record<string, T>, fallback?: T) {
        for (const target in targets) {
          if (matches[target]) return targets[target];
        }
        return fallback;
      }

      return {
        matches,
        compare,
        select,
        eq: (target: string) => compare(target, "eq"),
        lt: (target: string) => compare(target, "lt"),
        lte: (target: string) => compare(target, "lte"),
        gt: (target: string) => compare(target, "gt"),
        gte: (target: string) => compare(target, "gte"),
      };
    },
    [layout],
  );

  return (
    <_BreakpointContext.Provider value={{ setupBreakpoint }}>
      {children}
    </_BreakpointContext.Provider>
  );
};
