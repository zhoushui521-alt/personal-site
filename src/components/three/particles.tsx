"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { noise3D } from "@/lib/noise";

const COUNT = 30;

export default function Particles() {
  const meshRef = useRef<THREE.Points>(null);

  const basePositions = useMemo(() => {
    const p = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT * 3; i++) {
      p[i] = (Math.random() - 0.5) * 6;
    }
    return p;
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime * 0.08;
    const geom = meshRef.current.geometry;
    const attr = geom.getAttribute("position") as THREE.BufferAttribute;
    const arr = attr.array as Float32Array;

    for (let i = 0; i < COUNT; i++) {
      const i3 = i * 3;
      const bx = basePositions[i3];
      const by = basePositions[i3 + 1];
      const bz = basePositions[i3 + 2];

      arr[i3] = bx + noise3D(bx + t, by, bz) * 0.3;
      arr[i3 + 1] = by + noise3D(bx, by + t, bz) * 0.3;
      arr[i3 + 2] = bz + noise3D(bx, by, bz + t) * 0.3;
    }
    attr.needsUpdate = true;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[basePositions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        color="#FFF5EB"
        transparent
        opacity={0.18}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
