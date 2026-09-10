import { createFileRoute } from "@tanstack/react-router";
import { LanguageProvider } from "@/components/language";
import { SiteHeader } from "@/components/header";
import { Hero } from "@/components/hero";
import {
  About,
  Contact,
  Expertise,
  FloatingWhatsApp,
  Gallery,
  Impact,
  SiteFooter,
  StatsStrip,
} from "@/components/sections";
import { PROFILE } from "@/lib/profile";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PROFILE.name,
    jobTitle: "Vice President & General Manager, Sales & Operations",
    worksFor: {
      "@type": "Organization",
      name: PROFILE.company,
    },
    address: {
      "@type": "AdministrativeArea",
      name: "Montréal",
    },
    alumniOf: PROFILE.school,
    telephone: PROFILE.phoneTel,
    image: PROFILE.portrait,
    sameAs: [PROFILE.linkedin],
    knowsLanguage: ["French", "English"],
  };

  return (
    <LanguageProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="grain" aria-hidden="true" />
      <SiteHeader />
      <main>
        <Hero />
        <StatsStrip />
        <About />
        <Impact />
        <Expertise />
        <Gallery />
        <Contact />
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
    </LanguageProvider>
  );
}
