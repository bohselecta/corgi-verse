export default function Philosophy(){
  return (
    <section id="philosophy" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-strawberry/14 via-grape/12 to-blueRaspberry/14" />
      <div className="mx-auto max-w-7xl px-6 md:px-8 py-20">
        <h2 className="text-3xl md:text-5xl font-extrabold text-ink">Our Approach</h2>
        <p className="mt-6 text-ink/80 max-w-3xl text-lg">
          We build software that feels like a toy and performs like a tool.
          Local engines keep your data yours; vibrant design keeps you in flow.
          No cloud lock-in. No mystery bills. Just creative speed.
        </p>
      </div>
    </section>
  );
}
