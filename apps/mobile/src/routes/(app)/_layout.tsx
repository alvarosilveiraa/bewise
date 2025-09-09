import { Suspense } from "react";
import { useThemeContext } from "@bewise/ui/providers/Theme/useThemeContext";
import { Stack } from "expo-router";
import { SystemBars } from "react-native-edge-to-edge";

export default function Layout() {
  const { themeMode, inverseThemeMode } = useThemeContext();

  return (
    <Suspense fallback={null}>
      <Stack screenOptions={{ headerShown: false }} />
      <SystemBars
        style={{ statusBar: inverseThemeMode, navigationBar: themeMode }}
      />
    </Suspense>
  );
}
