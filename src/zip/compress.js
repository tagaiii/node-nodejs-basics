import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import { pipeline } from 'node:stream/promises';
import zlib from 'node:zlib';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const srcPath = path.join(__dirname, 'files', 'fileToCompress.txt');
const destPath = path.join(__dirname, 'files', 'archive.gz');

const compress = async () => {
  const gzip = zlib.createGunzip();
  const src = fs.createReadStream(srcPath);
  const dest = fs.createWriteStream(destPath);

  await pipeline(src, gzip, dest);
};

await compress();
