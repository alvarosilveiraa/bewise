import { BoxProps } from "./Props";
import { _Box } from "./_";

export const Box = ({ hidden, ...props }: BoxProps) => {
  if (hidden) return null;
  return (
    <_Box
      cursor={
        props.disabled ? "not-allowed" : props.onPress ? "pointer" : undefined
      }
      fDir={props.display === "flex" ? "column" : undefined}
      {...props}
    />
  );
};
