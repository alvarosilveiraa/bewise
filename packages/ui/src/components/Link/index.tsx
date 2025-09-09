import { isString } from "lodash";
import { Navigate } from "../Navigate";
import { Text } from "../Text";
import { LinkProps } from "./Props";

export const Link = ({ id, to, type, children, ...props }: LinkProps) => {
  if (isString(children))
    return (
      <Navigate id={id} to={to} type={type}>
        <Text textDecorationLine="underline" {...props}>
          {children}
        </Text>
      </Navigate>
    );
  return (
    <Navigate id={id} to={to} type={type}>
      {children}
    </Navigate>
  );
};
