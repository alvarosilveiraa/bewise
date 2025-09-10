import { ThemeModeEnum } from "@bewise/common/enums/ThemeMode";
import { ThemeColors } from "@bewise/ui/type/ThemeColors";
import { ThemeLayout } from "@bewise/ui/type/ThemeLayout";

export type ThemeContextValue = {
  themeMode: ThemeModeEnum;
  inverseThemeMode: ThemeModeEnum;
  themeColors: ThemeColors & { light: ThemeColors; dark: ThemeColors };
  themeLayout: ThemeLayout;
  setThemeMode: (themeMode: ThemeModeEnum) => void;
  toggleThemeMode: () => void;
};
