import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import PriceTier from "@/components/ui/PriceTier";
import { SITE, PRICING_TIERS } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Prezzi — ${SITE.name} | Quanto costa la Micropigmentazione?`,
  description:
    "Prezzi della micropigmentazione del cuoio capelluto a Livorno. Quattro livelli di trattamento da €900 a €2.600. Pagamento rateizzabile senza interessi.",
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
                trattare. Ecco una stima orientativa per il trattamento completo
                (3 sedute).
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
