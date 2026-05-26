const milestones = [
  { year: "2022", label: "CS 本科入学", desc: "计算机科学基础，Java + MySQL + Spring Boot 全栈入门" },
  { year: "2023", label: "基础设施实践", desc: "华为昇腾 Atlas 900 训练集群测试，300+ 节点 Prometheus + Grafana 监控" },
  { year: "2023", label: "嵌入式系统", desc: "车载中控系统测试，Qt/C++ 自动化框架，Shell 脚本工具链" },
  { year: "2024", label: "全栈交付", desc: "实验室资产管理系统，RBAC 权限模型，Docker + Nginx 容器化部署" },
  { year: "2025", label: "AI Native 转型", desc: "建立 AI Workflow 体系，ComfyUI + Agent + 本地模型部署与微调" },
];

export default function Timeline() {
  return (
    <div className="mt-6 space-y-0">
      {milestones.map((m, i) => (
        <div key={m.year} className="relative pl-8 pb-8 last:pb-0">
          <div className="absolute left-[7px] top-2 w-px h-full bg-border" />
          <div className="absolute left-0 top-2 w-3.5 h-3.5 rounded-full border-2 border-accent/40 bg-bg animate-dot-pulse" />
          <span className="text-xs text-accent font-mono">{m.year}</span>
          <h4 className="mt-0.5 text-sm font-medium text-text-primary">{m.label}</h4>
          <p className="mt-1 text-sm text-text-secondary">{m.desc}</p>
        </div>
      ))}
    </div>
  );
}
