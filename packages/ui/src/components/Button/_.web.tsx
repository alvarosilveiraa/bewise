"use client";

import { useMemo, useState } from "react";
import { TEXT_STYLE_PROPS } from "@bewise/ui/constants/TEXT_STYLE_PROPS";
import { useStyle } from "@bewise/ui/hooks/useStyle";
import { useTransition } from "@bewise/ui/hooks/useTransition";
import { boxStyleMapper } from "@bewise/ui/mappers/boxStyle";
import { pick } from "lodash";
import { Text } from "../Text";
import { ButtonProps } from "./Props";

export const _Button = ({
  id,
  hover,
  onPress,
  startContent = null,
  endContent = null,
  disabled,
  children,
  ...props
}: ButtonProps) => {
  const [hovering, setHovering] = useState(false);
  const style = useStyle(
    {
      ...props,
      ...(hover && !disabled && hovering ? hover : {}),
    },
    boxStyleMapper,
  );
  const transition = useTransition(style);
  const hoverTextStyleProps = useMemo(
    () => (hover && !disabled && hovering ? pick(hover, TEXT_STYLE_PROPS) : {}),
    [hover, disabled, hovering],
  );
  const textStyleProps = useMemo(
    () => ({ ...pick(props, TEXT_STYLE_PROPS), ...hoverTextStyleProps }),
    [props, hoverTextStyleProps],
  );

  return (
    <button
      id={id}
      style={transition}
      onClick={onPress}
      onMouseOver={() => setHovering(true)}
      onMouseOut={() => setHovering(false)}
      disabled={disabled}
    >
      {startContent}
      <Text as="span" flex={1} {...textStyleProps}>
        {children}
      </Text>
      {endContent}
    </button>
  );
};
