import type { Metadata } from "next";
import { franchiseAssets } from "@/lib/franchise-assets";
import { getSitePage } from "@/lib/pages";

const page = getSitePage("franchise");

export const metadata: Metadata = {
  title: page.title,
  description:
    "Franquicias Açaí Factory — únete a la marca líder en bowls de açaí en Puerto Rico. Inversión desde $50,000.",
};

export default function FranchisePage() {
  return (
    <main className="pt-[calc(var(--site-header-height,7rem)+1.25rem+0.5in)]">
      <section aria-label="Franquicias Açaí Factory" className="w-full bg-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={franchiseAssets.hero}
          alt="Franquicias Açaí Factory — tu pasión, nuestro modelo, tu futuro. Invierte en la marca líder de açaí en Puerto Rico."
          className="block h-auto w-full"
          width={franchiseAssets.heroWidth}
          height={franchiseAssets.heroHeight}
          decoding="async"
          fetchPriority="high"
        />
      </section>
    </main>
  );
}
