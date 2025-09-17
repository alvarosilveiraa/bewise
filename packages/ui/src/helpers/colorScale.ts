import { ThemeModeEnum } from "@bewise/common/enums/ThemeMode";
import chroma from "chroma-js";
import { Color } from "../type/Color";
import { ThemeColor } from "../type/ThemeColor";
import { colorContrast } from "./colorContrast";

export const colorScale = (
  mode: ThemeModeEnum,
  hex: Color,
  foreground?: Color,
) => {
  const color = chroma(hex);
  const scale = chroma
    .scale(
      {
        [ThemeModeEnum.Light]: [color.brighten(1.6), color.darken(1.6)],
        [ThemeModeEnum.Dark]: [color.darken(1.6), color.brighten(1.6)],
      }[mode],
    )
    .mode("lab");
  const themeColor: ThemeColor = {
    foreground: foreground || colorContrast(hex),
    DEFAULT: hex,
    [50]: scale(0.1).hex() as Color,
    [100]: scale(0.2).hex() as Color,
    [200]: scale(0.3).hex() as Color,
    [300]: scale(0.4).hex() as Color,
    [400]: scale(0.5).hex() as Color,
    [500]: scale(0.6).hex() as Color,
    [600]: scale(0.7).hex() as Color,
    [700]: scale(0.8).hex() as Color,
    [800]: scale(0.9).hex() as Color,
    [900]: scale(1.0).hex() as Color,
  };
  return themeColor;
};
