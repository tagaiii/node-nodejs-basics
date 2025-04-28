import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const srcPath = path.join(__dirname, "files");
const destPath = path.join(__dirname, "files_copy");

const copy = async () => {
  try {
    await fs.access(srcPath);
    await fs.mkdir(destPath);
    await fs.cp(srcPath, destPath, { recursive: true });
  } catch {
    throw new Error("FS operation failed");
  }
};

await copy();
