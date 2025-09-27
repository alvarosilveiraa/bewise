import { useMemo } from "react";
import { useStyle } from "@bewise/ui/hooks/useStyle";
import { isNumber } from "lodash";
import { Text } from "react-native";
import Animated from "react-native-reanimated";
import { TextProps } from "./Props";

export const _Text = ({ id, lines, children, ...props }: TextProps) => {
  const style = useStyle({ lineHeight: 1, ...props });
  const fontFamily = useMemo(
    () =>
      `${style.fontFamily}_${style.fontWeight}${style.fontStyle === "italic" ? "_Italic" : ""}`,
    [style.fontFamily, style.fontWeight, style.fontStyle],
  );
  const lineHeight = useMemo(() => {
    if (!isNumber(style.fontSize) || !isNumber(style.lineHeight)) return;
    return style.fontSize * style.lineHeight;
  }, [style.fontSize, style.lineHeight]);

  if (!style.transition)
    return (
      <Text
        id={id}
        style={{ ...style, fontFamily, fontWeight: undefined, lineHeight }}
        numberOfLines={lines}
      >
        {children}
      </Text>
    );
  return (
    <Animated.Text
      id={id}
      style={[
        { ...style, fontFamily, fontWeight: undefined, lineHeight },
        style,
      ]}
      numberOfLines={lines}
    >
      {children}
    </Animated.Text>
  );
};
