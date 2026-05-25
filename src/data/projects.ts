export type Project = {
  id: string;
  name: string;
  stack: string[];
  status: "active" | "completed";
  description: string;
  link?: string;
};

export const projects: Project[] = [
  {
    id: "personal-site",
    name: "AI Native Portfolio",
    stack: ["Next.js 16", "TypeScript", "Tailwind CSS 4", "Three.js", "R3F"],
    status: "active",
    description:
      "AI Native 数字空间。3D 粒子背景 + 2D Canvas 技能图谱 + 暗色赛博朋克设计。多页路由、Framer Motion 过渡、Simplex Noise 驱动的有机粒子运动。",
    link: "https://personal-site-dun-psi.vercel.app",
  },
  {
    id: "ai-learning",
    name: "AI 学习知识库",
    stack: ["Obsidian", "Markdown", "AI"],
    status: "active",
    description:
      "基于 Obsidian Second Brain 的 AI Coding 学习系统。包含 Prompt Library、Bug Library、Daily Notes，结构化可检索可复用。",
  },
  {
    id: "ui-components",
    name: "组件库练习",
    stack: ["React", "TypeScript", "UI"],
    status: "completed",
    description:
      "从零手写常用 UI 组件的学习项目，理解组件化思维和 Props 设计。",
  },
];
