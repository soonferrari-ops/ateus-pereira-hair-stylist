import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Política de Privacidade | Mateus Pereira Hair Stylist",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="container-page py-24 md:py-32">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-gold"
      >
        <ArrowLeft size={16} />
        Voltar ao início
      </Link>

      <h1 className="section-heading mt-8">Política de Privacidade</h1>

      <div className="mt-8 max-w-2xl space-y-5 text-sm leading-relaxed text-ink-soft/80">
        <p className="rounded-lg border border-gold/30 bg-gold/5 p-4 text-ink-soft">
          ⚠️ Conteúdo provisório. Este texto deve ser revisto e substituído por
          uma política de privacidade real, em conformidade com o RGPD,
          antes da publicação do website.
        </p>
        <p>
          {BUSINESS.fullName} respeita a privacidade dos seus clientes e
          visitantes. Esta página descreverá como os dados pessoais
          recolhidos através do formulário de contacto e marcação são
          utilizados, armazenados e protegidos.
        </p>
        <p>
          Deverá incluir, entre outros pontos: que dados são recolhidos,
          finalidade do tratamento, prazo de conservação, direitos do
          titular dos dados (acesso, retificação, apagamento) e contacto
          para exercício desses direitos.
        </p>
        <p>
          Contacto para questões de privacidade:{" "}
          <a href={`mailto:${BUSINESS.email}`} className="text-gold hover:underline">
            {BUSINESS.email}
          </a>
        </p>
      </div>
    </main>
  );
}
