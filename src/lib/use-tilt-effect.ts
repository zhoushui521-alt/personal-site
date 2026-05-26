import { useRef } from "react";

export function useTiltEffect<T extends HTMLElement>({
  intensity = 8,
  perspective = 800,
  extraEnter = "",
  extraLeave = "",
  hoverLift = 0,
}: {
  intensity?: number;
  perspective?: number;
  extraEnter?: string;
  extraLeave?: string;
  hoverLift?: number;
} = {}) {
  const ref = useRef<T>(null);
  const lift = hoverLift ? ` translateY(-${hoverLift}px)` : "";

  function onMouseMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(${perspective}px) rotateY(${x * intensity}deg) rotateX(${-y * intensity}deg)${lift}${extraEnter}`;
  }

  function onMouseLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = `perspective(${perspective}px) rotateY(0deg) rotateX(0deg)${extraLeave}`;
  }

  return { ref, onMouseMove, onMouseLeave };
}
