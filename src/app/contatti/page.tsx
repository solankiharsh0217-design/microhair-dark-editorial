import type { Metadata } from "next";
import { MapPin, Phone, Mail, Calendar, Clock, Check, ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import Accordion from "@/components/ui/Accordion";
import ContactForm from "@/components/ui/ContactForm";
import { SITE, FAQS } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Contatti & FAQ — ${SITE.name} | Prenota la tua Consulenza`,
  description:
    "Prenota la tua consulenza gratuita presso l'atelier MicroHair a Livorno. Risposte alle domande frequenti sulla micropigmentazione del cuoio capelluto.",
};

export default function ContattiPage() {
  return (
    <>
      <StudioPrenota />
      <FAQ />
    </>
  );
}

/* ── STUDIO + PRENOTA ──────────────────────────────────────────────── */

function StudioPrenota() {
  return (
    <section
      id="contatti"
      className="relative overflow-hidden py-12 md:py-20 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0 gradient-radial-gold opacity-20" />
      <div className="pointer-events-none absolute inset-0 grain opacity-30" />

      <div className="relative mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-20">
          <div className="md:col-span-7">
            <ScrollReveal>
              <SectionLabel n="01">Lo studio</SectionLabel>
              <h1 className="display mt-7 text-4xl leading-[0.95] text-cream sm:text-5xl md:text-7xl">
                Studio di
                <br />
                <em className="italic text-gold">micropigmentazione</em>
                <br />
                a Livorno.
              </h1>
              <p className="mt-10 max-w-xl text-base leading-[1.75] text-cream-dim">
                Affidati alla micropigmentazione professionale di MicroHair.
                Ti ricontattiamo entro 24 ore dalla tua richiesta.
              </p>
            </ScrollReveal>

            <ContactForm />
          </div>

          <div className="md:col-span-5 md:pl-8">
            <ScrollReveal delay={150}>
              <div className="space-y-1 border-t border-line pt-8">
                <ContactRow
                  icon={MapPin}
                  title="Atelier"
                  lines={[SITE.address]}
                  href={SITE.mapsUrl}
                />
                <ContactRow
                  icon={Phone}
                  title="Telefono"
                  lines={[SITE.phone]}
                  href={SITE.phoneLink}
                />
                <ContactRow
                  icon={Mail}
                  title="Email"
                  lines={[SITE.email]}
                  href={SITE.emailLink}
                />
                <ContactRow
                  icon={Clock}
                  title="Orari"
                  lines={["Lun — Ven · 09:30 — 19:00", "Sabato · Su appuntamento"]}
                />
                <ContactRow
                  icon={Calendar}
                  title="WhatsApp"
                  lines={["Risposta entro 2 ore lavorative"]}
                  href={SITE.whatsapp}
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <div className="mt-12 border border-gold/30 bg-gold/5 p-8">
                <p className="eyebrow">— Garanzia</p>
                <p className="display mt-4 text-2xl text-cream">
                  Consulenza iniziale
                  <br />
                  <em className="italic text-gold">sempre gratuita.</em>
                </p>
                <p className="mt-4 text-sm leading-[1.7] text-cream-dim">
                  Nessun impegno. Nessun pagamento anticipato. Solo un
                  confronto onesto.
                </p>
                <Check className="mt-5 h-5 w-5 text-gold" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  title,
  lines,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  lines: readonly string[] | string[];
  href?: string;
}) {
  const content = (
    <div className="group flex items-start gap-5 border-b border-line py-6 transition-colors">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/5 text-gold transition-all group-hover:border-gold group-hover:bg-gold/10">
        <Icon className="h-4 w-4" />
      </div>
      <div className="flex-1">
        <p className="eyebrow-muted">{title}</p>
        {lines.map((l) => (
          <p key={l} className="mt-1 text-sm text-cream transition-colors group-hover:text-gold">
            {l}
          </p>
        ))}
      </div>
      {href && (
        <ArrowUpRight className="mt-1 h-4 w-4 text-muted-2 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gold" />
      )}
    </div>
  );
  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel="noopener noreferrer"
        className="block cursor-pointer"
      >
        {content}
      </a>
    );
  }
  return content;
}

/* ── FAQ ───────────────────────────────────────────────────────────── */

function FAQ() {
  return (
    <section id="faq" className="relative border-t border-line py-12 md:py-20 lg:py-28">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-20">
          <div className="md:col-span-5">
            <ScrollReveal>
              <SectionLabel n="02">Domande frequenti</SectionLabel>
              <h2 className="display mt-7 text-4xl leading-[0.95] text-cream sm:text-5xl md:text-6xl">
                Tutto quello che
                <br />
                vuoi <em className="italic text-gold">sapere.</em>
              </h2>
              <p className="mt-10 max-w-md text-sm leading-[1.75] text-cream-dim md:text-base">
                Domande frequenti sulla micropigmentazione del cuoio capelluto.
                Se non trovi la risposta che cerchi, scrivici.
              </p>
              <a
                href={SITE.phoneLink}
                className="group mt-10 inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-gold"
              >
                <Phone className="h-4 w-4" />
                <span className="border-b border-gold/40 pb-0.5 group-hover:border-gold">
                  Parla direttamente con noi
                </span>
              </a>
            </ScrollReveal>
          </div>

          <div className="md:col-span-7">
            <Accordion items={FAQS} />
          </div>
        </div>
      </div>
    </section>
  );
}
