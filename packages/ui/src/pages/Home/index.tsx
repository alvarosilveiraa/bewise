"use client";

import { useState } from "react";
import { Accordion } from "@bewise/ui/components/Accordion";
import { Box } from "@bewise/ui/components/Box";
import { Button } from "@bewise/ui/components/Button";
import { Center } from "@bewise/ui/components/Center";
import { Navigate } from "@bewise/ui/components/Navigate";
import { Text } from "@bewise/ui/components/Text";
import { useThemeContext } from "@bewise/ui/providers/Theme/useContext";

export const HomePage = () => {
  const { toggleThemeMode } = useThemeContext();
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Center flex={1} gap={16} bg="$background">
        <Text as="h1" fontFamily="Ubuntu" fontWeight="700">
          Hello world!
        </Text>
        <Button
          onPress={toggleThemeMode}
          startContent={<Box w={20} h={20} bg="$primary.f" radius={10} />}
        >
          Hello world!
        </Button>
        <Accordion />
      </Center>
      <Center
        items="flex-end"
        position="absolute"
        top={0}
        left={expanded ? 0 : -240}
        bottom={0}
        w={300}
        bg={expanded ? "$background.50" : "$background.100"}
        bw={1}
        bc="$divider"
        bs="solid"
        transition={{ duration: 300 }}
        onPress={() => setExpanded(!expanded)}
      >
        <Navigate to="/other">
          <Button
            transform={[{ scale: expanded ? 1.6 : 1 }]}
            transition={{ duration: 300 }}
            bg="$success"
            color="$success.f"
          >
            {expanded ? "<" : ">"}
          </Button>
        </Navigate>
      </Center>
    </>
  );
};
