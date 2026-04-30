import { T as jsxRuntimeExports } from "./worker-entry-Db6-hGHW.js";
import { c as createLucideIcon, L as Link } from "./router-KfENlL9t.js";
import { S as Section, a as SectionHeader } from "./Section-DeD4bkgz.js";
import { E as Earth } from "./earth-BPERLVW3.js";
import { A as ArrowRight } from "./arrow-right-DKyjA6i4.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$1 = [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }]
];
const Award = createLucideIcon("award", __iconNode$1);
const __iconNode = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
];
const Users = createLucideIcon("users", __iconNode);
const stats = [{
  icon: Earth,
  n: "+15",
  label: "Países parceiros"
}, {
  icon: Users,
  n: "+200",
  label: "Empresas atendidas"
}, {
  icon: Award,
  n: "+10 anos",
  label: "De experiência em importação"
}];
function AboutPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { variant: "navy", className: "!pt-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs tracking-[0.3em] text-gold", children: "QUEM SOMOS" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-5xl lg:text-6xl font-serif font-bold text-cream mt-4 leading-tight", children: [
        "Conectamos oportunidades. ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "Entregamos resultados." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-cream/75 mt-6 leading-relaxed", children: "A JR Consulting nasceu para resolver um problema real: a complexidade e o risco de importar da China sem ter quem cuide do processo de ponta a ponta." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-16 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "NOSSA MISSÃO", title: "Compramos como se fosse para o nosso negócio." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 text-muted-foreground leading-relaxed", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Tratamos cada operação dos nossos clientes com o mesmo cuidado, rigor e estratégia que aplicaríamos em uma compra própria. Esse é o nosso compromisso." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Atuamos como uma extensão do seu time: investigamos fornecedores, negociamos condições, acompanhamos a produção e garantimos que a mercadoria chegue até você com segurança." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Mais do que um intermediário, somos seu consultor estratégico para crescer no mercado global." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6", children: stats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-6 bg-card border border-border rounded-xl p-6 hover:border-gold transition-colors", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-navy flex items-center justify-center text-gold shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { size: 28 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-3xl font-bold text-navy", children: s.n }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: s.label })
        ] })
      ] }, s.label)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { variant: "cream", className: "!py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl lg:text-4xl text-navy mb-6", children: "Pronto para importar melhor?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contato", className: "inline-flex items-center gap-2 bg-navy text-navy-foreground px-7 py-3.5 rounded-md font-medium hover:bg-navy/90 shadow-elegant", children: [
        "Fale com a JR ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 18 })
      ] })
    ] }) })
  ] });
}
export {
  AboutPage as component
};
