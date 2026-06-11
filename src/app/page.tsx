import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Star,
  Quote,
  Phone,
  CheckCircle2,
} from "lucide-react";
import { InstagramIcon as Instagram } from "@/components/ui/SocialIcons";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import {
  SITE,
  PROBLEMS,
  STATS,
  TESTIMONIALS,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: `${SITE.name} — ${SITE.tagline}`,
  description:
    "Atelier di micropigmentazione del cuoio capelluto a Livorno, guidato da Luca Sagona. Risultato naturale, non chirurgico, garantito.",
};

const GALLERY = [
  { src: "/images/effetto-rasato.jpeg",      label: "Effetto Rasato",      sub: "Norwood V–VI · 3 sedute" },
  { src: "/images/effetto-densita.jpeg",     label: "Effetto Densità",     sub: "Norwood III–IV · 3 sedute" },
  { src: "/images/copertura-cicatrici.jpeg", label: "Copertura Cicatrici", sub: "Cicatrice FUT · 3 sedute" },
  { src: "/images/tecnica-granulata.jpeg",   label: "Tecnica Granulata",   sub: "Diradamento frontale · 3 sedute" },
  { src: "/images/tecnica-filo-a-filo.jpeg", label: "Tecnica Filo a Filo", sub: "Copertura completa · 3 sedute" },
  { src: "/images/case-1.png",               label: "Vista Superiore",     sub: "Norwood VI · 3 sedute" },
  { src: "/images/case-2.png",               label: "Attaccatura Ridisegnata", sub: "Norwood V · 3 sedute" },
  { src: "/images/case-3.png",               label: "Densità Completa",    sub: "Norwood IV · 3 sedute" },
] as const;

export default function Home() {
  return (
    <>
      <Hero />
      <RisultatiPreview />
      <ConversionStrip />
      <Problema />
      <StatsRow />
      <Testimonianze />
      <HomeCTA />
    </>
  );
}

/* ── HERO ──────────────────────────────────────────────────────────── */

function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden pb-16 md:pb-24">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/founder.jpeg"
          alt=""
          fill
          sizes="100vw"
          className="slow-zoom object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/30 to-transparent" />
      </div>
      <div className="pointer-events-none absolute inset-0 z-0 grain opacity-30" />

      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 md:px-10">
        <ScrollReveal>
          <div className="flex items-center gap-3">
            <span className="num-mono text-[10px] tracking-[0.4em] text-gold">ATELIER · LIVORNO</span>
            <span className="h-px w-10 bg-gold/40" />
            <span className="eyebrow-muted">EST. 2017</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <h1 className="display mt-6 max-w-5xl text-[13vw] leading-[0.92] text-cream sm:text-[11vw] md:mt-14 md:text-[8.5rem] lg:text-[9.5rem]">
            Buongiorno,
            <br />
            <em className="italic text-gold">mi chiamo Luca.</em>
          </h1>
        </ScrollReveal>

        <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-12 md:gap-16">
          <ScrollReveal delay={260} className="md:col-span-7">
            <p className="max-w-xl text-base leading-[1.75] text-cream md:text-lg">
              La soluzione non invasiva per{" "}
              <em className="italic text-gold">calvizie, diradamento e cicatrici</em>.
              Restituisco un&apos;immagine naturale, follicolo per follicolo.
            </p>
            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex cursor-pointer items-center justify-center gap-3 rounded-full bg-[#25D366] px-6 py-4 text-sm font-semibold tracking-wide text-white transition-all hover:bg-[#1ebe5a] sm:px-8 sm:py-5"
              >
                <span className="sm:hidden">Preventivo gratuito su WhatsApp</span>
                <span className="hidden sm:inline">Invia le tue foto — preventivo in 24h</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
              </a>
              <a
                href={SITE.phoneLink}
                className="group inline-flex cursor-pointer items-center justify-center gap-3 rounded-full border border-cream/30 bg-ink/40 px-6 py-4 text-sm font-medium tracking-wide text-cream backdrop-blur-md transition-all hover:border-gold hover:text-gold sm:px-8 sm:py-5"
              >
                <Phone className="h-4 w-4" />
                Consulenza gratuita in studio
              </a>
            </div>
            <p className="mt-4 text-xs text-muted-2">
              ✓ Nessun impegno &nbsp;·&nbsp; ✓ Risposta entro 24h &nbsp;·&nbsp; ✓ Consulenza gratuita
            </p>
          </ScrollReveal>

          <ScrollReveal delay={380} className="hidden md:col-span-4 md:col-start-9 md:block md:pt-3">
            <div className="space-y-4 border-l border-cream/20 pl-6">
              <p className="eyebrow-muted">— La promessa</p>
              <ul className="space-y-3 text-sm text-cream-dim md:text-base">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1 w-3 shrink-0 bg-gold" />
                  Risultato immediato, senza chirurgia.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1 w-3 shrink-0 bg-gold" />
                  Aspetto realistico già dalla prima seduta.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1 w-3 shrink-0 bg-gold" />
                  Consulenza iniziale gratuita e senza impegno.
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={500}>
          <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-cream/15 pt-5 md:mt-20 md:flex-row md:items-center">
            <div className="flex items-center gap-3 text-[11px] text-cream-dim">
              <Star className="h-3 w-3 fill-gold text-gold" />
              <span className="num-mono text-cream">{SITE.rating}</span>
              <span className="text-muted-2">/ 5 — {SITE.reviewCount} recensioni verificate</span>
              <span className="hidden h-3 w-px bg-cream/20 md:block" />
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden items-center gap-2 hover:text-gold md:flex"
              >
                <Instagram className="h-3.5 w-3.5" />
                @microhair.it
              </a>
            </div>
            <div className="flex items-center gap-3 text-[11px] text-cream-dim">
              <span className="num-mono tracking-widest">SCROLL ↓</span>
              <span className="h-px w-12 bg-cream/20" />
              <span className="hidden sm:inline">I Risultati</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ── RISULTATI PREVIEW — full gallery ─────────────────────────────── */

function RisultatiPreview() {
  return (
    <section className="relative border-b border-line py-12 md:py-20 lg:py-28">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">

        {/* Header */}
        <div className="mb-10 grid grid-cols-1 gap-8 md:mb-14 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-7">
            <ScrollReveal>
              <SectionLabel n="01">Risultati reali</SectionLabel>
              <h2 className="display mt-7 text-4xl leading-[0.95] text-cream sm:text-5xl md:text-7xl">
                <em className="italic text-gold">Prima</em> e dopo.
                <br />
                <span className="text-cream-dim">Vera sicurezza.</span>
              </h2>
            </ScrollReveal>
          </div>
          <div className="flex items-end md:col-span-5 md:justify-end">
            <ScrollReveal delay={150}>
              <p className="max-w-md text-base leading-[1.75] text-cream-dim">
                Cinque procedure reali, fotografate nello studio di Livorno.
                Ogni risultato è ottenuto in 3 sedute con il protocollo MicroHair.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Row 1 — 2 large images */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
          {GALLERY.slice(0, 2).map((item, i) => (
            <ScrollReveal key={item.src} delay={i * 60}>
              <article className="group cursor-pointer">
                <div className="relative aspect-[16/9] overflow-hidden border border-line bg-surface">
                  <Image
                    src={item.src}
                    alt={`${item.label} — prima e dopo`}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                  <div className="absolute left-5 top-5">
                    <p className="num-mono text-[10px] tracking-[0.3em] text-gold">CASO · 0{i + 1}</p>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                    <h3 className="display text-xl text-cream md:text-3xl">{item.label}</h3>
                    <p className="mt-1 text-xs text-cream-dim">{item.sub}</p>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* Row 2 — 3 medium images */}
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3 md:mt-6 md:gap-6">
          {GALLERY.slice(2, 5).map((item, i) => (
            <ScrollReveal key={item.src} delay={(i + 2) * 60}>
              <article className="group cursor-pointer">
                <div className="relative aspect-[16/9] overflow-hidden border border-line bg-surface">
                  <Image
                    src={item.src}
                    alt={`${item.label} — prima e dopo`}
                    fill
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                  <div className="absolute left-4 top-4">
                    <p className="num-mono text-[10px] tracking-[0.3em] text-gold">CASO · 0{i + 3}</p>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                    <h3 className="display text-lg text-cream md:text-2xl">{item.label}</h3>
                    <p className="mt-1 text-[11px] text-cream-dim">{item.sub}</p>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* Row 3 — 3 additional images */}
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3 md:mt-6 md:gap-6">
          {GALLERY.slice(5).map((item, i) => (
            <ScrollReveal key={item.src} delay={(i + 5) * 60}>
              <article className="group cursor-pointer">
                <div className="relative aspect-[16/9] overflow-hidden border border-line bg-surface">
                  <Image
                    src={item.src}
                    alt={`${item.label} — prima e dopo`}
                    fill
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                  <div className="absolute left-4 top-4">
                    <p className="num-mono text-[10px] tracking-[0.3em] text-gold">CASO · 0{i + 6}</p>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                    <h3 className="display text-lg text-cream md:text-2xl">{item.label}</h3>
                    <p className="mt-1 text-[11px] text-cream-dim">{item.sub}</p>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal delay={300}>
          <div className="mt-10 flex flex-col items-center gap-4 border-t border-line pt-10 sm:flex-row sm:justify-between">
            <p className="text-sm text-cream-dim">
              Vuoi vedere il tuo risultato prima di decidere?
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-xs font-semibold tracking-wide text-white transition-all hover:bg-[#1ebe5a]"
              >
                Invia le tue foto — simulazione gratuita
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:rotate-45" />
              </a>
              <Link
                href="/risultati"
                className="group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-gold/40 px-6 py-3 text-xs font-medium text-gold transition-all hover:border-gold"
              >
                Galleria completa
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ── CONVERSION STRIP ──────────────────────────────────────────────── */

function ConversionStrip() {
  return (
    <section className="border-b border-line bg-gold/[0.06] py-8 md:py-10">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            {[
              "600+ clienti trattati",
              "Consulenza iniziale gratuita",
              "Risposta garantita in 24h",
            ].map((t) => (
              <span key={t} className="flex items-center gap-2 text-sm text-cream-dim">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-gold" />
                {t}
              </span>
            ))}
          </div>
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex cursor-pointer items-center justify-center gap-2 self-start rounded-full bg-gold px-6 py-3 text-xs font-semibold tracking-wider text-ink uppercase transition-all hover:bg-cream sm:self-auto"
          >
            Prenota la consulenza gratuita
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:rotate-45" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ── PROBLEMA ──────────────────────────────────────────────────────── */

function Problema() {
  return (
    <section className="relative overflow-hidden border-b border-line py-12 md:py-20 lg:py-28">
      <div className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full gradient-radial-gold opacity-30 blur-3xl" />

      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-20">
          <div className="md:col-span-5">
            <ScrollReveal>
              <SectionLabel n="02">Il problema</SectionLabel>
              <h2 className="display mt-7 text-4xl leading-[0.95] text-cream sm:text-5xl md:text-6xl">
                Ti riconosci
                <br />
                in una di queste
                <br />
                <em className="italic text-gold">situazioni?</em>
              </h2>
              <p className="mt-10 max-w-md text-base leading-[1.75] text-cream-dim">
                Molti uomini arrivano da noi dopo aver vissuto una di queste
                esperienze. Non sei solo — e non è colpa tua.
              </p>
            </ScrollReveal>
          </div>

          <div className="md:col-span-7">
            <ul className="space-y-6">
              {PROBLEMS.map((p, i) => (
                <ScrollReveal key={p} delay={i * 80}>
                  <li className="group flex items-start gap-6 border-t border-line pt-7">
                    <span className="num-mono mt-1 text-xs text-gold">0{i + 1}</span>
                    <p className="display flex-1 text-xl text-cream transition-colors group-hover:text-gold md:text-2xl">
                      {p}
                    </p>
                    <span className="mt-2 hidden h-6 w-6 items-center justify-center text-gold opacity-0 transition-opacity group-hover:opacity-100 md:flex">
                      →
                    </span>
                  </li>
                </ScrollReveal>
              ))}
            </ul>

            <ScrollReveal delay={400}>
              <div className="mt-12 flex flex-col items-start gap-6 border-t border-line pt-10">
                <p className="text-base text-cream-dim">
                  Nessuna di queste è una condanna. Esiste una via d&apos;uscita
                  concreta.
                </p>
                <Link
                  href="/trattamento"
                  className="group inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-gold"
                >
                  <span className="border-b border-gold/40 pb-0.5 transition-colors group-hover:border-gold">
                    Scopri la soluzione per il tuo caso
                  </span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── STATS ROW ─────────────────────────────────────────────────────── */

function StatsRow() {
  return (
    <section className="border-b border-line py-10 md:py-14">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
          {STATS.map((s, i) => (
            <ScrollReveal key={s.k} delay={i * 60}>
              <div className="text-center">
                <p className="display text-3xl text-cream md:text-4xl lg:text-5xl">{s.v}</p>
                <p className="mt-2 text-xs text-cream-dim md:text-sm">{s.k}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── TESTIMONIANZE ─────────────────────────────────────────────────── */

function Testimonianze() {
  return (
    <section className="relative overflow-hidden border-b border-line py-12 md:py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 grain opacity-40" />
      <div className="relative mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="mb-12 flex flex-col gap-8 md:mb-16 md:flex-row md:items-end md:justify-between">
          <ScrollReveal>
            <div>
              <SectionLabel n="03">Testimonianze</SectionLabel>
              <h2 className="display mt-7 max-w-3xl text-4xl leading-[0.95] text-cream sm:text-5xl md:text-6xl">
                Cosa dicono
                <br />
                <em className="italic text-gold">i nostri clienti.</em>
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
                <span className="num-mono ml-2 text-sm text-cream">{SITE.rating}</span>
                <span className="text-xs text-muted-2">/ 5 · {SITE.reviewCount} recensioni</span>
              </div>
              <p className="num-mono text-[10px] tracking-widest text-muted-2 uppercase">
                Recensioni verificate
              </p>
            </div>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
          {TESTIMONIALS.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 120}>
              <article className="relative flex h-full flex-col border border-line bg-surface/40 p-8 transition-all hover:border-gold/40 hover:bg-surface md:p-10">
                <Quote className="h-7 w-7 text-gold/40" />
                <p className="display mt-6 flex-1 text-xl leading-[1.5] text-cream md:text-2xl">
                  <em className="italic">&quot;{t.body}&quot;</em>
                </p>
                <div className="hairline my-8" />
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-cream">{t.name}</p>
                    <p className="num-mono mt-1 text-[10px] tracking-widest text-muted-2 uppercase">
                      {t.meta}
                    </p>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-3 w-3 fill-gold text-gold" />
                    ))}
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── HOME CTA ──────────────────────────────────────────────────────── */

function HomeCTA() {
  return (
    <section className="relative overflow-hidden py-12 md:py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 gradient-radial-gold opacity-15" />
      <div className="pointer-events-none absolute inset-0 grain opacity-20" />

      <div className="relative mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
          <ScrollReveal className="md:col-span-7">
            <p className="eyebrow">— Inizia oggi</p>
            <h2 className="display mt-6 text-4xl leading-[0.95] text-cream sm:text-5xl md:text-6xl">
              La prima consulenza
              <br />
              <em className="italic text-gold">è sempre gratuita.</em>
            </h2>
            <p className="mt-8 max-w-xl text-base leading-[1.75] text-cream-dim">
              Senza impegno, senza pressione. Scrivici su WhatsApp con le tue
              foto e ricevi una valutazione personalizzata entro 24 ore.
            </p>
            <ul className="mt-8 space-y-2">
              {[
                "Consulenza gratuita e senza impegno",
                "Preventivo personalizzato in 24h",
                "Simulazione gratuita del risultato",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3 text-sm text-cream-dim">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-gold" />
                  {t}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={150} className="flex items-center md:col-span-5">
            <div className="flex w-full flex-col gap-3">
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex cursor-pointer items-center justify-center gap-3 rounded-full bg-[#25D366] px-7 py-5 text-sm font-semibold tracking-wide text-white transition-all hover:bg-[#1ebe5a]"
              >
                Scrivici su WhatsApp
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
              </a>
              <a
                href={SITE.phoneLink}
                className="group inline-flex cursor-pointer items-center justify-center gap-3 rounded-full border border-cream/30 bg-transparent px-7 py-4 text-sm font-medium tracking-wide text-cream transition-all hover:border-gold hover:text-gold"
              >
                <Phone className="h-4 w-4" />
                {SITE.phone}
              </a>
              <Link
                href="/contatti"
                className="group inline-flex cursor-pointer items-center justify-center gap-3 rounded-full border border-gold/40 px-7 py-4 text-sm font-medium tracking-wide text-cream transition-all hover:border-gold hover:bg-gold/5"
              >
                Prenota via modulo
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
              </Link>
              <div className="mt-1 flex items-center justify-center gap-6 border-t border-line pt-4">
                <Link href="/prezzi" className="text-xs font-medium text-gold underline-offset-4 hover:underline">
                  Vedi i prezzi →
                </Link>
                <Link href="/risultati" className="text-xs font-medium text-cream-dim underline-offset-4 hover:underline hover:text-gold">
                  Galleria risultati →
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
