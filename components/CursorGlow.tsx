"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-50 w-64 h-64 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-20 transition-opacity duration-300 hidden md:block"
      style={{
        left: pos.x,
        top: pos.y,
        background:
          "radial-gradient(circle, rgba(220,20,60,0.4) 0%, transparent 70%)",
      }}
    />
  );
}