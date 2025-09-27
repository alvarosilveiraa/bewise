import { createPortal } from "react-dom";
import { PortalProps } from "./Props";

export const _Portal = ({ children }: PortalProps) =>
  createPortal(children, document.body);
