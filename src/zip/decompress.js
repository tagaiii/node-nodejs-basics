import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import { pipeline } from 'node:stream/promises';
import zlib from 'node:zlib';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const srcPath = path.join(__dirname, 'files', 'archive.gz');
const destPath = path.join(__dirname, 'files', 'fileToCompress.txt');

const decompress = async () => {
  const gunzip = zlib.createGunzip();
  const src = fs.createReadStream(srcPath);
  const dest = fs.createWriteStream(destPath);

  await pipeline(src, gunzip, dest);
};

await decompress();
