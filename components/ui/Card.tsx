export default function Card({ className="", children }:{ className?: string; children: React.ReactNode }) {
  return <div className={`rounded-2xl bg-white/90 border border-white/70 p-6 hover:shadow-gummy transition ${className}`}>{children}</div>;
}
