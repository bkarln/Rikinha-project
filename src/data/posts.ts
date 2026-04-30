export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  category: string;
  author: string;
  content: string[];
};

export const posts: Post[] = [
  {
    slug: "como-importar-da-china-com-seguranca",
    title: "Como importar da China com segurança em 2026",
    excerpt:
      "Um guia prático para empresários brasileiros que querem reduzir riscos, evitar golpes e garantir qualidade na origem.",
    date: "2026-04-12",
    readingTime: "6 min",
    category: "Importação",
    author: "Equipe JR Consulting",
    content: [
      "Importar da China deixou de ser um diferencial para se tornar uma necessidade competitiva. Mas a distância, o idioma e a cultura de negócios criam armadilhas para quem se aventura sozinho.",
      "O primeiro passo é a homologação do fornecedor: visite a fábrica (presencial ou via auditoria local), valide licenças, certificações e capacidade produtiva. Nunca pague valores integrais antecipados sem inspeção independente.",
      "O segundo é o contrato. Modelos genéricos baixados da internet não protegem ninguém. Inclua cláusulas de qualidade, prazo, multa e foro com assessoria especializada.",
      "Por fim, a inspeção pré-embarque é inegociável. Um relatório fotográfico e de amostragem evita prejuízos enormes — o custo é mínimo perto do risco que mitiga.",
    ],
  },
  {
    slug: "negociacao-com-fornecedores-chineses",
    title: "Negociação com fornecedores chineses: 5 erros comuns",
    excerpt:
      "Entender a cultura de negócios na Ásia muda completamente o resultado da sua próxima cotação.",
    date: "2026-03-28",
    readingTime: "5 min",
    category: "Negociação",
    author: "Equipe JR Consulting",
    content: [
      "Brasileiros tendem a tratar a negociação como uma transação. Na China, ela é um relacionamento de longo prazo. Pressionar por descontos no primeiro contato costuma fechar portas.",
      "Erro 1: pedir preço antes de definir especificação técnica. Sempre envie um RFQ detalhado.",
      "Erro 2: ignorar MOQ. Quase todo MOQ é negociável quando há contexto de pedidos futuros.",
      "Erro 3: aceitar o primeiro Incoterm proposto. FOB, CIF e DDP têm impacto direto na sua margem.",
      "Erro 4: não validar amostra antes da produção em série.",
      "Erro 5: comunicar-se apenas por e-mail. WeChat e reuniões por vídeo aceleram decisões.",
    ],
  },
  {
    slug: "custos-ocultos-importacao",
    title: "Os custos ocultos da importação que destroem sua margem",
    excerpt:
      "Frete, impostos, armazenagem, demurrage. Saiba o que entra no custo real do produto antes de precificar.",
    date: "2026-03-10",
    readingTime: "7 min",
    category: "Logística",
    author: "Equipe JR Consulting",
    content: [
      "Comprar a US$ 2 e vender a R$ 50 parece um negócio incrível — até a mercadoria chegar e a planilha mostrar a verdade.",
      "Os principais custos esquecidos: frete internacional, seguro, capatazia, AFRMM, ICMS por substituição, IPI, PIS/Cofins importação, despachante, armazenagem, demurrage e câmbio.",
      "Uma boa consultoria entrega o landed cost completo antes da compra. Sem ele, você está apostando, não importando.",
    ],
  },
];
