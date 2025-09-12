export const borderColorMapper = (borderColor?: unknown) => {
  if (!borderColor) return;
  return {
    borderTopColor: borderColor,
    borderLeftColor: borderColor,
    borderRightColor: borderColor,
    borderBottomColor: borderColor,
  };
};
