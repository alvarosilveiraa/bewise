import { isNumber } from "lodash";

export const paddingHorizontalMapper = (paddingHorizontal?: unknown) => {
  if (!isNumber(paddingHorizontal)) return;
  return { paddingLeft: paddingHorizontal, paddingRight: paddingHorizontal };
};
