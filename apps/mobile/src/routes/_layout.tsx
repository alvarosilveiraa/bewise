import { StorageProvider } from "@bewise/ui/providers/Storage";
import { ThemeProvider } from "@bewise/ui/providers/Theme";
import { Slot } from "expo-router";
import { localStorage } from "@/storage";

export default function Layout() {
  return (
    <StorageProvider localStorage={localStorage}>
      <ThemeProvider>
        <Slot />
      </ThemeProvider>
    </StorageProvider>
  );
}
