"use client";

import React, { useEffect, useRef, useState } from "react";

export const CursorTrail = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);

  // Track target coordinates using Refs to completely bypass React state updates on mousemove
  const mousePos = useRef({ x: -100, y: -100 });
  const currentPos = useRef({ x: -100, y: -100 });
  const trailPositions = useRef<{ x: number; y: number }[]>(
    Array.from({ length: 6 }, () => ({ x: -100, y: -100 }))
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
      setIsVisible(true);

      // Detect hover on interactive elements to change state (only toggles boolean, doesn't trigger 60Hz updates)
      const target = e.target as HTMLElement;
      const isInteractive = !!target.closest("a, button, [role='button'], select, option, .glass-card, .interactive-trigger");
      setIsHoveringInteractive((prev) => (prev !== isInteractive ? isInteractive : prev));
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    let animationFrameId: number;

    const updateCursor = () => {
      // Lerp main cursor position (smooth movement)
      const ease = 0.22;
      currentPos.current.x += (mousePos.current.x - currentPos.current.x) * ease;
      currentPos.current.y += (mousePos.current.y - currentPos.current.y) * ease;

      // Update main cursor DOM directly using hardware-accelerated translate3d
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentPos.current.x}px, ${currentPos.current.y}px, 0)`;
      }

      // Update trail dots by following preceding nodes
      let prevX = currentPos.current.x;
      let prevY = currentPos.current.y;
      const trailEase = 0.35;

      trailPositions.current.forEach((pos, index) => {
        pos.x += (prevX - pos.x) * trailEase;
        pos.y += (prevY - pos.y) * trailEase;

        const trailDot = trailRefs.current[index];
        if (trailDot) {
          trailDot.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
        }

        prevX = pos.x;
        prevY = pos.y;
      });

      animationFrameId = requestAnimationFrame(updateCursor);
    };

    animationFrameId = requestAnimationFrame(updateCursor);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Particle Trail */}
      {Array.from({ length: 6 }).map((_, index) => {
        const size = 3 + index * 1.0;
        const opacity = ((index + 1) / 6) * 0.35;
        return (
          <div
            key={index}
            ref={(el) => {
              trailRefs.current[index] = el;
            }}
            className="pointer-events-none fixed left-0 top-0 z-50 rounded-full bg-primary blur-[1px] select-none will-change-transform"
            style={{
              width: size,
              height: size,
              opacity: opacity,
              margin: `-${size / 2}px 0 0 -${size / 2}px`,
              transform: "translate3d(-100px, -100px, 0)",
            }}
          />
        );
      })}

      {/* Cyber Crosshair Cursor */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-50 select-none will-change-transform"
        style={{
          transform: "translate3d(-100px, -100px, 0)",
        }}
      >
        {/* Core Dot */}
        <div className="absolute -left-1 -top-1 h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary)/0.8)]" />
        
        {/* Outer Circular Ring (Expands on Hover) */}
        <div 
          className="absolute transform -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-primary transition-all duration-300 ease-out"
          style={{
            width: isHoveringInteractive ? "32px" : "18px",
            height: isHoveringInteractive ? "32px" : "18px",
            boxShadow: isHoveringInteractive ? "0 0 10px rgba(var(--primary-rgb), 0.5)" : "none",
            borderColor: isHoveringInteractive ? "rgba(var(--primary-rgb), 1)" : "rgba(var(--primary-rgb), 0.5)",
          }}
        />

        {/* Small Crosshairs */}
        <div className="absolute -left-[14px] top-0 w-2 h-[1px] bg-primary/45" />
        <div className="absolute left-[6px] top-0 w-2 h-[1px] bg-primary/45" />
        <div className="absolute left-0 -top-[14px] w-[1px] h-2 bg-primary/45" />
        <div className="absolute left-0 top-[6px] w-[1px] h-2 bg-primary/45" />
      </div>
    </>
  );
};
