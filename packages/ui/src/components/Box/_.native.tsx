import { useCallback, useRef } from "react";
import { useLayout } from "@bewise/ui/hooks/useLayout";
import { useStyle } from "@bewise/ui/hooks/useStyle";
import { useTransition } from "@bewise/ui/hooks/useTransition";
import { boxStyleMapper } from "@bewise/ui/mappers/boxStyle";
import { isFunction } from "lodash";
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

  const renderChildren = useCallback(() => {
    if (isFunction(children)) return children({});
    return children;
  }, [children]);

  if (!style.transition) {
    const renderView = useCallback(
      () => (
        <View ref={ref} id={id} style={style} onLayout={handleLayoutChange}>
          {renderChildren()}
        </View>
      ),
      [id, ref, style, handleLayoutChange, renderChildren],
    );

    if (onPress)
      return (
        <TouchableWithoutFeedback onPress={onPress} disabled={disabled}>
          {renderView()}
        </TouchableWithoutFeedback>
      );
    return renderView();
  }

  const renderAnimatedView = useCallback(
    () => (
      <Animated.View
        ref={ref}
        id={id}
        style={[style, transition]}
        onLayout={handleLayoutChange}
      >
        {renderChildren()}
      </Animated.View>
    ),
    [id, ref, style, transition, handleLayoutChange, renderChildren],
  );

  if (onPress)
    return (
      <TouchableWithoutFeedback
        onPress={onPress}
        onLayout={handleLayoutChange}
        disabled={disabled}
      >
        {renderAnimatedView()}
      </TouchableWithoutFeedback>
    );
  return renderAnimatedView();
};
