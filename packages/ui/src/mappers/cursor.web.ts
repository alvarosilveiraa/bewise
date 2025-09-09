import { isString } from "lodash";

export const cursorMapper = (cursor?: unknown) => {
  if (!cursor || !isString(cursor)) return;
  return { cursor };
};
