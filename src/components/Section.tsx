import { ReactNode } from "react";

export function Section({
  children,
  className = "",
  variant = "default",
}: {
  children: ReactNode;
  className?: string;
  variant?: "default" | "navy" | "cream";
}) {
  const bg = {
    default: "bg-background",
    navy: "bg-gradient-navy text-navy-foreground",
    cream: "bg-cream",
  }[variant];
  return (
    <section className={`${bg} py-20 lg:py-28 ${className}`}>
      <div className="container mx-auto px-6 lg:px-10">{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  light = false,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`mb-14 ${center ? "text-center mx-auto max-w-2xl" : "max-w-3xl"}`}>
      {eyebrow && (
        <span className={`inline-block text-xs tracking-[0.3em] mb-4 ${light ? "text-gold" : "text-gold"}`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`text-4xl lg:text-5xl font-bold gold-underline ${center ? "gold-underline-center" : ""} ${light ? "text-cream" : "text-navy"} pb-3`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-8 text-lg leading-relaxed ${light ? "text-cream/75" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
