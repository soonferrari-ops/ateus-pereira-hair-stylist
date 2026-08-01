import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { BUSINESS } from "@/lib/constants";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://www.mateuspereirahair.pt"; // PLACEHOLDER — substituir pelo domínio real

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Mateus Pereira Hair Stylist | Cabeleireiro no Porto",
  description:
    "Cortes, coloração, balayage e styling personalizado no Porto. Conheça o trabalho de Mateus Pereira e marque o seu serviço.",
  keywords: [
    "cabeleireiro Porto",
    "hair stylist Porto",
    "balayage Porto",
    "coloração Porto",
    "corte de cabelo Porto",
  ],
  authors: [{ name: "Mateus Pereira" }],
  openGraph: {
    title: "Mateus Pereira Hair Stylist | Cabeleireiro no Porto",
    description:
      "Cortes, coloração, balayage e styling personalizado no Porto. Conheça o trabalho de Mateus Pereira e marque o seu serviço.",
    url: siteUrl,
    siteName: "Mateus Pereira Hair Stylist",
    locale: "pt_PT",
    type: "website",
    // PLACEHOLDER — substituir por uma imagem de partilha (1200x630) real
    images: [{ url: "/images/og-cover.jpg", width: 1200, height: 630 }],
  },
  icons: {
    // PLACEHOLDER — substituir pelo favicon definitivo
    icon: "/favicon.ico",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: BUSINESS.fullName,
    image: `${siteUrl}/images/og-cover.jpg`,
    "@id": siteUrl,
    url: siteUrl,
    telephone: BUSINESS.phoneHref.replace("tel:", ""),
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address,
      addressLocality: "Porto",
      addressCountry: "PT",
    },
    sameAs: [BUSINESS.instagram, BUSINESS.facebook],
  };

  return (
    <html lang="pt-PT" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="bg-bone text-ink font-body antialiased">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
