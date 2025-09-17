import { isString } from "lodash";

export const borderColorMapper = (borderColor?: unknown) => {
  if (!borderColor || !isString(borderColor)) return;
  return {
    borderTopColor: borderColor,
    borderLeftColor: borderColor,
    borderRightColor: borderColor,
    borderBottomColor: borderColor,
  };
};
