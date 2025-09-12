import { isNumber } from "lodash";

export const shadowMapper = (shadow?: unknown, opacity = 0.3) => {
  if (!isNumber(shadow)) return;
  return {
    boxShadow: `rgba(0, 0, 0, ${opacity}) ${shadow * 0.5}px ${shadow * 0.8}px ${shadow}px`,
  };
};
