import fs from "node:fs";
import { execSync } from "node:child_process";

try {
  if (fs.existsSync(".git/index")) {
    fs.unlinkSync(".git/index");
  }
  execSync("git reset", { stdio: "inherit" });
  console.log("\n✅ Git index successfully reconstructed from HEAD!\n");
} catch (err) {
  console.error("Failed to fix git index:", err.message);
}
