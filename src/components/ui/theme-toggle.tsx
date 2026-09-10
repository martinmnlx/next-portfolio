"use client";

import { useTheme } from "next-themes";
import { useState, useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { PixelCurtain } from "@/components/ui/pixel-curtain";

const emptySubscribe = () => () => {};

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [curtainTheme, setCurtainTheme] = useState<"light" | "dark" | null>(
    null,
  );
  const [curtainKey, setCurtainKey] = useState(0);

  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  if (!mounted) {
    return (
      <div className="fixed bottom-6 right-6 z-40 size-9 rounded-full border border-border bg-background/80" />
    );
  }

  const isDark = resolvedTheme === "dark";

  const handleToggle = () => {
    const outgoingTheme = isDark ? "dark" : "light";
    const nextTheme = isDark ? "light" : "dark";

    setCurtainTheme(outgoingTheme);
    setCurtainKey((prev) => prev + 1);
    setTheme(nextTheme);
  };

  return (
    <>
      {curtainTheme && (
        <PixelCurtain
          key={curtainKey}
          themeColor={curtainTheme}
          onComplete={() => setCurtainTheme(null)}
        />
      )}
      <button
        type="button"
        onClick={handleToggle}
        aria-label="Toggle theme"
        className="fixed bottom-6 right-6 z-[95] flex size-9 items-center justify-center rounded-full border border-border bg-background/80 text-foreground backdrop-blur-sm transition-colors hover:bg-muted/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={isDark ? "dark" : "light"}
            initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 45, scale: 0.8 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="flex items-center justify-center"
          >
            {isDark ? (
              <Sun className="size-4 text-foreground" />
            ) : (
              <Moon className="size-4 text-foreground" />
            )}
          </motion.div>
        </AnimatePresence>
      </button>
    </>
  );
}
