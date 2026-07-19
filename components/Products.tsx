"use client";
import Button from "@/components/ui/Button";

function DarkCard({children, className=""}:{children:React.ReactNode; className?:string}) {
  return <div className={`glass-dark p-6 rounded-2xl shadow-abyss hover:shadow-neon transition ${className}`}>{children}</div>;
}

export default function Products(){
  return (
    <section id="products" className="mx-auto max-w-7xl px-6 md:px-8 py-20">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.22em] text-cyanCandy">Corgi-Verse Software</p>
        <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-cream">Playful software with real machinery inside.</h2>
        <p className="mt-4 text-cream/70 text-lg">Public products, working local tools, and a few rooms that are still being built honestly.</p>
      </div>

      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* SongSesh */}
        <DarkCard className="relative overflow-hidden md:col-span-2 lg:col-span-2 border-fuchsia-400/30">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(31,182,255,.16),transparent_32%),radial-gradient(circle_at_82%_82%,rgba(255,53,212,.16),transparent_36%),linear-gradient(135deg,rgba(255,159,28,.05),transparent_45%)]" />
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <img src="/songsesh-symbol.svg" alt="SongSesh crossfade record symbol" className="h-24 w-24 object-contain drop-shadow-[0_0_24px_rgba(255,53,212,.28)]" />
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-2xl md:text-3xl font-semibold text-cream">SongSesh</h3>
                <span className="rounded-full border border-fuchsia-300/30 bg-fuchsia-400/10 px-3 py-1 text-xs font-semibold tracking-[0.16em] text-fuchsia-200">LOCAL ALPHA</span>
              </div>
              <p className="mt-2 text-sm uppercase tracking-[0.18em] text-amber-200/80">AI-assisted DJ transition workstation</p>
              <p className="mt-4 text-cream/80 max-w-3xl">Load two tracks, let Gamma map the blend, rehearse or perform it, and export the accepted transition as a local WAV with a proof receipt. SongSesh works offline first and can accept generated tracks from POLYGLYPH through a small, explicit Crate Drop.</p>
              <div className="mt-5 flex flex-wrap gap-2 text-xs text-cream/60">
                <span className="rounded-full border border-white/10 px-3 py-1.5">Two-deck audio</span>
                <span className="rounded-full border border-white/10 px-3 py-1.5">Gamma transition plans</span>
                <span className="rounded-full border border-white/10 px-3 py-1.5">Local mixdown</span>
                <span className="rounded-full border border-white/10 px-3 py-1.5">POLYGLYPH handoff</span>
              </div>
              <p className="mt-5 text-sm text-cream/55">Private desktop alpha. Final Mac listening and packaging are still in progress; no public download is claimed here.</p>
            </div>
          </div>
        </DarkCard>

        {/* Gummy */}
        <DarkCard>
          <div className="flex items-start gap-5">
            <img src="/images/red-gummy-bear.png" alt="Gummy" className="h-16 w-16 object-contain" />
            <div>
              <h3 className="text-xl font-semibold text-cream">Gummy — Local LLM, shared securely</h3>
              <p className="mt-2 text-cream/75">Host your own AI with Ollama and share a public link—time-limited, private, fast.</p>
              <div className="mt-4 flex gap-3">
                <Button variant="cyan" onClick={()=>location.href="https://mygum.my"}>Visit mygum.my</Button>
              </div>
            </div>
          </div>
        </DarkCard>

        {/* VibeCherry */}
        <DarkCard>
          <div className="flex items-start gap-5">
            <img src="/images/vibecherry-logo.png" alt="VibeCherry" className="h-16 w-16 object-contain" />
            <div>
              <h3 className="text-xl font-semibold text-cream">VibeCherry — Desktop vibe coder for Mac</h3>
              <p className="mt-2 text-cream/75">Local-first creative coding environment powered by Ollama. Flow-friendly, fast.</p>
              <div className="mt-4 flex gap-3">
                <Button variant="primaryDark" onClick={()=>location.href="https://vibecherry.com"}>Visit vibecherry.com</Button>
              </div>
            </div>
          </div>
        </DarkCard>

        {/* PAGI Hall */}
        <DarkCard>
          <div className="flex items-start gap-5">
            <img src="/images/pagi-logo.svg" alt="PAGI Hall" className="h-16 w-16 object-contain" />
            <div>
              <h3 className="text-xl font-semibold text-cream">PAGI Hall — Civic AI conversations</h3>
              <p className="mt-2 text-cream/75">A quiet internet inside a villa where your digital cloak listens, speaks, and learns alongside you.</p>
              <div className="mt-4 flex gap-3">
                <Button variant="cyan" onClick={()=>location.href="https://cuidado-pagihall.vercel.app/"}>Visit PAGI Hall</Button>
              </div>
            </div>
          </div>
        </DarkCard>

        {/* Altiplano */}
        <DarkCard>
          <div className="flex items-start gap-5">
            <img src="/images/altiplano-logo.svg" alt="Altiplano" className="h-16 w-16 object-contain" />
            <div>
              <h3 className="text-xl font-semibold text-cream">Altiplano — Knowledge search engine</h3>
              <p className="mt-2 text-cream/75">Search your knowledge, not the web. Private AI-powered search with advanced guardrails and confidence scores.</p>
              <div className="mt-4 flex gap-3">
                <Button variant="primaryDark" onClick={()=>location.href="https://altiplano-landing.vercel.app/"}>Visit Altiplano</Button>
              </div>
            </div>
          </div>
        </DarkCard>

        {/* FileCherry */}
        <DarkCard>
          <div className="flex items-start gap-5">
            <img src="/images/filecherry-logo.png" alt="FileCherry" className="h-16 w-16 object-contain" />
            <div>
              <h3 className="text-xl font-semibold text-cream">FileCherry — File management made simple</h3>
              <p className="mt-2 text-cream/75">Streamlined file organization and management tools for the modern workspace.</p>
              <div className="mt-4 flex gap-3">
                <Button variant="cyan" onClick={()=>location.href="https://filecherry-mygummy.vercel.app/"}>Visit FileCherry</Button>
              </div>
            </div>
          </div>
        </DarkCard>
      </div>
    </section>
  );
}
