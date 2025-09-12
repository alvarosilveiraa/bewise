import { useContext } from "react";
import { _BreakpointContext } from "./_Context";

export const useBreakpointContext = () => useContext(_BreakpointContext);
