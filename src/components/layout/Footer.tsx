import Image from "next/image";
import { MapPin, Mail, Phone, ArrowUpRight } from "lucide-react";
import { InstagramIcon as Instagram, FacebookIcon as Facebook } from "@/components/ui/SocialIcons";
import { NAV, SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-ink">
      <div className="pointer-events-none absolute inset-0 gradient-radial-gold opacity-50" />

      <div className="relative mx-auto max-w-[1500px] px-5 pb-12 pt-28 md:px-10 md:pt-40">
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <p className="eyebrow">— Inizia da qui</p>
            <h2 className="display mt-6 max-w-2xl text-4xl leading-[0.95] text-cream sm:text-5xl md:text-7xl">
              La <em className="italic text-gold">prima</em> conversazione
              <br />
              non costa nulla.
            </h2>
            <p className="mt-8 max-w-md text-base leading-relaxed text-cream-dim">
              Scrivici o chiamaci per una consulenza privata. Nessun impegno, nessuna pressione. Solo un confronto onesto sulla tua situazione.
            </p>

            <div className="mt-12 flex flex-col gap-3 sm:flex-row">
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 text-sm font-semibold tracking-wide text-ink transition-all hover:bg-cream"
              >
                Scrivici su WhatsApp
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={SITE.phoneLink}
                className="group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-line bg-transparent px-7 py-4 text-sm font-medium tracking-wide text-cream transition-all hover:border-cream"
              >
                <Phone className="h-4 w-4" />
                {SITE.phone}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-6 lg:grid-cols-3">
            <div>
              <p className="eyebrow-muted mb-5">Atelier</p>
              <ul className="space-y-2.5 text-sm text-cream-dim">
                <li>
                  <a href="/trattamento" className="hover:text-gold">Il Trattamento</a>
                </li>
                <li>
                  <a href="/chi-siamo" className="hover:text-gold">Chi Siamo</a>
                </li>
                <li>
                  <a href="/risultati" className="hover:text-gold">Risultati</a>
                </li>
                <li>
                  <a href="/prezzi" className="hover:text-gold">Prezzi</a>
                </li>
                <li>
                  <a href="/contatti" className="hover:text-gold">Contatti & FAQ</a>
                </li>
              </ul>
            </div>

            <div>
              <p className="eyebrow-muted mb-5">Studio</p>
              <ul className="space-y-2.5 text-sm text-cream-dim">
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-cream">
                    Livorno — Piazza del Cisternone 12
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <a href={SITE.phoneLink} className="hover:text-cream">
                    {SITE.phone}
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <a href={SITE.emailLink} className="hover:text-cream">
                    {SITE.email}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="eyebrow-muted mb-5">Orari</p>
              <ul className="space-y-2.5 text-sm text-cream-dim">
                <li>Lunedì — Venerdì</li>
                <li className="text-cream">09:30 — 19:00</li>
                <li className="mt-3">Sabato</li>
                <li className="text-cream">Su appuntamento</li>
                <li className="mt-3">Domenica</li>
                <li className="text-muted-2">Chiuso</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="hairline my-20" />

        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Image
              src="/images/microhair-logo.png"
              alt={SITE.name}
              width={1001}
              height={563}
              className="h-14 w-auto brightness-0 invert opacity-90"
            />
            <p className="num-mono mt-4 text-[11px] tracking-widest text-muted-2">
              {SITE.byline.toUpperCase()}
              <br className="sm:hidden" />
              <span className="hidden sm:inline"> · </span>
              LIVORNO, ITALIA · EST. 2017
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={SITE.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-line text-cream-dim transition-all hover:border-gold hover:text-gold"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={SITE.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-line text-cream-dim transition-all hover:border-gold hover:text-gold"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 text-[11px] tracking-wide text-muted-2 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {SITE.fullName}. Tutti i diritti riservati.</p>
          <div className="flex items-center gap-4">
            <a href="/privacy" className="hover:text-gold transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
