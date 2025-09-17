"use client";

import { useMemo } from "react";
import { Box } from "../Box";
import { BoxStyle } from "../Box/Props";
import { MotionProps } from "./Props";

export const Motion = ({
  initial,
  animate,
  transition,
  children,
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
    <Box {...style} transition={transition}>
      {children}
    </Box>
  );
};
