import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Quote } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import CTABlock from "@/components/ui/CTABlock";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Risultati — ${SITE.name} | Prima e dopo. Vera sicurezza.`,
  description:
    "Galleria dei risultati reali di micropigmentazione del cuoio capelluto. Quattro casi clinici fotografati nello studio di Livorno.",
};

export default function RisultatiPage() {
  return (
    <>
      <Risultati />
      <Simulazione />
    </>
  );
}

/* ── RISULTATI ─────────────────────────────────────────────────────── */

const CASES = [
  {
    n: "01",
    src: "/images/effetto-rasato.jpeg",
    alt: "Effetto Rasato — prima e dopo",
    title: "Effetto Rasato",
    sub: "Norwood V — VI · 3 sedute",
    detail: "Ricostruzione completa dell'attaccatura",
  },
  {
    n: "02",
    src: "/images/effetto-densita.jpeg",
    alt: "Effetto Densità — prima e dopo",
    title: "Effetto Densità",
    sub: "Norwood III — IV · 3 sedute",
    detail: "Riempimento corona e vertex",
  },
  {
    n: "03",
    src: "/images/copertura-cicatrici.jpeg",
    alt: "Copertura Cicatrici — prima e dopo",
    title: "Copertura Cicatrici",
    sub: "Cicatrice FUT · 3 sedute",
    detail: "Uniformità colore su tutta l'area",
  },
  {
    n: "04",
    src: "/images/tecnica-granulata.jpeg",
    alt: "Tecnica Granulata — prima e dopo",
    title: "Tecnica Granulata",
    sub: "Diradamento frontale · 3 sedute",
    detail: "Effetto naturale follicolo per follicolo",
  },
  {
    n: "05",
    src: "/images/case-1.png",
    alt: "Vista Superiore — prima e dopo",
    title: "Vista Superiore",
    sub: "Norwood VI · 3 sedute",
    detail: "Ricostruzione corona e vertex",
  },
  {
    n: "06",
    src: "/images/case-2.png",
    alt: "Attaccatura Ridisegnata — prima e dopo",
    title: "Attaccatura Ridisegnata",
    sub: "Norwood V · 3 sedute",
    detail: "Definizione attaccatura frontale",
  },
  {
    n: "07",
    src: "/images/case-3.png",
    alt: "Densità Completa — prima e dopo",
    title: "Densità Completa",
    sub: "Norwood IV · 3 sedute",
    detail: "Uniformità colore su tutta l'area",
  },
] as const;

function Risultati() {
  return (
    <section
      id="risultati"
      className="relative border-b border-line py-12 md:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        {/* Header */}
        <div className="mb-10 grid grid-cols-1 gap-8 md:mb-16 md:grid-cols-12 md:gap-20">
          <div className="md:col-span-7">
            <ScrollReveal>
              <SectionLabel n="01">Risultati</SectionLabel>
              <h1 className="display mt-7 text-4xl leading-[0.95] text-cream sm:text-5xl md:text-7xl">
                <em className="italic text-gold">Prima</em> e dopo.
                <br />
                <span className="text-cream-dim">Vera sicurezza.</span>
              </h1>
            </ScrollReveal>
          </div>
          <div className="flex items-end md:col-span-5 md:justify-end">
            <ScrollReveal delay={150}>
              <div className="max-w-md space-y-4">
                <p className="text-base leading-[1.75] text-cream-dim">
                  Quattro casi reali, fotografati nello studio di Livorno.
                  Risultati ottenuti con il protocollo MicroHair, in 3 sedute
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

        {/* Row 1 — 2 large images */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
          {CASES.slice(0, 2).map((c, i) => (
            <ScrollReveal key={c.n} delay={i * 80}>
              <article className="group cursor-pointer">
                <div className="relative aspect-[16/9] overflow-hidden border border-line bg-surface">
                  <Image src={c.src} alt={c.alt} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/20" />
                  <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-transparent to-transparent" />
                  <div className="absolute left-6 top-6"><p className="num-mono text-[10px] tracking-[0.3em] text-gold">CASO · {c.n}</p></div>
                  <div className="absolute inset-x-0 bottom-0 p-5 md:p-8">
                    <h2 className="display text-xl text-cream md:text-4xl">{c.title}</h2>
                    <p className="mt-1 text-xs text-cream-dim md:text-sm">{c.sub}</p>
                    <p className="mt-1 text-[11px] text-muted-2">{c.detail}</p>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* Row 2 — 3 medium images */}
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3 md:mt-6 md:gap-6">
          {CASES.slice(2, 5).map((c, i) => (
            <ScrollReveal key={c.n} delay={(i + 2) * 80}>
              <article className="group cursor-pointer">
                <div className="relative aspect-[16/9] overflow-hidden border border-line bg-surface">
                  <Image src={c.src} alt={c.alt} fill sizes="(min-width: 640px) 33vw, 100vw" className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />
                  <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-transparent to-transparent" />
                  <div className="absolute left-5 top-4"><p className="num-mono text-[10px] tracking-[0.3em] text-gold">CASO · {c.n}</p></div>
                  <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                    <h2 className="display text-lg text-cream md:text-2xl">{c.title}</h2>
                    <p className="mt-1 text-[11px] text-cream-dim">{c.sub}</p>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* Row 3 — remaining images */}
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3 md:mt-6 md:gap-6">
          {CASES.slice(5).map((c, i) => (
            <ScrollReveal key={c.n} delay={(i + 5) * 80}>
              <article className="group cursor-pointer">
                <div className="relative aspect-[16/9] overflow-hidden border border-line bg-surface">
                  <Image src={c.src} alt={c.alt} fill sizes="(min-width: 640px) 33vw, 100vw" className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />
                  <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-transparent to-transparent" />
                  <div className="absolute left-5 top-4"><p className="num-mono text-[10px] tracking-[0.3em] text-gold">CASO · {c.n}</p></div>
                  <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                    <h2 className="display text-lg text-cream md:text-2xl">{c.title}</h2>
                    <p className="mt-1 text-[11px] text-cream-dim">{c.sub}</p>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={250}>
          <div className="mt-12 flex flex-col items-center gap-6 border-t border-line pt-10 md:mt-16">
            <p className="text-center text-base text-cream-dim">
              Vuoi vedere come potresti apparire? Inviaci le tue foto.
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

/* ── SIMULAZIONE ───────────────────────────────────────────────────── */

function Simulazione() {
  return (
    <section className="relative overflow-hidden py-12 md:py-20 lg:py-28">
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[500px] w-[500px] rounded-full gradient-radial-gold opacity-30 blur-3xl" />

      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-20">
          <div className="md:col-span-5">
            <ScrollReveal>
              <SectionLabel n="02">La simulazione</SectionLabel>
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

            <div className="flex flex-col gap-4 md:gap-6">
              <ScrollReveal delay={200}>
                <div className="relative aspect-[16/9] overflow-hidden border border-line bg-surface">
                  <Image
                    src="/images/tecnica-filo-a-filo.jpeg"
                    alt="Tecnica Filo a Filo — prima e dopo"
                    fill
                    sizes="(min-width: 768px) 58vw, 100vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/15" />
                  <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-5">
                    <p className="num-mono text-[10px] tracking-widest text-gold uppercase">Tecnica Filo a Filo · Prima e Dopo</p>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <div className="relative aspect-[16/9] overflow-hidden border border-line bg-surface">
                  <Image
                    src="/images/effetto-densita.jpeg"
                    alt="Effetto Densità — prima e dopo"
                    fill
                    sizes="(min-width: 768px) 58vw, 100vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/15" />
                  <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-5">
                    <p className="num-mono text-[10px] tracking-widest text-gold uppercase">Effetto Densità · Prima e Dopo</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={400}>
              <div className="mt-8 border-l-2 border-gold/50 bg-gold/5 p-6 md:mt-10 md:p-8">
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
