import { ReactNode } from "react";
import { MatchPath, Route } from "./Props";

export type RouterContextValue = {
  routes: Route[];
  path?: string;
  params?: Record<string, string>;
  page: ReactNode;
  matchPath: (routePath: string, pathname: string) => MatchPath;
};
