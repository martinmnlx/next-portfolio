import type { Meta } from "@storybook/nextjs-vite";
import { Button } from "./button";
import { motion } from "motion/react";
import { Sparkles, ArrowRight, Trash2 } from "lucide-react";

const meta: Meta<typeof Button> = {
  title: "Design System/Button",
  component: Button,
};
export default meta;

export const AllVariants = () => (
  <div className="flex flex-wrap items-center gap-4 p-6">
    <Button variant="default">Default</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="ghost">Ghost</Button>
    <Button variant="destructive">
      <Trash2 className="size-4" />
      Delete
    </Button>
    <Button variant="link">Link</Button>
  </div>
);

export const Sizes = () => (
  <div className="flex items-center gap-4 p-6">
    <Button size="sm">Small</Button>
    <Button size="default">Default</Button>
    <Button size="lg">Large</Button>
  </div>
);

export const AsLink = () => (
  <div className="p-6">
    <Button asChild variant="outline">
      <a href="https://github.com" target="_blank" rel="noreferrer">
        Visit GitHub <ArrowRight className="size-4" />
      </a>
    </Button>
  </div>
);

export const WithMotion = () => (
  <div className="p-6">
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="inline-block"
    >
      <Button className="cursor-pointer gap-2">
        <Sparkles className="size-4 text-yellow-400" />
        Interactive Spring Button
      </Button>
    </motion.div>
  </div>
);
