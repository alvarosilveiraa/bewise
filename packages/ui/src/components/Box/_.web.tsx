"use client";

import { useCallback, useRef } from "react";
import { useHover } from "@bewise/ui/hooks/useHover";
import { useLayout } from "@bewise/ui/hooks/useLayout";
import { useStyle } from "@bewise/ui/hooks/useStyle";
import { useTransition } from "@bewise/ui/hooks/useTransition";
import { boxStyleMapper } from "@bewise/ui/mappers/boxStyle";
import { isFunction } from "lodash";
import { BoxProps } from "./Props";

export const _Box = ({
  id,
  as,
  ariaLabelledBy,
  hover,
  onPress,
  onLayout,
  onLayoutChange,
  disabled,
  children,
  ...props
}: BoxProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { hovering, hoverProps, onMouseOver, onMouseOut } = useHover(
    props,
    hover,
    disabled,
  );
  const style = useStyle(hoverProps, boxStyleMapper);
  const transition = useTransition(style);
  useLayout({ ref, onLayout, onLayoutChange });

  const renderChildren = useCallback(() => {
    if (isFunction(children)) return children({ hovering });
    return children;
  }, [children, hovering]);

  return {
    div: (
      <div
        ref={ref}
        id={id}
        aria-labelledby={ariaLabelledBy}
        style={transition}
        onClick={disabled ? undefined : onPress}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
      >
        {renderChildren()}
      </div>
    ),
    header: (
      <header
        ref={ref}
        id={id}
        aria-labelledby={ariaLabelledBy}
        style={transition}
        onClick={disabled ? undefined : onPress}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
      >
        {renderChildren()}
      </header>
    ),
    nav: (
      <nav
        ref={ref}
        id={id}
        aria-labelledby={ariaLabelledBy}
        style={transition}
        onClick={disabled ? undefined : onPress}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
      >
        {renderChildren()}
      </nav>
    ),
    section: (
      <section
        ref={ref}
        id={id}
        aria-labelledby={ariaLabelledBy}
        style={transition}
        onClick={disabled ? undefined : onPress}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
      >
        {renderChildren()}
      </section>
    ),
    footer: (
      <footer
        ref={ref}
        id={id}
        aria-labelledby={ariaLabelledBy}
        style={transition}
        onClick={disabled ? undefined : onPress}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
      >
        {renderChildren()}
      </footer>
    ),
  }[as!];
};
