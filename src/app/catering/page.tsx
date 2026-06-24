import type { Metadata } from "next";
import { CateringHero } from "@/components/catering/CateringHero";
import { CateringOccasions } from "@/components/catering/CateringOccasions";
import { getSitePage } from "@/lib/pages";

const page = getSitePage("catering");

export const metadata: Metadata = {
  title: page.title,
  description:
    "Catering Açaí Factory — lleva la experiencia tropical a tu evento, oficina o celebración en Puerto Rico.",
};

export default function CateringPage() {
  return (
    <main className="pt-[calc(var(--site-header-height,7rem)+1.25rem+0.5in)]">
      <CateringHero />
      <CateringOccasions />
    </main>
  );
}
