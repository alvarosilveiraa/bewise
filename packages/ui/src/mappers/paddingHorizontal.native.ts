import { isNumber } from "lodash";

export const paddingHorizontalMapper = (paddingHorizontal?: unknown) => {
  if (!paddingHorizontal || !isNumber(paddingHorizontal)) return;
  return { paddingHorizontal };
};
