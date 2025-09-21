import { useCallback } from "react";
import { useStyle } from "@bewise/ui/hooks/useStyle";
import { isFunction } from "lodash";
import { ScrollView, ViewStyle } from "react-native";
import { ScrollProps } from "./Props";

export const _Scroll = ({
  overflow,
  overflowX,
  overflowY,
  fGrow,
  fDir,
  items,
  justify,
  gap,
  p,
  px,
  py,
  pt,
  pl,
  pr,
  pb,
  children,
  ...props
}: ScrollProps) => {
  const style = useStyle<ViewStyle>({
    fGrow: props.flex,
    ...props,
  });
  const contentContainerStyle = useStyle<ViewStyle>({
    fGrow,
    fDir: fDir || fGrow ? "column" : undefined,
    items,
    justify,
    gap,
    p,
    px,
    py,
    pt,
    pl,
    pr,
    pb,
  });

  const renderChildren = useCallback(() => {
    if (isFunction(children)) return children({});
    return children;
  }, [children]);

  if (overflow || (overflowX && overflowY))
    return (
      <ScrollView
        style={style}
        contentContainerStyle={{
          flexGrow: contentContainerStyle.flexGrow,
        }}
        horizontal
      >
        <ScrollView contentContainerStyle={contentContainerStyle}>
          {renderChildren()}
        </ScrollView>
      </ScrollView>
    );
  return (
    <ScrollView
      style={style}
      contentContainerStyle={contentContainerStyle}
      horizontal={overflowX}
    >
      {renderChildren()}
    </ScrollView>
  );
};
