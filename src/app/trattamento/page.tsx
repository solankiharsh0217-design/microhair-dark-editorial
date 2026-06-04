import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Check, Sparkles, ShieldCheck, Clock, Star, Shield } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import CTABlock from "@/components/ui/CTABlock";
import ProcessStep from "@/components/ui/ProcessStep";
import {
  SITE,
  BENEFITS,
  STATS,
  PROCESS,
  SOLUTIONS,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: `Il Trattamento SMP — ${SITE.name} | Cos'è la Micropigmentazione`,
  description:
    "Scopri cos'è la micropigmentazione del cuoio capelluto, i suoi benefici, il processo e le soluzioni per ogni tipo di calvizie.",
};

export default function TrattamentoPage() {
  return (
    <>
      <Metodo />
      <Benefici />
      <Processo />
      <Soluzioni />
      <TrapiantoVsMicrohair />
    </>
  );
}

/* ── METODO ────────────────────────────────────────────────────────── */

function Metodo() {
  return (
    <section
      id="metodo"
      className="relative border-b border-line py-12 md:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <ScrollReveal>
          <SectionLabel n="01">Cos&apos;è la Microhair</SectionLabel>
          <h1 className="display mt-7 max-w-4xl text-4xl leading-[0.95] text-cream sm:text-5xl md:text-7xl">
            Non è un tatuaggio.
            <br />
            <em className="italic text-gold">È una disciplina.</em>
          </h1>
          <p className="mt-10 max-w-2xl text-base leading-[1.75] text-cream-dim md:text-lg">
            La micropigmentazione del cuoio capelluto è un trattamento
            altamente specializzato, frutto della tricologia — la branca medica
            che studia la calvizie. Non disegna capelli, non tatua bulbi:
            riveste le orme follicolari con precisione millimetrica.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 items-center gap-8 md:mt-20 md:grid-cols-12 md:gap-16">
          <ScrollReveal className="md:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden border border-line bg-surface">
              <Image
                src="/images/treatment-detail.png"
                alt="Dettaglio del trattamento SMP — pigmenti e attrezzatura sterile"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
              <div className="absolute left-6 top-6">
                <p className="num-mono text-[10px] tracking-[0.3em] text-gold">IN STUDIO · ATTREZZATURA STERILE</p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={150} className="md:col-span-6">
            <p className="eyebrow-muted">— La differenza</p>
            <h2 className="display mt-5 text-3xl leading-[1.05] text-cream md:text-4xl">
              La SMP{" "}
              <em className="italic text-gold">non è</em> un tatuaggio, e{" "}
              <em className="italic text-gold">non è</em> un microblading.
            </h2>
            <div className="mt-10 space-y-6 text-base leading-[1.8] text-cream-dim md:text-lg">
              <p>
                Attraverso uno strumento specifico — il{" "}
                <em className="italic text-cream">tricografo</em> — e pigmenti
                biocompatibili, realizziamo micro-depositi nell&apos;epidermide
                che rivestono le sezioni follicolari.
              </p>
              <p>
                Il risultato è l&apos;aspetto del bulbo del capello: naturale,
                realistico, armonioso con la tua fisionomia.
              </p>
            </div>
            <ul className="mt-10 space-y-4 text-sm text-cream-dim">
              {[
                "Attrezzatura dedicata, pigmenti certificati",
                "Procedura non invasiva, senza dolore",
                "Nessun sanguinamento, nessuna anestesia",
                "Risultato uniforme già dalla prima seduta",
              ].map((b) => (
                <li key={b} className="flex items-center gap-3">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full border border-gold/40 text-gold">
                    <Check className="h-3 w-3" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>

        <div className="mt-12 grid grid-cols-1 items-center gap-8 border-t border-line pt-12 md:mt-24 md:grid-cols-12 md:gap-16 md:pt-20">
          <ScrollReveal className="md:col-span-6 md:order-2">
            <div className="relative aspect-[4/3] overflow-hidden border border-line bg-surface">
              <Image
                src="/images/fade-detail.jpg"
                alt="Dettaglio sfumatura capelli — effetto rasato naturale"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
              <div className="absolute left-6 top-6">
                <p className="num-mono text-[10px] tracking-[0.3em] text-gold">LA SFUMATURA · EFFETTO RASATO</p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={150} className="md:col-span-6 md:order-1">
            <p className="eyebrow-muted">— Il risultato</p>
            <h2 className="display mt-5 text-3xl leading-[1.05] text-cream md:text-4xl">
              Un effetto <em className="italic text-gold">rasato</em>,
              <br />
              credibile a pochi centimetri.
            </h2>
            <p className="mt-8 max-w-xl text-base leading-[1.8] text-cream-dim md:text-lg">
              L&apos;SMP ricrea il follicolo pilifero a una densità calibrata
              sul tuo fototipo. Da vicino, da lontano, sotto la luce del sole
              o in una cena: il risultato è indistinguibile da una capigliatura
              naturale appena rasata.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-6">
              {[
                { k: "Ago", v: "0.18 mm" },
                { k: "Profondità", v: "0.5 — 1.2 mm" },
                { k: "Sedute", v: "2 — 4" },
                { k: "Distanza tra punti", v: "< 1 mm" },
              ].map((d) => (
                <div key={d.k} className="border-t border-line pt-4">
                  <p className="num-mono text-[10px] tracking-widest text-muted-2">{d.k.toUpperCase()}</p>
                  <p className="display mt-2 text-2xl text-cream">{d.v}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ── BENEFICI ──────────────────────────────────────────────────────── */

function Benefici() {
  const icons: Record<string, React.ComponentType<{ className?: string }>> = {
    shield: ShieldCheck,
    spark: Sparkles,
    clock: Clock,
    star: Star,
  };

  return (
    <section className="relative border-b border-line py-12 md:py-20 lg:py-28">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-20">
          <div className="md:col-span-5">
            <ScrollReveal>
              <SectionLabel n="02">I benefici</SectionLabel>
              <h2 className="display mt-7 text-4xl leading-[0.95] text-cream sm:text-5xl md:text-6xl">
                Quattro motivi
                <br />
                per iniziare{" "}
                <em className="italic text-gold">oggi.</em>
              </h2>
              <p className="mt-10 max-w-md text-base leading-[1.75] text-cream-dim">
                La SMP è una scelta concreta, misurabile, senza sorprese.
              </p>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-10 inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-gold"
              >
                <span className="border-b border-gold/40 pb-0.5 group-hover:border-gold">
                  Prenota una consulenza gratuita
                </span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="mt-12 border-t border-line pt-8">
                <p className="eyebrow-muted">Le statistiche</p>
                <div className="mt-8 grid grid-cols-2 gap-8">
                  {STATS.map((s, i) => (
                    <div key={s.k}>
                      <p className="num-mono text-[10px] tracking-widest text-muted-2">0{i + 1}</p>
                      <p className="display mt-3 text-3xl text-cream md:text-4xl">{s.v}</p>
                      <p className="mt-2 text-sm text-cream-dim">{s.k}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="md:col-span-7">
            {BENEFITS.map((b, i) => {
              const Icon = icons[b.icon] ?? Shield;
              return (
                <ScrollReveal key={b.title} delay={i * 80}>
                  <article className="group flex items-start gap-6 border-t border-line py-10">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/5 text-gold transition-all group-hover:border-gold group-hover:bg-gold/10">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline gap-4">
                        <span className="num-mono text-xs text-muted-2">0{i + 1}</span>
                        <h3 className="display text-2xl text-cream transition-colors group-hover:text-gold md:text-3xl">
                          {b.title}
                        </h3>
                      </div>
                      <p className="mt-4 max-w-xl text-sm leading-[1.75] text-cream-dim md:text-base">
                        {b.body}
                      </p>
                    </div>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── PROCESSO ──────────────────────────────────────────────────────── */

function Processo() {
  return (
    <section
      id="processo"
      className="relative border-b border-line py-12 md:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="mb-10 grid grid-cols-1 gap-8 md:mb-16 md:grid-cols-12 md:gap-20">
          <div className="md:col-span-7">
            <ScrollReveal>
              <SectionLabel n="03">Il processo</SectionLabel>
              <h2 className="display mt-7 text-4xl leading-[0.95] text-cream sm:text-5xl md:text-6xl">
                Come funziona la
                <br />
                <em className="italic text-gold">micropigmentazione?</em>
              </h2>
            </ScrollReveal>
          </div>
          <div className="flex items-end md:col-span-5 md:justify-end">
            <ScrollReveal delay={150}>
              <p className="max-w-md text-base leading-[1.75] text-cream-dim">
                Un protocollo definito in anni di pratica. Ogni fase ha un
                ritmo, una durata, un risultato atteso. Nessuna improvvisazione.
              </p>
            </ScrollReveal>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {PROCESS.map((p, i) => (
            <ScrollReveal key={p.n} delay={i * 100}>
              <ProcessStep n={p.n} title={p.title} body={p.body} duration={p.duration} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={300}>
          <div className="mt-12 border-t border-line pt-12 text-center">
            <CTABlock
              primaryLabel="Invia le tue foto su WhatsApp"
              secondaryLabel="Prenota una consulenza"
              align="center"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ── SOLUZIONI ─────────────────────────────────────────────────────── */

function Soluzioni() {
  return (
    <section
      id="soluzioni"
      className="relative border-b border-line py-12 md:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="mb-10 grid grid-cols-1 gap-8 md:mb-16 md:grid-cols-12 md:gap-20">
          <div className="md:col-span-7">
            <ScrollReveal>
              <SectionLabel n="04">Le soluzioni</SectionLabel>
              <h2 className="display mt-7 text-4xl leading-[0.95] text-cream sm:text-5xl md:text-7xl">
                <em className="italic text-gold">Per</em> quali
                <br />
                casi è indicata
                <br />
                <span className="text-cream-dim">la micropigmentazione.</span>
              </h2>
            </ScrollReveal>
          </div>
          <div className="flex items-end md:col-span-5 md:justify-end">
            <ScrollReveal delay={150}>
              <div className="max-w-md space-y-6">
                <p className="eyebrow-muted text-[10px]">Soluzioni personalizzate per ogni esigenza</p>
                <CTABlock primaryLabel="Preventivo gratuito in 24h" secondaryLabel="Consulenza gratuita" align="left" />
              </div>
            </ScrollReveal>
          </div>
        </div>

        <div className="grid grid-cols-1 border-t border-line md:grid-cols-2">
          {SOLUTIONS.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 80}>
              <article
                className={`group border-b border-line p-6 transition-all hover:bg-gold/[0.03] sm:p-8 md:p-10 ${
                  i % 2 === 1 ? "md:border-l md:border-line" : ""
                } ${i >= SOLUTIONS.length - 2 ? "md:border-b-0" : ""} ${
                  i === SOLUTIONS.length - 1 ? "border-b-0" : ""
                }`}
              >
                <span className="num-mono text-4xl leading-none text-gold/20 transition-colors group-hover:text-gold/40 sm:text-5xl md:text-6xl">
                  0{i + 1}
                </span>
                <p className="eyebrow-muted mt-8">{s.badge}</p>
                <h3 className="display mt-3 text-3xl text-cream transition-colors group-hover:text-gold md:text-4xl">
                  {s.title}
                </h3>
                <p className="mt-5 text-sm leading-[1.8] text-cream-dim md:text-base">{s.body}</p>
                <div className="mt-7 flex items-center gap-2 text-xs font-medium text-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="border-b border-gold/40 pb-0.5">Richiedi un preventivo</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── TRAPIANTO VS MICROHAIR ────────────────────────────────────────── */

function TrapiantoVsMicrohair() {
  return (
    <section className="relative py-12 md:py-20 lg:py-28">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-20">
          <div className="md:col-span-5">
            <ScrollReveal>
              <SectionLabel n="05">Una scelta serena</SectionLabel>
              <h2 className="display mt-7 text-4xl leading-[0.95] text-cream sm:text-5xl md:text-6xl">
                Trapianto o
                <br />
                <em className="italic text-gold">micropigmentazione?</em>
              </h2>
              <p className="mt-8 num-mono text-xs tracking-widest text-muted-2 uppercase">
                Forse non devi scegliere.
              </p>
            </ScrollReveal>
          </div>

          <div className="md:col-span-7">
            <ScrollReveal delay={150}>
              <div className="space-y-6 text-base leading-[1.8] text-cream-dim md:text-lg">
                <p>
                  Se stai perdendo i capelli, potresti chiederti:{" "}
                  <em className="italic text-cream">
                    &quot;Cosa posso fare per tornare a sentirmi bene con la mia immagine?&quot;
                  </em>
                </p>
                <p>
                  Molti dei nostri clienti hanno iniziato da qui: hanno scelto la{" "}
                  <em className="italic text-gold">micropigmentazione</em> per ritrovare
                  subito un&apos;immagine più sicura, naturale e uniforme.
                </p>
                <p className="text-cream">
                  <em className="italic text-gold">La cosa più interessante?</em>{" "}
                  La micropigmentazione è <em className="italic">compatibile</em> sia
                  con la ricrescita dei capelli sia con un eventuale trapianto. Avere
                  una base realizzata con la SMP rende l&apos;effetto visivo{" "}
                  <em className="italic text-gold">più denso e realistico</em> anche
                  dopo il trapianto.
                </p>
                <p>
                  Non devi decidere tutto oggi. Inizia dal primo passo: ti aiutiamo
                  a costruire un&apos;immagine con cui sentirti bene già ora.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="mt-10 border-t border-line pt-8">
                <CTABlock
                  primaryLabel="Prenota una consulenza gratuita"
                  secondaryLabel="Chiama direttamente"
                  align="left"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
