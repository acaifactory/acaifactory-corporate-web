import type { Metadata } from "next";
import { SectionShell } from "@/components/ui/SectionShell";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Soporte",
  description: "Preguntas frecuentes, soporte de pedidos, rewards, app y contacto general.",
  alternates: { canonical: "/support" },
};

const faqLabels: Record<string, string> = {
  pedidos: "Pedidos",
  rewards: "Factory Rewards",
  app: "App",
  general: "General",
};

const faqs: Record<string, { q: string; a: string }[]> = {
  pedidos: [
    { q: "¿Cómo hago un pedido?", a: "Toca ORDER NOW, elige tu tienda y arma tu bowl perfecto en segundos." },
    { q: "¿Puedo modificar mi pedido?", a: "Contacta la tienda de inmediato. Los cambios dependen del estado de preparación." },
    { q: "¿Cuáles son los métodos de pago?", a: "Consulta la plataforma de pedidos para las opciones en tu ubicación." },
  ],
  rewards: [
    { q: "¿Cómo gano puntos?", a: "Ganas 1 punto por cada $1 gastado con Factory Rewards activo." },
    { q: "¿Cuántos puntos para un premio?", a: `${siteConfig.rewards.goal} puntos = ${siteConfig.rewards.prize}.` },
    { q: "¿Cómo me registro?", a: "JOIN NOW en Rewards o dentro de la app de pedidos." },
  ],
  app: [
    { q: "¿Dónde descargo la app?", a: "Visita la sección App para App Store y Google Play." },
    { q: "¿Ofertas exclusivas en la app?", a: "Sí — promociones y sorpresas solo para usuarios de la app." },
  ],
  general: [
    { q: "¿Catering para eventos?", a: "Sí — corporativo, cumpleaños, escuelas. Visita Catering." },
    { q: "¿Franquicias disponibles?", a: "Estamos en expansión. Completa el formulario en Franquicias." },
  ],
};

export default function SupportPage() {
  return (
    <div className="pt-24 md:pt-28">
      <SectionShell
        eyebrow="Soporte"
        title="Estamos aquí para ti"
        subtitle="Respuestas rápidas para pedidos, rewards, app y más."
        className="mesh-luxury"
      >
        <div className="space-y-12">
          {Object.entries(faqs).map(([key, items]) => (
            <div key={key}>
              <h2 className="heading-luxury mb-4 text-2xl text-ink">
                {faqLabels[key] ?? key}
              </h2>
              <FAQAccordion items={items} />
            </div>
          ))}
        </div>
        <div className="card-3d mt-12 rounded-3xl bg-white p-8 text-center">
          <p className="heading-luxury text-2xl text-ink">¿Necesitas más ayuda?</p>
          <p className="mt-2 font-display text-soft-ink">Nuestro equipo responde pronto.</p>
          <Button href={`mailto:${siteConfig.contactEmail}`} className="mt-6">
            CONTACTAR SOPORTE
          </Button>
        </div>
      </SectionShell>
    </div>
  );
}
