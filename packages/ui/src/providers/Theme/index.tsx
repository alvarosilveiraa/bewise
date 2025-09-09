"use client";

import { useCallback, useMemo } from "react";
import { ThemeModeEnum } from "@bewise/common/enums/ThemeMode";
import { ThemeProviderProps } from "./Props";
import { ThemeContext } from "./ThemeContext";
import { useThemeMode } from "./useThemeMode";

export const ThemeProvider = ({
  mode = ThemeModeEnum.Light,
  children,
}: ThemeProviderProps) => {
  const { themeMode, setThemeMode } = useThemeMode(mode);
  const inverseThemeMode = useMemo(
    () =>
      ({
        [ThemeModeEnum.Light]: ThemeModeEnum.Dark,
        [ThemeModeEnum.Dark]: ThemeModeEnum.Light,
      })[themeMode],
    [themeMode],
  );

  const toggleThemeMode = useCallback(() => {
    setThemeMode(inverseThemeMode);
  }, [inverseThemeMode]);

  return (
    <ThemeContext.Provider
      value={{ themeMode, inverseThemeMode, setThemeMode, toggleThemeMode }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
