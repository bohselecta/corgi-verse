"use client";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* neon mist */}
      <div className="absolute inset-0 -z-30 bg-gradient-to-br from-grape/25 via-blueRaspberry/15 to-strawberry/25" />
      <div className="absolute inset-0 -z-20 opacity-25 animate-pan"
           style={{ backgroundImage: "url(/images/gummy-mesh.svg)", backgroundSize: "1600px 1600px" }} />
      {/* subtle vignette for contrast */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,.35)_75%,rgba(0,0,0,.55)_100%)]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-8 py-20 md:py-28 grid lg:grid-cols-12 gap-10 items-center">
        {/* Copy */}
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-white/10 text-cream/90">
            🐾 Independent software studio — local-first, candy-tech
          </span>
          <h1 className="mt-6 [text-wrap:balance] font-extrabold leading-tight">
            <span className="block text-gradient text-5xl md:text-7xl">Playful by design.</span>
            <span className="block text-4xl md:text-6xl text-cream">Powerful in practice.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-cream/80 max-w-2xl">
            We build polished tools that run on your machine and share to the world—no lock-in, no mystery bills.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button variant="primaryDark" onClick={()=>location.href="#products"}>Explore Products</Button>
            <Button variant="outlineDark" onClick={()=>location.href="#about"}>Meet Hayden</Button>
          </div>
        </div>

        {/* Logo hero */}
        <div className="lg:col-span-5 relative">
          <div className="glass-dark p-6 rounded-3xl shadow-abyss">
            <Image
              src="/corgi-verse-logo.png"
              alt="Corgi-verse emblem"
              width={560}
              height={560}
              className="w-full h-auto animate-float drop-shadow-[0_30px_80px_rgba(124,58,237,.45)] [filter:drop-shadow(0_0_0_3px_#22D3EE)]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
