import type { Metadata } from "next";
import { SectionShell } from "@/components/ui/SectionShell";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Support",
  description: "Preguntas frecuentes, soporte de pedidos, rewards, app y contacto general.",
};

const faqs = {
  pedidos: [
    { q: "¿Cómo hago un pedido?", a: "Usa ORDER NOW para ir a nuestra plataforma de pedidos, selecciona tu tienda y arma tu orden." },
    { q: "¿Puedo modificar mi pedido?", a: "Contacta a la tienda lo antes posible. Los cambios dependen del estado de preparación." },
    { q: "¿Cuáles son los métodos de pago?", a: "Consulta la plataforma de pedidos para opciones disponibles en tu location." },
  ],
  rewards: [
    { q: "¿Cómo gano puntos?", a: "Ganas 1 punto por cada $1 gastado cuando usas Factory Rewards en tu compra." },
    { q: "¿Cuántos puntos necesito para un premio?", a: `Necesitas ${siteConfig.rewards.goal} puntos para canjear ${siteConfig.rewards.prize}.` },
    { q: "¿Cómo me registro?", a: "Haz clic en JOIN NOW en la sección Rewards o dentro de la app de pedidos." },
  ],
  app: [
    { q: "¿Dónde descargo la app?", a: "Visita la sección App para enlaces a App Store y Google Play." },
    { q: "¿La app tiene ofertas exclusivas?", a: "Sí, miembros de la app acceden a promociones que no están disponibles en otros canales." },
  ],
  general: [
    { q: "¿Tienen opciones para eventos?", a: "Sí, visita Catering para solicitar servicio corporativo, cumpleaños y más." },
    { q: "¿Ofrecen franquicias?", a: "Sí, estamos expandiendo. Completa el formulario en Franquicias para más información." },
  ],
};

export default function SupportPage() {
  return (
    <div className="pt-28">
      <SectionShell
        eyebrow="Support"
        title="Estamos aquí para ayudarte"
        subtitle="Respuestas claras para pedidos, rewards, app y todo lo demás."
        className="bg-cream"
      >
        <div className="space-y-12">
          {Object.entries(faqs).map(([key, items]) => (
            <div key={key}>
              <h2 className="mb-4 font-display text-xl font-bold capitalize text-ink">
                {key === "general" ? "General" : key}
              </h2>
              <FAQAccordion items={items} />
            </div>
          ))}
        </div>
        <div className="mt-12 rounded-3xl bg-white p-8 text-center shadow-lg">
          <p className="font-display text-xl font-bold">¿Necesitas más ayuda?</p>
          <p className="mt-2 text-soft-ink">Escríbenos y nuestro equipo te responderá pronto.</p>
          <Button href={`mailto:${siteConfig.contactEmail}`} className="mt-6">
            CONTACTAR SOPORTE
          </Button>
        </div>
      </SectionShell>
    </div>
  );
}
