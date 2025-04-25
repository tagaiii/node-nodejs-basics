import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const srcPath = path.join(__dirname, 'files');
const destPath = path.join(__dirname, 'files_copy');

const copy = async () => {
  try {
    await fs.access(srcPath);

    try {
      await fs.mkdir(destPath);
      await fs.cp(srcPath, destPath, { recursive: true });
    } catch (error) {
      throw error;
    }
  } catch (error) {
    console.error('FS operation failed', error);
  }
};

await copy();
