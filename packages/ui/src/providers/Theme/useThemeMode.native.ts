import { ThemeModeEnum } from "@bewise/common/enums/ThemeMode";
import { useCachedState } from "@bewise/ui/hooks/useCachedState";
import { setBackgroundColorAsync } from "expo-system-ui";
import { useColorScheme } from "react-native";
import { useStorageContext } from "../Storage/useStorageContext";

export const useThemeMode = (mode: ThemeModeEnum) => {
  const colorScheme = useColorScheme();
  const { cookieStorage } = useStorageContext();
  const [themeMode, setThemeMode] = useCachedState("theme-mode", mode, {
    storage: cookieStorage,
    loader: () => (colorScheme as ThemeModeEnum | undefined) || mode,
    onChange: newMode => {
      setBackgroundColorAsync(
        { [ThemeModeEnum.Light]: "white", [ThemeModeEnum.Dark]: "black" }[
          newMode
        ],
      );
    },
  });

  return { themeMode, setThemeMode };
};
