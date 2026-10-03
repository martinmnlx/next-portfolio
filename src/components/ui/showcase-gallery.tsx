"use client";

import {
  useEffect,
  useRef,
  useState,
  useCallback,
  useSyncExternalStore,
} from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "motion/react";
import {
  ChevronLeft,
  ChevronRight,
  X,
  ZoomIn,
  Image as ImageIcon,
} from "lucide-react";
import { Typography } from "@/components/ui/typography";
import type { ProjectSpotlight } from "@/data/projects";

interface ShowcaseGalleryProps {
  items: ProjectSpotlight[];
  projectTitle: string;
}

interface LightboxImage {
  src: string;
  alt: string;
}

const emptySubscribe = () => () => {};
function useMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}

function InteractiveScreenshotCard({
  src,
  alt,
  onOpen,
}: {
  src: string;
  alt: string;
  onOpen: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth, responsive spring configuration for the trailing badge
  const springConfig = { damping: 22, stiffness: 320, mass: 0.35 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (rect) {
      mouseX.jump(e.clientX - rect.left);
      mouseY.jump(e.clientY - rect.top);
    }
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      ref={cardRef}
      onClick={onOpen}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full aspect-[16/10] select-none cursor-zoom-in"
    >
      <div className="relative w-full h-full rounded-[4px] overflow-hidden border border-border bg-gradient-to-b from-muted/60 via-muted/30 to-muted/50 dark:from-muted/30 dark:via-muted/15 dark:to-muted/20">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 640px"
          className="object-cover"
        />
      </div>

      {/* Cursor-following badge */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 z-20 hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-[4px] bg-background/90 text-foreground backdrop-blur-md border border-border/80 shadow-md text-xs font-mono tracking-tight -translate-x-1/2 -translate-y-[calc(100%+8px)] whitespace-nowrap"
        style={{
          x: smoothX,
          y: smoothY,
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.85,
        }}
        transition={{ duration: 0.15 }}
      >
        <ZoomIn className="size-3.5 text-foreground/75" />
        <span>enlarge image</span>
      </motion.div>
    </div>
  );
}

export function ShowcaseGallery({ items, projectTitle }: ShowcaseGalleryProps) {
  const mounted = useMounted();
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  // Filter items that have image media to build the lightbox list
  const lightboxImages: LightboxImage[] = items
    .filter(
      (item) =>
        Boolean(item.media?.src) &&
        item.media?.type !== "video" &&
        !item.media?.src?.endsWith(".mp4") &&
        !item.media?.src?.endsWith(".webm"),
    )
    .map((item) => ({
      src: item.media!.src!,
      alt: item.media?.alt || item.title || projectTitle,
    }));

  const handlePrev = useCallback(() => {
    if (lightboxImages.length === 0) return;
    setActiveImageIndex((prev) =>
      prev === null
        ? null
        : (prev - 1 + lightboxImages.length) % lightboxImages.length,
    );
  }, [lightboxImages.length]);

  const handleNext = useCallback(() => {
    if (lightboxImages.length === 0) return;
    setActiveImageIndex((prev) =>
      prev === null ? null : (prev + 1) % lightboxImages.length,
    );
  }, [lightboxImages.length]);

  const handleClose = useCallback(() => {
    setActiveImageIndex(null);
  }, []);

  // Keyboard navigation & scroll locking
  useEffect(() => {
    if (activeImageIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.body.dataset.lightboxOpen = "true";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
      delete document.body.dataset.lightboxOpen;
    };
  }, [activeImageIndex, handleClose, handleNext, handlePrev]);

  const activeImage =
    activeImageIndex !== null ? lightboxImages[activeImageIndex] : null;

  return (
    <>
      <div className="flex flex-col gap-7">
        {items.map((spotlight, idx) => {
          const isVideo =
            spotlight.media?.type === "video" ||
            spotlight.media?.src?.endsWith(".mp4") ||
            spotlight.media?.src?.endsWith(".webm");

          const imageSrc = spotlight.media?.src;
          const imageAlt =
            spotlight.media?.alt || spotlight.title || projectTitle;

          // Find index in lightbox images array
          const lightboxIndex = imageSrc
            ? lightboxImages.findIndex((img) => img.src === imageSrc)
            : -1;

          return (
            <div key={idx} className="flex flex-col gap-5">
              {isVideo && imageSrc ? (
                <div className="relative w-full aspect-[16/10] rounded-[4px] overflow-hidden border border-border bg-black select-none">
                  <video
                    src={imageSrc}
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-contain"
                  />
                </div>
              ) : imageSrc ? (
                <InteractiveScreenshotCard
                  src={imageSrc}
                  alt={imageAlt}
                  onOpen={() => {
                    if (lightboxIndex !== -1) {
                      setActiveImageIndex(lightboxIndex);
                    }
                  }}
                />
              ) : (
                <div className="relative w-full aspect-[16/10] rounded-[4px] overflow-hidden border border-border bg-gradient-to-b from-muted/60 via-muted/30 to-muted/50 dark:from-muted/30 dark:via-muted/15 dark:to-muted/20 flex flex-col justify-between p-4 sm:p-5 select-none">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="size-2 rounded-full bg-foreground/15" />
                      <div className="size-2 rounded-full bg-foreground/15" />
                      <div className="size-2 rounded-full bg-foreground/15" />
                    </div>
                    <div className="text-[10px] font-mono tracking-wider text-foreground/35 uppercase">
                      spotlight // {idx + 1} of {items.length}
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-2 text-center my-auto">
                    <div className="flex size-10 items-center justify-center rounded-[4px] border border-border/60 bg-background/50 backdrop-blur-xs text-foreground/40 shadow-xs">
                      <ImageIcon className="size-5" />
                    </div>
                    <span className="text-xs font-mono text-foreground/70">
                      {spotlight.title || `${projectTitle} Preview`}
                    </span>
                  </div>
                  <div className="h-2" />
                </div>
              )}

              <div className="flex flex-row items-start">
                <Typography variant="h2" className="w-10 shrink-0 select-none">
                  {idx + 1}
                </Typography>
                <div className="flex flex-col gap-1">
                  <Typography variant="h4">{spotlight.title}</Typography>
                  <Typography variant="p" className="leading-[150%]">
                    {spotlight.description}
                  </Typography>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Focused Lightbox Modal */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {activeImage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={handleClose}
                className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-8 md:p-12 bg-black/80 dark:bg-black/85 backdrop-blur-md select-none"
              >
                {/* Close Button */}
                <button
                  type="button"
                  aria-label="Close enlarged view"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClose();
                  }}
                  className="absolute top-4 right-4 sm:top-6 sm:right-6 z-30 flex size-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white/90 hover:text-white backdrop-blur-md border border-white/15 transition-all active:scale-95 cursor-pointer shadow-lg"
                >
                  <X className="size-5" />
                </button>

                {/* Left navigation arrow */}
                {lightboxImages.length > 1 && (
                  <button
                    type="button"
                    aria-label="Previous screenshot"
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrev();
                    }}
                    className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 flex size-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/25 text-white/90 hover:text-white backdrop-blur-md border border-white/15 transition-all active:scale-95 cursor-pointer shadow-lg"
                  >
                    <ChevronLeft className="size-6" />
                  </button>
                )}

                {/* Right navigation arrow */}
                {lightboxImages.length > 1 && (
                  <button
                    type="button"
                    aria-label="Next screenshot"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext();
                    }}
                    className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 flex size-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/25 text-white/90 hover:text-white backdrop-blur-md border border-white/15 transition-all active:scale-95 cursor-pointer shadow-lg"
                  >
                    <ChevronRight className="size-6" />
                  </button>
                )}

                {/* Center Image */}
                <motion.div
                  key={activeImage.src}
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  transition={{ type: "spring", damping: 26, stiffness: 320 }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative max-h-[85vh] max-w-[90vw] rounded-[4px] overflow-hidden border border-white/15 shadow-2xl bg-black/60 flex items-center justify-center cursor-default"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={activeImage.src}
                    alt={activeImage.alt}
                    className="max-h-[85vh] max-w-[90vw] object-contain select-none"
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}
