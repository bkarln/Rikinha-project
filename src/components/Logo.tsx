import { Link } from "@tanstack/react-router";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const color = variant === "dark" ? "text-navy" : "text-cream";
  return (
    <Link to="/" className="flex items-center gap-2 group">
      <div className="flex flex-col leading-none">
        <span className={`font-serif text-3xl font-bold tracking-tight ${color}`}>
          JR
        </span>
        <span className={`text-[10px] tracking-[0.3em] ${variant === "dark" ? "text-navy/70" : "text-cream/70"}`}>
          CONSULTING
        </span>
      </div>
      <svg width="28" height="10" viewBox="0 0 60 12" className="text-gold -ml-1 mt-3">
        <path d="M2 8 Q20 -2 58 6" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      </svg>
    </Link>
  );
}
