import { BreakpointProvider } from "@bewise/ui/providers/Breakpoint";
import { StorageProvider } from "@bewise/ui/providers/Storage";
import { ThemeProvider } from "@bewise/ui/providers/Theme";
import { Slot } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { localStorage } from "@/storage";

export default function Layout() {
  return (
    <SafeAreaProvider>
      <StorageProvider localStorage={localStorage}>
        <ThemeProvider>
          <BreakpointProvider>
            <Slot />
          </BreakpointProvider>
        </ThemeProvider>
      </StorageProvider>
    </SafeAreaProvider>
  );
}
