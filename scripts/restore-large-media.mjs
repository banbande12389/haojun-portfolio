import { createReadStream, existsSync, mkdirSync, writeFileSync, appendFileSync, readFileSync, renameSync, unlinkSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const expected = 'f8691f94f0268f88eb6b19caec03d151a26d09572a2d02f670d1accf7da546ef';
const target = fileURLToPath(new URL('../public/media/work-aigc-animation.mp4', import.meta.url));
const parts = [1, 2, 3, 4].map(number => fileURLToPath(new URL(`../media-parts/work-aigc-animation.mp4.part${String(number).padStart(2, '0')}`, import.meta.url)));

async function sha256(paths) {
  const digest = createHash('sha256');
  for (const path of paths) {
    for await (const chunk of createReadStream(path)) digest.update(chunk);
  }
  return digest.digest('hex');
}

if (await sha256(parts) !== expected) throw new Error('Video parts failed SHA-256 verification.');
if (existsSync(target)) {
  if (await sha256([target]) !== expected) throw new Error('The local video differs from the published parts. Update the parts before publishing.');
  console.log('Original video and all four parts verified.');
} else {
  mkdirSync(dirname(target), { recursive: true });
  const temporary = `${target}.restore.tmp`;
  writeFileSync(temporary, '', { flag: 'wx' });
  try {
    for (const part of parts) appendFileSync(temporary, readFileSync(part));
    if (await sha256([temporary]) !== expected) throw new Error('Restored video failed SHA-256 verification.');
    renameSync(temporary, target);
  } catch (error) {
    if (existsSync(temporary)) unlinkSync(temporary);
    throw error;
  }
  console.log('Original video restored and verified.');
}
