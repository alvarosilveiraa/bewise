import { isArray } from "lodash";

export const colorGradientMapper = (colorGradient?: unknown) => {
  if (!colorGradient || !isArray(colorGradient)) return;
  return {};
};
