"use client";

import { useHover } from "@bewise/ui/hooks/useHover";
import { useStyle } from "@bewise/ui/hooks/useStyle";
import { useTransition } from "@bewise/ui/hooks/useTransition";
import { isString } from "lodash";
import Link from "next/link";
import { NavigateProps } from "./Props";

export const _Navigate = ({
  id,
  ariaLabel,
  ariaCurrent,
  to,
  type,
  hover,
  blank,
  disabled,
  children,
  ...props
}: NavigateProps) => {
  const { setHovering, hoverProps } = useHover(props, hover, disabled);
  const style = useStyle(hoverProps);
  const transition = useTransition(style);

  if (!to) return children;
  if (isString(children)) return null;
  return (
    <Link
      id={id}
      aria-label={ariaLabel}
      aria-current={ariaCurrent}
      style={{
        cursor: "pointer",
        textDecoration: "none",
        color: "inherit",
        ...transition,
      }}
      href={to}
      target={blank ? "_blank" : undefined}
      rel={blank ? "noopener noreferrer" : undefined}
      onMouseOver={() => setHovering(true)}
      onMouseOut={() => setHovering(false)}
      replace={type === "replace"}
    >
      {children}
    </Link>
  );
};
