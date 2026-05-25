"use client";

import { useRef } from "react";
import type { Project } from "@/data/projects";

export default function DossierCard({ project }: { project: Project }) {
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
    cardRef.current.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg)";
  }

  const statusDot = project.status === "active" ? "bg-mint" : "bg-text-secondary";

  return (
    <a
      ref={cardRef}
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="flex flex-col p-6 bg-surface border border-border rounded-xl transition-[border-color] duration-200 hover:border-cyan/30"
    >
      <div className="flex items-center gap-2 mb-4">
        <span className={`w-2 h-2 rounded-full ${statusDot}`} />
        <span className="text-xs text-text-secondary font-mono uppercase tracking-wider">
          {project.status === "active" ? "ACTIVE" : "COMPLETED"}
        </span>
      </div>

      <h3 className="font-semibold text-text-primary">{project.name}</h3>

      <p className="mt-3 text-sm leading-relaxed text-text-secondary flex-1">
        {project.description}
      </p>

      <div className="mt-4 font-mono text-xs text-text-secondary/70">
        <span className="text-cyan/60">STACK</span>{"  "}
        {project.stack.join(" · ")}
      </div>
    </a>
  );
}
