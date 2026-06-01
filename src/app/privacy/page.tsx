import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Informativa sulla Privacy — ${SITE.name}`,
  description: "Informativa sul trattamento dei dati personali ai sensi del Regolamento UE 2016/679 (GDPR).",
};

const sections = [
  {
    title: "1. Titolare del trattamento",
    body: `Il titolare del trattamento dei dati personali è ${SITE.fullName}, con studio in ${SITE.address}. Contatto: ${SITE.email}.`,
  },
  {
    title: "2. Dati raccolti",
    body: "Attraverso il modulo di contatto raccogliamo: nome, cognome, indirizzo e-mail, numero di telefono e le informazioni che l'utente inserisce liberamente nel campo messaggio (situazione clinica, preferenze di contatto).",
  },
  {
    title: "3. Finalità e base giuridica",
    body: "I dati sono trattati esclusivamente per rispondere alle richieste di consulenza e preventivo inviate dall'utente (base giuridica: esecuzione di misure precontrattuali su richiesta dell'interessato, art. 6 par. 1 lett. b GDPR). Non utilizziamo i dati per finalità di marketing senza esplicito consenso.",
  },
  {
    title: "4. Modalità di trattamento",
    body: "I dati vengono trasmessi tramite WhatsApp (Meta Platforms Ireland Ltd.) al momento dell'invio del modulo. Si invita a consultare l'informativa sulla privacy di WhatsApp disponibile sul sito ufficiale di Meta.",
  },
  {
    title: "5. Periodo di conservazione",
    body: "I dati sono conservati per il tempo strettamente necessario a gestire la richiesta e, in caso di instaurazione di un rapporto professionale, per il periodo previsto dalla legge italiana applicabile (max 10 anni per documenti contabili).",
  },
  {
    title: "6. Comunicazione a terzi",
    body: "I dati non vengono ceduti, venduti o comunicati a terzi, fatta eccezione per gli eventuali fornitori di servizi tecnici strettamente necessari all'erogazione del servizio (es. hosting), i quali operano in qualità di responsabili del trattamento.",
  },
  {
    title: "7. Diritti dell'interessato",
    body: `In qualità di interessato hai il diritto di: accedere ai tuoi dati personali; richiederne la rettifica o la cancellazione; opporti al trattamento; richiedere la limitazione del trattamento; richiedere la portabilità dei dati; revocare il consenso in qualsiasi momento. Per esercitare i tuoi diritti scrivi a ${SITE.email}.`,
  },
  {
    title: "8. Reclami",
    body: "Hai il diritto di proporre reclamo al Garante per la Protezione dei Dati Personali (www.garanteprivacy.it) qualora ritenga che il trattamento dei tuoi dati violi il GDPR.",
  },
  {
    title: "9. Cookie",
    body: "Questo sito non utilizza cookie di profilazione o di tracciamento di terze parti. Potrebbero essere presenti cookie tecnici strettamente necessari al funzionamento del sito.",
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-ink pt-32 pb-24">
      <div className="mx-auto max-w-3xl px-5 md:px-10">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-xs font-medium tracking-widest text-gold hover:opacity-80"
        >
          ← Torna al sito
        </a>

        <h1 className="display mt-10 text-4xl leading-[0.95] text-cream sm:text-5xl md:text-6xl">
          Informativa sulla Privacy
        </h1>
        <p className="mt-5 text-sm text-muted-2">
          Ai sensi del Regolamento UE 2016/679 (GDPR) — Ultimo aggiornamento: 2026
        </p>

        <div className="hairline my-10" />

        <div className="space-y-10">
          {sections.map((s) => (
            <section key={s.title}>
              <h2 className="text-base font-semibold tracking-wide text-cream">
                {s.title}
              </h2>
              <p className="mt-3 text-sm leading-[1.8] text-cream-dim">
                {s.body}
              </p>
            </section>
          ))}
        </div>

        <div className="hairline my-10" />

        <p className="text-xs text-muted-2">
          {SITE.fullName} · {SITE.address} · {SITE.email}
        </p>
      </div>
    </main>
  );
}
