"use client";

import { useState } from "react";
import SmoothScroll from "@/components/lenis";
import Hero from "@/components/home/hero";
import MasonryGrid from "@/components/gallery/masonry-grid";
import Lightbox from "@/components/gallery/lightbox";

export default function Home() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <SmoothScroll>
      <main>
        <Hero
          name="Daniel"
          role="AI Native 开发者"
          bio="计算机科学本科生，正在探索 AI Coding 与 AI Workflow 的新可能。相信 AI 放大创造力。"
        />

        <section className="max-w-4xl mx-auto px-6 py-24">
          <div className="flex items-center gap-4 mb-16">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
            <span className="text-xs font-mono text-text-secondary/50 tracking-[0.2em] uppercase">
              Gallery
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>

          <h2 className="text-2xl font-semibold tracking-tight text-center">
            数字记忆
          </h2>
          <p className="mt-3 text-sm text-text-secondary text-center">
            视觉碎片 · 数字空间的瞬间
          </p>

          <MasonryGrid onSelect={setSelected} />
        </section>

        {selected && (
          <Lightbox src={selected} onClose={() => setSelected(null)} />
        )}
      </main>
    </SmoothScroll>
  );
}
