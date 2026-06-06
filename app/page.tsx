"use client";

import React, { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Timeline } from "@/components/Timeline";
import { Projects } from "@/components/Projects";
import { TechStack } from "@/components/TechStack";
import { Footer } from "@/components/Footer";
import { CursorTrail } from "@/components/CursorTrail";

export default function Home() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 150);
    }
  }, []);

  return (
    <div
      className="theme-purple custom-cursor-active relative min-h-screen w-full
                 bg-[var(--surface)] text-[var(--on-surface)] font-body-jakarta
                 scanlines scroll-smooth transition-colors duration-300"
    >
      {/* Custom Cursor */}
      <CursorTrail />

      {/* Ambient background glows */}
      <div className="pointer-events-none absolute left-[15%] top-[10%] h-[300px] w-[300px] rounded-full bg-[rgb(var(--primary-rgb))] opacity-[0.05] blur-[80px]" />
      <div className="pointer-events-none absolute right-[10%] top-[40%] h-[400px] w-[300px] rounded-full bg-[rgb(var(--secondary-rgb))] opacity-[0.04] blur-[100px]" />
      <div className="pointer-events-none absolute left-[20%] bottom-[10%] h-[350px] w-[350px] rounded-full bg-[rgb(var(--primary-rgb))] opacity-[0.03] blur-[120px]" />

      {/* ─────────────────────────────────────────────────────────────
          BENTO GRID — each row is a cell separated by a 1px border.
          The outer wrapper has bg=border-color so the 1px gap
          between cells *is* the border.
      ──────────────────────────────────────────────────────────────── */}
      <div className="bento-grid relative">
        <div className="sticky top-0 z-50 w-full">
          <Navbar scrollToSection={scrollToSection} />
        </div>

        {/* ══ CELL 1 — Hero (full width) ══ */}
        <div className="bento-cell">
          <Hero scrollToSection={scrollToSection} />
        </div>
        {/* ══ CELL 2 — Journey Timeline (full width) ══ */}
        <div className="bento-cell-alt">
          <Timeline />
        </div>

        {/* ══ CELL 3 — Tech Stack (full width) ══ */}
        <div className="bento-cell">
          <TechStack />
        </div>

        {/* ══ CELL 3 — Projects (full width) ══ */}
        <div className="bento-cell">
          <Projects />
        </div>

        {/* ══ CELL 4 — Footer ══ */}
        <div className="bento-cell-alt">
          <Footer />
        </div>
      </div>
    </div>
  );
}
