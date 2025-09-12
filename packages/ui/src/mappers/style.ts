import { Style } from "../type/Style";
import { boxStyleMapper } from "./boxStyle";
import { iconStyleMapper } from "./iconStyle";
import { imageStyleMapper } from "./imageStyle";
import { inputStyleMapper } from "./inputStyle";
import { textStyleMapper } from "./textStyle";

export const styleMapper = <S extends object = Record<string, unknown>>(
  props: Style,
) => ({
  ...boxStyleMapper<S>(props),
  ...textStyleMapper<S>(props),
  ...imageStyleMapper<S>(props),
  ...inputStyleMapper<S>(props),
  ...iconStyleMapper<S>(props),
});
