import { T as jsxRuntimeExports } from "./worker-entry-Db6-hGHW.js";
import { L as Link } from "./router-KfENlL9t.js";
import { A as ArrowLeft } from "./arrow-left-BYtQ-PRE.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const SplitNotFoundComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 py-20 text-center", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-serif text-4xl text-navy mb-3", children: "Artigo não encontrado" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6", children: "O artigo que você procura não existe ou foi removido." }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/blog", className: "inline-flex items-center gap-2 bg-navy text-navy-foreground px-5 py-2.5 rounded-md text-sm font-medium hover:bg-navy/90", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 16 }),
    " Voltar ao blog"
  ] })
] });
export {
  SplitNotFoundComponent as notFoundComponent
};
