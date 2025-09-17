import { RefObject } from "react";
import { Layout } from "@bewise/ui/type/Layout";

export type UseLayoutProps<R> = {
  ref?: RefObject<R>;
  onLayout?: (layout: Layout) => void;
  onLayoutChange?: (layout: Layout) => void;
};
