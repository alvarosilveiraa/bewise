"use client";

import { useMemo } from "react";
import { Box } from "../Box";
import { BoxStyle } from "../Box/Props";
import { MotionProps } from "./Props";

export const Motion = ({
  id,
  ariaLabelledBy,
  initial,
  animate,
  transition,
  onPress,
  children,
  hidden,
  ...props
}: MotionProps) => {
  const style = useMemo<BoxStyle>(
    () => ({
      ...props,
      ...initial,
      ...animate,
    }),
    [initial, animate, props],
  );

  return (
    <Box
      id={id}
      ariaLabelledBy={ariaLabelledBy}
      {...style}
      transition={transition}
      onPress={onPress}
      hidden={hidden}
    >
      {children}
    </Box>
  );
};
