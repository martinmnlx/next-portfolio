"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

interface CopyButtonProps {
  text: string;
  children?: React.ReactNode;
  className?: string;
}

export function CopyButton({ text, children, className }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={
        copied ? "Copied email to clipboard" : "Copy email to clipboard"
      }
      title={copied ? "Copied!" : "Click to copy email"}
      className={cn(
        "inline-flex items-center gap-1.5 whitespace-nowrap text-foreground/75 hover:text-foreground transition-colors cursor-pointer",
        className,
      )}
    >
      {children}
      <AnimatePresence mode="wait" initial={false}>
        {copied ? (
          <motion.span
            key="check"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="inline-flex items-center justify-center"
          >
            <Check className="size-3.5" />
          </motion.span>
        ) : (
          <motion.span
            key="copy"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="inline-flex items-center justify-center"
          >
            <Copy className="size-3.5" />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
