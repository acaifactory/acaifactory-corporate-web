"use client";

import { useState } from "react";
import { SectionShell } from "@/components/ui/SectionShell";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

export function ContactForm({ subject }: { subject: string }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const body = Array.from(form.entries())
      .map(([k, v]) => `${k}: ${v}`)
      .join("\n");
    window.location.href = `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-3xl bg-magenta/10 p-8 text-center">
        <p className="font-display text-xl font-bold text-ink">¡Gracias!</p>
        <p className="mt-2 text-soft-ink">Tu cliente de correo se abrirá para enviar la solicitud.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-3xl bg-white p-6 shadow-lg md:p-8">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="block text-sm font-medium">
          Nombre
          <input name="nombre" required className="mt-1 w-full rounded-xl border border-magenta/15 px-4 py-3" />
        </label>
        <label className="block text-sm font-medium">
          Email
          <input name="email" type="email" required className="mt-1 w-full rounded-xl border border-magenta/15 px-4 py-3" />
        </label>
        <label className="block text-sm font-medium">
          Teléfono
          <input name="telefono" className="mt-1 w-full rounded-xl border border-magenta/15 px-4 py-3" />
        </label>
        <label className="block text-sm font-medium">
          Ciudad
          <input name="ciudad" className="mt-1 w-full rounded-xl border border-magenta/15 px-4 py-3" />
        </label>
      </div>
      <label className="block text-sm font-medium">
        Mensaje
        <textarea name="mensaje" rows={5} required className="mt-1 w-full rounded-xl border border-magenta/15 px-4 py-3" />
      </label>
      <Button type="submit" className="w-full md:w-auto">
        ENVIAR SOLICITUD
      </Button>
    </form>
  );
}
