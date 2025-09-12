"use client";

import { useCallback, useEffect } from "react";
import { UseLayoutProps } from "./Props";

export const _useLayout = <R = unknown>({
  ref,
  onLayout,
  onLayoutChange,
}: UseLayoutProps<R>) => {
  const handleLayout = useCallback(() => {
    if (!ref || !ref.current) return;
    const current = ref.current as unknown as Element;
    const { clientWidth: width, clientHeight: height } = current;
    onLayout?.({ w: width, h: height });
  }, [ref, onLayout]);

  const handleLayoutChange = useCallback(() => {
    if (!ref || !ref.current) return;
    const current = ref.current as unknown as Element;
    const resizeObserver = new ResizeObserver(() => {
      const { clientWidth: width, clientHeight: height } = current;
      onLayoutChange?.({ w: width, h: height });
    });
    resizeObserver.observe(current);
    return () => {
      resizeObserver.disconnect();
    };
  }, [ref, onLayoutChange]);

  useEffect(() => handleLayout(), [handleLayout]);

  useEffect(() => handleLayoutChange(), [handleLayoutChange]);

  return { handleLayout, handleLayoutChange };
};
