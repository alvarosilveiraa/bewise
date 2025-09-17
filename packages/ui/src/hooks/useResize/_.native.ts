import { useCallback, useEffect, useState } from "react";
import { Layout } from "@bewise/ui/type/Layout";
import { Dimensions, ScaledSize } from "react-native";

export const _useResize = () => {
  const [layout, setLayout] = useState<Layout | null>(null);

  const handleResize = useCallback(
    (event: { window: ScaledSize }) =>
      setLayout({
        w: event.window.width,
        h: event.window.height,
      }),
    [],
  );

  useEffect(() => {
    const window = Dimensions.get("window");
    handleResize({ window });
    const subscription = Dimensions.addEventListener("change", handleResize);
    return () => {
      subscription.remove();
    };
  }, []);

  return layout;
};
