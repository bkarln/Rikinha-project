import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { to: "/", label: "Início" },
  { to: "/servicos", label: "Serviços" },
  { to: "/processo", label: "Como Trabalhamos" },
  { to: "/sobre", label: "Sobre" },
  { to: "/blog", label: "Blog" },
  { to: "/contato", label: "Contato" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/85 backdrop-blur-md border-b border-border/60">
      <div className="container mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        <Logo />

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-navy/80 hover:text-navy transition-colors relative"
              activeProps={{ className: "text-navy after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-0.5 after:bg-gold" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contato"
          className="hidden lg:inline-flex items-center gap-2 bg-navy text-navy-foreground px-5 py-2.5 rounded-md text-sm font-medium hover:bg-navy/90 transition-all hover:shadow-elegant"
        >
          Fale com a JR
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-navy p-2"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-cream">
          <nav className="container mx-auto px-6 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-navy py-2 text-sm font-medium"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contato"
              onClick={() => setOpen(false)}
              className="bg-navy text-navy-foreground px-5 py-3 rounded-md text-sm font-medium text-center mt-2"
            >
              Fale com a JR
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
