"use client";

import React, { useState } from "react";
import Image from "next/image";

interface HeroProps {
  scrollToSection: (id: string) => void;
}

export const Hero = ({ scrollToSection }: HeroProps) => {
  const [isWinking, setIsWinking] = useState(false);

  const [heroRotateX, setHeroRotateX] = useState(0);
  const [heroRotateY, setHeroRotateY] = useState(0);
  const [heroTranslateX, setHeroTranslateX] = useState(0);
  const [heroTranslateY, setHeroTranslateY] = useState(0);

  const handleHeroMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const percentX = (x - centerX) / centerX;
    const percentY = (y - centerY) / centerY;
    setHeroRotateX(percentY * -15);
    setHeroRotateY(percentX * 15);
    setHeroTranslateX(percentX * 8);
    setHeroTranslateY(percentY * 8);
  };

  const handleHeroMouseLeave = () => {
    setHeroRotateX(0);
    setHeroRotateY(0);
    setHeroTranslateX(0);
    setHeroTranslateY(0);
  };

  return (
    <section
      id="hero"
      onMouseMove={handleHeroMouseMove}
      onMouseLeave={handleHeroMouseLeave}
      className="relative flex min-h-[580px] flex-col items-center justify-center p-6 md:p-12 overflow-hidden border-b border-[var(--glass-border)]"
    >
      {/* Interactive SVG Wireframe Backdrop */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <div
          style={{ transform: `rotateX(${heroRotateX}deg) rotateY(${heroRotateY}deg)` }}
          className="w-full max-w-[320px] md:max-w-[420px] aspect-square transition-transform ease-out duration-300"
        >
          <svg
            className="w-full h-full fill-none stroke-[1.2px] drop-shadow-[0_0_8px_rgba(var(--primary-rgb),0.2)]"
            style={{ stroke: "rgba(var(--primary-rgb), 0.12)" }}
            viewBox="0 0 100 100"
          >
            <path d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z" />
            <path d="M50 10 L50 90" />
            <path d="M10 30 L90 70" />
            <path d="M10 70 L90 30" />
            <path d="M30 20 L70 20 L70 80 L30 80 Z" />
          </svg>
        </div>
      </div>

      {/* Content Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-12 gap-8 items-center flex-1 w-full relative z-10">
        {/* Left: Branding & Bio */}
        <div
          style={{ transform: `translate3d(${heroTranslateX}px, ${heroTranslateY}px, 30px)` }}
          className="col-span-12 md:col-span-7 flex flex-col justify-center text-center md:text-left items-center md:items-start transition-transform ease-out duration-300"
        >
          {/* KR Logo */}
          <div className="relative mb-6">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[rgb(var(--primary-rgb))] to-[rgb(var(--secondary-rgb))] opacity-40 blur-[4px]" />
            <div className="font-syne relative flex h-14 w-20 md:h-16 md:w-24 items-center justify-center border border-[var(--glass-border-high)] bg-[var(--surface-container-low)]/75 text-3xl md:text-4xl font-extrabold tracking-tight shadow-2xl backdrop-blur-md">
              <span className="bg-gradient-to-r from-[rgb(var(--primary-rgb))] to-[rgb(var(--secondary-rgb))] bg-clip-text text-transparent">
                KR
              </span>
            </div>
          </div>

          {/* Bio Title */}
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[var(--on-surface)] mb-2 leading-none font-syne">
            Gopal Kumar Das
          </h1>

          <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
            <div className="h-1.5 w-1.5 bg-[rgb(var(--primary-rgb))] animate-pulse" />
            <p className="text-[10px] md:text-xs font-bold text-[rgb(var(--primary-rgb))] tracking-widest uppercase font-mono-technical">
              Creative Developer &amp; AI Engineer
            </p>
          </div>

          <p className="max-w-md text-xs md:text-sm leading-relaxed text-[var(--on-surface-variant)] font-body-jakarta">
            Crafting high-performance web systems, hybrid mobile experiences, and integrated AI assistant utilities. Building robust digital engineering frameworks with modern architectures and clean typography.
          </p>

          <div className="flex gap-4 mt-6">
            <button
              onClick={() => scrollToSection("journey")}
              className="bg-[rgb(var(--primary-rgb))] text-[var(--surface-container-lowest)] font-mono-technical font-bold text-[10px] px-6 py-2.5 hover:opacity-90 transition-all hover:shadow-[0_0_15px_rgba(var(--primary-rgb),0.35)] cursor-pointer"
            >
              EXPLORE JOURNEY ↓
            </button>
          </div>
        </div>

        {/* Right: Mascot */}
        <div className="col-span-12 md:col-span-5 flex flex-col items-center justify-center relative select-none mt-4 md:mt-0">
          <div
            onMouseEnter={() => setIsWinking(true)}
            onMouseLeave={() => setIsWinking(false)}
            className="animate-float relative z-10 cursor-pointer flex flex-col items-center justify-center w-40 h-40 md:w-[190px] md:h-[190px]"
          >
            <Image
              src="/image_9.png"
              alt="3D Spherical Mascot"
              fill
              className="object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.4)]"
              priority
            />
            <div className="absolute top-[27%] left-[29%] w-[42%] h-[18%] flex items-center justify-center pointer-events-none">
              {isWinking ? (
                <div className="flex gap-1.5 md:gap-2">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-[rgb(var(--primary-rgb))] filter drop-shadow-[0_0_4px_rgba(var(--primary-rgb),0.8)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                    <path d="M6 14c2-2.5 5-2.5 7 0" strokeLinecap="round" />
                  </svg>
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-[rgb(var(--primary-rgb))] filter drop-shadow-[0_0_4px_rgba(var(--primary-rgb),0.8)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                    <path d="M6 10c2.5 2 5.5 2 8 0" strokeLinecap="round" />
                  </svg>
                </div>
              ) : (
                <div className="flex gap-3 md:gap-4">
                  <div className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 rounded-full bg-[rgb(var(--primary-rgb))] animate-pulse shadow-[0_0_8px_rgba(var(--primary-rgb),0.9)]" />
                  <div className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 rounded-full bg-[rgb(var(--primary-rgb))] animate-pulse shadow-[0_0_8px_rgba(var(--primary-rgb),0.9)]" />
                </div>
              )}
            </div>
          </div>

          {/* Glow platform */}
          <div className="absolute -bottom-4 w-[120px] md:w-[160px] h-[12px] md:h-[16px] rounded-[50%] bg-[rgb(var(--primary-rgb))]/15 blur-[8px] border border-[rgb(var(--primary-rgb))]/10 shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)] animate-pulse" />
        </div>
      </div>
    </section>
  );
};
