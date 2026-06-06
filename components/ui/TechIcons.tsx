"use client";

import React from "react";
import { useTheme } from "@/lib/theme";

// Official logos sourced from Devicon and SimpleIcons
const DEVICON_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
const SIMPLE_ICONS_BASE = "https://cdn.simpleicons.org";

const FallbackIcon = ({ initials, colorClass }: { initials: string; colorClass: string }) => (
  <div className={`w-full h-full flex items-center justify-center rounded-lg font-bold text-[10px] sm:text-xs font-mono-technical ${colorClass} bg-current/10 border border-current/20 shadow-inner`}>
    <span className="text-current">{initials}</span>
  </div>
);

/** Icons that are black/dark by default — must be inverted in dark mode */
const DARK_MODE_INVERT_ICONS = new Set([
  "Next.js", "Prisma", "Expo", "Shadcn/ui",
  "Vercel", "EAS", "Sentry", "OpenTelemetry", "Razorpay",
]);

// Hook-aware wrapper: reads theme and applies correct filter
export function TechIcon({ name }: { name: string }) {
  const { resolvedTheme } = useTheme();
  // Default to dark (app default) while theme is resolving to avoid flash
  const isDark = resolvedTheme !== "light";
  const needsInvert = DARK_MODE_INVERT_ICONS.has(name);
  const filterStyle = needsInvert ? { filter: isDark ? "invert(1)" : "invert(0)" } : undefined;

  const iconMap: Record<string, string | null> = {
    TypeScript:        `${DEVICON_BASE}/typescript/typescript-original.svg`,
    Python:            `${DEVICON_BASE}/python/python-original.svg`,
    Swift:             `${DEVICON_BASE}/swift/swift-original.svg`,
    JavaScript:        `${DEVICON_BASE}/javascript/javascript-original.svg`,
    React:             `${DEVICON_BASE}/react/react-original.svg`,
    "React Native":    `${DEVICON_BASE}/react/react-original.svg`,
    "Next.js":         `${DEVICON_BASE}/nextjs/nextjs-original.svg`,
    Expo:              `${SIMPLE_ICONS_BASE}/expo`,
    "Neon DB":         `${DEVICON_BASE}/postgresql/postgresql-original.svg`,
    Prisma:            `${DEVICON_BASE}/prisma/prisma-original.svg`,
    "Expo SQLite":     `${DEVICON_BASE}/sqlite/sqlite-original.svg`,
    "Tailwind CSS":    `${DEVICON_BASE}/tailwindcss/tailwindcss-original.svg`,
    NativeWind:        `${DEVICON_BASE}/tailwindcss/tailwindcss-original.svg`,
    "Shadcn/ui":       `${SIMPLE_ICONS_BASE}/shadcnui`,
    "React Hook Form": `${SIMPLE_ICONS_BASE}/reacthookform/EC5990`,
    Zod:               `${SIMPLE_ICONS_BASE}/zod/3E67B1`,
    "TanStack Query":  `${SIMPLE_ICONS_BASE}/reactquery/FF4154`,
    Zustand:           null, // uses fallback below
    Clerk:             `${SIMPLE_ICONS_BASE}/clerk/6C47FF`,
    Razorpay:          `${SIMPLE_ICONS_BASE}/razorpay/02042B`,
    Vercel:            `${DEVICON_BASE}/vercel/vercel-original.svg`,
    EAS:               `${SIMPLE_ICONS_BASE}/expo`,
    Sentry:            `${SIMPLE_ICONS_BASE}/sentry/362D59`,
    OpenTelemetry:     `${SIMPLE_ICONS_BASE}/opentelemetry`,
  };

  const fallbacks: Record<string, React.ReactNode> = {
    "Gluestack UI": <FallbackIcon initials="GL" colorClass="text-emerald-500" />,
    "Better Auth":  <FallbackIcon initials="BA" colorClass="text-indigo-400" />,
    "Zustand":      <FallbackIcon initials="ZS" colorClass="text-orange-400" />,
  };

  if (fallbacks[name]) return <>{fallbacks[name]}</>;

  const src = iconMap[name];
  if (!src) return <FallbackIcon initials={name.slice(0, 2).toUpperCase()} colorClass="text-[rgb(var(--primary-rgb))]" />;

  return (
    <img
      src={src}
      alt={name}
      className="w-full h-full object-contain"
      style={filterStyle}
    />
  );
}

/**
 * Legacy static record — kept for backward compat with components that do TechIcons["TypeScript"].
 * Renders as TechIcon component so it's always theme-aware.
 */
export const TechIcons: Record<string, React.ReactNode> = new Proxy({} as Record<string, React.ReactNode>, {
  get(_target, prop: string) {
    return <TechIcon name={prop} />;
  },
});
