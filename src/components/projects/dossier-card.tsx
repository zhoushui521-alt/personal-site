"use client";

import { useRef } from "react";
import type { Project } from "@/data/projects";

export default function DossierCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const cardRef = useRef<HTMLAnchorElement>(null);

  function handleMouseMove(e: React.MouseEvent) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    cardRef.current.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
  }

  function handleMouseLeave() {
    if (!cardRef.current) return;
    cardRef.current.style.transform =
      "perspective(800px) rotateY(0deg) rotateX(0deg)";
  }

  const dossierId = `PRJ-${String(index + 1).padStart(3, "0")}`;
  const statusDot =
    project.status === "active" ? "bg-mint" : "bg-text-secondary";
  const accentBar =
    project.status === "active" ? "bg-mint/60" : "bg-accent/40";

  return (
    <a
      ref={cardRef}
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="flex flex-col bg-surface border border-border rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-accent/20"
    >
      <div className={`h-0.5 w-full ${accentBar}`} />

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs text-text-secondary/50 font-mono tracking-wider">
            {dossierId}
          </span>
          <div className="flex items-center gap-2">
            <span className="text-xs text-text-secondary/50 font-mono">
              {project.year}
            </span>
            <span className={`w-1.5 h-1.5 rounded-full ${statusDot}`} />
          </div>
        </div>

        <h3 className="font-semibold text-text-primary">{project.name}</h3>

        <span className="inline-block mt-2 px-2 py-0.5 text-[10px] font-mono text-accent/70 bg-accent/5 rounded">
          {project.category}
        </span>

        <p className="mt-3 text-sm leading-relaxed text-text-secondary flex-1">
          {project.description}
        </p>

        <div className="mt-4 pt-4 border-t border-border/50 font-mono text-xs text-text-secondary/70">
          <span className="text-accent/60">STACK</span>{"  "}
          {project.stack.join(" · ")}
        </div>
      </div>
    </a>
  );
}
