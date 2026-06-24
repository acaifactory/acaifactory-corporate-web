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
        <div className="bg-cream px-5 py-6 text-center sm:px-8 sm:py-8 lg:px-12 lg:py-10">
          <p className="mx-auto max-w-6xl rounded-[1.5rem] border-2 border-magenta-neon/20 bg-white px-5 py-5 text-base font-bold leading-relaxed text-soft-ink shadow-[0_10px_30px_rgba(74,18,136,0.08)] sm:text-lg lg:rounded-[2rem] lg:px-8 lg:py-7 lg:text-[24px]">
            <span className="font-black uppercase text-magenta-neon">Aviso legal:</span>{" "}
            Los descuentos publicados en esta página web son validados únicamente en tienda.
            No están disponibles para compras, órdenes o redenciones realizadas en nuestra app móvil.
          </p>
        </div>
      </section>
    </main>
  );
}
