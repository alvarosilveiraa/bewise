import { useMemo } from "react";
import { useTransition } from "@bewise/ui/hooks/useTransition";
import { boxStyleMapper } from "@bewise/ui/mappers/boxStyle";
import { TouchableWithoutFeedback, View } from "react-native";
import Animated from "react-native-reanimated";
import { BoxProps } from "./Props";

export const _Box = ({
  id,
  onPress,
  disabled,
  children,
  ...props
}: BoxProps) => {
  const style = useMemo(() => boxStyleMapper(props), [props]);
  const transition = useTransition(style);

  if (!style.transition) {
    if (onPress)
      return (
        <TouchableWithoutFeedback id={id} onPress={onPress} disabled={disabled}>
          <View style={style}>{children}</View>
        </TouchableWithoutFeedback>
      );
    return (
      <View id={id} style={style}>
        {children}
      </View>
    );
  }
  if (onPress)
    return (
      <TouchableWithoutFeedback id={id} onPress={onPress} disabled={disabled}>
        <Animated.View style={[style, transition]}>{children}</Animated.View>
      </TouchableWithoutFeedback>
    );
  return (
    <Animated.View id={id} style={[style, transition]}>
      {children}
    </Animated.View>
  );
};
