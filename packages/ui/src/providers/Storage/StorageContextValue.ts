import { AsyncStorage } from "@bewise/common/types/AsyncStorage";

export type StorageContextValue = {
  localStorage: AsyncStorage;
  sessionStorage: AsyncStorage;
  cookieStorage: AsyncStorage;
};
