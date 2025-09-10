import { Suspense } from "react";
import { useThemeContext } from "@bewise/ui/providers/Theme/useContext";
import { Stack } from "expo-router";
import { SystemBars } from "react-native-edge-to-edge";
import { useThemeFonts } from "@/fonts";

export default function Layout() {
  const { themeMode, inverseThemeMode } = useThemeContext();
  const { fontsLoaded, hasFontsError } = useThemeFonts();

  if (!fontsLoaded || hasFontsError) return null;
  return (
    <Suspense fallback={null}>
      <Stack screenOptions={{ headerShown: false }} />
      <SystemBars
        style={{ statusBar: inverseThemeMode, navigationBar: themeMode }}
      />
    </Suspense>
  );
}
