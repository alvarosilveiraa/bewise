import { ReactNode } from "react";

export type NavigateProps = {
  id?: string;
  to?: string;
  type?: "push" | "replace" | "back";
  children: ReactNode;
};
