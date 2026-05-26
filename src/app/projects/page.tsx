import type { Metadata } from "next";
import { projects } from "@/data/projects";
import DossierCard from "@/components/projects/dossier-card";

export const metadata: Metadata = {
  title: "工程档案",
  description:
    "每个项目都是一个可成长的工程资产，不是一次性 Demo。昇腾 Atlas 900、车载中控、Java 全栈、AI/ML 项目档案。",
};

export default function ProjectsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="text-2xl font-semibold tracking-tight">工程档案</h2>
      <p className="mt-3 text-sm text-text-secondary">
        每个项目都是一个可成长的工程资产，不是一次性 Demo。
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((p, i) => (
          <DossierCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </div>
  );
}
