import { FC } from "react";
import { BoxProps } from "../Box/Props";

export type GridStyleProps = BoxProps;

export type GridProps<I> = GridStyleProps & {
  cols?: number;
  data?: I[];
  Item?: FC<{ item: I }>;
};
