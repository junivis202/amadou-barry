"use client";

import {
  BarChart3,
  Handshake,
  Linkedin,
  Phone,
  Target,
  TrendingUp,
  Users,
  Wallet,
} from "lucide-react";
import { useLang } from "@/components/language";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { PROFILE } from "@/lib/profile";

const EXPERTISE_ICONS = [TrendingUp, Wallet, Handshake, Target, BarChart3, Users];

export function StatsStrip() {
  const { t } = useLang();
  return (
    <section className="relative z-10 -mt-6 px-5 sm:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-2 overflow-hidden rounded-3xl border border-line bg-surface/90 shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-paper)_6%,transparent)] md:grid-cols-4">
        {t.stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`px-5 py-6 sm:px-7 sm:py-8 ${i < 2 ? "border-b border-line md:border-b-0" : ""} ${i % 2 === 0 ? "border-r border-line" : ""} ${i === 2 ? "md:border-r" : ""}`}
          >
            <div className="font-display text-3xl tracking-tight text-paper sm:text-4xl">
              <span className="tabular-nums">{stat.display}</span>
            </div>
            <p className="mt-2 text-xs uppercase tracking-[0.16em] text-muted">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function About() {
  const { t } = useLang();
  return (
    <section id="a-propos" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="relative mx-auto w-full max-w-md">
          <div className="float-y-slow overflow-hidden rounded-[1.75rem] border border-line">
            <img
              src={PROFILE.portrait}
              alt={PROFILE.name}
              width={900}
              height={900}
              className="aspect-[4/5] w-full object-cover object-[center_8%]"
            />
          </div>
          <div className="chip-float float-y-delayed absolute -right-2 bottom-8 rounded-2xl border border-line px-4 py-3 sm:-right-6">
            <p className="font-display text-lg leading-none">{PROFILE.company}</p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-muted">
              {t.location}
            </p>
          </div>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-wine">
            {t.aboutKicker}
          </p>
          <h2 className="mt-3 font-display text-4xl leading-[1.1] tracking-tight sm:text-5xl">
            {t.aboutTitle}
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted sm:text-[1.05rem]">
            <p>{t.aboutP1}</p>
            <p>{t.aboutP2}</p>
            <p className="text-paper/85">{t.aboutClose}</p>
          </div>
          <ul className="mt-8 flex flex-wrap gap-2">
            {t.skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-line px-3.5 py-2 text-xs uppercase tracking-[0.14em] text-muted"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Impact() {
  const { t } = useLang();
  return (
    <section id="impact" className="bg-surface/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-wine">
          {t.impactKicker}
        </p>
        <h2 className="mt-3 max-w-xl font-display text-4xl leading-[1.1] tracking-tight sm:text-5xl">
          {t.impactTitle}
        </h2>
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {t.impacts.map((item) => (
            <article
              key={item.label}
              className="rounded-2xl border border-line bg-ink/40 px-5 py-6 transition-[border-color,transform] duration-200 ease-out hover:border-line-strong hover:-translate-y-0.5"
            >
              <p className="font-display text-3xl tracking-tight text-paper">{item.value}</p>
              <p className="mt-2 text-sm font-medium text-paper">{item.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Expertise() {
  const { t } = useLang();
  return (
    <section id="expertises" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <p className="text-xs font-medium uppercase tracking-[0.28em] text-wine">
        {t.expertiseKicker}
      </p>
      <h2 className="mt-3 max-w-xl font-display text-4xl leading-[1.1] tracking-tight sm:text-5xl">
        {t.expertiseTitle}
      </h2>
      <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {t.expertise.map((item, i) => {
          const Icon = EXPERTISE_ICONS[i] ?? Target;
          return (
            <article
              key={item.title}
              className="rounded-2xl border border-line bg-surface/50 p-6"
            >
              <Icon className="size-5 text-wine" strokeWidth={1.6} />
              <h3 className="mt-4 font-display text-2xl tracking-tight">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.detail}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export function Gallery() {
  const { t } = useLang();
  return (
    <section className="pb-8 sm:pb-12">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-wine">
          {t.galleryKicker}
        </p>
        <h2 className="mt-3 max-w-xl font-display text-4xl leading-[1.1] tracking-tight sm:text-5xl">
          {t.galleryTitle}
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-6">
          {t.gallery.map((shot, i) => {
            const span =
              i === 0
                ? "sm:col-span-4 sm:row-span-2"
                : i === 1
                  ? "sm:col-span-2"
                  : i === 2
                    ? "sm:col-span-2"
                    : "sm:col-span-2";
            const imgH = i === 0 ? "min-h-72 sm:min-h-96" : "min-h-52 sm:min-h-64";
            return (
              <figure
                key={shot.src}
                className={`group relative overflow-hidden rounded-2xl border border-line ${span}`}
              >
                <img
                  src={shot.src}
                  alt={shot.alt}
                  className={`${imgH} h-full w-full object-cover outline-none transition-transform duration-700 ease-out group-hover:scale-105`}
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-[linear-gradient(transparent,color-mix(in_oklab,var(--color-ink)_88%,transparent))] p-4">
                  <p className="font-display text-xl text-paper">{shot.caption}</p>
                  <p className="text-xs uppercase tracking-[0.16em] text-muted">{shot.sub}</p>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const { t, lang } = useLang();
  const wa = lang === "fr" ? PROFILE.whatsappFr : PROFILE.whatsappEn;
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="overflow-hidden rounded-3xl border border-line bg-surface">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[240px] overflow-hidden">
            <img
              src="/images/skyline.webp"
              alt=""
              className="kenburns h-full w-full object-cover outline-none"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,var(--color-surface))] lg:bg-[linear-gradient(90deg,transparent,var(--color-surface))]" />
          </div>
          <div className="p-7 sm:p-12">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-wine">
              {t.contactKicker}
            </p>
            <h2 className="mt-3 font-display text-4xl leading-[1.1] tracking-tight sm:text-5xl">
              {t.contactTitle}
            </h2>
            <p className="mt-4 max-w-md text-muted">{t.contactLead}</p>
            <a
              href={`tel:${PROFILE.phoneTel}`}
              className="mt-8 block font-display text-3xl tracking-tight text-paper sm:text-4xl hover:text-wine transition-colors duration-150"
            >
              {PROFILE.phoneDisplay}
            </a>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
                className="inline-flex h-12 min-h-11 items-center justify-center gap-2 rounded-xl border border-line px-6 text-sm font-medium text-paper hover:bg-elevated transition-[background-color,transform] duration-150 active:scale-[0.96]"
              >
                <Linkedin className="size-4" strokeWidth={1.75} />
                {t.ctaLinkedin}
              </a>
              <a
                href={`tel:${PROFILE.phoneTel}`}
                className="inline-flex h-12 min-h-11 items-center justify-center gap-2 rounded-xl border border-line px-6 text-sm font-medium text-paper hover:bg-elevated transition-[background-color,transform] duration-150 active:scale-[0.96]"
              >
                <Phone className="size-4" strokeWidth={1.75} />
                {t.ctaCall}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  const { t } = useLang();
  return (
    <footer className="border-t border-line px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 text-sm text-faint sm:flex-row sm:items-center">
        <p>{t.footer}</p>
        <div className="flex gap-4">
          <a
            href={PROFILE.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="hover:text-paper transition-colors duration-150"
          >
            {t.waLabel}
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-paper transition-colors duration-150"
          >
            {t.liLabel}
          </a>
        </div>
      </div>
    </footer>
  );
}

export function FloatingWhatsApp() {
  const { lang, t } = useLang();
  const wa = lang === "fr" ? PROFILE.whatsappFr : PROFILE.whatsappEn;
  return (
    <a
      href={wa}
      target="_blank"
      rel="noreferrer"
      aria-label={t.ctaWhatsapp}
      className="fixed bottom-5 right-5 z-30 grid size-14 place-items-center rounded-full bg-wine text-paper shadow-[0_12px_40px_color-mix(in_oklab,var(--color-wine)_45%,transparent)] hover:bg-wine-hover transition-[background-color,transform] duration-150 active:scale-[0.96] sm:bottom-7 sm:right-7"
    >
      <span className="pulse-ring pointer-events-none absolute inset-0 rounded-full border border-wine/80" />
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
