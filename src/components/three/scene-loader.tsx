"use client";

import dynamic from "next/dynamic";

const Scene3D = dynamic(() => import("./scene"), {
  ssr: false,
});

export default function SceneLoader() {
  return <Scene3D />;
}
