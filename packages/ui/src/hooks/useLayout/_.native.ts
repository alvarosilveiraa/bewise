import { useCallback, useEffect } from "react";
import { LayoutChangeEvent, NativeMethods } from "react-native";
import { UseLayoutProps } from "./Props";

export const _useLayout = <R = unknown>({
  ref,
  onLayout,
  onLayoutChange,
}: UseLayoutProps<R>) => {
  const handleLayout = useCallback(() => {
    if (!ref || !ref.current) return;
    const current = ref.current as unknown as NativeMethods;
    current.measure((_x, _y, width, height) => {
      onLayout?.({ w: width, h: height });
    });
  }, [ref, onLayout]);

  const handleLayoutChange = useCallback(
    (event?: LayoutChangeEvent) => {
      if (!event) return;
      onLayoutChange?.({
        w: event.nativeEvent.layout.width,
        h: event.nativeEvent.layout.height,
      });
    },
    [onLayoutChange],
  );

  useEffect(() => handleLayout(), [handleLayout]);

  return { handleLayout, handleLayoutChange };
};
