import { Box } from "../Box";
import { CenterProps } from "./Props";

export const Center = (props: CenterProps) => (
  <Box display="flex" items="center" justify="center" w="100%" {...props} />
);
