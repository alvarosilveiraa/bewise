import { RedirectType, redirect } from "next/navigation";
import { RedirectProps } from "./Props";

export const _Redirect = ({ to, type = "replace" }: RedirectProps) => {
  if (!to) return null;
  redirect(
    to,
    { push: RedirectType.push, replace: RedirectType.replace }[type],
  );
};
