"use client";

import { useEffect, useRef } from "react";

type Node = { id: string; label: string; x: number; y: number; r: number };
type Edge = { from: string; to: string };

const nodes: Node[] = [
  { id: "ai", label: "AI Native", x: 400, y: 300, r: 22 },
  { id: "react", label: "React", x: 200, y: 160, r: 16 },
  { id: "next", label: "Next.js", x: 560, y: 140, r: 16 },
  { id: "ts", label: "TypeScript", x: 600, y: 340, r: 16 },
  { id: "three", label: "Three.js", x: 540, y: 500, r: 16 },
  { id: "tailwind", label: "Tailwind", x: 180, y: 420, r: 16 },
  { id: "linux", label: "Linux/Ops", x: 100, y: 300, r: 16 },
  { id: "node", label: "Node.js", x: 300, y: 520, r: 16 },
];

const edges: Edge[] = [
  { from: "ai", to: "react" },
  { from: "ai", to: "next" },
  { from: "ai", to: "ts" },
  { from: "ai", to: "three" },
  { from: "ai", to: "tailwind" },
  { from: "ai", to: "linux" },
  { from: "ai", to: "node" },
  { from: "react", to: "next" },
  { from: "react", to: "ts" },
  { from: "next", to: "ts" },
  { from: "three", to: "react" },
  { from: "node", to: "linux" },
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

    function draw() {
      ctx.clearRect(0, 0, w, h);

      // 边
      ctx.strokeStyle = "rgba(30, 30, 36, 0.6)";
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

        ctx.fillStyle = "rgba(0, 229, 255, 0.8)";
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        p.t += p.speed;
        if (p.t > 1) p.t = 0;
      }

      // 节点
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = "#111116";
        ctx.fill();
        ctx.strokeStyle = "#00E5FF";
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.fillStyle = "#ECECEC";
        ctx.font = "11px -apple-system, sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(n.label, n.x, n.y);
      }
    }

    let raf: number;
    function loop() {
      draw();
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
