"use client";

import { ThemeModeEnum } from "@bewise/common/enums/ThemeMode";
import { Accordion } from "@bewise/ui/components/Accordion";
import { Box } from "@bewise/ui/components/Box";
import { Button } from "@bewise/ui/components/Button";
import { Center } from "@bewise/ui/components/Center";
import { Container } from "@bewise/ui/components/Container";
import { Divider } from "@bewise/ui/components/Divider";
import { Icon } from "@bewise/ui/components/Icon";
import { Link } from "@bewise/ui/components/Link";
import { Scroll } from "@bewise/ui/components/Scroll";
import { Text } from "@bewise/ui/components/Text";
import { useSafeArea } from "@bewise/ui/hooks/useSafeArea";
import { useBreakpointContext } from "@bewise/ui/providers/Breakpoint/useContext";
import { useThemeContext } from "@bewise/ui/providers/Theme/useContext";

export const HomePage = () => {
  const safeArea = useSafeArea();
  const { themeMode, toggleThemeMode } = useThemeContext();
  const { setupBreakpoint } = useBreakpointContext();
  const { select, eq } = setupBreakpoint();

  return (
    <>
      <Container
        fDir="row"
        items="center"
        justify={select({ mobile: "space-between" }, "flex-end")}
        gap={12}
        maxW={800}
        pt={safeArea.top ? safeArea.top + 6 : 12}
        pb={12}
        px={24}
        bg="$background.50"
      >
        <Link to="/other" hidden={!eq("mobile")}>
          Mobile Only
        </Link>
        <Button variant="flat" onPress={toggleThemeMode} iconOnly>
          <Icon
            library="md"
            size={18}
            name={
              themeMode === ThemeModeEnum.Light ? "dark-mode" : "light-mode"
            }
            color="$foreground"
          />
        </Button>
      </Container>

      <Divider />

      <Scroll
        flex={1}
        items="center"
        justify="center"
        gap={64}
        pb={safeArea.bottom ? safeArea.bottom + 32 : undefined}
        bg="$background"
      >
        <Box display="flex" gap={64} w="100%" py={64}>
          <Container maxW={800} px={32}>
            <Center gap={24}>
              <Text
                as="h1"
                fontSize={select({
                  xs: 24,
                  sm: 32,
                  md: 44,
                  lg: 52,
                  xl: 64,
                })}
                lineHeight={1}
                textAlign="center"
              >
                All-in-one restaurant & delivery solutions
              </Text>
              <Text
                fontFamily="Ubuntu"
                fontSize={select({
                  mobile: 16,
                  tablet: 18,
                  desktop: 22,
                })}
                lineHeight={1.6}
                textAlign="center"
                color="$foreground.100"
                maxW={720}
              >
                Streamline operations, boost efficiency, and enhance customer
                satisfaction with our integrated suite of restaurant management
                tools. From mobile ordering to kitchen displays, we've got you
                covered.
              </Text>
              <Box
                display="flex"
                fDir={select({
                  mobile: "column",
                  tablet: "row",
                  desktop: "row",
                })}
                items="center"
                justify="center"
                gap={16}
                w={select({
                  mobile: "100%",
                })}
              >
                <Button
                  schema="foreground"
                  size={select({
                    mobile: "md",
                    tablet: "lg",
                    desktop: "lg",
                  })}
                  w={select({
                    mobile: "100%",
                  })}
                >
                  Request Demo
                </Button>
                <Button
                  variant="flat"
                  size={select({
                    mobile: "md",
                    tablet: "lg",
                    desktop: "lg",
                  })}
                  color="$success"
                  w={select({
                    mobile: "100%",
                  })}
                  bc="$default/0.4"
                  endContent={
                    <Icon
                      library="md"
                      name="arrow-forward"
                      color="$success"
                      size={18}
                    />
                  }
                >
                  Learn More
                </Button>
              </Box>
            </Center>
          </Container>

          <Divider />

          <Container maxW={800} px={32}>
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
          </Container>

          <Divider />

          <Container maxW={800} px={32}>
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
          </Container>

          <Divider />

          <Container maxW={800} px={32}>
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
                color="$foreground.100"
                maxW={600}
              >
                Get started with BeWise today and see the difference our
                integrated solutions can make
              </Text>
            </Center>
          </Container>

          <Divider />

          <Container maxW={800} px={32}>
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
                Trusted by Restaurant Owners
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
                See how BeWise has transformed restaurant operations worldwide
              </Text>
            </Center>
          </Container>

          <Divider />

          <Container maxW={800} px={32}>
            <Box display="flex" gap={24}>
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
        </Box>
      </Scroll>
    </>
  );
};
