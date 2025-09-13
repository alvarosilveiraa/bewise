import { Box } from "../Box";
import { ContainerProps } from "./Props";

export const Container = ({
  position,
  top,
  left,
  right,
  bottom,
  pt,
  pl,
  pr,
  pb,
  px,
  py,
  p,
  bg,
  z,
  ...props
}: ContainerProps) => (
  <Box
    position={position}
    top={top}
    left={left}
    right={right}
    bottom={bottom}
    w="100%"
    p={p}
    px={px}
    py={py}
    pt={pt}
    pl={pl}
    pr={pr}
    pb={pb}
    bg={bg}
    z={z}
  >
    <Box display="flex" w="100%" maxW={1000} ml="auto" mr="auto" {...props} />
  </Box>
);
