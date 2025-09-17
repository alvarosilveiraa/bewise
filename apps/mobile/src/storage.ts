import { AsyncStorage } from "@bewise/common/types/AsyncStorage";
import NativeStorage from "@react-native-async-storage/async-storage";

export const localStorage: AsyncStorage = {
  getItem: (key: string) => NativeStorage.getItem(key),
  setItem: (key: string, value: string) => NativeStorage.setItem(key, value),
  removeItem: (key: string) => NativeStorage.removeItem(key),
};
