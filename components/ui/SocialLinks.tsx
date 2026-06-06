"use client";

import React from "react";
import Link from "next/link";
import { useTheme } from "@/lib/theme";

const SOCIALS = [
  {
    name: "GitHub",
    // Use the colorless (black) version — we control visibility via filter
    icon: "https://cdn.simpleicons.org/github",
    url: "https://github.com/kr395",
    // This icon is black by default → needs invert on dark bg, natural on light bg
    needsThemeFilter: true,
  },
  {
    name: "LinkedIn",
    // LinkedIn blue — has its own color, works on both themes natively
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg",
    url: "https://linkedin.com/in/kr395",
    needsThemeFilter: false,
  },
  {
    name: "X (Twitter)",
    // Black by default → needs invert on dark bg
    icon: "https://cdn.simpleicons.org/x",
    url: "https://x.com/krgopal706",
    needsThemeFilter: true,
  },
];

export const SocialLinks = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <div className="flex items-center gap-4 mt-6">
      {SOCIALS.map((social) => (
        <Link
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[var(--surface-container)] hover:bg-[var(--surface-container-high)] hover:scale-110 border border-[var(--glass-border)] rounded-full transition-all shadow-md group"
          title={social.name}
        >
          <img
            src={social.icon}
            alt={social.name}
            className="w-5 h-5 sm:w-6 sm:h-6 object-contain transition-transform group-hover:rotate-6"
            style={
              social.needsThemeFilter
                ? { filter: isDark ? "invert(1)" : "invert(0)" }
                : undefined
            }
          />
        </Link>
      ))}
    </div>
  );
};
