"use client";

import { CSSProperties, useMemo } from "react";
import { useStyle } from "@bewise/ui/hooks/useStyle";
import { TextProps } from "./Props";

export const _Text = ({ id, as, lines, children, ...props }: TextProps) => {
  const style = useStyle(props);
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
  const extendedStyle = useMemo(
    () => ({
      ...style,
      ...ellipsis,
      whiteSpace,
      wordBreak,
    }),
    [style, ellipsis, whiteSpace, wordBreak],
  );

  return {
    h1: (
      <h1 id={id} style={extendedStyle}>
        {children}
      </h1>
    ),
    h2: (
      <h2 id={id} style={extendedStyle}>
        {children}
      </h2>
    ),
    h3: (
      <h3 id={id} style={extendedStyle}>
        {children}
      </h3>
    ),
    h4: (
      <h4 id={id} style={extendedStyle}>
        {children}
      </h4>
    ),
    h5: (
      <h5 id={id} style={extendedStyle}>
        {children}
      </h5>
    ),
    p: (
      <p id={id} style={extendedStyle}>
        {children}
      </p>
    ),
    span: (
      <span id={id} style={extendedStyle}>
        {children}
      </span>
    ),
  }[as!];
};
