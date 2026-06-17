import type { Metadata } from "next";
import { Building2, PartyPopper, GraduationCap, Users } from "lucide-react";
import { SectionShell } from "@/components/ui/SectionShell";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Catering",
  description: "Catering corporativo, cumpleaños, escuelas y eventos privados con Açaí Factory.",
};

const services = [
  { icon: Building2, title: "Eventos corporativos", text: "Energía premium para tu equipo y clientes." },
  { icon: PartyPopper, title: "Cumpleaños", text: "Celebra con bowls tropicales inolvidables." },
  { icon: GraduationCap, title: "Escuelas", text: "Opciones frescas que los estudiantes aman." },
  { icon: Users, title: "Actividades privadas", text: "Experiencias personalizadas para tu grupo." },
];

export default function CateringPage() {
  return (
    <div className="pt-28">
      <SectionShell
        eyebrow="Catering"
        title="Lleva la experiencia a tu evento"
        subtitle="Servicio profesional para marcas, familias y organizaciones que buscan algo memorable."
        className="bg-cream"
      >
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((s) => (
              <div key={s.title} className="card-elevated rounded-3xl bg-white p-6">
                <s.icon className="h-8 w-8 text-magenta" />
                <h2 className="mt-4 font-display font-bold">{s.title}</h2>
                <p className="mt-2 text-sm text-soft-ink">{s.text}</p>
              </div>
            ))}
          </div>
          <ContactForm subject="Solicitud de Catering — Açaí Factory" />
        </div>
      </SectionShell>
    </div>
  );
}
