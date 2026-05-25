"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { useScrollProgress } from "@/lib/use-scroll-progress";

type HeroProps = {
  name: string;
  role: string;
  bio: string;
};

export default function Hero({ name, role, bio }: HeroProps) {
  const progress = useScrollProgress();
  const scrollY = progress * -120;
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    setMouse({
      x: (e.clientX / window.innerWidth - 0.5) * 2,
      y: (e.clientY / window.innerHeight - 0.5) * 2,
    });
  }, []);

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative flex flex-col items-center justify-center min-h-full max-w-2xl mx-auto px-6 py-20 text-center overflow-hidden"
    >
      {/* Ambient glow following cursor */}
      <div
        aria-hidden
        className="absolute pointer-events-none w-[500px] h-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(232,184,109,0.10) 0%, rgba(108,142,232,0.04) 40%, transparent 70%)",
          left: `calc(${((mouse.x + 1) / 2) * 100}% - 250px)`,
          top: `calc(${((mouse.y + 1) / 2) * 100}% - 250px)`,
          transition: "left 0.6s ease-out, top 0.6s ease-out",
        }}
      />

      {/* Avatar — moves with mouse, 3D tilt */}
      <div
        style={{
          transform: `translateY(${scrollY * 0.5}px) translate(${mouse.x * 5}px, ${mouse.y * 5}px)`,
        }}
      >
        <div
          className="w-24 h-24 rounded-full mb-8 overflow-hidden ring-1 ring-gold/40 ring-offset-2 ring-offset-bg transition-shadow duration-500"
          style={{
            transform: `perspective(300px) rotateY(${mouse.x * 10}deg) rotateX(${-mouse.y * 10}deg)`,
            boxShadow: `0 0 30px rgba(232,184,109,${0.08 + Math.abs(mouse.x) * 0.06})`,
          }}
        >
          <Image
            src="/avatar.jpg"
            alt="Daniel 的头像"
            width={96}
            height={96}
            priority
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Name — moves opposite to avatar for depth */}
      <h1
        className="text-4xl font-semibold tracking-tight"
        style={{
          transform: `translateY(${scrollY}px) translate(${mouse.x * -3}px, ${mouse.y * -3}px)`,
        }}
      >
        你好，我是{" "}
        <span className="bg-gradient-to-r from-gold via-magenta to-blue bg-[length:200%_100%] bg-clip-text text-transparent animate-gradient">
          {name}
        </span>
      </h1>

      <p className="mt-3 text-xl text-gold/70 font-medium">{role}</p>

      <p className="mt-6 max-w-md text-base leading-relaxed text-text-secondary">
        {bio}
      </p>

      <div className="flex flex-wrap gap-3 justify-center mt-8">
        <a
          href="/about"
          className="px-5 py-2.5 bg-gold text-bg text-sm font-medium rounded-lg transition-all duration-200 hover:bg-gold/80 hover:shadow-[0_0_20px_rgba(232,184,109,0.2)]"
        >
          了解更多
        </a>
        <a
          href="/projects"
          className="px-5 py-2.5 bg-transparent text-gold text-sm font-medium rounded-lg border border-gold/30 transition-all duration-200 hover:border-gold/60 hover:bg-gold/5"
        >
          查看项目
        </a>
      </div>

      <div className="mt-16 animate-bounce opacity-30">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </section>
  );
}
