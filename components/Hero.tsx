"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/constants";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[92vh] items-center overflow-hidden pt-28 md:pt-20"
    >
      <div className="container-page grid w-full grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-8">
        {/* Texto */}
        <div className="relative z-10 md:col-span-6 lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 flex items-center gap-2 text-stone"
          >
            <MapPin size={15} className="text-gold" />
            <span className="text-xs uppercase tracking-widest2">
              Porto, Portugal
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[2.75rem] leading-[1.08] text-ink sm:text-5xl lg:text-6xl"
          >
            Cabelo com
            <br />
            <span className="italic text-gold">identidade.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-md text-base leading-relaxed text-ink-soft/80 md:text-lg"
          >
            Cortes, coloração e styling personalizados no Porto.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-8 py-4 text-sm font-medium text-bone transition-colors hover:bg-gold"
            >
              Marcar pelo WhatsApp
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="#trabalhos"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 px-8 py-4 text-sm font-medium text-ink transition-colors hover:border-gold hover:text-gold"
            >
              Ver trabalhos
            </a>
          </motion.div>
        </div>

        {/* Imagem */}
        <div className="relative md:col-span-6 lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] md:aspect-[3/4] lg:aspect-[4/5]"
          >
            {/*
              PLACEHOLDER — substituir por uma fotografia real de trabalho
              do Mateus Pereira (ex: /public/images/hero/hero.jpg)
            */}
            <Image
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=80"
              alt="Trabalho de coloração e styling capilar realizado no salão"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 55vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute -bottom-6 left-6 hidden rounded-2xl border border-sand bg-bone/90 px-6 py-4 shadow-lg backdrop-blur-sm sm:block"
          >
            <p className="font-display text-2xl italic text-gold">Est.</p>
            <p className="text-xs uppercase tracking-widest2 text-stone">
              Hairstyling no Porto
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
