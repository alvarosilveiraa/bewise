import { ICON_NAMES } from "@bewise/ui/constants/ICON_NAMES";
import { Color } from "@bewise/ui/type/Color";
import { ColorVariable } from "@bewise/ui/type/ColorVariable";
import { Size } from "@bewise/ui/type/Size";

export type IconStyle = {
  color?: Color | ColorVariable;
  fill?: Color | ColorVariable;
  size?: Size;
};

export type IconStyleKey = keyof IconStyle;

export type IconStyleProps = IconStyle;

export type IconName = (typeof ICON_NAMES)[number];

export type IconProps = IconStyleProps & {
  name?: IconName;
  hidden?: boolean;
};
