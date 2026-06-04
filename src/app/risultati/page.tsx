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

        <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
          {/* Left: transformation-1 (portrait) + case-1 (wide) */}
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
                    <h2 className="display text-2xl text-cream md:text-4xl">Stempiatura Avanzata</h2>
                    <p className="mt-2 text-xs text-cream-dim md:text-sm">Norwood V — VI · 3 sedute</p>
                    <p className="mt-1 text-[11px] text-muted-2">Frontale + Vertex · ricostruzione completa</p>
                  </div>
                </div>
              </article>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <article className="group cursor-pointer">
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
                    <h2 className="display text-xl text-cream md:text-2xl">Effetto Rasato</h2>
                    <p className="mt-1 text-[11px] text-cream-dim">Norwood IV — V · 2 sedute</p>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          </div>

          {/* Right: case-2 + case-3 stacked */}
          <div className="flex flex-col gap-6 md:flex-1">
            <ScrollReveal delay={80}>
              <article className="group cursor-pointer">
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
                    <h2 className="display text-xl text-cream md:text-3xl">Copertura Vertex</h2>
                    <p className="mt-1 text-xs text-cream-dim md:text-sm">Norwood III — IV · 2 sedute</p>
                    <p className="mt-0.5 text-[11px] text-muted-2">Riempimento crown area</p>
                  </div>
                </div>
              </article>
            </ScrollReveal>

            <ScrollReveal delay={160}>
              <article className="group cursor-pointer">
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
                    <h2 className="display text-xl text-cream md:text-3xl">Densità Post-Trapianto</h2>
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
                <div className="relative aspect-[21/9] overflow-hidden border border-line bg-surface">
                  <Image
                    src="/images/case-1.png"
                    alt="Risultato SMP — effetto rasato prima e dopo"
                    fill
                    sizes="(min-width: 768px) 58vw, 100vw"
                    className="object-cover saturate-[0.55] brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/15" />
                  <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-5">
                    <p className="num-mono text-[10px] tracking-widest text-gold uppercase">Caso A · Effetto Rasato</p>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <div className="relative aspect-[16/9] overflow-hidden border border-line bg-surface">
                  <Image
                    src="/images/case-2.png"
                    alt="Risultato SMP — densità vertex prima e dopo"
                    fill
                    sizes="(min-width: 768px) 58vw, 100vw"
                    className="object-cover saturate-[0.55] brightness-90"
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
