import { BoxStyle } from "../Box/Props";
import { NavigateProps } from "../Navigate/Props";
import { TextStyle } from "../Text/Props";

export type LinkStyleProps = BoxStyle & TextStyle;

export type LinkProps = LinkStyleProps & NavigateProps;
