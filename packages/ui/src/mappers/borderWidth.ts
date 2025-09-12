import { isNumber } from "lodash";

export const borderWidthMapper = (borderWidth?: unknown) => {
  if (!isNumber(borderWidth)) return;
  return {
    borderTopWidth: borderWidth,
    borderLeftWidth: borderWidth,
    borderRightWidth: borderWidth,
    borderBottomWidth: borderWidth,
  };
};
