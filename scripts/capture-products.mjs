import { existsSync, mkdirSync } from 'node:fs';
import { spawn } from 'node:child_process';
import { resolve } from 'node:path';
import { chromium } from 'playwright';

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
const executablePath = candidates.find(existsSync);

if (!executablePath) {
  throw new Error(`Chrome/Chromium was not found. Checked: ${candidates.join(', ')}`);
}

mkdirSync(outputDir, { recursive: true });

let server;
let browser;
try {
  server = spawn('npm', ['run', 'start', '--', '-H', '127.0.0.1', '-p', '3000'], {
    cwd: root,
    stdio: 'ignore',
  });

  let ready = false;
  for (let attempt = 0; attempt < 180; attempt += 1) {
    try {
      if ((await fetch(baseUrl)).ok) {
        ready = true;
        break;
      }
    } catch {
      // Next is still starting.
    }
    await sleep(100);
  }
  if (!ready) throw new Error('Next did not become ready on port 3000.');

  browser = await chromium.launch({ headless: true, executablePath });
  const captures = [
    { name: 'corgiverse-products-1440x1100.png', width: 1440, height: 1100 },
    { name: 'corgiverse-products-390x844.png', width: 390, height: 844 },
  ];

  for (const capture of captures) {
    const context = await browser.newContext({
      viewport: { width: capture.width, height: capture.height },
      deviceScaleFactor: 1,
    });
    const page = await context.newPage();
    await page.goto(baseUrl, { waitUntil: 'domcontentloaded', timeout: 60_000 });
    await page.evaluate(() =>
      Promise.race([
        document.fonts.ready,
        new Promise((resolveWait) => window.setTimeout(resolveWait, 5_000)),
      ]),
    );
    await page.addStyleTag({ content: 'header { display: none !important; }' });

    const productShelf = page.locator('#products');
    await productShelf.waitFor({ state: 'visible', timeout: 15_000 });
    await productShelf.screenshot({
      path: resolve(outputDir, capture.name),
      animations: 'disabled',
    });
    await context.close();
    console.log(`PASS ${capture.width}px product shelf: ${resolve(outputDir, capture.name)}`);
  }
} finally {
  await browser?.close();
  server?.kill('SIGTERM');
}
