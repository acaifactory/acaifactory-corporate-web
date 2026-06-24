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
        <div className="bg-cream px-5 py-4 text-center sm:px-8 sm:py-5 lg:px-12 lg:py-6">
          <p className="mx-auto max-w-5xl rounded-2xl border border-magenta-neon/15 bg-white/80 px-4 py-3 text-xs font-semibold leading-relaxed text-soft-ink shadow-[0_6px_18px_rgba(74,18,136,0.05)] sm:text-sm lg:px-6 lg:py-4 lg:text-base">
            <span className="font-black uppercase text-magenta-neon">Aviso legal:</span>{" "}
            Los descuentos publicados en esta página web son validados únicamente en tienda.
            No están disponibles para compras, órdenes o redenciones realizadas en nuestra app móvil.
          </p>
        </div>
      </section>
    </main>
  );
}
