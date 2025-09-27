import { EasingEnum } from "../enums/Easing";
import { PlatformEnum } from "../enums/Platform";

export type Transition = {
  key: string;
  duration: number;
  easing?: EasingEnum;
  platforms?: PlatformEnum[];
};
