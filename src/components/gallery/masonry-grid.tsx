"use client";

import { useState, useEffect, useRef } from "react";

const photos = [
  "10.png", "101.png", "102.png", "103.png",
  "104.png", "105.png", "106.png", "an3.png",
  "anyu.png", "anyu2.png", "bi.png", "bi1.png",
  "bi2.png", "bi3.png", "bi4.png", "hu.png",
].map((src) => ({ id: src, src: `/gallery/${src}` }));

type Props = { onSelect: (src: string) => void };

function PhotoCard({
  photo,
  visible,
  onSelect,
}: {
  photo: { id: string; src: string };
  visible: boolean;
  onSelect: (src: string) => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);

  function handleMouseMove(e: React.MouseEvent) {
    const card = ref.current!;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transition = "none";
    card.style.transform = `perspective(600px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) scale(1.02)`;
    card.style.boxShadow =
      "0 16px 32px rgba(0,0,0,0.4), 0 0 24px rgba(232,184,109,0.06)";
    card.style.zIndex = "1";
  }

  function handleMouseLeave() {
    const card = ref.current!;
    card.style.transition =
      "transform 0.5s ease-out, box-shadow 0.5s ease-out";
    card.style.transform =
      "perspective(600px) rotateY(0deg) rotateX(0deg) scale(1)";
    card.style.boxShadow = "none";
    card.style.zIndex = "0";
  }

  return (
    <button
      ref={ref}
      data-photo-id={photo.id}
      onClick={() => onSelect(photo.src)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-full rounded-lg overflow-hidden cursor-pointer block relative ring-1 ring-border/30"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
      }}
    >
      <img
        src={photo.src}
        alt=""
        className="w-full h-auto block"
        loading="lazy"
      />
    </button>
  );
}

export default function MasonryGrid({ onSelect }: Props) {
  const [visible, setVisible] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setVisible((prev) => {
          const next = new Set(prev);
          entries.forEach((e) => {
            if (e.isIntersecting) next.add((e.target as HTMLElement).dataset.id!);
          });
          return next;
        });
      },
      { threshold: 0.1 }
    );

    const els = document.querySelectorAll("[data-photo-id]");
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-start">
      {photos.map((p) => (
        <PhotoCard
          key={p.id}
          photo={p}
          visible={visible.has(p.id)}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}
