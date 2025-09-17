"use client";

import { CSSProperties } from "react";
import { useStyle } from "@bewise/ui/hooks/useStyle";
import Image from "next/image";
import { Box } from "../Box";
import { ImageProps } from "./Props";

export const _Image = ({ id, w, h, resizeMode, src, ...props }: ImageProps) => {
  const style = useStyle<CSSProperties>(props);

  if (!src) return null;
  return (
    <Box position="relative" w={w} h={h}>
      <Image
        id={id}
        style={{ ...style, objectFit: resizeMode }}
        color="red"
        alt=""
        src={src}
        fill
        priority
      />
    </Box>
  );
};
