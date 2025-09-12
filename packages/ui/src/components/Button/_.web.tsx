"use client";

import { useHover } from "@bewise/ui/hooks/useHover";
import { useStyle } from "@bewise/ui/hooks/useStyle";
import { useStyleProps } from "@bewise/ui/hooks/useStyleProps";
import { useTransition } from "@bewise/ui/hooks/useTransition";
import { boxStyleMapper } from "@bewise/ui/mappers/boxStyle";
import { isString } from "lodash";
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
  const { setHovering, hoverProps } = useHover(props, hover, disabled);
  const style = useStyle(hoverProps, boxStyleMapper);
  const transition = useTransition(style);
  const { textStyleProps } = useStyleProps(hoverProps);

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
      {isString(children) ? (
        <Text as="span" flex={1} {...textStyleProps}>
          {children}
        </Text>
      ) : (
        children
      )}
      {endContent}
    </button>
  );
};
