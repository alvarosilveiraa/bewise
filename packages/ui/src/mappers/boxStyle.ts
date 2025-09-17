import { isFunction } from "lodash";
import { BoxStyle, BoxStyleKey } from "../components/Box/Props";
import { BOX_STYLE_MAP } from "../constants/BOX_STYLE_MAP";

export const boxStyleMapper = <S extends object = Record<string, unknown>>(
  props: BoxStyle,
) => {
  let style: Record<string, unknown> = {};
  Object.keys(props).forEach(propKey => {
    const value = props[propKey as BoxStyleKey];
    const key = BOX_STYLE_MAP[propKey as BoxStyleKey];
    if (key) {
      if (isFunction(key)) style = { ...style, ...key(value) };
      else style[key] = value;
    }
  });
  return style as S;
};
