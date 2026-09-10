"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ProjectImage {
  src?: string;
  alt?: string;
  title?: string;
}

export interface ProjectCarouselProps {
  images: ProjectImage[];
  projectTitle: string;
  className?: string;
}

function PlaceholderSlide({
  projectTitle,
  slideTitle,
  index,
  total,
}: {
  projectTitle: string;
  slideTitle?: string;
  index: number;
  total: number;
}) {
  return (
    <div className="relative flex h-full w-full flex-col justify-between p-4 sm:p-5 bg-gradient-to-b from-muted/60 via-muted/30 to-muted/50 dark:from-muted/30 dark:via-muted/15 dark:to-muted/20 border border-border/40 select-none">
      {/* Top window chrome */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <div className="size-2 rounded-full bg-foreground/15" />
          <div className="size-2 rounded-full bg-foreground/15" />
          <div className="size-2 rounded-full bg-foreground/15" />
        </div>
        <div className="text-[10px] font-mono tracking-wider text-foreground/35 uppercase">
          preview // {index + 1} of {total}
        </div>
      </div>

      {/* Center artwork / placeholder */}
      <div className="flex flex-col items-center justify-center gap-2 text-center my-auto">
        <div className="flex size-10 items-center justify-center rounded-lg border border-border/60 bg-background/50 backdrop-blur-xs text-foreground/40 shadow-xs">
          <ImageIcon className="size-5" />
        </div>
        <div className="flex flex-col items-center gap-0.5">
          <span className="text-xs font-mono text-foreground/70">
            {slideTitle || `Screenshot ${index + 1}`}
          </span>
          <span className="text-[11px] font-sans text-foreground/40">
            {projectTitle}
          </span>
        </div>
      </div>

      {/* Bottom spacer for dot indicator clearance */}
      <div className="h-4" />
    </div>
  );
}

export function ProjectCarousel({
  images,
  projectTitle,
  className,
}: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < images.length - 1;

  const prevSlide = () => {
    if (canGoPrev) setCurrentIndex((i) => i - 1);
  };

  const nextSlide = () => {
    if (canGoNext) setCurrentIndex((i) => i + 1);
  };

  return (
    <div
      className={cn(
        "group/carousel relative w-full aspect-video overflow-hidden rounded-xl border border-border bg-background shadow-xs",
        className,
      )}
    >
      {/* Slides track */}
      <motion.div
        className="flex h-full w-full cursor-grab active:cursor-grabbing"
        animate={{ x: `-${currentIndex * 100}%` }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        onDragEnd={(_, info) => {
          const swipeThreshold = 40;
          if (info.offset.x < -swipeThreshold && canGoNext) {
            nextSlide();
          } else if (info.offset.x > swipeThreshold && canGoPrev) {
            prevSlide();
          }
        }}
      >
        {images.map((img, idx) => (
          <div
            key={idx}
            className="relative h-full w-full shrink-0 flex items-center justify-center overflow-hidden"
          >
            {img.src ? (
              <Image
                src={img.src}
                alt={img.alt || `${projectTitle} preview ${idx + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 640px"
                className="object-cover pointer-events-none select-none"
              />
            ) : (
              <PlaceholderSlide
                projectTitle={projectTitle}
                slideTitle={img.title}
                index={idx}
                total={images.length}
              />
            )}
          </div>
        ))}
      </motion.div>

      {/* Prev / Next controls */}
      {images.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous image"
            disabled={!canGoPrev}
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              prevSlide();
            }}
            className={cn(
              "absolute left-2.5 top-1/2 -translate-y-1/2 z-10 flex size-7 items-center justify-center rounded-full bg-background/80 text-foreground/80 backdrop-blur-sm border border-border shadow-xs transition-all duration-200 hover:bg-background hover:text-foreground active:scale-95 disabled:opacity-0 disabled:pointer-events-none cursor-pointer",
              "opacity-0 group-hover/carousel:opacity-100 focus-visible:opacity-100",
            )}
          >
            <ChevronLeft className="size-4" />
          </button>

          <button
            type="button"
            aria-label="Next image"
            disabled={!canGoNext}
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              nextSlide();
            }}
            className={cn(
              "absolute right-2.5 top-1/2 -translate-y-1/2 z-10 flex size-7 items-center justify-center rounded-full bg-background/80 text-foreground/80 backdrop-blur-sm border border-border shadow-xs transition-all duration-200 hover:bg-background hover:text-foreground active:scale-95 disabled:opacity-0 disabled:pointer-events-none cursor-pointer",
              "opacity-0 group-hover/carousel:opacity-100 focus-visible:opacity-100",
            )}
          >
            <ChevronRight className="size-4" />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-2.5 inset-x-0 z-10 flex items-center justify-center pointer-events-none">
          <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-background/70 backdrop-blur-sm border border-border/60 shadow-xs pointer-events-auto">
            {images.map((_, idx) => (
              <button
                key={idx}
                type="button"
                aria-label={`Go to image ${idx + 1}`}
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  setCurrentIndex(idx);
                }}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300 cursor-pointer",
                  idx === currentIndex
                    ? "w-4 bg-foreground"
                    : "w-1.5 bg-foreground/25 hover:bg-foreground/50",
                )}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
