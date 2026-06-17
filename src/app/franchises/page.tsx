import type { Metadata } from "next";
import { TrendingUp, Handshake, Globe, Rocket } from "lucide-react";
import { SectionShell } from "@/components/ui/SectionShell";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Franquicias",
  description: "Únete a Açaí Factory. Oportunidad de franquicia con una marca premium en expansión.",
};

const steps = [
  "Solicitud de interés",
  "Evaluación inicial",
  "Presentación del modelo",
  "Acuerdo y capacitación",
  "Apertura y soporte continuo",
];

const benefits = [
  { icon: TrendingUp, title: "Marca en crecimiento", text: "Un concepto probado con visión nacional e internacional." },
  { icon: Handshake, title: "Soporte integral", text: "Operaciones, marketing y entrenamiento desde el día uno." },
  { icon: Globe, title: "Escalabilidad", text: "Modelo diseñado para múltiples locations." },
  { icon: Rocket, title: "Diferenciación premium", text: "Producto, experiencia y branding que destacan en el mercado." },
];

export default function FranchisesPage() {
  return (
    <div className="pt-28">
      <SectionShell
        eyebrow="Franquicias"
        title="Construye con una marca que piensa en grande"
        subtitle="Para emprendedores e inversionistas que quieren formar parte de algo con futuro enorme."
        className="bg-gradient-to-br from-magenta/5 via-cream to-purple/10"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div key={b.title} className="card-elevated rounded-3xl bg-white p-6">
              <b.icon className="h-8 w-8 text-magenta" />
              <h2 className="mt-4 font-display font-bold">{b.title}</h2>
              <p className="mt-2 text-sm text-soft-ink">{b.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-white p-8 shadow-lg">
          <h2 className="font-display text-2xl font-bold">Proceso</h2>
          <ol className="mt-6 grid gap-4 md:grid-cols-5">
            {steps.map((step, i) => (
              <li key={step} className="rounded-2xl bg-cream p-4 text-center">
                <span className="text-2xl font-black text-magenta">{i + 1}</span>
                <p className="mt-2 text-sm font-medium">{step}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-12">
          <h2 className="mb-6 font-display text-2xl font-bold">Formulario de interés</h2>
          <ContactForm subject="Interés en Franquicia — Açaí Factory" />
        </div>
      </SectionShell>
    </div>
  );
}
