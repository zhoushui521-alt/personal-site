"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

const categoryAccent: Record<string, string> = {
  "基础设施": "bg-accent",
  "嵌入式": "bg-gold",
  "全栈": "bg-blue",
  "AI/ML": "bg-mint",
  "前端工程": "bg-blue",
};

export default function DossierCard({ project }: { project: Project }) {
  const statusDot =
    project.status === "active" ? "bg-mint" : "bg-text-secondary/40";

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="flex flex-col bg-surface border border-border/50 rounded-xl overflow-hidden transition-shadow duration-300 hover:shadow-lg hover:shadow-accent/5 hover:border-accent/15 h-full"
    >
      <div className={`h-0.5 w-full ${project.status === "active" ? "bg-mint/50" : "bg-accent/30"}`} />

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] text-text-secondary/40 font-mono tracking-[0.15em]">
            {project.dossierId}
          </span>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-text-secondary/40 font-mono">
              {project.year}
            </span>
            <span className={`w-1.5 h-1.5 rounded-full ${statusDot}`} />
          </div>
        </div>

        <h3 className="font-semibold text-text-primary text-base">
          {project.name}
        </h3>

        <span
          className={`inline-block mt-2.5 px-2 py-0.5 text-[10px] font-medium rounded-full bg-accent/8 text-accent/80`}
        >
          {project.category}
        </span>

        <p className="mt-3 text-sm leading-relaxed text-text-secondary flex-1">
          {project.description}
        </p>

        <div className="mt-4 pt-4 border-t border-border/40 flex flex-wrap gap-1.5">
          {project.stack.map((t) => (
            <span
              key={t}
              className="text-[10px] text-text-secondary/50 px-2 py-0.5 rounded border border-border/30 bg-bg/50"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
