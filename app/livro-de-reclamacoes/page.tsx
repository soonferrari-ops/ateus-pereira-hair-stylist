import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Livro de Reclamações | Mateus Pereira Hair Stylist",
};

export default function ComplaintsBookPage() {
  return (
    <main className="container-page py-24 md:py-32">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-gold"
      >
        <ArrowLeft size={16} />
        Voltar ao início
      </Link>

      <h1 className="section-heading mt-8">Livro de Reclamações</h1>

      <div className="mt-8 max-w-2xl space-y-5 text-sm leading-relaxed text-ink-soft/80">
        <p className="rounded-lg border border-gold/30 bg-gold/5 p-4 text-ink-soft">
          ⚠️ Nos termos da lei portuguesa, todos os estabelecimentos de
          atendimento ao público devem disponibilizar um Livro de
          Reclamações, físico e eletrónico. Este espaço deve ser ligado ao
          livro de reclamações eletrónico oficial antes da publicação.
        </p>
        <p>
          Pode aceder ao Livro de Reclamações Eletrónico através do portal
          oficial do Governo de Portugal.
        </p>
        <a
          href="https://www.livroreclamacoes.pt/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-gold hover:text-gold"
        >
          Livro de Reclamações Eletrónico
          <ExternalLink size={15} />
        </a>
      </div>
    </main>
  );
}
