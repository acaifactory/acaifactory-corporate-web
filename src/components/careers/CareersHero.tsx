"use client";

import { useState } from "react";
import { CareersApplicationForm } from "@/components/careers/CareersApplicationForm";
import { careersAssets } from "@/lib/careers-assets";
import "./careers-accessible.css";

const slot = careersAssets.applyButtonSlot;
const btn = careersAssets.applyButton;

export function CareersHero() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      <section aria-label="Empleo Açaí Factory" className="relative w-full bg-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={careersAssets.hero}
          alt="Empleo Açaí Factory — sé parte de algo que nutre, crece y transforma. Únete a nuestro equipo."
          className="block h-auto w-full"
          width={careersAssets.heroWidth}
          height={careersAssets.heroHeight}
          decoding="async"
          fetchPriority="high"
        />

        <div
          className="absolute z-20 hidden box-border lg:block"
          style={{
            top: slot.top,
            right: slot.right,
            width: `${slot.widthPercent}%`,
            height: `${slot.heightPercent}%`,
          }}
          data-careers-ui="apply-art-anchored"
        >
          <button
            type="button"
            onClick={() => setFormOpen(true)}
            aria-haspopup="dialog"
            className="careers-apply-btn font-display"
            style={{ fontSize: `max(${btn.fontPt}pt, ${btn.desktopFontVw}vw)` }}
          >
            Aplicar ahora
          </button>
        </div>
      </section>

      <div className="bg-cream px-4 py-6 lg:hidden">
        <button
          type="button"
          onClick={() => setFormOpen(true)}
          aria-haspopup="dialog"
          className="flex min-h-16 w-full items-center justify-center rounded-full bg-magenta-neon px-6 py-4 text-center font-display text-xl font-black uppercase leading-tight text-white shadow-[0_10px_28px_rgba(226,0,122,0.28)]"
        >
          Aplicar ahora
        </button>
      </div>

      {formOpen ? (
        <CareersApplicationForm open onClose={() => setFormOpen(false)} />
      ) : null}
    </>
  );
}
