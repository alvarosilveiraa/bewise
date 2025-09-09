import { ThemeModeEnum } from "@bewise/common/enums/ThemeMode";
import { useCachedState } from "@bewise/ui/hooks/useCachedState";
import { useStorageContext } from "../Storage/useStorageContext";

export const useThemeMode = (mode: ThemeModeEnum) => {
  const { cookieStorage } = useStorageContext();
  const [themeMode, setThemeMode] = useCachedState("theme-mode", mode, {
    storage: cookieStorage,
    loader: () => {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (isDark) return ThemeModeEnum.Dark;
      return ThemeModeEnum.Light;
    },
    onChange: newMode => {
      document.body.classList.remove(ThemeModeEnum.Light, ThemeModeEnum.Dark);
      document.body.classList.add(newMode);
    },
  });

  return { themeMode, setThemeMode };
};
