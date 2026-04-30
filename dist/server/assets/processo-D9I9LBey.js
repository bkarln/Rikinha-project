import { T as jsxRuntimeExports } from "./worker-entry-Db6-hGHW.js";
import { S as Section } from "./Section-DeD4bkgz.js";
import { C as ClipboardCheck, S as Ship, P as Package } from "./ship-BG-NzsrQ.js";
import { S as Search, H as Handshake } from "./search-BvJswea6.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-KfENlL9t.js";
const steps = [{
  n: "01",
  icon: ClipboardCheck,
  title: "Análise",
  desc: "Conhecemos profundamente o seu negócio, seus produtos, volumes e objetivos. Identificamos onde a importação pode gerar mais resultado.",
  details: ["Diagnóstico de necessidade", "Estudo de viabilidade", "Definição de KPIs"]
}, {
  n: "02",
  icon: Search,
  title: "Pesquisa",
  desc: "Buscamos e avaliamos fornecedores confiáveis na Ásia, comparando preço, qualidade, capacidade produtiva e certificações.",
  details: ["Sourcing estratégico", "Auditoria de fornecedores", "Amostras e testes"]
}, {
  n: "03",
  icon: Handshake,
  title: "Negociação",
  desc: "Atuamos como seu representante na China, conseguindo as melhores condições comerciais, prazos e formas de pagamento.",
  details: ["Negociação de preços", "Contratos e garantias", "Termos Incoterms"]
}, {
  n: "04",
  icon: Ship,
  title: "Importação",
  desc: "Gerenciamos toda a operação logística internacional, do embarque ao desembaraço aduaneiro no Brasil.",
  details: ["Logística e frete", "Despacho aduaneiro", "Acompanhamento em tempo real"]
}, {
  n: "05",
  icon: Package,
  title: "Resultados",
  desc: "Você recebe seu produto com segurança, no prazo combinado, e com a economia que sua empresa precisa para crescer.",
  details: ["Entrega no destino", "Pós-venda", "Plano de recompra"]
}];
function ProcessPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { variant: "navy", className: "!pt-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs tracking-[0.3em] text-gold", children: "NOSSO MÉTODO" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-5xl lg:text-6xl font-serif font-bold text-cream mt-4 leading-tight", children: [
        "Como ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "trabalhamos." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-cream/75 mt-6 leading-relaxed", children: "Um processo testado e refinado em centenas de operações de importação. Transparente, seguro e focado em resultado." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { variant: "cream", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-12 max-w-5xl mx-auto", children: steps.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-[auto,1fr] gap-8 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex md:flex-col items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 rounded-full bg-navy flex items-center justify-center text-gold shadow-elegant shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { size: 32 }) }),
        i < steps.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block w-px h-20 bg-gradient-to-b from-gold/60 to-transparent mx-auto" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-8 shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-4 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold font-serif text-2xl font-bold", children: s.n }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-2xl text-navy", children: s.title })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-5", children: s.desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid sm:grid-cols-3 gap-2", children: s.details.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "text-sm text-navy/80 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-gold" }),
          " ",
          d
        ] }, d)) })
      ] })
    ] }, s.n)) }) })
  ] });
}
export {
  ProcessPage as component
};
