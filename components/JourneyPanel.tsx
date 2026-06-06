"use client";

import React, { useState } from "react";

export const JourneyPanel = () => {
  const [journeyTab, setJourneyTab] = useState<"beginnings" | "development" | "milestones">("beginnings");

  return (
    <section id="journey-screen" className="relative flex flex-col p-6 md:p-12 border-b border-[var(--glass-border)] py-16 md:py-24">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-xs md:text-sm font-bold tracking-widest text-[rgb(var(--primary-rgb))] uppercase mb-6 flex items-center gap-2">
          <span className="text-[rgb(var(--secondary-rgb))]">⚡</span> Holographic Journey Panel
        </h2>

        {/* Panel Frame */}
        <div className="relative border border-[rgb(var(--secondary-rgb))]/20 bg-[var(--surface-container)]/70 p-4 md:p-6 shadow-2xl overflow-hidden backdrop-blur-md">
          {/* Corner decorators */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[rgb(var(--secondary-rgb))]/50" />
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[rgb(var(--secondary-rgb))]/50" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[rgb(var(--secondary-rgb))]/50" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[rgb(var(--secondary-rgb))]/50" />

          <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[rgb(var(--secondary-rgb))]/10 blur-3xl" />

          <div className="flex items-center justify-between border-b border-[var(--glass-border)] pb-4 mb-4">
            <span className="text-[9px] md:text-xs font-mono-technical font-bold text-[rgb(var(--primary-rgb))] uppercase tracking-widest">
              MY JOURNEY // SYSTEM_PANEL.EXE
            </span>
            <div className="flex gap-1">
              <span className="h-1.5 w-1.5 bg-[rgb(var(--primary-rgb))]/50" />
              <span className="h-1.5 w-1.5 bg-[rgb(var(--primary-rgb))]/30" />
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6">
            {/* Tab Menu */}
            <div className="col-span-12 md:col-span-4 flex flex-row md:flex-col gap-2 border-b md:border-b-0 md:border-r border-[var(--glass-border)] pb-4 md:pb-0 md:pr-4 select-none overflow-x-auto no-scrollbar">
              {(["beginnings", "development", "milestones"] as const).map((tab) => {
                const labels: Record<typeof tab, { icon: string; label: string }> = {
                  beginnings: { icon: "📔", label: "BEGINNINGS" },
                  development: { icon: "⚙️", label: "DEVELOPMENT" },
                  milestones: { icon: "🚀", label: "MILESTONES" },
                };
                const isActive = journeyTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setJourneyTab(tab)}
                    className={`flex-shrink-0 flex items-center gap-2 md:gap-3 p-2 md:p-2.5 text-[10px] md:text-xs font-semibold tracking-wide text-left transition-all cursor-pointer ${
                      isActive
                        ? "bg-[rgb(var(--secondary-rgb))]/15 border-b-2 md:border-b-0 md:border-l-2 border-[rgb(var(--primary-rgb))] text-[rgb(var(--primary-rgb))]"
                        : "text-[var(--on-surface-variant)] hover:bg-[var(--surface-container-high)] hover:text-[var(--on-surface)]"
                    }`}
                  >
                    <span>{labels[tab].icon}</span>
                    <span>{labels[tab].label}</span>
                  </button>
                );
              })}
            </div>

            {/* Content Area */}
            <div className="col-span-12 md:col-span-8 flex flex-col justify-between min-h-[160px] md:min-h-[140px] text-left">
              {journeyTab === "beginnings" && (
                <div className="flex flex-col gap-2 transition-opacity duration-300">
                  <span className="text-[9px] md:text-[10px] font-mono-technical text-[var(--on-surface-variant)] tracking-wider">PHASE_01 // 2021-2022</span>
                  <h3 className="text-xs md:text-sm font-bold text-[var(--on-surface)] font-syne">Exploring Code &amp; Core Logic</h3>
                  <p className="text-[11px] md:text-xs text-[var(--on-surface-variant)] leading-relaxed font-body-jakarta">
                    Began the computational path by diving deep into programming fundamentals, algorithmic problem solving, and standard web technologies (HTML, CSS, JavaScript). Focused on mastering logical thinking and design-to-code layouts.
                  </p>
                </div>
              )}

              {journeyTab === "development" && (
                <div className="flex flex-col gap-2 transition-opacity duration-300">
                  <span className="text-[9px] md:text-[10px] font-mono-technical text-[var(--on-surface-variant)] tracking-wider">PHASE_02 // 2022-2023</span>
                  <h3 className="text-xs md:text-sm font-bold text-[var(--on-surface)] font-syne">Full Stack Integration</h3>
                  <p className="text-[11px] md:text-xs text-[var(--on-surface-variant)] leading-relaxed font-body-jakarta">
                    Adopted TypeScript, React, and Next.js as the core tech stack. Built complete, dynamic web platforms with integrated serverless endpoints, optimized relational databases (PostgreSQL/Neon), and clean state management.
                  </p>
                </div>
              )}

              {journeyTab === "milestones" && (
                <div className="flex flex-col gap-2 transition-opacity duration-300">
                  <span className="text-[9px] md:text-[10px] font-mono-technical text-[var(--on-surface-variant)] tracking-wider">PHASE_03 // 2023-2024+</span>
                  <h3 className="text-xs md:text-sm font-bold text-[var(--on-surface)] font-syne">AI Tools &amp; High Performance</h3>
                  <p className="text-[11px] md:text-xs text-[var(--on-surface-variant)] leading-relaxed font-body-jakarta">
                    Transitioned into implementing AI agent architectures, vector database retrievals, and mobile companions using React Native. Focused on deploying high-availability apps and creating developer tool utilities.
                  </p>
                </div>
              )}

              <div className="flex items-center justify-between border-t border-[var(--glass-border)] pt-3 mt-4 text-[9px] font-mono-technical text-[var(--on-surface-variant)]">
                <span>GRID_REF: #94-G-PORTFOLIO</span>
                <span className="text-[rgb(var(--primary-rgb))]/30">■ ■ ■ ■ ■</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
