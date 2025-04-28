import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filesFolder = path.join(__dirname, "files");

const list = async () => {
  try {
    await fs.access(filesFolder);
    const files = await fs.readdir(filesFolder);

    for (const file of files) {
      const filePath = path.join(filesFolder, file);
      const fileStats = await fs.stat(filePath);
      if (fileStats.isFile()) {
        const fileName = path.basename(file, path.extname(file));
        console.log(fileName);
      }
    }
  } catch {
    throw new Error("FS operation failed");
  }
};

await list();
