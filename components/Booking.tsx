import { MessageCircle, Phone, MailPlus } from "lucide-react";
import { BUSINESS, buildWhatsAppLink } from "@/lib/constants";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Strand } from "@/components/ui/Strand";

export function Booking() {
  return (
    <section className="relative bg-bone py-24 md:py-32">
      <div className="container-page flex flex-col items-center text-center">
        <AnimateIn>
          <p className="eyebrow mb-4">Marcação</p>
          <h2 className="section-heading max-w-2xl">
            Pronto para mudar o teu visual?
          </h2>
          <p className="mx-auto mt-5 max-w-md text-sm text-ink-soft/75">
            Escolha a forma mais prática de entrar em contacto e vamos
            encontrar o horário ideal para si.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.15}>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-8 py-4 text-sm font-medium text-bone transition-colors hover:bg-gold"
            >
              <MessageCircle size={17} />
              Marcar pelo WhatsApp
            </a>
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 px-8 py-4 text-sm font-medium text-ink transition-colors hover:border-gold hover:text-gold"
            >
              <Phone size={17} />
              Ligar agora
            </a>
            <a
              href="#contactos"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 px-8 py-4 text-sm font-medium text-ink transition-colors hover:border-gold hover:text-gold"
            >
              <MailPlus size={17} />
              Enviar mensagem
            </a>
          </div>
        </AnimateIn>

        <Strand className="mt-16 max-w-md opacity-70" />
      </div>
    </section>
  );
}
