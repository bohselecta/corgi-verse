"use client";
import Button from "@/components/ui/Button";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-night/60 backdrop-blur border-b border-white/10">
      <nav className="mx-auto max-w-7xl h-20 px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/images/corgi-verse-graphic-logo.png" alt="Corgi-verse" className="h-9 w-9 logo-outline" />
          <span className="text-2xl font-extrabold text-cream">Corgi-verse Software</span>
        </div>
        <ul className="hidden md:flex items-center gap-7 text-cream/70">
          <li><a className="hover:text-cream" href="#products">Products</a></li>
          <li><a className="hover:text-cream" href="#about">About</a></li>
        </ul>
        <div className="hidden md:flex gap-3">
          <Button variant="outlineDark" onClick={()=>location.href="https://mygum.my"}>Try Gummy</Button>
          <Button variant="primaryDark" onClick={()=>location.href="https://vibecherry.com"}>Download VibeCherry</Button>
        </div>
      </nav>
    </header>
  );
}
