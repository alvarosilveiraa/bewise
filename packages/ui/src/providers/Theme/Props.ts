import { PropsWithChildren } from "react";
import { ThemeModeEnum } from "@bewise/common/enums/ThemeMode";

export type ThemeProviderProps = PropsWithChildren & {
  mode?: ThemeModeEnum;
};
