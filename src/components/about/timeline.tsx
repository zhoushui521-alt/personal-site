"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "@/components/scroll-reveal";

const milestones = [
  {
    id: "enroll",
    year: "2022",
    label: "CS 本科入学",
    desc: "湖北理工学院，计算机科学与技术。主修 Linux、C、Java、Web 前端、操作系统原理、数据库。",
  },
  {
    id: "homework",
    year: "2024",
    label: "网上作业系统",
    desc: "Java + MySQL 全栈开发。RBAC 权限模型，前后端分离架构，SQL 优化。",
  },
  {
    id: "automotive",
    year: "2025",
    label: "车载中控系统",
    desc: "Linux 嵌入式开发。Qt/C++ 音视频模块，多线程调度，文件管理。",
  },
  {
    id: "atlas",
    year: "2025",
    label: "昇腾 Atlas 900 实习",
    desc: "华颖机电运维工程师。GPU/NPU 稳定性测试，硬件驱动兼容验证，模块联调与故障排查。",
  },
  {
    id: "ai-native",
    year: "2026",
    label: "AI Native 转型",
    desc: "AI Workflow 体系设计，ComfyUI + Agent，本地模型部署与 AI Automation。",
  },
];

export default function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 15%", "end 85%"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="relative mt-6">
      <motion.div
        style={{ scaleY, height: "calc(100% - 1rem)" }}
        className="absolute left-[7px] top-2 w-px bg-accent/30 origin-top"
      />

      <div className="space-y-0">
        {milestones.map((m, i) => (
          <ScrollReveal key={m.id} delay={i * 0.1} direction="left">
            <div className="relative pl-8 pb-8 last:pb-0">
              <div className="absolute left-0 top-2 w-3.5 h-3.5 rounded-full border-2 border-accent/40 bg-bg animate-dot-pulse" />
              <span className="text-xs text-accent font-mono">{m.year}</span>
              <h4 className="mt-0.5 text-sm font-medium text-text-primary">{m.label}</h4>
              <p className="mt-1 text-sm text-text-secondary">{m.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
