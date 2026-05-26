"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import MasonryGrid from "@/components/gallery/masonry-grid";
import Lightbox from "@/components/gallery/lightbox";
import ScrollReveal from "@/components/scroll-reveal";

export default function GalleryPage() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="max-w-5xl mx-auto px-6 py-20 sm:py-28">
      <ScrollReveal>
        <span className="text-xs font-mono text-accent/40 tracking-[0.3em]">
          数字暗房
        </span>
        <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary">
          像素是时间的沉淀
        </h2>
        <p className="mt-3 text-text-secondary leading-relaxed max-w-lg">
          每一帧都是工程之外的感官存档。16 张照片，16 个瞬间。
        </p>
      </ScrollReveal>

      <MasonryGrid onSelect={setSelected} />

      <AnimatePresence>
        {selected && (
          <Lightbox src={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}
