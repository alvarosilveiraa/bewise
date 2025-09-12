"use client";

import { useMemo } from "react";
import { Color } from "@bewise/ui/type/Color";
import { ColorVariable } from "@bewise/ui/type/ColorVariable";
import { ButtonProps } from "./Props";
import { _Button } from "./_";

export const Button = ({
  schema = "default",
  variant = "solid",
  size = "md",
  iconOnly,
  hidden,
  ...props
}: ButtonProps) => {
  const py = useMemo(
    () => ({ xxs: 2, xs: 4, sm: 6, md: 8, lg: 10, xl: 12, xxl: 14 })[size],
    [size],
  );
  const px = useMemo(() => {
    if (iconOnly) return py;
    return { xxs: 6, xs: 8, sm: 10, md: 12, lg: 14, xl: 16, xxl: 18 }[size];
  }, [size, iconOnly, py]);

  if (hidden) return null;
  return (
    <_Button
      cursor={
        props.disabled ? "not-allowed" : props.onPress ? "pointer" : "inherit"
      }
      display="flex"
      fDir="row"
      items="center"
      justify="center"
      gap={{ xxs: 3, xs: 4, sm: 5, md: 6, lg: 7, xl: 8, xxl: 9 }[size]}
      fontSize={
        { xxs: 8, xs: 10, sm: 12, md: 14, lg: 16, xl: 18, xxl: 20 }[size]
      }
      color={
        {
          solid: `$${schema}.f`,
          flat: `$${schema}.f`,
          outline: "$foreground",
          ghost: "$foreground",
        }[variant] as Color | ColorVariable
      }
      px={px}
      py={py}
      bg={
        {
          solid: `$${schema}`,
          flat: `$${schema}`,
          outline: "transparent",
          ghost: "transparent",
        }[variant] as Color | ColorVariable
      }
      bw={
        {
          solid: 1,
          flat: 1,
          outline: 2,
          ghost: 0,
        }[variant]
      }
      bc={
        {
          solid: "$divider",
          flat: "$divider.200",
          outline: "$divider",
          ghost: "transparent",
        }[variant] as Color | ColorVariable
      }
      bs="solid"
      radius={{ xxs: 1, xs: 2, sm: 3, md: 4, lg: 5, xl: 6, xxl: 7 }[size]}
      opacity={props.disabled ? "$disabled" : undefined}
      transition={{ duration: 200 }}
      {...props}
      hover={{
        opacity: "$hover",
        bg: `$${schema}`,
        ...props.hover,
      }}
    />
  );
};
