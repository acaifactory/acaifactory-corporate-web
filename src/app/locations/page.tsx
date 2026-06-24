import type { Metadata } from "next";
import { LocationsHero } from "@/components/locations/LocationsHero";
import { getSitePage } from "@/lib/pages";

const page = getSitePage("locations");

export const metadata: Metadata = {
  title: page.title,
  description:
    "Ubicaciones Açaí Factory — Bayamón, Cataño y Corozal. Encuentra tu próximo bowl favorito en Puerto Rico.",
};

export default function LocationsPage() {
  return (
    <main className="pt-[calc(var(--site-header-height,7rem)+1.25rem+0.5in)]">
      <LocationsHero />
    </main>
  );
}
