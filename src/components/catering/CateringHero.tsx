"use client";

import { useState, type FormEvent } from "react";
import { cateringAssets } from "@/lib/catering-assets";
import { cateringEventTypes } from "@/lib/catering-form";
import { CateringDateField } from "@/components/catering/CateringDateField";

type FormState = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full rounded-[1.75rem] border-2 border-black/15 bg-white px-[2.575rem] py-[2.375rem] text-[36pt] font-semibold text-ink outline-none transition placeholder:text-soft-ink focus:border-magenta-neon focus:ring-4 focus:ring-magenta-neon/20";
const labelClass = "text-[28pt] font-extrabold uppercase tracking-wide text-ink";

export function CateringHero() {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState("");
  const [eventDate, setEventDate] = useState("");

  function closeModal() {
    setOpen(false);
    setState("idle");
    setError("");
    setEventDate("");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/catering", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { ok?: boolean; error?: string };

      if (!response.ok || !result.ok) {
        throw new Error(result.error ?? "No se pudo enviar la solicitud.");
      }

      form.reset();
      setEventDate("");
      setState("success");
    } catch (submitError) {
      setState("error");
      setError(submitError instanceof Error ? submitError.message : "Error inesperado.");
    }
  }

  return (
    <section aria-label="Catering Açaí Factory" className="relative w-full bg-white">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={cateringAssets.hero}
        alt="Catering Açaí Factory — bowls tropicales para eventos, oficinas y celebraciones"
        className="block h-auto w-full"
        width={cateringAssets.heroWidth}
        height={cateringAssets.heroHeight}
        decoding="async"
        fetchPriority="high"
      />

      <button
        type="button"
        aria-label="Abrir formulario para cotizar catering"
        onClick={() => setOpen(true)}
        className="absolute rounded-[2rem] transition hover:bg-white/10 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-yellow"
        style={{
          left: `${cateringAssets.quoteButton.leftPercent}%`,
          top: `${cateringAssets.quoteButton.topPercent}%`,
          width: `${cateringAssets.quoteButton.widthPercent}%`,
          height: `${cateringAssets.quoteButton.heightPercent}%`,
        }}
      >
        <span className="sr-only">{cateringAssets.quoteButton.label}</span>
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-[250] flex items-start justify-center overflow-y-auto bg-black/70 px-4 py-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="catering-quote-title"
        >
          <div
            className="relative overflow-y-auto rounded-[3.5rem] bg-white p-[3.175rem] shadow-[0_30px_90px_rgba(0,0,0,0.35)] sm:p-[4.625rem]"
            style={{
              width: "min(95vw, 20.6in)",
              minHeight: "min(13in, calc(100vh - 1rem))",
              maxHeight: "calc(100vh - 1rem)",
            }}
          >
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-8 top-8 rounded-full bg-cream px-[2.375rem] py-[1.4rem] text-[39pt] font-extrabold leading-none text-ink transition hover:bg-yellow"
              aria-label="Cerrar formulario"
            >
              ×
            </button>

            {state === "success" ? (
              <div className="px-3 py-14 text-center">
                <h2
                  id="catering-quote-title"
                  className="font-display text-[75pt] font-extrabold uppercase leading-none text-magenta-neon"
                >
                  ¡Solicitud enviada!
                </h2>
                <p className="mt-[2.575rem] text-[39pt] font-semibold leading-tight text-soft-ink">
                  Recibimos tu información. Te contactaremos para coordinar el catering.
                </p>
                <button
                  type="button"
                  onClick={closeModal}
                  className="mt-[3.565rem] rounded-full bg-magenta-neon px-[3.565rem] py-[2.375rem] text-[36pt] font-extrabold uppercase text-white"
                >
                  Cerrar
                </button>
              </div>
            ) : (
              <>
                <div className="pr-12">
                  <p className="font-display text-[31pt] font-extrabold uppercase tracking-[0.18em] text-magenta-neon">
                    Catering Açaí Factory
                  </p>
                  <h2
                    id="catering-quote-title"
                    className="mt-[1.385rem] font-display text-[87pt] font-extrabold uppercase leading-none text-ink"
                  >
                    Cotiza tu evento
                  </h2>
                  <p className="mt-8 text-[36pt] font-semibold leading-snug text-soft-ink">
                    Completa la información y la solicitud llegará a acaifactorypr@gmail.com.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="mt-[3.565rem] grid gap-[2.575rem]" noValidate>
                  <div className="grid gap-[2.575rem]">
                    <label className="grid gap-2">
                      <span className={labelClass}>Cliente o institución</span>
                      <input
                        name="clientName"
                        type="text"
                        required
                        autoComplete="organization"
                        placeholder="Nombre del cliente y/o institución"
                        className={inputClass}
                      />
                    </label>

                    <label className="grid gap-2">
                      <span className={labelClass}>Email de contacto</span>
                      <input
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="correo@ejemplo.com"
                        className={inputClass}
                      />
                    </label>
                  </div>

                  <div className="grid gap-[2.575rem]">
                    <label className="grid gap-2">
                      <span className={labelClass}>Teléfono</span>
                      <input
                        name="phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        placeholder="(787) 000-0000"
                        className={inputClass}
                      />
                    </label>

                    <label className="grid gap-2">
                      <span className={labelClass}>Fecha del evento</span>
                      <CateringDateField
                        value={eventDate}
                        onChange={setEventDate}
                        fieldClass={inputClass}
                        required
                      />
                      <input type="hidden" name="eventDate" value={eventDate} />
                    </label>

                    <label className="grid gap-2">
                      <span className={labelClass}>Horario deseado</span>
                      <input
                        name="desiredSchedule"
                        type="text"
                        required
                        placeholder="Ej. sábado 3:00 PM - 6:00 PM"
                        className={inputClass}
                      />
                    </label>
                  </div>

                  <label className="grid gap-2">
                    <span className={labelClass}>Dirección</span>
                    <input
                      name="address"
                      type="text"
                      required
                      autoComplete="street-address"
                      placeholder="Dirección donde será la actividad"
                      className={inputClass}
                    />
                  </label>

                  <label className="grid gap-2">
                    <span className={labelClass}>Tipo de actividad</span>
                    <select
                      name="eventType"
                      required
                      defaultValue=""
                      className={inputClass}
                    >
                      <option value="" disabled>
                        Selecciona una opción
                      </option>
                      {cateringEventTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="grid gap-2">
                    <span className={labelClass}>Descripción de la necesidad</span>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Cuéntanos qué necesitas para la actividad: cantidad estimada, tipo de servicio, preferencias, detalles especiales..."
                      className={`${inputClass} resize-y`}
                    />
                  </label>

                  <input
                    type="text"
                    name="company"
                    tabIndex={-1}
                    autoComplete="off"
                    className="pointer-events-none absolute -left-[9999px] h-0 w-0 opacity-0"
                    aria-hidden
                  />

                  {state === "error" && error ? (
                    <p className="rounded-[1.75rem] bg-red-50 px-[2.575rem] py-8 text-[33pt] font-bold text-red-700">
                      {error}
                    </p>
                  ) : null}

                  <button
                    type="submit"
                    disabled={state === "submitting"}
                    className="mt-8 rounded-full bg-magenta-neon px-[3.565rem] py-[2.575rem] font-display text-[41pt] font-extrabold uppercase tracking-wide text-white shadow-[0_10px_24px_rgba(226,0,122,0.35)] transition hover:brightness-105 disabled:opacity-70"
                  >
                    {state === "submitting" ? "Enviando..." : "Enviar solicitud"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      ) : null}
    </section>
  );
}
