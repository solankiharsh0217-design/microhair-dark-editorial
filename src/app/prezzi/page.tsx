import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { SITE, PRICING_TIERS } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Prezzi — ${SITE.name} | Quanto costa la Micropigmentazione?`,
  description:
    "Prezzi della micropigmentazione del cuoio capelluto a Livorno. Quattro livelli di trattamento da €600 a €2.000. Pagamento rateizzabile senza interessi.",
};

export default function PrezziPage() {
  return <Investimento />;
}

function Investimento() {
  return (
    <section
      id="investimento"
      className="relative py-12 md:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">

        {/* Header */}
        <div className="mb-10 grid grid-cols-1 gap-8 md:mb-16 md:grid-cols-12 md:gap-20">
          <div className="md:col-span-7">
            <ScrollReveal>
              <SectionLabel n="01">L&apos;investimento</SectionLabel>
              <h1 className="display mt-7 text-4xl leading-[0.95] text-cream sm:text-5xl md:text-7xl">
                Ma quanto
                <br />
                <em className="italic text-gold">costa</em> la
                <br />
                micropigmentazione?
              </h1>
            </ScrollReveal>
          </div>
          <div className="flex items-end md:col-span-5 md:justify-end">
            <ScrollReveal delay={150}>
              <p className="max-w-md text-base leading-[1.75] text-cream-dim">
                I prezzi variano in base al livello di calvizie e alle aree da
                trattare. I prezzi si riferiscono al trattamento completo (3 sedute).
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* TDS-style diagram cards */}
        <div className="grid grid-cols-1 gap-0 border border-line sm:grid-cols-2 lg:grid-cols-4">
          {PRICING_TIERS.map((t, i) => (
            <ScrollReveal key={t.n} delay={i * 80}>
              <article
                className={`group flex h-full flex-col border-line transition-all hover:bg-gold/[0.04] ${
                  i < PRICING_TIERS.length - 1 ? "border-b sm:border-b-0 sm:border-r" : ""
                }`}
              >
                {/* Level header */}
                <div className="border-b border-line px-6 py-5 text-center">
                  <p className="num-mono text-xs font-semibold tracking-[0.3em] text-cream">
                    {t.name}
                  </p>
                </div>

                {/* Description */}
                <div className="border-b border-line px-6 py-4 text-center">
                  <p className="text-sm leading-snug text-cream-dim">{t.level}</p>
                </div>

                {/* Diagram */}
                <div className="flex flex-1 items-center justify-center px-8 py-8">
                  <div className="relative w-full max-w-[200px] aspect-square">
                    <Image
                      src={t.image}
                      alt={`${t.name} — ${t.level}`}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-contain invert opacity-90 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                </div>

                {/* Price */}
                <div className="border-t border-line px-6 py-5 text-center">
                  <p className="display text-2xl text-gold md:text-3xl">{t.range}</p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* Footer note */}
        <ScrollReveal delay={200}>
          <p className="mt-5 text-center num-mono text-[11px] tracking-widest text-muted-2 uppercase">
            I prezzi si riferiscono al trattamento completo (3 sedute)
          </p>
        </ScrollReveal>

        {/* Installment section */}
        <ScrollReveal delay={150}>
          <div className="mt-16 border-t border-line pt-12">
            <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-7">
                <p className="eyebrow-muted">— Pagamenti flessibili</p>
                <h2 className="display mt-5 text-3xl leading-[1.1] text-cream md:text-4xl">
                  <em className="italic text-gold">Senza pensieri,</em>{" "}
                  senza rinunce.
                </h2>
                <p className="mt-6 max-w-xl text-base leading-[1.75] text-cream-dim">
                  La micropigmentazione è un investimento su di te e sulla tua
                  immagine. Per rendere il trattamento più accessibile, offriamo
                  la possibilità di rateizzare il pagamento fino a{" "}
                  <em className="italic text-gold">12 rate</em>, senza interessi.
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
