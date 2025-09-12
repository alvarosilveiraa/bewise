import { ReactNode } from "react";
import { ThemeColorsConfig } from "@bewise/ui/type/ThemeColorsConfig";
import { BoxStyle } from "../Box/Props";
import { TextStyle } from "../Text/Props";

export type ButtonStyleProps = BoxStyle & TextStyle;

export type ButtonProps = ButtonStyleProps & {
  id?: string;
  schema?: keyof ThemeColorsConfig;
  variant?: "solid" | "flat" | "outline" | "ghost";
  size?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  hover?: ButtonStyleProps;
  onPress?: () => void;
  startContent?: ReactNode;
  endContent?: ReactNode;
  iconOnly?: boolean;
  disabled?: boolean;
  hidden?: boolean;
  children?: ReactNode;
};
