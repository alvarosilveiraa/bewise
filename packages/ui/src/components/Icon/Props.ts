import { MATERIAL_ICONS_NAMES } from "@bewise/ui/constants/MATERIAL_ICONS_NAMES";
import { Color } from "@bewise/ui/type/Color";
import { ColorVariable } from "@bewise/ui/type/ColorVariable";
import { Size } from "@bewise/ui/type/Size";

export type IconMDName = (typeof MATERIAL_ICONS_NAMES)[number];

export type IconMDProps = {
  library?: "md";
  name?: IconMDName;
};

export type IconLibraryProps = IconMDProps;

export type IconStyle = {
  color?: Color | ColorVariable;
  size?: Size;
};

export type IconStyleKey = keyof IconStyle;

export type IconStyleProps = IconStyle;

export type IconProps = (IconLibraryProps & IconStyleProps) & {
  id?: string;
  hidden?: boolean;
};
