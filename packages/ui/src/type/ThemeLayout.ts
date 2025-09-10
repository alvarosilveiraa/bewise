import { FontWeight } from "./FontWeight";

export type ThemeLayout = {
  fontFamily: string;
  fontSize: {
    h1: number;
    h2: number;
    h3: number;
    h4: number;
    h5: number;
    p: number;
    span: number;
  };
  fontWeight: {
    h1: FontWeight;
    h2: FontWeight;
    h3: FontWeight;
    h4: FontWeight;
    h5: FontWeight;
    p: FontWeight;
    span: FontWeight;
  };
  border: {
    sm: number;
    md: number;
    lg: number;
  };
  opacity: {
    disabled: number;
    hover: number;
  };
  radius: {
    sm: number;
    md: number;
    lg: number;
  };
  shadow: {
    sm: number;
    md: number;
    lg: number;
  };
  spacing: number;
};
