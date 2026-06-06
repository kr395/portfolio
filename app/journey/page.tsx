"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CursorTrail } from "@/components/CursorTrail";
import { TiltCard } from "@/components/TiltCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Project {
  title: string;
  desc: string;
  badges: string[];
  link: string;
}

interface CoreProject extends Project {
  mockupData: React.ReactNode;
}

interface JourneyYearData {
  year: string;
  phaseTitle: string;
  summary: string;
  coreProject: CoreProject;
  otherProjects: Project[];
}

export default function JourneyPage() {
  const [activeYear, setActiveYear] = useState<string>("2024");

  const scrollToSection = (id: string) => {
    window.location.href = `/#${id}`;
  };

  const journeyData: Record<string, JourneyYearData> = {
    "2022": {
      year: "2022",
      phaseTitle: "The Foundation",
      summary:
        "Mastered the fundamentals of DOM manipulation, styling constraints, and CSS grid architectures. Focused on translating graphic designs into responsive, semantic markup, and understanding pure functional logic.",
      coreProject: {
        title: "Portfolio v1",
        desc: "First iteration of a personal developer portfolio focusing on semantic HTML5 structure, CSS custom variables, responsive flex grids, and vanilla JS interactions.",
        badges: ["HTML5", "CSS3", "Vanilla JS", "BEM Methodology"],
        link: "https://github.com/kr395",
        mockupData: (
          <div className="flex h-full flex-col bg-[var(--surface-container-lowest)] p-2 text-[8px] font-mono-technical text-[var(--on-surface-variant)]">
            <div className="mb-2 flex items-center justify-between border-b border-[var(--glass-border)] pb-1">
              <span>HTML_STRUCTURE.DOM</span>
              <span className="text-[rgb(var(--primary-rgb))] font-bold">&lt;v1.0&gt;</span>
            </div>
            <div className="flex-1 bg-[var(--surface-container)] border border-[var(--glass-border)] p-2 font-mono text-[7px] leading-relaxed">
              <span className="text-yellow-500">&lt;div</span>{" "}
              <span className="text-purple-400">class</span>=
              <span className="text-emerald-500">&quot;hero&quot;</span>
              <span className="text-yellow-500">&gt;</span>
              <br />
              &nbsp;&nbsp;<span className="text-yellow-500">&lt;h1&gt;</span>Gopal Kumar Das<span className="text-yellow-500">&lt;/h1&gt;</span>
              <br />
              &nbsp;&nbsp;<span className="text-yellow-500">&lt;p&gt;</span>Software Engineer<span className="text-yellow-500">&lt;/p&gt;</span>
              <br />
              <span className="text-yellow-500">&lt;/div&gt;</span>
            </div>
          </div>
        ),
      },
      otherProjects: [
        {
          title: "Responsive Templates",
          desc: "A collection of mobile-first architectural layouts built purely with flexbox and custom media queries.",
          badges: ["HTML5", "CSS Flexbox", "Mobile First"],
          link: "https://github.com/kr395",
        },
        {
          title: "Dynamic Task Board",
          desc: "Local storage-powered task checklist dashboard with drag-and-drop column states and tag filters.",
          badges: ["JavaScript", "Local Storage", "Drag & Drop"],
          link: "https://github.com/kr395",
        },
        {
          title: "CSS Art Collection",
          desc: "Vector-like cartoon illustrations built entirely using CSS shapes, transforms, and transition scales.",
          badges: ["CSS Variables", "Keyframe Effects", "Transforms"],
          link: "https://github.com/kr395",
        },
      ],
    },
    "2023": {
      year: "2023",
      phaseTitle: "State & Components",
      summary:
        "Adopted React and Next.js as the default development framework. Focused on state centralization, state caching, context providers, relational schemas (Neon DB), and asynchronous RESTful endpoint operations.",
      coreProject: {
        title: "E-Commerce Dashboard",
        desc: "A data-heavy, real-time shop analytics dashboard featuring live chart updates, order metrics trackers, state caches, and responsive table views.",
        badges: ["React", "Zustand", "Recharts", "Tailwind CSS"],
        link: "https://github.com/kr395",
        mockupData: (
          <div className="flex h-full flex-col bg-[var(--surface-container-lowest)] p-2 text-[8px] font-body-jakarta">
            <div className="mb-2 flex items-center justify-between border-b border-[var(--glass-border)] pb-1">
              <span className="font-semibold text-[var(--on-surface)]">Sales &amp; Analytics</span>
              <span className="text-emerald-500 font-mono-technical">REAL-TIME</span>
            </div>
            <div className="flex-1 flex flex-col justify-between">
              <div className="flex justify-between items-end gap-1.5 h-12 px-1">
                <div className="w-full bg-indigo-500 h-[60%]" />
                <div className="w-full bg-indigo-500 h-[80%]" />
                <div className="w-full bg-indigo-500 h-[45%]" />
                <div className="w-full bg-indigo-500 h-[95%]" />
                <div className="w-full bg-[rgb(var(--primary-rgb))] h-[70%]" />
              </div>
              <div className="flex justify-between text-[4.5px] text-[var(--on-surface-variant)] border-t border-[var(--glass-border)] pt-1">
                <span>Q1</span><span>Q2</span><span>Q3</span><span>Q4</span><span>Current</span>
              </div>
            </div>
          </div>
        ),
      },
      otherProjects: [
        {
          title: "FinTrack",
          desc: "Personal budget planner app integrating transactions logs, goal progress tracks, and PDF exports.",
          badges: ["React", "Neon DB", "Recharts", "PostgreSQL"],
          link: "https://github.com/gopal-das/fintrack",
        },
        {
          title: "GeoMinder",
          desc: "Location-aware checkins app using device location markers to trigger task triggers on proximity.",
          badges: ["SwiftUI", "CoreLocation", "MapKit", "iOS SDK"],
          link: "https://github.com/gopal-das/geominder",
        },
        {
          title: "Interactive Space",
          desc: "Custom markdown-based developer documentation engine with reactive component sandboxes.",
          badges: ["Next.js", "MDX", "PrismJS", "Tailwind CSS"],
          link: "https://github.com/kr395",
        },
      ],
    },
    "2024": {
      year: "2024",
      phaseTitle: "The 3D Dimension",
      summary:
        "Ventured into spatial web interfaces, WebGL rendering pipelines, and integrated AI assistant architectures. Built custom AI text doc generators, edge video anomaly detection feeds, and hybrid React Native companion systems.",
      coreProject: {
        title: "Cyber Gallery",
        desc: "An immersive virtual 3D showroom for high-fashion digital clothing and assets featuring real-time light overlays and spatial wireframe geometries.",
        badges: ["Three.js", "React Three Fiber", "GSAP", "WebGL"],
        link: "https://github.com/kr395",
        mockupData: (
          <div className="flex h-full flex-col bg-[var(--surface-container-lowest)] p-2 text-[8px] font-mono-technical text-[var(--on-surface-variant)]">
            <div className="mb-2 flex items-center justify-between border-b border-[var(--glass-border)] pb-1">
              <span>3D MESH COORDINATES</span>
              <span className="text-[rgb(var(--primary-rgb))]">X: -12.4 | Y: 8.5</span>
            </div>
            <div className="flex-1 bg-[var(--surface-container)] border border-[var(--glass-border)] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-grid opacity-15" />
              <svg
                className="w-12 h-12 fill-none animate-spin"
                style={{ animationDuration: "12s", stroke: "rgba(var(--primary-rgb), 0.4)" }}
                viewBox="0 0 100 100"
              >
                <polygon points="50,15 90,35 90,65 50,85 10,65 10,35" strokeWidth="1.5" />
                <line x1="50" y1="15" x2="50" y2="85" strokeWidth="1" />
              </svg>
            </div>
          </div>
        ),
      },
      otherProjects: [
        {
          title: "Synthesize AI",
          desc: "Dev assistant digesting github repos into interactive architectural blueprints using vector database searches.",
          badges: ["Python", "LangChain", "OpenAI API", "ChromaDB"],
          link: "https://github.com/gopal-das/synthesize-ai",
        },
        {
          title: "VisionGuard",
          desc: "AI edge camera security threat detector using object classification models on low-power hardware.",
          badges: ["PyTorch", "YOLOv8", "FastAPI", "Docker"],
          link: "https://github.com/gopal-das/visionguard",
        },
        {
          title: "FitPulse App",
          desc: "Mobile fitness platform tracing calories, heart rate zones, and dietary logs with offline database caches.",
          badges: ["React Native", "Expo", "SQLite", "Tailwind Native"],
          link: "https://github.com/gopal-das/fitpulse",
        },
      ],
    },
  };

  const selectedData = journeyData[activeYear];

  return (
    <div className="theme-purple custom-cursor-active relative min-h-screen w-full bg-[var(--surface)] text-[var(--on-surface)] font-body-jakarta scanlines scroll-smooth transition-colors duration-300">
      <CursorTrail />

      {/* Ambient glows */}
      <div className="pointer-events-none absolute left-[10%] top-[15%] h-[350px] w-[350px] rounded-full bg-[rgb(var(--primary-rgb))] opacity-[0.05] blur-[100px]" />
      <div className="pointer-events-none absolute right-[10%] top-[30%] h-[400px] w-[400px] rounded-full bg-[rgb(var(--secondary-rgb))] opacity-[0.04] blur-[120px]" />
      <div className="pointer-events-none absolute left-[15%] bottom-[15%] h-[300px] w-[300px] rounded-full bg-[rgb(var(--primary-rgb))] opacity-[0.03] blur-[90px]" />

      <Navbar scrollToSection={scrollToSection} />

      {/* Page Header */}
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 pt-8 sm:pt-12 md:pt-16 text-left w-full relative z-10">
        <Link
          href="/"
          className="text-[10px] font-bold font-mono-technical text-[rgb(var(--primary-rgb))] hover:opacity-80 transition-opacity flex items-center gap-1.5 mb-4 group cursor-pointer w-fit select-none"
        >
          <span className="transition-transform group-hover:-translate-x-0.5">←</span> BACK TO HOMEPAGE
        </Link>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[var(--on-surface)] font-syne mb-2">
          Interactive{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(var(--primary-rgb))] to-[rgb(var(--secondary-rgb))] drop-shadow-[0_0_15px_rgba(var(--primary-rgb),0.25)]">
            Full Journey
          </span>
        </h1>
        <p className="text-xs md:text-sm text-[var(--on-surface-variant)] max-w-xl font-body-jakarta">
          Select a year on the timeline below to explore technical summaries, core milestone projects, and the complete archive of developed applications.
        </p>
      </div>

      {/* Workspace Grid */}
      <section className="max-w-[1400px] mx-auto px-8 md:px-16 py-8 md:py-16 w-full relative z-10">
        <div className="grid grid-cols-12 gap-8 items-start">

          {/* ── Left: Year Selector ── */}
          <div className="col-span-12 md:col-span-3 select-none">

            {/* Mobile: horizontal tab row */}
            <div className="flex md:hidden gap-2 overflow-x-auto no-scrollbar pb-1 mb-6">
              {(["2024", "2023", "2022"] as const).map((yr) => {
                const isActive = activeYear === yr;
                return (
                  <button
                    key={yr}
                    onClick={() => setActiveYear(yr)}
                    className={`flex-shrink-0 px-4 py-2 text-sm font-bold font-syne border transition-all duration-300 cursor-pointer focus:outline-none rounded-sm ${
                      isActive
                        ? "border-[rgb(var(--primary-rgb))] text-[rgb(var(--primary-rgb))] bg-[rgb(var(--primary-rgb))]/10 shadow-[0_0_12px_rgba(var(--primary-rgb),0.3)] scale-105"
                        : "border-[var(--glass-border)] text-[var(--on-surface-variant)] hover:text-[rgb(var(--primary-rgb))] hover:border-[rgb(var(--primary-rgb))]/50 hover:bg-[rgb(var(--primary-rgb))]/5"
                    }`}
                  >
                    {yr}
                  </button>
                );
              })}
            </div>

            {/* Desktop: vertical flex timeline */}
            <div className="hidden md:flex flex-col">
              {(["2024", "2023", "2022"] as const).map((yr, index) => {
                const isActive = activeYear === yr;
                const activeYearNum = parseInt(activeYear);
                const itemYearNum = parseInt(yr);
                const isPast = itemYearNum <= activeYearNum;
                const isLast = index === 2;

                return (
                  <div key={yr} className="flex items-stretch">
                    {/* Rail column: connector-above + dot + connector-below */}
                    <div className="flex flex-col items-center w-8 flex-shrink-0 mr-2">
                      {/* Connector above (transparent spacer for first item to center dot) */}
                      <div
                        className="w-[2px] flex-1 min-h-[10px] transition-all duration-500"
                        style={{
                          background: index > 0
                            ? (isPast
                              ? `linear-gradient(to bottom, rgba(var(--secondary-rgb),0.8), rgba(var(--primary-rgb),1))`
                              : "var(--glass-border-high)")
                            : "transparent",
                        }}
                      />
                      
                      {/* Node dot */}
                      <div
                        className={`w-3.5 h-3.5 flex-shrink-0 border-2 transition-all duration-300 ${
                          isActive
                            ? "border-[rgb(var(--primary-rgb))] bg-[rgb(var(--primary-rgb))] shadow-[0_0_12px_rgba(var(--primary-rgb),0.8)]"
                            : isPast
                            ? "border-[rgb(var(--secondary-rgb))] bg-[rgb(var(--secondary-rgb))]/20"
                            : "border-[var(--outline-variant)] bg-[var(--surface-container)]"
                        }`}
                      />
                      
                      {/* Connector below (transparent spacer for last item to center dot) */}
                      <div
                        className="w-[2px] flex-1 min-h-[10px] transition-all duration-500"
                        style={{
                          background: !isLast
                            ? (parseInt((["2024", "2023", "2022"])[index+1]) <= activeYearNum
                              ? `linear-gradient(to bottom, rgba(var(--primary-rgb),1), rgba(var(--secondary-rgb),0.8))`
                              : "var(--glass-border-high)")
                            : "transparent",
                        }}
                      />
                    </div>

                    {/* Year label button */}
                    <button
                      onClick={() => setActiveYear(yr)}
                      className={`flex-1 py-4 px-4 text-left cursor-pointer focus:outline-none transition-all duration-300 rounded-md group flex flex-col justify-center min-h-[72px] ${
                        isActive
                          ? "bg-[rgba(var(--primary-rgb),0.08)] shadow-[inset_2px_0_0_rgb(var(--primary-rgb))]"
                          : "hover:bg-[rgba(var(--primary-rgb),0.03)]"
                      }`}
                    >
                      <span className={`font-syne text-2xl tracking-tighter block leading-none transition-all duration-300 ${
                        isActive 
                          ? "text-[rgb(var(--primary-rgb))] font-extrabold scale-110 origin-left translate-x-1" 
                          : "text-[var(--on-surface-variant)] group-hover:text-[rgb(var(--primary-rgb))] group-hover:scale-105 origin-left"
                        }`}>
                        {yr}
                      </span>
                      {isActive && (
                        <span className="text-[9px] font-mono-technical text-[rgb(var(--primary-rgb))]/80 tracking-widest uppercase block mt-1.5 animate-pulse translate-x-1">
                          ACTIVE
                        </span>
                      )}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Year Detail */}
          <div className="col-span-12 md:col-span-9 flex flex-col gap-8 text-left">

            {/* Summary Card */}
            <TiltCard className="p-5 md:p-6 flex flex-col gap-2">
              <span className="text-[9px] md:text-[10px] font-mono-technical text-[rgb(var(--primary-rgb))]/60 tracking-wider uppercase">
                PHASE // SUMMARY
              </span>
              <h2 className="text-xl md:text-2xl font-extrabold text-[var(--on-surface)] font-syne">
                {selectedData.year} — {selectedData.phaseTitle}
              </h2>
              <p className="text-xs md:text-sm text-[var(--on-surface-variant)] leading-relaxed font-body-jakarta">
                {selectedData.summary}
              </p>
            </TiltCard>

            {/* Core Project */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xs font-bold text-[var(--on-surface)] font-mono-technical uppercase tracking-wider flex items-center gap-1.5">
                <span className="text-[rgb(var(--secondary-rgb))]">★</span> Core Project of the Year
              </h3>

              <TiltCard className="p-4 md:p-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="col-span-12 md:col-span-7 flex flex-col gap-3">
                  <div className="flex flex-wrap gap-2">
                    {selectedData.coreProject.badges.map((badge, bIdx) => (
                      <span
                        key={bIdx}
                        className="border border-[rgba(var(--primary-rgb),0.2)] bg-[rgba(var(--primary-rgb),0.08)] px-2.5 py-1 text-[8px] md:text-[9px] font-bold font-mono-technical text-[rgb(var(--primary-rgb))] rounded-sm"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                  <h4 className="text-lg md:text-xl font-extrabold text-[var(--on-surface)] font-syne tracking-tight">
                    {selectedData.coreProject.title}
                  </h4>
                  <p className="text-xs text-[var(--on-surface)] opacity-80 leading-relaxed font-body-jakarta font-medium mb-1">
                    {selectedData.coreProject.desc}
                  </p>
                  {selectedData.coreProject.link !== "#" && (
                    <a href={selectedData.coreProject.link} target="_blank" rel="noreferrer" className="mt-1 w-fit">
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 px-4 text-[10px] font-bold font-mono-technical tracking-widest uppercase bg-[rgba(var(--primary-rgb),0.05)] border-[rgba(var(--primary-rgb),0.3)] text-[rgb(var(--primary-rgb))] hover:bg-[rgb(var(--primary-rgb))] hover:text-white hover:border-[rgb(var(--primary-rgb))] hover:shadow-[0_4px_12px_rgba(var(--primary-rgb),0.3)] transition-all duration-300"
                      >
                        Visit ↗
                      </Button>
                    </a>
                  )}
                </div>

                <div className="col-span-12 md:col-span-5 w-full h-32 border border-[var(--glass-border)] bg-[var(--surface-container)] overflow-hidden">
                  {selectedData.coreProject.mockupData}
                </div>
              </TiltCard>
            </div>

            {/* Other Projects */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xs font-bold text-[var(--on-surface)] font-mono-technical uppercase tracking-wider flex items-center gap-1.5">
                <span className="text-[rgb(var(--primary-rgb))]">📂</span> Other Projects Developed
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedData.otherProjects.map((proj, pIdx) => (
                  <TiltCard key={pIdx} className="p-4 flex flex-col justify-between min-h-[140px]">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-sm md:text-base font-extrabold text-[var(--on-surface)] font-syne tracking-tight">
                          {proj.title}
                        </h4>
                        {proj.link !== "#" && (
                          <a
                            href={proj.link}
                            target="_blank"
                            rel="noreferrer"
                            className="flex-shrink-0 ml-3"
                          >
                            <Button
                              variant="outline"
                              size="sm"
                              className="h-7 px-3 text-[9px] font-bold font-mono-technical tracking-widest uppercase bg-[rgba(var(--primary-rgb),0.05)] border-[rgba(var(--primary-rgb),0.3)] text-[rgb(var(--primary-rgb))] hover:bg-[rgb(var(--primary-rgb))] hover:text-white hover:border-[rgb(var(--primary-rgb))] hover:shadow-[0_4px_12px_rgba(var(--primary-rgb),0.3)] transition-all duration-300"
                            >
                              Visit ↗
                            </Button>
                          </a>
                        )}
                      </div>
                      <p className="text-[10px] md:text-[11px] text-[var(--on-surface)] opacity-80 leading-relaxed font-body-jakarta font-medium mb-1 flex-1">
                        {proj.desc}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {proj.badges.map((badge, bIdx) => (
                        <span
                          key={bIdx}
                          className="border border-[rgba(var(--primary-rgb),0.2)] bg-[rgba(var(--primary-rgb),0.08)] px-2 py-0.5 text-[8px] font-bold font-mono-technical text-[rgb(var(--primary-rgb))] rounded-sm"
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
        </div>
      </section>

      <Footer />
    </div>
  );
}
