import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/projects";
import DossierCard from "@/components/projects/dossier-card";
import ScrollReveal from "@/components/scroll-reveal";
import { StaggerContainer, StaggerItem } from "@/components/stagger-children";

export const metadata: Metadata = {
  title: "工程档案",
  description:
    "每个项目都是一个可成长的工程资产，不是一次性 Demo。昇腾 Atlas 900、车载中控、Java 全栈、AI/ML 项目档案。",
};

const featured = projects.find((p) => p.id === "atlas-900")!;
const grid = projects.filter((p) => p.id !== "atlas-900");

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20 sm:py-28">
      <ScrollReveal>
        <span className="text-xs font-mono text-accent/40 tracking-[0.3em]">
          工程档案
        </span>
        <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary">
          每个项目都是
          <br />
          可成长的工程资产
        </h2>
        <p className="mt-3 text-text-secondary leading-relaxed max-w-lg">
          不是一次性 Demo。从底层基础设施到上层 AI 应用，每一行代码都在构建更完整的工程体系。
        </p>
      </ScrollReveal>

      {/* Featured — Atlas 900 */}
      <ScrollReveal>
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-surface border border-border/40 hover:border-accent/10 transition-all duration-500 hover:shadow-xl hover:shadow-accent/5 group">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] font-mono text-text-secondary/40 tracking-[0.15em]">
                  {featured.dossierId}
                </span>
                <span className="w-1 h-1 rounded-full bg-accent/30" />
                <span className="text-[10px] font-mono text-text-secondary/40">
                  {featured.year}
                </span>
                <span className="w-1 h-1 rounded-full bg-accent/30" />
                <span className="text-[10px] font-medium text-accent/70 bg-accent/6 px-2 py-0.5 rounded-full">
                  {featured.category}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-text-primary group-hover:text-accent transition-colors duration-300">
                {featured.name}
              </h3>

              <p className="mt-4 text-base text-text-secondary leading-relaxed max-w-2xl">
                {featured.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {featured.stack.map((t) => (
                  <span
                    key={t}
                    className="text-xs text-text-secondary/60 px-3 py-1 rounded-full border border-border/40 bg-bg/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="hidden lg:block shrink-0">
              <div className="w-24 h-24 rounded-2xl bg-accent/5 border border-accent/10 flex items-center justify-center">
                <span className="text-3xl font-black text-accent/20 tracking-tighter">
                  01
                </span>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Grid — remaining 4 */}
      <StaggerContainer className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {grid.map((p) => (
          <StaggerItem key={p.id}>
            {p.link ? (
              <Link href={p.link} target="_blank" rel="noopener noreferrer">
                <DossierCard project={p} />
              </Link>
            ) : (
              <DossierCard project={p} />
            )}
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
}
