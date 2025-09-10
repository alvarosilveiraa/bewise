import { TextProps } from "./Props";
import { _Text } from "./_";

export const Text = ({ as = "p", ...props }: TextProps) => (
  <_Text
    as={as}
    fontFamily="$"
    fontSize={`$${as}`}
    fontWeight={`$${as}`}
    textAlign="left"
    color="$foreground"
    {...props}
  />
);
