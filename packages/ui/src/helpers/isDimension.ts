import { isNumber, isString } from "lodash";

export const isDimension = (value: unknown) =>
  isNumber(value) || (isString(value) && !!value);
