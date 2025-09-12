import { useMemo } from "react";
import { ThemeLayout } from "@bewise/ui/type/ThemeLayout";

export const _useThemeLayout = (layout?: Partial<ThemeLayout>) => {
  const themeLayout = useMemo<ThemeLayout>(
    () => ({
      fontFamily: layout?.fontFamily || "Mulish",
      fontSize: {
        h1: layout?.fontSize?.h1 || 26,
        h2: layout?.fontSize?.h2 || 22,
        h3: layout?.fontSize?.h3 || 18,
        h4: layout?.fontSize?.h4 || 14,
        h5: layout?.fontSize?.h5 || 12,
        p: layout?.fontSize?.p || 16,
        span: layout?.fontSize?.span || 16,
      },
      fontWeight: {
        h1: layout?.fontWeight?.h1 || "900",
        h2: layout?.fontWeight?.h2 || "800",
        h3: layout?.fontWeight?.h3 || "700",
        h4: layout?.fontWeight?.h4 || "600",
        h5: layout?.fontWeight?.h5 || "500",
        p: layout?.fontWeight?.p || "400",
        span: layout?.fontWeight?.span || "400",
      },
      border: {
        sm: layout?.border?.sm || 1,
        md: layout?.border?.md || 1,
        lg: layout?.border?.lg || 1,
      },
      opacity: {
        disabled: layout?.opacity?.disabled || 0.5,
        hover: layout?.opacity?.hover || 0.8,
      },
      radius: {
        sm: layout?.radius?.sm || 4,
        md: layout?.radius?.md || 6,
        lg: layout?.radius?.lg || 8,
      },
      shadow: {
        sm: layout?.shadow?.sm || 2,
        md: layout?.shadow?.md || 4,
        lg: layout?.shadow?.lg || 6,
      },
      spacing: layout?.spacing || 2,
    }),
    [layout],
  );

  return { themeLayout };
};
