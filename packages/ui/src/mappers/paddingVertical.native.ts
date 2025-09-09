import { isNumber } from "lodash";

export const paddingVerticalMapper = (paddingVertical?: unknown) => {
  if (!paddingVertical || !isNumber(paddingVertical)) return;
  return { paddingVertical };
};
