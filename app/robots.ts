import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    // PLACEHOLDER — substituir pelo domínio real
    sitemap: "https://www.mateuspereirahair.pt/sitemap.xml",
  };
}
