import { createFileRoute } from "@tanstack/react-router";
import { ClipboardCheck, Search, Handshake, Ship, Package } from "lucide-react";
import { Section, SectionHeader } from "@/components/Section";

export const Route = createFileRoute("/processo")({
  head: () => ({
    meta: [
      { title: "Como Trabalhamos — JR Consulting" },
      { name: "description", content: "Conheça as 5 etapas do nosso método de importação: análise, pesquisa, negociação, importação e resultados." },
      { property: "og:title", content: "Nosso processo de importação — JR Consulting" },
      { property: "og:description", content: "Cinco etapas claras para importar com segurança e economia." },
    ],
  }),
  component: ProcessPage,
});

const steps = [
  { n: "01", icon: ClipboardCheck, title: "Análise", desc: "Conhecemos profundamente o seu negócio, seus produtos, volumes e objetivos. Identificamos onde a importação pode gerar mais resultado.", details: ["Diagnóstico de necessidade", "Estudo de viabilidade", "Definição de KPIs"] },
  { n: "02", icon: Search, title: "Pesquisa", desc: "Buscamos e avaliamos fornecedores confiáveis na Ásia, comparando preço, qualidade, capacidade produtiva e certificações.", details: ["Sourcing estratégico", "Auditoria de fornecedores", "Amostras e testes"] },
  { n: "03", icon: Handshake, title: "Negociação", desc: "Atuamos como seu representante na China, conseguindo as melhores condições comerciais, prazos e formas de pagamento.", details: ["Negociação de preços", "Contratos e garantias", "Termos Incoterms"] },
  { n: "04", icon: Ship, title: "Importação", desc: "Gerenciamos toda a operação logística internacional, do embarque ao desembaraço aduaneiro no Brasil.", details: ["Logística e frete", "Despacho aduaneiro", "Acompanhamento em tempo real"] },
  { n: "05", icon: Package, title: "Resultados", desc: "Você recebe seu produto com segurança, no prazo combinado, e com a economia que sua empresa precisa para crescer.", details: ["Entrega no destino", "Pós-venda", "Plano de recompra"] },
];

function ProcessPage() {
  return (
    <>
      <Section variant="navy" className="!pt-32">
        <div className="max-w-3xl">
          <span className="text-xs tracking-[0.3em] text-gold">NOSSO MÉTODO</span>
          <h1 className="text-5xl lg:text-6xl font-serif font-bold text-cream mt-4 leading-tight">
            Como <span className="text-gradient-gold">trabalhamos.</span>
          </h1>
          <p className="text-lg text-cream/75 mt-6 leading-relaxed">
            Um processo testado e refinado em centenas de operações de importação. Transparente, seguro e focado em resultado.
          </p>
        </div>
      </Section>

      <Section variant="cream">
        <div className="space-y-12 max-w-5xl mx-auto">
          {steps.map((s, i) => (
            <div key={s.n} className="grid md:grid-cols-[auto,1fr] gap-8 items-start">
              <div className="flex md:flex-col items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-navy flex items-center justify-center text-gold shadow-elegant shrink-0">
                  <s.icon size={32} />
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:block w-px h-20 bg-gradient-to-b from-gold/60 to-transparent mx-auto" />
                )}
              </div>
              <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="text-gold font-serif text-2xl font-bold">{s.n}</span>
                  <h3 className="font-serif text-2xl text-navy">{s.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-5">{s.desc}</p>
                <ul className="grid sm:grid-cols-3 gap-2">
                  {s.details.map((d) => (
                    <li key={d} className="text-sm text-navy/80 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold" /> {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
