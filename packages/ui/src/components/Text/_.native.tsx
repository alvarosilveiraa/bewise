import { useMemo } from "react";
import { useTransition } from "@bewise/ui/hooks/useTransition";
import { styleMapper } from "@bewise/ui/mappers/style";
import { Text } from "react-native";
import Animated from "react-native-reanimated";
import { TextProps } from "./Props";

export const _Text = ({ id, children, ...props }: TextProps) => {
  const style = useMemo(() => styleMapper(props), [props]);
  const transition = useTransition(style);

  if (!style.transition)
    return (
      <Text id={id} style={style}>
        {children}
      </Text>
    );
  return (
    <Animated.Text id={id} style={[style, transition]}>
      {children}
    </Animated.Text>
  );
};
