import { EasingEnum } from "../enums/Easing";

export type Transition = {
  key: string;
  duration: number;
  easing?: EasingEnum;
};
