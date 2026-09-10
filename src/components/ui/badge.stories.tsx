import type { Meta } from "@storybook/nextjs-vite";
import { Badge } from "./badge";

const meta: Meta<typeof Badge> = {
  title: "Design System/Badge",
  component: Badge,
};
export default meta;

export const Preview = () => (
  <div className="flex flex-wrap items-center gap-3 p-6">
    <Badge>available for work</Badge>
    <Badge>next.js 16</Badge>
    <Badge>typescript</Badge>
    <Badge>tailwind v4</Badge>
  </div>
);
