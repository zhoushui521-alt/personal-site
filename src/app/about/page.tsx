import Timeline from "@/components/about/timeline";
import Principles from "@/components/about/principles";

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-20">
      <h2 className="text-2xl font-semibold tracking-tight">关于我</h2>

      <div className="mt-6 space-y-4 text-sm leading-relaxed text-text-secondary">
        <p>
          一名 AI Coding 学习者，正在探索"与 AI 一起写代码"的新工作方式。
          相信 AI 不是替代开发者，而是放大每个人的创造力。
        </p>
        <p>
          目前专注于前端开发和 AI 辅助编程，目标是用 AI
          构建出简洁、优雅、可维护的产品。
        </p>
      </div>

      <h3 className="mt-12 text-lg font-medium tracking-tight">旅程</h3>
      <Timeline />

      <h3 className="mt-12 text-lg font-medium tracking-tight">工程原则</h3>
      <Principles />
    </div>
  );
}
