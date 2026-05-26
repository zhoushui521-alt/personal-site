"use client";

import { useEffect, useCallback } from "react";
import { motion } from "framer-motion";

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
    <motion.div
      role="dialog"
      aria-label="照片预览"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-bg/85 backdrop-blur-md p-4"
    >
      <motion.img
        src={src}
        alt=""
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
        className="max-w-full max-h-[90vh] rounded-lg object-contain"
        onClick={(e) => e.stopPropagation()}
      />
      <button
        onClick={onClose}
        aria-label="关闭预览"
        className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-text-secondary text-xl rounded-full transition-colors hover:text-accent"
      >
        ✕
      </button>
    </motion.div>
  );
}
