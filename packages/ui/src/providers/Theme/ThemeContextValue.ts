import { ThemeModeEnum } from "@bewise/common/enums/ThemeMode";

export type ThemeContextValue = {
  themeMode: ThemeModeEnum;
  inverseThemeMode: ThemeModeEnum;
  setThemeMode: (themeMode: ThemeModeEnum) => void;
  toggleThemeMode: () => void;
};
