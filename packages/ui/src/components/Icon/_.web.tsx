"use client";

import { FC, memo } from "react";
import { MATERIAL_ICONS_NAMES } from "@bewise/ui/constants/MATERIAL_ICONS_NAMES";
import { useStyle } from "@bewise/ui/hooks/useStyle";
import { IconType } from "react-icons";
import * as MaterialCommunity from "react-icons/md";
import { IconProps } from "./Props";

type Props = {
  id?: string;
  name: string;
  size?: number;
  color?: string;
};

const getIcons = (prefix: string, Icons: Record<string, IconType>) => {
  const icons: Record<string, FC<Props>> = {};
  MATERIAL_ICONS_NAMES.forEach(name => {
    const parts = name
      .split("-")
      .map(part => part.charAt(0).toUpperCase() + part.slice(1));
    const key = `${prefix}${parts.join("")}`;
    const Component = Icons[key as keyof typeof Icons];
    if (Component) icons[name] = props => <Component {...props} />;
  });
  const Icon = (props: Props) => {
    const Component = memo(icons[props.name]);
    return <Component {...props} />;
  };
  return Icon;
};

const md = getIcons("Md", MaterialCommunity);

const icons = { md };

export const _Icon = ({ id, library, name, ...props }: IconProps) => {
  const style = useStyle(props);

  if (!library || !name) return null;
  const IconComponent = memo(icons[library]);
  return <IconComponent id={id} name={name} {...style} />;
};
