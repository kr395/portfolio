"use client";

import React from "react";

export const Footer = () => (
  <footer className="px-5 sm:px-8 md:px-14 py-10 md:py-14 w-full transition-colors duration-300 select-none">
    <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-0">
      <div className="text-center sm:text-left flex flex-col gap-1">
        <span className="font-syne text-base sm:text-lg text-[rgb(var(--primary-rgb))] font-extrabold tracking-tight">KR</span>
        <span className="text-caption font-mono-technical text-[var(--on-surface-variant)]">
          © 2026 KR — Engineered for the Future
        </span>
      </div>
      <div className="flex gap-6">
        {["Instagram", "LinkedIn", "GitHub"].map((link) => (
          <a
            key={link}
            className="text-caption font-mono-technical text-[var(--on-surface-variant)] hover:text-[rgb(var(--primary-rgb))] transition-colors cursor-pointer uppercase tracking-wider"
            href={`#${link.toLowerCase()}`}
          >
            {link}
          </a>
        ))}
      </div>
    </div>
  </footer>
);
