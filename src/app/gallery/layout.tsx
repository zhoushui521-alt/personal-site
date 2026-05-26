import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "数字暗房",
  description:
    "像素是时间的沉淀。每一帧都是工程之外的感官存档。",
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
