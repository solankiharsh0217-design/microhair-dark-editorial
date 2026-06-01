"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV, SITE } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-line/60 bg-ink/85 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-4 md:px-10 md:py-5">
          <a href="#top" className="group cursor-pointer" aria-label={SITE.name}>
            <Image
              src="/images/microhair-logo.png"
              alt={SITE.name}
              width={1001}
              height={563}
              className="h-10 w-auto brightness-0 invert transition-opacity group-hover:opacity-70 md:h-12"
              priority
            />
          </a>

          <nav className="hidden items-center gap-9 lg:flex">
            {NAV.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative cursor-pointer text-[12.5px] font-medium tracking-wide text-cream-dim transition-colors hover:text-cream"
              >
                <span className="num-mono mr-2 text-[10px] text-muted-2">
                  0{i + 1}
                </span>
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contatti"
              className="group hidden cursor-pointer items-center gap-2 rounded-full border border-line bg-surface/40 px-5 py-2.5 text-[12px] font-medium tracking-wide text-cream transition-all hover:border-gold/60 hover:bg-gold hover:text-ink md:flex"
            >
              Prenota Consulenza
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-line bg-surface/40 text-cream transition-all hover:border-gold/60 hover:text-gold lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-ink transition-all duration-500 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col justify-center px-8 pt-24">
          <div className="mb-10 flex flex-col gap-6">
            <Image
              src="/images/microhair-logo.png"
              alt={SITE.name}
              width={1001}
              height={563}
              className="h-8 w-auto brightness-0 invert opacity-50"
            />
            <p className="eyebrow-muted">Naviga</p>
          </div>
          <nav className="flex flex-col gap-1">
            {NAV.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="group flex items-baseline gap-6 border-b border-line py-4 cursor-pointer"
                style={{
                  transitionDelay: `${i * 40}ms`,
                  transform: open ? "translateY(0)" : "translateY(20px)",
                  opacity: open ? 1 : 0,
                  transition: "all 600ms cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              >
                <span className="num-mono text-xs text-muted-2">
                  0{i + 1}
                </span>
                <span className="display text-4xl text-cream transition-colors group-hover:text-gold">
                  {item.label}
                </span>
              </a>
            ))}
          </nav>
          <div className="mt-12 flex flex-col gap-3 text-sm text-muted">
            <a href={SITE.phoneLink} className="hover:text-gold">{SITE.phone}</a>
            <a href={SITE.emailLink} className="hover:text-gold">{SITE.email}</a>
          </div>
        </div>
      </div>
    </>
  );
}
