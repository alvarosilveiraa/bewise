"use client";

import { usePathname } from "@bewise/ui/hooks/usePathname";
import { Route } from "./Props";
import { matchRoute } from "./_matchRoute";
import { _splitPath } from "./_splitPath";

export const _useRouterRoute = (routes: Route[]) => {
  const pathname = usePathname();
  const segments = _splitPath(pathname);

  return matchRoute(routes, segments);
};
