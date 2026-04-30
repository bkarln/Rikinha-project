import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Send, Globe2 } from "lucide-react";
import { Section } from "@/components/Section";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — JR Consulting" },
      { name: "description", content: "Fale com a JR Consulting. Solicite uma consulta gratuita sobre sua próxima importação da China." },
      { property: "og:title", content: "Entre em contato — JR Consulting" },
      { property: "og:description", content: "Solicite uma consulta sobre sua próxima importação." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <Section variant="navy" className="!pt-32 !pb-16">
        <div className="max-w-3xl">
          <span className="text-xs tracking-[0.3em] text-gold">FALE COM A GENTE</span>
          <h1 className="text-5xl lg:text-6xl font-serif font-bold text-cream mt-4 leading-tight">
            Vamos importar <span className="text-gradient-gold">juntos.</span>
          </h1>
          <p className="text-lg text-cream/75 mt-6 leading-relaxed">
            Conte-nos sobre seu projeto. Em até 1 dia útil retornamos com uma proposta personalizada.
          </p>
        </div>
      </Section>

      <Section className="!pt-16">
        <div className="grid lg:grid-cols-[1fr,1.4fr] gap-12">
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-xl">
              <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center text-gold shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="font-serif text-lg text-navy mb-1">Telefone / WhatsApp</h4>
                <p className="text-muted-foreground text-sm">+55 (11) 9 0000-0000</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-xl">
              <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center text-gold shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="font-serif text-lg text-navy mb-1">E-mail</h4>
                <p className="text-muted-foreground text-sm">contato@jrconsulting.com.br</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-xl">
              <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center text-gold shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="font-serif text-lg text-navy mb-1">Atendimento</h4>
                <p className="text-muted-foreground text-sm">Empresas em todo o Brasil. Operações na China e Ásia.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-gradient-navy text-cream rounded-xl">
              <Globe2 className="text-gold shrink-0" size={28} />
              <div>
                <h4 className="font-serif text-lg mb-1">Atuação Global</h4>
                <p className="text-cream/75 text-sm">Da China ao Brasil — em qualquer ponto da operação.</p>
              </div>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="bg-card border border-border rounded-2xl p-8 lg:p-10 shadow-elegant space-y-5"
          >
            <h2 className="font-serif text-2xl text-navy mb-2">Solicite uma proposta</h2>

            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Nome completo" name="name" required />
              <Field label="Empresa" name="company" />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="E-mail" name="email" type="email" required />
              <Field label="Telefone / WhatsApp" name="phone" />
            </div>
            <div>
              <label className="text-sm font-medium text-navy mb-2 block">Tipo de produto a importar</label>
              <input name="product" className="w-full px-4 py-3 rounded-md border border-input bg-background focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition" />
            </div>
            <div>
              <label className="text-sm font-medium text-navy mb-2 block">Conte-nos sobre seu projeto</label>
              <textarea name="message" rows={5} required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition resize-none" />
            </div>

            <button
              type="submit"
              disabled={sent}
              className="w-full inline-flex items-center justify-center gap-2 bg-navy text-navy-foreground px-7 py-3.5 rounded-md font-medium hover:bg-navy/90 transition-all shadow-elegant disabled:opacity-60"
            >
              {sent ? "Mensagem enviada — entraremos em contato!" : <>Enviar mensagem <Send size={18} /></>}
            </button>
            <p className="text-xs text-muted-foreground text-center">Resposta em até 1 dia útil.</p>
          </form>
        </div>
      </Section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-sm font-medium text-navy mb-2 block">
        {label} {required && <span className="text-gold">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition"
      />
    </div>
  );
}
