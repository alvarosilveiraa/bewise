import { Transition } from "@bewise/ui/type/Transition";
import { isArray, isObject, kebabCase, omit } from "lodash";

export const _useTransition = (props: Record<string, unknown>) => {
  if (!props.transition || !isObject(props.transition))
    return omit(props, "transition");

  if (isArray(props.transition)) {
    const result: string[] = [];
    (props.transition as Transition[]).forEach(({ key, duration, easing }) => {
      result.push(`${kebabCase(key)} ${duration}ms ${easing || "ease"}`);
    });
    return { ...props, transition: result.join(", ") };
  }

  const { duration, easing } = props.transition as Transition;
  return { ...props, transition: `all ${duration}ms ${easing || "ease"}` };
};
