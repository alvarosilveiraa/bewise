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
  const { themeMode, inverseThemeMode, toggleThemeMode } = useThemeContext();
  const { setupBreakpoint } = useBreakpointContext();
  const { select, eq } = setupBreakpoint({
    section1: { max: 850 },
  });

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
            src="https://api.bewise.app/storage/assets/icon.png"
            hidden={!eq("mobile")}
          />
          <Image
            alt="Logo"
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
        bgImage={select({ desktop: "/home.png" })}
        bgPosition="center"
        bgResizeMode="cover"
      >
        <Box display="flex" w="100%">
          <Container
            as="section"
            ariaLabelledBy="section1-title"
            px={32}
            py={96}
          >
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
                  id="section1-title"
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
                <Navigate
                  w={select({ mobile: "100%" }, "auto")}
                  to="https://wa.me/5551999999999"
                  blank
                >
                  <Button
                    schema="primary"
                    size={select({
                      mobile: "md",
                      tablet: "lg",
                      desktop: "lg",
                    })}
                    w="100%"
                    hover={{ transform: [{ scale: 1.04 }] }}
                  >
                    Schedule Demo
                  </Button>
                </Navigate>
              </Box>
              <Image
                w={select({ section1: "100%" }, 340)}
                h={280}
                radius={12}
                src="https://api.bewise.app/storage/assets/all-in-one.webp"
                priority
              />
            </Box>
          </Container>

          <Divider />

          <Container
            as="section"
            ariaLabelledBy="section2-title"
            gap={32}
            px={32}
            py={96}
          >
            <Center gap={12}>
              <Text
                id="section2-title"
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
                  to: "/mobile-app",
                },
                {
                  icon: "Monitor",
                  title: "Kitchen Display",
                  description:
                    "Real-time order management for kitchen operations",
                  checkList: [
                    "Order progress tracking",
                    "Live customer notifications",
                    "Delivery status updates",
                  ],
                  to: "/kitchen-display",
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
                  to: "/ordering-website",
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
                  to: "/admin-dashboard",
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
                  to: "/self-service-kiosk",
                },
                {
                  icon: "ChefHat",
                  title: "Desktop POS",
                  description: "Counter ordering for Windows & macOS",
                  checkList: [
                    "Staff order registration",
                    "Cross-platform support",
                    "Integrated payment processing",
                  ],
                  to: "/desktop-pos",
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
                  <Navigate w={select({ mobile: "auto" }, "100%")} to={item.to}>
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

          <Container
            as="section"
            ariaLabelledBy="section3-title"
            gap={32}
            px={32}
            py={96}
          >
            <Center gap={12}>
              <Text
                id="section3-title"
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
              gap={24}
              cols={select({
                mobile: 2,
                tablet: 2,
                desktop: 4,
              })}
              data={[
                {
                  icon: "Timer",
                  title: "Streamlined Operations",
                  description:
                    "Automate orders and reduce wait times for faster service.",
                },
                {
                  icon: "UsersRound",
                  title: "Enhanced Customer Experience",
                  description:
                    "Smooth ordering on web, app, and in-store touchpoints.",
                },
                {
                  icon: "Palette",
                  title: "Complete Branding",
                  description:
                    "Your colors, logo, and style on every platform.",
                },
                {
                  icon: "BadgeDollarSign",
                  title: "Lower Fees",
                  description:
                    "Keep more profit with transparent, competitive rates.",
                },
                {
                  icon: "ChartBar",
                  title: "Growth Analytics",
                  description:
                    "Track sales, customers, and performance in real time.",
                },
                {
                  icon: "ShieldCheck",
                  title: "Secure Payments",
                  description:
                    "Trusted gateways for safe and smooth transactions.",
                },
                {
                  icon: "RefreshCw",
                  title: "Continuous Updates",
                  description:
                    "Stay ahead with constant improvements and new features.",
                },
                {
                  icon: "Headphones",
                  title: "Dedicated Support",
                  description: "Expert help whenever you need it, 24/7.",
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

          <Container
            as="section"
            ariaLabelledBy="section4-title"
            px={32}
            py={96}
          >
            <Center gap={24}>
              <Center gap={12}>
                <Text
                  id="section4-title"
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
                    alt="Lennoxs"
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
                    alt="In N' Out"
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

          <Container
            as="section"
            ariaLabelledBy="section5-title"
            maxW={800}
            px={32}
            py={96}
          >
            <Box display="flex" gap={32}>
              <Text
                id="section5-title"
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
                  {
                    title: "Is there a contract or setup fee?",
                    content:
                      "Yes, we charge a one-time setup fee and a monthly subscription. There are no hidden costs or commissions per order.",
                  },
                  {
                    title: "Can I use my current menu and branding?",
                    content:
                      "Absolutely! You can provide your existing materials — like your menu, product photos, and logo — and we’ll integrate everything into the platform. If you don’t have those ready, no worries — we can create high-quality images, branding assets, and other materials for you.",
                  },
                  {
                    title: "Is the platform updated regularly?",
                    content:
                      "Yes! We’re constantly working on improvements and new features. Our team ensures your platform stays modern, secure, and competitive.",
                  },
                ]}
                title={item => item.title}
                content={item => item.content}
              />
            </Box>
          </Container>

          <Divider />

          <Container
            as="section"
            ariaLabelledBy="section6-title"
            px={32}
            py={96}
          >
            <Box
              display="flex"
              fDir="row"
              fWrap="wrap"
              items="center"
              w="100%"
              gap={32}
            >
              <Image
                w={select({ section1: "100%" }, 360)}
                h={360}
                radius={12}
                src="/mobile.webp"
              />
              <Box
                display="flex"
                flex={1}
                items={select({ mobile: "center" }, "flex-start")}
                gap={24}
                minW={select({ section1: undefined }, 400)}
              >
                <Text
                  id="section6-title"
                  as="h2"
                  fontSize={select({
                    mobile: 28,
                    tablet: 32,
                    desktop: 36,
                  })}
                  textAlign={select({ desktop: "right" }, "center")}
                  lineHeight={1}
                >
                  Stop losing money to third-party platforms.
                </Text>
                <Text
                  fontFamily="Ubuntu"
                  fontSize={select({
                    mobile: 16,
                    tablet: 18,
                    desktop: 20,
                  })}
                  textAlign={select({ desktop: "right" }, "center")}
                  lineHeight={1.6}
                  color="$foreground.100"
                  maxW={720}
                >
                  Every time someone orders through a marketplace, you're paying
                  to serve your own customer. With BeWise, you keep 100% of the
                  revenue — and build your brand in the process.
                </Text>
              </Box>
            </Box>
          </Container>

          <Container
            as="section"
            ariaLabelledBy="section7-title"
            px={32}
            py={64}
            bg="$accent.50"
          >
            <Center gap={32}>
              <Box display="flex" gap={12}>
                <Text
                  id="section7-title"
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
              <Navigate to="https://wa.me/5551999999999" blank>
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
              </Navigate>
            </Center>
          </Container>

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
        </Box>
      </Scroll>
    </>
  );
};
