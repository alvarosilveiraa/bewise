import { isNumber } from "lodash";

export const shadowMapper = (shadow?: unknown, opacity = 0.3) => {
  if (!isNumber(shadow)) return;
  return {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: shadow * 0.5,
    },
    shadowOpacity: opacity,
    shadowRadius: shadow * 0.8,
    elevation: shadow,
  };
};
