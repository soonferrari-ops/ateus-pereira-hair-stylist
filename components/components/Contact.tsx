import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { ContactForm } from "@/components/ContactForm";

export function Contact() {
  return (
    <section id="contactos" className="bg-bone-dim py-24 md:py-32">
      <div className="container-page grid grid-cols-1 gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <AnimateIn>
            <p className="eyebrow mb-4">Contactos</p>
            <h2 className="section-heading">Vamos falar.</h2>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <ul className="mt-10 space-y-6">
              <li className="flex items-start gap-4">
                <MapPin size={19} className="mt-0.5 shrink-0 text-gold" />
                <div>
                  <p className="text-sm font-medium text-ink">Morada</p>
                  <p className="text-sm text-ink-soft/75">{BUSINESS.address}</p>
                  <p className="text-xs text-stone">
                    (morada provisória — substituir)
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Phone size={19} className="mt-0.5 shrink-0 text-gold" />
                <div>
                  <p className="text-sm font-medium text-ink">Telefone</p>
                  <a
                    href={BUSINESS.phoneHref}
                    className="text-sm text-ink-soft/75 hover:text-gold"
                  >
                    {BUSINESS.phoneDisplay}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Clock size={19} className="mt-0.5 shrink-0 text-gold" />
                <div>
                  <p className="text-sm font-medium text-ink">Horário</p>
                  {BUSINESS.hours.map((h) => (
                    <p key={h.days} className="text-sm text-ink-soft/75">
                      {h.days}: {h.time}
                    </p>
                  ))}
                </div>
              </li>
            </ul>

            <div className="mt-8 flex gap-3">
              <a
                href={BUSINESS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-gold hover:text-gold"
              >
                <Instagram size={18} />
              </a>
              <a
                href={BUSINESS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-gold hover:text-gold"
              >
                <Facebook size={18} />
              </a>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <div className="mt-10 overflow-hidden rounded-2xl border border-ink/10">
              <iframe
                title="Localização no Google Maps (provisória)"
                src={BUSINESS.mapEmbedSrc}
                width="100%"
                height="260"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </AnimateIn>
        </div>

        <div className="lg:col-span-7">
          <AnimateIn delay={0.1}>
            <div className="rounded-3xl border border-ink/8 bg-white/50 p-8 md:p-10">
              <h3 className="font-display text-2xl text-ink">
                Pedido de marcação
              </h3>
              <p className="mt-2 text-sm text-ink-soft/70">
                Preencha o formulário e entraremos em contacto para confirmar.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
