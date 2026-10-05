"use client";

import { useState, useRef, useEffect } from "react";
import { Copy, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

interface CopyButtonProps {
  text: string;
  children?: React.ReactNode;
  className?: string;
}

function fallbackCopyText(text: string): boolean {
  if (typeof document === "undefined") return false;
  try {
    const textArea = document.createElement("textarea");
    textArea.value = text;

    // Prevent scrolling and keep it invisible without display:none
    textArea.style.position = "fixed";
    textArea.style.top = "0";
    textArea.style.left = "-9999px";
    textArea.style.width = "2em";
    textArea.style.height = "2em";
    textArea.style.padding = "0";
    textArea.style.border = "none";
    textArea.style.outline = "none";
    textArea.style.boxShadow = "none";
    textArea.style.background = "transparent";
    textArea.style.opacity = "0";
    textArea.setAttribute("readonly", "");

    document.body.appendChild(textArea);

    const range = document.createRange();
    range.selectNodeContents(textArea);
    const selection = window.getSelection();
    if (selection) {
      selection.removeAllRanges();
      selection.addRange(range);
    }
    textArea.select();
    textArea.setSelectionRange(0, text.length);

    const successful = document.execCommand("copy");
    document.body.removeChild(textArea);
    return successful;
  } catch (err) {
    console.error("Fallback copy failed:", err);
    return false;
  }
}

async function copyToClipboard(text: string): Promise<boolean> {
  const isSecure =
    typeof window !== "undefined" &&
    (window.isSecureContext ||
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1");

  // In secure contexts (HTTPS or localhost), attempt modern Async Clipboard API
  if (
    isSecure &&
    typeof navigator !== "undefined" &&
    navigator.clipboard &&
    typeof navigator.clipboard.writeText === "function"
  ) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Modern API may throw if document lacks focus or permissions are restricted
      return fallbackCopyText(text);
    }
  }

  // In non-secure contexts (e.g. LAN access http://192.168.x.x:3000) or unsupported browsers,
  // execute fallback synchronously to stay within the user gesture event loop.
  return fallbackCopyText(text);
}

export function CopyButton({ text, children, className }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleCopy = async () => {
    const success = await copyToClipboard(text);
    if (success) {
      setCopied(true);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        setCopied(false);
      }, 2000);
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
        "inline-flex items-center gap-1.5 whitespace-nowrap text-foreground/75 hover:text-foreground transition-all duration-300 cursor-pointer select-text",
        copied && "text-foreground",
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
            className="inline-flex items-center justify-center text-foreground"
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
