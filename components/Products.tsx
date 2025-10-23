"use client";
import Button from "@/components/ui/Button";
import { Share2, Code } from "lucide-react";

function DarkCard({children}:{children:React.ReactNode}) {
  return <div className="glass-dark p-6 rounded-2xl shadow-abyss hover:shadow-neon transition">{children}</div>;
}

export default function Products(){
  return (
    <section id="products" className="mx-auto max-w-7xl px-6 md:px-8 py-20">
      <h2 className="text-3xl md:text-5xl font-extrabold text-cream">Products</h2>

      <div className="mt-10 grid md:grid-cols-2 gap-6">
        <DarkCard>
          <div className="flex items-start gap-5">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-cyanCandy to-blueRaspberry text-night flex items-center justify-center shadow-neon">
              <img src="/images/red-gummy-bear.png" alt="Gummy" className="h-8 w-8 object-contain" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-cream">Gummy — Local LLM, shared securely</h3>
              <p className="mt-2 text-cream/75">Host your own AI with Ollama and share a public link—time-limited, private, fast.</p>
              <div className="mt-4 flex gap-3">
                <Button variant="cyan" onClick={()=>location.href="https://mygum.my"}>Visit mygum.my</Button>
              </div>
            </div>
          </div>
        </DarkCard>

        <DarkCard>
          <div className="flex items-start gap-5">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-strawberry to-grape text-white flex items-center justify-center shadow-neon">
              <img src="/images/vibecherry-logo.png" alt="VibeCherry" className="h-8 w-8 object-contain" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-cream">VibeCherry — Desktop vibe coder for Mac</h3>
              <p className="mt-2 text-cream/75">Local-first creative coding environment powered by Ollama. Flow-friendly, fast.</p>
              <div className="mt-4 flex gap-3">
                <Button variant="primaryDark" onClick={()=>location.href="https://vibecherry.com"}>Visit vibecherry.com</Button>
              </div>
            </div>
          </div>
        </DarkCard>
      </div>
    </section>
  );
}
