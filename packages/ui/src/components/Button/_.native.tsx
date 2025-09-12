import { useCallback } from "react";
import { useStyleProps } from "@bewise/ui/hooks/useStyleProps";
import { isString } from "lodash";
import { Pressable } from "react-native";
import { Box } from "../Box";
import { Text } from "../Text";
import { ButtonProps } from "./Props";

export const _Button = ({
  id,
  onPress,
  startContent = null,
  endContent = null,
  disabled,
  children,
  ...props
}: ButtonProps) => {
  const { textStyleProps } = useStyleProps(props);

  const renderChildren = useCallback(
    (id?: string) => (
      <Box id={id} {...props}>
        {startContent}
        {isString(children) ? (
          <Text
            flex={props.w && props.w !== "auto" ? 1 : undefined}
            {...textStyleProps}
          >
            {children}
          </Text>
        ) : (
          children
        )}
        {endContent}
      </Box>
    ),
    [startContent, endContent, children, props, textStyleProps],
  );

  if (onPress)
    return (
      <Pressable id={id} onPress={onPress} disabled={disabled}>
        {renderChildren()}
      </Pressable>
    );
  return renderChildren(id);
};
