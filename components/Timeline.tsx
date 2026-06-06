"use client";

import React, { useState, useEffect, useRef } from "react";
import { TiltCard } from "./TiltCard";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "./ui/SocialLinks";
import Link from "next/link";

/* ── Static node data ─────────────────────────────────────── */
const NODES = [
  {
    id: "2022",
    year: "2022",
    side: "left" as const,
    title: "The Foundation",
    summary:
      "Mastering the fundamentals of DOM manipulation and CSS architecture. The birth of a functional mindset.",
    badges: [
      { text: "HTML/CSS", color: "secondary" },
      { text: "Vanilla JS", color: "primary" },
    ],
    projectTitle: "Portfolio v1",
    projectDesc:
      "First iteration focusing on semantic structures, layout constraints, and responsive grids.",
  },
  {
    id: "2023",
    year: "2023",
    side: "right" as const,
    title: "State & Components",
    summary:
      "Diving into React ecosystems. Building scalable UI libraries and understanding complex state management.",
    badges: [
      { text: "React", color: "secondary" },
      { text: "Tailwind CSS", color: "primary" },
    ],
    projectTitle: "E-Commerce Dashboard",
    projectDesc:
      "A complex, data-heavy dashboard with real-time filtering, state caching, and sleek visualisations.",
  },
  {
    id: "2024",
    year: "2024",
    side: "left" as const,
    title: "The 3D Dimension",
    summary:
      "Integrating Three.js and WebGL. Bridging the gap between flat interfaces and immersive spatial experiences.",
    badges: [
      { text: "Three.js", color: "primary" },
      { text: "GSAP", color: "secondary" },
    ],
    projectTitle: "Cyber Gallery",
    projectDesc:
      "An interactive virtual showroom for high-fashion digital assets with dynamic lighting and geometry.",
  },
] as const;

/* ─────────────────────────────────────────────────────────── */

export const Timeline = () => {
  /* Scroll-fill progress driven by container */
  const [targetPct, setTargetPct] = useState(0);
  const [currentPct, setCurrentPct] = useState(0);
  
  /* Which nodes have entered the visible area */
  const [activeIds, setActiveIds] = useState<string[]>(["2022"]);

  const containerRef = useRef<HTMLDivElement>(null);

  /* ── 1. Update Target Scroll on Mouse Wheel ── */
  const handleContainerScroll = () => {
    const el = containerRef.current;
    if (!el) return;
    const max = el.scrollHeight - el.clientHeight;
    if (max <= 0) return;
    setTargetPct((el.scrollTop / max) * 100);
  };

  /* ── 2. Fluid Lerp Animation Loop ── */
  useEffect(() => {
    let animationFrameId: number;
    const lerpScroll = () => {
      setCurrentPct((prev) => {
        const diff = targetPct - prev;
        if (Math.abs(diff) < 0.1) return targetPct;
        return prev + diff * 0.08; // 0.08 friction creates a smooth lagging wave
      });
      animationFrameId = requestAnimationFrame(lerpScroll);
    };
    animationFrameId = requestAnimationFrame(lerpScroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [targetPct]);

  /* ── 3. Perfectly Sync Active Nodes with Visual Stream ── */
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    
    const dots = Array.from(el.querySelectorAll<HTMLElement>("[data-node-id]"));
    const newActive = ["2022"]; // 2022 always active initially
    
    dots.forEach((dot) => {
      const dotPct = (dot.offsetTop / el.scrollHeight) * 100;
      const id = dot.getAttribute("data-node-id");
      if (id && currentPct >= dotPct && !newActive.includes(id)) {
        newActive.push(id);
      }
    });
    
    setActiveIds(newActive);
  }, [currentPct]);

  return (
    <section
      id="journey"
      className="relative px-5 sm:px-8 md:px-14 py-6 sm:py-8 md:py-10 w-full"
    >
      <div className="w-full">

        {/* ── Section header row ── */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-4 gap-4">
          <div>
            <span className="text-mono-label font-mono-technical text-[rgb(var(--primary-rgb))]/70 block mb-2">
              ◆ Coding Journey
            </span>
            <h2 className="text-section font-extrabold text-[var(--on-surface)] font-syne">
              Full{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(var(--primary-rgb))] to-[rgb(var(--secondary-rgb))]">
                Journey
              </span>
            </h2>
            <p className="text-body text-[var(--on-surface-variant)] font-body-jakarta mt-2 max-w-xs sm:max-w-sm">
              A chronicle of technical evolution — one year at a time.
            </p>
          </div>
          <div className="flex flex-col sm:items-end gap-3">
            <Link href="/journey" className="flex-shrink-0">
              <Button
                variant="outline"
                size="sm"
                className="cursor-pointer text-caption font-mono-technical tracking-wider uppercase w-fit"
              >
                View All Projects →
              </Button>
            </Link>
            <div className="scale-75 origin-left sm:origin-right mt-[-10px]">
              <SocialLinks />
            </div>
          </div>
        </div>

        {/* ── Scrollable timeline container ── */}
        <div className="relative">

          {/* Top fade — visible once scrolled */}
          <div
            className="absolute top-0 left-0 right-0 h-10 z-20 pointer-events-none
                       bg-gradient-to-b from-[var(--surface-container-low)] to-transparent"
            style={{ opacity: currentPct > 2 ? 1 : 0, transition: "opacity 0.3s" }}
          />

          {/* Bottom fade — scroll-hint */}
          <div
            className="absolute bottom-0 left-0 right-0 h-14 z-20 pointer-events-none
                       bg-gradient-to-t from-[var(--surface-container-low)] to-transparent"
            style={{ opacity: currentPct < 96 ? 1 : 0, transition: "opacity 0.3s" }}
          />

          {/* Scroll-down indicator dot */}
          {currentPct < 96 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1 pointer-events-none">
              <div className="w-1 h-4 rounded-full bg-[rgb(var(--primary-rgb))]/40 animate-bounce" />
            </div>
          )}

          {/* ─ The scroll box ─────────────────────────────── */}
          <div
            ref={containerRef}
            onScroll={handleContainerScroll}
            onWheel={(e) => {
              const el = containerRef.current;
              if (!el) return;
              const isAtBottom = Math.abs(el.scrollHeight - el.clientHeight - el.scrollTop) < 2;
              const isAtTop = el.scrollTop === 0;
              
              if ((e.deltaY > 0 && isAtBottom) || (e.deltaY < 0 && isAtTop)) {
                window.scrollBy({ top: e.deltaY, behavior: "auto" });
              }
            }}
            className="relative overflow-y-auto no-scrollbar overscroll-contain"
            style={{
              maxHeight: "clamp(500px, 75vh, 800px)",
            }}
          >
            {/* Outer padding keeps content clear of fade overlays */}
            <div className="relative pt-2 pb-8">

              {/* ─ Vertical line ─ */}
              {/* Background track */}
              <div
                className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[3px] -translate-x-1/2 z-0"
                style={{ background: "rgba(var(--primary-rgb), 0.15)" }}
              />

              {/* Animated fill driven by container scroll */}
              <div
                className="absolute left-4 md:left-1/2 top-0 w-[3px] -translate-x-1/2 z-10
                           bg-gradient-to-b from-[rgb(var(--primary-rgb))] to-[rgb(var(--secondary-rgb))]
                           shadow-[0_0_15px_rgba(var(--primary-rgb),0.65)]"
                style={{
                  height: `${currentPct}%`,
                }}
              />

              {/* ─ Year nodes ─ */}
              <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 relative z-10">
                {NODES.map((node) => {
                  const active = activeIds.includes(node.id);
                  const isRight = node.side === "right";

                  return (
                    <div
                      key={node.id}
                      className={`relative flex flex-col
                                  ${isRight ? "md:flex-row-reverse" : "md:flex-row"}
                                  items-start
                                  transition-all duration-700 ease-out
                                  ${active ? "opacity-100 translate-y-0" : "opacity-25 translate-y-5"}`}
                    >
                      {/* ── Text block ── */}
                      <div
                        className={`pl-10 md:pl-0 w-full md:w-1/2 mb-4 md:mb-0
                                    ${isRight ? "md:pl-12 text-left" : "md:pr-12 md:text-right"}`}
                      >
                        <span
                          className={`font-syne font-black tracking-tighter block leading-none mb-1
                                      transition-colors duration-300
                                      text-3xl sm:text-4xl md:text-5xl
                                      ${active
                                        ? "text-[rgb(var(--primary-rgb))] drop-shadow-[0_0_10px_rgba(var(--primary-rgb),0.5)]"
                                        : "text-[var(--on-surface-variant)]"}`}
                        >
                          {node.year}
                        </span>
                        <span className="text-mono-label font-mono-technical text-[rgb(var(--primary-rgb))]/50 block mb-1.5">
                          Year Summary
                        </span>
                        <h3 className="text-card-title font-bold text-[var(--on-surface)] font-syne mb-2">
                          {node.title}
                        </h3>
                        <p className={`text-body text-[var(--on-surface-variant)] leading-relaxed max-w-[240px] sm:max-w-xs mt-2 ${!isRight ? "md:ml-auto" : ""}`}>
                          {node.summary}
                        </p>
                      </div>

                      {/* ── Centre dot — perfectly aligned with left-4 / left-1/2 line ── */}
                      <div
                        data-node-id={node.id}
                        className={`absolute left-4 md:left-1/2 top-2 md:top-5
                                    -translate-x-1/2 w-4 h-4 border-2 z-20
                                    transition-all duration-300
                                    ${active
                                      ? "border-[rgb(var(--primary-rgb))] bg-[rgb(var(--primary-rgb))] shadow-[0_0_14px_rgba(var(--primary-rgb),0.85)]"
                                      : "bg-[var(--surface-container)] border-[var(--outline-variant)]"}`}
                      />

                      {/* ── Project card ── */}
                      <div
                        className={`pl-10 md:pl-0 w-full md:w-1/2
                                    ${isRight ? "md:pr-12 md:flex md:justify-end" : "md:pl-12"}`}
                      >
                        <TiltCard className="p-4 sm:p-5 w-full md:max-w-[280px] text-left">
                          <span className="text-mono-label font-mono-technical text-[rgb(var(--secondary-rgb))]/70 block mb-2">
                            ★ Core Project
                          </span>
                          <div className="flex flex-wrap gap-1.5 mb-3">
                            {node.badges.map((b, i) => (
                              <span
                                key={i}
                                className={`text-badge font-mono-technical px-2 py-0.5
                                            border border-[var(--glass-border)]
                                            bg-[var(--surface-container-high)]
                                            ${b.color === "primary"
                                              ? "text-[rgb(var(--primary-rgb))]"
                                              : "text-[rgb(var(--secondary-rgb))]"}`}
                              >
                                {b.text}
                              </span>
                            ))}
                          </div>
                          <h4 className="text-card-title font-bold text-[var(--on-surface)] font-syne mb-1.5">
                            {node.projectTitle}
                          </h4>
                          <p className="text-caption text-[var(--on-surface-variant)] leading-relaxed">
                            {node.projectDesc}
                          </p>
                        </TiltCard>
                      </div>
                    </div>
                  );
                })}

                {/* Escape hatch for scroll trap on mobile */}
                <div className="pt-4 pb-2 flex justify-center opacity-70 hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => {
                      const el = document.getElementById("projects");
                      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                    className="text-caption font-mono-technical uppercase tracking-widest text-[var(--on-surface-variant)] flex flex-col items-center gap-2"
                  >
                    <span>Continue to Projects</span>
                    <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </button>
                </div>

              </div>
            </div>
          </div>
          {/* ─────────────────────────────────────────────── */}

        </div>
      </div>
    </section>
  );
};
