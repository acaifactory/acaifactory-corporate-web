"use client";

import { CateringInlineForm } from "@/components/catering/CateringInlineForm";
import { cateringAssets } from "@/lib/catering-assets";

export function CateringHero() {
  const slot = cateringAssets.formSlot;

  return (
    <section aria-label="Catering Açaí Factory" className="relative w-full bg-white">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={cateringAssets.hero}
        alt="Catering Açaí Factory — bowls tropicales para eventos, oficinas y celebraciones"
        className="block h-auto w-full"
        width={cateringAssets.heroWidth}
        height={cateringAssets.heroHeight}
        decoding="async"
        fetchPriority="high"
      />

      <div
        className="absolute box-border overflow-hidden px-[2%] py-[1.2%]"
        style={{
          top: slot.top,
          right: slot.right,
          width: slot.width,
          height: slot.height,
        }}
        aria-label="Formulario de solicitud de catering"
      >
        <CateringInlineForm />
      </div>
    </section>
  );
}
