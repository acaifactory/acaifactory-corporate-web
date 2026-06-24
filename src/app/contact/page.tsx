import type { Metadata } from "next";
import { ContactHero } from "@/components/contact/ContactHero";
import { getSitePage } from "@/lib/pages";

const page = getSitePage("contact");

export const metadata: Metadata = {
  title: page.title,
  description:
    "Contacta a Açaí Factory por locations, teléfono, WhatsApp, email y redes sociales.",
};

export default function ContactPage() {
  return (
    <main className="pt-[calc(var(--site-header-height,7rem)+1.25rem+0.5in)]">
      <ContactHero />
    </main>
  );
}
