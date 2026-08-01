import type { MetadataRoute } from "next";

// PLACEHOLDER — substituir pelo domínio real
const siteUrl = "https://www.mateuspereirahair.pt";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/`, lastModified: new Date(), priority: 1 },
    { url: `${siteUrl}/politica-de-privacidade`, lastModified: new Date() },
    { url: `${siteUrl}/livro-de-reclamacoes`, lastModified: new Date() },
  ];
}
