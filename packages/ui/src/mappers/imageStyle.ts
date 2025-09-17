import { ImageStyle, ImageStyleKey } from "../components/Image/Props";
import { IMAGE_STYLE_MAP } from "../constants/IMAGE_STYLE_MAP";

export const imageStyleMapper = <S extends object = Record<string, unknown>>(
  props: ImageStyle,
) => {
  const style: Record<string, unknown> = {};
  Object.keys(props).forEach(propKey => {
    const value = props[propKey as ImageStyleKey];
    const key = IMAGE_STYLE_MAP[propKey as ImageStyleKey];
    if (key) style[key] = value;
  });
  return style as S;
};
