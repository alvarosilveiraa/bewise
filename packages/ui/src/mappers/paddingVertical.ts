import { isNumber } from "lodash";

export const paddingVerticalMapper = (paddingVertical?: unknown) => {
  if (!isNumber(paddingVertical)) return;
  return { paddingTop: paddingVertical, paddingBottom: paddingVertical };
};
