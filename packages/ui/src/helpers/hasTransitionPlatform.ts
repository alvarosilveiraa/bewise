import { isArray } from "lodash";
import { PLATFORM } from "../constants/PLATFORM";
import { Transition } from "../type/Transition";

export const hasTransitionPlatform = (
  transition: Omit<Transition, "key"> | Transition[],
) => {
  if (isArray(transition))
    return transition.some(
      ({ platforms }) =>
        !platforms || platforms.filter(platform => platform === PLATFORM),
    );
  return (
    !transition.platforms ||
    transition.platforms.filter(platform => platform === PLATFORM)
  );
};
