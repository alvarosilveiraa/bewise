import { RecordUnknown } from "@bewise/common/types/RecordUnknown";
import { ImageStyle, ImageStyleKey } from "../components/Image/Props";
import { IMAGE_STYLE_MAP } from "../constants/IMAGE_STYLE_MAP";

export const imageStyleMapper = <S extends RecordUnknown = RecordUnknown>(
  props: ImageStyle,
) => {
  const style: RecordUnknown = {};
  Object.keys(props).forEach(propKey => {
    const value = props[propKey as ImageStyleKey];
    const key = IMAGE_STYLE_MAP[propKey as ImageStyleKey];
    if (key) style[key] = value;
  });
  return style as S;
};
