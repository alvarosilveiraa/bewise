"use client";

import { useStyle } from "@bewise/ui/hooks/useStyle";
import { isNumber } from "lodash";
import Image from "next/image";
import { ImageProps } from "./Props";

export const _Image = ({
  id,
  alt = "",
  resizeMode,
  src,
  priority,
  ...props
}: ImageProps) => {
  const { width, height, ...style } = useStyle(props);

  if (!src || !isNumber(width) || !isNumber(height)) return null;
  return (
    <Image
      id={id}
      alt={alt}
      style={{ maxWidth: "100%", ...style, objectFit: resizeMode }}
      src={src}
      width={width}
      height={height}
      priority={priority}
      fetchPriority="auto"
    />
  );
};
