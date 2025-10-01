import { FC, PropsWithChildren, ReactNode } from "react";

export type Route = {
  path: string;
  element?: FC<PropsWithChildren>;
  children?: Route[];
};

export type MatchRoute = {
  path: string;
  params?: Record<string, string>;
  layouts: FC<PropsWithChildren>[];
  page?: FC<PropsWithChildren>;
};

export type MatchPath = {
  matched: boolean;
  params?: Record<string, string>;
};

export type RouterProviderProps = PropsWithChildren & {
  fallback?: ReactNode;
};
