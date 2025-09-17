import { ReactNode } from "react";
import { BoxStyle } from "../Box/Props";

export type NavigateStyleProps = BoxStyle;

export type NavigateProps = NavigateStyleProps & {
  id?: string;
  to?: string;
  type?: "push" | "replace" | "back";
  hover?: NavigateStyleProps;
  blank?: boolean;
  disabled?: boolean;
  hidden?: boolean;
  children: ReactNode;
};
