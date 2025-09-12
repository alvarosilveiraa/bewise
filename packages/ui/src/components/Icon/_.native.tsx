import { memo } from "react";
import { useStyle } from "@bewise/ui/hooks/useStyle";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Icon } from "@expo/vector-icons/build/createIconSet";
import { IconProps } from "./Props";

type Props<G extends string> = {
  id?: string;
  name: G;
  size?: number;
  color?: string;
};

const getIcons = <G extends string, FN extends string>(Icons: Icon<G, FN>) => {
  const Icon = (props: Props<G>) => <Icons {...props} />;
  return Icon;
};

const md = getIcons(MaterialIcons);

const icons = { md };

export const _Icon = ({ id, library, name, ...props }: IconProps) => {
  const style = useStyle(props);

  if (!library || !name) return null;
  const IconComponent = memo(icons[library]);
  return <IconComponent id={id} name={name} {...style} />;
};
