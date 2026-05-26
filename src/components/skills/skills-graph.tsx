"use client";

import { useEffect, useRef } from "react";

type Node = { id: string; label: string; x: number; y: number; r: number };
type Edge = { from: string; to: string };

const nodes: Node[] = [
  { id: "ai", label: "AI Native", x: 400, y: 300, r: 22 },
  { id: "react", label: "React", x: 200, y: 160, r: 16 },
  { id: "next", label: "Next.js", x: 560, y: 140, r: 16 },
  { id: "ts", label: "TypeScript", x: 600, y: 340, r: 16 },
  { id: "docker", label: "Docker", x: 540, y: 500, r: 16 },
  { id: "tailwind", label: "Tailwind", x: 180, y: 420, r: 16 },
  { id: "linux", label: "Linux/Ops", x: 100, y: 300, r: 16 },
  { id: "java", label: "Java/Spring", x: 300, y: 520, r: 16 },
];

const edges: Edge[] = [
  { from: "ai", to: "react" },
  { from: "ai", to: "next" },
  { from: "ai", to: "ts" },
  { from: "ai", to: "docker" },
  { from: "ai", to: "tailwind" },
  { from: "ai", to: "linux" },
  { from: "ai", to: "java" },
  { from: "react", to: "next" },
  { from: "react", to: "ts" },
  { from: "next", to: "ts" },
  { from: "docker", to: "linux" },
  { from: "java", to: "docker" },
];

const PARTICLES = 30;

export default function SkillsGraph() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    const dpr = window.devicePixelRatio || 1;
    const w = 700;
    const h = 640;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    ctx.scale(dpr, dpr);

    // 每颗粒子绑定一条边，t 沿 bezier 移动
    const particles = Array.from({ length: PARTICLES }, (_, i) => ({
      edgeIdx: i % edges.length,
      t: Math.random(),
      speed: 0.002 + Math.random() * 0.004,
      size: 1 + Math.random() * 1.5,
    }));

    const nodeMap = new Map(nodes.map((n) => [n.id, n]));

    function quadraticBezier(
      p0: { x: number; y: number },
      p1: { x: number; y: number },
      t: number
    ) {
      const midX = (p0.x + p1.x) / 2;
      const midY = (p0.y + p1.y) / 2 - 40;
      const x = (1 - t) ** 2 * p0.x + 2 * (1 - t) * t * midX + t ** 2 * p1.x;
      const y = (1 - t) ** 2 * p0.y + 2 * (1 - t) * t * midY + t ** 2 * p1.y;
      return { x, y };
    }

    function draw(t: number) {
      ctx.clearRect(0, 0, w, h);

      // 边
      ctx.strokeStyle = "rgba(180, 180, 190, 0.5)";
      ctx.lineWidth = 1;
      for (const e of edges) {
        const a = nodeMap.get(e.from)!;
        const b = nodeMap.get(e.to)!;
        const midX = (a.x + b.x) / 2;
        const midY = (a.y + b.y) / 2 - 40;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.quadraticCurveTo(midX, midY, b.x, b.y);
        ctx.stroke();
      }

      // 粒子
      for (const p of particles) {
        const edge = edges[p.edgeIdx];
        const a = nodeMap.get(edge.from)!;
        const b = nodeMap.get(edge.to)!;
        const pt = quadraticBezier(a, b, p.t);

        ctx.fillStyle = "rgba(232, 96, 42, 0.7)";
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        p.t += p.speed;
        if (p.t > 1) p.t = 0;
      }

      // 中心节点脉冲光环
      const center = nodeMap.get("ai")!;
      const glowR = center.r + 6 + Math.sin(t * 1.5) * 5;
      const glowAlpha = 0.12 + Math.sin(t * 1.5) * 0.06;
      ctx.beginPath();
      ctx.arc(center.x, center.y, glowR, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(232, 96, 42, ${glowAlpha})`;
      ctx.lineWidth = 2;
      ctx.stroke();

      // 节点
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = "#FFFFFF";
        ctx.fill();
        ctx.strokeStyle = "#E8602A";
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.fillStyle = "#1A1A1C";
        ctx.font = "11px -apple-system, sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(n.label, n.x, n.y);
      }
    }

    let time = 0;
    let raf: number;
    function loop() {
      time += 0.016;
      draw(time);
      raf = requestAnimationFrame(loop);
    }
    loop();

    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="flex justify-center mt-8">
      <canvas ref={canvasRef} className="max-w-full" />
    </div>
  );
}
