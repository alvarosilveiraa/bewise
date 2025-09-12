import { NavigateProps } from "./Props";
import { _Navigate } from "./_";

export const Navigate = ({ hidden, ...props }: NavigateProps) => {
  if (hidden) return null;
  return <_Navigate {...props} />;
};
