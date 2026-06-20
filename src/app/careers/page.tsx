import type { Metadata } from "next";
import { CareersHero } from "@/components/careers/CareersHero";
import { getSitePage } from "@/lib/pages";

const page = getSitePage("careers");

export const metadata: Metadata = {
  title: page.title,
  description:
    "Empleo en Açaí Factory — únete a nuestro equipo. Buen ambiente, crecimiento y capacitación continua en Puerto Rico.",
};

export default function CareersPage() {
  return (
    <main className="pt-[calc(var(--site-header-height,7rem)+1.25rem+0.5in)]">
      <CareersHero />
    </main>
  );
}
