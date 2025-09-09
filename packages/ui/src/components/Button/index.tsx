import { ButtonProps } from "./Props";
import { _Button } from "./_";

export const Button = (props: ButtonProps) => (
  <_Button
    cursor={
      props.disabled ? "not-allowed" : props.onPress ? "pointer" : "inherit"
    }
    display="flex"
    fDir="row"
    items="center"
    justify="center"
    gap={6}
    fontSize={14}
    color="black"
    px={12}
    py={8}
    bg="#f4f4f4"
    bw={1}
    bc="#cccccc"
    radius={4}
    opacity={props.disabled ? 0.8 : undefined}
    {...props}
    hover={{
      opacity: 0.8,
      transform: [{ scale: 1.08 }],
      ...props.hover,
    }}
  />
);
