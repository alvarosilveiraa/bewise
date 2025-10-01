import { useThemeContext } from "@bewise/ui/providers/Theme/useContext";
import { Stack } from "expo-router";
import { SystemBars } from "react-native-edge-to-edge";
import { useThemeFonts } from "@/fonts";

export default function Layout() {
  const { themeMode, inverseThemeMode, themeColors } = useThemeContext();
  const { fontsLoaded, hasFontsError } = useThemeFonts();

  if (!fontsLoaded || hasFontsError) return null;
  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: themeColors.background.DEFAULT },
        }}
      />
      <SystemBars
        style={{ statusBar: inverseThemeMode, navigationBar: themeMode }}
      />
    </>
  );
}
