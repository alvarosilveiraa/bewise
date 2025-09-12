import { Box } from "../Box";
import { ContainerProps } from "./Props";

export const Container = ({
  pt,
  pl,
  pr,
  pb,
  px,
  py,
  p,
  bg,
  ...props
}: ContainerProps) => (
  <Box w="100%" pt={pt} pl={pl} pr={pr} pb={pb} px={px} py={py} p={p} bg={bg}>
    <Box display="flex" w="100%" maxW={1000} ml="auto" mr="auto" {...props} />
  </Box>
);
