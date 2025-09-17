"use client";

import { useRef } from "react";
import { useLayout } from "@bewise/ui/hooks/useLayout";
import { useStyle } from "@bewise/ui/hooks/useStyle";
import { useTransition } from "@bewise/ui/hooks/useTransition";
import { boxStyleMapper } from "@bewise/ui/mappers/boxStyle";
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
  const ref = useRef<HTMLDivElement>(null);
  const style = useStyle(props, boxStyleMapper);
  const transition = useTransition(style);
  useLayout({ ref, onLayout, onLayoutChange });

  return (
    <div
      ref={ref}
      id={id}
      style={transition}
      onClick={disabled ? undefined : onPress}
    >
      {children}
    </div>
  );
};
