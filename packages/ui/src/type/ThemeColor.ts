import { Color } from "./Color";
import { ThemeColorScale } from "./ThemeColorScale";

export type ThemeColor = ThemeColorScale & {
  foreground: Color;
  DEFAULT: Color;
};
