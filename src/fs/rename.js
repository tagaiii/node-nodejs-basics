import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, 'files', 'wrongFilename.txt');
const newFilePath = path.join(__dirname, 'files', 'properFilename.md');

const rename = async () => {
  try {
    await fs.access(filePath);

    try {
      await fs.access(newFilePath);
      throw new Error('Target file already exists!');
    } catch (error) {
      if (error.code !== 'ENOENT') {
        throw error;
      }
      await fs.rename(filePath, newFilePath);
    }
  } catch (error) {
    console.error('FS operation failed', error);
  }
};

await rename();
