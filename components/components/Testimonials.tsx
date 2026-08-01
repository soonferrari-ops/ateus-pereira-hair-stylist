import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Strand } from "@/components/ui/Strand";

export function Testimonials() {
  return (
    <section className="bg-ink py-24 text-bone md:py-32">
      <div className="container-page">
        <AnimateIn className="max-w-xl">
          <p className="text-xs uppercase tracking-widest2 text-gold-light">
            Testemunhos
          </p>
          <h2 className="mt-4 font-display text-3xl leading-tight md:text-4xl">
            O que dizem os clientes.
          </h2>
        </AnimateIn>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <AnimateIn key={t.id} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-bone/10 bg-bone/5 p-8">
                <div className="flex gap-1 text-gold-light" aria-hidden="true">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} size={15} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="sr-only">{`Avaliação: ${t.rating} de 5 estrelas`}</p>
                <p className="mt-5 text-sm leading-relaxed text-bone/80">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="mt-6 text-sm font-medium text-bone">
                  {t.name}
                  <span className="ml-2 text-xs font-normal text-bone/50">
                    · {t.service}
                  </span>
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>

        <Strand className="mt-16 opacity-40" />
      </div>
    </section>
  );
}
