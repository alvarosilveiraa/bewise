"use client";

import { useCallback, useState } from "react";
import { EasingEnum } from "@bewise/ui/enums/Easing";
import { Box } from "../Box";
import { Button } from "../Button";
import { Icon } from "../Icon";
import { Motion } from "../Motion";
import { Text } from "../Text";
import { AccordionProps } from "./Props";

export const Accordion = <I extends object = Record<string, unknown>>({
  data = [],
  Header,
  Title,
  title,
  Content,
  content,
  multiple,
  hidden,
}: AccordionProps<I>) => {
  const [expansion, setExpansion] = useState<number[]>([]);

  const renderTitle = useCallback(
    (item: I) => {
      if (Title) return <Title item={item} />;
      if (title) return title(item);
      return "-";
    },
    [Title, title],
  );

  const renderContent = useCallback(
    (item: I) => {
      if (Content) return <Content item={item} />;
      return <Text>{content?.(item) || "-"}</Text>;
    },
    [Content, content],
  );

  const handleExpansion = useCallback(
    (index: number) => {
      setExpansion(
        expansion.includes(index)
          ? expansion.filter(value => value !== index)
          : multiple
            ? [...expansion, index]
            : [index],
      );
    },
    [multiple, expansion],
  );

  if (hidden || !data.length) return null;
  return (
    <Box display="flex" fDir="column" gap={6} w="100%" maxW={600}>
      {data.map((item, index) => {
        const expanded = expansion.includes(index);
        return (
          <Box key={`accordion-item-${index}`} w="100%">
            {Header ? (
              <Header item={item} onPress={() => handleExpansion(index)}>
                {renderTitle(item)}
              </Header>
            ) : (
              <Button
                variant={expanded ? "solid" : "outline"}
                size="lg"
                w="100%"
                blRadius={expanded ? 0 : undefined}
                brRadius={expanded ? 0 : undefined}
                onPress={() => handleExpansion(index)}
                endContent={
                  <Icon
                    library="md"
                    size={18}
                    name={expanded ? "arrow-drop-up" : "arrow-drop-down"}
                  />
                }
              >
                {renderTitle(item)}
              </Button>
            )}
            <Motion
              overflow="hidden"
              opacity={0}
              btw={0}
              bw={1}
              bc="$divider"
              bs="solid"
              px={16}
              py={12}
              blRadius={4}
              brRadius={4}
              initial={{ h: 0, py: 0, bw: 0, opacity: 0 }}
              animate={expanded ? { h: "auto", py: 12, bw: 1, opacity: 1 } : {}}
              transition={{ duration: 300, easing: EasingEnum.EaseInOut }}
            >
              {renderContent(item)}
            </Motion>
          </Box>
        );
      })}
    </Box>
  );
};
