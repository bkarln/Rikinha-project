import { createRootRoute, HeadContent, Link, Outlet, Scripts } from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-cream px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-serif font-bold text-navy">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-navy">Página não encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          A página que você procura não existe ou foi movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-navy px-5 py-2.5 text-sm font-medium text-navy-foreground hover:bg-navy/90"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "JR Consulting — Importe melhor. Compita melhor." },
      { name: "description", content: "Seu consultor e comprador particular para compras internacionais. Importação da China com segurança, economia e eficiência." },
      { name: "author", content: "JR Consulting" },
      { property: "og:title", content: "JR Consulting — Importe melhor. Compita melhor." },
      { property: "og:description", content: "Seu consultor e comprador particular para compras internacionais. Importação da China com segurança, economia e eficiência." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "JR Consulting — Importe melhor. Compita melhor." },
      { name: "twitter:description", content: "Seu consultor e comprador particular para compras internacionais. Importação da China com segurança, economia e eficiência." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/9a918e0b-f13a-43c5-a33b-924f84541e8f/id-preview-f9bc8bee--6afb3083-8f84-4541-9223-b5452e5bfaec.lovable.app-1777505421832.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/9a918e0b-f13a-43c5-a33b-924f84541e8f/id-preview-f9bc8bee--6afb3083-8f84-4541-9223-b5452e5bfaec.lovable.app-1777505421832.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
