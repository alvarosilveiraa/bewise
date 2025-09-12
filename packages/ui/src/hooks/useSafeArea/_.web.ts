"use client";

import { useMemo } from "react";
import { SafeArea } from "@bewise/ui/type/SafeArea";

export const _useSafeArea = () => {
  const safeArea = useMemo<SafeArea>(
    () => ({
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    }),
    [],
  );

  return safeArea;
};
