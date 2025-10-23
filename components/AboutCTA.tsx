"use client";
import Button from "@/components/ui/Button";

export default function AboutCTA(){
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 md:px-8 py-20">
      <div className="grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-5">
          <img 
            src="/images/profile-pic.png" 
            alt="Hayden Lindley" 
            className="h-52 w-52 rounded-3xl object-cover shadow-neon" 
          />
        </div>
        <div className="lg:col-span-7">
          <h2 className="text-3xl md:text-5xl font-extrabold text-cream">Hey, I&apos;m Hayden Lindley.</h2>
          <p className="mt-4 text-cream/80 text-lg">
            Designer-builder behind Corgi-verse. Portfolio:{" "}
            <a className="underline decoration-strawberry decoration-2" href="https://corgfolio.com" target="_blank">corgfolio.com</a>.
          </p>
          <div className="mt-6 flex gap-3">
            <Button variant="primaryDark" onClick={()=>location.href="mailto:hlindley@outlook.com"}>Contact</Button>
            <Button variant="outlineDark" onClick={()=>location.href="https://corgfolio.com"}>View Portfolio</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
