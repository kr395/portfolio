"use client";

import React, { useState, useEffect, useRef } from "react";
import { TiltCard } from "./TiltCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Timeline = () => {
  const [timelineProgress, setTimelineProgress] = useState(0);
  const [inViewNodes, setInViewNodes] = useState<string[]>([]);
  const journeySectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const journey = journeySectionRef.current;
      if (journey) {
        const rect = journey.getBoundingClientRect();
        const start = rect.top - viewportHeight * 0.35;
        const end = rect.bottom - viewportHeight * 0.75;
        const totalHeight = end - start;
        let progress = 0;
        if (start < 0) {
          progress = Math.min(100, Math.max(0, (-start / totalHeight) * 100));
        }
        setTimelineProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -20% 0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const nodeId = entry.target.getAttribute("data-node-id");
        if (!nodeId) return;
        if (entry.isIntersecting) {
          setInViewNodes((prev) => {
            if (prev.includes(nodeId)) return prev;
            return [...prev, nodeId];
          });
        }
      });
    }, observerOptions);

    const items = document.querySelectorAll("[data-node-id]");
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={journeySectionRef}
      id="journey"
      className="relative flex flex-col p-6 md:p-12 border-b border-[var(--glass-border)] py-16 md:py-24 w-full"
    >
      <div className="max-w-3xl mx-auto w-full">
        {/* Section Header */}
        <div className="mb-16 md:mb-20 text-center flex flex-col items-center">
          <h2 className="font-syne text-2xl md:text-3xl font-extrabold text-[var(--on-surface)] mb-2 leading-none">
            Full{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(var(--primary-rgb))] to-[rgb(var(--secondary-rgb))] drop-shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)]">
              Journey
            </span>
          </h2>
          <p className="font-body-jakarta text-[11px] md:text-xs text-[var(--on-surface-variant)] max-w-sm mx-auto mb-4">
            A chronicle of technical evolution and interactive exploration.
          </p>
          <Link href="/journey">
            <Button variant="outline" size="sm" className="cursor-pointer">
              EXPLORE YEARLY PROJECTS →
            </Button>
          </Link>
        </div>

        <div className="relative pl-8 md:pl-0 w-full">
          {/* Background timeline track */}
          <div
            className="absolute left-[8px] md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2"
            style={{ background: "var(--glass-border-high)" }}
          />

          {/* Animated progress fill */}
          <div
            style={{ height: `${timelineProgress}%` }}
            className="absolute left-[8px] md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-[rgb(var(--primary-rgb))] to-[rgb(var(--secondary-rgb))] -translate-x-1/2 shadow-[0_0_15px_rgba(var(--primary-rgb),0.8)] transition-all ease-out duration-100"
          />

          {/* Timeline Nodes */}
          <div className="space-y-16 md:space-y-24 relative z-10 w-full">

            {/* Node 1: 2022 */}
            <div
              data-node-id="2022"
              className={`relative flex flex-col md:flex-row items-center transition-all duration-700 select-text ${
                inViewNodes.includes("2022") ? "opacity-100 scale-100" : "opacity-40 scale-95"
              }`}
            >
              <div className="md:w-1/2 flex justify-end md:pr-14 w-full pl-6 md:pl-0 mb-4 md:mb-0 text-left md:text-right">
                <div>
                  <span className={`font-syne text-2xl md:text-3xl font-bold transition-all duration-300 ${
                    inViewNodes.includes("2022")
                      ? "text-[rgb(var(--primary-rgb))] drop-shadow-[0_0_8px_rgba(var(--primary-rgb),0.5)]"
                      : "text-[var(--on-surface-variant)]"
                  }`}>
                    2022
                  </span>
                  <span className="text-[9px] font-mono-technical text-[rgb(var(--primary-rgb))]/60 tracking-wider uppercase block mt-1">
                    Year Summary
                  </span>
                  <h3 className="text-xs md:text-sm font-bold mt-1 text-[var(--on-surface)] font-syne">
                    The Foundation
                  </h3>
                  <p className="text-[10px] md:text-[10.5px] text-[var(--on-surface-variant)] mt-2 leading-relaxed max-w-xs md:ml-auto">
                    Mastering the fundamentals of DOM manipulation and CSS architecture. The birth of a functional mindset.
                  </p>
                </div>
              </div>

              {/* Node dot */}
              <div className={`absolute left-[8px] md:left-1/2 -translate-x-1/2 w-4 h-4 border-2 transition-all duration-300 z-20 ${
                inViewNodes.includes("2022")
                  ? "border-[rgb(var(--primary-rgb))] bg-[rgb(var(--primary-rgb))] shadow-[0_0_15px_rgba(var(--primary-rgb),0.8)]"
                  : "bg-[var(--surface-container)] border-[var(--outline-variant)]"
              }`} />

              <div className="md:w-1/2 flex justify-start md:pl-14 w-full pl-6 md:pl-0">
                <TiltCard className="p-4 w-full max-w-xs text-left">
                  <span className="text-[8px] font-mono-technical text-[rgb(var(--secondary-rgb))]/80 tracking-widest uppercase block mb-1">
                    ★ Core Project of the Year
                  </span>
                  <div className="flex gap-2 mb-3">
                    <span className="px-1.5 py-0.5 bg-[var(--surface-container-high)] border border-[var(--glass-border)] text-[8px] md:text-[8.5px] font-mono-technical text-[rgb(var(--secondary-rgb))]">
                      HTML/CSS
                    </span>
                    <span className="px-1.5 py-0.5 bg-[var(--surface-container-high)] border border-[var(--glass-border)] text-[8px] md:text-[8.5px] font-mono-technical text-[rgb(var(--primary-rgb))]">
                      Vanilla JS
                    </span>
                  </div>
                  <h4 className="font-bold text-[var(--on-surface)] text-xs mb-1 font-syne">Portfolio v1</h4>
                  <p className="text-[9.5px] md:text-[10px] text-[var(--on-surface-variant)] leading-relaxed">
                    First iteration focusing on semantic structures, layout constraints, and responsive grids.
                  </p>
                </TiltCard>
              </div>
            </div>

            {/* Node 2: 2023 */}
            <div
              data-node-id="2023"
              className={`relative flex flex-col md:flex-row-reverse items-center transition-all duration-700 select-text ${
                inViewNodes.includes("2023") ? "opacity-100 scale-100" : "opacity-40 scale-95"
              }`}
            >
              <div className="md:w-1/2 flex justify-start md:pl-14 w-full pl-6 md:pl-0 mb-4 md:mb-0 text-left">
                <div>
                  <span className={`font-syne text-2xl md:text-3xl font-bold transition-all duration-300 ${
                    inViewNodes.includes("2023")
                      ? "text-[rgb(var(--primary-rgb))] drop-shadow-[0_0_8px_rgba(var(--primary-rgb),0.5)]"
                      : "text-[var(--on-surface-variant)]"
                  }`}>
                    2023
                  </span>
                  <span className="text-[9px] font-mono-technical text-[rgb(var(--primary-rgb))]/60 tracking-wider uppercase block mt-1">
                    Year Summary
                  </span>
                  <h3 className="text-xs md:text-sm font-bold mt-1 text-[var(--on-surface)] font-syne">
                    State &amp; Components
                  </h3>
                  <p className="text-[10px] md:text-[10.5px] text-[var(--on-surface-variant)] mt-2 leading-relaxed max-w-xs">
                    Diving into React ecosystems. Building scalable UI libraries and understanding complex state management.
                  </p>
                </div>
              </div>

              <div className={`absolute left-[8px] md:left-1/2 -translate-x-1/2 w-4 h-4 border-2 transition-all duration-300 z-20 ${
                inViewNodes.includes("2023")
                  ? "border-[rgb(var(--primary-rgb))] bg-[rgb(var(--primary-rgb))] shadow-[0_0_15px_rgba(var(--primary-rgb),0.8)]"
                  : "bg-[var(--surface-container)] border-[var(--outline-variant)]"
              }`} />

              <div className="md:w-1/2 flex justify-end md:pr-14 w-full pl-6 md:pl-0">
                <TiltCard className="p-4 w-full max-w-xs text-left">
                  <span className="text-[8px] font-mono-technical text-[rgb(var(--secondary-rgb))]/80 tracking-widest uppercase block mb-1">
                    ★ Core Project of the Year
                  </span>
                  <div className="flex gap-2 mb-3">
                    <span className="px-1.5 py-0.5 bg-[var(--surface-container-high)] border border-[var(--glass-border)] text-[8px] md:text-[8.5px] font-mono-technical text-[rgb(var(--secondary-rgb))]">
                      React
                    </span>
                    <span className="px-1.5 py-0.5 bg-[var(--surface-container-high)] border border-[var(--glass-border)] text-[8px] md:text-[8.5px] font-mono-technical text-[rgb(var(--primary-rgb))]">
                      Tailwind CSS
                    </span>
                  </div>
                  <h4 className="font-bold text-[var(--on-surface)] text-xs mb-1 font-syne">E-Commerce Dashboard</h4>
                  <p className="text-[9.5px] md:text-[10px] text-[var(--on-surface-variant)] leading-relaxed">
                    A complex, data-heavy dashboard with real-time filtering, state caching, and sleek data visualizations.
                  </p>
                </TiltCard>
              </div>
            </div>

            {/* Node 3: 2024 */}
            <div
              data-node-id="2024"
              className={`relative flex flex-col md:flex-row items-center transition-all duration-700 select-text ${
                inViewNodes.includes("2024") ? "opacity-100 scale-100" : "opacity-40 scale-95"
              }`}
            >
              <div className="md:w-1/2 flex justify-end md:pr-14 w-full pl-6 md:pl-0 mb-4 md:mb-0 text-left md:text-right">
                <div>
                  <span className={`font-syne text-2xl md:text-3xl font-bold transition-all duration-300 ${
                    inViewNodes.includes("2024")
                      ? "text-[rgb(var(--primary-rgb))] drop-shadow-[0_0_8px_rgba(var(--primary-rgb),0.5)]"
                      : "text-[var(--on-surface-variant)]"
                  }`}>
                    2024
                  </span>
                  <span className="text-[9px] font-mono-technical text-[rgb(var(--primary-rgb))]/60 tracking-wider uppercase block mt-1">
                    Year Summary
                  </span>
                  <h3 className="text-xs md:text-sm font-bold mt-1 text-[var(--on-surface)] font-syne">
                    The 3D Dimension
                  </h3>
                  <p className="text-[10px] md:text-[10.5px] text-[var(--on-surface-variant)] mt-2 leading-relaxed max-w-xs md:ml-auto">
                    Integrating Three.js and WebGL. Bridging the gap between flat interfaces and immersive spatial experiences.
                  </p>
                </div>
              </div>

              <div className={`absolute left-[8px] md:left-1/2 -translate-x-1/2 w-4 h-4 border-2 transition-all duration-300 z-20 ${
                inViewNodes.includes("2024")
                  ? "border-[rgb(var(--primary-rgb))] bg-[rgb(var(--primary-rgb))] shadow-[0_0_15px_rgba(var(--primary-rgb),0.8)]"
                  : "bg-[var(--surface-container)] border-[var(--outline-variant)]"
              }`} />

              <div className="md:w-1/2 flex justify-start md:pl-14 w-full pl-6 md:pl-0">
                <TiltCard className="p-1 w-full max-w-xs text-left relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--primary-rgb))]/10 to-[rgb(var(--secondary-rgb))]/10 z-0 pointer-events-none" />
                  <div className="bg-[var(--surface-container)] relative z-10 p-4">
                    <span className="text-[8px] font-mono-technical text-[rgb(var(--secondary-rgb))]/80 tracking-widest uppercase block mb-1">
                      ★ Core Project of the Year
                    </span>
                    <div className="flex gap-2 mb-3">
                      <span className="px-1.5 py-0.5 bg-[var(--surface-container-high)] border border-[var(--glass-border)] text-[8px] md:text-[8.5px] font-mono-technical text-[rgb(var(--primary-rgb))] font-bold">
                        Three.js
                      </span>
                      <span className="px-1.5 py-0.5 bg-[var(--surface-container-high)] border border-[var(--glass-border)] text-[8px] md:text-[8.5px] font-mono-technical text-[rgb(var(--secondary-rgb))]">
                        GSAP
                      </span>
                    </div>
                    <h4 className="font-bold text-[var(--on-surface)] text-xs mb-1 font-syne">Cyber Gallery</h4>
                    <p className="text-[9.5px] md:text-[10px] text-[var(--on-surface-variant)] leading-relaxed mb-3">
                      An interactive virtual showroom for high-fashion digital assets featuring dynamic lighting and spatial geometry.
                    </p>
                    <div className="w-full h-16 bg-[var(--surface-container-highest)] border border-[var(--glass-border)] relative overflow-hidden flex items-center justify-center text-[7px] text-[var(--on-surface-variant)] font-mono-technical">
                      <div className="absolute inset-0 bg-grid opacity-15" />
                      <span>3D GL_GALLERY SCREEN</span>
                    </div>
                  </div>
                </TiltCard>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
