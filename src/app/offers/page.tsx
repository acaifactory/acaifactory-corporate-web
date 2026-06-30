import type { Metadata } from "next";
import { offersAssets } from "@/lib/offers-assets";
import { getSitePage } from "@/lib/pages";

const page = getSitePage("offers");

const mobilePromotionPanels = [
  {
    id: "miercoles-duo",
    src: "/marketing/offers/mobile/miercoles-duo.jpg",
    alt: "Promoción Açaí Factory — Miércoles de Dúo",
    width: 2071,
    height: 825,
  },
  {
    id: "viernes-acai",
    src: "/marketing/offers/mobile/viernes-acai.jpg",
    alt: "Promoción Açaí Factory — Viernes de Açaí 15% off",
    width: 2060,
    height: 825,
  },
  {
    id: "rewards-program",
    src: "/marketing/offers/mobile/rewards-program.jpg",
    alt: "Promoción Açaí Factory — Rewards Program",
    width: 2071,
    height: 665,
  },
  {
    id: "citizen-special",
    src: "/marketing/offers/mobile/citizen-special.jpg",
    alt: "Promoción Açaí Factory — Citizen Special 10% off",
    width: 2060,
    height: 665,
  },
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
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={panel.id}
              src={panel.src}
              alt={panel.alt}
              width={panel.width}
              height={panel.height}
              className="h-auto w-full rounded-2xl border border-magenta-neon/15 bg-white shadow-[0_10px_28px_rgba(74,18,136,0.10)]"
              decoding="async"
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
