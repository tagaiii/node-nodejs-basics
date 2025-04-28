import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import { stdin } from 'node:process';
import { EOL } from 'node:os';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, 'files', 'fileToWrite.txt');

stdin.setEncoding('utf-8');

const write = async () => {
  const writableStream = fs.createWriteStream(filePath, 'utf-8');

  stdin.on('data', (data) => {
    const input = data.trim();

    if (input === 'exit') {
      process.exit();
    }
    writableStream.write(input + EOL);
  });
};

await write();
