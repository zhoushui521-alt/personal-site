const principles = [
  { label: "Workflow > 功能", desc: "AI 时代的核心能力不是写代码，是设计人机协作流程" },
  { label: "长期沉淀 > 短期产出", desc: "每个项目都是可成长的工程资产，不是一次性的 Demo" },
  { label: "系统思维", desc: "把运维/嵌入式的模块化思维迁移到 AI 开发——单一职责，接口清晰" },
  { label: "KISS", desc: "三行重复代码好过一个 premature abstraction" },
];

export default function Principles() {
  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
      {principles.map((p) => (
        <div
          key={p.label}
          className="p-4 rounded-xl bg-surface border border-border"
        >
          <span className="text-sm font-medium text-cyan">{p.label}</span>
          <p className="mt-1.5 text-sm text-text-secondary leading-relaxed">
            {p.desc}
          </p>
        </div>
      ))}
    </div>
  );
}
