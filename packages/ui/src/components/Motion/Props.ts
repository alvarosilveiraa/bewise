import { ReactNode } from "react";
import { Transition } from "@bewise/ui/type/Transition";
import { BoxStyle } from "../Box/Props";
import { TextStyle } from "../Text/Props";

export type MotionStyleProps = BoxStyle & TextStyle;

export type MotionProps = MotionStyleProps & {
  id?: string;
  ariaLabelledBy?: string;
  initial?: MotionStyleProps;
  animate?: MotionStyleProps;
  transition?: Omit<Transition, "key">;
  onPress?: () => void;
  children?: ReactNode;
  hidden?: boolean;
};
