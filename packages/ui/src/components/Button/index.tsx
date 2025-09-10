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
    color="$primary.f"
    px={12}
    py={8}
    bg="$primary"
    bw={1}
    bc="$divider"
    bs="solid"
    radius={4}
    opacity={props.disabled ? 0.8 : undefined}
    transition={{ duration: 200 }}
    {...props}
    hover={{
      opacity: 0.8,
      ...props.hover,
    }}
  />
);
