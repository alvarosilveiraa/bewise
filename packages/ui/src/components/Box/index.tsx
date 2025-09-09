import { BoxProps } from "./Props";
import { _Box } from "./_";

export const Box = (props: BoxProps) => (
  <_Box
    cursor={
      props.disabled ? "not-allowed" : props.onPress ? "pointer" : undefined
    }
    {...props}
  />
);
