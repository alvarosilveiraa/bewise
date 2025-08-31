import { PropsWithChildren } from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "next-themes";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeStyle } from "@/components/ThemeStyle";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const RootLayout = ({ children }: PropsWithChildren) => (
  <ClerkProvider>
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeStyle />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  </ClerkProvider>
);
