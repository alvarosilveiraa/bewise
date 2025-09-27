"use client";

import { PropsWithChildren, useMemo } from "react";
import { ThemeModeEnum } from "@bewise/common/enums/ThemeMode";
import { Box } from "@bewise/ui/components/Box";
import { Button } from "@bewise/ui/components/Button";
import { Container } from "@bewise/ui/components/Container";
import { Divider } from "@bewise/ui/components/Divider";
import { Grid } from "@bewise/ui/components/Grid";
import { Image } from "@bewise/ui/components/Image";
import { Link } from "@bewise/ui/components/Link";
import { Navigate } from "@bewise/ui/components/Navigate";
import { Scroll } from "@bewise/ui/components/Scroll";
import { Text } from "@bewise/ui/components/Text";
import { PlatformEnum } from "@bewise/ui/enums/Platform";
import { useSafeArea } from "@bewise/ui/hooks/useSafeArea";
import { useBreakpointContext } from "@bewise/ui/providers/Breakpoint/useContext";
import { useRouterContext } from "@bewise/ui/providers/Router/useContext";
import { useThemeContext } from "@bewise/ui/providers/Theme/useContext";

export const RootLayout = ({ children }: PropsWithChildren) => {
  const safeArea = useSafeArea();
  const { themeMode, inverseThemeMode, toggleThemeMode } = useThemeContext();
  const { path, matchPath } = useRouterContext();
  const { setupBreakpoint } = useBreakpointContext();
  const { select, eq } = setupBreakpoint();
  const iconSrc = useMemo(() => {
    if (themeMode === ThemeModeEnum.Light)
      return "https://api.bewise.app/storage/assets/icon-light.png";
    return "https://api.bewise.app/storage/assets/icon-dark.png";
  }, [themeMode]);
  const logoSrc = useMemo(() => {
    if (themeMode === ThemeModeEnum.Light)
      return "https://api.bewise.app/storage/assets/logo-light.png";
    return "https://api.bewise.app/storage/assets/logo-dark.png";
  }, [themeMode]);

  return (
    <>
      <Container
        as="header"
        fDir="row"
        items="center"
        justify="space-between"
        gap={24}
        pt={safeArea.top ? safeArea.top + 6 : 12}
        pb={12}
        px={32}
        bg="$background.50"
      >
        <Box display="flex" fDir="row" items="center" gap={8}>
          <Image
            alt="Icon"
            w={32}
            h={32}
            src={iconSrc}
            hidden={!eq("mobile")}
          />
          <Image alt="Logo" w={80} h={17} src={logoSrc} hidden={eq("mobile")} />
        </Box>
        <Box
          display="flex"
          fDir="row"
          items="center"
          gap={24}
          hidden={select({ desktop: false }, true)}
        >
          {[
            {
              to: "/",
              label: "Solutions",
            },
            {
              to: "/pricing",
              label: "Pricing",
            },
            {
              to: "/about-us",
              label: "About us",
            },
          ].map(({ to, label }, index) => {
            const current = path ? matchPath(path, to).matched : false;
            return (
              <Link
                key={`link-${index}`}
                ariaCurrent={current ? "page" : undefined}
                opacity={current ? undefined : 0.6}
                fontWeight="600"
                textDecorationLine="none"
                hover={{ opacity: current ? 0.6 : 1 }}
                transition={{ duration: 200, platforms: [PlatformEnum.Web] }}
                to={to}
              >
                {label}
              </Link>
            );
          })}
        </Box>
        <Box display="flex" fDir="row" items="center" gap={12}>
          <Navigate to="https://wa.me/5551999999999" blank>
            <Button schema="primary" hover={{ transform: [{ scale: 1.04 }] }}>
              Get a demo
            </Button>
          </Navigate>
          <Button
            ariaLabel={`Change theme to ${inverseThemeMode}`}
            variant="flat"
            onPress={toggleThemeMode}
            icon={{
              name: themeMode === ThemeModeEnum.Light ? "Moon" : "Sun",
            }}
          />
        </Box>
      </Container>

      <Divider />

      <Scroll
        flex={1}
        bg="$background"
        bgImage={select({
          desktop: "https://api.bewise.app/storage/assets/home.png",
        })}
        bgPosition="center"
        bgResizeMode="cover"
      >
        {children}

        <Container
          as="footer"
          px={32}
          py={96}
          pb={safeArea.bottom ? safeArea.bottom + 96 : undefined}
          bg="$background.50"
        >
          <Box display="flex" gap={32}>
            <Grid
              gap={24}
              cols={select({ mobile: 1 }, 4)}
              data={[
                {
                  alt: "Logo",
                  src: logoSrc,
                  description:
                    "Complete restaurant and delivery systems for the modern food service industry.",
                },
                {
                  section: "Solutions",
                  links: [
                    {
                      to: "/mobile-app",
                      label: "Mobile App",
                    },
                    {
                      to: "/kitchen-display",
                      label: "Kitchen Display",
                    },
                    {
                      to: "/ordering-website",
                      label: "Ordering Website",
                    },
                    {
                      to: "/admin-dashboard",
                      label: "Admin Dashboard",
                    },
                    {
                      to: "/self-service-kiosk",
                      label: "Self-Service Kiosk",
                    },
                    {
                      to: "/desktop-pos",
                      label: "Desktop POS",
                    },
                  ],
                },
                {
                  section: "Support",
                  links: [
                    {
                      to: "/help-center",
                      label: "Help Center",
                    },
                    {
                      to: "/documentation",
                      label: "Documentation",
                    },
                    {
                      to: "/contact-support",
                      label: "Contact Support",
                    },
                    {
                      to: "/system-status",
                      label: "System Status",
                    },
                  ],
                },
                {
                  section: "Legal",
                  links: [
                    {
                      to: "/privacy-policy",
                      label: "Privacy Policy",
                    },
                    {
                      to: "/terms-of-use",
                      label: "Terms of Use",
                    },
                    {
                      to: "/cookie-policy",
                      label: "Cookie Policy",
                    },
                  ],
                },
              ]}
              Item={({ item }) => (
                <Box
                  display="flex"
                  items={select(
                    { mobile: "flex-start" },
                    item.src ? "flex-start" : "flex-end",
                  )}
                  gap={12}
                  w="100%"
                >
                  <Image
                    w={80}
                    h={17}
                    alt={item.alt}
                    src={item.src}
                    hidden={!item.src}
                  />
                  <Text
                    fontFamily="Ubuntu"
                    fontSize={14}
                    fontWeight="400"
                    color="$foreground.100"
                    hidden={!item.description}
                  >
                    {item.description}
                  </Text>
                  <Box display="flex" gap={18}>
                    <Text fontSize={14} hidden={!item.section}>
                      {item.section}
                    </Text>
                    <Box display="flex" gap={12}>
                      {item.links?.map(({ to, label }, index) => (
                        <Link
                          key={`link-${index}`}
                          fontSize={14}
                          opacity="$hover"
                          textDecorationLine="none"
                          hover={{ opacity: 1 }}
                          transition={{
                            duration: 200,
                            platforms: [PlatformEnum.Web],
                          }}
                          to={to}
                          blank
                        >
                          {label}
                        </Link>
                      ))}
                    </Box>
                  </Box>
                </Box>
              )}
            />
            <Divider />
            <Box
              display="flex"
              fDir={select({ mobile: "column" }, "row")}
              items="center"
              justify={select({ mobile: "center" }, "space-between")}
              gap={24}
            >
              <Text
                fontFamily="Ubuntu"
                fontSize={14}
                fontWeight="400"
                textAlign={select({ mobile: "center" }, "left")}
                color="$foreground.100"
              >
                © 2024 BeWise. All rights reserved.
              </Text>
              <Box display="flex" fDir="row" items="center" gap={8}>
                <Navigate to="https://www.instagram.com" blank>
                  <Button
                    ariaLabel="Instagram"
                    variant="ghost"
                    size="lg"
                    icon={{
                      name: "Instagram",
                      color: "$background",
                      fill: "$foreground",
                    }}
                  />
                </Navigate>
                <Navigate to="https://x.com" blank>
                  <Button
                    ariaLabel="Twitter"
                    variant="ghost"
                    size="lg"
                    icon={{
                      name: "Twitter",
                      color: "$background",
                      fill: "$foreground",
                      size: 20,
                    }}
                  />
                </Navigate>
              </Box>
            </Box>
          </Box>
        </Container>
      </Scroll>
    </>
  );
};
