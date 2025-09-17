"use client";

import { useCallback, useEffect, useState } from "react";
import { Layout } from "@bewise/ui/type/Layout";

export const _useResize = () => {
  const [layout, setLayout] = useState<Layout | null>(null);

  const handleResize = useCallback(
    () =>
      setLayout({
        w: window.innerWidth,
        h: window.innerHeight,
      }),
    [],
  );

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return layout;
};
