import { ReactNode } from "react";
import { BoxStyle } from "../Box/Props";
import { NavigateStyleProps } from "../Navigate/Props";
import { TextStyle } from "../Text/Props";

export type LinkStyleProps = BoxStyle & TextStyle;

export type LinkProps = LinkStyleProps & {
  id?: string;
  ariaLabel?: string;
  ariaCurrent?: "page" | "step" | "date" | "time" | "location" | boolean;
  to?: string;
  type?: "push" | "replace" | "back";
  hover?: NavigateStyleProps;
  blank?: boolean;
  disabled?: boolean;
  hidden?: boolean;
  children: ReactNode;
};
