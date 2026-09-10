"use client";

import { useEffect, useState } from "react";
import { PROFILE } from "@/lib/profile";
import { useLang } from "@/components/language";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const { t, lang, setLang } = useLang();
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const wa = lang === "fr" ? PROFILE.whatsappFr : PROFILE.whatsappEn;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-30 transition-[background-color,box-shadow,backdrop-filter] duration-200 ease-out",
        solid
          ? "bg-ink/80 shadow-[0_1px_0_0_var(--color-line)] backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-5 sm:h-[4.25rem] sm:px-8">
        <a href="#top" className="flex items-center gap-3 min-h-11">
          <span className="grid size-9 place-items-center rounded-full border border-line font-display text-sm tracking-wide text-paper">
            AB
          </span>
          <span className="hidden font-display text-lg tracking-tight sm:block">
            {PROFILE.name}
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm text-muted md:flex">
          <a className="hover:text-paper transition-colors duration-150" href="#a-propos">
            {t.nav.about}
          </a>
          <a className="hover:text-paper transition-colors duration-150" href="#impact">
            {t.nav.impact}
          </a>
          <a className="hover:text-paper transition-colors duration-150" href="#expertises">
            {t.nav.expertise}
          </a>
          <a className="hover:text-paper transition-colors duration-150" href="#contact">
            {t.nav.contact}
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label={t.langAria}
            onClick={() => setLang(lang === "fr" ? "en" : "fr")}
            className="grid h-11 min-w-11 place-items-center rounded-full border border-line px-3 text-xs font-medium tracking-widest text-muted hover:text-paper hover:border-line-strong transition-[color,border-color] duration-150"
          >
            {t.langLabel}
          </button>
          <a
            href={wa}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex h-11 items-center gap-2 rounded-full bg-wine px-4 text-sm font-medium text-paper hover:bg-wine-hover transition-colors duration-150 active:scale-[0.96]"
          >
            <WhatsAppIcon className="size-4" />
            {t.waLabel}
          </a>
        </div>
      </div>
    </header>
  );
}
