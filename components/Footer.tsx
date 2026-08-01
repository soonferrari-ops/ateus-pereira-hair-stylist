import { Instagram, Facebook } from "lucide-react";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink py-16 text-bone/70">
      <div className="container-page grid grid-cols-1 gap-12 md:grid-cols-4">
        <div>
          <p className="font-display text-xl text-bone">Mateus Pereira</p>
          <p className="mt-1 text-xs uppercase tracking-widest2 text-gold-light">
            Hair Stylist
          </p>
          <p className="mt-4 max-w-xs text-sm">
            Cortes, coloração e styling personalizados no Porto.
          </p>
        </div>

        <div>
          <p className="text-sm font-medium text-bone">Links rápidos</p>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-gold-light">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-bone">Contactos</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>{BUSINESS.address}</li>
            <li>
              <a href={BUSINESS.phoneHref} className="hover:text-gold-light">
                {BUSINESS.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${BUSINESS.email}`} className="hover:text-gold-light">
                {BUSINESS.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-bone">Redes sociais</p>
          <div className="mt-4 flex gap-3">
            <a
              href={BUSINESS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-bone/15 transition-colors hover:border-gold-light hover:text-gold-light"
            >
              <Instagram size={16} />
            </a>
            <a
              href={BUSINESS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-bone/15 transition-colors hover:border-gold-light hover:text-gold-light"
            >
              <Facebook size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="container-page mt-14 flex flex-col items-center justify-between gap-4 border-t border-bone/10 pt-8 text-xs text-bone/50 sm:flex-row">
        <p>
          © {year} {BUSINESS.fullName}. Todos os direitos reservados.
        </p>
        <div className="flex gap-6">
          <a href="/politica-de-privacidade" className="hover:text-gold-light">
            Política de Privacidade
          </a>
          <a href="/livro-de-reclamacoes" className="hover:text-gold-light">
            Livro de Reclamações
          </a>
        </div>
      </div>
    </footer>
  );
}
