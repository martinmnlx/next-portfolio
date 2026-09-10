import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, Trash2 } from "lucide-react";

const meta: Meta<typeof Button> = {
  title: "Design System/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"],
    },
    asChild: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Default Button",
    variant: "default",
    size: "default",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    variant: "secondary",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline Button",
    variant: "outline",
  },
};

export const Destructive: Story = {
  args: {
    children: (
      <>
        <Trash2 className="size-4" />
        Delete Item
      </>
    ),
    variant: "destructive",
  },
};

export const AsChildWithLink: Story = {
  render: () => (
    <Button asChild variant="outline">
      <a href="https://github.com" target="_blank" rel="noreferrer">
        Visit GitHub <ArrowRight className="size-4" />
      </a>
    </Button>
  ),
};

export const WithMotionAnimation: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-6 p-6">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Button className="cursor-pointer gap-2">
          <Sparkles className="size-4 text-yellow-400" />
          Interactive Motion Spring Button
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="rounded-lg border border-border bg-card p-4 text-card-foreground shadow-sm"
      >
        <p className="text-sm">
          Motion + Radix UI + shadcn + Tailwind CSS v4 are active and
          integrated!
        </p>
      </motion.div>
    </div>
  ),
};
