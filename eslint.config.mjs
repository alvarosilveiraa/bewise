import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: [
      "**/*/coverage",
      "**/*/jest.config.js",
      "apps/web/.next",
      "apps/web/next-env.d.ts",
    ],
  },
);
