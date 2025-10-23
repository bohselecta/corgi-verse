"use client";
import clsx from "clsx";
type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primaryDark"|"outlineDark"|"cyan"|"ghost";
};
export default function Button({ variant="primaryDark", className, ...props }: Props) {
  const base = "inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500";
  const style =
    variant==="primaryDark" ? "bg-gradient-to-r from-strawberry to-grape text-white hover:-translate-y-0.5 hover:shadow-neon"
  : variant==="outlineDark" ? "border border-white/20 text-cream/90 hover:bg-white/5"
  : variant==="cyan"        ? "bg-gradient-to-r from-cyanCandy to-blueRaspberry text-night hover:-translate-y-0.5 hover:shadow-neon"
  : "text-cream/70 hover:text-cream";
  return <button {...props} className={clsx(base, style, className)} />;
}
