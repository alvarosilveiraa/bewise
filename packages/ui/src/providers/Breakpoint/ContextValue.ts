import {
  BreakpointProviderCompareOperation,
  BreakpointProviderSetupConfig,
} from "./Props";

export type BreakpointContextValue = {
  setupBreakpoint: (config?: BreakpointProviderSetupConfig) => {
    matches: Record<string, boolean>;
    compare: (
      target: string,
      operation: BreakpointProviderCompareOperation,
    ) => boolean;
    eq: (target: string) => boolean;
    lt: (target: string) => boolean;
    lte: (target: string) => boolean;
    gt: (target: string) => boolean;
    gte: (target: string) => boolean;
  };
};
