"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import Hero from "@/components/home/hero";
import MasonryGrid from "@/components/gallery/masonry-grid";
import Lightbox from "@/components/gallery/lightbox";
import ScrollReveal from "@/components/scroll-reveal";
import { StaggerContainer, StaggerItem } from "@/components/stagger-children";
import { projects, type Project } from "@/data/projects";

const domains = [
  {
    label: "基础设施",
    desc: "Linux 运维、Docker 容器化、Prometheus + Grafana 监控体系。300+ 节点集群健康管理经验。",
    tags: ["Linux", "Docker", "Prometheus", "Shell"],
    accent: "bg-accent",
  },
  {
    label: "后端开发",
    desc: "Java + Spring Boot 全栈交付。RBAC 权限模型、RESTful API 设计、MySQL 性能优化。",
    tags: ["Java", "Spring Boot", "MySQL", "Nginx"],
    accent: "bg-blue",
  },
  {
    label: "嵌入式系统",
    desc: "Qt/C++ 车载中控开发。多线程调度、CAN 总线采集、台架自动化测试。",
    tags: ["Qt/C++", "Linux", "CAN Bus", "Shell"],
    accent: "bg-gold",
  },
  {
    label: "AI Engineering",
    desc: "ComfyUI Workflow 设计、AI Agent 编排、本地模型部署、AI Automation 体系搭建。",
    tags: ["ComfyUI", "Agent", "Workflow", "ML"],
    accent: "bg-mint",
  },
];

const featuredProjects: Project[] = [
  projects.find((p) => p.id === "atlas-900")!,
  projects.find((p) => p.id === "automotive")!,
  projects.find((p) => p.id === "personal-site")!,
];

export default function Home() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <main>
      <Hero
        name="Daniel"
        role="Infrastructure × AI Engineer"
        bio="从 Linux 运维到昇腾 Atlas 900 集群，从车载中控到 AI Workflow。把系统工程的确定性带进 AI 开发的想象力。"
      />

      {/* 01 — Expertise */}
      <section className="max-w-5xl mx-auto px-6 py-32">
        <ScrollReveal>
          <span className="text-xs font-mono text-accent/40 tracking-[0.3em]">
            01
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary">
            技术领域
          </h2>
          <p className="mt-3 text-text-secondary leading-relaxed max-w-lg">
            从底层基础设施到上层 AI 应用，跨栈能力是最大的工程杠杆。
          </p>
        </ScrollReveal>

        <StaggerContainer className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {domains.map((d) => (
            <StaggerItem key={d.label}>
              <div className="group p-6 rounded-xl bg-surface border border-border/50 hover:border-border transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`w-2 h-2 rounded-full ${d.accent}`} />
                  <h3 className="text-base font-semibold text-text-primary">
                    {d.label}
                  </h3>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  {d.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {d.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] text-text-secondary/60 px-2 py-0.5 rounded-md bg-bg border border-border/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* 02 — Selected Work */}
      <section className="max-w-5xl mx-auto px-6 py-32 border-t border-border/30">
        <ScrollReveal>
          <span className="text-xs font-mono text-accent/40 tracking-[0.3em]">
            02
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary">
            精选项目
          </h2>
          <p className="mt-3 text-text-secondary leading-relaxed max-w-lg">
            每个项目都是可成长的工程资产，不是一次性的 Demo。
          </p>
        </ScrollReveal>

        <StaggerContainer className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          {featuredProjects.map((p) => (
            <StaggerItem key={p.id}>
              <Link
                href="/projects"
                className="group block p-6 rounded-xl bg-surface border border-border/50 hover:border-accent/15 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5"
              >
                <span className="text-[10px] font-mono text-text-secondary/50 tracking-[0.15em] uppercase">
                  {p.dossierId} · {p.category}
                </span>
                <h3 className="mt-2 text-base font-semibold text-text-primary group-hover:text-accent transition-colors">
                  {p.name}
                </h3>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed line-clamp-3">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1">
                  {p.stack.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="text-[10px] text-text-secondary/50 px-2 py-0.5 rounded border border-border/40"
                    >
                      {t}
                    </span>
                  ))}
                  {p.stack.length > 3 && (
                    <span className="text-[10px] text-text-secondary/30 px-1">
                      +{p.stack.length - 3}
                    </span>
                  )}
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal>
          <div className="mt-12 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:opacity-70 transition-opacity"
            >
              查看全部项目
              <span className="text-xs">→</span>
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* 03 — Gallery */}
      <section className="max-w-5xl mx-auto px-6 py-32 border-t border-border/30">
        <ScrollReveal>
          <span className="text-xs font-mono text-accent/40 tracking-[0.3em]">
            03
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary">
            数字暗房
          </h2>
          <p className="mt-3 text-text-secondary leading-relaxed max-w-lg">
            像素是时间的沉淀。每一帧都是工程之外的感官存档。
          </p>
        </ScrollReveal>

        <MasonryGrid onSelect={setSelected} />

        <ScrollReveal>
          <div className="mt-12 text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:opacity-70 transition-opacity"
            >
              查看全部照片
              <span className="text-xs">→</span>
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* Closing */}
      <section className="max-w-2xl mx-auto px-6 py-40 text-center border-t border-border/30">
        <ScrollReveal>
          <p className="text-2xl sm:text-3xl font-semibold tracking-tight text-text-primary leading-relaxed">
            把系统工程的确定性
            <br />
            带进 AI 开发的想象力
          </p>
          <p className="mt-6 text-text-secondary leading-relaxed max-w-md mx-auto">
            从运维到全栈，从嵌入式到 AI——每一个项目都是可成长的工程资产，每一次探索都在建立更完整的知识体系。
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-text-primary text-bg text-sm font-medium rounded-full transition-all duration-300 hover:bg-text-primary/85 hover:shadow-lg hover:shadow-text-primary/10 hover:-translate-y-0.5"
          >
            了解更多关于我
          </Link>
        </ScrollReveal>
      </section>

      <AnimatePresence>
        {selected && (
          <Lightbox src={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </main>
  );
}
