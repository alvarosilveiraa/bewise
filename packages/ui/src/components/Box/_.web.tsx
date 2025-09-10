"use client";

import { useStyle } from "@bewise/ui/hooks/useStyle";
import { useTransition } from "@bewise/ui/hooks/useTransition";
import { boxStyleMapper } from "@bewise/ui/mappers/boxStyle";
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

  return (
    <div id={id} style={transition} onClick={disabled ? undefined : onPress}>
      {children}
    </div>
  );
};
