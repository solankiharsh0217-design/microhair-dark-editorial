import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import CTABlock from "@/components/ui/CTABlock";
import { SITE, PROTOCOL_BADGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Chi Siamo — ${SITE.name} | Il Protocollo Esclusivo`,
  description:
    "Luca Sagona e l'atelier MicroHair di Livorno. 8+ anni dedicati esclusivamente alla micropigmentazione del cuoio capelluto. 600+ clienti trattati.",
};

export default function ChiSiamoPage() {
  return <Eccellenza />;
}

function Eccellenza() {
  return (
    <section
      id="eccellenza"
      className="relative overflow-hidden py-12 md:py-20 lg:py-28"
    >
      <div className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full gradient-radial-gold opacity-30 blur-3xl" />

      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <ScrollReveal>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionLabel n="01">Chi Siamo</SectionLabel>
              <h1 className="display mt-7 text-4xl leading-[0.95] text-cream sm:text-5xl md:text-7xl">
                Il nostro
                <br />
                protocollo{" "}
                <em className="italic text-gold">esclusivo.</em>
              </h1>
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
                <p className="num-mono text-[10px] tracking-[0.3em] text-gold">LA TECNICA · IN STUDIO</p>
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
                <p className="num-mono text-[10px] tracking-[0.3em] text-gold">L&apos;ATELIER · LIVORNO</p>
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
            <h2 className="display mt-5 text-3xl leading-[1.1] text-cream md:text-4xl">
              Replica delle unità follicolari con{" "}
              <em className="italic text-gold">precisione millimetrica.</em>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-[1.75] text-cream-dim">
              Attraverso migliaia di micro-riproduzioni, ricreiamo
              un&apos;attaccatura proporzionata, valorizziamo i lineamenti,
              restituiamo un aspetto più giovane, virile e sicuro.
            </p>
            <div className="mt-10">
              <CTABlock
                primaryLabel="Invia le tue foto su WhatsApp"
                secondaryLabel="Prenota una consulenza"
                align="left"
              />
            </div>
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
