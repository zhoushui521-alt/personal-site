import type { Metadata } from "next";
import SkillsGraph from "@/components/skills/skills-graph";
import ScrollReveal from "@/components/scroll-reveal";

export const metadata: Metadata = {
  title: "技能图谱",
  description:
    "AI Native 技术栈：React, Next.js, TypeScript, Docker, Linux, Java/Spring Boot。每一条曲线连接着相互关联的技能。",
};

export default function SkillsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <ScrollReveal>
        <h2 className="text-2xl font-semibold tracking-tight">技能图谱</h2>
        <p className="mt-3 text-sm text-text-secondary">
          每一条曲线连接着相互关联的技能，光点代表了正在学习的能量流。
        </p>
      </ScrollReveal>
      <SkillsGraph />
    </div>
  );
}
