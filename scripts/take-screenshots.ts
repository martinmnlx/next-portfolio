import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";

const STORIES_TO_CAPTURE = [
  {
    id: "design-system-typography--gallery",
    name: "typography-gallery.png",
    description: "Typography Gallery (all variants)",
  },
  {
    id: "design-system-button--all-variants",
    name: "button-variants.png",
    description: "Button Variants (default, outline, ghost, destructive)",
  },
  {
    id: "design-system-button--with-motion",
    name: "button-motion.png",
    description: "Interactive Motion Button",
  },
];

async function main() {
  const screenshotsDir = path.resolve(process.cwd(), "screenshots");
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }

  console.log("📸 Connecting to Storybook at http://localhost:6006...");

  // Verify server is responsive
  try {
    const res = await fetch("http://localhost:6006");
    if (!res.ok && res.status !== 200) {
      throw new Error(`Storybook server returned status ${res.status}`);
    }
  } catch {
    console.error(
      "\n❌ Storybook is not running!\n👉 Please start Storybook in another terminal with: npm run storybook\n",
    );
    process.exit(1);
  }

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    deviceScaleFactor: 2, // Crisp retina / 2x resolution
    viewport: { width: 1200, height: 800 },
  });

  const page = await context.newPage();

  console.log(
    `🚀 Capturing ${STORIES_TO_CAPTURE.length} component screenshots...\n`,
  );

  for (const story of STORIES_TO_CAPTURE) {
    const url = `http://localhost:6006/iframe.html?id=${story.id}&viewMode=story`;
    process.stdout.write(`  ⏳ Capturing ${story.description}... `);

    try {
      await page.goto(url, { waitUntil: "networkidle" });
      await page.waitForSelector("#storybook-root", { timeout: 5000 });

      // Wait a moment for web fonts and animations to settle
      await page.waitForTimeout(300);

      const targetPath = path.join(screenshotsDir, story.name);
      const root = page.locator("#storybook-root");

      await root.screenshot({ path: targetPath });
      console.log(`✅ Saved -> screenshots/${story.name}`);
    } catch (err) {
      console.log(`❌ Failed: ${(err as Error).message}`);
    }
  }

  await browser.close();
  console.log(`\n🎉 Done! All screenshots saved in: ${screenshotsDir}\n`);
}

main();
