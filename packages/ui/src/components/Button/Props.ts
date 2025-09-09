import { ReactNode } from "react";
import { BoxStyle } from "../Box/Props";
import { TextStyle } from "../Text/Props";

export type ButtonStyleProps = BoxStyle & TextStyle;

export type ButtonProps = ButtonStyleProps & {
  id?: string;
  variant?: "solid" | "flat" | "outline" | "ghost";
  hover?: ButtonStyleProps;
  onPress?: () => void;
  startContent?: ReactNode;
  endContent?: ReactNode;
  disabled?: boolean;
  children?: string;
};
