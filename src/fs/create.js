import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const filePath = path.join(__dirname, 'files', 'fresh.txt');
const str = 'I am fresh and young';

const create = async () => {
  try {
    await fs.writeFile(filePath, str, { flag: 'wx' });
    console.log('File is created!');
  } catch (error) {
    console.error('FS operation failed', error);
  }
};

await create();
