"use client";

import { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { noise3D } from "@/lib/noise";

type RingConfig = {
  count: number;
  radius: number;
  tiltX: number;
  tiltY: number;
  color: string;
  size: number;
  speed: number;
};

const RINGS: RingConfig[] = [
  { count: 260, radius: 2.2, tiltX: 0.4, tiltY: 0.1, color: "#E8B86D", size: 0.028, speed: 0.10 },
  { count: 260, radius: 1.6, tiltX: 0.9, tiltY: 0.5, color: "#6C8EE8", size: 0.022, speed: 0.18 },
  { count: 280, radius: 1.1, tiltX: 0.2, tiltY: 0.8, color: "#7EC8E3", size: 0.025, speed: 0.26 },
];

function Ring({ config }: { config: RingConfig }) {
  const meshRef = useRef<THREE.Points>(null);

  const baseAngles = useMemo(() => {
    const a = new Float32Array(config.count);
    for (let i = 0; i < config.count; i++) {
      a[i] = (i / config.count) * Math.PI * 2;
    }
    return a;
  }, [config.count]);

  const initialPositions = useMemo(() => {
    const p = new Float32Array(config.count * 3);
    for (let i = 0; i < config.count; i++) {
      const angle = baseAngles[i];
      p[i * 3] = Math.cos(angle) * config.radius;
      p[i * 3 + 1] = 0;
      p[i * 3 + 2] = Math.sin(angle) * config.radius;
    }
    return p;
  }, [config.count, config.radius, baseAngles]);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;
    const geom = meshRef.current.geometry;
    const attr = geom.getAttribute("position") as THREE.BufferAttribute;
    const arr = attr.array as Float32Array;
    const { radius, tiltX, tiltY, speed, count } = config;
    const cosTX = Math.cos(tiltX), sinTX = Math.sin(tiltX);
    const cosTY = Math.cos(tiltY), sinTY = Math.sin(tiltY);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const angle = baseAngles[i] + speed * t;

      // Ring in XZ plane
      const x0 = Math.cos(angle) * radius;
      const y0 = 0;
      const z0 = Math.sin(angle) * radius;

      // Rotate around X (tilt forward/back)
      const y1 = -sinTX * z0;
      const z1 = cosTX * z0;

      // Rotate around Y (tilt sideways)
      const x2 = cosTY * x0 + sinTY * z1;
      const z2 = -sinTY * x0 + cosTY * z1;

      // Subtle noise wobble for organic feel
      const n = noise3D(x2 * 0.4, y1 * 0.4 + t * 0.3, z2 * 0.4) * 0.05;

      arr[i3] = x2 + n;
      arr[i3 + 1] = y1 + n;
      arr[i3 + 2] = z2 + n;
    }
    attr.needsUpdate = true;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[initialPositions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={config.size}
        color={config.color}
        transparent
        opacity={0.7}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

type Props = { scrollProgress: number };

export default function Particles({ scrollProgress }: Props) {
  const { camera, pointer } = useThree();

  useFrame(() => {
    camera.position.x = pointer.x * 0.25;
    camera.position.y = -pointer.y * 0.15;
    camera.position.z = 5 + scrollProgress * 1.5;
  });

  return (
    <>
      {RINGS.map((ring, i) => (
        <Ring key={i} config={ring} />
      ))}
    </>
  );
}
