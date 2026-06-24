import type { Metadata } from "next";
import { offersAssets } from "@/lib/offers-assets";
import { getSitePage } from "@/lib/pages";

const page = getSitePage("offers");

const mobilePromotionPanels = [
  { id: "top-left", label: "Promoción Açaí Factory 1", position: "0% 0%" },
  { id: "top-right", label: "Promoción Açaí Factory 2", position: "100% 0%" },
  { id: "bottom-left", label: "Promoción Açaí Factory 3", position: "0% 100%" },
  { id: "bottom-right", label: "Promoción Açaí Factory 4", position: "100% 100%" },
] as const;

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
          className="hidden h-auto w-full lg:block"
          width={4152}
          height={1512}
          decoding="async"
        />
        <div className="grid gap-4 bg-white px-4 py-4 sm:px-6 lg:hidden">
          {mobilePromotionPanels.map((panel) => (
            <div
              key={panel.id}
              role="img"
              aria-label={panel.label}
              className="w-full overflow-hidden rounded-2xl border border-magenta-neon/15 bg-white bg-no-repeat shadow-[0_10px_28px_rgba(74,18,136,0.10)]"
              style={{
                aspectRatio: "2076 / 756",
                backgroundImage: `url(${offersAssets.hero})`,
                backgroundPosition: panel.position,
                backgroundSize: "200% 200%",
              }}
            />
          ))}
        </div>
        <div className="bg-cream px-5 py-4 text-center sm:px-8 sm:py-5 lg:px-12 lg:py-6">
          <p className="mx-auto max-w-5xl rounded-2xl border border-magenta-neon/15 bg-white/80 px-4 py-3 text-xs font-semibold leading-relaxed text-soft-ink shadow-[0_6px_18px_rgba(74,18,136,0.05)] sm:text-sm lg:max-w-[1600px] lg:px-8 lg:py-6 lg:text-[28pt] lg:leading-snug xl:text-[32pt]">
            <span className="font-black uppercase text-magenta-neon">Aviso legal:</span>{" "}
            Los descuentos publicados en esta página web son validados únicamente en tienda.
            No están disponibles para compras, órdenes o redenciones realizadas en nuestra app móvil.
          </p>
        </div>
      </section>
    </main>
  );
}
