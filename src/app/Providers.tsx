"use client";

import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

type ProviderProps = {
  children: React.ReactNode;
};

const Providers: React.FC<ProviderProps> = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

export default Providers;
