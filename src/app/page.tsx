import Image from "next/image";
import {
  ArrowUpRight,
  ArrowDown,
  Star,
  Check,
  Plus,
  Sparkles,
  Award,
  ShieldCheck,
  Quote,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Clock,
  Send,
} from "lucide-react";
import { InstagramIcon as Instagram } from "@/components/ui/SocialIcons";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SITE, PILLARS, STATS, PROCESS, FAQS, TESTIMONIALS } from "@/lib/constants";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Method />
      <Excellence />
      <Transformation />
      <Process />
      <Results />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}

/* ───────────────────────────  HERO  ─────────────────────────── */

function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden pt-32 md:pt-40">
      <div className="pointer-events-none absolute inset-0 grain" />
      <div className="pointer-events-none absolute -right-40 top-20 h-[600px] w-[600px] rounded-full gradient-radial-gold opacity-40 blur-3xl" />

      <div className="relative mx-auto grid max-w-[1500px] grid-cols-1 gap-16 px-5 pb-24 md:px-10 md:pb-32 lg:grid-cols-12 lg:gap-12">
        {/* Top eyebrow row */}
        <div className="col-span-1 flex items-center justify-between lg:col-span-12">
          <div className="flex items-center gap-4">
            <span className="num-mono text-[10px] tracking-[0.4em] text-gold">EST. 2017</span>
            <span className="h-px w-12 bg-gold/40" />
            <span className="eyebrow-muted">LIVORNO · ITALIA</span>
          </div>
          <div className="hidden items-center gap-2 text-[11px] text-cream-dim md:flex">
            <Star className="h-3 w-3 fill-gold text-gold" />
            <span className="num-mono">{SITE.rating}</span>
            <span className="text-muted-2">/ 5 — {SITE.reviewCount} recensioni</span>
          </div>
        </div>

        {/* Headline */}
        <div className="col-span-1 lg:col-span-7">
          <ScrollReveal>
            <h1 className="display-xl text-[15vw] leading-[0.88] text-cream sm:text-[12vw] md:text-[9.5vw] lg:text-[7.8rem] xl:text-[8.5rem]">
              Goodbye
              <br />
              <em className="italic text-gold">baldness,</em>
              <br />
              <span className="text-cream-dim">hello</span>{" "}
              <span className="relative inline-block">
                <span className="relative z-10">confidence.</span>
                <span className="absolute bottom-2 left-0 -z-0 h-2 w-full bg-gold/15 md:bottom-3" />
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="mt-12 flex max-w-xl flex-col gap-6 md:flex-row md:items-start md:gap-10">
              <div className="num-mono shrink-0 text-[10px] tracking-[0.4em] text-muted-2">
                001 / INTRO
              </div>
              <p className="text-base leading-[1.75] text-cream-dim md:text-lg">
                La <em className="italic text-gold">micropigmentazione del cuoio capelluto</em> è un
                trattamento non chirurgico che riproduce il follicolo pilifero, follicolo per follicolo. Il
                risultato: l'aspetto di una capigliatura folta, credibile a pochi centimetri di distanza.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={350}>
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <a
                href="#contatti"
                className="group inline-flex cursor-pointer items-center gap-3 rounded-full bg-gold px-7 py-4 text-sm font-semibold tracking-wide text-ink transition-all hover:bg-cream"
              >
                Prenota una consulenza
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink text-gold transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </a>
              <a
                href="#risultati"
                className="group inline-flex cursor-pointer items-center gap-3 rounded-full border border-line bg-transparent px-7 py-4 text-sm font-medium tracking-wide text-cream transition-all hover:border-gold hover:text-gold"
              >
                Guarda i risultati
                <ArrowDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* Right side — before/after hero card */}
        <div className="col-span-1 lg:col-span-5">
          <ScrollReveal delay={400}>
            <div className="relative aspect-[3/4] w-full overflow-hidden border border-line bg-surface">
              <Image
                src="/images/transformation-1.png"
                alt="Trasformazione SMP — Caso studio MicroHair"
                fill
                priority
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />

              <div className="absolute left-0 top-0 m-5 flex items-center gap-2 rounded-full border border-cream/20 bg-ink/70 px-3 py-1.5 backdrop-blur-md">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
                <span className="num-mono text-[9px] tracking-[0.3em] text-cream">
                  CASO · 01
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                <p className="eyebrow-muted">Trasformazione reale</p>
                <p className="display mt-2 text-2xl text-cream md:text-3xl">
                  Da <em className="italic text-gold">calvizie</em> a
                  <br />
                  <span className="text-cream-dim">effetto rasato perfetto.</span>
                </p>
                <p className="num-mono mt-3 text-[10px] tracking-widest text-muted-2">
                  3 SEDUTE · 12 ORE TOTALI
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={550}>
            <div className="mt-5 flex items-center justify-between border-t border-line pt-4 text-[11px] text-muted-2">
              <span className="num-mono tracking-widest">PHOTO · 35MM</span>
              <span className="num-mono tracking-widest">LIVORNO, LI</span>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom scroll indicator */}
        <div className="col-span-1 mt-6 hidden items-end justify-between lg:col-span-12 lg:mt-20 lg:flex">
          <div className="flex items-center gap-3 text-[11px] text-muted">
            <span className="num-mono">SCROLL ↓</span>
            <span className="h-px w-16 bg-line" />
            <span>Capitolo 02 — Il Metodo</span>
          </div>
          <div className="flex items-baseline gap-3 text-muted-2">
            <span className="num-mono text-[10px]">EDIZIONE</span>
            <span className="display text-xl text-cream">N° VIII</span>
            <span className="num-mono text-[10px]">/ 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────  MARQUEE  ─────────────────────────── */

function Marquee() {
  const items = [
    "Micropigmentazione del cuoio capelluto",
    "Non chirurgico",
    "100% naturale",
    "Atelier Livorno",
    "Luca Sagona",
    "Risultati garantiti",
    "Zero manutenzione",
    "Consulenza privata",
  ];
  const row = [...items, ...items, ...items];
  return (
    <section className="relative border-y border-line bg-ink py-6">
      <div className="flex overflow-hidden">
        <div className="flex shrink-0 animate-marquee items-center gap-12 whitespace-nowrap px-6">
          {row.map((t, i) => (
            <div key={i} className="flex items-center gap-12">
              <span className="display text-2xl tracking-tight text-cream/80 md:text-3xl">
                {t}
              </span>
              <span className="text-gold">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────  METHOD  ─────────────────────────── */

function Method() {
  return (
    <section id="metodo" className="relative border-b border-line py-32 md:py-44">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-4">
            <ScrollReveal>
              <p className="eyebrow">— 02 · Il Metodo</p>
              <h2 className="display mt-7 text-5xl leading-[0.95] text-cream md:text-6xl">
                Una <em className="italic text-gold">disciplina</em> silenziosa,
                <br />
                <span className="text-cream-dim">un effetto che parla.</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <p className="mt-10 max-w-md text-base leading-[1.75] text-cream-dim">
                Tre principi. Un unico standard. Tutto ciò che facciamo è costruito attorno a questi
                pilastri — senza compromessi.
              </p>
            </ScrollReveal>
          </div>

          <div className="space-y-12 lg:col-span-8 lg:pl-12">
            {PILLARS.map((p, i) => (
              <ScrollReveal key={p.n} delay={i * 120}>
                <article className="group grid grid-cols-12 gap-6 border-t border-line pt-10">
                  <div className="col-span-2 flex flex-col gap-2 md:col-span-1">
                    <span className="num-mono text-xs text-gold">{p.n}</span>
                    <span className="h-px w-8 bg-gold/40 transition-all group-hover:w-14 group-hover:bg-gold" />
                  </div>
                  <div className="col-span-10 md:col-span-11">
                    <h3 className="display text-3xl text-cream md:text-4xl">
                      {p.title}
                      <span className="text-gold">.</span>
                    </h3>
                    <p className="mt-5 max-w-xl text-base leading-[1.7] text-cream-dim md:text-lg">
                      {p.body}
                    </p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-32 border-t border-line pt-16">
          <ScrollReveal>
            <div className="grid grid-cols-2 gap-12 md:grid-cols-4">
              {STATS.map((s, i) => (
                <div key={s.k} className="group">
                  <p className="eyebrow-muted">— {String(i + 1).padStart(2, "0")}</p>
                  <p className="display mt-4 text-5xl text-cream transition-colors group-hover:text-gold md:text-6xl">
                    {s.v}
                  </p>
                  <p className="mt-3 text-sm text-cream-dim">{s.k}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────  EXCELLENCE  ─────────────────────────── */

function Excellence() {
  return (
    <section id="eccellenza" className="relative overflow-hidden border-b border-line py-32 md:py-44">
      <div className="pointer-events-none absolute -left-40 top-0 h-[400px] w-[400px] rounded-full gradient-radial-gold opacity-30 blur-3xl" />

      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Portrait */}
          <ScrollReveal className="lg:col-span-5">
            <div className="relative">
              <div className="relative aspect-[3/4] w-full overflow-hidden border border-line bg-surface">
                <Image
                  src="/images/portrait-luca.png"
                  alt="Luca Sagona — Fondatore MicroHair"
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
              </div>

              <div className="mt-6 flex items-center justify-between text-[11px] text-muted-2">
                <span className="num-mono tracking-widest">LUCA SAGONA · 2024</span>
                <span className="num-mono tracking-widest">PHOTO · 35MM</span>
              </div>

              {/* Floating gold card */}
              <div className="absolute -right-4 top-1/2 hidden -translate-y-1/2 rotate-3 border border-gold/30 bg-ink/90 p-6 shadow-gold backdrop-blur-md md:block">
                <Award className="h-5 w-5 text-gold" />
                <p className="num-mono mt-4 text-[9px] tracking-[0.3em] text-gold">CERTIFIED ARTIST</p>
                <p className="display mt-2 text-sm leading-tight text-cream">
                  Tra i primi in Italia
                  <br />
                  <span className="text-cream-dim">a specializzarsi in SMP.</span>
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Text */}
          <div className="lg:col-span-7 lg:pl-8">
            <ScrollReveal>
              <p className="eyebrow">— 03 · L'Eccellenza</p>
              <h2 className="display mt-7 text-5xl leading-[0.95] text-cream md:text-7xl">
                Incontra
                <br />
                <em className="italic text-gold">Luca Sagona.</em>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="mt-12 space-y-7 text-base leading-[1.8] text-cream-dim md:text-lg">
                <p>
                  Dopo aver attraversato in prima persona la perdita di capelli, Luca ha scoperto la
                  micropigmentazione su sé stesso. <em className="italic text-cream">Da quel momento,
                  ha capito che voleva dedicare la sua vita a donare ad altri la stessa riconquista.</em>
                </p>
                <p>
                  Oggi è uno degli artisti di SMP più riconosciuti in Italia. Centinaia di volti, una sola
                  firma: lavoro rigoroso, attaccatura definita con matematica, pigmenti calibrati sul
                  fototipo, zero compromessi sull'estetica finale.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <div className="mt-12 grid grid-cols-1 gap-6 border-y border-line py-10 sm:grid-cols-2">
                {[
                  { icon: ShieldCheck, label: "100%", meta: "Sicurezza e sterilità" },
                  { icon: Sparkles, label: "8+ anni", meta: "Esperienza dedicata" },
                  { icon: Award, label: "600+", meta: "Clienti soddisfatti" },
                  { icon: Star, label: "4.8 / 5", meta: "Su tutte le piattaforme" },
                ].map((it) => (
                  <div key={it.meta} className="flex items-center gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/5 text-gold">
                      <it.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="display text-xl text-cream">{it.label}</p>
                      <p className="mt-1 text-xs text-muted">{it.meta}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={350}>
              <div className="mt-12 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
                <a
                  href="#contatti"
                  className="group inline-flex cursor-pointer items-center gap-2 text-sm font-medium tracking-wide text-gold"
                >
                  <span className="border-b border-gold/40 pb-0.5 transition-colors group-hover:border-gold">
                    Prenota un incontro con Luca
                  </span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <span className="hidden h-4 w-px bg-line sm:block" />
                <a
                  href={SITE.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex cursor-pointer items-center gap-2 text-sm text-cream-dim hover:text-cream"
                >
                  <Instagram className="h-4 w-4" />
                  Segui su Instagram
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────  FEATURED TRANSFORMATION  ───────────────── */

function Transformation() {
  return (
    <section className="relative overflow-hidden border-b border-line py-32 md:py-44">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <ScrollReveal>
          <div className="mb-16 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">— 04 · Trasformazione</p>
              <h2 className="display mt-7 max-w-2xl text-5xl leading-[0.95] text-cream md:text-6xl">
                <em className="italic text-gold">Un caso,</em> in dettaglio.
              </h2>
            </div>
            <p className="max-w-md text-base leading-[1.75] text-cream-dim">
              La stessa persona, due momenti. Qui il prima e il dopo, catturati nello studio di Livorno
              durante l'ultima seduta del percorso.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Before/After visual */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[4/5] w-full overflow-hidden border border-line bg-surface lg:aspect-auto lg:h-full">
                <Image
                  src="/images/transformation-1.png"
                  alt="Caso studio 01 — Trasformazione completa SMP"
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between md:bottom-8 md:left-8 md:right-8">
                  <div>
                    <p className="num-mono text-[10px] tracking-[0.4em] text-gold">
                      STUDIO · CASO N° 01
                    </p>
                    <p className="display mt-2 text-2xl text-cream md:text-3xl">
                      Stempiatura avanzata
                      <br />
                      <span className="text-cream-dim">→ effetto rasato naturale.</span>
                    </p>
                  </div>
                  <div className="hidden text-right md:block">
                    <p className="num-mono text-[10px] tracking-widest text-muted-2">3 SEDUTE</p>
                    <p className="num-mono text-[10px] tracking-widest text-muted-2">12 ORE</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Case details */}
            <div className="flex flex-col gap-8 lg:col-span-5 lg:pl-2">
              <div className="grid grid-cols-2 gap-6 border-t border-line pt-8">
                <div>
                  <p className="eyebrow-muted">Età</p>
                  <p className="display mt-3 text-3xl text-cream">42</p>
                </div>
                <div>
                  <p className="eyebrow-muted">Norwood</p>
                  <p className="display mt-3 text-3xl text-cream">V — VI</p>
                </div>
                <div>
                  <p className="eyebrow-muted">Area</p>
                  <p className="display mt-3 text-3xl text-cream">Frontale + Vertex</p>
                </div>
                <div>
                  <p className="eyebrow-muted">Durata</p>
                  <p className="display mt-3 text-3xl text-cream">5 mesi</p>
                </div>
              </div>

              <div className="border-t border-line pt-8">
                <p className="eyebrow-muted">Il percorso</p>
                <ul className="mt-5 space-y-4">
                  {[
                    "Consulenza privata per disegnare l'attaccatura ideale",
                    "Prima seduta — base del pigmento e definizione del fronte",
                    "Seconda seduta — stratificazione e densità",
                    "Ritocco finale — uniformità e tocco di chiusura",
                  ].map((step, i) => (
                    <li key={step} className="flex items-start gap-4 text-sm text-cream-dim">
                      <span className="num-mono mt-0.5 text-xs text-gold">
                        0{i + 1}
                      </span>
                      <span className="leading-[1.7]">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto border-t border-line pt-8">
                <a
                  href="#contatti"
                  className="group inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-gold"
                >
                  <span className="border-b border-gold/40 pb-0.5 transition-colors group-hover:border-gold">
                    Vuoi un risultato simile? Iniziamo da qui.
                  </span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ───────────────────────────  PROCESS  ─────────────────────────── */

function Process() {
  return (
    <section id="processo" className="relative border-b border-line py-32 md:py-44">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="mb-20 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-6">
            <ScrollReveal>
              <p className="eyebrow">— 05 · Il Processo</p>
              <h2 className="display mt-7 text-5xl leading-[0.95] text-cream md:text-6xl">
                Quattro atti,
                <br />
                <em className="italic text-gold">un'unica promessa.</em>
              </h2>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <ScrollReveal delay={150}>
              <p className="text-base leading-[1.75] text-cream-dim md:text-lg">
                Un protocollo definito in anni di pratica. Ogni fase ha un ritmo, una durata, un risultato
                atteso. Nessuna improvvisazione.
              </p>
            </ScrollReveal>
          </div>
        </div>

        <div className="space-y-0">
          {PROCESS.map((p, i) => (
            <ScrollReveal key={p.n} delay={i * 80}>
              <article
                className={`group grid grid-cols-12 gap-6 border-t border-line py-12 transition-colors hover:bg-surface/30 md:gap-10 ${
                  i === PROCESS.length - 1 ? "border-b" : ""
                }`}
              >
                <div className="col-span-3 md:col-span-2">
                  <p className="num-mono text-2xl text-gold md:text-3xl">{p.n}</p>
                </div>
                <div className="col-span-9 md:col-span-6">
                  <h3 className="display text-3xl text-cream transition-colors group-hover:text-gold md:text-5xl">
                    {p.title}
                  </h3>
                  <p className="mt-5 max-w-xl text-sm leading-[1.75] text-cream-dim md:text-base">
                    {p.body}
                  </p>
                </div>
                <div className="col-span-12 flex items-center justify-between md:col-span-4 md:justify-end md:text-right">
                  <div className="flex items-center gap-2 text-[11px] text-muted md:hidden">
                    <Clock className="h-3.5 w-3.5" />
                    <span className="num-mono">{p.duration}</span>
                  </div>
                  <div className="hidden md:block">
                    <p className="eyebrow-muted">Durata</p>
                    <p className="num-mono mt-2 text-lg text-cream">{p.duration}</p>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* Treatment detail visual */}
        <ScrollReveal delay={300}>
          <div className="mt-20 grid grid-cols-1 items-center gap-12 border-t border-line pt-20 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="relative aspect-[3/4] w-full overflow-hidden border border-line bg-surface">
                <Image
                  src="/images/treatment-detail.png"
                  alt="Dettaglio del trattamento SMP — pigmenti e attrezzatura sterile"
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover"
                />
              </div>
              <p className="num-mono mt-4 text-[10px] tracking-widest text-muted-2">
                IN STUDIO · ATTREZZATURA STERILE MONOUSO
              </p>
            </div>
            <div className="lg:col-span-7 lg:pl-4">
              <p className="eyebrow">— Precisione assoluta</p>
              <h3 className="display mt-5 text-3xl leading-tight text-cream md:text-5xl">
                Ago sottile.
                <br />
                Pigmento calibrato.
                <br />
                <em className="italic text-gold">Risultato naturale.</em>
              </h3>
              <p className="mt-8 max-w-xl text-base leading-[1.75] text-cream-dim">
                Ogni seduta si svolge in un ambiente controllato, con attrezzatura sterile monouso e
                pigmenti bio-assorbibili certificati. Disegniamo l'attaccatura follicolo per follicolo, con
                la pazienza di un miniaturista.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6">
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
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ───────────────────────────  RESULTS  ─────────────────────────── */

function Results() {
  const cases = [
    {
      src: "/images/case-1.png",
      title: "Ricostruzione frontale",
      meta: "Norwood V — VI · 3 sedute",
      detail: "Densità full frontale e vertex",
    },
    {
      src: "/images/case-2.png",
      title: "Copertura vertex",
      meta: "Norwood III — IV · 2 sedute",
      detail: "Riempimento crown area",
    },
    {
      src: "/images/case-3.png",
      title: "Densità post-trapianto",
      meta: "Trapianto pregresso · 3 sedute",
      detail: "Aumento densità visiva",
    },
  ];

  return (
    <section id="risultati" className="relative border-b border-line py-32 md:py-44">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="mb-20 grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ScrollReveal>
              <p className="eyebrow">— 06 · Risultati</p>
              <h2 className="display mt-7 text-5xl leading-[0.95] text-cream md:text-7xl">
                <em className="italic text-gold">Risultati</em> reali.
                <br />
                Vera sicurezza.
              </h2>
            </ScrollReveal>
          </div>
          <div className="flex items-end lg:col-span-5 lg:justify-end">
            <ScrollReveal delay={150}>
              <a
                href="#contatti"
                className="group inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-gold"
              >
                <span className="border-b border-gold/40 pb-0.5 group-hover:border-gold">
                  Vedi tutti i casi studio
                </span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </ScrollReveal>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
          {cases.map((c, i) => (
            <ScrollReveal key={c.title} delay={i * 100}>
              <article className="group cursor-pointer">
                <div className="relative aspect-[4/5] overflow-hidden border border-line bg-surface">
                  <Image
                    src={c.src}
                    alt={c.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="num-mono text-[10px] tracking-[0.3em] text-gold">
                      CASO · 0{i + 1}
                    </p>
                    <h3 className="display mt-3 text-2xl text-cream md:text-3xl">
                      {c.title}
                    </h3>
                    <p className="mt-2 text-xs text-cream-dim">{c.meta}</p>
                    <p className="mt-1 text-[11px] text-muted-2">{c.detail}</p>
                  </div>
                  <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 bg-ink/70 text-cream opacity-0 backdrop-blur-md transition-opacity group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={300}>
          <div className="mt-24 grid grid-cols-1 gap-8 border-t border-line pt-16 md:grid-cols-3">
            {[
              { n: "01", t: "100% naturale", d: "Effetto rasato credibile a pochi centimetri." },
              { n: "02", t: "Nessuna chirurgia", d: "Ago sottile, pigmento bio-assorbibile, zero bisturi." },
              { n: "03", t: "Zero downtime", d: "Torni alla vita normale già dal giorno dopo." },
            ].map((b) => (
              <div key={b.n} className="group flex gap-5">
                <span className="num-mono text-xs text-gold">{b.n}</span>
                <div>
                  <p className="display text-xl text-cream transition-colors group-hover:text-gold">
                    {b.t}
                  </p>
                  <p className="mt-2 text-sm leading-[1.7] text-cream-dim">{b.d}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ───────────────────────────  TESTIMONIALS  ─────────────────────────── */

function Testimonials() {
  return (
    <section className="relative border-b border-line py-32 md:py-44">
      <div className="pointer-events-none absolute inset-0 grain opacity-50" />
      <div className="relative mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="mb-20 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <ScrollReveal>
            <div>
              <p className="eyebrow">— 07 · Voci</p>
              <h2 className="display mt-7 max-w-3xl text-5xl leading-[0.95] text-cream md:text-6xl">
                Cosa dicono
                <br />
                <em className="italic text-gold">i nostri clienti.</em>
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
                <span className="num-mono ml-2 text-sm text-cream">{SITE.rating}</span>
                <span className="text-xs text-muted-2">/ 5 · {SITE.reviewCount} recensioni</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-muted-2">
                <span className="num-mono tracking-widest">RECENSIONI VERIFICATE</span>
                <span className="h-px w-8 bg-line" />
                <span className="num-mono tracking-widest">5/5</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
          {TESTIMONIALS.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 120}>
              <article className="relative flex h-full flex-col border border-line bg-surface/40 p-8 transition-all hover:border-gold/40 hover:bg-surface md:p-10">
                <Quote className="h-7 w-7 text-gold/40" />
                <p className="display mt-6 flex-1 text-xl leading-[1.5] text-cream md:text-2xl">
                  <em className="italic">"{t.body}"</em>
                </p>
                <div className="hairline my-8" />
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-cream">{t.name}</p>
                    <p className="num-mono mt-1 text-[10px] tracking-widest text-muted-2">
                      {t.meta.toUpperCase()}
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

/* ───────────────────────────  FAQ  ─────────────────────────── */

function FAQ() {
  return (
    <section id="faq" className="relative border-b border-line py-32 md:py-44">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <ScrollReveal>
              <p className="eyebrow">— 08 · Domande</p>
              <h2 className="display mt-7 text-5xl leading-[0.95] text-cream md:text-6xl">
                Tutto quello che
                <br />
                vuoi <em className="italic text-gold">sapere.</em>
              </h2>
              <p className="mt-10 max-w-md text-sm leading-[1.75] text-cream-dim md:text-base">
                Domande frequenti sulla micropigmentazione del cuoio capelluto. Se non trovi la risposta
                che cerchi, scrivici: il nostro team è a disposizione.
              </p>
              <a
                href="#contatti"
                className="group mt-10 inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-gold"
              >
                <span className="border-b border-gold/40 pb-0.5 group-hover:border-gold">
                  Fai una domanda diretta
                </span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-7">
            <div className="border-t border-line">
              {FAQS.map((f, i) => (
                <FAQItem key={f.q} q={f.q} a={f.a} n={i + 1} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQItem({ q, a, n }: { q: string; a: string; n: number }) {
  return (
    <details className="group border-b border-line [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer items-start gap-6 py-7 transition-colors hover:text-gold">
        <span className="num-mono mt-2 text-xs text-muted-2 group-open:text-gold">
          0{n}
        </span>
        <h3 className="display flex-1 text-xl text-cream transition-colors group-hover:text-gold md:text-2xl">
          {q}
        </h3>
        <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-cream transition-all group-open:border-gold group-open:bg-gold group-open:text-ink">
          <Plus className="h-3.5 w-3.5 transition-transform duration-300 group-open:rotate-45" />
        </span>
      </summary>
      <div className="grid grid-cols-12 gap-6 pb-7">
        <div className="col-span-12 md:col-span-2" />
        <p className="col-span-12 max-w-2xl text-base leading-[1.75] text-cream-dim md:col-span-10">
          {a}
        </p>
      </div>
    </details>
  );
}

/* ───────────────────────────  CONTACT  ─────────────────────────── */

function Contact() {
  return (
    <section className="relative overflow-hidden py-32 md:py-44">
      <div className="pointer-events-none absolute inset-0 gradient-radial-gold opacity-30" />
      <div className="pointer-events-none absolute inset-0 grain opacity-50" />

      <div className="relative mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Form */}
          <div className="lg:col-span-7">
            <ScrollReveal>
              <p className="eyebrow">— 09 · Cosa stai aspettando?</p>
              <h2 className="display mt-7 text-5xl leading-[0.95] text-cream md:text-7xl">
                Compila il modulo.
                <br />
                <em className="italic text-gold">Noi ti chiamiamo.</em>
              </h2>
            </ScrollReveal>

            <form className="mt-14 space-y-7">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Field label="Nome" placeholder="Il tuo nome" />
                <Field label="Cognome" placeholder="Il tuo cognome" />
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Field label="Email" type="email" placeholder="tu@email.com" />
                <Field label="Telefono" type="tel" placeholder="+39 351 555 8821" />
              </div>
              <div>
                <label className="eyebrow-muted mb-4 block">La tua situazione</label>
                <select
                  className="w-full appearance-none border border-line bg-surface/30 px-5 py-4 text-base text-cream outline-none transition-all focus:border-gold"
                  defaultValue=""
                >
                  <option value="" disabled className="bg-ink">Seleziona...</option>
                  <option className="bg-ink">Stempiatura frontale</option>
                  <option className="bg-ink">Diradamento vertex</option>
                  <option className="bg-ink">Calvizie avanzata</option>
                  <option className="bg-ink">Copertura cicatrici</option>
                  <option className="bg-ink">Densità post-trapianto</option>
                </select>
              </div>
              <div>
                <label className="eyebrow-muted mb-4 block">Quando preferisci essere ricontattato?</label>
                <div className="grid grid-cols-3 gap-3">
                  {["Mattina", "Pomeriggio", "Sera"].map((s) => (
                    <label
                      key={s}
                      className="group flex cursor-pointer items-center justify-center border border-line bg-surface/30 px-4 py-4 text-sm text-cream-dim transition-all hover:border-gold/60 has-[:checked]:border-gold has-[:checked]:bg-gold/10 has-[:checked]:text-cream"
                    >
                      <input type="radio" name="time" className="sr-only" />
                      {s}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="eyebrow-muted mb-4 block">Messaggio (opzionale)</label>
                <textarea
                  rows={4}
                  placeholder="Raccontaci la tua storia..."
                  className="w-full resize-none border border-line bg-surface/30 px-5 py-4 text-base text-cream placeholder:text-muted-2 outline-none transition-all focus:border-gold"
                />
              </div>
              <label className="flex cursor-pointer items-start gap-3 text-xs text-cream-dim">
                <input type="checkbox" className="mt-0.5 accent-gold" />
                <span>
                  Ho letto e accetto l'<a href="#" className="text-gold underline-offset-2 hover:underline">Informativa sulla Privacy</a>.
                </span>
              </label>
              <button
                type="submit"
                className="group inline-flex w-full cursor-pointer items-center justify-center gap-3 rounded-full bg-gold px-8 py-5 text-sm font-semibold tracking-wide text-ink transition-all hover:bg-cream md:w-auto"
              >
                Invia Messaggio
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-5 lg:pl-8">
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
                  Nessun impegno. Nessun pagamento anticipato. Solo un confronto onesto.
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

function Field({
  label,
  type = "text",
  placeholder,
}: {
  label: string;
  type?: string;
  placeholder: string;
}) {
  return (
    <div>
      <label className="eyebrow-muted mb-4 block">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full border border-line bg-surface/30 px-5 py-4 text-base text-cream placeholder:text-muted-2 outline-none transition-all focus:border-gold"
      />
    </div>
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
          <p key={l} className="mt-1 text-sm text-cream transition-colors group-hover:text-gold">
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
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="block cursor-pointer">
        {content}
      </a>
    );
  }
  return content;
}
