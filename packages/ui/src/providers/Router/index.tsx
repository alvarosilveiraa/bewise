"use client";

import { Suspense, useCallback, useMemo } from "react";
import { Box } from "@bewise/ui/components/Box";
import { Text } from "@bewise/ui/components/Text";
import { RootLayout } from "@bewise/ui/layouts/Root";
import { AboutUsPage } from "@bewise/ui/pages/AboutUs";
import { HomePage } from "@bewise/ui/pages/Home";
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

// TODO: props
const NotFoundPage = () => (
  <Box display="flex" flex={1} items="center" justify="center" w="100%" p={32}>
    <Text>404 | Not found</Text>
  </Box>
);

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

  const matchPath = useCallback((routePath: string, pathname: string) => {
    const routeSegments = routePath.split("/").filter(Boolean);
    const pathSegments = pathname.split("/").filter(Boolean);
    if (routeSegments.length !== pathSegments.length) return { matched: false };

    const params: Record<string, string> = {};
    for (let i = 0; i < routeSegments.length; i++) {
      const rSeg = routeSegments[i];
      const pSeg = pathSegments[i];

      if (rSeg.startsWith(":")) params[rSeg.slice(1)] = pSeg;
      else if (rSeg !== pSeg) return { matched: false };
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
