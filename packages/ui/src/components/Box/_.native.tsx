import { useCallback } from "react";
import { useStyle } from "@bewise/ui/hooks/useStyle";
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
  const style = useStyle(props, boxStyleMapper);
  const transition = useTransition(style);

  if (!style.transition) {
    const renderChildren = useCallback(
      (id?: string) => (
        <View id={id} style={style}>
          {children}
        </View>
      ),
      [children, style],
    );

    if (onPress)
      return (
        <TouchableWithoutFeedback id={id} onPress={onPress} disabled={disabled}>
          {renderChildren()}
        </TouchableWithoutFeedback>
      );
    return renderChildren(id);
  }

  const renderAnimatedChildren = useCallback(
    (id?: string) => (
      <Animated.View id={id} style={[style, transition]}>
        {children}
      </Animated.View>
    ),
    [children, style, transition],
  );

  if (onPress)
    return (
      <TouchableWithoutFeedback id={id} onPress={onPress} disabled={disabled}>
        {renderAnimatedChildren()}
      </TouchableWithoutFeedback>
    );
  return renderAnimatedChildren(id);
};
