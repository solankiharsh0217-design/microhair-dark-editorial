"use client";
import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { SITE } from "@/lib/constants";

const SITUAZIONI = [
  "Stempiatura frontale",
  "Diradamento vertex",
  "Calvizie avanzata",
  "Copertura cicatrici",
  "Densità post-trapianto",
  "Correzione lavori precedenti",
];

export default function ContactForm() {
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [situazione, setSituazione] = useState("");
  const [orario, setOrario] = useState("");
  const [messaggio, setMessaggio] = useState("");
  const [privacy, setPrivacy] = useState(false);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!nome.trim() || !telefono.trim()) {
      setError("Inserisci almeno il tuo nome e il numero di telefono.");
      return;
    }
    if (!privacy) {
      setError("Accetta l'informativa sulla privacy per continuare.");
      return;
    }
    setError("");

    const parts = [
      `Ciao Luca, mi chiamo *${nome.trim()} ${cognome.trim()}*.`,
      `📞 Telefono: ${telefono.trim()}`,
      email.trim() && `📧 Email: ${email.trim()}`,
      situazione && `💈 Situazione: ${situazione}`,
      orario && `🕐 Preferisco essere ricontattato: ${orario}`,
      messaggio.trim() && `\n📝 ${messaggio.trim()}`,
    ]
      .filter(Boolean)
      .join("\n");

    const waUrl = `${SITE.whatsapp}?text=${encodeURIComponent(parts)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="mt-10 flex flex-col items-start gap-5 border border-gold/30 bg-gold/5 p-8 md:mt-14 md:p-10">
        <CheckCircle className="h-8 w-8 text-gold" />
        <div>
          <p className="display text-2xl text-cream">
            Grazie, {nome}!
          </p>
          <p className="mt-3 text-sm leading-[1.7] text-cream-dim">
            Si è aperto WhatsApp con il tuo messaggio pre-compilato.
            Luca ti risponderà entro 2 ore lavorative.
          </p>
        </div>
        <a
          href={SITE.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-gold underline underline-offset-4 hover:opacity-80"
        >
          Apri WhatsApp manualmente →
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 space-y-6 md:mt-14 md:space-y-7" noValidate>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <FormField label="Nome *" htmlFor="nome">
          <input
            id="nome"
            type="text"
            placeholder="Il tuo nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="w-full border border-line bg-surface/30 px-5 py-4 text-base text-cream placeholder:text-muted-2 outline-none transition-all focus:border-gold"
            required
          />
        </FormField>
        <FormField label="Cognome" htmlFor="cognome">
          <input
            id="cognome"
            type="text"
            placeholder="Il tuo cognome"
            value={cognome}
            onChange={(e) => setCognome(e.target.value)}
            className="w-full border border-line bg-surface/30 px-5 py-4 text-base text-cream placeholder:text-muted-2 outline-none transition-all focus:border-gold"
          />
        </FormField>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <FormField label="Email" htmlFor="email">
          <input
            id="email"
            type="email"
            placeholder="tu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-line bg-surface/30 px-5 py-4 text-base text-cream placeholder:text-muted-2 outline-none transition-all focus:border-gold"
          />
        </FormField>
        <FormField label="Telefono *" htmlFor="telefono">
          <input
            id="telefono"
            type="tel"
            placeholder="+39 000 000 0000"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            className="w-full border border-line bg-surface/30 px-5 py-4 text-base text-cream placeholder:text-muted-2 outline-none transition-all focus:border-gold"
            required
          />
        </FormField>
      </div>

      <FormField label="La tua situazione" htmlFor="situazione">
        <select
          id="situazione"
          value={situazione}
          onChange={(e) => setSituazione(e.target.value)}
          className="w-full appearance-none border border-line bg-surface/30 px-5 py-4 text-base text-cream outline-none transition-all focus:border-gold"
        >
          <option value="" className="bg-ink">Seleziona...</option>
          {SITUAZIONI.map((s) => (
            <option key={s} value={s} className="bg-ink">{s}</option>
          ))}
        </select>
      </FormField>

      <div>
        <p className="eyebrow-muted mb-4">Quando preferisci essere ricontattato?</p>
        <div className="grid grid-cols-3 gap-3">
          {["Mattina", "Pomeriggio", "Sera"].map((s) => (
            <label
              key={s}
              className={`flex cursor-pointer items-center justify-center border px-4 py-4 text-sm transition-all ${
                orario === s
                  ? "border-gold bg-gold/10 text-cream"
                  : "border-line bg-surface/30 text-cream-dim hover:border-gold/60"
              }`}
            >
              <input
                type="radio"
                name="orario"
                value={s}
                checked={orario === s}
                onChange={() => setOrario(s)}
                className="sr-only"
              />
              {s}
            </label>
          ))}
        </div>
      </div>

      <FormField label="Messaggio (opzionale)" htmlFor="messaggio">
        <textarea
          id="messaggio"
          rows={4}
          placeholder="Raccontaci la tua storia..."
          value={messaggio}
          onChange={(e) => setMessaggio(e.target.value)}
          className="w-full resize-none border border-line bg-surface/30 px-5 py-4 text-base text-cream placeholder:text-muted-2 outline-none transition-all focus:border-gold"
        />
      </FormField>

      <label className="flex cursor-pointer items-start gap-3 text-xs text-cream-dim">
        <input
          type="checkbox"
          checked={privacy}
          onChange={(e) => setPrivacy(e.target.checked)}
          className="mt-0.5 accent-gold"
        />
        <span>
          Ho letto e accetto l&apos;
          <a
            href="/privacy"
            className="text-gold underline-offset-2 hover:underline"
          >
            Informativa sulla Privacy
          </a>
          .
        </span>
      </label>

      {error && (
        <p className="text-sm text-red-400">{error}</p>
      )}

      <div className="flex flex-col items-stretch gap-4 sm:flex-row">
        <button
          type="submit"
          className="group inline-flex cursor-pointer items-center justify-center gap-3 rounded-full bg-gold px-8 py-5 text-sm font-semibold tracking-wide text-ink transition-all hover:bg-cream"
        >
          Invia la tua richiesta
          <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
        <a
          href={SITE.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex cursor-pointer items-center justify-center gap-3 rounded-full border border-gold/40 px-8 py-5 text-sm font-semibold tracking-wide text-cream transition-all hover:border-gold hover:bg-gold/5"
        >
          Scrivici su WhatsApp
        </a>
      </div>
    </form>
  );
}

function FormField({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="eyebrow-muted mb-4 block">
        {label}
      </label>
      {children}
    </div>
  );
}
