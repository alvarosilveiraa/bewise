"use client";

import { ThemeModeEnum } from "@bewise/common/enums/ThemeMode";
import { Center } from "@bewise/ui/components/Center";
import { Link } from "@bewise/ui/components/Link";
import { Redirect } from "@bewise/ui/components/Redirect";
import { useThemeContext } from "@bewise/ui/providers/Theme/useThemeContext";

export const OtherPage = () => {
  const { themeMode } = useThemeContext();

  if (themeMode === ThemeModeEnum.Light) return <Redirect to="/" />;
  return (
    <Center
      flex={1}
      gap={16}
      bg={
        { [ThemeModeEnum.Light]: "white", [ThemeModeEnum.Dark]: "black" }[
          themeMode
        ]
      }
    >
      <Link to="/" type="back">
        Back
      </Link>
    </Center>
  );
};
