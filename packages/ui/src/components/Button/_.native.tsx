import { useMemo } from "react";
import { TEXT_STYLE_PROPS } from "@bewise/ui/constants/TEXT_STYLE_PROPS";
import { pick } from "lodash";
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
  const textStyleProps = useMemo(() => pick(props, TEXT_STYLE_PROPS), [props]);

  if (onPress)
    return (
      <Pressable id={id} onPress={onPress} disabled={disabled}>
        <Box {...props}>
          {startContent}
          <Text {...textStyleProps}>{children}</Text>
          {endContent}
        </Box>
      </Pressable>
    );
  return (
    <Box id={id} {...props}>
      {startContent}
      <Text {...textStyleProps}>{children}</Text>
      {endContent}
    </Box>
  );
};
