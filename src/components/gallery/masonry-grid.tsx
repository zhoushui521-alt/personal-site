"use client";

import { useRef } from "react";

const photos = [
  "10.png", "101.png", "102.png", "103.png",
  "104.png", "105.png", "106.png", "an3.png",
  "anyu.png", "anyu2.png", "bi.png", "bi1.png",
  "bi2.png", "bi3.png", "bi4.png", "hu.png",
].map((src) => ({ id: src, src: `/gallery/${src}` }));

type Props = { onSelect: (src: string) => void };

function PhotoCard({
  photo,
  onSelect,
}: {
  photo: { id: string; src: string };
  onSelect: (src: string) => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);

  function handleMouseMove(e: React.MouseEvent) {
    const card = ref.current!;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transition = "none";
    card.style.transform = `perspective(800px) rotateY(${x * 3}deg) rotateX(${-y * 3}deg) scale(1.015)`;
    card.style.boxShadow = "0 4px 20px rgba(0,0,0,0.06)";
    card.style.zIndex = "1";
  }

  function handleMouseLeave() {
    const card = ref.current!;
    card.style.transition =
      "transform 0.5s ease-out, box-shadow 0.5s ease-out";
    card.style.transform =
      "perspective(800px) rotateY(0deg) rotateX(0deg) scale(1)";
    card.style.boxShadow = "none";
    card.style.zIndex = "0";
  }

  return (
    <button
      ref={ref}
      onClick={() => onSelect(photo.src)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-full rounded-lg overflow-hidden cursor-pointer block relative ring-1 ring-border/50 group"
    >
      <img
        src={photo.src}
        alt=""
        className="w-full h-auto block"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/[0.03] transition-colors duration-300" />
    </button>
  );
}

export default function MasonryGrid({ onSelect }: Props) {
  return (
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-start">
      {photos.map((p) => (
        <PhotoCard key={p.id} photo={p} onSelect={onSelect} />
      ))}
    </div>
  );
}
