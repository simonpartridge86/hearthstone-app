"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "./icons";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () =>
    theme == "light" ? setTheme("dark") : setTheme("light");

  return (
    <button onClick={toggleTheme}>
      {theme == "light" ? <MoonIcon /> : <SunIcon />}
    </button>
  );
};
