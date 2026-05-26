"use client";

import { useState, useEffect } from "react";
import { lenisStore } from "@/lib/lenis-instance";

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf: number;
    function tick() {
      const lenis = lenisStore.get();
      if (lenis) {
        const h = document.documentElement.scrollHeight - window.innerHeight;
        const newProgress = h > 0 ? lenis.scroll / h : 0;
        setProgress((prev) =>
          Math.abs(prev - newProgress) < 0.001 ? prev : newProgress
        );
      }
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return progress;
}
