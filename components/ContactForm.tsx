"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { SERVICE_OPTIONS } from "@/lib/constants";

type FormState = {
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  message: string;
};

const INITIAL_STATE: FormState = {
  name: "",
  phone: "",
  email: "",
  service: "",
  date: "",
  message: "",
};

type Errors = Partial<Record<keyof FormState, string>>;

export function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = (): Errors => {
    const next: Errors = {};
    if (!form.name.trim()) next.name = "Indique o seu nome.";
    if (!form.phone.trim()) {
      next.phone = "Indique um número de telefone.";
    } else if (!/^[0-9+\s()-]{9,}$/.test(form.phone.trim())) {
      next.phone = "Número de telefone inválido.";
    }
    if (!form.email.trim()) {
      next.email = "Indique o seu email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = "Email inválido.";
    }
    if (!form.service) next.service = "Escolha o serviço pretendido.";
    if (!form.date) next.date = "Escolha uma data preferida.";
    return next;
  };

  const handleChange =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validation = validate();
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    setSubmitting(true);

    // ⚠️ Não existe backend real ligado.
    // Para ativar o envio de emails, ligue este formulário a um serviço como
    // Formspree (https://formspree.io) ou Resend (https://resend.com):
    //
    // await fetch("https://formspree.io/f/SEU_ID", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json", Accept: "application/json" },
    //   body: JSON.stringify(form),
    // });
    await new Promise((resolve) => setTimeout(resolve, 700));

    setSubmitting(false);
    setSubmitted(true);
    setForm(INITIAL_STATE);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-gold/30 bg-gold/5 px-8 py-14 text-center">
        <CheckCircle2 className="text-gold" size={36} />
        <p className="mt-4 font-display text-xl text-ink">
          Pedido enviado com sucesso.
        </p>
        <p className="mt-2 max-w-sm text-sm text-ink-soft/75">
          Obrigado pelo contacto. Entraremos em contacto consigo brevemente
          para confirmar a marcação.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-medium text-gold underline underline-offset-4"
        >
          Enviar novo pedido
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <Field
        label="Nome"
        id="name"
        value={form.name}
        onChange={handleChange("name")}
        error={errors.name}
        autoComplete="name"
      />
      <Field
        label="Telefone"
        id="phone"
        type="tel"
        value={form.phone}
        onChange={handleChange("phone")}
        error={errors.phone}
        autoComplete="tel"
      />
      <Field
        label="Email"
        id="email"
        type="email"
        value={form.email}
        onChange={handleChange("email")}
        error={errors.email}
        autoComplete="email"
        className="sm:col-span-2"
      />

      <div className="flex flex-col gap-1.5">
        <label htmlFor="service" className="text-sm text-ink-soft">
          Serviço pretendido
        </label>
        <select
          id="service"
          value={form.service}
          onChange={handleChange("service")}
          className={`rounded-lg border bg-white/60 px-4 py-3 text-sm text-ink outline-none transition-colors ${
            errors.service ? "border-red-400" : "border-ink/15 focus:border-gold"
          }`}
        >
          <option value="">Selecionar…</option>
          {SERVICE_OPTIONS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        {errors.service && <p className="text-xs text-red-500">{errors.service}</p>}
      </div>

      <Field
        label="Data preferida"
        id="date"
        type="date"
        value={form.date}
        onChange={handleChange("date")}
        error={errors.date}
      />

      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <label htmlFor="message" className="text-sm text-ink-soft">
          Mensagem <span className="text-stone">(opcional)</span>
        </label>
        <textarea
          id="message"
          rows={4}
          value={form.message}
          onChange={handleChange("message")}
          className="resize-none rounded-lg border border-ink/15 bg-white/60 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-gold"
          placeholder="Conte-nos um pouco sobre o que pretende…"
        />
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex w-full items-center justify-center rounded-full bg-ink px-8 py-4 text-sm font-medium text-bone transition-colors hover:bg-gold disabled:opacity-60 sm:w-auto"
        >
          {submitting ? "A enviar…" : "Enviar pedido de marcação"}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  id,
  value,
  onChange,
  error,
  type = "text",
  autoComplete,
  className = "",
}: {
  label: string;
  id: keyof FormState;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  type?: string;
  autoComplete?: string;
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label htmlFor={id} className="text-sm text-ink-soft">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        className={`rounded-lg border bg-white/60 px-4 py-3 text-sm text-ink outline-none transition-colors ${
          error ? "border-red-400" : "border-ink/15 focus:border-gold"
        }`}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}
