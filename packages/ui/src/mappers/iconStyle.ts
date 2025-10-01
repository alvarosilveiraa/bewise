import { RecordUnknown } from "@bewise/common/types/RecordUnknown";
import { IconStyle, IconStyleKey } from "../components/Icon/Props";
import { ICON_STYLE_MAP } from "../constants/ICON_STYLE_MAP";

export const iconStyleMapper = <S extends RecordUnknown = RecordUnknown>(
  props: IconStyle,
) => {
  const style: RecordUnknown = {};
  Object.keys(props).forEach(propKey => {
    const value = props[propKey as IconStyleKey];
    const key = ICON_STYLE_MAP[propKey as IconStyleKey];
    if (key) style[key] = value;
  });
  return style as S;
};
