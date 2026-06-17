import { SectionShell } from "@/components/ui/SectionShell";
import { PromoCard } from "@/components/ui/PromoCard";
import { promotions } from "@/lib/data";

export function PromotionsSection() {
  return (
    <SectionShell
      id="promotions"
      eyebrow="Promociones"
      title="Ofertas que generan deseo"
      subtitle="Promociones diseñadas para convertir curiosidad en visitas, visitas en hábito, y hábito en comunidad."
      className="bg-white"
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {promotions.map((promo) => (
          <PromoCard key={promo.id} promo={promo} />
        ))}
      </div>
    </SectionShell>
  );
}
