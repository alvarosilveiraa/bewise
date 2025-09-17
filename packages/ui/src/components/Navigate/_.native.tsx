import { useCallback } from "react";
import { useRouter } from "expo-router";
import { isString } from "lodash";
import { Box } from "../Box";
import { NavigateProps } from "./Props";

export const _Navigate = ({
  id,
  to,
  type = "push",
  children,
  ...props
}: NavigateProps) => {
  const router = useRouter();

  const onPress = useCallback(() => {
    if (!to) return;
    router[type](to);
  }, [to, router]);

  if (!to) return children;
  if (isString(children)) return null;
  return (
    <Box id={id} onPress={onPress} {...props}>
      {children}
    </Box>
  );
};
