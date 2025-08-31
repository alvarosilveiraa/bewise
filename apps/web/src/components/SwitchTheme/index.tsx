"use client";

import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";

export const SwitchTheme = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const invertedTheme = useMemo(() => {
    if (resolvedTheme === "light") return "dark";
    return "light";
  }, [resolvedTheme]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <button onClick={() => setTheme(invertedTheme)}>{invertedTheme}</button>
  );
};
