"use client";

import { useMemo, useState } from "react";
import { isEmpty } from "lodash";
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
  const [layout, setLayout] = useState<{ w: number; h: number } | null>(null);
  const style = useMemo<BoxStyle>(
    () => ({
      ...props,
      ...(layout ? initial : {}),
      ...(!isEmpty(animate) && layout
        ? {
            ...animate,
            w: animate.w === "auto" ? layout.w : animate.w,
            h: animate.h === "auto" ? layout.h : animate.h,
          }
        : {}),
    }),
    [initial, animate, props, layout],
  );

  return (
    <Box {...style} transition={transition} onLayout={setLayout}>
      {children}
    </Box>
  );
};
