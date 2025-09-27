import { RecordUnknown } from "@bewise/common/types/RecordUnknown";
import { isNull, isUndefined, omitBy } from "lodash";

export const clearNullish = (style: RecordUnknown) =>
  omitBy(style, value => isNull(value) || isUndefined(value));
