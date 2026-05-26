"use client";

import { useRef, useEffect } from "react";
import { useMotionValue, useSpring } from "framer-motion";

export function useMousePosition() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springMx = useSpring(mx, { stiffness: 80, damping: 35 });
  const springMy = useSpring(my, { stiffness: 80, damping: 35 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf: number;
    function onMouseMove(e: MouseEvent) {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        mx.set((e.clientX - rect.left) / rect.width - 0.5);
        my.set((e.clientY - rect.top) / rect.height - 0.5);
      });
    }

    el.addEventListener("mousemove", onMouseMove, { passive: true });
    return () => {
      el.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(raf);
    };
  }, [mx, my]);

  return { ref, mx: springMx, my: springMy, rawMx: mx, rawMy: my };
}
