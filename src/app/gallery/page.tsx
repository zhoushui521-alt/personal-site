"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import MasonryGrid from "@/components/gallery/masonry-grid";
import Lightbox from "@/components/gallery/lightbox";

export default function GalleryPage() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="text-2xl font-semibold tracking-tight">数字暗房</h2>
      <p className="mt-3 text-sm text-text-secondary">
        像素是时间的沉淀。每一帧都是工程之外的感官存档。
      </p>
      <MasonryGrid onSelect={setSelected} />
      <AnimatePresence>
        {selected && <Lightbox src={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </div>
  );
}
