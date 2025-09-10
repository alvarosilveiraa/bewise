"use client";

import { useCallback, useMemo } from "react";
import { ThemeModeEnum } from "@bewise/common/enums/ThemeMode";
import { ThemeProviderProps } from "./Props";
import { _ThemeContext } from "./_Context";
import { _useThemeColors } from "./_useColors";
import { _useThemeLayout } from "./_useLayout";
import { _useThemeMode } from "./_useMode";

export const ThemeProvider = ({
  mode = ThemeModeEnum.Light,
  light,
  dark,
  layout,
  children,
}: ThemeProviderProps) => {
  const { themeMode, setThemeMode } = _useThemeMode(mode);
  const inverseThemeMode = useMemo(
    () =>
      ({
        [ThemeModeEnum.Light]: ThemeModeEnum.Dark,
        [ThemeModeEnum.Dark]: ThemeModeEnum.Light,
      })[themeMode],
    [themeMode],
  );
  const { themeColors } = _useThemeColors({ mode: themeMode, light, dark });
  const { themeLayout } = _useThemeLayout(layout);

  const toggleThemeMode = useCallback(() => {
    setThemeMode(inverseThemeMode);
  }, [inverseThemeMode]);

  return (
    <_ThemeContext.Provider
      value={{
        themeMode,
        inverseThemeMode,
        themeColors,
        themeLayout,
        setThemeMode,
        toggleThemeMode,
      }}
    >
      {children}
    </_ThemeContext.Provider>
  );
};
