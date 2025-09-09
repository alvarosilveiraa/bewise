import { BoxStyle } from "../components/Box/Props";
import { ImageStyle } from "../components/Image/Props";
import { InputStyle } from "../components/Input/Props";
import { TextStyle } from "../components/Text/Props";
import { boxStyleMapper } from "./boxStyle";
import { imageStyleMapper } from "./imageStyle";
import { inputStyleMapper } from "./inputStyle";
import { textStyleMapper } from "./textStyle";

export const styleMapper = <S extends object = Record<string, unknown>>(
  props: BoxStyle & TextStyle & ImageStyle & InputStyle,
) => ({
  ...boxStyleMapper<S>(props),
  ...textStyleMapper<S>(props),
  ...imageStyleMapper<S>(props),
  ...inputStyleMapper<S>(props),
});
