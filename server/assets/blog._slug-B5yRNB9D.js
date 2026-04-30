import { T as jsxRuntimeExports } from "./worker-entry-BwB0Scju.js";
import { L as Link } from "./router-BzGgUTP_.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const SplitErrorComponent = ({
  error
}) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 py-20 text-center", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: error.message }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/blog", className: "text-navy underline mt-4 inline-block", children: "Voltar ao blog" })
] });
export {
  SplitErrorComponent as errorComponent
};
