import { useCallback, useRef } from "react";
import { useLayout } from "@bewise/ui/hooks/useLayout";
import { useStyle } from "@bewise/ui/hooks/useStyle";
import { useTransition } from "@bewise/ui/hooks/useTransition";
import { boxStyleMapper } from "@bewise/ui/mappers/boxStyle";
import { TouchableWithoutFeedback, View } from "react-native";
import Animated from "react-native-reanimated";
import { BoxProps } from "./Props";

export const _Box = ({
  id,
  onPress,
  onLayout,
  onLayoutChange,
  disabled,
  children,
  ...props
}: BoxProps) => {
  const ref = useRef<View>(null);
  const style = useStyle(props, boxStyleMapper);
  const transition = useTransition(style);
  const { handleLayoutChange } = useLayout({ ref, onLayout, onLayoutChange });

  if (!style.transition) {
    const renderChildren = useCallback(
      () => (
        <View ref={ref} id={id} style={style} onLayout={handleLayoutChange}>
          {children}
        </View>
      ),
      [id, children, ref, style, handleLayoutChange],
    );

    if (onPress)
      return (
        <TouchableWithoutFeedback onPress={onPress} disabled={disabled}>
          {renderChildren()}
        </TouchableWithoutFeedback>
      );
    return renderChildren();
  }

  const renderAnimatedChildren = useCallback(
    () => (
      <Animated.View
        ref={ref}
        id={id}
        style={[style, transition]}
        onLayout={handleLayoutChange}
      >
        {children}
      </Animated.View>
    ),
    [id, children, ref, style, transition, handleLayoutChange],
  );

  if (onPress)
    return (
      <TouchableWithoutFeedback
        onPress={onPress}
        onLayout={handleLayoutChange}
        disabled={disabled}
      >
        {renderAnimatedChildren()}
      </TouchableWithoutFeedback>
    );
  return renderAnimatedChildren();
};
