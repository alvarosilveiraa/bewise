import { useCallback, useEffect, useMemo } from "react";
import { EasingEnum } from "@bewise/ui/enums/Easing";
import { isDimension } from "@bewise/ui/helpers/isDimension";
import { Dimension } from "@bewise/ui/type/Dimension";
import { TransformKey } from "@bewise/ui/type/Transform";
import { Transition } from "@bewise/ui/type/Transition";
import { find, isArray, omit } from "lodash";
import {
  AnimatableNumericValue,
  AnimatableStringValue,
  DimensionValue,
} from "react-native";
import {
  Easing,
  SharedValue,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const isNumberWorklet = (value: unknown) => {
  "worklet";
  return typeof value === "number";
};

const isStringNumberWorklet = (value: unknown) => {
  "worklet";
  return typeof value === "string" && !!value;
};

const isDimensionWorklet = (value: unknown) => {
  "worklet";
  return typeof value === "number" || (typeof value === "string" && !!value);
};

const getTimingConfig = (config: Omit<Transition, "key">) => ({
  duration: config.duration,
  easing: {
    [EasingEnum.Linear]: Easing.linear,
    [EasingEnum.Ease]: Easing.ease,
    [EasingEnum.EaseIn]: Easing.in(Easing.ease),
    [EasingEnum.EaseOut]: Easing.out(Easing.ease),
    [EasingEnum.EaseInOut]: Easing.inOut(Easing.ease),
  }[config.easing || EasingEnum.Ease],
});

const getTransformValue = <V = unknown>(
  key: TransformKey,
  transform?: unknown,
  defaultValue?: unknown,
) => {
  if (!transform || !isArray(transform)) return defaultValue;
  const item = transform.find(t => Object.keys(t)[0] === key);
  if (item) return (item as { [key]: V })[key];
  return defaultValue;
};

export const _useTransition = (props: Record<string, unknown>) => {
  const transition = useMemo(
    () =>
      props.transition as Omit<Transition, "key"> | Transition[] | undefined,
    [props.transition],
  );
  const transformPerspective = useMemo(
    () => getTransformValue("perspective", props.transform),
    [props.transform],
  );
  const transformRotate = useMemo(
    () => getTransformValue("rotate", props.transform),
    [props.transform],
  );
  const transformRotateX = useMemo(
    () => getTransformValue("rotateX", props.transform),
    [props.transform],
  );
  const transformRotateY = useMemo(
    () => getTransformValue("rotateY", props.transform),
    [props.transform],
  );
  const transformRotateZ = useMemo(
    () => getTransformValue("rotateZ", props.transform),
    [props.transform],
  );
  const transformScale = useMemo(
    () => getTransformValue("scale", props.transform),
    [props.transform],
  );
  const transformScaleX = useMemo(
    () => getTransformValue("scaleX", props.transform),
    [props.transform],
  );
  const transformScaleY = useMemo(
    () => getTransformValue("scaleY", props.transform),
    [props.transform],
  );
  const transformTranslateX = useMemo(
    () => getTransformValue("translateX", props.transform),
    [props.transform],
  );
  const transformTranslateY = useMemo(
    () => getTransformValue("translateY", props.transform),
    [props.transform],
  );
  const top = useSharedValue(props.top);
  const left = useSharedValue(props.left);
  const right = useSharedValue(props.right);
  const bottom = useSharedValue(props.bottom);
  const width = useSharedValue(props.width);
  const height = useSharedValue(props.height);
  const opacity = useSharedValue(props.opacity);
  const colorProgress = useSharedValue(1);
  const prevColor = useSharedValue(props.color);
  const bgProgress = useSharedValue(1);
  const prevBgColor = useSharedValue(props.backgroundColor);
  const perspective = useSharedValue(transformPerspective);
  const rotate = useSharedValue(transformRotate);
  const rotateX = useSharedValue(transformRotateX);
  const rotateY = useSharedValue(transformRotateY);
  const rotateZ = useSharedValue(transformRotateZ);
  const scale = useSharedValue(transformScale);
  const scaleX = useSharedValue(transformScaleX);
  const scaleY = useSharedValue(transformScaleY);
  const translateX = useSharedValue(transformTranslateX);
  const translateY = useSharedValue(transformTranslateY);

  // TODO:
  // | { skewX: string }
  // | { skewY: string }
  // | { matrix: number[] };

  const setDimension = useCallback(
    (key: string, value: unknown, sharedValue: SharedValue) => {
      if (!isDimension(value)) return;
      const config = isArray(transition)
        ? find(transition, { key })
        : transition;
      sharedValue.value = config
        ? withTiming(value as Dimension, getTimingConfig(config))
        : value;
    },
    [transition],
  );

  const setColor = useCallback(
    (
      key: "color" | "backgroundColor",
      value: unknown,
      progress: SharedValue<number>,
      prev: SharedValue,
    ) => {
      if (!value) return;
      const config = isArray(transition)
        ? find(transition, { key })
        : transition;
      prev.value = prev.value || value;
      progress.value = config
        ? withTiming(1, getTimingConfig(config), () => {
            prev.value = value;
            progress.value = 0;
          })
        : 1;
    },
    [transition],
  );

  useEffect(() => setDimension("top", props.top, top), [props.top]);
  useEffect(() => setDimension("left", props.left, left), [props.left]);
  useEffect(() => setDimension("right", props.right, right), [props.right]);
  useEffect(() => setDimension("bottom", props.bottom, bottom), [props.bottom]);
  useEffect(() => setDimension("width", props.width, width), [props.width]);
  useEffect(() => setDimension("height", props.height, height), [props.height]);
  useEffect(
    () => setDimension("opacity", props.opacity, opacity),
    [props.opacity],
  );
  useEffect(
    () => setColor("color", props.color, colorProgress, prevColor),
    [props.color],
  );
  useEffect(
    () =>
      setColor(
        "backgroundColor",
        props.backgroundColor,
        bgProgress,
        prevBgColor,
      ),
    [props.backgroundColor],
  );
  useEffect(
    () => setDimension("perspective", transformPerspective, perspective),
    [transformPerspective],
  );
  useEffect(
    () => setDimension("rotate", transformRotate, rotate),
    [transformRotate],
  );
  useEffect(
    () => setDimension("rotateX", transformRotateX, rotateX),
    [transformRotateX],
  );
  useEffect(
    () => setDimension("rotateY", transformRotateY, rotateY),
    [transformRotateY],
  );
  useEffect(
    () => setDimension("rotateZ", transformRotateZ, rotateZ),
    [transformRotateZ],
  );
  useEffect(
    () => setDimension("scale", transformScale, scale),
    [transformScale],
  );
  useEffect(
    () => setDimension("scaleX", transformScaleX, scaleX),
    [transformScaleX],
  );
  useEffect(
    () => setDimension("scaleY", transformScaleY, scaleY),
    [transformScaleY],
  );
  useEffect(
    () => setDimension("translateX", transformTranslateX, translateX),
    [transformTranslateX],
  );
  useEffect(
    () => setDimension("translateY", transformTranslateY, translateY),
    [transformTranslateY],
  );

  const animatedStyle = useAnimatedStyle(() => ({
    top: isDimensionWorklet(top.value)
      ? (top.value as DimensionValue)
      : undefined,
    left: isDimensionWorklet(left.value)
      ? (left.value as DimensionValue)
      : undefined,
    right: isDimensionWorklet(right.value)
      ? (right.value as DimensionValue)
      : undefined,
    bottom: isDimensionWorklet(bottom.value)
      ? (bottom.value as DimensionValue)
      : undefined,
    width: isDimensionWorklet(width.value)
      ? (width.value as DimensionValue)
      : undefined,
    height: isDimensionWorklet(height.value)
      ? (height.value as DimensionValue)
      : undefined,
    opacity: isNumberWorklet(opacity.value)
      ? (opacity.value as AnimatableNumericValue)
      : undefined,
    color: isStringNumberWorklet(props.color)
      ? interpolateColor(
          colorProgress.value,
          [0, 1],
          [(prevColor.value ?? props.color) as string, props.color as string],
        )
      : undefined,
    backgroundColor: isStringNumberWorklet(props.backgroundColor)
      ? interpolateColor(
          bgProgress.value,
          [0, 1],
          [
            (prevBgColor.value ?? props.backgroundColor) as string,
            props.backgroundColor as string,
          ],
        )
      : undefined,
    transform: props.transform
      ? [
          isNumberWorklet(perspective.value)
            ? { perspective: perspective.value as AnimatableNumericValue }
            : null,
          isStringNumberWorklet(rotate.value)
            ? { rotate: rotate.value as AnimatableStringValue }
            : null,
          isStringNumberWorklet(rotateX.value)
            ? { rotateX: rotateX.value as AnimatableStringValue }
            : null,
          isStringNumberWorklet(rotateY.value)
            ? { rotateY: rotateY.value as AnimatableStringValue }
            : null,
          isStringNumberWorklet(rotateZ.value)
            ? { rotateZ: rotateZ.value as AnimatableStringValue }
            : null,
          isNumberWorklet(scale.value)
            ? { scale: scale.value as AnimatableNumericValue }
            : null,
          isNumberWorklet(scaleX.value)
            ? { scaleX: scaleX.value as AnimatableNumericValue }
            : null,
          isNumberWorklet(scaleY.value)
            ? { scaleY: scaleY.value as AnimatableNumericValue }
            : null,
          isNumberWorklet(translateX.value)
            ? { translateX: translateX.value as AnimatableNumericValue }
            : null,
          isNumberWorklet(translateY.value)
            ? { translateY: translateY.value as AnimatableNumericValue }
            : null,
        ].filter(value => !!value)
      : undefined,
  }));

  if (!props.transition) return omit(props, "transition");
  return animatedStyle as Record<string, unknown>;
};
