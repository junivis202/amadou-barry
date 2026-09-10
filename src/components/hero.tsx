"use client";

import { Linkedin } from "lucide-react";
import { PROFILE } from "@/lib/profile";
import { useLang } from "@/components/language";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

export function Hero() {
  const { t, lang } = useLang();
  const wa = lang === "fr" ? PROFILE.whatsappFr : PROFILE.whatsappEn;
  const chips = t.floating;

  return (
    <section id="top" className="relative isolate min-h-svh overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/montreal.webp"
          alt=""
          className="kenburns h-full w-full object-cover object-center outline-none"
        />
        <div className="absolute inset-0 bg-ink/30" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-ink)_28%,transparent)_0%,color-mix(in_oklab,var(--color-ink)_45%,transparent)_46%,var(--color-ink)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_42%,color-mix(in_oklab,var(--color-wine)_12%,transparent),transparent_58%)]" />
      </div>

      <div className="relative mx-auto grid min-h-svh max-w-6xl items-center gap-10 px-5 pb-16 pt-24 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pt-20">
        <div className="stagger-in order-2 lg:order-1">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-wine">
            {t.kicker}
          </p>
          <h1 className="mt-4 font-display leading-[0.88] tracking-[-0.03em]">
            <span className="block text-[clamp(3.4rem,10vw,6.6rem)] italic text-paper/90">
              {PROFILE.firstName}
            </span>
            <span className="block text-[clamp(3.8rem,11vw,7.2rem)] font-semibold">
              {PROFILE.lastName}
            </span>
          </h1>
          <p className="mt-5 max-w-lg text-lg text-paper/90 sm:text-xl">{t.role}</p>
          <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted sm:text-base">
            {t.roleDetail}
          </p>
          <p className="mt-1 text-sm text-faint">
            {t.markets} · {t.location}
          </p>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">{t.heroLead}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={wa}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 min-h-11 items-center justify-center gap-2 rounded-xl bg-wine px-6 text-sm font-medium text-paper hover:bg-wine-hover transition-[background-color,transform] duration-150 active:scale-[0.96]"
            >
              <WhatsAppIcon className="size-4" />
              {t.ctaWhatsapp}
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 min-h-11 items-center justify-center gap-2 rounded-xl border border-line px-6 text-sm font-medium text-paper hover:border-line-strong hover:bg-elevated transition-[background-color,border-color,transform] duration-150 active:scale-[0.96]"
            >
              <Linkedin className="size-4" strokeWidth={1.75} />
              {t.ctaLinkedin}
            </a>
          </div>

          <p className="mt-5 font-display text-xl tracking-wide text-paper/80 sm:text-2xl">
            {PROFILE.phoneDisplay}
          </p>
          <p className="mt-1 text-xs uppercase tracking-[0.18em] text-faint">
            {t.companyLine}
          </p>
        </div>

        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <div className="relative w-[min(78vw,380px)] sm:w-[min(70vw,400px)] lg:w-[min(100%,420px)]">
            <div className="pulse-ring pointer-events-none absolute -inset-5 rounded-full border border-wine/40" />
            <div className="float-y portrait-ring relative overflow-hidden rounded-full aspect-square">
              <img
                src={PROFILE.portrait}
                alt={PROFILE.name}
                width={900}
                height={900}
                className="h-full w-full object-cover object-[center_12%] outline-none"
              />
            </div>

            <div className="pointer-events-none absolute top-8 left-0 hidden -translate-x-full -ml-5 md:block">
              <div className="float-y-delayed">
                <Chip value={chips[0].value} label={chips[0].label} />
              </div>
            </div>
            <div className="pointer-events-none absolute top-6 right-0 hidden translate-x-full ml-5 md:block">
              <div className="float-y-slow">
                <Chip value={chips[1].value} label={chips[1].label} />
              </div>
            </div>
            <div className="pointer-events-none absolute bottom-16 left-0 hidden -translate-x-full -ml-5 md:block">
              <div className="float-y-slow">
                <Chip value={chips[2].value} label={chips[2].label} />
              </div>
            </div>
            <div className="pointer-events-none absolute bottom-10 right-0 hidden translate-x-full ml-5 md:block">
              <div className="float-y-delayed">
                <Chip value={chips[3].value} label={chips[3].label} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Chip({
  value,
  label,
  className,
}: {
  value: string;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`chip-float rounded-2xl border border-line px-3.5 py-2.5 ${className ?? ""}`}
    >
      <div className="font-display text-xl leading-none text-paper">{value}</div>
      <div className="mt-1 text-[10px] uppercase tracking-[0.16em] text-muted">{label}</div>
    </div>
  );
}
