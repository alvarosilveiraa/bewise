import { useRouterContext } from "@bewise/ui/providers/Router/useContext";

export default function Page() {
  const { page } = useRouterContext();

  return page;
}
