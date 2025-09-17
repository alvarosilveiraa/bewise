import { isObject } from "lodash";

export const transformMapper = (transform?: unknown) => {
  if (!transform || !isObject(transform)) return;
  return { transform };
};
