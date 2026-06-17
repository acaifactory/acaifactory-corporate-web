import type { Metadata } from "next";
import { SectionShell } from "@/components/ui/SectionShell";
import { Button } from "@/components/ui/Button";
import { siteConfig, orderingLink, isExternalUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Delivery",
  description: "Ordena Açaí Factory por Uber Eats, DoorDash o pickup en tienda.",
  alternates: { canonical: "/delivery" },
};

const partners = [
  {
    name: "Uber Eats",
    desc: "Delivery rápido. Tus bowls favoritos, donde estés.",
    href: siteConfig.uberEatsUrl,
    gradient: "from-[#06c167]/20 via-white to-[#06c167]/5",
    accent: "#06c167",
    initial: "UE",
  },
  {
    name: "DoorDash",
    desc: "Antojo resuelto. Llegamos con frescura y sabor.",
    href: siteConfig.doorDashUrl,
    gradient: "from-[#ff3008]/15 via-white to-[#ff3008]/5",
    accent: "#ff3008",
    initial: "DD",
  },
  {
    name: "Pickup",
    desc: "Ordena online y recoge en tu tienda más cercana.",
    href: orderingLink(),
    gradient: "from-magenta/20 via-yellow/10 to-purple/10",
    accent: "#ec008c",
    initial: "AF",
    external: isExternalUrl(siteConfig.orderingUrl),
  },
];

export default function DeliveryPage() {
  return (
    <div className="pt-24 md:pt-28">
      <SectionShell
        eyebrow="Delivery"
        title="Tu experiencia tropical, a domicilio o en tienda"
        subtitle="Elige cómo quieres disfrutar Açaí Factory — con nuestros partners de delivery o pickup directo."
        className="mesh-luxury"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {partners.map((p) => (
            <article
              key={p.name}
              className={`card-3d rounded-[1.75rem] bg-gradient-to-br p-8 ${p.gradient}`}
            >
              <div
                className="flex h-16 w-16 items-center justify-center rounded-2xl text-xl font-black text-white shadow-elevated"
                style={{ background: p.accent }}
              >
                {p.initial}
              </div>
              <h2 className="heading-luxury mt-5 text-2xl text-ink">{p.name}</h2>
              <p className="mt-2 font-display font-medium text-soft-ink">{p.desc}</p>
              <Button
                href={p.href}
                external={"external" in p ? p.external : isExternalUrl(p.href)}
                className="mt-6"
              >
                ORDER NOW
              </Button>
            </article>
          ))}
        </div>
      </SectionShell>
    </div>
  );
}
