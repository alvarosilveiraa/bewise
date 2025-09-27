import { useCallback, useEffect, useMemo, useState } from "react";
import { RecordUnknown } from "@bewise/common/types/RecordUnknown";
import { isBoolean } from "lodash";

export const useHover = <P extends RecordUnknown = RecordUnknown>(
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

  useEffect(() => {
    if (!isBoolean(props.hovering)) return;
    setHovering(props.hovering);
  }, [props.hovering]);

  const onMouseOver = useCallback(() => {
    if (isBoolean(props.hovering)) return;
    setHovering(true);
  }, [props.hovering]);

  const onMouseOut = useCallback(() => {
    if (isBoolean(props.hovering)) return;
    setHovering(false);
  }, [props.hovering]);

  return {
    hovering,
    setHovering,
    hoverProps,
    onMouseOver,
    onMouseOut,
  };
};
