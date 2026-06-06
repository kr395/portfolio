"use client";

import React from "react";
import { TiltCard } from "./TiltCard";

interface Project {
  title: string;
  desc: string;
  badges: string[];
  link: string;
  mockupType: "desktop" | "mobile";
  mockupData: React.ReactNode;
}

export const Projects = () => {
  const webApps: Project[] = [
    {
      title: "FinTrack",
      desc: "Personal finance tracker with real-time analytics, automated transaction categories, and budgeting goals.",
      badges: ["Next.js", "Neon DB", "Tailwind CSS", "Recharts"],
      link: "https://github.com/gopal-das/fintrack",
      mockupType: "desktop",
      mockupData: (
        <div className="flex h-full flex-col bg-[var(--surface-container-lowest)] p-2 text-[8px] font-body-jakarta select-text">
          <div className="mb-2 flex items-center justify-between border-b border-[var(--glass-border)] pb-1">
            <span className="font-semibold text-[var(--on-surface)]">FinTrack Dashboard</span>
            <span className="bg-emerald-500/20 px-1 text-[6px] text-emerald-600 dark:text-emerald-400 font-semibold border border-emerald-500/20">Active</span>
          </div>
          <div className="grid grid-cols-3 gap-1 mb-2">
            <div className="bg-[var(--surface-container)] p-1 border border-[var(--glass-border)]">
              <span className="text-[6px] text-[var(--on-surface-variant)] block">Balance</span>
              <span className="font-bold text-[var(--on-surface)] text-[9px]">$14,285</span>
            </div>
            <div className="bg-[var(--surface-container)] p-1 border border-[var(--glass-border)]">
              <span className="text-[6px] text-[var(--on-surface-variant)] block">Income</span>
              <span className="font-bold text-emerald-500 text-[9px]">+$3,250</span>
            </div>
            <div className="bg-[var(--surface-container)] p-1 border border-[var(--glass-border)]">
              <span className="text-[6px] text-[var(--on-surface-variant)] block">Expenses</span>
              <span className="font-bold text-rose-500 text-[9px]">-$1,890</span>
            </div>
          </div>
          <div className="flex-1 bg-[var(--surface-container)] border border-[var(--glass-border)] p-1 flex flex-col justify-end">
            <div className="flex items-end justify-between h-8 px-1 gap-1">
              <div className="w-2 bg-emerald-500 h-4" />
              <div className="w-2 bg-emerald-500 h-6" />
              <div className="w-2 bg-emerald-500 h-3" />
              <div className="w-2 bg-rose-500 h-5" />
              <div className="w-2 bg-emerald-500 h-7" />
            </div>
            <div className="flex justify-between text-[4px] text-[var(--on-surface-variant)] mt-1">
              <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Lumina Studio",
      desc: "A collaborative online design tool featuring rich vector editing and real-time multiplayer cursor sharing.",
      badges: ["React", "WebSockets", "Canvas API", "Zustand"],
      link: "https://github.com/gopal-das/lumina-studio",
      mockupType: "desktop",
      mockupData: (
        <div className="flex h-full flex-col bg-[var(--surface-container-lowest)] p-2 text-[8px] font-body-jakarta select-text">
          <div className="mb-2 flex items-center justify-between border-b border-[var(--glass-border)] pb-1">
            <span className="font-semibold text-[var(--on-surface-variant)]">Workspace / Artboard 1</span>
            <div className="flex gap-0.5">
              <div className="h-1.5 w-1.5 bg-indigo-500" />
              <div className="h-1.5 w-1.5 bg-cyan-500" />
            </div>
          </div>
          <div className="flex-1 border border-dashed border-[var(--glass-border-high)] flex items-center justify-center relative overflow-hidden bg-[var(--surface-container)]">
            <div className="absolute top-1/2 left-1/3 transform -translate-y-1/2 w-8 h-8 border border-cyan-500 bg-cyan-500/10 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-cyan-500" />
            </div>
            <div className="absolute top-1/4 right-1/4 flex items-center gap-1 bg-indigo-500 text-[6px] text-white py-0.5 px-1 border border-indigo-400/20 shadow-md">
              <svg width="4" height="4" viewBox="0 0 24 24" fill="white"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
              <span>Alex</span>
            </div>
            <div className="text-[6px] text-[var(--on-surface-variant)] font-mono-technical">Vector Canvas</div>
          </div>
        </div>
      ),
    },
  ];

  const mobileApps: Project[] = [
    {
      title: "FitPulse",
      desc: "A mobile fitness companion tracking workout statistics, heart rate zones, and dietary logs with offline sync.",
      badges: ["React Native", "Expo", "SQLite", "Tailwind Native"],
      link: "https://github.com/gopal-das/fitpulse",
      mockupType: "mobile",
      mockupData: (
        <div className="flex h-full flex-col bg-[var(--surface-container-lowest)] text-[var(--on-surface)] p-2 font-body-jakarta text-[7px] select-text">
          <div className="flex items-center justify-between border-b border-[var(--glass-border)] pb-1 mb-2">
            <span>FitPulse app</span>
            <span>🔋 98%</span>
          </div>
          <div className="flex flex-col items-center justify-center flex-1">
            <div className="relative w-10 h-10 border border-indigo-500/30 flex items-center justify-center mb-1">
              <div className="absolute inset-1 border border-t-indigo-500 border-r-indigo-500 border-l-transparent border-b-transparent animate-spin" style={{ animationDuration: "3s" }} />
              <div className="flex flex-col items-center">
                <span className="font-bold text-[8px]">84%</span>
                <span className="text-[4px] text-indigo-400">of Goal</span>
              </div>
            </div>
            <span className="text-[6px] text-[var(--on-surface-variant)]">8,421 / 10,000 steps</span>
            <div className="w-full bg-[var(--surface-container)] h-4 mt-2 border border-[var(--glass-border)] flex items-center justify-around">
              <span className="text-[5px] text-rose-500 font-semibold">❤️ 112 bpm</span>
              <span className="text-[5px] text-yellow-500 font-semibold">🔥 320 kcal</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "GeoMinder",
      desc: "Location-aware notifications app that alerts you to complete tasks based on your geographic proximity.",
      badges: ["Swift", "SwiftUI", "CoreLocation", "CoreData"],
      link: "https://github.com/gopal-das/geominder",
      mockupType: "mobile",
      mockupData: (
        <div className="flex h-full flex-col bg-[var(--surface-container-lowest)] text-[var(--on-surface)] p-2 font-body-jakarta text-[7px] select-text">
          <div className="flex items-center justify-between border-b border-[var(--glass-border)] pb-1 mb-1">
            <span>GeoMinder map</span>
            <span>📶 4G</span>
          </div>
          <div className="flex-1 border border-[var(--glass-border-high)] overflow-hidden relative flex flex-col justify-end bg-[var(--surface-container)]">
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 border border-cyan-500/30 bg-cyan-500/10 animate-ping" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-cyan-500" />
            <div className="glass-panel m-1 p-1 text-[5px] flex flex-col gap-0.5 relative z-10">
              <span className="font-semibold text-[var(--on-surface)] block">🛒 Near Target: Store</span>
              <span className="text-[var(--on-surface-variant)] block text-[4px]">Action: Buy milk</span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="projects" className="relative flex flex-col p-6 md:p-12 bg-[var(--surface-container-lowest)]/40 py-16 md:py-24 w-full">
      <div className="absolute top-0 left-0 w-full light-tube opacity-40" />
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-xs md:text-sm font-bold tracking-widest text-[rgb(var(--primary-rgb))] uppercase mb-8 flex items-center gap-2 text-left">
          <span className="text-[rgb(var(--secondary-rgb))]">📂</span> Full Stack Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Web Apps */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 border-b border-[var(--glass-border)] pb-2 mb-1">
              <span className="text-xs text-indigo-500">💻</span>
              <h3 className="text-xs font-bold text-[var(--on-surface)] font-mono-technical uppercase tracking-wider">
                Web Applications
              </h3>
            </div>
            {webApps.map((proj, idx) => (
              <TiltCard key={idx} className="p-4 flex flex-col select-text text-left">
                <div className="w-full h-24 border border-[var(--glass-border)] bg-[var(--surface-container)] mb-3 overflow-hidden">
                  {proj.mockupData}
                </div>
                <div className="flex items-center justify-between mb-1.5">
                  <h4 className="text-xs font-bold text-[var(--on-surface)] font-syne">{proj.title}</h4>
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[var(--on-surface-variant)] hover:text-[rgb(var(--primary-rgb))] transition-colors cursor-pointer"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                    </svg>
                  </a>
                </div>
                <p className="text-[10px] md:text-[10.5px] text-[var(--on-surface-variant)] leading-relaxed mb-3 font-body-jakarta">
                  {proj.desc}
                </p>
                <div className="flex flex-wrap gap-1 mt-auto">
                  {proj.badges.map((badge, bIdx) => (
                    <span
                      key={bIdx}
                      className="border border-[var(--glass-border)] bg-[var(--surface-container-high)] px-1.5 py-0.5 text-[8px] md:text-[8.5px] font-mono-technical text-[rgb(var(--primary-rgb))]"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </TiltCard>
            ))}
          </div>

          {/* Mobile Apps */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 border-b border-[var(--glass-border)] pb-2 mb-1">
              <span className="text-xs text-cyan-500">📱</span>
              <h3 className="text-xs font-bold text-[var(--on-surface)] font-mono-technical uppercase tracking-wider">
                Mobile Apps
              </h3>
            </div>
            {mobileApps.map((proj, idx) => (
              <TiltCard key={idx} className="p-4 flex flex-col select-text text-left">
                <div className="w-full h-24 border border-[var(--glass-border)] bg-[var(--surface-container)] mb-3 overflow-hidden">
                  {proj.mockupData}
                </div>
                <div className="flex items-center justify-between mb-1.5">
                  <h4 className="text-xs font-bold text-[var(--on-surface)] font-syne">{proj.title}</h4>
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[var(--on-surface-variant)] hover:text-[rgb(var(--primary-rgb))] transition-colors cursor-pointer"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                    </svg>
                  </a>
                </div>
                <p className="text-[10px] md:text-[10.5px] text-[var(--on-surface-variant)] leading-relaxed mb-3 font-body-jakarta">
                  {proj.desc}
                </p>
                <div className="flex flex-wrap gap-1 mt-auto">
                  {proj.badges.map((badge, bIdx) => (
                    <span
                      key={bIdx}
                      className="border border-[var(--glass-border)] bg-[var(--surface-container-high)] px-1.5 py-0.5 text-[8px] md:text-[8.5px] font-mono-technical text-[rgb(var(--primary-rgb))]"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
