"use client";

import { ThemeModeEnum } from "@bewise/common/enums/ThemeMode";
import { Accordion } from "@bewise/ui/components/Accordion";
import { Box } from "@bewise/ui/components/Box";
import { Button } from "@bewise/ui/components/Button";
import { Center } from "@bewise/ui/components/Center";
import { Container } from "@bewise/ui/components/Container";
import { Divider } from "@bewise/ui/components/Divider";
import { Grid } from "@bewise/ui/components/Grid";
import { Icon } from "@bewise/ui/components/Icon";
import { IconName } from "@bewise/ui/components/Icon/Props";
import { Image } from "@bewise/ui/components/Image";
import { Link } from "@bewise/ui/components/Link";
import { Navigate } from "@bewise/ui/components/Navigate";
import { Scroll } from "@bewise/ui/components/Scroll";
import { Text } from "@bewise/ui/components/Text";
import { useSafeArea } from "@bewise/ui/hooks/useSafeArea";
import { useBreakpointContext } from "@bewise/ui/providers/Breakpoint/useContext";
import { useThemeContext } from "@bewise/ui/providers/Theme/useContext";

export const HomePage = () => {
  const safeArea = useSafeArea();
  const { themeMode, toggleThemeMode } = useThemeContext();
  const { setupBreakpoint } = useBreakpointContext();
  const { select, eq } = setupBreakpoint({
    section1: { max: 850 },
  });

  return (
    <>
      <Container
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
            w={32}
            h={32}
            src="https://api.bewise.app/storage/assets/icon.png"
            hidden={!eq("mobile")}
          />
          <Image
            w={80}
            h={17}
            src={
              themeMode === ThemeModeEnum.Light
                ? "https://api.bewise.app/storage/assets/logo-light.svg"
                : "https://api.bewise.app/storage/assets/logo-dark.svg"
            }
            hidden={eq("mobile")}
          />
        </Box>
        <Box display="flex" fDir="row" items="center" gap={12}>
          <Button schema="primary" hover={{ transform: [{ scale: 1.04 }] }}>
            Get a demo
          </Button>
          <Button
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
        items="center"
        justify="center"
        gap={64}
        bg="$background"
      >
        <Box display="flex" w="100%">
          <Container px={32} py={96}>
            <Box
              display="flex"
              fDir="row"
              fWrap="wrap"
              items="center"
              w="100%"
              gap={32}
            >
              <Box
                display="flex"
                flex={1}
                items={select({ mobile: "center" }, "flex-start")}
                gap={24}
                minW={select({ section1: undefined }, 400)}
              >
                <Text
                  bg="$primary/0.2"
                  bw={1}
                  bc="$primary/0.6"
                  bs="solid"
                  py={4}
                  px={6}
                  radius={6}
                  fontSize={12}
                  fontWeight="600"
                  textAlign={select({ mobile: "center" }, "left")}
                >
                  Complete Restaurant Solutions
                </Text>
                <Text
                  as="h1"
                  fontSize={select({
                    xs: 24,
                    sm: 32,
                    md: 44,
                    lg: 52,
                    xl: 64,
                  })}
                  textAlign={select({ mobile: "center" }, "left")}
                  lineHeight={1}
                >
                  Your{" "}
                  <Text
                    as="span"
                    fontSize={select({
                      xs: 24,
                      sm: 32,
                      md: 44,
                      lg: 52,
                      xl: 64,
                    })}
                    fontWeight="$h1"
                    textAlign={select({ mobile: "center" }, "left")}
                    color="$accent.800"
                    lineHeight={1}
                  >
                    all-in-one
                  </Text>{" "}
                  restaurant & delivery solutions
                </Text>
                <Text
                  fontFamily="Ubuntu"
                  fontSize={select({
                    mobile: 16,
                    tablet: 18,
                    desktop: 22,
                  })}
                  textAlign={select({ mobile: "center" }, "left")}
                  lineHeight={1.6}
                  color="$foreground.100"
                  maxW={720}
                >
                  Streamline operations, boost efficiency, and enhance customer
                  satisfaction with our integrated suite of restaurant
                  management tools. From mobile ordering to kitchen displays,
                  we've got you covered.
                </Text>
                <Button
                  schema="primary"
                  size={select({
                    mobile: "md",
                    tablet: "lg",
                    desktop: "lg",
                  })}
                  w={select({ mobile: "100%" }, "auto")}
                  hover={{ transform: [{ scale: 1.04 }] }}
                >
                  Schedule Demo
                </Button>
              </Box>
              <Image
                w={select({ section1: "100%" }, 340)}
                h={280}
                radius={12}
                src="https://api.bewise.app/storage/assets/all-in-one.webp"
              />
            </Box>
          </Container>

          <Divider />

          <Container gap={32} px={32} py={96}>
            <Center gap={12}>
              <Text
                as="h2"
                fontSize={select({
                  mobile: 24,
                  tablet: 28,
                  desktop: 32,
                })}
                textAlign="center"
              >
                Complete Suite of Restaurant Solutions
              </Text>
              <Text
                fontFamily="Ubuntu"
                fontSize={select({
                  mobile: 16,
                  tablet: 18,
                  desktop: 20,
                })}
                fontWeight="400"
                lineHeight={1.4}
                textAlign="center"
                color="$foreground.100"
                maxW={600}
              >
                Integrated products designed to optimize every aspect of your
                restaurant operations
              </Text>
            </Center>
            <Grid
              cols={select({
                mobile: 1,
                tablet: 2,
                desktop: 3,
              })}
              data={[
                {
                  icon: "Smartphone",
                  title: "Branded Mobile App",
                  description:
                    "iOS & Android apps with complete ordering functionality",
                  checkList: [
                    "Menu browsing & online ordering",
                    "Delivery & pickup scheduling",
                    "Secure payment processing",
                  ],
                },
                {
                  icon: "Monitor",
                  title: "Kitchen Display App",
                  description:
                    "Real-time order management for kitchen operations",
                  checkList: [
                    "Order progress tracking",
                    "Live customer notifications",
                    "Delivery status updates",
                  ],
                },
                {
                  icon: "Globe",
                  title: "Ordering Website",
                  description:
                    "Responsive web platform with QR code integration",
                  checkList: [
                    "Mobile-responsive design",
                    "QR code table ordering",
                    "Consistent app experience",
                  ],
                },
                {
                  icon: "ChartColumn",
                  title: "Admin Dashboard",
                  description:
                    "Comprehensive management and analytics platform",
                  checkList: [
                    "Product & brand management",
                    "Detailed sales reports",
                    "Customer insights",
                  ],
                },
                {
                  icon: "Tablet",
                  title: "Self-Service Kiosk",
                  description: "In-store ordering via vertical format kiosk",
                  checkList: [
                    "Touch-screen ordering",
                    "Eat-in order placement",
                    "Reduced wait times",
                  ],
                },
                {
                  icon: "ChefHat",
                  title: "Desktop POS App",
                  description: "Counter ordering for Windows & macOS",
                  checkList: [
                    "Staff order registration",
                    "Cross-platform support",
                    "Integrated payment processing",
                  ],
                },
              ]}
              Item={({ item }) => (
                <Box
                  display="flex"
                  items={select({ mobile: "center" }, "flex-start")}
                  gap={24}
                  w="100%"
                  p={24}
                  bg="$background.50"
                  bw={1}
                  bc="$divider"
                  bs="solid"
                  radius={6}
                >
                  <Box display="flex" p={12} bg="$default/0.4" radius={6}>
                    <Icon name={item.icon as IconName} size={24} />
                  </Box>
                  <Box display="flex" gap={12}>
                    <Text
                      as="h3"
                      textAlign={select({ mobile: "center" }, "left")}
                    >
                      {item.title}
                    </Text>
                    <Text
                      fontFamily="Ubuntu"
                      fontSize={14}
                      textAlign={select({ mobile: "center" }, "left")}
                      lineHeight={1.4}
                      color="$foreground.100"
                    >
                      {item.description}
                    </Text>
                  </Box>
                  <Box display="flex" flex={1} gap={12}>
                    {item.checkList.map((checkItem, index) => (
                      <Box
                        key={`check-item-${index}`}
                        display="flex"
                        fDir="row"
                        gap={6}
                      >
                        <Icon name="CircleCheckBig" color="$success" />
                        <Text
                          as="span"
                          fontFamily="Ubuntu"
                          fontSize={14}
                          textAlign={select({ mobile: "center" }, "left")}
                          color="$foreground.100"
                        >
                          {checkItem}
                        </Text>
                      </Box>
                    ))}
                  </Box>
                  <Navigate w={select({ mobile: "auto" }, "100%")} to="/other">
                    <Button
                      schema="secondary"
                      variant="flat"
                      w={select({ mobile: "auto" }, "100%")}
                      bg="$secondary/0.1"
                      bw={1}
                      bc="$secondary/0.4"
                      bs="solid"
                      color="$secondary"
                      endIcon={{ name: "ArrowRight" }}
                      hover={{ transform: [{ scale: 1.04 }] }}
                    >
                      Learn more
                    </Button>
                  </Navigate>
                </Box>
              )}
            />
          </Container>

          <Divider />

          <Container gap={32} px={32} py={96}>
            <Center gap={12}>
              <Text
                as="h2"
                fontSize={select({
                  mobile: 24,
                  tablet: 28,
                  desktop: 32,
                })}
                textAlign="center"
              >
                Why Choose BeWise?
              </Text>
              <Text
                fontFamily="Ubuntu"
                fontSize={select({
                  mobile: 16,
                  tablet: 18,
                  desktop: 20,
                })}
                fontWeight="400"
                lineHeight={1.4}
                textAlign="center"
                color="$foreground.100"
                maxW={600}
              >
                Transform your restaurant operations with our comprehensive
                suite of integrated solutions
              </Text>
            </Center>
            <Grid
              cols={select({
                mobile: 2,
                tablet: 2,
                desktop: 4,
              })}
              data={[
                {
                  icon: "Clock",
                  title: "Streamlined Operations",
                  description:
                    "Reduce order processing time and increase efficiency",
                },
                {
                  icon: "Users",
                  title: "Enhanced Customer Experience",
                  description: "Seamless ordering across all touchpoints",
                },
                {
                  icon: "ChartColumn",
                  title: "Growth Analytics",
                  description: "Detailed insights to drive business decisions",
                },
                {
                  icon: "Star",
                  title: "Complete Branding",
                  description:
                    "Fully customized experience across all platforms",
                },
              ]}
              Item={({ item }) => (
                <Box display="flex" items="center" gap={24} w="100%">
                  <Box display="flex" p={12} bg="$default/0.4" radius={20}>
                    <Icon name={item.icon as IconName} size={24} />
                  </Box>
                  <Box display="flex" gap={12}>
                    <Text as="h3" textAlign="center">
                      {item.title}
                    </Text>
                    <Text
                      fontFamily="Ubuntu"
                      fontSize={14}
                      textAlign="center"
                      lineHeight={1.4}
                      color="$foreground.100"
                    >
                      {item.description}
                    </Text>
                  </Box>
                </Box>
              )}
            />
          </Container>

          <Divider />

          <Container px={32} py={96}>
            <Center gap={24}>
              <Center gap={12}>
                <Text
                  as="h2"
                  fontSize={select({
                    mobile: 24,
                    tablet: 28,
                    desktop: 32,
                  })}
                  textAlign="center"
                >
                  Trusted by Restaurants around the World
                </Text>
                <Text
                  fontFamily="Ubuntu"
                  fontSize={select({
                    mobile: 16,
                    tablet: 18,
                    desktop: 20,
                  })}
                  fontWeight="400"
                  lineHeight={1.4}
                  textAlign="center"
                  color="$foreground.100"
                  maxW={600}
                >
                  See some restaurants that BeWise has transformed operations
                  worldwide
                </Text>
              </Center>
              <Box
                display="flex"
                fDir={select({ mobile: "column" }, "row")}
                items="center"
                gap={select({ mobile: 16 }, 32)}
              >
                <Navigate
                  to="https://www.lennoxs.app"
                  transition={{ duration: 200 }}
                  hover={{ transform: [{ scale: 1.04 }] }}
                  blank
                >
                  <Image
                    w={87}
                    h={19}
                    src="https://api.bewise.app/storage/assets/lennoxs.svg"
                  />
                </Navigate>
                <Navigate
                  to="https://www.innout.app"
                  transition={{ duration: 200 }}
                  hover={{ transform: [{ scale: 1.04 }] }}
                  blank
                >
                  <Image
                    w={126}
                    h={26}
                    resizeMode="contain"
                    src="https://api.bewise.app/storage/assets/innout.svg"
                  />
                </Navigate>
              </Box>
            </Center>
          </Container>

          <Divider />

          <Container maxW={800} px={32} py={96}>
            <Box display="flex" gap={32}>
              <Text
                as="h2"
                fontSize={select({
                  mobile: 24,
                  tablet: 28,
                  desktop: 32,
                })}
                textAlign="center"
              >
                Frequently Asked Questions
              </Text>
              <Accordion
                data={[
                  {
                    title: "What is BeWise?",
                    content:
                      "We are a Brazilian technology company with a highly skilled team of front-end, back-end, and full-stack developers, along with an expert UI/UX Product Designer dedicated to creating seamless and engaging digital experiences. We help you take control of your brand, customer relationships, and profits — without relying on third-party platforms.",
                  },
                  {
                    title: "How is BeWise different from others players?",
                    content:
                      "Unlike those platforms, we don’t take a percentage of your sales. With BeWise, you pay a flat monthly fee and keep 100% of your order revenue. You also get full access to your customer data and complete brand control.",
                  },
                  {
                    title: "Do I need to be tech-savvy to use it?",
                    content:
                      "Not at all. We handle all the technical parts for you. You’ll receive training and support to manage your app and website easily.",
                  },
                  {
                    title: "What payment methods are supported?",
                    content:
                      "We integrate secure payment options including card, cash, vouchers, Apple Pay, and Google Pay.",
                  },
                  {
                    title: "What if I have multiple restaurant locations?",
                    content:
                      "We support multi-branch setups! Each location can be managed individually within the same platform.",
                  },
                ]}
                title={item => item.title}
                content={item => item.content}
              />
            </Box>
          </Container>

          <Container px={32} py={64} bg="$accent.50">
            <Center gap={32}>
              <Box display="flex" gap={12}>
                <Text
                  as="h2"
                  fontSize={select({
                    mobile: 24,
                    tablet: 28,
                    desktop: 32,
                  })}
                  textAlign="center"
                >
                  Ready to Transform Your Restaurant?
                </Text>
                <Text
                  fontFamily="Ubuntu"
                  fontSize={select({
                    mobile: 16,
                    tablet: 18,
                    desktop: 20,
                  })}
                  fontWeight="400"
                  lineHeight={1.4}
                  textAlign="center"
                  color="$foreground.600"
                  maxW={600}
                >
                  Get started with BeWise today and see the difference our
                  integrated solutions can make
                </Text>
              </Box>
              <Button
                schema="foreground"
                size={select({
                  mobile: "md",
                  tablet: "lg",
                  desktop: "lg",
                })}
                hover={{ transform: [{ scale: 1.04 }] }}
              >
                Schedule Demo
              </Button>
            </Center>
          </Container>

          <Container
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
                    src:
                      themeMode === ThemeModeEnum.Light
                        ? "https://api.bewise.app/storage/assets/logo-light.svg"
                        : "https://api.bewise.app/storage/assets/logo-dark.svg",
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
                      {
                        to: "/blog",
                        label: "Blog",
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
                    <Image w={80} h={17} src={item.src} hidden={!item.src} />
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
                      <Text as="h4" hidden={!item.section}>
                        {item.section}
                      </Text>
                      <Box display="flex" gap={12}>
                        {item.links?.map(({ to, label }, index) => (
                          <Link
                            key={`link-${index}`}
                            fontSize={12}
                            opacity="$hover"
                            textDecorationLine="none"
                            transition={{ duration: 200 }}
                            hover={{ opacity: 1 }}
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
                  <Button
                    variant="ghost"
                    size="lg"
                    icon={{
                      name: "Instagram",
                      color: "$background",
                      fill: "$foreground",
                    }}
                  />
                  <Button
                    variant="ghost"
                    size="lg"
                    icon={{
                      name: "Twitter",
                      color: "$background",
                      fill: "$foreground",
                      size: 20,
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
      </Scroll>
    </>
  );
};
