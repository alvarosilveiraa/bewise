import { isNumber } from "lodash";

export const borderRadiusMapper = (borderRadius?: unknown) => {
  if (!isNumber(borderRadius)) return;
  return {
    borderTopLeftRadius: borderRadius,
    borderTopRightRadius: borderRadius,
    borderBottomLeftRadius: borderRadius,
    borderBottomRightRadius: borderRadius,
  };
};
