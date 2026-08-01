"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import {
  GALLERY_CATEGORIES,
  GALLERY_ITEMS,
  type GalleryCategory,
} from "@/lib/constants";
import { AnimateIn } from "@/components/ui/AnimateIn";

export function Gallery() {
  const [active, setActive] = useState<GalleryCategory>("todos");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    active === "todos"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === active);

  const openAt = (id: string) => {
    const idx = filtered.findIndex((item) => item.id === id);
    setLightboxIndex(idx);
  };

  const step = (dir: 1 | -1) => {
    setLightboxIndex((current) => {
      if (current === null) return current;
      const next = (current + dir + filtered.length) % filtered.length;
      return next;
    });
  };

  const activeImage =
    lightboxIndex !== null ? filtered[lightboxIndex] : undefined;

  return (
    <section id="trabalhos" className="bg-bone-dim py-24 md:py-32">
      <div className="container-page">
        <AnimateIn className="max-w-xl">
          <p className="eyebrow mb-4">Portfólio</p>
          <h2 className="section-heading">Trabalhos realizados.</h2>
          <p className="mt-4 text-sm text-ink-soft/70">
            {/* Nota: substituir as imagens abaixo pelas fotografias reais do
            Instagram (@mateusrpereira) */}
            Uma seleção de cortes, cor e transformações.
          </p>
        </AnimateIn>

        <div
          role="tablist"
          aria-label="Filtrar por categoria"
          className="mt-10 flex flex-wrap gap-2"
        >
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={active === cat.id}
              onClick={() => setActive(cat.id)}
              className={`rounded-full border px-5 py-2 text-sm transition-colors ${
                active === cat.id
                  ? "border-ink bg-ink text-bone"
                  : "border-ink/15 text-ink-soft hover:border-gold hover:text-gold"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="mt-10 columns-2 gap-4 sm:columns-3 [column-fill:_balance]">
          {filtered.map((item, i) => (
            <button
              key={item.id}
              onClick={() => openAt(item.id)}
              className="group mb-4 block w-full break-inside-avoid overflow-hidden rounded-xl"
              aria-label={`Ver imagem ampliada: ${item.alt}`}
            >
              <AnimateIn delay={(i % 6) * 0.05}>
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-sand">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/10" />
                </div>
              </AnimateIn>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 md:p-10"
            role="dialog"
            aria-modal="true"
            aria-label="Visualização ampliada da imagem"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              aria-label="Fechar"
              onClick={() => setLightboxIndex(null)}
              className="absolute right-5 top-5 text-bone/80 transition-colors hover:text-gold"
            >
              <X size={28} />
            </button>

            <button
              aria-label="Imagem anterior"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-bone/80 transition-colors hover:text-gold md:left-8"
            >
              <ChevronLeft size={32} />
            </button>

            <motion.div
              key={activeImage.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl md:max-w-lg"
            >
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                sizes="90vw"
                className="object-cover"
              />
            </motion.div>

            <button
              aria-label="Imagem seguinte"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-bone/80 transition-colors hover:text-gold md:right-8"
            >
              <ChevronRight size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
