import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionHeader } from "@/components/Section";
import { ArrowRight, Award, Users, Globe2 } from "lucide-react";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — JR Consulting" },
      { name: "description", content: "A JR Consulting conecta empresas brasileiras aos melhores fornecedores internacionais. Conheça nossa história e valores." },
      { property: "og:title", content: "Sobre a JR Consulting" },
      { property: "og:description", content: "Conectamos oportunidades. Entregamos resultados." },
    ],
  }),
  component: AboutPage,
});

const stats = [
  { icon: Globe2, n: "+15", label: "Países parceiros" },
  { icon: Users, n: "+200", label: "Empresas atendidas" },
  { icon: Award, n: "+10 anos", label: "De experiência em importação" },
];

function AboutPage() {
  return (
    <>
      <Section variant="navy" className="!pt-32">
        <div className="max-w-3xl">
          <span className="text-xs tracking-[0.3em] text-gold">QUEM SOMOS</span>
          <h1 className="text-5xl lg:text-6xl font-serif font-bold text-cream mt-4 leading-tight">
            Conectamos oportunidades. <span className="text-gradient-gold">Entregamos resultados.</span>
          </h1>
          <p className="text-lg text-cream/75 mt-6 leading-relaxed">
            A JR Consulting nasceu para resolver um problema real: a complexidade e o risco de importar da China sem ter quem cuide do processo de ponta a ponta.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <SectionHeader eyebrow="NOSSA MISSÃO" title="Compramos como se fosse para o nosso negócio." />
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Tratamos cada operação dos nossos clientes com o mesmo cuidado, rigor e estratégia que aplicaríamos em uma compra própria. Esse é o nosso compromisso.</p>
              <p>Atuamos como uma extensão do seu time: investigamos fornecedores, negociamos condições, acompanhamos a produção e garantimos que a mercadoria chegue até você com segurança.</p>
              <p>Mais do que um intermediário, somos seu consultor estratégico para crescer no mercado global.</p>
            </div>
          </div>

          <div className="grid gap-6">
            {stats.map((s) => (
              <div key={s.label} className="flex items-center gap-6 bg-card border border-border rounded-xl p-6 hover:border-gold transition-colors">
                <div className="w-16 h-16 rounded-full bg-navy flex items-center justify-center text-gold shrink-0">
                  <s.icon size={28} />
                </div>
                <div>
                  <div className="font-serif text-3xl font-bold text-navy">{s.n}</div>
                  <div className="text-sm text-muted-foreground">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section variant="cream" className="!py-16">
        <div className="text-center">
          <h2 className="font-serif text-3xl lg:text-4xl text-navy mb-6">Pronto para importar melhor?</h2>
          <Link to="/contato" className="inline-flex items-center gap-2 bg-navy text-navy-foreground px-7 py-3.5 rounded-md font-medium hover:bg-navy/90 shadow-elegant">
            Fale com a JR <ArrowRight size={18} />
          </Link>
        </div>
      </Section>
    </>
  );
}
