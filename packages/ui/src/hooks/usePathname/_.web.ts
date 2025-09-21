import { usePathname } from "next/navigation";

export const _usePathname = () => {
  const pathname = usePathname();

  return pathname;
};
