import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Worker } from 'node:worker_threads';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, 'worker.js');
const cpus = os.cpus().length;

const performCalculations = async () => {
  const resultPromises = [];

  for (let i = 0; i < cpus; i += 1) {
    const promise = new Promise((resolve, reject) => {
      const worker = new Worker(filePath, { workerData: i + 10 });

      worker.on('message', (result) => {
        resolve(result);
      });

      worker.on('error', (err) => {
        reject(err);
      });
    });

    resultPromises.push(promise);
  }
  resultPromises.push(
    new Promise((resolve, reject) => {
      const worker = new Worker(filePath, { workerData: 'abc' });

      worker.on('message', (result) => {
        resolve(result);
      });

      worker.on('error', (err) => {
        reject(err);
      });
    })
  );

  const results = await Promise.all(resultPromises);
  console.log('Results:', results);
};

await performCalculations();
