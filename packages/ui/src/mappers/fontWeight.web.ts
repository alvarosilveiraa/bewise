import { isString } from "lodash";

export const fontWeightMapper = (fontWeight?: unknown) => {
  if (!fontWeight || !isString(fontWeight)) return;
  return { fontWeight };
};
