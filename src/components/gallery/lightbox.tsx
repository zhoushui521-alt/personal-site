"use client";

import { useEffect, useCallback } from "react";

type Props = { src: string; onClose: () => void };

export default function Lightbox({ src, onClose }: Props) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  return (
    <div
      role="dialog"
      aria-label="照片预览"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-bg/85 backdrop-blur-md p-4"
    >
      <img
        src={src}
        alt=""
        className="max-w-full max-h-[90vh] rounded-lg object-contain"
      />
      <button
        onClick={onClose}
        aria-label="关闭预览"
        className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-text-secondary text-xl rounded-full transition-colors hover:text-cyan"
      >
        ✕
      </button>
    </div>
  );
}
