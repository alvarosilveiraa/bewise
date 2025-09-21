import { useStyle } from "@bewise/ui/hooks/useStyle";
import { Image, ImageStyle } from "react-native";
import { ImageProps } from "./Props";

export const _Image = ({ id, src, ...props }: ImageProps) => {
  const style = useStyle<ImageStyle>(props);

  if (!src) return null;
  return (
    <Image
      id={id}
      style={{ maxWidth: "100%", ...style }}
      source={{ uri: src }}
    />
  );
};
