import { isFunction } from "lodash";
import { TextStyle, TextStyleKey } from "../components/Text/Props";
import { TEXT_STYLE_MAP } from "../constants/TEXT_STYLE_MAP";

export const textStyleMapper = <S extends object = Record<string, unknown>>(
  props: TextStyle,
) => {
  let style: Record<string, unknown> = {};
  Object.keys(props).forEach(propKey => {
    const value = props[propKey as TextStyleKey];
    const key = TEXT_STYLE_MAP[propKey as TextStyleKey];
    if (key) {
      if (isFunction(key)) style = { ...style, ...key(value) };
      else style[key] = value;
    }
  });
  return style as S;
};
