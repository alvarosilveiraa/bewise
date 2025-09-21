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
import { isNull, isString } from "lodash";

export const useStyle = <S extends object = Record<string, unknown>>(
  style?: Style,
  mapper = styleMapper,
) => {
  const { themeColors, themeLayout } = useThemeContext();

  const getColor = useCallback(
    (key: keyof ThemeColorsConfig, color: string) => {
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

  const getColorAlpha = useCallback((color: Color, alpha: number | null) => {
    if (!color.startsWith("#") || isNull(alpha)) return color;
    const hex = Math.round(alpha * 255).toString(16);
    const alphaHex = hex.length === 1 ? "0" + hex : hex;
    return `${color}${alphaHex}`;
  }, []);

  const colorMapper = useCallback(
    (color?: ColorVariable | Color) => {
      if (!color) return;
      const [colorStr, alphaStr] = color.split("/");
      const alpha = alphaStr ? Number(alphaStr) : null;
      const accentColor = getColor("accent", colorStr);
      if (accentColor) return getColorAlpha(accentColor, alpha);
      const backgroundColor = getColor("background", colorStr);
      if (backgroundColor) return getColorAlpha(backgroundColor, alpha);
      const dangerColor = getColor("danger", colorStr);
      if (dangerColor) return getColorAlpha(dangerColor, alpha);
      const defaultColor = getColor("default", colorStr);
      if (defaultColor) return getColorAlpha(defaultColor, alpha);
      const dividerColor = getColor("divider", colorStr);
      if (dividerColor) return getColorAlpha(dividerColor, alpha);
      const foregroundColor = getColor("foreground", colorStr);
      if (foregroundColor) return getColorAlpha(foregroundColor, alpha);
      const primaryColor = getColor("primary", colorStr);
      if (primaryColor) return getColorAlpha(primaryColor, alpha);
      const secondaryColor = getColor("secondary", colorStr);
      if (secondaryColor) return getColorAlpha(secondaryColor, alpha);
      const successColor = getColor("success", colorStr);
      if (successColor) return getColorAlpha(successColor, alpha);
      const warningColor = getColor("warning", colorStr);
      if (warningColor) return getColorAlpha(warningColor, alpha);
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

  const sizeMapper = useCallback(
    (size?: Size) => {
      if (isString(size)) {
        const value = Number(size.replace("$", ""));
        return value * themeLayout.spacing;
      }
      return size;
    },
    [themeLayout.spacing],
  );

  const fontSizeMapper = useCallback(
    (fontSize?: FontSize | Size) => {
      if (fontSize === "$h1") return themeLayout.fontSize.h1;
      if (fontSize === "$h2") return themeLayout.fontSize.h2;
      if (fontSize === "$h3") return themeLayout.fontSize.h3;
      if (fontSize === "$h4") return themeLayout.fontSize.h4;
      if (fontSize === "$h5") return themeLayout.fontSize.h5;
      if (fontSize === "$p") return themeLayout.fontSize.p;
      if (fontSize === "$span") return themeLayout.fontSize.span;
      return sizeMapper(fontSize);
    },
    [themeLayout.fontSize, sizeMapper],
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

  const opacityMapper = useCallback(
    (opacity?: Opacity) => {
      if (opacity === "$disabled") return themeLayout.opacity.disabled;
      if (opacity === "$hover") return themeLayout.opacity.hover;
      return opacity;
    },
    [themeLayout.opacity],
  );

  const overflowMapper = useCallback((overflow?: boolean) => {
    if (overflow === true) return "auto";
    if (overflow === false) return "hidden";
  }, []);

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
      colorGradient: style?.colorGradient?.map(colorMapper),
      fill: colorMapper(style?.fill),
      fontFamily: fontFamilyMapper(style?.fontFamily),
      fontSize: fontSizeMapper(style?.fontSize),
      fontWeight: fontWeightMapper(style?.fontWeight),
      gap: sizeMapper(style?.gap),
      opacity: opacityMapper(style?.opacity),
      overflow: overflowMapper(style?.overflow),
      overflowX: overflowMapper(style?.overflowX),
      overflowY: overflowMapper(style?.overflowY),
      size: sizeMapper(style?.size),
    }),
  );
};
