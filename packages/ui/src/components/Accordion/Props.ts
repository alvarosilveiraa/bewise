import { FC, ReactNode } from "react";

export type AccordionHeaderProps<I> = {
  item: I;
  onPress: () => void;
  children?: ReactNode;
};

export type AccordionTitleProps<I> = {
  item: I;
};

export type AccordionContentProps<I> = {
  item: I;
};

export type AccordionProps<I> = {
  data?: I[];
  Header?: FC<AccordionHeaderProps<I>>;
  Title?: FC<AccordionTitleProps<I>>;
  title?: (item: I) => string;
  Content?: FC<AccordionContentProps<I>>;
  content?: (item: I) => string;
  multiple?: boolean;
  hidden?: boolean;
};
