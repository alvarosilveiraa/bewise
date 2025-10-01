import { isArray } from "lodash";

export const colorGradientMapper = (colorGradient?: unknown) => {
  if (!colorGradient || !isArray(colorGradient)) return;
  return {
    background: `linear-gradient(90deg, ${colorGradient.join(", ")}) text`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };
};
