"use client";

import { memo } from "react";
import { useStyle } from "@bewise/ui/hooks/useStyle";
import { icons } from "lucide-react";
import { IconProps } from "./Props";

export const _Icon = ({ name, ...props }: IconProps) => {
  const style = useStyle(props);

  if (!name) return null;
  const Component = memo(icons[name]);
  return <Component {...style} />;
};
