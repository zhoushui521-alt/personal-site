export type Project = {
  id: string;
  dossierId: string;
  name: string;
  stack: string[];
  status: "active" | "completed";
  year: string;
  category: string;
  description: string;
  link?: string;
};

export const projects: Project[] = [
  {
    id: "atlas-900",
    dossierId: "PRJ-001",
    name: "昇腾 Atlas 900 集群运维",
    stack: ["Linux", "Prometheus", "Grafana", "Shell", "Docker"],
    status: "completed",
    year: "2023",
    category: "基础设施",
    description:
      "华为昇腾 Atlas 900 训练集群健康监控体系。300+ 节点指标采集，Prometheus + Grafana 可视化 Dashboard，Shell 自动化运维脚本，集群故障预警。",
  },
  {
    id: "automotive",
    dossierId: "PRJ-002",
    name: "车载中控测试系统",
    stack: ["Qt/C++", "Shell", "Linux", "嵌入式"],
    status: "completed",
    year: "2023",
    category: "嵌入式",
    description:
      "车载中控自动化测试框架。Qt/C++ 编写测试用例，Shell 脚本构建自动化工具链，台架环境搭建与 CAN 总线数据采集。",
  },
  {
    id: "asset-management",
    dossierId: "PRJ-003",
    name: "实验室资产管理系统",
    stack: ["Java", "Spring Boot", "MySQL", "Docker", "Nginx"],
    status: "completed",
    year: "2024",
    category: "全栈",
    description:
      "全栈 Web 应用。RBAC 权限模型设计，RESTful API，MySQL 数据持久化，Docker 容器化 + Nginx 反向代理部署。从数据库设计到生产交付全流程。",
  },
  {
    id: "predictive-maintenance",
    dossierId: "PRJ-004",
    name: "数据中心预测性维护",
    stack: ["Python", "Scikit-learn", "Pandas", "ML"],
    status: "completed",
    year: "2024",
    category: "AI/ML",
    description:
      "基于监控数据的设备故障预测。随机森林模型做异常检测，Pandas 数据管道处理时序指标，工业场景 ML 应用实践。",
  },
  {
    id: "personal-site",
    dossierId: "PRJ-005",
    name: "AI Native Portfolio",
    stack: ["Next.js 16", "TypeScript", "Tailwind CSS 4", "Framer Motion"],
    status: "active",
    year: "2025",
    category: "前端工程",
    description:
      "个人技术作品集。多页路由 + CSS 环境光 + 3D 卡片交互 + Canvas 技能图谱。设计目标：用工程感代替模板化。",
    link: "https://personal-site-dun-psi.vercel.app",
  },
];
