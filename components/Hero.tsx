"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { TechIcons } from "./ui/TechIcons";
import { SocialLinks } from "./ui/SocialLinks";

interface HeroProps {
  scrollToSection: (id: string) => void;
}

export const Hero = ({ scrollToSection }: HeroProps) => {
  const [isWinking, setIsWinking] = useState(false);

  // All 3D state tracked via refs — zero React re-renders for transforms
  const sectionRef = useRef<HTMLElement>(null);
  const hexOuterRef = useRef<HTMLDivElement>(null);
  const hexInnerRef = useRef<HTMLDivElement>(null);
  const mascotRef = useRef<HTMLDivElement>(null);
  const bioRef = useRef<HTMLDivElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);

  const mouse = useRef({ x: 0, y: 0 });
  const current = useRef({ rx: 0, ry: 0 });
  const frameId = useRef<number>(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const onMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      mouse.current.x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
      mouse.current.y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    };

    const onLeave = () => {
      mouse.current.x = 0;
      mouse.current.y = 0;
    };

    section.addEventListener("mousemove", onMove);
    section.addEventListener("mouseleave", onLeave);

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      const tx = mouse.current.x;
      const ty = mouse.current.y;

      current.current.rx = lerp(current.current.rx, ty * -14, 0.06);
      current.current.ry = lerp(current.current.ry, tx * 14, 0.06);

      const rx = current.current.rx;
      const ry = current.current.ry;

      // Outer hex rotates slowly
      if (hexOuterRef.current) {
        hexOuterRef.current.style.transform = `rotateX(${rx * 0.6}deg) rotateY(${ry * 0.6}deg)`;
      }

      // Inner hex rotates more aggressively in opposite axis for parallax
      if (hexInnerRef.current) {
        hexInnerRef.current.style.transform = `rotateX(${rx * 1.1}deg) rotateY(${ry * 1.1}deg) translateZ(60px)`;
      }

      // Mascot tilts against the movement — gives it physical weight
      if (mascotRef.current) {
        mascotRef.current.style.transform = `translateX(${tx * -10}px) translateY(${ty * -6}px) rotateX(${-rx * 1.3}deg) rotateY(${-ry * 1.3}deg) translateZ(30px)`;
      }

      // Bio text drifts slightly with mouse
      if (bioRef.current) {
        bioRef.current.style.transform = `translateX(${tx * 5}px) translateY(${ty * 3}px)`;
      }

      // Ambient orbs drift
      if (orb1Ref.current) {
        orb1Ref.current.style.transform = `translate(${tx * -30}px, ${ty * -20}px)`;
      }
      if (orb2Ref.current) {
        orb2Ref.current.style.transform = `translate(${tx * 25}px, ${ty * 15}px)`;
      }

      frameId.current = requestAnimationFrame(animate);
    };

    frameId.current = requestAnimationFrame(animate);

    return () => {
      section.removeEventListener("mousemove", onMove);
      section.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(frameId.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex flex-col items-center justify-center px-5 sm:px-8 md:px-14 py-10 sm:py-12 md:py-16 overflow-hidden"
      style={{ perspective: "1200px" }}
    >
      {/* ── Ambient glow orbs ── */}
      <div
        ref={orb1Ref}
        className="pointer-events-none absolute top-[-5%] left-[-10%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full opacity-[0.07] blur-[80px] will-change-transform transition-transform duration-[1200ms] ease-out"
        style={{ background: "radial-gradient(circle, rgb(var(--primary-rgb)), transparent 70%)" }}
      />
      <div
        ref={orb2Ref}
        className="pointer-events-none absolute bottom-[-10%] right-[-10%] w-[35vw] h-[35vw] max-w-[450px] max-h-[450px] rounded-full opacity-[0.06] blur-[80px] will-change-transform transition-transform duration-[1400ms] ease-out"
        style={{ background: "radial-gradient(circle, rgb(var(--secondary-rgb)), transparent 70%)" }}
      />

      {/* ── Multi-layer 3D Wireframe Hexagon Backdrop ── */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0"
        style={{ perspective: "900px" }}
      >
        {/* Layer 1 — Outermost, slow rotate, pushed back in Z */}
        <div
          ref={hexOuterRef}
          className="absolute w-[min(80vw,520px)] aspect-square will-change-transform"
          style={{ transformStyle: "preserve-3d" }}
        >
          <svg className="w-full h-full fill-none" viewBox="0 0 200 200">
            {/* Outer hex frame */}
            <polygon
              points="100,8 184,54 184,146 100,192 16,146 16,54"
              strokeWidth="0.8"
              stroke="rgba(var(--primary-rgb), 0.18)"
            />
            {/* Inner structural lines */}
            <line x1="100" y1="8" x2="100" y2="192" strokeWidth="0.5" stroke="rgba(var(--primary-rgb), 0.08)" />
            <line x1="16" y1="54" x2="184" y2="146" strokeWidth="0.5" stroke="rgba(var(--primary-rgb), 0.08)" />
            <line x1="16" y1="146" x2="184" y2="54" strokeWidth="0.5" stroke="rgba(var(--primary-rgb), 0.08)" />
            {/* Inscribed smaller hex */}
            <polygon
              points="100,32 160,66 160,134 100,168 40,134 40,66"
              strokeWidth="0.6"
              stroke="rgba(var(--secondary-rgb), 0.12)"
            />
            {/* Corner accent dots */}
            {[[100,8],[184,54],[184,146],[100,192],[16,146],[16,54]].map(([cx,cy], i) => (
              <circle key={i} cx={cx} cy={cy} r="2" fill="rgba(var(--primary-rgb), 0.25)" />
            ))}
          </svg>
        </div>

        {/* Layer 2 — Middle hex, counter-parallax, glowing */}
        <div
          ref={hexInnerRef}
          className="absolute w-[min(55vw,340px)] aspect-square will-change-transform"
          style={{ transformStyle: "preserve-3d" }}
        >
          <svg className="w-full h-full fill-none" viewBox="0 0 200 200">
            <polygon
              points="100,20 172,60 172,140 100,180 28,140 28,60"
              strokeWidth="1.2"
              stroke="rgba(var(--secondary-rgb), 0.3)"
              strokeDasharray="6 4"
            />
            {/* Glowing corners */}
            {[[100,20],[172,60],[172,140],[100,180],[28,140],[28,60]].map(([cx,cy], i) => (
              <circle key={i} cx={cx} cy={cy} r="3" fill="rgba(var(--secondary-rgb), 0.5)" style={{ filter: "blur(1px)" }} />
            ))}
          </svg>
        </div>
      </div>

      {/* ── Content grid ── */}
      <div className="w-full grid grid-cols-12 gap-6 md:gap-10 items-center flex-1 relative z-10">

        {/* ── Left: Bio ── */}
        <div
          ref={bioRef}
          className="col-span-12 md:col-span-7 flex flex-col justify-center text-center md:text-left items-center md:items-start will-change-transform transition-transform duration-[800ms] ease-out"
        >
          {/* Logo mark */}
          <div className="relative mb-5">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[rgb(var(--primary-rgb))] to-[rgb(var(--secondary-rgb))] opacity-40 blur-[4px]" />
            <div className="font-syne relative flex h-12 w-16 sm:h-14 sm:w-20 items-center justify-center border border-[var(--glass-border-high)] bg-[var(--surface-container-low)]/75 text-2xl sm:text-3xl font-extrabold tracking-tight backdrop-blur-md">
              <span className="bg-gradient-to-r from-[rgb(var(--primary-rgb))] to-[rgb(var(--secondary-rgb))] bg-clip-text text-transparent">
                KR
              </span>
            </div>
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl lg:text-[3rem] font-extrabold tracking-tight text-[var(--on-surface)] mb-3 sm:mb-5 font-syne leading-none">
            Gopal Kr Das
          </h1>

          {/* Role badge */}
          <div className="flex items-center gap-2.5 mb-5 justify-center md:justify-start">
            <div className="h-2 w-2 bg-[rgb(var(--primary-rgb))] animate-pulse rounded-full" />
            <p className="text-xs sm:text-sm md:text-base font-bold text-[rgb(var(--primary-rgb))] font-mono-technical tracking-wide uppercase">
              Software Engineer | AI &amp; Full Stack Developer
            </p>
          </div>

          {/* Description */}
          <p className="max-w-sm sm:max-w-md lg:max-w-lg text-sm sm:text-base text-[var(--on-surface-variant)] font-body-jakarta leading-relaxed">
            Crafting high-performance web systems, modern mobile experiences,
            and integrated AI assistant utilities. Building robust, full-stack
            digital engineering frameworks focused on fluid interactions and
            scalable server-side architectures.
          </p>

          {/* CTA */}
          <div className="flex gap-3 mt-7">
            <button
              onClick={() => scrollToSection("journey")}
              className="bg-[rgb(var(--primary-rgb))] text-[var(--surface-container-lowest)] font-mono-technical font-bold text-badge px-6 py-2.5 hover:opacity-90 transition-all hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.4)] cursor-pointer uppercase tracking-wider"
            >
              Explore Journey ↓
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="border border-[var(--glass-border-high)] text-[var(--on-surface-variant)] font-mono-technical font-semibold text-badge px-6 py-2.5 hover:border-[rgb(var(--primary-rgb))] hover:text-[rgb(var(--primary-rgb))] transition-all cursor-pointer uppercase tracking-wider"
            >
              Projects
            </button>
          </div>

          <SocialLinks />

          {/* Languages Stack */}
          <div className="flex items-center gap-3 mt-8">
            <span className="text-mono-label font-mono-technical text-[var(--on-surface-variant)] text-[10px] uppercase tracking-widest mr-2">
              Core Languages:
            </span>
            {["TypeScript", "Python", "Swift", "JavaScript"].map((lang) => (
              <div
                key={lang}
                className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-[var(--surface-container)] border border-[var(--glass-border)] rounded-md p-1.5 hover:scale-110 transition-transform cursor-help"
                title={lang}
              >
                {TechIcons[lang]}
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: Mascot ── */}
        <div
          className="col-span-12 md:col-span-5 flex flex-col items-center justify-center relative select-none mt-6 md:mt-0"
          style={{ perspective: "800px" }}
        >
          <div
            ref={mascotRef}
            onMouseEnter={() => setIsWinking(true)}
            onMouseLeave={() => setIsWinking(false)}
            className="animate-float relative z-10 cursor-pointer flex flex-col items-center justify-center w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 will-change-transform transition-transform duration-[600ms] ease-out"
            style={{ transformStyle: "preserve-3d" }}
          >
            <Image
              src="/image_9.png"
              alt="3D Spherical Mascot"
              fill
              className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
              priority
            />
            {/* Eyes overlay */}
            <div className="absolute top-[27%] left-[29%] w-[42%] h-[18%] flex items-center justify-center pointer-events-none">
              {isWinking ? (
                <div className="flex gap-1.5">
                  <svg className="w-4 h-4 text-[rgb(var(--primary-rgb))] filter drop-shadow-[0_0_4px_rgba(var(--primary-rgb),0.8)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                    <path d="M6 14c2-2.5 5-2.5 7 0" strokeLinecap="round" />
                  </svg>
                  <svg className="w-4 h-4 text-[rgb(var(--primary-rgb))] filter drop-shadow-[0_0_4px_rgba(var(--primary-rgb),0.8)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                    <path d="M6 10c2.5 2 5.5 2 8 0" strokeLinecap="round" />
                  </svg>
                </div>
              ) : (
                <div className="flex gap-3 md:gap-4">
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[rgb(var(--primary-rgb))] animate-pulse shadow-[0_0_8px_rgba(var(--primary-rgb),0.9)]" />
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[rgb(var(--primary-rgb))] animate-pulse shadow-[0_0_8px_rgba(var(--primary-rgb),0.9)]" />
                </div>
              )}
            </div>
          </div>

          {/* Glow platform */}
          <div className="absolute -bottom-2 w-28 sm:w-36 md:w-44 h-3 rounded-[50%] bg-[rgb(var(--primary-rgb))]/15 blur-[10px] animate-pulse" />
        </div>
      </div>
    </section>
  );
};
