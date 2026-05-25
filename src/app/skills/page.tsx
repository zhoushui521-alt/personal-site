import SkillsGraph from "@/components/skills/skills-graph";

export default function SkillsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="text-2xl font-semibold tracking-tight">技能图谱</h2>
      <p className="mt-3 text-sm text-text-secondary">
        每一条曲线连接着相互关联的技能，光点代表了正在学习的能量流。
      </p>
      <SkillsGraph />
    </div>
  );
}
