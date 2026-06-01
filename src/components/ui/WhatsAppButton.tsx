"use client";
import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/constants";

export default function WhatsAppButton() {
  return (
    <a
      href={SITE.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Scrivici su WhatsApp"
      className="group fixed bottom-8 right-5 z-50 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-black/50 transition-all duration-300 hover:scale-105 hover:shadow-[#25D366]/40 md:bottom-10 md:right-8"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] pulse-green" aria-hidden />
      <MessageCircle className="relative h-6 w-6 transition-transform duration-300 group-hover:scale-110" strokeWidth={2.2} />
      <span className="absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-ink px-4 py-2 text-xs font-medium text-cream opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100 md:block">
        Scrivici adesso
      </span>
    </a>
  );
}
