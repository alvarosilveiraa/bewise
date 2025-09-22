import { FC, PropsWithChildren } from "react";
import { MatchRoute, Route } from "./Props";
import { _matchSegment } from "./_matchSegment";
import { _splitPath } from "./_splitPath";

export const matchRoute = (
  routes: Route[],
  segments: string[],
  path = "",
  layouts: FC<PropsWithChildren>[] = [],
  params: Record<string, string> = {},
  index = 0,
): MatchRoute | null => {
  for (const route of routes) {
    const routeSegments = _splitPath(route.path);
    const nextParams = { ...params };

    let i = 0;
    let matched = true;
    while (i < routeSegments.length && index + i < segments.length) {
      const routeSegment = routeSegments[i];
      const segment = segments[index + i];
      if (routeSegment.startsWith(":"))
        nextParams[routeSegment.slice(1)] = segment;
      else if (!_matchSegment(routeSegment, segment)) {
        matched = false;
        break;
      }
      i++;
    }
    if (!matched) continue;

    const consumed = i;
    const nextIndex = index + consumed;
    let currentPath = [path, routeSegments.join("/")].filter(Boolean).join("/");
    currentPath = "/" + currentPath.replace(/^\/+/, "").replace(/\/+$/, "");

    if (route.element && !route.children && nextIndex === segments.length) {
      return {
        path: currentPath,
        params: nextParams,
        layouts,
        page: route.element,
      };
    }

    if (!route.element && route.children) {
      const childMatch = matchRoute(
        route.children,
        segments,
        currentPath,
        layouts,
        nextParams,
        nextIndex,
      );
      if (childMatch) return childMatch;
    }

    if (route.element && route.children) {
      const newLayouts = [...layouts, route.element];
      const childMatch = matchRoute(
        route.children,
        segments,
        currentPath,
        newLayouts,
        nextParams,
        nextIndex,
      );
      if (childMatch) return childMatch;

      if (nextIndex === segments.length) {
        return {
          path: currentPath,
          params: nextParams,
          layouts: newLayouts,
          page: undefined,
        };
      }
    }
  }

  return null;
};
