import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { posts } from "../data/posts";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    if (!post) {
      return { meta: [{ title: "Artigo não encontrado — JR Consulting" }] };
    }
    return {
      meta: [
        { title: `${post.title} — JR Consulting` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
      ],
    };
  },
  errorComponent: ({ error }) => (
    <div className="container mx-auto px-6 py-20 text-center">
      <p className="text-muted-foreground">{error.message}</p>
      <Link to="/blog" className="text-navy underline mt-4 inline-block">
        Voltar ao blog
      </Link>
    </div>
  ),
  notFoundComponent: () => (
    <div className="container mx-auto px-6 py-20 text-center">
      <h1 className="font-serif text-4xl text-navy mb-3">Artigo não encontrado</h1>
      <p className="text-muted-foreground mb-6">
        O artigo que você procura não existe ou foi removido.
      </p>
      <Link
        to="/blog"
        className="inline-flex items-center gap-2 bg-navy text-navy-foreground px-5 py-2.5 rounded-md text-sm font-medium hover:bg-navy/90"
      >
        <ArrowLeft size={16} /> Voltar ao blog
      </Link>
    </div>
  ),
  component: PostPage,
});

function PostPage() {
  const { post } = Route.useLoaderData();

  return (
    <article className="bg-cream">
      <header className="bg-gradient-navy text-cream py-20">
        <div className="container mx-auto px-6 lg:px-10 max-w-3xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-cream/70 hover:text-gold text-sm mb-8 transition-colors"
          >
            <ArrowLeft size={14} /> Todos os artigos
          </Link>
          <span className="inline-block bg-gold text-gold-foreground text-xs font-medium px-3 py-1 rounded-full mb-5">
            {post.category}
          </span>
          <h1 className="font-serif text-4xl lg:text-5xl font-bold leading-tight mb-6">
            {post.title}
          </h1>
          <p className="text-lg text-cream/80 leading-relaxed mb-8">{post.excerpt}</p>
          <div className="flex flex-wrap items-center gap-6 text-sm text-cream/70">
            <span className="flex items-center gap-2">
              <User size={14} /> {post.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar size={14} />
              {new Date(post.date).toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={14} /> {post.readingTime} de leitura
            </span>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 lg:px-10 py-16 max-w-3xl">
        <div className="prose prose-lg max-w-none">
          {post.content.map((paragraph, i) => (
            <p
              key={i}
              className="text-foreground/90 leading-relaxed text-lg mb-6 first-letter:font-serif first:first-letter:text-5xl first:first-letter:float-left first:first-letter:mr-3 first:first-letter:mt-1 first:first-letter:text-navy"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-16 p-8 bg-gradient-navy text-cream rounded-lg text-center">
          <h3 className="font-serif text-2xl mb-3">Quer aplicar isso na sua importação?</h3>
          <p className="text-cream/80 mb-6">
            Fale com a JR Consulting e descubra como reduzir riscos e maximizar margem.
          </p>
          <Link
            to="/contato"
            className="inline-flex items-center gap-2 bg-gold text-gold-foreground px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity"
          >
            Falar com um consultor
          </Link>
        </div>
      </div>
    </article>
  );
}
