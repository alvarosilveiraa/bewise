import { useThemeContext } from "@bewise/ui/providers/Theme/useContext";
import * as Inter from "@expo-google-fonts/inter";
import * as Montserrat from "@expo-google-fonts/montserrat";
import * as Mulish from "@expo-google-fonts/mulish";
import * as Ubuntu from "@expo-google-fonts/ubuntu";
import { FontSource, useFonts } from "expo-font";

const FONTS = { Inter, Mulish, Montserrat, Ubuntu };

const FONTS_ENABLED = ["Inter", "Mulish", "Montserrat", "Ubuntu"];

const FONT_PATHNAMES = [
  { name: "_200", path: "_200ExtraLight" },
  { name: "_200_Italic", path: "_200ExtraLight_Italic" },
  { name: "_300", path: "_300Light" },
  { name: "_300_Italic", path: "_300Light_Italic" },
  { name: "_400", path: "_400Regular" },
  { name: "_400_Italic", path: "_400Regular_Italic" },
  { name: "_500", path: "_500Medium" },
  { name: "_500_Italic", path: "_500Medium_Italic" },
  { name: "_600", path: "_600SemiBold" },
  { name: "_600_Italic", path: "_600SemiBold_Italic" },
  { name: "_700", path: "_700Bold" },
  { name: "_700_Italic", path: "_700Bold_Italic" },
  { name: "_800", path: "_800ExtraBold" },
  { name: "_800_Italic", path: "_800ExtraBold_Italic" },
  { name: "_900", path: "_900Black" },
  { name: "_900_Italic", path: "_900Black_Italic" },
];

type FontEnabledKey = keyof typeof FONTS;

const selectFont = (name: string) => {
  if (!FONTS_ENABLED.includes(name)) return {};
  const Font = FONTS[name as FontEnabledKey] as Record<
    string,
    FontSource | undefined
  >;
  const sources: Record<string, FontSource> = {};
  FONT_PATHNAMES.forEach(pathname => {
    const font = Font[`${name}${pathname.path}`];
    if (font) sources[`${name}${pathname.name}`] = font;
  });
  return sources;
};

const selectFonts = (names: string[]) => {
  let sources: Record<string, FontSource> = {};
  names.forEach(name => {
    sources = {
      ...sources,
      ...selectFont(name),
    };
  });
  return sources;
};

export const useThemeFonts = () => {
  const { themeLayout } = useThemeContext();
  const [fontsLoaded, hasFontsError] = useFonts({
    ...selectFonts(FONTS_ENABLED),
    ...selectFont(themeLayout.fontFamily),
  });

  return { fontsLoaded, hasFontsError };
};
