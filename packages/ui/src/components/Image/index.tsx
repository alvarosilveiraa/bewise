import { ImageProps } from "./Props";
import { _Image } from "./_";

export const Image = ({ hidden, ...props }: ImageProps) => {
  if (hidden) return null;
  return <_Image resizeMode="cover" {...props} />;
};
