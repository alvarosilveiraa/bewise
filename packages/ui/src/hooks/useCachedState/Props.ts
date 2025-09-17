import { AsyncStorage } from "@bewise/common/types/AsyncStorage";

export type UseCachedStateSettings<T = unknown> = {
  ttl?: number;
  storage?: AsyncStorage;
  loader?: () => T | Promise<T>;
  onChange?: (state: T) => void;
};
