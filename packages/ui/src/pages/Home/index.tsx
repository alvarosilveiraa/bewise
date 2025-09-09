"use client";

import { useState } from "react";
import { ThemeModeEnum } from "@bewise/common/enums/ThemeMode";
import { Box } from "@bewise/ui/components/Box";
import { Button } from "@bewise/ui/components/Button";
import { Center } from "@bewise/ui/components/Center";
import { Navigate } from "@bewise/ui/components/Navigate";
import { Text } from "@bewise/ui/components/Text";
import { useThemeContext } from "@bewise/ui/providers/Theme/useThemeContext";

export const HomePage = () => {
  const { themeMode, toggleThemeMode } = useThemeContext();
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Center
        flex={1}
        gap={16}
        bg={
          { [ThemeModeEnum.Light]: "white", [ThemeModeEnum.Dark]: "black" }[
            themeMode
          ]
        }
      >
        <Text as="h1">Hello world!</Text>
        <Button
          onPress={toggleThemeMode}
          startContent={<Box w={20} h={20} bg="red" radius={10} />}
        >
          Hello world!
        </Button>
      </Center>
      <Center
        items="flex-end"
        position="absolute"
        top={0}
        left={expanded ? 0 : -240}
        bottom={0}
        opacity={expanded ? 1 : 0.6}
        w={300}
        bg={expanded ? "blue" : "red"}
        transition={{ duration: 300 }}
        onPress={() => setExpanded(!expanded)}
      >
        <Navigate to="/other">
          <Button
            color={expanded ? "green" : "black"}
            transform={[
              { rotate: expanded ? "90deg" : "0deg" },
              { scale: expanded ? 2 : 1 },
            ]}
            transition={{ duration: 300 }}
            hover={{ transform: undefined }}
          >
            Test
          </Button>
        </Navigate>
      </Center>
    </>
  );
};
