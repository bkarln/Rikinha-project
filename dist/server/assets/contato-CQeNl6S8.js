import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-Db6-hGHW.js";
import { S as Section } from "./Section-DeD4bkgz.js";
import { c as createLucideIcon, P as Phone, M as Mail, a as MapPin } from "./router-KfENlL9t.js";
import { E as Earth } from "./earth-BPERLVW3.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
];
const Send = createLucideIcon("send", __iconNode);
function ContactPage() {
  const [sent, setSent] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { variant: "navy", className: "!pt-32 !pb-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs tracking-[0.3em] text-gold", children: "FALE COM A GENTE" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-5xl lg:text-6xl font-serif font-bold text-cream mt-4 leading-tight", children: [
        "Vamos importar ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "juntos." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-cream/75 mt-6 leading-relaxed", children: "Conte-nos sobre seu projeto. Em até 1 dia útil retornamos com uma proposta personalizada." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { className: "!pt-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1fr,1.4fr] gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 p-6 bg-card border border-border rounded-xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-full bg-navy flex items-center justify-center text-gold shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 20 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-serif text-lg text-navy mb-1", children: "Telefone / WhatsApp" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "+55 (11) 9 0000-0000" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 p-6 bg-card border border-border rounded-xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-full bg-navy flex items-center justify-center text-gold shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 20 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-serif text-lg text-navy mb-1", children: "E-mail" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "contato@jrconsulting.com.br" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 p-6 bg-card border border-border rounded-xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-full bg-navy flex items-center justify-center text-gold shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 20 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-serif text-lg text-navy mb-1", children: "Atendimento" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Empresas em todo o Brasil. Operações na China e Ásia." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 p-6 bg-gradient-navy text-cream rounded-xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Earth, { className: "text-gold shrink-0", size: 28 }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-serif text-lg mb-1", children: "Atuação Global" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-cream/75 text-sm", children: "Da China ao Brasil — em qualquer ponto da operação." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
        e.preventDefault();
        setSent(true);
      }, className: "bg-card border border-border rounded-2xl p-8 lg:p-10 shadow-elegant space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-2xl text-navy mb-2", children: "Solicite uma proposta" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Nome completo", name: "name", required: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Empresa", name: "company" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "E-mail", name: "email", type: "email", required: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Telefone / WhatsApp", name: "phone" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium text-navy mb-2 block", children: "Tipo de produto a importar" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { name: "product", className: "w-full px-4 py-3 rounded-md border border-input bg-background focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium text-navy mb-2 block", children: "Conte-nos sobre seu projeto" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { name: "message", rows: 5, required: true, className: "w-full px-4 py-3 rounded-md border border-input bg-background focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition resize-none" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: sent, className: "w-full inline-flex items-center justify-center gap-2 bg-navy text-navy-foreground px-7 py-3.5 rounded-md font-medium hover:bg-navy/90 transition-all shadow-elegant disabled:opacity-60", children: sent ? "Mensagem enviada — entraremos em contato!" : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "Enviar mensagem ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { size: 18 })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground text-center", children: "Resposta em até 1 dia útil." })
      ] })
    ] }) })
  ] });
}
function Field({
  label,
  name,
  type = "text",
  required
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-sm font-medium text-navy mb-2 block", children: [
      label,
      " ",
      required && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "*" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { name, type, required, className: "w-full px-4 py-3 rounded-md border border-input bg-background focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition" })
  ] });
}
export {
  ContactPage as component
};
