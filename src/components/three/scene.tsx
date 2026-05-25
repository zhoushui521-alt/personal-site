"use client";

import { Canvas } from "@react-three/fiber";
import Particles from "./particles";
import { useScrollProgress } from "@/lib/use-scroll-progress";

export default function Scene3D() {
  const progress = useScrollProgress();

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <Particles scrollProgress={progress} />
      </Canvas>
    </div>
  );
}
