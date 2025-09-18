import { isString } from "lodash";

export const backgroundImageMapper = (backgroundImage?: unknown) => {
  if (!backgroundImage && !isString(backgroundImage)) return;
  return {
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: "no-repeat",
  };
};
