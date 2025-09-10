import { ReactNode } from "react";
import { Color } from "@bewise/ui/type/Color";
import { ColorVariable } from "@bewise/ui/type/ColorVariable";
import { FontFamily } from "@bewise/ui/type/FontFamily";
import { FontSize } from "@bewise/ui/type/FontSize";
import { FontStyle } from "@bewise/ui/type/FontStyle";
import { FontVariant } from "@bewise/ui/type/FontVariant";
import { FontWeight } from "@bewise/ui/type/FontWeight";
import { TextAlign } from "@bewise/ui/type/TextAlign";
import { TextDecorationLine } from "@bewise/ui/type/TextDecorationLine";
import { TextDecorationStyle } from "@bewise/ui/type/TextDecorationStyle";
import { TextTransform } from "@bewise/ui/type/TextTransform";
import { WritingDirection } from "@bewise/ui/type/WritingDirection";
import { BoxStyle } from "../Box/Props";

export type TextStyle = {
  color?: ColorVariable | Color;
  fontFamily?: FontFamily;
  fontSize?: FontSize;
  fontStyle?: FontStyle;
  fontVariant?: FontVariant;
  fontWeight?: FontWeight;
  letterSpacing?: number;
  lineHeight?: number;
  textAlign?: TextAlign;
  textDecorationColor?: ColorVariable | Color;
  textDecorationLine?: TextDecorationLine;
  textDecorationStyle?: TextDecorationStyle;
  textShadowColor?: ColorVariable | Color;
  textShadowOffset?: { width: number; height: number };
  textShadowRadius?: number;
  textTransform?: TextTransform;
  writingDirection?: WritingDirection;
};

export type TextStyleKey = keyof TextStyle;

export type TextStyleProps = BoxStyle & TextStyle;

export type TextProps = TextStyleProps & {
  id?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "span";
  children: ReactNode;
};
