"use client";

import { useState } from "react";
import { ThemeModeEnum } from "@bewise/common/enums/ThemeMode";
import { Accordion } from "@bewise/ui/components/Accordion";
import { Box } from "@bewise/ui/components/Box";
import { Button } from "@bewise/ui/components/Button";
import { Center } from "@bewise/ui/components/Center";
import { Icon } from "@bewise/ui/components/Icon";
import { Navigate } from "@bewise/ui/components/Navigate";
import { Text } from "@bewise/ui/components/Text";
import { useThemeContext } from "@bewise/ui/providers/Theme/useContext";

export const HomePage = () => {
  const { themeMode, toggleThemeMode } = useThemeContext();
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Center flex={1} gap={16} p={32} bg="$background">
        <Text as="h1" fontFamily="Ubuntu" fontWeight="700">
          Hello world!
        </Text>
        <Button schema="primary" onPress={toggleThemeMode} iconOnly>
          <Icon
            library="md"
            name={
              themeMode === ThemeModeEnum.Light ? "dark-mode" : "light-mode"
            }
            color="$primary.f"
          />
        </Button>
        <Accordion
          data={[
            {
              title: "Titulo 1",
              content: "Conteudo sad asjduas hud asud ashud",
            },
            {
              title: "Titulo 2",
              content: "Conteudo sad asjduas hud asud ashud",
            },
            {
              title: "Titulo 2",
              content: "Conteudo sad asjduas hud asud ashud",
            },
          ]}
          title={item => item.title}
          content={item => item.content}
        />
      </Center>
      <Box
        display="flex"
        fDir="column"
        justify="flex-start"
        items="center"
        position="absolute"
        left={0}
        right={0}
        bottom={expanded ? 0 : -240}
        h={300}
        bg={expanded ? "$background.50" : "$background.100"}
        bw={1}
        bc="$divider"
        bs="solid"
        transition={{ duration: 300 }}
        onPress={() => setExpanded(!expanded)}
        hidden
      >
        <Navigate to="/other">
          <Button
            transform={[{ scale: expanded ? 1.6 : 1 }]}
            transition={{ duration: 300 }}
            bg="$success"
            color="$success.f"
          >
            {expanded ? "/\\" : "\\/"}
          </Button>
        </Navigate>
      </Box>
    </>
  );
};
