"use client";

import React, { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Timeline } from "@/components/Timeline";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";
import { CursorTrail } from "@/components/CursorTrail";

export default function Home() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 150);
    }
  }, []);

  return (
    <div className="theme-purple custom-cursor-active relative min-h-screen w-full bg-[var(--surface)] text-[var(--on-surface)] font-body-jakarta scanlines scroll-smooth transition-colors duration-300">
      {/* Custom Cursor */}
      <CursorTrail />

      {/* Ambient background glows — theme-aware via CSS vars */}
      <div className="pointer-events-none absolute left-[15%] top-[10%] h-[300px] w-[300px] rounded-full bg-[rgb(var(--primary-rgb))] opacity-[0.05] blur-[80px]" />
      <div className="pointer-events-none absolute right-[10%] top-[40%] h-[400px] w-[300px] rounded-full bg-[rgb(var(--secondary-rgb))] opacity-[0.04] blur-[100px]" />
      <div className="pointer-events-none absolute left-[20%] bottom-[10%] h-[350px] w-[350px] rounded-full bg-[rgb(var(--primary-rgb))] opacity-[0.03] blur-[120px]" />

      {/* 1. Header Navigation */}
      <Navbar scrollToSection={scrollToSection} />

      {/* 2. Hero Section */}
      <Hero scrollToSection={scrollToSection} />

      {/* 4. Timeline Scroll Section */}
      <Timeline />

      {/* 5. Projects Grid */}
      <Projects />

      {/* 6. Footer */}
      <Footer />
    </div>
  );
}
