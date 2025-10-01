"use client";

import { Suspense, useCallback, useMemo } from "react";
import { RootLayout } from "@bewise/ui/layouts/Root";
import { AboutUsPage } from "@bewise/ui/pages/AboutUs";
import { HomePage } from "@bewise/ui/pages/Home";
import { NotFoundPage } from "@bewise/ui/pages/NotFound";
import { PricingPage } from "@bewise/ui/pages/Pricing";
import { Route, RouterProviderProps } from "./Props";
import { _RouterContext } from "./_Context";
import { _useRouterRoute } from "./_useRoute";

// TODO: fetch
const routes: Route[] = [
  {
    path: "/",
    element: RootLayout,
    children: [
      {
        path: "",
        element: HomePage,
      },
      {
        path: "pricing",
        element: PricingPage,
      },
      {
        path: "about-us",
        element: AboutUsPage,
      },
    ],
  },
];

export const RouterProvider = ({ fallback, children }: RouterProviderProps) => {
  const route = _useRouterRoute(routes);
  const Page = useMemo(() => route?.page || NotFoundPage, [route?.page]);
  const page = useMemo(
    () =>
      route?.layouts.reduceRight(
        (child, Layout) => <Layout>{child}</Layout>,
        <Page />,
      ) || <Page />,
    [Page, route?.layouts],
  );

  const matchPath = useCallback((path: string, pathname: string) => {
    const routeSegments = path.split("/").filter(Boolean);
    const pathnameSegments = pathname.split("/").filter(Boolean);
    if (routeSegments.length !== pathnameSegments.length)
      return { matched: false };

    const params: Record<string, string> = {};
    for (let i = 0; i < routeSegments.length; i++) {
      const routeSegment = routeSegments[i];
      const pathnameSegment = pathnameSegments[i];

      if (routeSegment.startsWith(":"))
        params[routeSegment.slice(1)] = pathnameSegment;
      else if (routeSegment !== pathnameSegment) return { matched: false };
    }

    return { matched: true, params };
  }, []);

  return (
    <_RouterContext.Provider
      value={{
        routes,
        path: route?.path,
        params: route?.params,
        page,
        matchPath,
      }}
    >
      <Suspense fallback={fallback}>{children}</Suspense>
    </_RouterContext.Provider>
  );
};
