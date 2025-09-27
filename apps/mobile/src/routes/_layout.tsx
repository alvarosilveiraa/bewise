import { BreakpointProvider } from "@bewise/ui/providers/Breakpoint";
import { RouterProvider } from "@bewise/ui/providers/Router";
import { StorageProvider } from "@bewise/ui/providers/Storage";
import { ThemeProvider } from "@bewise/ui/providers/Theme";
import { PortalProvider } from "@gorhom/portal";
import { Slot } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { localStorage } from "@/storage";

export default function Layout() {
  return (
    <SafeAreaProvider>
      <StorageProvider localStorage={localStorage}>
        <ThemeProvider>
          <BreakpointProvider>
            <RouterProvider>
              <PortalProvider>
                <Slot />
              </PortalProvider>
            </RouterProvider>
          </BreakpointProvider>
        </ThemeProvider>
      </StorageProvider>
    </SafeAreaProvider>
  );
}
