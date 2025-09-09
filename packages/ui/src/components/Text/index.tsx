"use client";

import { useMemo } from "react";
import { ThemeModeEnum } from "@bewise/common/enums/ThemeMode";
import { useThemeContext } from "@bewise/ui/providers/Theme/useThemeContext";
import { FontWeight } from "@bewise/ui/type/FontWeight";
import { TextProps, TextStyleProps } from "./Props";
import { _Text } from "./_";

export const Text = ({ as = "p", ...props }: TextProps) => {
  const { themeMode } = useThemeContext();
  const style = useMemo(
    (): TextStyleProps => ({
      fontSize: { h1: 28, h2: 24, h3: 20, h4: 18, h5: 16, p: 16, span: 16 }[as],
      fontWeight: {
        h1: "900",
        h2: "800",
        h3: "700",
        h4: "600",
        h5: "500",
        p: "500",
        span: "500",
      }[as] as FontWeight,
      color: { [ThemeModeEnum.Light]: "black", [ThemeModeEnum.Dark]: "white" }[
        themeMode
      ],
      transition: { duration: 200 },
    }),
    [as, themeMode],
  );

  return <_Text as={as} {...style} {...props} />;
};
