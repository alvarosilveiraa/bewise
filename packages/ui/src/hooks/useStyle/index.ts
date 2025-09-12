"use client";

import { useCallback } from "react";
import { clearNullish } from "@bewise/ui/helpers/clearNullish";
import { styleMapper } from "@bewise/ui/mappers/style";
import { useThemeContext } from "@bewise/ui/providers/Theme/useContext";
import { Color } from "@bewise/ui/type/Color";
import { ColorVariable } from "@bewise/ui/type/ColorVariable";
import { FontFamily } from "@bewise/ui/type/FontFamily";
import { FontSize } from "@bewise/ui/type/FontSize";
import { FontWeight } from "@bewise/ui/type/FontWeight";
import { Opacity } from "@bewise/ui/type/Opacity";
import { Size } from "@bewise/ui/type/Size";
import { Style } from "@bewise/ui/type/Style";
import { ThemeColorsConfig } from "@bewise/ui/type/ThemeColorsConfig";
import { isString } from "lodash";

export const useStyle = <S extends object = Record<string, unknown>>(
  style?: Style,
  mapper = styleMapper,
) => {
  const { themeColors, themeLayout } = useThemeContext();

  // TODO:
  // export const colorAlpha = (alpha: number) => {
  //   const hex = Math.round(alpha * 255).toString(16);
  //   return hex.length === 1 ? "0" + hex : hex;
  // };

  const getColor = useCallback(
    (key: keyof ThemeColorsConfig, color?: ColorVariable | Color) => {
      if (color === `$${key}`) return themeColors[key].DEFAULT;
      if (color === `$${key}.f`) return themeColors[key].foreground;
      if (color === `$${key}.50`) return themeColors[key][50];
      if (color === `$${key}.100`) return themeColors[key][100];
      if (color === `$${key}.200`) return themeColors[key][200];
      if (color === `$${key}.300`) return themeColors[key][300];
      if (color === `$${key}.400`) return themeColors[key][400];
      if (color === `$${key}.500`) return themeColors[key][500];
      if (color === `$${key}.600`) return themeColors[key][600];
      if (color === `$${key}.700`) return themeColors[key][700];
      if (color === `$${key}.800`) return themeColors[key][800];
      if (color === `$${key}.900`) return themeColors[key][900];
    },
    [themeColors],
  );

  const colorMapper = useCallback(
    (color?: ColorVariable | Color) => {
      const accentColor = getColor("accent", color);
      if (accentColor) return accentColor;
      const backgroundColor = getColor("background", color);
      if (backgroundColor) return backgroundColor;
      const dangerColor = getColor("danger", color);
      if (dangerColor) return dangerColor;
      const defaultColor = getColor("default", color);
      if (defaultColor) return defaultColor;
      const dividerColor = getColor("divider", color);
      if (dividerColor) return dividerColor;
      const foregroundColor = getColor("foreground", color);
      if (foregroundColor) return foregroundColor;
      const primaryColor = getColor("primary", color);
      if (primaryColor) return primaryColor;
      const secondaryColor = getColor("secondary", color);
      if (secondaryColor) return secondaryColor;
      const successColor = getColor("success", color);
      if (successColor) return successColor;
      const warningColor = getColor("warning", color);
      if (warningColor) return warningColor;
      return color;
    },
    [getColor],
  );

  const fontFamilyMapper = useCallback(
    (fontFamily?: FontFamily) => {
      if (fontFamily === "$") return themeLayout.fontFamily;
      return fontFamily;
    },
    [themeLayout.fontFamily],
  );

  const formatSizeMapper = useCallback(
    (size?: Size) => {
      if (isString(size)) {
        const value = Number(size.replace("$", ""));
        return value * themeLayout.spacing;
      }
      return size;
    },
    [themeLayout.spacing],
  );

  const fontFontSizeMapper = useCallback(
    (fontSize?: FontSize | Size) => {
      if (fontSize === "$h1") return themeLayout.fontSize.h1;
      if (fontSize === "$h2") return themeLayout.fontSize.h2;
      if (fontSize === "$h3") return themeLayout.fontSize.h3;
      if (fontSize === "$h4") return themeLayout.fontSize.h4;
      if (fontSize === "$h5") return themeLayout.fontSize.h5;
      if (fontSize === "$p") return themeLayout.fontSize.p;
      if (fontSize === "$span") return themeLayout.fontSize.span;
      return formatSizeMapper(fontSize);
    },
    [themeLayout.fontSize, formatSizeMapper],
  );

  const fontWeightMapper = useCallback(
    (fontWeight?: FontWeight) => {
      if (fontWeight === "$h1") return themeLayout.fontWeight.h1;
      if (fontWeight === "$h2") return themeLayout.fontWeight.h2;
      if (fontWeight === "$h3") return themeLayout.fontWeight.h3;
      if (fontWeight === "$h4") return themeLayout.fontWeight.h4;
      if (fontWeight === "$h5") return themeLayout.fontWeight.h5;
      if (fontWeight === "$p") return themeLayout.fontWeight.p;
      if (fontWeight === "$span") return themeLayout.fontWeight.span;
      return fontWeight;
    },
    [themeLayout.fontWeight],
  );

  const formatOpacityMapper = useCallback(
    (opacity?: Opacity) => {
      if (opacity === "$disabled") return themeLayout.opacity.disabled;
      if (opacity === "$hover") return themeLayout.opacity.hover;
      return opacity;
    },
    [themeLayout.opacity],
  );

  return mapper<S>(
    clearNullish({
      ...style,
      bbc: colorMapper(style?.bbc),
      bc: colorMapper(style?.bc),
      bg: colorMapper(style?.bg),
      blc: colorMapper(style?.blc),
      brc: colorMapper(style?.brc),
      btc: colorMapper(style?.btc),
      color: colorMapper(style?.color),
      fontFamily: fontFamilyMapper(style?.fontFamily),
      fontSize: fontFontSizeMapper(style?.fontSize),
      fontWeight: fontWeightMapper(style?.fontWeight),
      gap: formatSizeMapper(style?.gap),
      opacity: formatOpacityMapper(style?.opacity),
      size: formatSizeMapper(style?.size),
    }),
  );
};
