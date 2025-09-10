import { Center } from "@bewise/ui/components/Center";
import { Link } from "@bewise/ui/components/Link";

export const OtherPage = () => (
  <Center flex={1} gap={16} bg="$background">
    <Link to="/" type="back">
      Back
    </Link>
  </Center>
);
