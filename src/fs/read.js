import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, "files", "fileToRead.txt");

const read = async () => {
  try {
    await fs.access(filePath);
    const content = await fs.readFile(filePath, { encoding: "utf8" });
    console.log(content);
  } catch {
    throw new Error("FS operation failed");
  }
};

await read();
