import { useMemo } from "react";
import { ThemeModeEnum } from "@bewise/common/enums/ThemeMode";
import { colorScale } from "@bewise/ui/helpers/colorScale";
import { ThemeColors } from "@bewise/ui/type/ThemeColors";
import { _UseThemeColorsProps } from "./Props";

export const _useThemeColors = ({
  mode,
  light,
  dark,
}: _UseThemeColorsProps) => {
  const themeColorsLight = useMemo(
    () => ({
      accent: colorScale(ThemeModeEnum.Light, light?.accent || "#007BFF"),
      background: colorScale(
        ThemeModeEnum.Light,
        light?.background || "#ffffff",
      ),
      danger: colorScale(ThemeModeEnum.Light, light?.danger || "#dc3545"),
      default: colorScale(ThemeModeEnum.Light, light?.default || "#cccccc"),
      divider: colorScale(
        ThemeModeEnum.Light,
        light?.divider || "rgba(17, 17, 17, 0.15)",
      ),
      foreground: colorScale(
        ThemeModeEnum.Light,
        light?.foreground || "#000000",
      ),
      primary: colorScale(ThemeModeEnum.Light, light?.primary || "#006FEE"),
      secondary: colorScale(ThemeModeEnum.Light, light?.secondary || "#7828c8"),
      success: colorScale(ThemeModeEnum.Light, light?.success || "#17c964"),
      warning: colorScale(ThemeModeEnum.Light, light?.warning || "#f5a524"),
    }),
    [light],
  );
  const themeColorsDark = useMemo(
    () => ({
      accent: colorScale(ThemeModeEnum.Dark, dark?.accent || "#357ABD"),
      background: colorScale(ThemeModeEnum.Dark, dark?.background || "#000000"),
      danger: colorScale(ThemeModeEnum.Dark, dark?.danger || "#dc3545"),
      default: colorScale(ThemeModeEnum.Dark, dark?.default || "#71717a"),
      divider: colorScale(
        ThemeModeEnum.Dark,
        dark?.divider || "rgba(255, 255, 255, 0.15)",
      ),
      foreground: colorScale(ThemeModeEnum.Dark, dark?.foreground || "#ffffff"),
      primary: colorScale(ThemeModeEnum.Dark, dark?.primary || "#338ef7"),
      secondary: colorScale(ThemeModeEnum.Dark, dark?.secondary || "#9353d3"),
      success: colorScale(ThemeModeEnum.Dark, dark?.success || "#45d483"),
      warning: colorScale(ThemeModeEnum.Dark, dark?.warning || "#f7b750"),
    }),
    [dark],
  );
  const themeColors = useMemo<
    ThemeColors & { light: ThemeColors; dark: ThemeColors }
  >(
    () => ({
      light: themeColorsLight,
      dark: themeColorsDark,
      accent: {
        [ThemeModeEnum.Light]: themeColorsLight.accent,
        [ThemeModeEnum.Dark]: themeColorsDark.accent,
      }[mode],
      background: {
        [ThemeModeEnum.Light]: themeColorsLight.background,
        [ThemeModeEnum.Dark]: themeColorsDark.background,
      }[mode],
      danger: {
        [ThemeModeEnum.Light]: themeColorsLight.danger,
        [ThemeModeEnum.Dark]: themeColorsDark.danger,
      }[mode],
      default: {
        [ThemeModeEnum.Light]: themeColorsLight.default,
        [ThemeModeEnum.Dark]: themeColorsDark.default,
      }[mode],
      divider: {
        [ThemeModeEnum.Light]: themeColorsLight.divider,
        [ThemeModeEnum.Dark]: themeColorsDark.divider,
      }[mode],
      foreground: {
        [ThemeModeEnum.Light]: themeColorsLight.foreground,
        [ThemeModeEnum.Dark]: themeColorsDark.foreground,
      }[mode],
      primary: {
        [ThemeModeEnum.Light]: themeColorsLight.primary,
        [ThemeModeEnum.Dark]: themeColorsDark.primary,
      }[mode],
      secondary: {
        [ThemeModeEnum.Light]: themeColorsLight.secondary,
        [ThemeModeEnum.Dark]: themeColorsDark.secondary,
      }[mode],
      success: {
        [ThemeModeEnum.Light]: themeColorsLight.success,
        [ThemeModeEnum.Dark]: themeColorsDark.success,
      }[mode],
      warning: {
        [ThemeModeEnum.Light]: themeColorsLight.warning,
        [ThemeModeEnum.Dark]: themeColorsDark.warning,
      }[mode],
    }),
    [mode, themeColorsDark, themeColorsLight],
  );

  return { themeColors };
};
