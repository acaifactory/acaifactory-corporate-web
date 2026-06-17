import type { Metadata } from "next";
import { SectionShell } from "@/components/ui/SectionShell";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Carreras",
  description: "Únete al equipo de Açaí Factory. Oportunidades de carrera en una marca en expansión.",
};

export default function CareersPage() {
  return (
    <div className="pt-28">
      <SectionShell
        eyebrow="Carreras"
        title="Crece con una marca que piensa en grande"
        subtitle="Buscamos talento apasionado por experiencias premium, servicio excepcional y energía tropical."
        className="bg-cream"
        centered
      >
        <div className="mx-auto max-w-2xl rounded-3xl bg-white p-10 text-center shadow-lg">
          <p className="text-lg text-soft-ink">
            Estamos construyendo el equipo de una cadena nacional. Envía tu CV y cuéntanos
            por qué quieres formar parte de Açaí Factory.
          </p>
          <Button
            href={`mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent("Carreras — Açaí Factory")}`}
            className="mt-8"
          >
            ENVIAR CV
          </Button>
        </div>
      </SectionShell>
    </div>
  );
}
