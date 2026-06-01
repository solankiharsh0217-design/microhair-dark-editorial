import Image from "next/image";

type Props = {
  src: string;
  badge: string;
  title: string;
  body: string;
  index?: number;
};

export default function ServiceCard({ src, badge, title, body, index }: Props) {
  return (
    <article className="group flex h-full flex-col">
      <div className="relative aspect-[4/5] overflow-hidden border border-line bg-surface">
        <Image
          src={src}
          alt={title}
          fill
          sizes="(min-width: 768px) 25vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
        {index !== undefined && (
          <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 bg-ink/70 backdrop-blur-md">
            <span className="num-mono text-xs text-gold">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        )}
        <div className="absolute inset-x-0 bottom-0 p-6">
          <p className="eyebrow-muted text-[10px]">{badge}</p>
          <h3 className="display mt-3 text-2xl text-cream md:text-3xl">{title}</h3>
        </div>
      </div>
      <p className="mt-6 text-sm leading-[1.75] text-cream-dim md:text-base">
        {body}
      </p>
    </article>
  );
}
