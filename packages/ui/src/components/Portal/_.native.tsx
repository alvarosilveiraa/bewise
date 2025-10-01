import { Portal } from "@gorhom/portal";
import { PortalProps } from "./Props";

export const _Portal = ({ children }: PortalProps) => (
  <Portal>{children}</Portal>
);
