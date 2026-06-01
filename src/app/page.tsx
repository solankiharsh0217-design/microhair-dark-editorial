import Image from "next/image";
import {
  ArrowUpRight,
  Star,
  Check,
  Sparkles,
  ShieldCheck,
  Quote,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Clock,
  Shield,
} from "lucide-react";
import { InstagramIcon as Instagram } from "@/components/ui/SocialIcons";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import CTABlock from "@/components/ui/CTABlock";
import Accordion from "@/components/ui/Accordion";
import PriceTier from "@/components/ui/PriceTier";
import ProcessStep from "@/components/ui/ProcessStep";
import ContactForm from "@/components/ui/ContactForm";
import {
  SITE,
  PROBLEMS,
  BENEFITS,
  PROTOCOL_BADGES,
  STATS,
  PROCESS,
  SOLUTIONS,
  PRICING_TIERS,
  FAQS,
  TESTIMONIALS,
} from "@/lib/constants";

const whatsappCTA =
  "Invia le tue foto su WhatsApp — Preventivo in 24h";
const bookingCTA = "Prenota la tua consulenza gratuita in studio";

export default function Home() {
  return (
    <>
      <Hero />
      <Risultati />
      <Problema />
      <Metodo />
      <Benefici />
      <Processo />
      <Soluzioni />
      <Eccellenza />
      <TrapiantoVsMicrohair />
      <Simulazione />
      <Investimento />
      <FAQ />
      <Testimonianze />
      <StudioPrenota />
    </>
  );
}

/* ───────────────────────────  01 · HERO  ─────────────────────────── */

function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden pb-16 md:pb-24">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-portrait.jpg"
          alt=""
          fill
          sizes="100vw"
          className="slow-zoom object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/30 to-transparent" />
      </div>

      <div className="pointer-events-none absolute inset-0 z-0 grain opacity-30" />

      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 md:px-10">
        <ScrollReveal>
          <div className="flex items-center gap-3">
            <span className="num-mono text-[10px] tracking-[0.4em] text-gold">
              ATELIER · LIVORNO
            </span>
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
            <div className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex cursor-pointer items-center justify-center gap-3 rounded-full bg-gold px-6 py-4 text-sm font-semibold tracking-wide text-ink transition-all hover:bg-cream sm:px-8 sm:py-5"
              >
                <span className="sm:hidden">Preventivo gratuito su WhatsApp</span>
                <span className="hidden sm:inline">{whatsappCTA}</span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink text-gold transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </a>
              <a
                href={SITE.phoneLink}
                className="group inline-flex cursor-pointer items-center justify-center gap-3 rounded-full border border-cream/30 bg-ink/40 px-6 py-4 text-sm font-medium tracking-wide text-cream backdrop-blur-md transition-all hover:border-gold hover:text-gold sm:px-8 sm:py-5"
              >
                <Phone className="h-4 w-4" />
                {bookingCTA}
              </a>
            </div>
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
              <span className="text-muted-2">/ 5 — {SITE.reviewCount} recensioni</span>
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
              <span className="hidden sm:inline">Capitolo 01 — I Risultati</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ───────────────────────────  02 · RISULTATI  ─────────────────────────── */

function Risultati() {
  return (
    <section
      id="risultati"
      className="relative border-b border-line py-12 md:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="mb-10 grid grid-cols-1 gap-8 md:mb-16 md:grid-cols-12 md:gap-20">
          <div className="md:col-span-7">
            <ScrollReveal>
              <SectionLabel n="01">Risultati</SectionLabel>
              <h2 className="display mt-7 text-4xl leading-[0.95] text-cream sm:text-5xl md:text-7xl">
                <em className="italic text-gold">Prima</em> e dopo.
                <br />
                <span className="text-cream-dim">Vera sicurezza.</span>
              </h2>
            </ScrollReveal>
          </div>
          <div className="flex items-end md:col-span-5 md:justify-end">
            <ScrollReveal delay={150}>
              <div className="max-w-md space-y-4">
                <p className="text-base leading-[1.75] text-cream-dim">
                  Quattro casi reali, fotografati nello studio di Livorno.
                  Risultati ottenuti con il protocollo MicroHair, in 2–3 sedute
                  per caso.
                </p>
                <p className="eyebrow-muted text-[10px]">
                  Tutti i risultati sono stati realizzati presso il nostro
                  atelier a Livorno
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Gallery — each B/A image shown at its native aspect ratio */}
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">

          {/* Left column: transformation-1 (portrait 3:4) stacked above case-1 (wide 21:9) */}
          <div className="flex flex-col gap-6 md:w-5/12 md:shrink-0">
            <ScrollReveal>
              <article className="group cursor-pointer">
                <div className="relative aspect-[3/4] overflow-hidden border border-line bg-surface">
                  <Image
                    src="/images/transformation-1.png"
                    alt="Stempiatura Avanzata — prima e dopo"
                    fill
                    sizes="(min-width: 768px) 42vw, 100vw"
                    className="object-cover saturate-[0.55] brightness-90 transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/20" />
                  <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-transparent to-transparent" />
                  <div className="absolute left-6 top-6">
                    <p className="num-mono text-[10px] tracking-[0.3em] text-gold">CASO · 01</p>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                    <h3 className="display text-2xl text-cream md:text-4xl">Stempiatura Avanzata</h3>
                    <p className="mt-2 text-xs text-cream-dim md:text-sm">Norwood V — VI · 3 sedute</p>
                    <p className="mt-1 text-[11px] text-muted-2">Frontale + Vertex · ricostruzione completa</p>
                  </div>
                </div>
              </article>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <article className="group cursor-pointer">
                {/* case-1 is a horizontal side-by-side B/A (685×300 ≈ 21:9) */}
                <div className="relative aspect-[21/9] overflow-hidden border border-line bg-surface">
                  <Image
                    src="/images/case-1.png"
                    alt="Effetto Rasato — prima e dopo"
                    fill
                    sizes="(min-width: 768px) 42vw, 100vw"
                    className="object-cover saturate-[0.55] brightness-90 transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />
                  <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-transparent to-transparent" />
                  <div className="absolute left-5 top-4">
                    <p className="num-mono text-[10px] tracking-[0.3em] text-gold">CASO · 04</p>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <h3 className="display text-xl text-cream md:text-2xl">Effetto Rasato</h3>
                    <p className="mt-1 text-[11px] text-cream-dim">Norwood IV — V · 2 sedute</p>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          </div>

          {/* Right column: case-2 and case-3 stacked (both landscape 16:9) */}
          <div className="flex flex-col gap-6 md:flex-1">
            <ScrollReveal delay={80}>
              <article className="group cursor-pointer">
                {/* case-2 is horizontal B/A (563×322 ≈ 16:9) */}
                <div className="relative aspect-[16/9] overflow-hidden border border-line bg-surface">
                  <Image
                    src="/images/case-2.png"
                    alt="Copertura Vertex — prima e dopo"
                    fill
                    sizes="(min-width: 768px) 58vw, 100vw"
                    className="object-cover saturate-[0.55] brightness-90 transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/20" />
                  <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-transparent to-transparent" />
                  <div className="absolute left-6 top-5">
                    <p className="num-mono text-[10px] tracking-[0.3em] text-gold">CASO · 02</p>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="display text-xl text-cream md:text-3xl">Copertura Vertex</h3>
                    <p className="mt-1 text-xs text-cream-dim md:text-sm">Norwood III — IV · 2 sedute</p>
                    <p className="mt-0.5 text-[11px] text-muted-2">Riempimento crown area</p>
                  </div>
                </div>
              </article>
            </ScrollReveal>

            <ScrollReveal delay={160}>
              <article className="group cursor-pointer">
                {/* case-3 is horizontal B/A (563×322 ≈ 16:9) */}
                <div className="relative aspect-[16/9] overflow-hidden border border-line bg-surface">
                  <Image
                    src="/images/case-3.png"
                    alt="Densità Post-Trapianto — prima e dopo"
                    fill
                    sizes="(min-width: 768px) 58vw, 100vw"
                    className="object-cover saturate-[0.55] brightness-90 transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/20" />
                  <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-transparent to-transparent" />
                  <div className="absolute left-6 top-5">
                    <p className="num-mono text-[10px] tracking-[0.3em] text-gold">CASO · 03</p>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="display text-xl text-cream md:text-3xl">Densità Post-Trapianto</h3>
                    <p className="mt-1 text-xs text-cream-dim md:text-sm">Trapianto pregresso · 3 sedute</p>
                    <p className="mt-0.5 text-[11px] text-muted-2">Aumento densità visiva</p>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          </div>
        </div>

        <ScrollReveal delay={250}>
          <div className="mt-16 flex flex-col items-center gap-6 border-t border-line pt-12">
            <p className="text-center text-base text-cream-dim">
              Vuoi vedere altri casi o raccontarci il tuo?
            </p>
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

/* ───────────────────────────  03 · IL PROBLEMA  ─────────────────────────── */

function Problema() {
  return (
    <section
      id="problema"
      className="relative overflow-hidden border-b border-line py-12 md:py-20 lg:py-28"
    >
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
                    <span className="num-mono mt-1 text-xs text-gold">
                      0{i + 1}
                    </span>
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
                <a
                  href="#metodo"
                  className="group inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-gold"
                >
                  <span className="border-b border-gold/40 pb-0.5 transition-colors group-hover:border-gold">
                    Scopri la soluzione per il tuo caso
                  </span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────  04 · METODO (Cos'è la Microhair)  ─────────────────────────── */

function Metodo() {
  return (
    <section
      id="metodo"
      className="relative border-b border-line py-12 md:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <ScrollReveal>
          <SectionLabel n="03">Cos&apos;è la Microhair</SectionLabel>
          <h2 className="display mt-7 max-w-4xl text-4xl leading-[0.95] text-cream sm:text-5xl md:text-7xl">
            Non è un tatuaggio.
            <br />
            <em className="italic text-gold">È una disciplina.</em>
          </h2>
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
                <p className="num-mono text-[10px] tracking-[0.3em] text-gold">
                  IN STUDIO · ATTREZZATURA STERILE
                </p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={150} className="md:col-span-6">
            <p className="eyebrow-muted">— La differenza</p>
            <h3 className="display mt-5 text-3xl leading-[1.05] text-cream md:text-4xl">
              La SMP{" "}
              <em className="italic text-gold">non è</em> un tatuaggio, e{" "}
              <em className="italic text-gold">non è</em> un microblading.
            </h3>
            <div className="mt-10 space-y-6 text-base leading-[1.8] text-cream-dim md:text-lg">
              <p>
                Attraverso uno strumento specifico — il <em className="italic text-cream">tricografo</em> —
                e pigmenti biocompatibili, realizziamo micro-depositi
                nell&apos;epidermide che rivestono le sezioni follicolari.
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
                <p className="num-mono text-[10px] tracking-[0.3em] text-gold">
                  LA SFUMATURA · EFFETTO RASATO
                </p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={150} className="md:col-span-6 md:order-1">
            <p className="eyebrow-muted">— Il risultato</p>
            <h3 className="display mt-5 text-3xl leading-[1.05] text-cream md:text-4xl">
              Un effetto <em className="italic text-gold">rasato</em>,
              <br />
              credibile a pochi centimetri.
            </h3>
            <p className="mt-8 max-w-xl text-base leading-[1.8] text-cream-dim md:text-lg">
              L&apos;SMP ricrea il follicolo pilifero a una densità calibrata
              sul tuo fototipo. Da vicino, da lontano, sotto la luce del sole
              o in una cena: il risultato è indistinguibile da una
              capigliatura naturale appena rasata.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-6">
              {[
                { k: "Ago", v: "0.18 mm" },
                { k: "Profondità", v: "0.5 — 1.2 mm" },
                { k: "Sedute", v: "2 — 4" },
                { k: "Distanza tra punti", v: "< 1 mm" },
              ].map((d) => (
                <div key={d.k} className="border-t border-line pt-4">
                  <p className="num-mono text-[10px] tracking-widest text-muted-2">
                    {d.k.toUpperCase()}
                  </p>
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

/* ───────────────────────────  05 · BENEFICI  ─────────────────────────── */

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
              <SectionLabel n="04">I benefici</SectionLabel>
              <h2 className="display mt-7 text-4xl leading-[0.95] text-cream sm:text-5xl md:text-6xl">
                Quattro motivi
                <br />
                per iniziare{" "}
                <em className="italic text-gold">oggi.</em>
              </h2>
              <p className="mt-10 max-w-md text-base leading-[1.75] text-cream-dim">
                La SMP è una scelta concreta, misurabile, senza sorprese. Ecco
                cosa cambia davvero.
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
                      <p className="num-mono text-[10px] tracking-widest text-muted-2">
                        0{i + 1}
                      </p>
                      <p className="display mt-3 text-3xl text-cream md:text-4xl">
                        {s.v}
                      </p>
                      <p className="mt-2 text-sm text-cream-dim">{s.k}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="md:col-span-7">
            <div className="space-y-0">
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
                          <span className="num-mono text-xs text-muted-2">
                            0{i + 1}
                          </span>
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
      </div>
    </section>
  );
}

/* ───────────────────────────  06 · PROCESSO  ─────────────────────────── */

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
              <SectionLabel n="05">Il processo</SectionLabel>
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
                ritmo, una durata, un risultato atteso. Nessuna
                improvvisazione.
              </p>
            </ScrollReveal>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {PROCESS.map((p, i) => (
            <ScrollReveal key={p.n} delay={i * 100}>
              <ProcessStep
                n={p.n}
                title={p.title}
                body={p.body}
                duration={p.duration}
              />
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

/* ───────────────────────────  07 · SOLUZIONI  ─────────────────────────── */

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
              <SectionLabel n="06">Le soluzioni</SectionLabel>
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
                <CTABlock
                  primaryLabel="Preventivo gratuito in 24h"
                  secondaryLabel="Consulenza gratuita"
                  align="left"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* 2×2 editorial grid — no B/A images, each card is text-first */}
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
                <p className="mt-5 text-sm leading-[1.8] text-cream-dim md:text-base">
                  {s.body}
                </p>
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

/* ───────────────────────────  08 · ECCELLENZA  ─────────────────────────── */

function Eccellenza() {
  return (
    <section
      id="eccellenza"
      className="relative overflow-hidden border-b border-line py-12 md:py-20 lg:py-28"
    >
      <div className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full gradient-radial-gold opacity-30 blur-3xl" />

      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <ScrollReveal>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionLabel n="07">Eccellenza</SectionLabel>
              <h2 className="display mt-7 text-4xl leading-[0.95] text-cream sm:text-5xl md:text-7xl">
                Il nostro
                <br />
                protocollo{" "}
                <em className="italic text-gold">esclusivo.</em>
              </h2>
            </div>
            <p className="max-w-sm text-base text-cream-dim">
              Non è solo una questione di capelli. È una questione di
              proporzioni.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-10 grid grid-cols-1 items-stretch gap-6 md:mt-16 md:grid-cols-2 md:gap-10">
          <ScrollReveal>
            <div className="relative aspect-[4/5] overflow-hidden border border-line bg-surface">
              <Image
                src="/images/fade-detail.jpg"
                alt="Tecnica MicroHair — risultato del trattamento"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
              <div className="absolute left-6 top-6">
                <p className="num-mono text-[10px] tracking-[0.3em] text-gold">
                  LA TECNICA · IN STUDIO
                </p>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <p className="display text-2xl text-cream md:text-3xl">
                  <em className="italic text-gold">8+</em> anni
                </p>
                <p className="mt-1 text-sm text-cream-dim">
                  dedicati alla sola micropigmentazione
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="relative aspect-[4/5] overflow-hidden border border-line bg-surface">
              <Image
                src="/images/atelier-context.jpg"
                alt="L'atelier MicroHair — Livorno"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <div className="absolute left-6 top-6">
                <p className="num-mono text-[10px] tracking-[0.3em] text-gold">
                  L&apos;ATELIER · LIVORNO
                </p>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <p className="display text-2xl text-cream md:text-3xl">
                  <em className="italic text-gold">600+</em> volti
                </p>
                <p className="mt-1 text-sm text-cream-dim">
                  una sola firma, zero compromessi
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 border-t border-line pt-10 md:mt-16 md:grid-cols-12 md:gap-12 md:pt-12">
          <ScrollReveal className="md:col-span-7">
            <p className="eyebrow-muted">— Cosa facciamo</p>
            <h3 className="display mt-5 text-3xl leading-[1.1] text-cream md:text-4xl">
              Replica delle unità follicolari con{" "}
              <em className="italic text-gold">precisione millimetrica.</em>
            </h3>
            <p className="mt-6 max-w-xl text-base leading-[1.75] text-cream-dim">
              Attraverso migliaia di micro-riproduzioni, ricreiamo
              un&apos;attaccatura proporzionata, valorizziamo i lineamenti,
              restituiamo un aspetto più giovane, virile e sicuro.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={150} className="md:col-span-5">
            <div className="space-y-3">
              {PROTOCOL_BADGES.map((b) => (
                <div
                  key={b.label}
                  className="flex items-center gap-5 border border-line bg-surface/40 p-5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-gold">
                    <Check className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="display text-base text-cream">{b.label}</p>
                    <p className="num-mono mt-0.5 text-[10px] tracking-widest text-muted-2 uppercase">
                      {b.meta}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────  09 · TRAPIANTO vs MICROHAIR  ─────────────────────────── */

function TrapiantoVsMicrohair() {
  return (
    <section className="relative border-b border-line py-12 md:py-20 lg:py-28">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-20">
          <div className="md:col-span-5">
            <ScrollReveal>
              <SectionLabel n="08">Una scelta serena</SectionLabel>
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
                    &quot;Cosa posso fare per tornare a sentirmi bene con la mia
                    immagine?&quot;
                  </em>
                </p>
                <p>
                  Molti dei nostri clienti hanno iniziato da qui: hanno scelto
                  la <em className="italic text-gold">micropigmentazione</em>{" "}
                  per ritrovare subito un&apos;immagine più sicura, naturale e
                  uniforme, anche dopo aver rasato i capelli.
                </p>
                <p className="text-cream">
                  <em className="italic text-gold">
                    La cosa più interessante?
                  </em>{" "}
                  La micropigmentazione è{" "}
                  <em className="italic">compatibile</em> sia con la ricrescita
                  dei capelli sia con un eventuale trapianto. Avere una base
                  realizzata con la SMP rende l&apos;effetto visivo{" "}
                  <em className="italic text-gold">più denso e realistico</em>{" "}
                  anche dopo il trapianto.
                </p>
                <p>
                  Non devi decidere tutto oggi. Inizia dal primo passo: ti
                  aiutiamo a costruire un&apos;immagine con cui sentirti bene
                  già ora, lasciandoti tutta la libertà di scegliere il resto
                  con serenità.
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

/* ───────────────────────────  10 · SIMULAZIONE  ─────────────────────────── */

function Simulazione() {
  return (
    <section className="relative overflow-hidden border-b border-line py-12 md:py-20 lg:py-28">
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[500px] w-[500px] rounded-full gradient-radial-gold opacity-30 blur-3xl" />

      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-20">
          <div className="md:col-span-5">
            <ScrollReveal>
              <SectionLabel n="09">La simulazione</SectionLabel>
              <h2 className="display mt-7 text-4xl leading-[0.95] text-cream sm:text-5xl md:text-6xl">
                Non riesci a
                <br />
                immaginarti con la
                <br />
                <em className="italic text-gold">SMP?</em>
              </h2>
              <p className="mt-8 eyebrow-muted text-[10px]">
                Ti mostriamo il risultato prima di decidere
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="mt-10 space-y-5 text-base leading-[1.75] text-cream-dim">
                <p>È normale avere dubbi:</p>
                <ul className="space-y-3 pl-5">
                  <li className="relative before:absolute before:left-[-1.1rem] before:top-[0.7rem] before:h-1 before:w-2 before:bg-gold">
                    «E se non mi riconosco?»
                  </li>
                  <li className="relative before:absolute before:left-[-1.1rem] before:top-[0.7rem] before:h-1 before:w-2 before:bg-gold">
                    «E se poi mi pento?»
                  </li>
                  <li className="relative before:absolute before:left-[-1.1rem] before:top-[0.7rem] before:h-1 before:w-2 before:bg-gold">
                    «E se non mi sta bene?»
                  </li>
                </ul>
                <p>
                  Per aiutarti a decidere con tranquillità, ti offriamo una{" "}
                  <em className="italic text-gold">simulazione gratuita</em>:
                  ci mandi le tue foto e ti mostriamo come potresti apparire.
                </p>
              </div>

              <div className="mt-10 border-t border-line pt-8">
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex cursor-pointer items-center gap-3 rounded-full bg-[#25D366] px-7 py-4 text-xs font-semibold tracking-wider text-white uppercase transition-all hover:bg-[#1ebe5a]"
                >
                  Richiedi la tua simulazione gratuita
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
                </a>
              </div>
            </ScrollReveal>
          </div>

          <div className="md:col-span-7">
            <ScrollReveal delay={150}>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-gold" />
                <p className="eyebrow text-gold">Risultato Reale</p>
              </div>
            </ScrollReveal>

            {/* B/A images shown at their native landscape aspect ratios */}
            <div className="flex flex-col gap-4 md:gap-6">
              <ScrollReveal delay={200}>
                {/* case-1 is a horizontal B/A (685×300 ≈ 21:9) */}
                <div className="relative aspect-[21/9] overflow-hidden border border-line bg-surface">
                  <Image
                    src="/images/case-1.png"
                    alt="Risultato SMP — effetto rasato prima e dopo"
                    fill
                    sizes="(min-width: 768px) 58vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/15" />
                  <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-5">
                    <p className="num-mono text-[10px] tracking-widest text-gold uppercase">Caso A · Effetto Rasato</p>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                {/* case-2 is a horizontal B/A (563×322 ≈ 16:9) */}
                <div className="relative aspect-[16/9] overflow-hidden border border-line bg-surface">
                  <Image
                    src="/images/case-2.png"
                    alt="Risultato SMP — densità vertex prima e dopo"
                    fill
                    sizes="(min-width: 768px) 58vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/15" />
                  <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-5">
                    <p className="num-mono text-[10px] tracking-widest text-gold uppercase">Caso B · Copertura Vertex</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={400}>
              <div className="mt-10 border-l-2 border-gold/50 bg-gold/5 p-6 md:p-8">
                <Quote className="h-5 w-5 text-gold" />
                <p className="display mt-4 text-xl italic text-cream md:text-2xl">
                  &quot;Adesso ho capito che è la scelta giusta.&quot;
                </p>
                <p className="num-mono mt-4 text-[10px] tracking-widest text-muted-2 uppercase">
                  Cosa dicono dopo la simulazione
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────  11 · INVESTIMENTO  ─────────────────────────── */

function Investimento() {
  return (
    <section
      id="investimento"
      className="relative border-b border-line py-12 md:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="mb-10 grid grid-cols-1 gap-8 md:mb-16 md:grid-cols-12 md:gap-20">
          <div className="md:col-span-7">
            <ScrollReveal>
              <SectionLabel n="10">L&apos;investimento</SectionLabel>
              <h2 className="display mt-7 text-4xl leading-[0.95] text-cream sm:text-5xl md:text-7xl">
                Ma quanto
                <br />
                <em className="italic text-gold">costa</em> la
                <br />
                micropigmentazione?
              </h2>
            </ScrollReveal>
          </div>
          <div className="flex items-end md:col-span-5 md:justify-end">
            <ScrollReveal delay={150}>
              <p className="max-w-md text-base leading-[1.75] text-cream-dim">
                I prezzi variano in base al livello di calvizie e alle aree da
                trattare. Ecco una stima orientativa per il trattamento
                completo (3 sedute).
              </p>
            </ScrollReveal>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {PRICING_TIERS.map((t, i) => (
            <ScrollReveal key={t.n} delay={i * 80}>
              <PriceTier
                n={t.n}
                name={t.name}
                level={t.level}
                range={t.range}
                highlight={i === 2}
              />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={150}>
          <div className="mt-10 border-t border-line pt-10">
            <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-7">
                <p className="eyebrow-muted">— Pagamenti flessibili</p>
                <h3 className="display mt-5 text-3xl leading-[1.1] text-cream md:text-4xl">
                  <em className="italic text-gold">Senza pensieri,</em>{" "}
                  senza rinunce.
                </h3>
                <p className="mt-6 max-w-xl text-base leading-[1.75] text-cream-dim">
                  La micropigmentazione è un investimento su di te e sulla
                  tua immagine. Per rendere il trattamento più accessibile,
                  offriamo la possibilità di rateizzare il pagamento fino a{" "}
                  <em className="italic text-gold">12 rate</em>, senza
                  interessi.
                </p>
              </div>
              <div className="md:col-span-5">
                <div className="flex flex-col gap-3">
                  <a
                    href={SITE.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex cursor-pointer items-center justify-center gap-3 rounded-full bg-gold px-7 py-4 text-xs font-semibold tracking-wider text-ink uppercase transition-all hover:bg-cream"
                  >
                    Richiedi il tuo preventivo gratuito
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
                  </a>
                  <a
                    href={SITE.phoneLink}
                    className="group inline-flex cursor-pointer items-center justify-center gap-3 rounded-full border border-gold/40 bg-transparent px-7 py-4 text-xs font-semibold tracking-wider text-cream uppercase transition-all hover:border-gold hover:bg-gold/5"
                  >
                    Scopri come rateizzare
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ───────────────────────────  12 · FAQ  ─────────────────────────── */

function FAQ() {
  return (
    <section id="faq" className="relative border-b border-line py-12 md:py-20 lg:py-28">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-20">
          <div className="md:col-span-5">
            <ScrollReveal>
              <SectionLabel n="11">Domande frequenti</SectionLabel>
              <h2 className="display mt-7 text-4xl leading-[0.95] text-cream sm:text-5xl md:text-6xl">
                Tutto quello che
                <br />
                vuoi <em className="italic text-gold">sapere.</em>
              </h2>
              <p className="mt-10 max-w-md text-sm leading-[1.75] text-cream-dim md:text-base">
                Domande frequenti sulla micropigmentazione del cuoio
                capelluto. Se non trovi la risposta che cerchi, scrivici.
              </p>
              <a
                href={SITE.phoneLink}
                className="group mt-10 inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-gold"
              >
                <Phone className="h-4 w-4" />
                <span className="border-b border-gold/40 pb-0.5 group-hover:border-gold">
                  Parla direttamente con noi
                </span>
              </a>
            </ScrollReveal>
          </div>

          <div className="md:col-span-7">
            <Accordion items={FAQS} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────  13 · TESTIMONIANZE  ─────────────────────────── */

function Testimonianze() {
  return (
    <section className="relative overflow-hidden border-b border-line py-12 md:py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 grain opacity-40" />
      <div className="relative mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="mb-16 flex flex-col gap-8 md:mb-20 md:flex-row md:items-end md:justify-between">
          <ScrollReveal>
            <div>
              <SectionLabel n="12">Testimonianze</SectionLabel>
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
                <span className="num-mono ml-2 text-sm text-cream">
                  {SITE.rating}
                </span>
                <span className="text-xs text-muted-2">
                  / 5 · {SITE.reviewCount} recensioni
                </span>
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

        <ScrollReveal delay={400}>
          <div className="mt-16 border-t border-line pt-12 text-center">
            <a
              href="#contatti"
              className="group inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-gold"
            >
              <span className="border-b border-gold/40 pb-0.5 group-hover:border-gold">
                Vuoi un risultato simile? Iniziamo da qui.
              </span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ───────────────────────────  14 · STUDIO + PRENOTA  ─────────────────────────── */

function StudioPrenota() {
  return (
    <section
      id="contatti"
      className="relative overflow-hidden py-12 md:py-20 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0 gradient-radial-gold opacity-20" />
      <div className="pointer-events-none absolute inset-0 grain opacity-30" />

      <div className="relative mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-20">
          <div className="md:col-span-7">
            <ScrollReveal>
              <SectionLabel n="13">Lo studio</SectionLabel>
              <h2 className="display mt-7 text-4xl leading-[0.95] text-cream sm:text-5xl md:text-7xl">
                Studio di
                <br />
                <em className="italic text-gold">micropigmentazione</em>
                <br />
                a Livorno.
              </h2>
              <p className="mt-10 max-w-xl text-base leading-[1.75] text-cream-dim">
                Affidati alla micropigmentazione professionale di MicroHair.
                Ti ricontattiamo entro 24 ore dalla tua richiesta.
              </p>
            </ScrollReveal>

            <ContactForm />
          </div>

          <div className="md:col-span-5 md:pl-8">
            <ScrollReveal delay={150}>
              <div className="space-y-1 border-t border-line pt-8">
                <ContactRow
                  icon={MapPin}
                  title="Atelier"
                  lines={[SITE.address]}
                  href={SITE.mapsUrl}
                />
                <ContactRow
                  icon={Phone}
                  title="Telefono"
                  lines={[SITE.phone]}
                  href={SITE.phoneLink}
                />
                <ContactRow
                  icon={Mail}
                  title="Email"
                  lines={[SITE.email]}
                  href={SITE.emailLink}
                />
                <ContactRow
                  icon={Clock}
                  title="Orari"
                  lines={["Lun — Ven · 09:30 — 19:00", "Sabato · Su appuntamento"]}
                />
                <ContactRow
                  icon={Calendar}
                  title="WhatsApp"
                  lines={["Risposta entro 2 ore lavorative"]}
                  href={SITE.whatsapp}
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <div className="mt-12 border border-gold/30 bg-gold/5 p-8">
                <p className="eyebrow">— Garanzia</p>
                <p className="display mt-4 text-2xl text-cream">
                  Consulenza iniziale
                  <br />
                  <em className="italic text-gold">sempre gratuita.</em>
                </p>
                <p className="mt-4 text-sm leading-[1.7] text-cream-dim">
                  Nessun impegno. Nessun pagamento anticipato. Solo un
                  confronto onesto.
                </p>
                <Check className="mt-5 h-5 w-5 text-gold" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}


function ContactRow({
  icon: Icon,
  title,
  lines,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  lines: readonly string[] | string[];
  href?: string;
}) {
  const content = (
    <div className="group flex items-start gap-5 border-b border-line py-6 transition-colors">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/5 text-gold transition-all group-hover:border-gold group-hover:bg-gold/10">
        <Icon className="h-4 w-4" />
      </div>
      <div className="flex-1">
        <p className="eyebrow-muted">{title}</p>
        {lines.map((l) => (
          <p
            key={l}
            className="mt-1 text-sm text-cream transition-colors group-hover:text-gold"
          >
            {l}
          </p>
        ))}
      </div>
      {href && (
        <ArrowUpRight className="mt-1 h-4 w-4 text-muted-2 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gold" />
      )}
    </div>
  );
  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel="noopener noreferrer"
        className="block cursor-pointer"
      >
        {content}
      </a>
    );
  }
  return content;
}
