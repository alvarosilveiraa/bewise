import { ReactNode } from "react";
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
  color?: string;
  fontFamily?: string;
  fontSize?: number;
  fontStyle?: FontStyle;
  fontVariant?: FontVariant;
  fontWeight?: FontWeight;
  letterSpacing?: number;
  lineHeight?: number;
  textAlign?: TextAlign;
  textDecorationColor?: string;
  textDecorationLine?: TextDecorationLine;
  textDecorationStyle?: TextDecorationStyle;
  textShadowColor?: string;
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
