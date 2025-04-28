import path from 'node:path';
import { EOL } from 'node:os';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import { stdout } from 'node:process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
  const stream = fs.createReadStream(filePath, 'utf-8');

  stream.on('data', (chunk) => {
    stdout.write(chunk + EOL);
  });
};

await read();
