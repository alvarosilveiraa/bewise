import { BoxStyle } from "../Box/Props";
import { TextStyle } from "../Text/Props";

export type InputStyle = {
  caretColor?: string;
  selectionColor?: string;
};

export type InputStyleKey = keyof InputStyle;

export type InputStyleProps = BoxStyle & TextStyle & InputStyle;

export type InputProps = InputStyleProps & {
  id?: string;
};
