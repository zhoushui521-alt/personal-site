"use client";

import { Canvas } from "@react-three/fiber";
import Particles from "./particles";

export default function Scene3D() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      {/* Ambient light blobs */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full animate-float-1"
        style={{
          left: "10%", top: "15%",
          background:
            "radial-gradient(circle, rgba(232,96,42,0.06) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute w-[500px] h-[500px] rounded-full animate-float-2"
        style={{
          right: "5%", bottom: "20%",
          background:
            "radial-gradient(circle, rgba(59,111,245,0.05) 0%, transparent 70%)",
        }}
      />
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <Particles />
      </Canvas>
    </div>
  );
}
