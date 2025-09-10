import { PropsWithChildren } from "react";
import { ThemeModeEnum } from "@bewise/common/enums/ThemeMode";
import { ThemeColorsConfig } from "@bewise/ui/type/ThemeColorsConfig";
import { ThemeLayout } from "@bewise/ui/type/ThemeLayout";

export type ThemeProviderProps = PropsWithChildren & {
  mode?: ThemeModeEnum;
  light?: ThemeColorsConfig;
  dark?: ThemeColorsConfig;
  layout?: Partial<ThemeLayout>;
};

export type _UseThemeColorsProps = {
  mode: ThemeModeEnum;
  light?: ThemeColorsConfig;
  dark?: ThemeColorsConfig;
};
