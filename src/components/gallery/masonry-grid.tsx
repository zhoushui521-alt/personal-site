"use client";

import { motion } from "framer-motion";
import { useTiltEffect } from "@/lib/use-tilt-effect";
import { StaggerContainer, StaggerItem } from "@/components/stagger-children";

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
  const { ref, onMouseMove, onMouseLeave } =
    useTiltEffect<HTMLDivElement>({
      intensity: 4,
      extraEnter: " scale-[1.02]",
      extraLeave: " scale-100",
    });

  return (
    <motion.div
      ref={ref}
      onClick={() => onSelect(photo.src)}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="w-full rounded-xl overflow-hidden cursor-pointer ring-1 ring-border/30 hover:ring-accent/20 transition-shadow duration-500 hover:shadow-xl hover:shadow-accent/5"
    >
      <img
        src={photo.src}
        alt=""
        className="w-full h-auto block"
        loading="lazy"
      />
    </motion.div>
  );
}

export default function MasonryGrid({ onSelect }: Props) {
  return (
    <StaggerContainer className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
      {photos.map((p) => (
        <StaggerItem key={p.id}>
          <PhotoCard photo={p} onSelect={onSelect} />
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}
