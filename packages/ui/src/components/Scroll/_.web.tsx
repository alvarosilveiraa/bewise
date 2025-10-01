import { Box } from "../Box";
import { ScrollProps } from "./Props";

export const _Scroll = ({ children, ...props }: ScrollProps) => (
  <Box {...props}>
    <Box display="flex" flex={1} w="100%">
      {children}
    </Box>
  </Box>
);
