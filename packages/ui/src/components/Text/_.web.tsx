"use client";

import { useStyle } from "@bewise/ui/hooks/useStyle";
import { useTransition } from "@bewise/ui/hooks/useTransition";
import { TextProps } from "./Props";

export const _Text = ({ id, as, children, ...props }: TextProps) => {
  const style = useStyle(props);
  const transition = useTransition(style);

  return {
    h1: (
      <h1 id={id} style={transition}>
        {children}
      </h1>
    ),
    h2: (
      <h2 id={id} style={transition}>
        {children}
      </h2>
    ),
    h3: (
      <h3 id={id} style={transition}>
        {children}
      </h3>
    ),
    h4: (
      <h4 id={id} style={transition}>
        {children}
      </h4>
    ),
    h5: (
      <h5 id={id} style={transition}>
        {children}
      </h5>
    ),
    p: (
      <p id={id} style={transition}>
        {children}
      </p>
    ),
    span: (
      <span id={id} style={transition}>
        {children}
      </span>
    ),
  }[as!];
};
