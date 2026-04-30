import { T as jsxRuntimeExports } from "./worker-entry-Db6-hGHW.js";
function Section({
  children,
  className = "",
  variant = "default"
}) {
  const bg = {
    default: "bg-background",
    navy: "bg-gradient-navy text-navy-foreground",
    cream: "bg-cream"
  }[variant];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: `${bg} py-20 lg:py-28 ${className}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6 lg:px-10", children }) });
}
function SectionHeader({
  eyebrow,
  title,
  subtitle,
  light = false,
  center = false
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `mb-14 ${center ? "text-center mx-auto max-w-2xl" : "max-w-3xl"}`, children: [
    eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-block text-xs tracking-[0.3em] mb-4 ${light ? "text-gold" : "text-gold"}`, children: eyebrow }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: `text-4xl lg:text-5xl font-bold gold-underline ${center ? "gold-underline-center" : ""} ${light ? "text-cream" : "text-navy"} pb-3`, children: title }),
    subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `mt-8 text-lg leading-relaxed ${light ? "text-cream/75" : "text-muted-foreground"}`, children: subtitle })
  ] });
}
export {
  Section as S,
  SectionHeader as a
};
