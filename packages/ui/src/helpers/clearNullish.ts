import { isNull, isUndefined, omitBy } from "lodash";

export const clearNullish = (style: Record<string, unknown>) =>
  omitBy(style, value => isNull(value) || isUndefined(value));
