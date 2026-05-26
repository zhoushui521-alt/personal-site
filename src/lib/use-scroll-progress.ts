"use client";

import { useState, useEffect } from "react";

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function update() {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const newProgress = h > 0 ? window.scrollY / h : 0;
      setProgress((prev) =>
        Math.abs(prev - newProgress) < 0.001 ? prev : newProgress
      );
    }

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return progress;
}
