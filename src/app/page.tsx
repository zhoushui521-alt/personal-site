"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Hero from "@/components/home/hero";
import MasonryGrid from "@/components/gallery/masonry-grid";
import Lightbox from "@/components/gallery/lightbox";

export default function Home() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <main>
        <Hero
          name="Daniel"
          role="Infrastructure × AI Engineer"
          bio="从 Linux 运维到昇腾 Atlas 900 集群，从车载中控到 AI Workflow。把系统工程的确定性带进 AI 开发的想象力。"
        />

        <section className="max-w-2xl mx-auto px-6 py-16">
          <div className="flex items-center justify-center gap-2 sm:gap-5 flex-wrap text-xs tracking-wide">
            <span className="inline-flex items-center gap-1.5 text-text-secondary/70">
              <span className="w-1.5 h-1.5 rounded-full bg-accent/50" />
              Infrastructure
            </span>
            <span className="text-border">/</span>
            <span className="inline-flex items-center gap-1.5 text-text-secondary/70">
              <span className="w-1.5 h-1.5 rounded-full bg-blue/50" />
              Backend
            </span>
            <span className="text-border">/</span>
            <span className="inline-flex items-center gap-1.5 text-text-secondary/70">
              <span className="w-1.5 h-1.5 rounded-full bg-gold/50" />
              Embedded
            </span>
            <span className="text-border">/</span>
            <span className="inline-flex items-center gap-1.5 text-text-secondary/70">
              <span className="w-1.5 h-1.5 rounded-full bg-mint/50" />
              AI
            </span>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-6 py-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
            <span className="text-xs font-mono text-text-secondary/40 tracking-[0.25em] uppercase">
              Archive
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>

          <h2 className="text-2xl font-semibold tracking-tight text-center">
            数字暗房
          </h2>
          <p className="mt-2 text-sm text-text-secondary text-center max-w-sm mx-auto leading-relaxed">
            像素是时间的沉淀。每一帧都是工程之外的感官存档。
          </p>

          <MasonryGrid onSelect={setSelected} />
        </section>

        <AnimatePresence>
          {selected && (
            <Lightbox src={selected} onClose={() => setSelected(null)} />
          )}
        </AnimatePresence>
    </main>
  );
}
