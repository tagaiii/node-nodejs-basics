import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, "files", "fileToRemove.txt");

const remove = async () => {
  try {
    await fs.access(filePath);
    await fs.rm(filePath);
  } catch {
    throw new Error("FS operation failed");
  }
};

await remove();
