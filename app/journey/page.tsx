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
        link: "#",
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
          link: "#",
        },
        {
          title: "Dynamic Task Board",
          desc: "Local storage-powered task checklist dashboard with drag-and-drop column states and tag filters.",
          badges: ["JavaScript", "Local Storage", "Drag & Drop"],
          link: "#",
        },
        {
          title: "CSS Art Collection",
          desc: "Vector-like cartoon illustrations built entirely using CSS shapes, transforms, and transition scales.",
          badges: ["CSS Variables", "Keyframe Effects", "Transforms"],
          link: "#",
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
        link: "#",
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
          link: "#",
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
        link: "#",
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
      <div className="max-w-5xl mx-auto px-6 pt-12 md:pt-16 text-left w-full relative z-10">
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
      <section className="max-w-5xl mx-auto px-6 py-12 md:py-16 w-full relative z-10">
        <div className="grid grid-cols-12 gap-8 items-start">

          {/* Left: Year Selector */}
          <div className="col-span-12 md:col-span-3 flex flex-row md:flex-col justify-between md:justify-start items-center md:items-stretch gap-6 select-none relative">

            {/* Timeline track line */}
            <div
              className="hidden md:block absolute left-4 -translate-x-1/2 top-8 bottom-8 w-[2px] z-0"
              style={{ background: "var(--glass-border-high)" }}
            />
            {/* Progress fill */}
            <div
              style={{
                top: "2rem",
                height: activeYear === "2022" ? "0%" : activeYear === "2023" ? "50%" : "100%",
                transition: "height 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              className="hidden md:block absolute left-4 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[rgb(var(--primary-rgb))] to-[rgb(var(--secondary-rgb))] z-10 shadow-[0_0_8px_rgba(var(--primary-rgb),0.5)]"
            />

            {["2022", "2023", "2024"].map((yr) => {
              const isActive = activeYear === yr;
              return (
                <button
                  key={yr}
                  onClick={() => setActiveYear(yr)}
                  className={`relative z-20 flex items-center gap-4 py-2 md:py-3 px-4 md:pl-10 text-left cursor-pointer focus:outline-none transition-all ${
                    isActive
                      ? "text-[rgb(var(--primary-rgb))] font-bold scale-105"
                      : "text-[var(--on-surface-variant)] hover:text-[var(--on-surface)]"
                  }`}
                >
                  {/* Node bullet */}
                  <div
                    className={`hidden md:block absolute left-4 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 border-2 transition-all ${
                      isActive
                        ? "border-[rgb(var(--primary-rgb))] bg-[rgb(var(--primary-rgb))] shadow-[0_0_10px_rgba(var(--primary-rgb),0.8)]"
                        : "bg-[var(--surface-container)] border-[var(--outline-variant)]"
                    }`}
                  />
                  <span className="font-syne text-xl md:text-2xl tracking-tighter">{yr}</span>
                </button>
              );
            })}
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
                        className="border border-[var(--glass-border)] bg-[var(--surface-container-high)] px-2 py-0.5 text-[8px] md:text-[9px] font-mono-technical text-[rgb(var(--primary-rgb))]"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-[var(--on-surface)] font-syne">
                    {selectedData.coreProject.title}
                  </h4>
                  <p className="text-xs text-[var(--on-surface-variant)] leading-relaxed font-body-jakarta">
                    {selectedData.coreProject.desc}
                  </p>
                  {selectedData.coreProject.link !== "#" && (
                    <a href={selectedData.coreProject.link} target="_blank" rel="noreferrer">
                      <Button variant="outline" size="sm" className="mt-2 w-fit cursor-pointer">
                        VIEW ON GITHUB →
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
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs md:text-sm font-bold text-[var(--on-surface)] font-syne">
                          {proj.title}
                        </h4>
                        {proj.link !== "#" && (
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
                        )}
                      </div>
                      <p className="text-[10px] md:text-[10.5px] text-[var(--on-surface-variant)] leading-relaxed font-body-jakarta">
                        {proj.desc}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-4">
                      {proj.badges.map((badge, bIdx) => (
                        <span
                          key={bIdx}
                          className="border border-[var(--glass-border)] bg-[var(--surface-container-high)] px-1.5 py-0.5 text-[8px] font-mono-technical text-[rgb(var(--primary-rgb))]/80"
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
