import { T as jsxRuntimeExports } from "./worker-entry-BwB0Scju.js";
import { c as createLucideIcon, L as Link } from "./router-BzGgUTP_.js";
import { S as Section } from "./Section-DiO8sLku.js";
import { S as Search, H as Handshake } from "./search-C6mY6Bs9.js";
import { S as ShieldCheck, T as TrendingUp } from "./trending-up-f6eEH79y.js";
import { A as ArrowRight } from "./arrow-right-BalPUA4Z.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$1 = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["circle", { cx: "11.5", cy: "14.5", r: "2.5", key: "1bq0ko" }],
  ["path", { d: "M13.3 16.3 15 18", key: "2quom7" }]
];
const FileSearch = createLucideIcon("file-search", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",
      key: "1v9wt8"
    }
  ]
];
const Plane = createLucideIcon("plane", __iconNode);
const services = [{
  icon: Search,
  title: "Busca de Fornecedores",
  desc: "Mapeamos e avaliamos fornecedores na China e Ásia, garantindo qualidade, capacidade e confiabilidade."
}, {
  icon: Handshake,
  title: "Negociação Estratégica",
  desc: "Atuamos na linha de frente para conseguir os melhores preços, prazos e condições comerciais."
}, {
  icon: ShieldCheck,
  title: "Gestão de Processo Seguro",
  desc: "Cuidamos de cada etapa: pedidos, inspeção, logística internacional, desembaraço e entrega."
}, {
  icon: TrendingUp,
  title: "Otimização de Custos",
  desc: "Reduzimos custos operacionais e aumentamos a margem de lucro do seu produto importado."
}, {
  icon: Plane,
  title: "Comprador Particular",
  desc: "Atuamos como seu comprador na China — como se a empresa fosse nossa."
}, {
  icon: FileSearch,
  title: "Due Diligence Internacional",
  desc: "Verificamos a procedência, certificações e histórico de cada parceiro antes de fechar negócio."
}];
function ServicesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { variant: "navy", className: "!pt-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs tracking-[0.3em] text-gold", children: "O QUE FAZEMOS" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-5xl lg:text-6xl font-serif font-bold text-cream mt-4 leading-tight", children: [
        "Serviços completos de ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "importação." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-cream/75 mt-6 leading-relaxed", children: "Soluções sob medida para empresas que querem importar da China com mais segurança, agilidade e resultado financeiro." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: services.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-8 hover:border-gold hover:shadow-elegant transition-all group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-full bg-navy flex items-center justify-center text-gold mb-6 group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { size: 26 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-xl text-navy mb-3", children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: s.desc })
      ] }, s.title)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contato", className: "inline-flex items-center gap-2 bg-navy text-navy-foreground px-7 py-3.5 rounded-md font-medium hover:bg-navy/90 shadow-elegant", children: [
        "Quero um orçamento ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 18 })
      ] }) })
    ] })
  ] });
}
export {
  ServicesPage as component
};
