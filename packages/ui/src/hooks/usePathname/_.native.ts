import { usePathname } from "expo-router";

export const _usePathname = () => {
  const pathname = usePathname();

  return pathname;
};
