type Props = {
  n: string;
  title: string;
  body: string;
  duration?: string;
  align?: "left" | "center";
};

export default function ProcessStep({
  n,
  title,
  body,
  duration,
  align = "left",
}: Props) {
  return (
    <article
      className={`flex h-full flex-col border border-line bg-surface/40 p-6 transition-all hover:border-gold/40 hover:bg-surface md:p-8 ${
        align === "center" ? "text-center" : ""
      }`}
    >
      <div className="flex items-center justify-between">
        <span className="num-mono text-3xl text-gold md:text-4xl">{n}</span>
        {duration && (
          <span className="num-mono text-[10px] tracking-widest text-muted-2 uppercase">
            {duration}
          </span>
        )}
      </div>
      <h3 className="display mt-8 text-2xl text-cream md:text-3xl">{title}</h3>
      <p className="mt-4 text-sm leading-[1.75] text-cream-dim md:text-base">
        {body}
      </p>
    </article>
  );
}
