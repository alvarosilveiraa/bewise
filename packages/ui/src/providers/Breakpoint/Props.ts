import { PropsWithChildren } from "react";

export type BreakpointProviderProps = PropsWithChildren & {
  config?: BreakpointProviderSetupConfig;
};

export type BreakpointProviderSize = {
  min?: number;
  max?: number;
};

export type BreakpointProviderSetupConfig = Record<
  string,
  BreakpointProviderSize
>;

export type BreakpointProviderCompareOperation =
  | "eq"
  | "lt"
  | "lte"
  | "gt"
  | "gte";
