# Corgi-Verse Software Landing Page

A candy-tech Next.js and Tailwind landing page for **Corgi-Verse Software**, the human-facing and playful software family in the Glyphd ecosystem.

## Product shelf

The site distinguishes public products from working internal software rather than treating every card as a launch claim.

### SongSesh — local alpha

SongSesh is the nightclub wing of Corgi-Verse Software: a local-first AI-assisted DJ transition workstation where Gamma helps the user analyze two tracks, rehearse or perform an accepted blend, and export a local WAV with a proof receipt.

The Corgi-Verse card is intentionally labeled **LOCAL ALPHA**. It does not claim a public download, live Suno generation, completed macOS signing/notarization, or final listening acceptance. The canonical application repository is private: `bohselecta/songseshapp`.

SongSesh can accept a local `songsesh.crate-drop.v1` package from POLYGLYPH or another authorized tool and can export a provider-neutral music-generation request. Provider routing, credentials, Cost Shield, and generation receipts remain outside the landing site.

## Features

- Candy-tech design with vibrant gradients and playful animations
- Custom Tailwind theme with strawberry, grape, and blue-raspberry palette
- Fully responsive layout
- Next.js App Router foundation
- Local-first philosophy and truthfully labeled product states

## Local development

```bash
npm install
npm run dev
npm run build
```

Open `http://localhost:3000` after starting the development server.

## Tech stack

- Next.js 14 with App Router
- Tailwind CSS
- TypeScript
- Lucide React icons
- clsx

## Truth boundary

- Corgi-Verse is the software-family presentation surface, not the Zeke Account or Command Center.
- A product card must identify whether software is public, local/internal, or still being built.
- No private repository, provider credential, or user audio belongs in this site.
