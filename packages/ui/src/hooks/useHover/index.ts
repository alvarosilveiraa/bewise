import { useMemo, useState } from "react";

export const useHover = <P extends object = Record<string, unknown>>(
  props: P,
  hover?: P,
  disabled?: boolean,
) => {
  const [hovering, setHovering] = useState(false);
  const hoverProps = useMemo(
    () => ({
      ...props,
      ...(hover && !disabled && hovering ? hover : {}),
    }),
    [hover, props, disabled, hovering],
  );

  return {
    hovering,
    setHovering,
    hoverProps,
  };
};
