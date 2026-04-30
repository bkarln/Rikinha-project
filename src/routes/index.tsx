import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, Handshake, ShieldCheck, TrendingUp, ArrowRight, Globe2, UserRound, ClipboardCheck, Ship, Package } from "lucide-react";
import heroShip from "@/assets/hero-ship.jpg";
import { Section, SectionHeader } from "@/components/Section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JR Consulting — Importe melhor. Compita melhor." },
      { name: "description", content: "Consultoria especializada em importação da China. Buscamos fornecedores, negociamos preços e gerenciamos todo o processo de importação para sua empresa." },
      { property: "og:title", content: "JR Consulting — Importe melhor. Compita melhor." },
      { property: "og:description", content: "Seu consultor e comprador particular para compras internacionais." },
    ],
  }),
  component: HomePage,
});

const benefits = [
  { icon: Search, title: "Busca de Fornecedores", desc: "Encontramos os melhores fornecedores e opções para o seu produto." },
  { icon: Handshake, title: "Negociação Estratégica", desc: "Conseguimos melhores preços, qualidade e condições." },
  { icon: ShieldCheck, title: "Processo Seguro", desc: "Acompanhamos e gerenciamos todo o processo de importação, do início ao fim." },
  { icon: TrendingUp, title: "Mais Economia, Mais Resultados", desc: "Reduzimos custos e aumentamos sua margem de lucro." },
];

const steps = [
  { n: "01", icon: ClipboardCheck, title: "Análise", desc: "Entendemos sua necessidade e objetivos." },
  { n: "02", icon: Search, title: "Pesquisa", desc: "Buscamos e avaliamos fornecedores confiáveis na Ásia." },
  { n: "03", icon: Handshake, title: "Negociação", desc: "Negociamos as melhores condições para o seu negócio." },
  { n: "04", icon: Ship, title: "Importação", desc: "Gerenciamos todo o processo até a chegada da mercadoria." },
  { n: "05", icon: Package, title: "Resultados", desc: "Você recebe seu produto com segurança e faz seu negócio crescer." },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-cream">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold rounded-full blur-3xl"/>
        </div>
        <div className="container mx-auto px-6 lg:px-10 pt-16 lg:pt-24 pb-20 lg:pb-32 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-xs tracking-[0.3em] text-gold mb-6">
                CONECTAMOS OPORTUNIDADES · ENTREGAMOS RESULTADOS
              </span>
              <h1 className="text-5xl lg:text-7xl font-serif font-bold leading-[1.05] text-navy">
                Importe melhor.
                <br />
                <span className="text-gradient-gold">Compita melhor.</span>
              </h1>
              <p className="mt-8 text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl">
                Seu consultor e comprador particular para compras internacionais. Ajudamos sua empresa a importar da China e de outros países com segurança, economia e eficiência.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link to="/contato" className="inline-flex items-center gap-2 bg-navy text-navy-foreground px-7 py-3.5 rounded-md font-medium hover:bg-navy/90 transition-all shadow-elegant">
                  Solicite uma consulta <ArrowRight size={18} />
                </Link>
                <Link to="/servicos" className="inline-flex items-center gap-2 border-2 border-navy/15 text-navy px-7 py-3.5 rounded-md font-medium hover:border-gold hover:text-gold transition-all">
                  Conheça nossos serviços
                </Link>
              </div>

              <div className="mt-14 flex items-start gap-5 max-w-md">
                <div className="shrink-0 w-14 h-14 rounded-full border-2 border-gold/40 flex items-center justify-center text-gold">
                  <UserRound size={26} />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-navy">
                    Nós compramos como se fosse para <span className="text-gold">o nosso negócio.</span>
                  </h3>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-gold rounded-2xl blur-2xl opacity-20"/>
              <img
                src={heroShip}
                alt="Navio cargueiro carregado com containers ao pôr do sol — importação internacional"
                width={1600}
                height={1024}
                className="relative rounded-2xl shadow-elegant w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-cream border border-border rounded-xl p-5 shadow-elegant max-w-[220px] hidden md:block">
                <div className="flex items-center gap-2 text-gold mb-1">
                  <Globe2 size={18} />
                  <span className="text-xs tracking-[0.2em]">GLOBAL</span>
                </div>
                <p className="text-sm font-medium text-navy">Da China ao Brasil, com você em cada etapa.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS — navy band */}
      <Section variant="navy">
        <SectionHeader
          eyebrow="POR QUE A JR CONSULTING"
          title="Tudo que sua importação precisa, em um só lugar."
          subtitle="Da busca pelo fornecedor ideal à entrega no seu negócio — com segurança, transparência e resultado."
          light
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-cream/10 rounded-xl overflow-hidden">
          {benefits.map((b) => (
            <div key={b.title} className="bg-navy p-8 hover:bg-navy/70 transition-colors group">
              <div className="w-14 h-14 rounded-full border-2 border-gold/40 flex items-center justify-center text-gold mb-5 group-hover:bg-gold/10 transition-colors">
                <b.icon size={26} />
              </div>
              <h3 className="font-serif text-xl text-cream mb-3 leading-tight">{b.title}</h3>
              <p className="text-sm text-cream/70 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* PROCESS */}
      <Section variant="cream">
        <SectionHeader
          eyebrow="NOSSO MÉTODO"
          title="Como Trabalhamos"
          subtitle="Cinco etapas claras, do diagnóstico à entrega do produto."
          center
        />
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
          {steps.map((s, i) => (
            <div key={s.n} className="relative text-center">
              <div className="mx-auto w-20 h-20 rounded-full bg-navy flex items-center justify-center text-gold mb-5 shadow-elegant">
                <s.icon size={32} />
              </div>
              <span className="text-xs tracking-[0.25em] text-gold block mb-2">{s.n}</span>
              <h4 className="font-serif text-lg text-navy mb-2">{s.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed px-2">{s.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] border-t-2 border-dashed border-gold/40" />
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* CTA STRIP */}
      <section className="bg-cream pb-24">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="border-2 border-gold/40 rounded-2xl p-8 lg:p-12 grid md:grid-cols-2 gap-10 items-center">
            <div className="flex items-start gap-5">
              <Globe2 className="text-gold shrink-0 mt-1" size={48} strokeWidth={1.3} />
              <div>
                <p className="text-xs tracking-[0.25em] text-navy/60 mb-2">MENOS RISCOS · MENOS CUSTOS</p>
                <h3 className="font-serif text-3xl text-gradient-gold font-bold mb-3">Mais Resultados.</h3>
                <p className="text-muted-foreground">Parceria estratégica para levar seu negócio mais longe.</p>
              </div>
            </div>
            <div className="flex items-start gap-5 md:border-l md:border-gold/30 md:pl-10">
              <UserRound className="text-gold shrink-0 mt-1" size={48} strokeWidth={1.3} />
              <div>
                <p className="text-xs tracking-[0.25em] text-navy/60 mb-2">SEU COMPRADOR E CONSULTOR PARTICULAR</p>
                <h3 className="font-serif text-2xl text-navy font-bold mb-4">Na China e no mundo.</h3>
                <Link to="/contato" className="inline-flex items-center gap-2 bg-gradient-gold text-gold-foreground px-6 py-3 rounded-md font-medium shadow-gold hover:opacity-95">
                  Comece agora <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
