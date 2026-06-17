import type { Metadata } from "next";
import { MapPin, Phone, Clock } from "lucide-react";
import { SectionShell } from "@/components/ui/SectionShell";
import { Button } from "@/components/ui/Button";
import { stores } from "@/lib/data";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Locations",
  description: "Encuentra Açaí Factory en Bayamón, Corozal y Cataño. Horarios, direcciones y ordena desde tu tienda más cercana.",
};

export default function LocationsPage() {
  return (
    <div className="pt-28">
      <SectionShell
        eyebrow="Locations"
        title="Cerca de ti. Listos para crecer."
        subtitle="Tres locations en Puerto Rico con la infraestructura visual y operativa de una cadena nacional."
        className="bg-cream"
      >
        <div className="mb-12 overflow-hidden rounded-3xl bg-white shadow-lg">
          <iframe
            title="Mapa Açaí Factory Puerto Rico"
            src="https://maps.google.com/maps?q=Puerto+Rico&t=&z=9&ie=UTF8&iwloc=&output=embed"
            className="h-80 w-full border-0 md:h-96"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {stores.map((store) => (
            <article
              key={store.id}
              id={store.id}
              className="card-elevated scroll-mt-32 rounded-3xl bg-white p-6"
            >
              <h2 className="font-display text-xl font-bold text-ink">{store.name}</h2>
              <ul className="mt-4 space-y-3 text-sm text-soft-ink">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-magenta" />
                  {store.address}
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-magenta" />
                  {store.phone}
                </li>
                <li className="flex gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-magenta" />
                  {store.hours}
                </li>
              </ul>
              <div className="mt-6 flex flex-col gap-2">
                <Button
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(store.mapQuery)}`}
                  variant="ghost"
                  external
                >
                  GET DIRECTIONS
                </Button>
                <Button href={siteConfig.orderingUrl}>ORDER FROM HERE</Button>
              </div>
            </article>
          ))}
        </div>
      </SectionShell>
    </div>
  );
}
