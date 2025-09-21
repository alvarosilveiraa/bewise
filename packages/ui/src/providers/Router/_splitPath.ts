export const _splitPath = (pathname: string) =>
  pathname
    .replace(/^\/+|\/+$/g, "")
    .split("/")
    .filter(Boolean);
