"use client";

import { useState } from "react";
import MasonryGrid from "@/components/gallery/masonry-grid";
import Lightbox from "@/components/gallery/lightbox";

export default function GalleryPage() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="text-2xl font-semibold tracking-tight">照片墙</h2>
      <p className="mt-3 text-sm text-text-secondary">
        数字空间的视觉碎片
      </p>
      <MasonryGrid onSelect={setSelected} />
      {selected && <Lightbox src={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
