import chroma from "chroma-js";
import { Color } from "../type/Color";

export const colorContrast = (
  hex: Color,
  { light = "#ffffff", dark = "#000000" }: { light?: Color; dark?: Color } = {},
) => {
  const color = chroma(hex);
  const luminance = color.luminance();
  const blackLuminance = 0.05;
  const whiteLuminance = 1.05;
  const lumianceAdjust = 0.05;
  const contrastWithBlack = (luminance + lumianceAdjust) / blackLuminance;
  const contrastWithWhite = whiteLuminance / (luminance + lumianceAdjust);
  const minContrastRatio = 4.5;
  if (contrastWithBlack > contrastWithWhite)
    return contrastWithBlack >= minContrastRatio ? dark : light;
  return contrastWithWhite >= minContrastRatio ? light : dark;
};
