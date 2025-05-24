"use client";

import { useEffect, useRef, useState } from "react";

export function CursorTracker() {
  const [targetPos, setTargetPos] = useState({ x: 0, y: 0 });
  const [currentPos, setCurrentPos] = useState({ x: 0, y: 0 });
  const [cursorLabel, setCursorLabel] = useState("");
  const rafRef = useRef(0);

  // التقاط موقع الماوس
  useEffect(() => {
    const move = (e: MouseEvent) => {
      setTargetPos({ x: e.clientX, y: e.clientY });

      const el = document.elementFromPoint(e.clientX, e.clientY);
      if (el instanceof HTMLElement) {
        const label = el.dataset.cursor;
        setCursorLabel(label || "");
      }
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // lerp للحركة الناعمة
  useEffect(() => {
    const lerp = (start: number, end: number, t: number) =>
      start + (end - start) * t;

    const animate = () => {
      setCurrentPos((prev) => ({
        x: lerp(prev.x, targetPos.x, 0.15),
        y: lerp(prev.y, targetPos.y, 0.15),
      }));
      rafRef.current = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(rafRef.current);
  }, [targetPos]);

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[999] hidden md:block"
      style={{
        transform: `translate(${currentPos.x - 24}px, ${currentPos.y - 24}px)`,
      }}
    >
      {cursorLabel ? (
        <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center text-sm font-medium shadow-lg transition-all duration-150">
          {cursorLabel}
        </div>
      ) : (
        <div className="w-6 h-6 rounded-full bg-accent/20 backdrop-blur-md border border-accent/50 shadow-[0_0_20px_5px_rgba(0,201,255,0.25)] transition-all duration-150" />
      )}
    </div>
  );
}
