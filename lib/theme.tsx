"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";

type Theme = "dark" | "light";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (t: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "dark",
  toggleTheme: () => {},
  setTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setThemeState] = useState<Theme>("dark");

  // On first mount: read from localStorage (set by the inline script in layout)
  useEffect(() => {
    const stored = localStorage.getItem("portfolio-theme") as Theme | null;
    const preferred =
      stored ??
      (window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark");
    applyTheme(preferred);
    setThemeState(preferred);
  }, []);

  const applyTheme = (t: Theme) => {
    document.documentElement.setAttribute("data-theme", t);
    localStorage.setItem("portfolio-theme", t);
  };

  const setTheme = useCallback((t: Theme) => {
    applyTheme(t);
    setThemeState(t);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      applyTheme(next);
      return next;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
