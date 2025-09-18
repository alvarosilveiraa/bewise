import { ReactNode } from "react";
import { ThemeColorsConfig } from "@bewise/ui/type/ThemeColorsConfig";
import { BoxStyle } from "../Box/Props";
import { IconProps } from "../Icon/Props";
import { TextStyle } from "../Text/Props";

export type ButtonStyleProps = BoxStyle & TextStyle;

export type ButtonProps = ButtonStyleProps & {
  id?: string;
  ariaLabel?: string;
  ariaExpanded?: boolean;
  ariaControls?: string;
  schema?: keyof ThemeColorsConfig;
  variant?: "solid" | "flat" | "outline" | "ghost";
  size?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  hover?: ButtonStyleProps;
  onPress?: () => void;
  startContent?: ReactNode;
  startIcon?: IconProps;
  endContent?: ReactNode;
  endIcon?: IconProps;
  icon?: IconProps;
  disabled?: boolean;
  hidden?: boolean;
  children?: ReactNode;
};
