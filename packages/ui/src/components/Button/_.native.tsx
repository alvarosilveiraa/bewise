import { useCallback } from "react";
import { useStyle } from "@bewise/ui/hooks/useStyle";
import { useStyleProps } from "@bewise/ui/hooks/useStyleProps";
import { isString } from "lodash";
import { Pressable } from "react-native";
import { Box } from "../Box";
import { Icon } from "../Icon";
import { IconProps } from "../Icon/Props";
import { Text } from "../Text";
import { ButtonProps } from "./Props";

export const _Button = ({
  id,
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
  const { textStyleProps } = useStyleProps(props);
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

  const renderChildren = useCallback(
    (id?: string) => (
      <Box id={id} {...props}>
        {startContent}
        {renderIcon(startIcon)}
        {icon ? (
          renderIcon(icon)
        ) : isString(children) ? (
          <Text
            flex={
              props.w && props.w !== "auto" && props.justify === "space-between"
                ? 1
                : undefined
            }
            {...textStyleProps}
          >
            {children}
          </Text>
        ) : (
          children
        )}
        {renderIcon(endIcon)}
        {endContent}
      </Box>
    ),
    [
      startContent,
      startIcon,
      endContent,
      endIcon,
      icon,
      children,
      props,
      textStyleProps,
      renderIcon,
    ],
  );

  if (onPress)
    return (
      <Pressable id={id} onPress={onPress} disabled={disabled}>
        {renderChildren()}
      </Pressable>
    );
  return renderChildren(id);
};
