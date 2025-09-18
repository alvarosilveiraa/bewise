import { Box } from "../Box";
import { ContainerProps } from "./Props";

export const Container = ({
  as,
  ariaLabelledBy,
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
  bgImage,
  bgPosition,
  bgResizeMode,
  z,
  ...props
}: ContainerProps) => (
  <Box
    as={as}
    ariaLabelledBy={ariaLabelledBy}
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
    bgImage={bgImage}
    bgPosition={bgPosition}
    bgResizeMode={bgResizeMode}
    z={z}
  >
    <Box display="flex" w="100%" maxW={1000} ml="auto" mr="auto" {...props} />
  </Box>
);
