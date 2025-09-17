import { PropsWithChildren } from "react";
import { AsyncStorage } from "@bewise/common/types/AsyncStorage";

export type StorageProviderProps = PropsWithChildren & {
  localStorage: AsyncStorage;
  sessionStorage?: AsyncStorage;
  cookieStorage?: AsyncStorage;
};
