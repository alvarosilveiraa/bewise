import { useMemo } from "react";
import { BoxStyle } from "@bewise/ui/components/Box/Props";
import { ImageStyle } from "@bewise/ui/components/Image/Props";
import { InputStyle } from "@bewise/ui/components/Input/Props";
import { TextStyle } from "@bewise/ui/components/Text/Props";
import { BOX_STYLE_PROPS } from "@bewise/ui/constants/BOX_STYLE_PROPS";
import { IMAGE_STYLE_PROPS } from "@bewise/ui/constants/IMAGE_STYLE_PROPS";
import { INPUT_STYLE_PROPS } from "@bewise/ui/constants/INPUT_STYLE_PROPS";
import { TEXT_STYLE_PROPS } from "@bewise/ui/constants/TEXT_STYLE_PROPS";
import { pick } from "lodash";

export const useStyleProps = <P extends object = Record<string, unknown>>(
  props: P,
) => {
  const boxStyleProps = useMemo(
    () => pick<BoxStyle>(props, BOX_STYLE_PROPS),
    [props],
  );
  const textStyleProps = useMemo(
    () => pick<TextStyle>(props, TEXT_STYLE_PROPS),
    [props],
  );
  const imageStyleProps = useMemo(
    () => pick<ImageStyle>(props, IMAGE_STYLE_PROPS),
    [props],
  );
  const inputStyleProps = useMemo(
    () => pick<InputStyle>(props, INPUT_STYLE_PROPS),
    [props],
  );

  return {
    boxStyleProps,
    textStyleProps,
    imageStyleProps,
    inputStyleProps,
  };
};
