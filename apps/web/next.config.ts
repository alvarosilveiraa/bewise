import type { NextConfig } from "next";
import path from "path";

const config: NextConfig = {
  turbopack: {
    root: path.join(__dirname, "../.."),
    resolveExtensions: [
      ".web.tsx",
      ".web.ts",
      ".web.jsx",
      ".web.js",
      ".tsx",
      ".ts",
      ".jsx",
      ".js",
    ],
  },
  transpilePackages: ["@bewise/common", "@bewise/ui"],
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.bewise.app",
      },
    ],
  },
};

export default config;
