"use client";

import React, { useEffect, useRef, useState } from "react";

export const CursorTrail = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Track positions
  const mousePos = useRef({ x: -300, y: -300 });
  const glowPos = useRef({ x: -300, y: -300 });

  useEffect(() => {
    // Hide default cursor across the entire document
    document.documentElement.style.cursor = "none";
    
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      // Detect if we are hovering over anything interactive
      const interactive = !!target.closest(
        "a, button, [role='button'], label, select, input, textarea, .glass-card, .interactive-trigger"
      );
      
      setIsHovering((prev) => {
        if (prev !== interactive) return interactive;
        return prev;
      });
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    let frameId: number;

    const animate = () => {
      const mx = mousePos.current.x;
      const my = mousePos.current.y;

      // 1. Core Dot: Exact position (Zero lag for perfect accuracy)
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
      }

      // 2. Glow/Ring: Fast lerp (subtle smooth follow effect, low lag)
      glowPos.current.x += (mx - glowPos.current.x) * 0.35;
      glowPos.current.y += (my - glowPos.current.y) * 0.35;
      
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${glowPos.current.x}px, ${glowPos.current.y}px, 0)`;
      }

      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);

    return () => {
      document.documentElement.style.cursor = "auto";
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(frameId);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* ── Outer Agent Glow (Smooth follow, expands on hover, matching design system) ── */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998] rounded-full will-change-transform flex items-center justify-center"
        style={{
          width: isHovering ? 56 : 32,
          height: isHovering ? 56 : 32,
          marginLeft: isHovering ? -28 : -16,
          marginTop: isHovering ? -28 : -16,
          background: isHovering ? "rgba(var(--primary-rgb), 0.15)" : "transparent",
          border: `1.5px solid rgba(var(--secondary-rgb), ${isHovering ? 0.8 : 0.5})`,
          boxShadow: `0 0 15px rgba(var(--secondary-rgb), ${isHovering ? 0.6 : 0.2}), inset 0 0 10px rgba(var(--primary-rgb), 0.2)`,
          transition: "width 0.25s cubic-bezier(0.16, 1, 0.3, 1), height 0.25s cubic-bezier(0.16, 1, 0.3, 1), margin 0.25s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.25s ease, border-color 0.25s ease",
          transform: "translate3d(-300px, -300px, 0)",
        }}
      />

      {/* ── Inner Precision Dot (Exact tracking, glowing primary color) ── */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full will-change-transform"
        style={{
          width: 8,
          height: 8,
          marginLeft: -4,
          marginTop: -4,
          background: "rgb(var(--primary-rgb))",
          boxShadow: "0 0 10px rgb(var(--primary-rgb)), 0 0 20px rgb(var(--secondary-rgb))",
          transform: "translate3d(-300px, -300px, 0)",
          opacity: isHovering ? 0 : 1, // Hide the core dot when hovering
          transformOrigin: "center",
          transition: "opacity 0.2s ease-out",
        }}
      />
    </>
  );
};
