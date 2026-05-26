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
    <div className="max-w-2xl mx-auto px-6 py-20">
      <h2 className="text-2xl font-semibold tracking-tight">关于我</h2>

      <div className="mt-6 space-y-4 text-sm leading-relaxed text-text-secondary">
        <p>
          计算机科学本科。从 Linux 系统管理起步，经历了华为昇腾 Atlas 900
          训练集群测试、车载中控系统开发、Java 全栈项目交付，正在将基础设施工程能力
          迁移到 AI Native 开发范式。
        </p>
        <p>
          当前方向：AI Workflow 系统设计、ComfyUI 工作流、本地模型部署与微调。
          目标不是"学会用 AI"，而是建立一套可复用的 AI 工程方法论。
        </p>
      </div>

      <h3 className="mt-12 text-lg font-medium tracking-tight">旅程</h3>
      <Timeline />

      <h3 className="mt-12 text-lg font-medium tracking-tight">工程原则</h3>
      <Principles />
    </div>
  );
}
