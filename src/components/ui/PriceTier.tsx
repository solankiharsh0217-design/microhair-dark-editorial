import { ArrowUpRight } from "lucide-react";
import { SITE } from "@/lib/constants";

type Props = {
  n: string;
  name: string;
  level: string;
  range: string;
  highlight?: boolean;
};

export default function PriceTier({ n, name, level, range, highlight }: Props) {
  return (
    <article
      className={`group flex h-full flex-col border p-7 transition-all hover:border-gold/50 md:p-8 ${
        highlight
          ? "border-gold/50 bg-gold/5"
          : "border-line bg-surface/40 hover:bg-surface"
      }`}
    >
      {/* Decorative tier numeral */}
      <span className={`display text-7xl leading-none transition-colors md:text-8xl ${highlight ? "text-gold/35 group-hover:text-gold/50" : "text-gold/25 group-hover:text-gold/40"}`}>
        {n}
      </span>

      <div className="mt-auto pt-10">
        <p className="eyebrow-muted">Livello {n}</p>
        <h3 className="display mt-3 text-2xl text-cream md:text-3xl">{name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-cream-dim">{level}</p>

        <div className="hairline my-6" />

        <p className="display text-2xl text-gold md:text-3xl">{range}</p>
        <p className="num-mono mt-3 text-[10px] tracking-wider text-muted-2 uppercase">
          Trattamento completo · 3 sedute
        </p>

        {highlight && (
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group/cta mt-7 inline-flex items-center gap-2 text-xs font-medium text-gold"
          >
            <span className="border-b border-gold/40 pb-0.5 group-hover/cta:border-gold">
              Preventivo personalizzato
            </span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
          </a>
        )}
      </div>
    </article>
  );
}
