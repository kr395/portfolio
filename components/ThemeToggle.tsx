"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "@/lib/theme";

/**
 * Animated Sun / Moon toggle button.
 * Mounts only on client to avoid SSR hydration mismatch.
 */
export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    // Render a fixed-size placeholder so layout doesn't shift
    return <div className="w-8 h-8" aria-hidden />;
  }

  const isDark = theme === "dark";

  return (
    <button
      id="theme-toggle"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
      className={`
        relative flex items-center justify-center
        w-8 h-8 rounded-sm
        border transition-all duration-300 focus:outline-none
        ${isDark
          ? "border-white/10 bg-white/5 hover:bg-white/10 hover:border-[rgba(var(--primary-rgb),0.4)]"
          : "border-black/10 bg-black/5 hover:bg-black/10 hover:border-[rgba(var(--primary-rgb),0.4)]"
        }
      `}
    >
      {/* Sun icon — shown in dark mode (click to go light) */}
      <span
        className="absolute transition-all duration-300"
        style={{
          opacity: isDark ? 1 : 0,
          transform: isDark ? "scale(1) rotate(0deg)" : "scale(0.5) rotate(-90deg)",
        }}
      >
        <SunIcon />
      </span>

      {/* Moon icon — shown in light mode (click to go dark) */}
      <span
        className="absolute transition-all duration-300"
        style={{
          opacity: isDark ? 0 : 1,
          transform: isDark ? "scale(0.5) rotate(90deg)" : "scale(1) rotate(0deg)",
        }}
      >
        <MoonIcon />
      </span>
    </button>
  );
};

/* ── Inline SVG icons (no extra deps) ── */

const SunIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-[rgba(var(--primary-rgb),0.9)]"
  >
    <circle cx="12" cy="12" r="4" />
    <line x1="12" y1="2" x2="12" y2="4" />
    <line x1="12" y1="20" x2="12" y2="22" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="2" y1="12" x2="4" y2="12" />
    <line x1="20" y1="12" x2="22" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="text-[rgba(var(--primary-rgb),0.9)]"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);
