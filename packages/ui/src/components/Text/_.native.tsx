import { useMemo } from "react";
import { useStyle } from "@bewise/ui/hooks/useStyle";
import { useTransition } from "@bewise/ui/hooks/useTransition";
import { Text } from "react-native";
import Animated from "react-native-reanimated";
import { TextProps } from "./Props";

export const _Text = ({ id, lines, children, ...props }: TextProps) => {
  const style = useStyle(props);
  const transition = useTransition(style);
  const fontFamily = useMemo(
    () =>
      `${style.fontFamily}_${props.fontWeight}${style.fontStyle === "italic" ? "_Italic" : ""}`,
    [style.fontFamily, props.fontWeight, style.fontStyle],
  );

  if (!style.transition)
    return (
      <Text id={id} style={{ ...style, fontFamily }} numberOfLines={lines}>
        {children}
      </Text>
    );
  return (
    <Animated.Text
      id={id}
      style={[{ ...style, fontFamily }, transition]}
      numberOfLines={lines}
    >
      {children}
    </Animated.Text>
  );
};
