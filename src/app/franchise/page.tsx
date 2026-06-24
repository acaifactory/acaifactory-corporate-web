import type { Metadata } from "next";
import { FranchiseHero } from "@/components/franchise/FranchiseHero";
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
      <FranchiseHero />
    </main>
  );
}
