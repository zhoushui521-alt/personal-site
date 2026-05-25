const milestones = [
  { year: "2022", label: "CS 本科入学", desc: "计算机科学基础，Java + MySQL 项目" },
  { year: "2023", label: "系统工程实践", desc: "华为昇腾 Atlas 900 测试、车载中控开发" },
  { year: "2024", label: "AI Coding 觉醒", desc: "发现 vibe coding，开始 AI 辅助编程" },
  { year: "2025", label: "AI Native 转型", desc: "建立 AI Workflow、Knowledge OS、自动化体系" },
];

export default function Timeline() {
  return (
    <div className="mt-6 space-y-0">
      {milestones.map((m, i) => (
        <div key={m.year} className="relative pl-8 pb-8 last:pb-0">
          {/* 竖线 */}
          <div className="absolute left-[7px] top-2 w-px h-full bg-border" />
          {/* 圆点 */}
          <div className="absolute left-0 top-2 w-3.5 h-3.5 rounded-full border-2 border-cyan bg-bg" />
          <span className="text-xs text-cyan font-mono">{m.year}</span>
          <h4 className="mt-0.5 text-sm font-medium text-text-primary">{m.label}</h4>
          <p className="mt-1 text-sm text-text-secondary">{m.desc}</p>
        </div>
      ))}
    </div>
  );
}
