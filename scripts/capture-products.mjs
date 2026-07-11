import { existsSync, mkdirSync, rmSync } from 'node:fs';
import { spawn, spawnSync } from 'node:child_process';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const outputDir = resolve(root, 'artifacts/corgiverse-products');
const baseUrl = 'http://127.0.0.1:3000';
const sleep = (ms) => new Promise((resolveSleep) => setTimeout(resolveSleep, ms));
const candidates = [
  process.env.CHROMIUM_PATH,
  '/usr/bin/google-chrome',
  '/usr/bin/google-chrome-stable',
  '/snap/bin/chromium',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
].filter(Boolean);
const chromium = candidates.find(existsSync);
if (!chromium) throw new Error(`Chrome/Chromium was not found. Checked: ${candidates.join(', ')}`);
mkdirSync(outputDir, { recursive: true });

let server;
try {
  server = spawn('npm', ['run', 'start', '--', '-H', '127.0.0.1', '-p', '3000'], { cwd: root, stdio: 'ignore' });
  let ready = false;
  for (let attempt = 0; attempt < 180; attempt += 1) {
    try {
      if ((await fetch(baseUrl)).ok) { ready = true; break; }
    } catch { /* Next is still starting. */ }
    await sleep(100);
  }
  if (!ready) throw new Error('Next did not become ready on port 3000.');

  const captures = [
    { name: 'corgiverse-products-1440x1100.png', width: 1440, height: 1100 },
    { name: 'corgiverse-products-390x844.png', width: 390, height: 844 },
  ];
  for (const capture of captures) {
    const profile = `/tmp/corgiverse-${process.pid}-${capture.width}`;
    rmSync(profile, { recursive: true, force: true });
    const output = resolve(outputDir, capture.name);
    const result = spawnSync(chromium, [
      '--headless=new',
      '--no-sandbox',
      '--disable-gpu',
      '--hide-scrollbars',
      '--force-device-scale-factor=1',
      `--user-data-dir=${profile}`,
      `--window-size=${capture.width},${capture.height}`,
      `--screenshot=${output}`,
      `${baseUrl}/#products`,
    ], { cwd: root, encoding: 'utf8' });
    rmSync(profile, { recursive: true, force: true });
    if (result.status !== 0 || !existsSync(output)) throw new Error(result.stderr || `Capture failed: ${capture.name}`);
    console.log(`PASS ${capture.width}x${capture.height}: ${output}`);
  }
} finally {
  server?.kill('SIGTERM');
}
