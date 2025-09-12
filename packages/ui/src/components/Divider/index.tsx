"use client";

import { useMemo } from "react";
import { Box } from "../Box";
import { DividerProps } from "./Props";

export const Divider = ({
  orientation = "horizontal",
  ...props
}: DividerProps) => {
  const w = useMemo(
    () => ({ horizontal: "100%", vertical: 1 })[orientation],
    [orientation],
  );
  const h = useMemo(
    () => ({ horizontal: 1, vertical: "100%" })[orientation],
    [orientation],
  );

  return <Box minW={w} maxW={w} minH={h} maxH={h} bg="$divider" {...props} />;
};
