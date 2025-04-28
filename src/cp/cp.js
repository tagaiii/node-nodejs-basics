import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { fork } from 'node:child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, 'files', 'script.js');

const spawnChildProcess = async (args) => {
  const child = fork(filePath, args);

  child.on('close', (code) => {
    console.log(`Child process exit code: ${code}`);
    console.log('Killing master process...');
    process.exit(0);
  });
};

spawnChildProcess([1, 2, 3]);
