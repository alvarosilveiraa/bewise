import { ResizeMode } from "@bewise/ui/type/ResizeMode";
import { BoxStyle } from "../Box/Props";

export type ImageStyle = {
  resizeMode?: ResizeMode;
  tintColor?: string;
};

export type ImageStyleKey = keyof ImageStyle;

export type ImageStyleProps = BoxStyle & ImageStyle;

export type ImageProps = ImageStyleProps & {
  id?: string;
  alt?: string;
  src?: string;
  priority?: boolean;
  hidden?: boolean;
};
