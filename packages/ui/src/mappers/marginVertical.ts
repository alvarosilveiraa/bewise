import { isNumber } from "lodash";

export const marginVerticalMapper = (marginVertical?: unknown) => {
  if (!isNumber(marginVertical)) return;
  return { marginTop: marginVertical, marginBottom: marginVertical };
};
