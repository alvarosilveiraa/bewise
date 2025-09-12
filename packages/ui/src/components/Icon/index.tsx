import { IconProps } from "./Props";
import { _Icon } from "./_";

export const Icon = ({ hidden, ...props }: IconProps) => {
  if (hidden) return null;
  return <_Icon color="$foreground" size={16} {...props} />;
};
