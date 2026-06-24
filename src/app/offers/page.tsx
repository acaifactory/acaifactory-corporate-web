import type { Metadata } from "next";
import { offersAssets } from "@/lib/offers-assets";
import { getSitePage } from "@/lib/pages";

const page = getSitePage("offers");

export const metadata: Metadata = {
  title: page.title,
  description:
    "Promociones Açaí Factory — Miércoles de Dúo, Viernes de Açaí, Rewards Program y Citizen Special.",
};

export default function OffersPage() {
  return (
    <main className="pt-[calc(var(--site-header-height,7rem)+1.25rem+0.5in)]">
      <section aria-label="Promociones" className="w-full bg-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={offersAssets.hero}
          alt="Promociones Açaí Factory — Miércoles de Dúo, Viernes de Açaí, Rewards Program y Citizen Special"
          className="block h-auto w-full"
          width={4152}
          height={1512}
          decoding="async"
        />
      </section>
    </main>
  );
}
