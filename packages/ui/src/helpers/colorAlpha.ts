export const colorAlpha = (alpha: number) => {
  const hex = Math.round(alpha * 255).toString(16);
  return hex.length === 1 ? "0" + hex : hex;
};
