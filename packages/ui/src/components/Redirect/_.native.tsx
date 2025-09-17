import { Redirect } from "expo-router";
import { RedirectProps } from "./Props";

export const _Redirect = ({ to, type = "replace" }: RedirectProps) => {
  if (!to) return null;
  return <Redirect href={to} withAnchor={type === "replace"} />;
};
