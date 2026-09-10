import type { Meta } from "@storybook/nextjs-vite";
import { Typography } from "./typography";

const meta: Meta<typeof Typography> = {
  title: "Design System/Typography",
  component: Typography,
};
export default meta;

export const Gallery = () => (
  <div className="space-y-6 max-w-2xl p-6">
    <div>
      <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
        h1
      </span>
      <Typography variant="h1">design systems for modern web</Typography>
    </div>

    <div>
      <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
        h2
      </span>
      <Typography variant="h2">Accessible & Modular Architecture</Typography>
    </div>

    <div>
      <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
        h3
      </span>
      <Typography variant="h3">Component Primitives & Tokens</Typography>
    </div>

    <div>
      <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
        h4
      </span>
      <Typography variant="h4">Fine-Grained Motion Controls</Typography>
    </div>

    <div>
      <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
        p
      </span>
      <Typography variant="p">
        Crafting exceptional digital experiences requires attention to detail
        across performance, typography hierarchy, and accessibility standards.
      </Typography>
    </div>

    <div>
      <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
        blockquote
      </span>
      <Typography variant="blockquote">
        &quot;Simplicity is prerequisite for reliability.&quot; — Edsger W.
        Dijkstra
      </Typography>
    </div>

    <div>
      <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
        code
      </span>
      <div>
        <Typography variant="code">npm run storybook</Typography>
      </div>
    </div>
  </div>
);

export const SemanticOverride = () => (
  <div className="space-y-4 p-6">
    <Typography variant="p" className="text-xs text-muted-foreground">
      Using <code>as=&quot;h2&quot;</code> with visual style{" "}
      <code>variant=&quot;h1&quot;</code>:
    </Typography>
    <Typography variant="h1" as="h2">
      visually h1, semantically h2
    </Typography>
  </div>
);
