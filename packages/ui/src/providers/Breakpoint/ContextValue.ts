import { Layout } from "@bewise/ui/type/Layout";
import {
  BreakpointProviderCompareOperation,
  BreakpointProviderSetupConfig,
} from "./Props";

export type BreakpointContextValue = {
  resize: Layout | null;
  setupBreakpoint: (config?: BreakpointProviderSetupConfig) => {
    matches: Record<string, boolean>;
    compare: (
      target: string,
      operation: BreakpointProviderCompareOperation,
    ) => boolean;
    select<T = unknown, F = T>(
      targets: Record<string, T>,
      fallback?: F,
    ): T | F | undefined;
    eq: (target: string) => boolean;
    lt: (target: string) => boolean;
    lte: (target: string) => boolean;
    gt: (target: string) => boolean;
    gte: (target: string) => boolean;
  };
};
