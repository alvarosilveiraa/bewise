"use client";

import { CSSProperties, useMemo } from "react";
import { useStyle } from "@bewise/ui/hooks/useStyle";
import { useTransition } from "@bewise/ui/hooks/useTransition";
import { TextProps } from "./Props";

export const _Text = ({ id, as, lines, children, ...props }: TextProps) => {
  const style = useStyle(props);
  const transition = useTransition(style);
  const whiteSpace = useMemo(
    () => "pre-wrap" as CSSProperties["whiteSpace"],
    [],
  );
  const wordBreak = useMemo(
    () => "break-word" as CSSProperties["wordBreak"],
    [],
  );
  const ellipsis = useMemo(() => {
    if (!lines) return;
    return {
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: lines,
      overflow: "hidden",
      textOverflow: "ellipsis",
    } as CSSProperties;
  }, [lines]);

  return {
    h1: (
      <h1
        id={id}
        style={{
          ...transition,
          ...ellipsis,
          whiteSpace,
          wordBreak,
        }}
      >
        {children}
      </h1>
    ),
    h2: (
      <h2 id={id} style={{ ...transition, ...ellipsis, whiteSpace, wordBreak }}>
        {children}
      </h2>
    ),
    h3: (
      <h3 id={id} style={{ ...transition, ...ellipsis, whiteSpace, wordBreak }}>
        {children}
      </h3>
    ),
    h4: (
      <h4 id={id} style={{ ...transition, ...ellipsis, whiteSpace, wordBreak }}>
        {children}
      </h4>
    ),
    h5: (
      <h5 id={id} style={{ ...transition, ...ellipsis, whiteSpace, wordBreak }}>
        {children}
      </h5>
    ),
    p: (
      <p
        id={id}
        style={{
          ...transition,
          ...ellipsis,
          whiteSpace,
          wordBreak,
        }}
      >
        {children}
      </p>
    ),
    span: (
      <span
        id={id}
        style={{ ...transition, ...ellipsis, whiteSpace, wordBreak }}
      >
        {children}
      </span>
    ),
  }[as!];
};
