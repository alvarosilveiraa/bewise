"use client";

import { useCallback } from "react";
import { useHover } from "@bewise/ui/hooks/useHover";
import { useStyle } from "@bewise/ui/hooks/useStyle";
import { useStyleProps } from "@bewise/ui/hooks/useStyleProps";
import { useTransition } from "@bewise/ui/hooks/useTransition";
import { boxStyleMapper } from "@bewise/ui/mappers/boxStyle";
import { isString } from "lodash";
import { Icon } from "../Icon";
import { IconProps } from "../Icon/Props";
import { Text } from "../Text";
import { ButtonProps } from "./Props";

export const _Button = ({
  id,
  ariaLabel,
  ariaExpanded,
  ariaControls,
  hover,
  onPress,
  startContent,
  startIcon,
  endContent,
  endIcon,
  icon,
  disabled,
  children,
  ...props
}: ButtonProps) => {
  const { setHovering, hoverProps } = useHover(props, hover, disabled);
  const style = useStyle(hoverProps, boxStyleMapper);
  const transition = useTransition(style);
  const { textStyleProps } = useStyleProps(hoverProps);
  const textStyle = useStyle(textStyleProps);

  const renderIcon = useCallback(
    (iconProps?: IconProps) => {
      if (!iconProps) return null;
      return (
        <Icon
          color={props.color}
          size={textStyle.fontSize as number | undefined}
          {...iconProps}
        />
      );
    },
    [props.color, textStyle.fontSize],
  );

  return (
    <button
      id={id}
      aria-label={ariaLabel}
      aria-expanded={ariaExpanded}
      aria-controls={ariaControls}
      style={transition}
      onClick={onPress}
      onMouseOver={() => setHovering(true)}
      onMouseOut={() => setHovering(false)}
      disabled={disabled}
    >
      {startContent}
      {renderIcon(startIcon)}
      {icon ? (
        renderIcon(icon)
      ) : isString(children) ? (
        <Text
          as="span"
          flex={props.justify === "space-between" ? 1 : undefined}
          {...textStyleProps}
        >
          {children}
        </Text>
      ) : (
        children
      )}
      {renderIcon(endIcon)}
      {endContent}
    </button>
  );
};
