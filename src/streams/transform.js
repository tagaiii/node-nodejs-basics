import { stdin, stdout } from 'node:process';
import { Transform } from 'node:stream';
import { pipeline } from 'node:stream/promises';
import { EOL } from 'node:os';

console.log('Enter a string to reverse...');
console.log('Type "exit" to quit');
const reverse = new Transform({
  transform(chunk, encoding, callback) {
    if (chunk.toString().trim() === 'exit') {
      process.exit();
    }
    this.push(chunk.toString().split('').reverse().join('') + EOL);
    callback();
  },
});

const transform = async () => {
  await pipeline(stdin, reverse, stdout);
};

await transform();
