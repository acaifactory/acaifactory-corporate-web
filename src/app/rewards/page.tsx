import type { Metadata } from "next";
import { rewardsAssets } from "@/lib/rewards-assets";
import { getSitePage } from "@/lib/pages";

const page = getSitePage("rewards");

export const metadata: Metadata = {
  title: page.title,
  description:
    "Açaí Factory Rewards — acumula puntos, gana bowls gratis y disfruta beneficios exclusivos.",
};

export default function RewardsPage() {
  return (
    <main className="pt-[calc(var(--site-header-height,7rem)+1.25rem+0.5in)]">
      <section aria-label="Rewards" className="w-full bg-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={rewardsAssets.hero}
          alt="Açaí Factory Rewards — programa de puntos y beneficios"
          className="block h-auto w-full"
          width={3072}
          height={2048}
          decoding="async"
        />
      </section>
    </main>
  );
}
