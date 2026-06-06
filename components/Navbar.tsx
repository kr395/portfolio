"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

interface NavbarProps {
  scrollToSection: (id: string) => void;
}

export const Navbar = ({ scrollToSection }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const currentPath = window.location.pathname;
    if (currentPath === "/journey" || currentPath.startsWith("/journey")) {
      setActiveSection("journey");
    } else {
      setActiveSection("home");
    }
  }, []);

  const handleNavClick = (sectionId: string) => {
    setIsOpen(false);
    scrollToSection(sectionId);
  };

  return (
    <nav className="sticky top-0 z-30 border-b border-[var(--outline-variant)]/20 bg-[var(--surface)]/85 backdrop-blur-md px-6 py-4 flex flex-col justify-center select-none w-full transition-colors duration-300">
      <div className="max-w-5xl mx-auto flex justify-between items-center w-full">
        {/* Brand Logo */}
        <a
          className="font-display text-lg font-extrabold text-[rgb(var(--primary-rgb))] tracking-tighter flex items-center gap-1.5"
          href="#"
          onClick={() => handleNavClick("hero")}
        >
          <span className="h-5 w-5 bg-gradient-to-tr from-[rgb(var(--primary-rgb))] to-[rgb(var(--secondary-rgb))] text-[10px] text-slate-950 font-black flex items-center justify-center">
            K
          </span>
          <span>KR</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-6 text-[10.5px] font-bold font-mono-technical items-center">
          <button
            onClick={() => handleNavClick("hero")}
            className={`transition-all duration-300 cursor-pointer focus:outline-none relative pb-1 ${
              activeSection === "home"
                ? "text-[rgb(var(--primary-rgb))] font-extrabold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[rgb(var(--primary-rgb))] after:shadow-[0_0_8px_rgba(var(--primary-rgb),0.8)]"
                : "text-[var(--on-surface-variant)] hover:text-[rgb(var(--primary-rgb))]"
            }`}
          >
            HOME
          </button>
          <Link
            href="/journey"
            className={`transition-all duration-300 cursor-pointer relative pb-1 ${
              activeSection === "journey"
                ? "text-[rgb(var(--primary-rgb))] font-extrabold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[rgb(var(--primary-rgb))] after:shadow-[0_0_8px_rgba(var(--primary-rgb),0.8)]"
                : "text-[var(--on-surface-variant)] hover:text-[rgb(var(--primary-rgb))]"
            }`}
          >
            JOURNEY
          </Link>
          <button
            onClick={() => handleNavClick("projects")}
            className={`transition-all duration-300 cursor-pointer focus:outline-none relative pb-1 ${
              activeSection === "projects"
                ? "text-[rgb(var(--primary-rgb))] font-extrabold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[rgb(var(--primary-rgb))] after:shadow-[0_0_8px_rgba(var(--primary-rgb),0.8)]"
                : "text-[var(--on-surface-variant)] hover:text-[rgb(var(--primary-rgb))]"
            }`}
          >
            PROJECTS
          </button>
        </div>

        {/* Right side: Theme Toggle + HIRE ME + Hamburger */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <ThemeToggle />

          {/* HIRE ME */}
          <Link
            href="/journey"
            className="hidden md:block border border-[rgb(var(--primary-rgb))] text-[9px] font-bold px-3 py-1.5 text-[rgb(var(--primary-rgb))] bg-[rgb(var(--primary-rgb))]/5 hover:bg-[rgb(var(--primary-rgb))]/20 transition-all font-mono-technical"
          >
            HIRE ME
          </Link>

          {/* Hamburger Menu Icon */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col gap-1 justify-center items-center md:hidden w-6 h-6 border border-[var(--outline-variant)]/30 bg-[var(--surface-container-low)]/50 p-1 hover:border-[rgb(var(--primary-rgb))]/40 transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <span className={`h-0.5 w-4 bg-[var(--on-surface-variant)] transition-all ${isOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`h-0.5 w-4 bg-[var(--on-surface-variant)] transition-all ${isOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-4 bg-[var(--on-surface-variant)] transition-all ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 pt-4 pb-2 border-t border-[var(--outline-variant)]/20 mt-4 transition-all duration-300 font-mono-technical text-xs font-bold">
          <button
            onClick={() => handleNavClick("hero")}
            className={`w-full py-2 hover:bg-[rgb(var(--primary-rgb))]/5 hover:text-[rgb(var(--primary-rgb))] transition-all text-center focus:outline-none ${
              activeSection === "home" ? "text-[rgb(var(--primary-rgb))]" : "text-[var(--on-surface-variant)]"
            }`}
          >
            HOME
          </button>
          <Link
            href="/journey"
            onClick={() => setIsOpen(false)}
            className={`w-full py-2 hover:bg-[rgb(var(--primary-rgb))]/5 hover:text-[rgb(var(--primary-rgb))] transition-all text-center ${
              activeSection === "journey" ? "text-[rgb(var(--primary-rgb))]" : "text-[var(--on-surface-variant)]"
            }`}
          >
            JOURNEY
          </Link>
          <button
            onClick={() => handleNavClick("projects")}
            className={`w-full py-2 hover:bg-[rgb(var(--primary-rgb))]/5 hover:text-[rgb(var(--primary-rgb))] transition-all text-center focus:outline-none ${
              activeSection === "projects" ? "text-[rgb(var(--primary-rgb))]" : "text-[var(--on-surface-variant)]"
            }`}
          >
            PROJECTS
          </button>
          <Link
            href="/journey"
            onClick={() => setIsOpen(false)}
            className="mt-1 border border-[rgb(var(--primary-rgb))] text-[9px] font-bold px-4 py-2 text-[rgb(var(--primary-rgb))] bg-[rgb(var(--primary-rgb))]/5 hover:bg-[rgb(var(--primary-rgb))]/20 transition-all"
          >
            HIRE ME
          </Link>
        </div>
      )}
    </nav>
  );
};
