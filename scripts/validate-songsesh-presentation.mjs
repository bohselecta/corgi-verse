import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const [products, readme, symbol] = await Promise.all([
  readFile(new URL('components/Products.tsx', root), 'utf8'),
  readFile(new URL('README.md', root), 'utf8'),
  readFile(new URL('public/songsesh-symbol.svg', root)),
]);

const symbolHash = createHash('sha256').update(symbol).digest('hex');
assert.equal(
  symbolHash,
  '9cfeaae5c8fe69f005cbd05a9aee4c12c35c593deaa975f2647b1923be64d956',
  'SongSesh symbol must match the canonical Phase 7 asset',
);

const songSeshCard = products.match(/\{\/\* SongSesh \*\/\}[\s\S]*?\{\/\* Gummy \*\/\}/u)?.[0] ?? '';
assert.ok(songSeshCard, 'SongSesh product card is missing');
assert.match(songSeshCard, />SongSesh</u, 'public name is missing');
assert.match(songSeshCard, /LOCAL ALPHA/u, 'local-alpha status is missing');
assert.match(songSeshCard, /Gamma transition plans/u, 'Gamma role is missing');
assert.match(songSeshCard, /POLYGLYPH handoff/u, 'handoff boundary is missing');
assert.match(songSeshCard, /no public download is claimed here/u, 'download truth is missing');
assert.doesNotMatch(songSeshCard, /href=|Download SongSesh|Suno generation is live/iu, 'card exposes a launch/provider claim');

assert.match(readme, /canonical application source is `bohselecta\/songseshapp`/u);
assert.match(readme, /does not claim a public download/u);
assert.match(readme, /does not claim.*live Suno generation/u);
assert.match(readme, /final listening acceptance/u);
assert.doesNotMatch(readme, /canonical application repository is private/iu);

console.log(`SongSesh presentation: PASS (${symbolHash})`);
