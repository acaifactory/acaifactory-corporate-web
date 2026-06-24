import type { Metadata } from "next";
import { DeliveryHero } from "@/components/delivery/DeliveryHero";
import { getSitePage } from "@/lib/pages";

const page = getSitePage("delivery");

export const metadata: Metadata = {
  title: page.title,
  description:
    "Açaí Factory Delivery — ordena tu bowl favorito por Uber Eats o DoorDash sin salir de casa.",
};

export default function DeliveryPage() {
  return (
    <main className="pt-[calc(var(--site-header-height,7rem)+1.25rem+0.5in)]">
      <DeliveryHero />
    </main>
  );
}
