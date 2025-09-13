import { useStyle } from "@bewise/ui/hooks/useStyle";
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
          {children}
        </ScrollView>
      </ScrollView>
    );
  return (
    <ScrollView
      style={style}
      contentContainerStyle={contentContainerStyle}
      horizontal={overflowX}
    >
      {children}
    </ScrollView>
  );
};
