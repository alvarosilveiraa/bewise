import { isNumber } from "lodash";

export const marginHorizontalMapper = (marginHorizontal?: unknown) => {
  if (!isNumber(marginHorizontal)) return;
  return { marginLeft: marginHorizontal, marginRight: marginHorizontal };
};
