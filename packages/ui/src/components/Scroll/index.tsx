import { ScrollProps } from "./Props";
import { _Scroll } from "./_";

export const Scroll = (props: ScrollProps) => (
  <_Scroll overflowY w="100%" {...props} />
);
