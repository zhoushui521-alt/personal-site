import type { Metadata } from "next";
import Timeline from "@/components/about/timeline";
import Principles from "@/components/about/principles";

export const metadata: Metadata = {
  title: "关于",
  description:
    "计算机科学本科。从 Linux 系统管理到 AI Native 开发——基础设施 → 嵌入式 → 全栈 → AI Workflow 的技术路线。",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20 sm:py-28">
      <span className="text-xs font-mono text-accent/40 tracking-[0.3em]">
        关于我
      </span>
      <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary">
        从基础设施
        <br />
        到 AI Native
      </h2>

      <div className="mt-10 border-l-2 border-accent/15 pl-6 space-y-4 text-base leading-relaxed text-text-secondary">
        <p>
          计算机科学本科。从 Linux 系统管理起步，经历了华为昇腾 Atlas 900
          训练集群测试、车载中控系统开发、Java 全栈项目交付，正在将基础设施工程能力
          迁移到 AI Native 开发范式。
        </p>
        <p>
          当前方向：AI Workflow 系统设计、ComfyUI 工作流、本地模型部署与微调。
          目标不是&ldquo;学会用 AI&rdquo;，而是建立一套可复用的 AI 工程方法论。
        </p>
      </div>

      <div className="mt-16 flex items-center gap-3">
        <span className="w-1.5 h-1.5 rounded-full bg-accent/40" />
        <h3 className="text-lg font-semibold tracking-tight text-text-primary">
          旅程
        </h3>
      </div>
      <Timeline />

      <div className="mt-16 flex items-center gap-3">
        <span className="w-1.5 h-1.5 rounded-full bg-accent/40" />
        <h3 className="text-lg font-semibold tracking-tight text-text-primary">
          工程原则
        </h3>
      </div>
      <Principles />
    </div>
  );
}
