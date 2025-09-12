import { RedirectProps } from "./Props";
import { _Redirect } from "./_";

export const Redirect = ({ hidden, ...props }: RedirectProps) => {
  if (hidden) return null;
  return <_Redirect {...props} />;
};
