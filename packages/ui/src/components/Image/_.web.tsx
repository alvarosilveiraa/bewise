"use client";

import { CSSProperties } from "react";
import { useStyle } from "@bewise/ui/hooks/useStyle";
import Image from "next/image";
import { Box } from "../Box";
import { ImageProps } from "./Props";

export const _Image = ({
  id,
  alt = "",
  w,
  h,
  resizeMode,
  src,
  priority,
  ...props
}: ImageProps) => {
  const style = useStyle<CSSProperties>(props);

  if (!src) return null;
  return (
    <Box position="relative" w={w} h={h}>
      <Image
        id={id}
        alt={alt}
        style={{ ...style, objectFit: resizeMode }}
        src={src}
        sizes={w === "100%" ? "100vw" : `${w}px`}
        fill
        priority={priority}
      />
    </Box>
  );
};
