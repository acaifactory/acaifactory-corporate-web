import type { Metadata } from "next";
import { Truck } from "lucide-react";
import { SectionShell } from "@/components/ui/SectionShell";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Delivery",
  description: "Ordena Açaí Factory por Uber Eats, DoorDash o pickup en tienda.",
};

export default function DeliveryPage() {
  return (
    <div className="pt-28">
      <SectionShell
        eyebrow="Delivery"
        title="Tu bowl, a tu manera"
        subtitle="Delivery con nuestros partners o pickup directo en cualquiera de nuestras locations."
        className="bg-cream"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: "Uber Eats", desc: "Delivery rápido a tu puerta.", href: siteConfig.uberEatsUrl },
            { title: "DoorDash", desc: "Tus favoritos, donde estés.", href: siteConfig.doorDashUrl },
            { title: "Pickup", desc: "Ordena y recoge en tienda.", href: siteConfig.orderingUrl },
          ].map((p) => (
            <article key={p.title} className="card-elevated rounded-3xl bg-white p-8">
              <Truck className="h-10 w-10 text-magenta" />
              <h2 className="mt-4 font-display text-2xl font-bold">{p.title}</h2>
              <p className="mt-2 text-soft-ink">{p.desc}</p>
              <Button href={p.href} className="mt-6">
                ORDER NOW
              </Button>
            </article>
          ))}
        </div>
      </SectionShell>
    </div>
  );
}
