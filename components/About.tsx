import Image from "next/image";
import { Check } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";

const HIGHLIGHTS = [
  "Atendimento personalizado",
  "Técnicas modernas",
  "Foco na saúde do cabelo",
  "Experiência adaptada a cada cliente",
];

export function About() {
  return (
    <section id="sobre" className="bg-bone py-24 md:py-32">
      <div className="container-page grid grid-cols-1 items-center gap-14 md:grid-cols-12">
        <AnimateIn className="relative md:col-span-5">
          <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[1.75rem] md:max-w-none">
            {/* PLACEHOLDER — substituir por uma fotografia real do Mateus Pereira */}
            <Image
              src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=900&q=80"
              alt="Mateus Pereira, hairstylist, a trabalhar no salão"
              fill
              loading="lazy"
              sizes="(max-width: 768px) 90vw, 40vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -right-4 -top-4 -z-10 h-full w-full rounded-[1.75rem] border border-gold/30 md:-right-6 md:-top-6" />
        </AnimateIn>

        <div className="md:col-span-7">
          <AnimateIn>
            <p className="eyebrow mb-4">Sobre</p>
            <h2 className="section-heading">
              Um olhar atento a cada detalhe.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft/80">
              Mateus Pereira é hairstylist no Porto, especializado em cortes,
              coloração e transformações personalizadas. Cada serviço é
              pensado de acordo com o estilo, personalidade e características
              de cada cliente.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.15}>
            <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {HIGHLIGHTS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <Check size={14} />
                  </span>
                  <span className="text-sm text-ink-soft">{item}</span>
                </li>
              ))}
            </ul>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
