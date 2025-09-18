import { isString } from "lodash";

// TODO:
export const backgroundImageMapper = (backgroundImage?: unknown) => {
  if (!backgroundImage && !isString(backgroundImage)) return;
  return {};
};
