import { Link } from "@tanstack/react-router";
import { Globe, Phone, Mail, MapPin } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="container mx-auto px-6 lg:px-10 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="bg-cream/95 inline-block px-4 py-3 rounded-md mb-5">
              <Logo />
            </div>
            <p className="text-cream/70 text-sm leading-relaxed">
              Conectamos oportunidades. Entregamos resultados.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-3">
              <Globe className="text-gold" size={20} />
              <h4 className="font-serif text-lg text-cream">Atuação Global</h4>
            </div>
            <p className="text-cream/70 text-sm">
              China e outros países com os melhores fornecedores.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-3">
              <Phone className="text-gold" size={20} />
              <h4 className="font-serif text-lg text-cream">Contato</h4>
            </div>
            <p className="text-cream/70 text-sm">+55 (11) 9 0000-0000</p>
            <p className="text-cream/70 text-sm flex items-center gap-2 mt-1">
              <Mail size={14} />
              <span>contato@jrconsulting.com.br</span>
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-3">
              <MapPin className="text-gold" size={20} />
              <h4 className="font-serif text-lg text-cream">Onde Você Estiver</h4>
            </div>
            <p className="text-cream/70 text-sm">
              Atendemos empresas em todo o Brasil.
            </p>
          </div>
        </div>

        <div className="border-t border-cream/10 mt-12 pt-6 flex flex-col md:flex-row justify-between gap-4 text-xs text-cream/50">
          <p>© {new Date().getFullYear()} JR Consulting. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <Link to="/servicos" className="hover:text-gold">Serviços</Link>
            <Link to="/blog" className="hover:text-gold">Blog</Link>
            <Link to="/contato" className="hover:text-gold">Contato</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
