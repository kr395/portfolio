"use client";

import React from "react";
import { TiltCard } from "./TiltCard";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  desc: string;
  badges: string[];
  link: string;
  mockupData: React.ReactNode;
  mockupHeightClass?: string;
}

const MockupShell = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={`w-full border border-[var(--glass-border)] bg-[var(--surface-container-lowest)] mb-4 overflow-hidden rounded-md ${className || "h-28"}`}>
    {children}
  </div>
);

const ProjectCard = ({ proj }: { proj: Project }) => (
  <TiltCard className="p-4 sm:p-5 flex flex-col select-text text-left h-full group">
    <MockupShell className={proj.mockupHeightClass}>{proj.mockupData}</MockupShell>
    <div className="flex items-start justify-between mb-3">
      <h4 className="text-card-title font-extrabold text-[var(--on-surface)] font-syne tracking-tight">{proj.title}</h4>
      <a
        href={proj.link}
        target="_blank"
        rel="noreferrer"
        className="flex-shrink-0 ml-3"
      >
        <Button
          variant="outline"
          size="sm"
          className="h-8 px-4 text-[10px] font-bold font-mono-technical tracking-widest uppercase bg-[rgba(var(--primary-rgb),0.05)] border-[rgba(var(--primary-rgb),0.3)] text-[rgb(var(--primary-rgb))] hover:bg-[rgb(var(--primary-rgb))] hover:text-white hover:border-[rgb(var(--primary-rgb))] hover:shadow-[0_4px_12px_rgba(var(--primary-rgb),0.3)] transition-all duration-300"
        >
          Visit ↗
        </Button>
      </a>
    </div>
    <p className="text-body text-[var(--on-surface)] opacity-80 leading-relaxed mb-5 font-body-jakarta flex-1 font-medium">
      {proj.desc}
    </p>
    <div className="flex flex-wrap gap-2 mt-auto">
      {proj.badges.map((b, i) => (
        <span key={i} className="text-[10px] md:text-[11px] font-bold font-mono-technical border border-[rgba(var(--primary-rgb),0.2)] bg-[rgba(var(--primary-rgb),0.08)] px-2.5 py-1 text-[rgb(var(--primary-rgb))] rounded-sm">
          {b}
        </span>
      ))}
    </div>
  </TiltCard>
);

const ColHeader = ({ icon, label }: { icon: string; label: string }) => (
  <div className="flex items-center gap-2 border-b border-[var(--glass-border)] pb-3 mb-5">
    <span className="text-base">{icon}</span>
    <h3 className="text-caption font-bold text-[var(--on-surface)] font-mono-technical uppercase tracking-widest">
      {label}
    </h3>
  </div>
);

export const Projects = () => {
  const webApps: Project[] = [
    {
      title: "FinTrack",
      desc: "Personal finance tracker with real-time analytics, automated transaction categories, and budgeting goals.",
      badges: ["Next.js", "Neon DB", "Tailwind CSS", "Recharts"],
      link: "https://finaitracker.vercel.app/",
      mockupHeightClass: "h-48 sm:h-56",
      mockupData: (
        <iframe 
          src="https://finaitracker.vercel.app/" 
          className="w-full h-full border-none" 
          title="FinTrack Live Preview"
        />
      ),
    },
    {
      title: "Lumina Studio",
      desc: "A collaborative online design tool featuring rich vector editing and real-time multiplayer cursor sharing.",
      badges: ["React", "WebSockets", "Canvas API", "Zustand"],
      link: "https://github.com/gopal-das/lumina-studio",
      mockupData: (
        <div className="flex h-full flex-col bg-[var(--surface-container-lowest)] p-2 text-[8px] font-body-jakarta">
          <div className="flex items-center justify-between border-b border-[var(--glass-border)] pb-1 mb-2">
            <span className="text-[var(--on-surface-variant)] text-[9px]">Workspace / Artboard 1</span>
            <div className="flex gap-0.5"><div className="h-2 w-2 bg-indigo-500"/><div className="h-2 w-2 bg-cyan-500"/></div>
          </div>
          <div className="flex-1 border border-dashed border-[var(--glass-border-high)] relative bg-[var(--surface-container)] flex items-center justify-center">
            <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-8 h-8 border border-cyan-500 bg-cyan-500/10 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-cyan-500"/>
            </div>
            <div className="absolute top-1/4 right-1/4 flex items-center gap-1 bg-indigo-500 text-[6px] text-white py-0.5 px-1">
              <span>Alex</span>
            </div>
            <span className="text-[6px] text-[var(--on-surface-variant)] font-mono-technical">Vector Canvas</span>
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
      mockupData: (
        <div className="flex h-full flex-col bg-[var(--surface-container-lowest)] text-[var(--on-surface)] p-2 text-[8px]">
          <div className="flex items-center justify-between border-b border-[var(--glass-border)] pb-1 mb-2">
            <span className="text-[9px]">FitPulse</span><span>🔋 98%</span>
          </div>
          <div className="flex flex-col items-center justify-center flex-1">
            <div className="relative w-10 h-10 border border-indigo-500/30 flex items-center justify-center mb-1">
              <div className="absolute inset-1 border border-t-indigo-500 border-r-indigo-500 border-l-transparent border-b-transparent animate-spin" style={{animationDuration:"3s"}}/>
              <div className="flex flex-col items-center">
                <span className="font-bold text-[8px]">84%</span>
                <span className="text-[5px] text-indigo-400">of Goal</span>
              </div>
            </div>
            <span className="text-[6px] text-[var(--on-surface-variant)]">8,421 / 10,000 steps</span>
            <div className="w-full bg-[var(--surface-container)] h-4 mt-2 border border-[var(--glass-border)] flex items-center justify-around">
              <span className="text-[5px] text-rose-500">❤️ 112 bpm</span>
              <span className="text-[5px] text-yellow-500">🔥 320 kcal</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "GeoMinder",
      desc: "Location-aware notifications app that alerts you to complete tasks based on geographic proximity.",
      badges: ["Swift", "SwiftUI", "CoreLocation", "CoreData"],
      link: "https://github.com/gopal-das/geominder",
      mockupData: (
        <div className="flex h-full flex-col bg-[var(--surface-container-lowest)] text-[var(--on-surface)] p-2 text-[8px]">
          <div className="flex items-center justify-between border-b border-[var(--glass-border)] pb-1 mb-1">
            <span className="text-[9px]">GeoMinder</span><span>📶 4G</span>
          </div>
          <div className="flex-1 border border-[var(--glass-border-high)] relative bg-[var(--surface-container)] flex flex-col justify-end">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 border border-cyan-500/30 bg-cyan-500/10 animate-ping"/>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-cyan-500"/>
            <div className="glass-panel m-1 p-1 text-[5px] z-10 relative">
              <span className="font-semibold text-[var(--on-surface)] block">🛒 Near Target: Store</span>
              <span className="text-[var(--on-surface-variant)] block">Action: Buy milk</span>
            </div>
          </div>
        </div>
      ),
    },
  ];


  return (
    <section id="projects" className="relative px-5 sm:px-8 md:px-14 py-6 sm:py-8 md:py-10 w-full">
      {/* Section header */}
      <div className="w-full mb-10 md:mb-14">
        <span className="text-mono-label font-mono-technical text-[rgb(var(--primary-rgb))]/70 block mb-2">
          ◆ PORTFOLIO
        </span>
        <h2 className="text-section font-extrabold text-[var(--on-surface)] font-syne">
          Full Stack{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(var(--primary-rgb))] to-[rgb(var(--secondary-rgb))]">
            Projects
          </span>
        </h2>
      </div>

      {/* Bento sub-grid: 2 col on md+ */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {/* Web Apps column */}
        <div className="bento-cell p-5 sm:p-6 md:p-8 flex flex-col">
          <ColHeader icon="💻" label="Web Applications" />
          <div className="flex flex-col gap-4">
            {webApps.map((p, i) => <ProjectCard key={i} proj={p} />)}
          </div>
        </div>

        {/* Mobile Apps column */}
        <div className="bento-cell-alt p-5 sm:p-6 md:p-8 flex flex-col">
          <ColHeader icon="📱" label="Mobile Apps" />
          <div className="flex flex-col gap-4">
            {mobileApps.map((p, i) => <ProjectCard key={i} proj={p} />)}
          </div>
        </div>
      </div>
    </section>
  );
};
