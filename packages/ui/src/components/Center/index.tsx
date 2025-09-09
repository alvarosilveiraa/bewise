import { Box } from "../Box";
import { CenterProps } from "./Props";

export const Center = (props: CenterProps) => (
  <Box
    display="flex"
    fDir="column"
    items="center"
    justify="center"
    {...props}
  />
);
