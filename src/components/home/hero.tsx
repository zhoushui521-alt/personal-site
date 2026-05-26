"use client";

import { motion, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";
import { useMousePosition } from "@/lib/use-mouse-position";
import { useScrollProgress } from "@/lib/use-scroll-progress";

type HeroProps = {
  name: string;
  role: string;
  bio: string;
};

const floatingShapes = [
  { left: "13%", top: "16%", size: 32, color: "bg-accent/18 shadow-[0_0_30px_rgba(232,96,42,0.12)]", parallax: 45, round: "rounded-sm" },
  { left: "82%", top: "14%", size: 48, color: "bg-blue/12 shadow-[0_0_40px_rgba(59,111,245,0.10)]", parallax: 55, round: "rounded-full" },
  { left: "7%", top: "64%", size: 24, color: "bg-gold/16 shadow-[0_0_25px_rgba(212,137,74,0.10)]", parallax: 35, round: "rounded-sm" },
  { left: "85%", top: "58%", size: 36, color: "bg-mint/14 shadow-[0_0_35px_rgba(77,174,138,0.10)]", parallax: 50, round: "rounded-full" },
  { left: "42%", top: "8%", size: 28, color: "bg-blue/14 shadow-[0_0_30px_rgba(59,111,245,0.08)]", parallax: 60, round: "rounded-sm" },
  { left: "56%", top: "74%", size: 40, color: "bg-accent/14 shadow-[0_0_35px_rgba(232,96,42,0.08)]", parallax: 28, round: "rounded-full" },
];

function FloatingDecoration({
  left, top, size, color, parallax, round, mx, my,
}: {
  left: string; top: string; size: number; color: string; parallax: number; round: string;
  mx: MotionValue<number>; my: MotionValue<number>;
}) {
  const x = useTransform(mx, (v) => v * parallax);
  const y = useTransform(my, (v) => v * parallax);

  return (
    <motion.div
      className={`absolute ${round} ${color}`}
      style={{ left, top, width: size, height: size, x, y }}
    />
  );
}

export default function Hero({ name, role, bio }: HeroProps) {
  const { ref, mx, my } = useMousePosition();
  const progress = useScrollProgress();
  const py = progress * -80;

  return (
    <section
      ref={ref}
      className="relative flex flex-col items-center justify-center min-h-[92vh] max-w-6xl mx-auto px-6 pt-28 pb-24 text-center overflow-hidden"
    >
      {/* rotating group — all shapes orbit together */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 pointer-events-none"
      >
        {floatingShapes.map((s, i) => (
          <FloatingDecoration key={i} {...s} mx={mx} my={my} />
        ))}
      </motion.div>

      {/* ambient rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-accent/10 pointer-events-none shadow-[0_0_60px_rgba(232,96,42,0.04)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full border border-blue/8 pointer-events-none shadow-[0_0_40px_rgba(59,111,245,0.04)]" />

      <motion.div
        style={{ y: py * 0.2 }}
        className="w-20 h-20 rounded-full mb-10 overflow-hidden shadow-sm ring-1 ring-border/40"
      >
        <Image
          src="/avatar.jpg"
          alt="Daniel"
          width={80}
          height={80}
          priority
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.h1
        style={{ y: py }}
        className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05]"
      >
        <span className="bg-gradient-to-r from-accent via-[#D4894A] to-blue bg-[length:200%_100%] bg-clip-text text-transparent animate-gradient">
          {name}
        </span>
      </motion.h1>

      <motion.div
        style={{ y: py * 0.6 }}
        className="mt-6 flex items-center gap-4"
      >
        <span className="h-px w-10 bg-accent/25" />
        <span className="text-lg sm:text-xl text-text-secondary font-medium tracking-wide">
          {role}
        </span>
        <span className="h-px w-10 bg-accent/25" />
      </motion.div>

      <motion.p
        style={{ y: py * 0.4 }}
        className="mt-8 max-w-lg text-base sm:text-lg leading-relaxed text-text-secondary"
      >
        {bio}
      </motion.p>

      <motion.div
        style={{ y: py * 0.2 }}
        className="flex flex-wrap gap-4 justify-center mt-10"
      >
        <a
          href="/about"
          className="px-6 py-3 bg-text-primary text-bg text-sm font-medium rounded-full transition-all duration-300 hover:bg-text-primary/85 hover:shadow-lg hover:shadow-text-primary/10 hover:-translate-y-0.5"
        >
          关于我
        </a>
        <a
          href="/projects"
          className="px-6 py-3 text-text-primary text-sm font-medium rounded-full border border-border/50 transition-all duration-300 hover:border-text-primary/20 hover:bg-surface hover:-translate-y-0.5"
        >
          查看项目
        </a>
      </motion.div>

      {/* scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-text-secondary/35 tracking-[0.3em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="w-4 h-7 rounded-full border border-border/30 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-accent/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
