import type { Metadata } from "next";
import { SectionShell } from "@/components/ui/SectionShell";
import { PromoCard } from "@/components/ui/PromoCard";
import { promotions } from "@/lib/data";

export const metadata: Metadata = {
  title: "Promociones",
  description: "Ofertas exclusivas, Açaí of the Month, Tuesday Specials y más en Açaí Factory.",
};

export default function PromotionsPage() {
  return (
    <div className="pt-28">
      <SectionShell
        eyebrow="Promociones"
        title="Ofertas que convierten"
        subtitle="Diseñadas con mentalidad de las mejores cadenas del mundo — claras, emocionales y accionables."
        className="bg-cream"
      >
        <div className="grid gap-6 md:grid-cols-2">
          {promotions.map((promo) => (
            <PromoCard key={promo.id} promo={promo} />
          ))}
        </div>
      </SectionShell>
    </div>
  );
}
