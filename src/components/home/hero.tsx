"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useScrollProgress } from "@/lib/use-scroll-progress";

type HeroProps = {
  name: string;
  role: string;
  bio: string;
};

export default function Hero({ name, role, bio }: HeroProps) {
  const progress = useScrollProgress();
  const y = progress * -60;
  const [typed, setTyped] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < bio.length) {
        setTyped(bio.slice(0, i + 1));
        i++;
      } else {
        setDone(true);
        clearInterval(timer);
      }
    }, 60);
    return () => clearInterval(timer);
  }, [bio]);

  return (
    <section className="flex flex-col items-center justify-center min-h-full max-w-2xl mx-auto px-6 py-20 text-center">
      <div style={{ transform: `translateY(${y * 0.4}px)` }}>
        <div className="w-24 h-24 rounded-full mb-8 overflow-hidden shadow-sm">
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

      <h1
        className="text-4xl font-semibold tracking-tight"
        style={{ transform: `translateY(${y}px)` }}
      >
        你好，我是{" "}
        <span className="bg-gradient-to-r from-accent via-[#D4894A] to-blue bg-[length:200%_100%] bg-clip-text text-transparent animate-gradient">
          {name}
        </span>
      </h1>

      <p className="mt-3 text-xl text-accent/60 font-medium">{role}</p>

      <p className="mt-6 max-w-md text-base leading-relaxed text-text-secondary font-mono">
        {typed}
        <span
          className={`inline-block w-0.5 h-4 ml-0.5 bg-accent/60 align-middle ${
            done ? "" : "animate-pulse"
          }`}
        />
      </p>

      <div className="flex flex-wrap gap-3 justify-center mt-8">
        <a
          href="/about"
          className="px-5 py-2.5 bg-text-primary text-bg text-sm font-medium rounded-lg transition-all duration-200 hover:bg-text-primary/80"
        >
          了解更多
        </a>
        <a
          href="/projects"
          className="px-5 py-2.5 bg-transparent text-text-primary text-sm font-medium rounded-lg border border-border transition-all duration-200 hover:border-text-primary/30 hover:bg-surface"
        >
          查看项目
        </a>
      </div>
    </section>
  );
}
