import { ForwardedRef, useImperativeHandle, useRef } from "react";

export const useForwardedRef = <R = unknown>(forwardedRef: ForwardedRef<R>) => {
  const ref = useRef<R>(null);
  useImperativeHandle(forwardedRef, () => ref.current!);

  return ref;
};
