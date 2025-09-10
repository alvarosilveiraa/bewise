import type { PropsWithChildren } from "react";
import type { Metadata } from "next";
import { ThemeModeEnum } from "@bewise/common/enums/ThemeMode";
import { StorageProvider } from "@bewise/ui/providers/Storage";
import { ThemeProvider } from "@bewise/ui/providers/Theme";
import { cookies } from "next/headers";
import "../fonts";
import "./global.css";
import { cookieStorage, localStorage, sessionStorage } from "@/storage";

export const metadata: Metadata = {
  title: "BeWise - All-in-one Restaurant & Delivery Solutions",
  description:
    "Transform your restaurant with BeWise's complete suite of integrated solutions: mobile apps, kitchen displays, ordering websites, admin dashboards, and POS systems.",
};

const fetchThemeMode = async () => {
  const cookieStore = await cookies();
  const item = cookieStore.get("theme-mode")?.value;
  if (!item) return;
  const value = JSON.parse(item)?.value;
  if (!value) return;
  return value as ThemeModeEnum;
};

export default async function Layout({ children }: PropsWithChildren) {
  const themeMode = await fetchThemeMode();

  return (
    <html lang="en">
      <body className={themeMode}>
        <StorageProvider
          localStorage={localStorage}
          sessionStorage={sessionStorage}
          cookieStorage={cookieStorage}
        >
          <ThemeProvider mode={themeMode}>{children}</ThemeProvider>
        </StorageProvider>
      </body>
    </html>
  );
}
