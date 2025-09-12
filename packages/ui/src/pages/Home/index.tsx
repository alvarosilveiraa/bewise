"use client";

import { ThemeModeEnum } from "@bewise/common/enums/ThemeMode";
import { Accordion } from "@bewise/ui/components/Accordion";
import { Button } from "@bewise/ui/components/Button";
import { Center } from "@bewise/ui/components/Center";
import { Container } from "@bewise/ui/components/Container";
import { Divider } from "@bewise/ui/components/Divider";
import { Icon } from "@bewise/ui/components/Icon";
import { Text } from "@bewise/ui/components/Text";
import { useSafeArea } from "@bewise/ui/hooks/useSafeArea";
import { useBreakpointContext } from "@bewise/ui/providers/Breakpoint/useContext";
import { useThemeContext } from "@bewise/ui/providers/Theme/useContext";

export const HomePage = () => {
  const safeArea = useSafeArea();
  const { themeMode, toggleThemeMode } = useThemeContext();
  const { setupBreakpoint } = useBreakpointContext();
  const { eq } = setupBreakpoint();

  return (
    <>
      <Container
        fDir="row"
        items="center"
        justify={eq("mobile") ? "space-between" : "flex-end"}
        gap={12}
        maxW={600}
        pt={safeArea.top ? safeArea.top + 12 : undefined}
        p={24}
        bg="$background.50"
      >
        <Text hidden={!eq("mobile")}>Mobile Only</Text>
        <Button schema="secondary" onPress={toggleThemeMode} iconOnly>
          <Icon
            library="md"
            name={
              themeMode === ThemeModeEnum.Light ? "dark-mode" : "light-mode"
            }
            color="$primary.f"
          />
        </Button>
      </Container>
      <Divider />
      <Center
        flex={1}
        pb={safeArea.bottom ? safeArea.bottom + 32 : undefined}
        p={32}
        bg="$background"
      >
        <Container maxW={600} gap={32}>
          <Text as="h1" fontFamily="Ubuntu" fontWeight="700">
            Frequently Questions
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
        </Container>
      </Center>
    </>
  );
};
