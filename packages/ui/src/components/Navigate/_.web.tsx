import { isString } from "lodash";
import Link from "next/link";
import { NavigateProps } from "./Props";

export const _Navigate = ({ id, to, type, children }: NavigateProps) => {
  if (!to) return children;
  if (isString(children)) return null;
  return (
    <Link
      id={id}
      style={{ cursor: "pointer", textDecoration: "none", color: "inherit" }}
      href={to}
      replace={type === "replace"}
    >
      {children}
    </Link>
  );
};
