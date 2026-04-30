import { T as jsxRuntimeExports } from "./worker-entry-Db6-hGHW.js";
import { p as posts, L as Link } from "./router-KfENlL9t.js";
import { S as Section, a as SectionHeader } from "./Section-DeD4bkgz.js";
import { C as Calendar, a as Clock } from "./clock-q7jrIkgY.js";
import { A as ArrowRight } from "./arrow-right-DKyjA6i4.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function BlogPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { variant: "cream", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "BLOG", title: "Insights de quem vive a importação", subtitle: "Conteúdo prático para empresários que querem importar com mais segurança, margem e inteligência." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: posts.map((post) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/blog/$slug", params: {
      slug: post.slug
    }, className: "group bg-card rounded-lg overflow-hidden border border-border hover:shadow-elegant transition-all flex flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-[16/10] bg-gradient-navy relative overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif text-2xl text-cream/90 px-6 text-center", children: post.category }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-4 left-4 bg-gold text-gold-foreground text-xs font-medium px-3 py-1 rounded-full", children: post.category })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 flex flex-col flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-xs text-muted-foreground mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 12 }),
            new Date(post.date).toLocaleDateString("pt-BR", {
              day: "2-digit",
              month: "short",
              year: "numeric"
            })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 12 }),
            post.readingTime
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-xl text-navy leading-snug mb-3 group-hover:text-gold transition-colors", children: post.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed flex-1", children: post.excerpt }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-5 inline-flex items-center gap-2 text-sm font-medium text-navy group-hover:gap-3 transition-all", children: [
          "Ler artigo ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
        ] })
      ] })
    ] }, post.slug)) })
  ] });
}
export {
  BlogPage as component
};
