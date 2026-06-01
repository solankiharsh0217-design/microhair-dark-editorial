type Props = {
  n?: string;
  children: React.ReactNode;
  className?: string;
};

export default function SectionLabel({ n, children, className = "" }: Props) {
  return (
    <p
      className={`eyebrow flex items-center gap-3 text-gold ${className}`}
    >
      {n && (
        <span className="num-mono text-[10px] tracking-[0.4em] text-gold/80">
          {n}
        </span>
      )}
      {n && <span className="h-px w-8 bg-gold/40" />}
      <span>{children}</span>
    </p>
  );
}
