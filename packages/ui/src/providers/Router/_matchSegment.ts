export const _matchSegment = (routePath: string, segment: string) => {
  if (!routePath) return segment === "";
  if (routePath.startsWith(":")) return true;
  return routePath.toLowerCase() === segment.toLowerCase();
};
