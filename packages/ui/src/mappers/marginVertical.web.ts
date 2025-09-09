import { isNumber } from "lodash";

export const marginVerticalMapper = (marginVertical?: unknown) => {
  if (!marginVertical || !isNumber(marginVertical)) return;
  return { marginTop: marginVertical, marginBottom: marginVertical };
};
