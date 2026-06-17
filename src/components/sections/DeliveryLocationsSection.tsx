import { MapPin, Truck } from "lucide-react";
import { SectionShell } from "@/components/ui/SectionShell";
import { Button } from "@/components/ui/Button";
import { stores } from "@/lib/data";
import { siteConfig } from "@/lib/site";

export function DeliveryLocationsSection() {
  return (
    <>
      <SectionShell
        id="delivery"
        eyebrow="Delivery"
        title="Llévate la experiencia a donde estés"
        subtitle="Pickup en tienda o delivery a través de nuestros partners. Tú eliges cómo disfrutar."
        className="bg-white"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: "Uber Eats", href: siteConfig.uberEatsUrl, color: "from-green-500/20 to-green-600/5" },
            { title: "DoorDash", href: siteConfig.doorDashUrl, color: "from-red-500/20 to-red-600/5" },
            { title: "Pickup", href: siteConfig.orderingUrl, color: "from-magenta/20 to-purple/5" },
          ].map((partner) => (
            <a
              key={partner.title}
              href={partner.href}
              className={`card-elevated rounded-3xl bg-gradient-to-br p-8 ${partner.color}`}
            >
              <Truck className="h-10 w-10 text-magenta" />
              <h3 className="mt-4 font-display text-2xl font-bold text-ink">{partner.title}</h3>
              <p className="mt-2 text-sm text-soft-ink">Ordena ahora →</p>
            </a>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        id="locations"
        eyebrow="Locations"
        title="Presentes hoy. Listos para crecer mañana."
        subtitle="Tres ubicaciones en Puerto Rico — y una visión nacional e internacional."
        className="bg-cream"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {stores.map((store) => (
            <article key={store.id} className="card-elevated rounded-3xl bg-white p-6">
              <MapPin className="h-6 w-6 text-magenta" />
              <h3 className="mt-4 font-display text-xl font-bold text-ink">{store.name}</h3>
              <p className="mt-2 text-sm text-soft-ink">{store.address}</p>
              <p className="mt-2 text-sm font-medium text-ink">{store.hours}</p>
              <div className="mt-6 flex flex-col gap-2">
                <Button href={`/locations#${store.id}`} variant="ghost" className="w-full">
                  GET DIRECTIONS
                </Button>
                <Button href={siteConfig.orderingUrl} className="w-full">
                  ORDER FROM HERE
                </Button>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button href="/locations" variant="secondary">
            VER TODAS LAS LOCATIONS
          </Button>
        </div>
      </SectionShell>
    </>
  );
}
