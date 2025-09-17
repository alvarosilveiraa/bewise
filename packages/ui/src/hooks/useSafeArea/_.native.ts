import { SafeArea } from "@bewise/ui/type/SafeArea";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const _useSafeArea = () => {
  const safeArea: SafeArea = useSafeAreaInsets();

  return safeArea;
};
