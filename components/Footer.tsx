"use client";

import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-[var(--surface-container-lowest)]/60 border-t border-[var(--glass-border)] p-6 md:p-8 select-none font-mono-technical text-[9px] md:text-[10px] text-[var(--on-surface-variant)] py-12 md:py-16 w-full transition-colors duration-300">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center w-full gap-6 md:gap-0">
        <div className="text-center md:text-left flex flex-col gap-1">
          <span className="font-syne text-sm text-[rgb(var(--primary-rgb))] font-bold">KR</span>
          <span>© 2026 KR — Engineered for the Future</span>
        </div>
        <div className="flex gap-6 text-[10px] md:text-[10.5px]">
          <a className="hover:text-[rgb(var(--primary-rgb))] transition-colors cursor-pointer" href="#instagram">Instagram</a>
          <a className="hover:text-[rgb(var(--primary-rgb))] transition-colors cursor-pointer" href="#linkedin">LinkedIn</a>
          <a className="hover:text-[rgb(var(--primary-rgb))] transition-colors cursor-pointer" href="#github">GitHub</a>
        </div>
      </div>
    </footer>
  );
};
