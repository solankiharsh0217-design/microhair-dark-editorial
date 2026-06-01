import Image from "next/image";

type Props = {
  n: string;
  name: string;
  level: string;
  range: string;
  image: string;
  highlight?: boolean;
};

export default function PriceTier({
  n,
  name,
  level,
  range,
  image,
  highlight,
}: Props) {
  return (
    <article
      className={`group flex h-full flex-col border bg-surface/40 transition-all hover:border-gold/40 ${
        highlight ? "border-gold/50" : "border-line"
      }`}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
        <div className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-cream/20 bg-ink/80 backdrop-blur-md">
          <span className="num-mono text-[11px] text-gold">{n}</span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-7">
        <p className="eyebrow-muted">Livello {n}</p>
        <h3 className="display mt-3 text-2xl text-cream md:text-3xl">{name}</h3>
        <p className="mt-2 text-sm text-cream-dim">{level}</p>
        <div className="hairline my-6" />
        <p className="display mt-auto text-2xl text-gold md:text-3xl">{range}</p>
        <p className="mt-3 text-[11px] tracking-wider text-muted-2 uppercase num-mono">
          Trattamento completo · 3 sedute
        </p>
      </div>
    </article>
  );
}

