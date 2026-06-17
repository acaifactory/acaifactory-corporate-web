import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import { SectionShell } from "@/components/ui/SectionShell";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contacta a Açaí Factory. Estamos listos para ayudarte.",
};

export default function ContactPage() {
  return (
    <div className="pt-28">
      <SectionShell
        eyebrow="Contacto"
        title="Hablemos"
        subtitle="Clientes, socios, franquiciados e inversionistas — queremos escucharte."
        className="bg-cream"
      >
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            {[
              { icon: Mail, label: "Email", value: siteConfig.contactEmail, href: `mailto:${siteConfig.contactEmail}` },
              { icon: Phone, label: "Teléfono", value: siteConfig.phone },
              { icon: MapPin, label: "HQ", value: "Puerto Rico" },
            ].map((item) => (
              <div key={item.label} className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm">
                <item.icon className="h-6 w-6 text-magenta" />
                <div>
                  <p className="text-sm font-bold uppercase text-soft-ink">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="font-medium text-ink hover:text-magenta">
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-medium text-ink">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          <ContactForm subject="Contacto — Açaí Factory" />
        </div>
      </SectionShell>
    </div>
  );
}
