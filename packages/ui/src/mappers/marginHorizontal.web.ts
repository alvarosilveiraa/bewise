import { isNumber } from "lodash";

export const marginHorizontalMapper = (marginHorizontal?: unknown) => {
  if (!marginHorizontal || !isNumber(marginHorizontal)) return;
  return { marginLeft: marginHorizontal, marginRight: marginHorizontal };
};
