"use client";

import { useState } from "react";
import { Box } from "../Box";
import { Button } from "../Button";
import { Text } from "../Text";

// TODO:
export const Accordion = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Box w="100%" maxW={300}>
      <Button
        w="100%"
        endContent={<Text>{expanded ? "/\\" : "\\/"}</Text>}
        onPress={() => setExpanded(!expanded)}
      >
        Titulo
      </Button>
      <Box
        overflow="hidden"
        w="100%"
        h={expanded ? 400 : 0}
        py={expanded ? 12 : 0}
        px={16}
        transition={[
          { key: "height", duration: 400 },
          { key: "paddingTop", duration: 400 },
          { key: "paddingBottom", duration: 400 },
        ]}
      >
        <Text>Conteudo 1 sadas dasdasd asdas</Text>
        <Text>Conteudo 1 sadas dasdasd asdas</Text>
        <Text>Conteudo 1 sadas dasdasd asdas</Text>
        <Text>Conteudo 1 sadas dasdasd asdas</Text>
        <Text>Conteudo 1 sadas dasdasd asdas</Text>
        <Text>Conteudo 1 sadas dasdasd asdas</Text>
        <Text>Conteudo 1 sadas dasdasd asdas</Text>
        <Text>Conteudo 1 sadas dasdasd asdas</Text>
        <Text>Conteudo 1 sadas dasdasd asdas</Text>
        <Text>Conteudo 1 sadas dasdasd asdas</Text>
        <Text>Conteudo 1 sadas dasdasd asdas</Text>
        <Text>Conteudo 1 sadas dasdasd asdas</Text>
      </Box>
    </Box>
  );
};
