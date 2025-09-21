"use client";

import { useStyleProps } from "@bewise/ui/hooks/useStyleProps";
import { isString } from "lodash";
import { Navigate } from "../Navigate";
import { Text } from "../Text";
import { LinkProps } from "./Props";

export const Link = ({
  id,
  ariaLabel,
  ariaCurrent,
  to,
  type,
  hover,
  children,
  ...props
}: LinkProps) => {
  const { boxStyleProps, textStyleProps } = useStyleProps(props);

  if (isString(children))
    return (
      <Navigate
        id={id}
        ariaLabel={ariaLabel}
        ariaCurrent={ariaCurrent}
        to={to}
        type={type}
        hover={hover}
        {...boxStyleProps}
      >
        <Text textDecorationLine="underline" {...textStyleProps}>
          {children}
        </Text>
      </Navigate>
    );
  return (
    <Navigate
      id={id}
      ariaLabel={ariaLabel}
      ariaCurrent={ariaCurrent}
      to={to}
      type={type}
      hover={hover}
      {...boxStyleProps}
    >
      {children}
    </Navigate>
  );
};
