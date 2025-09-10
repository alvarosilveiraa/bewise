"use client";

import { useCallback } from "react";
import { styleMapper } from "@bewise/ui/mappers/style";
import { useThemeContext } from "@bewise/ui/providers/Theme/useContext";
import { Color } from "@bewise/ui/type/Color";
import { ColorVariable } from "@bewise/ui/type/ColorVariable";
import { FontFamily } from "@bewise/ui/type/FontFamily";
import { FontSize } from "@bewise/ui/type/FontSize";
import { FontWeight } from "@bewise/ui/type/FontWeight";
import { Style } from "@bewise/ui/type/Style";

export const useStyle = (style: Style, mapper = styleMapper) => {
  const { themeColors, themeLayout } = useThemeContext();

  const colorMapper = useCallback(
    (color?: ColorVariable | Color) => {
      if (color === "$accent") return themeColors.accent.DEFAULT;
      if (color === "$accent.f") return themeColors.accent.foreground;
      if (color === "$accent.50") return themeColors.accent[50];
      if (color === "$accent.100") return themeColors.accent[100];
      if (color === "$accent.200") return themeColors.accent[200];
      if (color === "$accent.300") return themeColors.accent[300];
      if (color === "$accent.400") return themeColors.accent[400];
      if (color === "$accent.500") return themeColors.accent[500];
      if (color === "$accent.600") return themeColors.accent[600];
      if (color === "$accent.700") return themeColors.accent[700];
      if (color === "$accent.800") return themeColors.accent[800];
      if (color === "$accent.900") return themeColors.accent[900];
      if (color === "$background") return themeColors.background.DEFAULT;
      if (color === "$background.f") return themeColors.background.foreground;
      if (color === "$background.50") return themeColors.background[50];
      if (color === "$background.100") return themeColors.background[100];
      if (color === "$background.200") return themeColors.background[200];
      if (color === "$background.300") return themeColors.background[300];
      if (color === "$background.400") return themeColors.background[400];
      if (color === "$background.500") return themeColors.background[500];
      if (color === "$background.600") return themeColors.background[600];
      if (color === "$background.700") return themeColors.background[700];
      if (color === "$background.800") return themeColors.background[800];
      if (color === "$background.900") return themeColors.background[900];
      if (color === "$danger") return themeColors.danger.DEFAULT;
      if (color === "$danger.f") return themeColors.danger.foreground;
      if (color === "$danger.50") return themeColors.danger[50];
      if (color === "$danger.100") return themeColors.danger[100];
      if (color === "$danger.200") return themeColors.danger[200];
      if (color === "$danger.300") return themeColors.danger[300];
      if (color === "$danger.400") return themeColors.danger[400];
      if (color === "$danger.500") return themeColors.danger[500];
      if (color === "$danger.600") return themeColors.danger[600];
      if (color === "$danger.700") return themeColors.danger[700];
      if (color === "$danger.800") return themeColors.danger[800];
      if (color === "$danger.900") return themeColors.danger[900];
      if (color === "$default") return themeColors.default.DEFAULT;
      if (color === "$default.f") return themeColors.default.foreground;
      if (color === "$default.50") return themeColors.default[50];
      if (color === "$default.100") return themeColors.default[100];
      if (color === "$default.200") return themeColors.default[200];
      if (color === "$default.300") return themeColors.default[300];
      if (color === "$default.400") return themeColors.default[400];
      if (color === "$default.500") return themeColors.default[500];
      if (color === "$default.600") return themeColors.default[600];
      if (color === "$default.700") return themeColors.default[700];
      if (color === "$default.800") return themeColors.default[800];
      if (color === "$default.900") return themeColors.default[900];
      if (color === "$divider") return themeColors.divider.DEFAULT;
      if (color === "$divider.f") return themeColors.divider.foreground;
      if (color === "$divider.50") return themeColors.divider[50];
      if (color === "$divider.100") return themeColors.divider[100];
      if (color === "$divider.200") return themeColors.divider[200];
      if (color === "$divider.300") return themeColors.divider[300];
      if (color === "$divider.400") return themeColors.divider[400];
      if (color === "$divider.500") return themeColors.divider[500];
      if (color === "$divider.600") return themeColors.divider[600];
      if (color === "$divider.700") return themeColors.divider[700];
      if (color === "$divider.800") return themeColors.divider[800];
      if (color === "$divider.900") return themeColors.divider[900];
      if (color === "$foreground") return themeColors.foreground.DEFAULT;
      if (color === "$foreground.f") return themeColors.foreground.foreground;
      if (color === "$foreground.50") return themeColors.foreground[50];
      if (color === "$foreground.100") return themeColors.foreground[100];
      if (color === "$foreground.200") return themeColors.foreground[200];
      if (color === "$foreground.300") return themeColors.foreground[300];
      if (color === "$foreground.400") return themeColors.foreground[400];
      if (color === "$foreground.500") return themeColors.foreground[500];
      if (color === "$foreground.600") return themeColors.foreground[600];
      if (color === "$foreground.700") return themeColors.foreground[700];
      if (color === "$foreground.800") return themeColors.foreground[800];
      if (color === "$foreground.900") return themeColors.foreground[900];
      if (color === "$primary") return themeColors.primary.DEFAULT;
      if (color === "$primary.f") return themeColors.primary.foreground;
      if (color === "$primary.50") return themeColors.primary[50];
      if (color === "$primary.100") return themeColors.primary[100];
      if (color === "$primary.200") return themeColors.primary[200];
      if (color === "$primary.300") return themeColors.primary[300];
      if (color === "$primary.400") return themeColors.primary[400];
      if (color === "$primary.500") return themeColors.primary[500];
      if (color === "$primary.600") return themeColors.primary[600];
      if (color === "$primary.700") return themeColors.primary[700];
      if (color === "$primary.800") return themeColors.primary[800];
      if (color === "$primary.900") return themeColors.primary[900];
      if (color === "$secondary") return themeColors.secondary.DEFAULT;
      if (color === "$secondary.f") return themeColors.secondary.foreground;
      if (color === "$secondary.50") return themeColors.secondary[50];
      if (color === "$secondary.100") return themeColors.secondary[100];
      if (color === "$secondary.200") return themeColors.secondary[200];
      if (color === "$secondary.300") return themeColors.secondary[300];
      if (color === "$secondary.400") return themeColors.secondary[400];
      if (color === "$secondary.500") return themeColors.secondary[500];
      if (color === "$secondary.600") return themeColors.secondary[600];
      if (color === "$secondary.700") return themeColors.secondary[700];
      if (color === "$secondary.800") return themeColors.secondary[800];
      if (color === "$secondary.900") return themeColors.secondary[900];
      if (color === "$success") return themeColors.success.DEFAULT;
      if (color === "$success.f") return themeColors.success.foreground;
      if (color === "$success.50") return themeColors.success[50];
      if (color === "$success.100") return themeColors.success[100];
      if (color === "$success.200") return themeColors.success[200];
      if (color === "$success.300") return themeColors.success[300];
      if (color === "$success.400") return themeColors.success[400];
      if (color === "$success.500") return themeColors.success[500];
      if (color === "$success.600") return themeColors.success[600];
      if (color === "$success.700") return themeColors.success[700];
      if (color === "$success.800") return themeColors.success[800];
      if (color === "$success.900") return themeColors.success[900];
      if (color === "$warning") return themeColors.warning.DEFAULT;
      if (color === "$warning.f") return themeColors.warning.foreground;
      if (color === "$warning.50") return themeColors.warning[50];
      if (color === "$warning.100") return themeColors.warning[100];
      if (color === "$warning.200") return themeColors.warning[200];
      if (color === "$warning.300") return themeColors.warning[300];
      if (color === "$warning.400") return themeColors.warning[400];
      if (color === "$warning.500") return themeColors.warning[500];
      if (color === "$warning.600") return themeColors.warning[600];
      if (color === "$warning.700") return themeColors.warning[700];
      if (color === "$warning.800") return themeColors.warning[800];
      if (color === "$warning.900") return themeColors.warning[900];
      return color;
    },
    [themeColors],
  );

  const fontFamilyMapper = useCallback(
    (fontFamily?: FontFamily) => {
      if (fontFamily === "$") return themeLayout.fontFamily;
      return fontFamily;
    },
    [themeLayout.fontFamily],
  );

  const fontSizeMapper = useCallback(
    (fontSize?: FontSize) => {
      if (fontSize === "$h1") return themeLayout.fontSize.h1;
      if (fontSize === "$h2") return themeLayout.fontSize.h2;
      if (fontSize === "$h3") return themeLayout.fontSize.h3;
      if (fontSize === "$h4") return themeLayout.fontSize.h4;
      if (fontSize === "$h5") return themeLayout.fontSize.h5;
      if (fontSize === "$p") return themeLayout.fontSize.p;
      if (fontSize === "$span") return themeLayout.fontSize.span;
      return fontSize;
    },
    [themeLayout.fontSize],
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

  return mapper({
    ...style,
    bc: colorMapper(style.bc),
    bg: colorMapper(style.bg),
    color: colorMapper(style.color),
    fontFamily: fontFamilyMapper(style.fontFamily),
    fontSize: fontSizeMapper(style.fontSize),
    fontWeight: fontWeightMapper(style.fontWeight),
  });
};
