import { Box } from "@bewise/ui/components/Box";
import { Text } from "@bewise/ui/components/Text";

export const NotFoundPage = () => (
  <Box display="flex" flex={1} items="center" justify="center" w="100%" p={32}>
    <Box display="flex" fDir="row" items="center" gap={20}>
      <Text as="h1" fontSize={22} fontWeight="600">
        404
      </Text>
      <Box w={2} h={46} bg="$divider" />
      <Text as="h2" fontSize={14} fontWeight="400">
        This page could not be found.
      </Text>
    </Box>
  </Box>
);
