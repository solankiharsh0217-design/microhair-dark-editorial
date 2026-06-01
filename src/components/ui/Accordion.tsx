import { Plus } from "lucide-react";

type Item = { q: string; a: string };

type Props = {
  items: readonly Item[];
  startN?: number;
};

export default function Accordion({ items, startN = 1 }: Props) {
  return (
    <div className="border-t border-line">
      {items.map((item, i) => (
        <details
          key={item.q}
          className="group border-b border-line [&_summary::-webkit-details-marker]:hidden"
        >
          <summary className="flex cursor-pointer items-start gap-6 py-7 transition-colors hover:text-gold">
            <span className="num-mono mt-2 text-xs text-muted-2 group-open:text-gold">
              {String(startN + i).padStart(2, "0")}
            </span>
            <h3 className="display flex-1 text-xl text-cream transition-colors group-hover:text-gold md:text-2xl">
              {item.q}
            </h3>
            <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-cream transition-all group-open:border-gold group-open:bg-gold group-open:text-ink">
              <Plus className="h-3.5 w-3.5 transition-transform duration-300 group-open:rotate-45" />
            </span>
          </summary>
          <div className="grid grid-cols-12 gap-6 pb-7">
            <div className="col-span-12 md:col-span-2" />
            <p className="col-span-12 max-w-2xl text-base leading-[1.75] text-cream-dim md:col-span-10">
              {item.a}
            </p>
          </div>
        </details>
      ))}
    </div>
  );
}
