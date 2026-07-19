# R1 — SongSesh Corgi-Verse presentation

Status: PASS — draft review boundary

## Preserved work

This branch preserves all six commits from `chatgpt/corgiverse-songsesh-alpha` at `df199161abf1b73979fa7d1b395a94a6a207828f` and adds one bounded hardening commit. It does not recreate or modify the canonical SongSesh desktop application.

The Corgi-Verse product shelf now presents SongSesh as a truthful **LOCAL ALPHA** with:

- the byte-exact canonical Phase 7 symbol;
- Gamma's AI-assisted transition-planning role;
- local two-deck, mixdown, proof-receipt, and Crate Drop language;
- an explicit no-public-download boundary;
- no provider, Suno, signing/notarization, final-listening, or release claim.

## Source alignment

- canonical app repository: `bohselecta/songseshapp`
- accepted source under review: PR #3 at `1a14bf119a8f542962f17515160e5f924c698f9d`
- PR #3 hosted checks: tests/build PASS; Rust check PASS; Phase 7 visual evidence PASS
- canonical symbol SHA-256: `9cfeaae5c8fe69f005cbd05a9aee4c12c35c593deaa975f2647b1923be64d956`
- final two-track Mac listening remains founder-owned and is not claimed here

## Hardening

- corrected source visibility wording so it is not confused with release/download availability;
- upgraded Next from vulnerable `14.0.0` to proven `15.5.19`;
- aligned `eslint-config-next` at `15.5.19`;
- forced the full resolved tree to PostCSS `8.5.16`;
- added the declared Playwright runtime used by visual CI;
- added a canonical-hash and copy-boundary validator to local and hosted gates;
- replaced timing-dependent viewport capture with an exact `#products` element capture at desktop and mobile widths.

## Verification

- clean install: PASS
- SongSesh presentation validator: PASS
- production build: 4 static routes PASS
- lint: PASS, 0 warnings/errors
- `npm audit --audit-level=low`: 0 vulnerabilities
- React quality review: PASS; no new hook, state, hydration, list-key, or accessibility defect
- desktop product-shelf visual review: PASS; SHA-256 `aea270518f6925f56e44f9d7c3bbca6c1a1a572a145e88a4217920364b32035f`
- mobile product-shelf visual review: PASS; SHA-256 `d0787773e0d438fed3a0c7bc7533a99ab60ba22c91844d35da9f434dbbc36060`
- `git diff --check`: PASS

## Freeze

- rollback anchor: `3ce08c192cde80073d8897fba03ab0ee7dbfb92d`
- inherited presentation head: `df199161abf1b73979fa7d1b395a94a6a207828f`
- implementation: `ca8084cf1e1aa91cfa0fd2a132b35d07d8566b3c`
- branch: `codex/r1-songsesh-presentation`

No merge, deployment, public artifact, or app-listening acceptance is part of this receipt.
