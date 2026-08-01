// ============================================================================
// DADOS DO NEGÓCIO
// ⚠️ SUBSTITUIR todos os valores marcados com "PLACEHOLDER" antes de publicar.
// ============================================================================

export const BUSINESS = {
  name: "Mateus Pereira",
  tagline: "Hair Stylist",
  fullName: "Mateus Pereira Hair Stylist",
  city: "Porto, Portugal",
  // PLACEHOLDER — substituir pela morada real
  address: "Rua Exemplo, 123, 4000-000 Porto, Portugal",
  // PLACEHOLDER — substituir pelo número de telefone real
  phoneDisplay: "+351 XXX XXX XXX",
  phoneHref: "tel:+351XXXXXXXXX",
  // PLACEHOLDER — número de WhatsApp em formato internacional sem espaços
  whatsappNumber: "351XXXXXXXXX",
  whatsappMessage: "Olá Mateus, gostaria de marcar um serviço.",
  // PLACEHOLDER — substituir pelo email real
  email: "geral@mateuspereirahair.pt",
  instagram: "https://www.instagram.com/mateusrpereira/",
  instagramHandle: "@mateusrpereira",
  // PLACEHOLDER — substituir pelo link real da página de Facebook
  facebook: "https://www.facebook.com/",
  // PLACEHOLDER — confirmar horário real de funcionamento
  hours: [
    { days: "Terça — Sexta", time: "10:00 — 19:00" },
    { days: "Sábado", time: "09:00 — 17:00" },
    { days: "Domingo e Segunda", time: "Encerrado" },
  ],
  // PLACEHOLDER — coordenadas de exemplo (centro do Porto). Substituir pela morada real do salão.
  mapEmbedSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2989.615!2d-8.6291!3d41.1579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDA5JzI4LjQiTiA4wrAzNyc0OC44Ilc!5e0!3m2!1spt-PT!2spt!4v1700000000000",
} as const;

export function buildWhatsAppLink(customMessage?: string) {
  const text = encodeURIComponent(customMessage ?? BUSINESS.whatsappMessage);
  return `https://wa.me/${BUSINESS.whatsappNumber}?text=${text}`;
}

export const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Trabalhos", href: "#trabalhos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contactos", href: "#contactos" },
] as const;

export type Service = {
  id: string;
  name: string;
  description: string;
  priceFrom?: string; // ex: "€25" — deixar undefined até haver preços reais
};

export const SERVICES: Service[] = [
  {
    id: "corte-feminino",
    name: "Corte Feminino",
    description:
      "Corte personalizado de acordo com o formato do rosto, textura e estilo de vida de cada cliente.",
  },
  {
    id: "corte-masculino",
    name: "Corte Masculino",
    description:
      "Cortes modernos e clássicos, com acabamento preciso e atenção ao detalhe.",
  },
  {
    id: "coloracao",
    name: "Coloração",
    description:
      "Cor personalizada, do natural ao mais ousado, sempre com foco na saúde do cabelo.",
  },
  {
    id: "madeixas-balayage",
    name: "Madeixas & Balayage",
    description:
      "Técnicas de iluminação e transição de cor com efeito natural e luminoso.",
  },
  {
    id: "styling",
    name: "Styling",
    description:
      "Penteados e escovas para o dia a dia ou para ocasiões especiais.",
  },
  {
    id: "tratamentos",
    name: "Tratamentos Capilares",
    description:
      "Rotinas de tratamento pensadas para reconstruir, hidratar e fortalecer o cabelo.",
  },
];

export type GalleryCategory =
  | "todos"
  | "cortes"
  | "coloracao"
  | "loiros"
  | "balayage"
  | "transformacoes"
  | "styling";

export const GALLERY_CATEGORIES: { id: GalleryCategory; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "cortes", label: "Cortes" },
  { id: "coloracao", label: "Coloração" },
  { id: "loiros", label: "Loiros" },
  { id: "balayage", label: "Balayage" },
  { id: "transformacoes", label: "Transformações" },
  { id: "styling", label: "Styling" },
];

export type GalleryItem = {
  id: string;
  category: Exclude<GalleryCategory, "todos">;
  alt: string;
  // PLACEHOLDER — imagens de demonstração (Unsplash). Substituir pelas fotografias reais do Instagram.
  src: string;
};

const unsplash = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=80`;

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: "g1", category: "cortes", alt: "Corte de cabelo curto moderno", src: unsplash("photo-1580618672591-eb180b1a973f") },
  { id: "g2", category: "balayage", alt: "Balayage em cabelo castanho", src: unsplash("photo-1595476108010-b4d1f102b1b1") },
  { id: "g3", category: "loiros", alt: "Loiro iluminado com técnica de mechas", src: unsplash("photo-1522337360788-8b13dee7a37e") },
  { id: "g4", category: "coloracao", alt: "Coloração vibrante em salão", src: unsplash("photo-1560869713-7d0a29430803") },
  { id: "g5", category: "transformacoes", alt: "Transformação de visual antes e depois", src: unsplash("photo-1487412947147-5cebf100ffc2") },
  { id: "g6", category: "styling", alt: "Styling e penteado para evento", src: unsplash("photo-1519699047748-de8e457a634e") },
  { id: "g7", category: "cortes", alt: "Corte estruturado com acabamento preciso", src: unsplash("photo-1605497788044-5a32c7078486") },
  { id: "g8", category: "balayage", alt: "Balayage com efeito natural", src: unsplash("photo-1526045612212-70caf35c14df") },
  { id: "g9", category: "loiros", alt: "Loiro platinado", src: unsplash("photo-1492106087820-71f1a00d2b11") },
];

export type Testimonial = {
  id: string;
  name: string;
  service: string;
  rating: number;
  quote: string;
};

// ⚠️ Testemunhos provisórios — substituir por avaliações reais dos clientes.
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Beatriz",
    service: "Balayage",
    rating: 5,
    quote:
      "[Testemunho provisório] Fiquei muito satisfeita com o resultado, o Mateus percebeu exatamente o que eu queria.",
  },
  {
    id: "t2",
    name: "Ricardo",
    service: "Corte Masculino",
    rating: 5,
    quote:
      "[Testemunho provisório] Atendimento profissional e atenção ao detalhe. Recomendo sem hesitar.",
  },
  {
    id: "t3",
    name: "Sofia",
    service: "Coloração",
    rating: 5,
    quote:
      "[Testemunho provisório] Ambiente acolhedor e um resultado que superou as minhas expectativas.",
  },
];

export const SERVICE_OPTIONS = SERVICES.map((s) => s.name);
