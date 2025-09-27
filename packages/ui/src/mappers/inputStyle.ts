import { RecordUnknown } from "@bewise/common/types/RecordUnknown";
import { InputStyle, InputStyleKey } from "../components/Input/Props";
import { INPUT_STYLE_MAP } from "../constants/INPUT_STYLE_MAP";

export const inputStyleMapper = <S extends RecordUnknown = RecordUnknown>(
  props: InputStyle,
) => {
  const style: RecordUnknown = {};
  Object.keys(props).forEach(propKey => {
    const value = props[propKey as InputStyleKey];
    const key = INPUT_STYLE_MAP[propKey as InputStyleKey];
    if (key) style[key] = value;
  });
  return style as S;
};
