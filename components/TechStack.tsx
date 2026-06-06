"use client";

import React from "react";
import { TechIcons } from "./ui/TechIcons";

const WEB_ECOSYSTEM = [
  { tech: "Next.js", category: "Core Framework" },
  { tech: "TypeScript", category: "Core Framework" },
  { tech: "Vercel", category: "Core Framework" },
  { tech: "Neon DB", category: "Database & ORM" },
  { tech: "Prisma", category: "Database & ORM" },
  { tech: "Tailwind CSS", category: "Styling & UI" },
  { tech: "Shadcn/ui", category: "Styling & UI" },
  { tech: "React Hook Form", category: "Forms" },
  { tech: "Zod", category: "Forms" },
  { tech: "TanStack Query", category: "State" },
  { tech: "Zustand", category: "State" },
  { tech: "Better Auth", category: "Auth" },
  { tech: "Razorpay", category: "Payments" },
  { tech: "Sentry", category: "Observability" },
  { tech: "OpenTelemetry", category: "Observability" },
];

const MOBILE_ECOSYSTEM = [
  { tech: "React Native", category: "Core Framework" },
  { tech: "Expo", category: "Core Framework" },
  { tech: "TypeScript", category: "Core Framework" },
  { tech: "EAS", category: "Core Framework" },
  { tech: "Neon DB", category: "Data Link" },
  { tech: "Expo SQLite", category: "Data Link" },
  { tech: "NativeWind", category: "Styling & UI" },
  { tech: "Gluestack UI", category: "Styling & UI" },
  { tech: "React Hook Form", category: "Forms" },
  { tech: "Zod", category: "Forms" },
  { tech: "TanStack Query", category: "State" },
  { tech: "Zustand", category: "State" },
  { tech: "Clerk", category: "Auth" },
  { tech: "Razorpay", category: "Payments" },
  { tech: "Sentry", category: "Observability" },
];

export const TechStack = () => {
  return (
    <section id="tech-stack" className="relative px-5 sm:px-8 md:px-14 py-6 sm:py-8 md:py-10 w-full">
      <div className="w-full mb-10 md:mb-14">
        <span className="text-mono-label font-mono-technical text-[rgb(var(--primary-rgb))]/70 block mb-2">
          ◆ EXPERTISE & ARCHITECTURE
        </span>
        <h2 className="text-section font-extrabold text-[var(--on-surface)] font-syne">
          Ecosystem{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(var(--primary-rgb))] to-[rgb(var(--secondary-rgb))]">
            Stacks
          </span>
        </h2>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        
        {/* WEB ECOSYSTEM */}
        <div className="bento-cell p-5 sm:p-6 md:p-8 flex flex-col">
          <div className="flex items-center gap-2 border-b border-[var(--glass-border)] pb-3 mb-5">
            <span className="text-xl">🌐</span>
            <h3 className="text-caption font-bold text-[var(--on-surface)] font-mono-technical uppercase tracking-widest">
              Web Tech Stack
            </h3>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {WEB_ECOSYSTEM.map((item, i) => (
              <div key={i} className="flex items-center gap-2 px-3 py-2 bg-[var(--surface-container)] hover:bg-[var(--surface-container-high)] border border-[var(--glass-border)] rounded-full transition-colors cursor-default" title={item.category}>
                <div className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
                  {TechIcons[item.tech] || <div className="w-full h-full bg-zinc-500 rounded-full"/>}
                </div>
                <span className="font-semibold text-xs sm:text-sm text-[var(--on-surface)] font-syne tracking-tight">
                  {item.tech}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* MOBILE ECOSYSTEM */}
        <div className="bento-cell-alt p-5 sm:p-6 md:p-8 flex flex-col">
          <div className="flex items-center gap-2 border-b border-[var(--glass-border)] pb-3 mb-5">
            <span className="text-xl">📱</span>
            <h3 className="text-caption font-bold text-[var(--on-surface)] font-mono-technical uppercase tracking-widest">
              Mobile Tech Stack
            </h3>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {MOBILE_ECOSYSTEM.map((item, i) => (
              <div key={i} className="flex items-center gap-2 px-3 py-2 bg-[var(--surface-container)] hover:bg-[var(--surface-container-high)] border border-[var(--glass-border)] rounded-full transition-colors cursor-default" title={item.category}>
                <div className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
                  {TechIcons[item.tech] || <div className="w-full h-full bg-zinc-500 rounded-full"/>}
                </div>
                <span className="font-semibold text-xs sm:text-sm text-[var(--on-surface)] font-syne tracking-tight">
                  {item.tech}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
