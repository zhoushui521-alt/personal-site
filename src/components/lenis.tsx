"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { lenisStore } from "@/lib/lenis-instance";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      wheelMultiplier: 1,
      smoothWheel: true,
    });

    lenisStore.set(lenis);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenisStore.set(null as never);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
