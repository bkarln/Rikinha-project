import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, Handshake, ShieldCheck, TrendingUp, Plane, FileSearch, ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/Section";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — JR Consulting" },
      { name: "description", content: "Busca de fornecedores, negociação estratégica, gestão de importação e consultoria internacional para empresas brasileiras." },
      { property: "og:title", content: "Serviços de Importação — JR Consulting" },
      { property: "og:description", content: "Da busca de fornecedores à entrega no Brasil. Conheça os serviços da JR Consulting." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Search, title: "Busca de Fornecedores", desc: "Mapeamos e avaliamos fornecedores na China e Ásia, garantindo qualidade, capacidade e confiabilidade." },
  { icon: Handshake, title: "Negociação Estratégica", desc: "Atuamos na linha de frente para conseguir os melhores preços, prazos e condições comerciais." },
  { icon: ShieldCheck, title: "Gestão de Processo Seguro", desc: "Cuidamos de cada etapa: pedidos, inspeção, logística internacional, desembaraço e entrega." },
  { icon: TrendingUp, title: "Otimização de Custos", desc: "Reduzimos custos operacionais e aumentamos a margem de lucro do seu produto importado." },
  { icon: Plane, title: "Comprador Particular", desc: "Atuamos como seu comprador na China — como se a empresa fosse nossa." },
  { icon: FileSearch, title: "Due Diligence Internacional", desc: "Verificamos a procedência, certificações e histórico de cada parceiro antes de fechar negócio." },
];

function ServicesPage() {
  return (
    <>
      <Section variant="navy" className="!pt-32">
        <div className="max-w-3xl">
          <span className="text-xs tracking-[0.3em] text-gold">O QUE FAZEMOS</span>
          <h1 className="text-5xl lg:text-6xl font-serif font-bold text-cream mt-4 leading-tight">
            Serviços completos de <span className="text-gradient-gold">importação.</span>
          </h1>
          <p className="text-lg text-cream/75 mt-6 leading-relaxed">
            Soluções sob medida para empresas que querem importar da China com mais segurança, agilidade e resultado financeiro.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="bg-card border border-border rounded-xl p-8 hover:border-gold hover:shadow-elegant transition-all group">
              <div className="w-14 h-14 rounded-full bg-navy flex items-center justify-center text-gold mb-6 group-hover:scale-110 transition-transform">
                <s.icon size={26} />
              </div>
              <h3 className="font-serif text-xl text-navy mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/contato" className="inline-flex items-center gap-2 bg-navy text-navy-foreground px-7 py-3.5 rounded-md font-medium hover:bg-navy/90 shadow-elegant">
            Quero um orçamento <ArrowRight size={18} />
          </Link>
        </div>
      </Section>
    </>
  );
}
