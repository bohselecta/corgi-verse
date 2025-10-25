export default function Footer(){
  return (
    <footer className="bg-abyss text-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 grid md:grid-cols-4 gap-10">
        <div>
          <div className="inline-flex items-center gap-3">
            <img src="/corgi-verse-logo.png" className="h-10 w-10" alt="" />
            <span className="font-semibold">Corgi-verse Software</span>
          </div>
          <p className="mt-3 text-sm text-cream/70">© {new Date().getFullYear()} Corgi-verse. Built local-first.</p>
        </div>
        <div><h4 className="font-semibold mb-3">Products</h4><ul className="space-y-2 text-cream/80">
          <li><a href="https://mygum.my">Gummy</a></li>
          <li><a href="https://vibecherry.com">VibeCherry</a></li>
          <li><a href="https://cuidado-pagihall.vercel.app/">PAGI Hall</a></li>
          <li><a href="https://altiplano-landing.vercel.app/">Altiplano</a></li>
          <li><a href="https://filecherry-mygummy.vercel.app/">FileCherry</a></li>
        </ul></div>
        <div><h4 className="font-semibold mb-3">Company</h4><ul className="space-y-2 text-cream/80">
          <li><a href="#about">About</a></li><li><a href="mailto:hlindley@outlook.com">Contact</a></li>
        </ul></div>
        <div><h4 className="font-semibold mb-3">Social</h4><ul className="space-y-2 text-cream/80">
          <li><a href="#">Twitter</a></li><li><a href="#">Discord</a></li>
        </ul></div>
      </div>
    </footer>
  );
}
