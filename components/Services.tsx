import {
  Scissors,
  Sparkles,
  Palette,
  Sun,
  Wand2,
  Droplet,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { AnimateIn } from "@/components/ui/AnimateIn";

const ICONS: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  "corte-feminino": Scissors,
  "corte-masculino": Scissors,
  coloracao: Palette,
  "madeixas-balayage": Sun,
  styling: Wand2,
  tratamentos: Droplet,
};

export function Services() {
  return (
    <section id="servicos" className="bg-bone py-24 md:py-32">
      <div className="container-page">
        <AnimateIn className="max-w-xl">
          <p className="eyebrow mb-4">O que fazemos</p>
          <h2 className="section-heading">Serviços pensados para si.</h2>
        </AnimateIn>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.id] ?? Sparkles;
            return (
              <AnimateIn key={service.id} delay={i * 0.06}>
                <div className="group h-full rounded-2xl border border-ink/8 bg-white/50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_20px_40px_-24px_rgba(23,20,18,0.25)]">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-ink text-bone transition-colors duration-300 group-hover:bg-gold">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display text-xl text-ink">
                    {service.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft/75">
                    {service.description}
                  </p>
                  <p className="mt-6 text-xs uppercase tracking-widest2 text-gold">
                    {service.priceFrom ? `Desde ${service.priceFrom}` : "Desde €—"}
                  </p>
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
