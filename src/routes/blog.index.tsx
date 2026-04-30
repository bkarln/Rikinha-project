import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionHeader } from "../components/Section";
import { posts } from "../data/posts";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — JR Consulting | Insights sobre importação da China" },
      {
        name: "description",
        content:
          "Artigos práticos sobre importação, negociação com fornecedores chineses e logística internacional para empresas brasileiras.",
      },
      { property: "og:title", content: "Blog — JR Consulting" },
      {
        property: "og:description",
        content:
          "Insights práticos sobre importação da China, negociação e logística internacional.",
      },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <Section variant="cream">
      <SectionHeader
        eyebrow="BLOG"
        title="Insights de quem vive a importação"
        subtitle="Conteúdo prático para empresários que querem importar com mais segurança, margem e inteligência."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link
            key={post.slug}
            to="/blog/$slug"
            params={{ slug: post.slug }}
            className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-elegant transition-all flex flex-col"
          >
            <div className="aspect-[16/10] bg-gradient-navy relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-2xl text-cream/90 px-6 text-center">
                  {post.category}
                </span>
              </div>
              <div className="absolute top-4 left-4 bg-gold text-gold-foreground text-xs font-medium px-3 py-1 rounded-full">
                {post.category}
              </div>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                <span className="flex items-center gap-1.5">
                  <Calendar size={12} />
                  {new Date(post.date).toLocaleDateString("pt-BR", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={12} />
                  {post.readingTime}
                </span>
              </div>
              <h3 className="font-serif text-xl text-navy leading-snug mb-3 group-hover:text-gold transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {post.excerpt}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-navy group-hover:gap-3 transition-all">
                Ler artigo <ArrowRight size={14} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
