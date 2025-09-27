import { RecordUnknown } from "@bewise/common/types/RecordUnknown";
import { Transition } from "@bewise/ui/type/Transition";
import { isArray, isObject, kebabCase, omit } from "lodash";

export const _useTransition = <P extends RecordUnknown = RecordUnknown>(
  props: P,
) => {
  if (!props.transition || !isObject(props.transition))
    return omit(props, "transition") as P;

  if (isArray(props.transition)) {
    const result: string[] = [];
    (props.transition as Transition[]).forEach(({ key, duration, easing }) => {
      result.push(`${kebabCase(key)} ${duration}ms ${easing || "ease"}`);
    });
    return { ...props, transition: result.join(", ") } as P;
  }

  const { duration, easing } = props.transition as Transition;
  return { ...props, transition: `all ${duration}ms ${easing || "ease"}` } as P;
};
