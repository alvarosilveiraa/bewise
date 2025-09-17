import { TextProps } from "./Props";
import { _Text } from "./_";

export const Text = ({ as = "p", hidden, ...props }: TextProps) => {
  if (hidden) return null;
  return (
    <_Text
      as={as}
      fontFamily="$"
      fontSize={`$${as}`}
      fontWeight={`$${as}`}
      textAlign="left"
      color="$foreground"
      lineHeight={1}
      {...props}
    />
  );
};
