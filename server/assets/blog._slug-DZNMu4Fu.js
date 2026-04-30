import { T as jsxRuntimeExports } from "./worker-entry-BwB0Scju.js";
import { c as createLucideIcon, R as Route, L as Link } from "./router-BzGgUTP_.js";
import { A as ArrowLeft } from "./arrow-left-D1y0gLq5.js";
import { C as Calendar, a as Clock } from "./clock-DAaX6dL_.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
];
const User = createLucideIcon("user", __iconNode);
function PostPage() {
  const {
    post
  } = Route.useLoaderData();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "bg-cream", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "bg-gradient-navy text-cream py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 lg:px-10 max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/blog", className: "inline-flex items-center gap-2 text-cream/70 hover:text-gold text-sm mb-8 transition-colors", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 14 }),
        " Todos os artigos"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block bg-gold text-gold-foreground text-xs font-medium px-3 py-1 rounded-full mb-5", children: post.category }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-serif text-4xl lg:text-5xl font-bold leading-tight mb-6", children: post.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-cream/80 leading-relaxed mb-8", children: post.excerpt }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-6 text-sm text-cream/70", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(User, { size: 14 }),
          " ",
          post.author
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 14 }),
          new Date(post.date).toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "long",
            year: "numeric"
          })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 14 }),
          " ",
          post.readingTime,
          " de leitura"
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 lg:px-10 py-16 max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "prose prose-lg max-w-none", children: post.content.map((paragraph, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/90 leading-relaxed text-lg mb-6 first-letter:font-serif first:first-letter:text-5xl first:first-letter:float-left first:first-letter:mr-3 first:first-letter:mt-1 first:first-letter:text-navy", children: paragraph }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 p-8 bg-gradient-navy text-cream rounded-lg text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-2xl mb-3", children: "Quer aplicar isso na sua importação?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-cream/80 mb-6", children: "Fale com a JR Consulting e descubra como reduzir riscos e maximizar margem." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contato", className: "inline-flex items-center gap-2 bg-gold text-gold-foreground px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity", children: "Falar com um consultor" })
      ] })
    ] })
  ] });
}
export {
  PostPage as component
};
