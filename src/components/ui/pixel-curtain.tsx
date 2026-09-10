"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface PixelCurtainProps {
  columns?: number;
  themeColor?: "light" | "dark";
  onComplete?: () => void;
}

export function PixelCurtain({
  columns = 14,
  themeColor,
  onComplete,
}: PixelCurtainProps) {
  const [dimensions, setDimensions] = useState<{
    rows: number;
    cols: number;
  } | null>(() => {
    if (typeof window === "undefined") return null;
    const colWidth = window.innerWidth / columns;
    const nbRows = Math.ceil(window.innerHeight / colWidth);
    return { rows: nbRows, cols: columns };
  });
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const updateGrid = () => {
      const colWidth = window.innerWidth / columns;
      const nbRows = Math.ceil(window.innerHeight / colWidth);
      setDimensions({ rows: nbRows, cols: columns });
    };

    updateGrid();
    window.addEventListener("resize", updateGrid);
    return () => window.removeEventListener("resize", updateGrid);
  }, [columns]);

  useEffect(() => {
    if (!dimensions) return;

    // Total animation duration plus buffer before removing from DOM
    const timer = setTimeout(() => {
      setIsComplete(true);
      onComplete?.();
    }, 800);

    return () => clearTimeout(timer);
  }, [dimensions, onComplete]);

  if (isComplete || !dimensions) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[90] flex h-screen w-screen overflow-hidden"
    >
      {Array.from({ length: dimensions.cols }).map((_, colIndex) => (
        <div key={colIndex} className="flex h-full flex-1 flex-col">
          {Array.from({ length: dimensions.rows }).map((_, rowIndex) => {
            // Curtain wave from top to bottom with subtle horizontal gradient and organic scatter
            const delay =
              (rowIndex / dimensions.rows) * 0.35 +
              (colIndex / dimensions.cols) * 0.12 +
              Math.random() * 0.14;

            return (
              <motion.div
                key={rowIndex}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 0.12,
                  delay,
                  ease: "easeInOut",
                }}
                className={cn(
                  "flex-1",
                  themeColor === "light"
                    ? "bg-white"
                    : themeColor === "dark"
                      ? "bg-[oklch(0.145_0_0)]"
                      : "bg-background",
                )}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}
