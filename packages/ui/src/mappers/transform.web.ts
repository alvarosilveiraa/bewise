import { isObject } from "lodash";

export const transformMapper = (transform?: unknown) => {
  if (!transform || !isObject(transform)) return;
  const result: string[] = [];
  (transform as Record<string, unknown>[]).forEach(t => {
    if (t.perspective) result.push(`perspective(${t.perspective}cm)`);
    if (t.rotate) result.push(`rotate(${t.rotate})`);
    if (t.rotateX) result.push(`rotateX(${t.rotateX})`);
    if (t.rotateY) result.push(`rotateY(${t.rotateY})`);
    if (t.rotateZ) result.push(`rotateZ(${t.rotateZ})`);
    if (t.scale !== undefined) result.push(`scale(${t.scale})`);
    if (t.scaleX !== undefined) result.push(`scaleX(${t.scaleX})`);
    if (t.scaleY !== undefined) result.push(`scaleY(${t.scaleY})`);
    if (t.translateX !== undefined)
      result.push(`translateX(${t.translateX}px)`);
    if (t.translateY !== undefined)
      result.push(`translateY(${t.translateY}px)`);
    if (t.matrix) result.push(`matrix(${(t.matrix as number[]).join(",")})`);
    if (t.skewX) result.push(`skewX(${t.skewX})`);
    if (t.skewY) result.push(`skewY(${t.skewY})`);
  });
  if (!result.length) return;
  return { transform: result.join(" ") };
};
