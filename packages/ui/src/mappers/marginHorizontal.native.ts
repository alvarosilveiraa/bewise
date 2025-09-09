import { isNumber } from "lodash";

export const marginHorizontalMapper = (marginHorizontal?: unknown) => {
  if (!marginHorizontal || !isNumber(marginHorizontal)) return;
  return { marginHorizontal };
};
