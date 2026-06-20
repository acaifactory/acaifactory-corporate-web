"use client";

import {
  Calendar,
  ChevronRight,
  Heart,
  Mail,
  MessageSquare,
  Phone,
  User,
  Users,
} from "lucide-react";
import { useState, type FormEvent, type ReactNode } from "react";
import { cateringAssets } from "@/lib/catering-assets";
import { cateringEventTypes } from "@/lib/catering-form";
import { cn } from "@/lib/utils";
import { CateringDateField } from "@/components/catering/CateringDateField";

type FormState = "idle" | "submitting" | "success" | "error";

const BOX_H = cateringAssets.formSpec.heightIn;
const ONE_INCH = `calc(100% / ${BOX_H})`;
const BTN_H = `calc(100% * 1.1 / ${BOX_H})`;
const GAP = `calc(100% / ${BOX_H} / 10)`;

const iconClass = "h-[clamp(1rem,1.6vw,1.35rem)] w-[clamp(1rem,1.6vw,1.35rem)] sm:h-[clamp(1.1rem,1.75vw,1.5rem)] sm:w-[clamp(1.1rem,1.75vw,1.5rem)]";

const fieldClass =
  "h-full w-full rounded-lg border border-black/12 bg-white px-4 pl-[clamp(2.5rem,4vw,3.25rem)] font-bold text-[clamp(2.6rem,3.8vw,3.6rem)] leading-none text-ink shadow-sm outline-none transition placeholder:font-bold placeholder:text-soft-ink focus:border-magenta-neon focus:ring-2 focus:ring-magenta-neon/20 sm:text-[clamp(2.88rem,4vw,3.8rem)] [&::placeholder]:font-bold";

function FieldRow({
  children,
  icon,
  iconTop,
}: {
  children: ReactNode;
  icon: ReactNode;
  iconTop?: boolean;
}) {
  return (
    <div className="relative h-full min-h-0">
      <span
        className={cn(
          "pointer-events-none absolute left-[clamp(0.65rem,1vw,0.85rem)] text-magenta-neon",
          iconTop ? "top-[clamp(0.65rem,1vw,0.85rem)]" : "top-1/2 -translate-y-1/2"
        )}
      >
        {icon}
      </span>
      {children}
    </div>
  );
}

export function CateringInlineForm() {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState("");
  const [eventDate, setEventDate] = useState("");

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

  if (state === "success") {
    return (
      <div className="flex h-full flex-col items-center justify-center px-2 text-center">
        <p className="font-display text-[clamp(3.6rem,5.2vw,4.2rem)] font-extrabold uppercase leading-none text-magenta-neon">
          ¡Solicitud enviada!
        </p>
        <p className="mt-3 text-[clamp(2.48rem,3.6vw,3.12rem)] font-bold leading-none text-soft-ink">
          Te contactaremos en menos de 24 horas.
        </p>
        <button
          type="button"
          onClick={() => {
            setEventDate("");
            setState("idle");
          }}
          className="mt-4 text-[clamp(2.4rem,3.4vw,3rem)] font-bold leading-none text-magenta-neon underline"
        >
          Enviar otra
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid h-full w-full min-h-0 font-bold [&_input]:font-bold [&_textarea]:font-bold [&_select]:font-bold [&_option]:font-bold [&_button]:font-bold [&::placeholder]:font-bold"
      style={{
        gap: GAP,
        gridTemplateRows: `auto repeat(6, ${ONE_INCH}) ${BTN_H} auto`,
      }}
      noValidate
    >
      <div className="text-center leading-none">
        <h2 className="font-display text-[clamp(2.88rem,4.4vw,3.68rem)] font-extrabold uppercase tracking-wide text-magenta-neon">
          Solicita tu catering
        </h2>
      </div>

      <FieldRow icon={<User className={iconClass} strokeWidth={2.2} />}>
        <input name="fullName" type="text" required autoComplete="name" placeholder="Nombre completo" className={fieldClass} />
      </FieldRow>

      <FieldRow icon={<Mail className={iconClass} strokeWidth={2.2} />}>
        <input name="email" type="email" required autoComplete="email" placeholder="Correo electrónico" className={fieldClass} />
      </FieldRow>

      <FieldRow icon={<Phone className={iconClass} strokeWidth={2.2} />}>
        <input name="phone" type="tel" required autoComplete="tel" placeholder="Número de teléfono" className={fieldClass} />
      </FieldRow>

      <FieldRow icon={<Calendar className={iconClass} strokeWidth={2.2} />}>
        <CateringDateField
          value={eventDate}
          onChange={setEventDate}
          fieldClass={fieldClass}
          required
        />
        <input type="hidden" name="eventDate" value={eventDate} required />
      </FieldRow>

      <FieldRow icon={<Users className={iconClass} strokeWidth={2.2} />}>
        <select
          name="eventType"
          required
          defaultValue=""
          className={cn(fieldClass, "appearance-none invalid:text-soft-ink valid:text-ink")}
        >
          <option value="" disabled className="font-bold">
            Tipo de evento
          </option>
          {cateringEventTypes.map((type) => (
            <option key={type} value={type} className="font-bold text-ink">
              {type}
            </option>
          ))}
        </select>
      </FieldRow>

      <FieldRow icon={<MessageSquare className={iconClass} strokeWidth={2.2} />} iconTop>
        <textarea
          name="message"
          required
          placeholder="Cuéntanos sobre tu evento"
          className={cn(fieldClass, "resize-none pt-[clamp(0.65rem,1vw,0.85rem)] leading-snug")}
        />
      </FieldRow>

      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="pointer-events-none absolute -left-[9999px] h-0 w-0 opacity-0"
        aria-hidden
      />

      {state === "error" && error ? (
        <p className="col-span-full rounded-md bg-red-50 px-3 py-2 text-[clamp(2.2rem,3.12vw,2.88rem)] font-bold leading-none text-red-700">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={state === "submitting"}
        className="font-display flex h-full w-full items-center justify-between rounded-lg bg-magenta-neon px-5 text-[clamp(2.72rem,4.2vw,3.6rem)] font-extrabold uppercase leading-none tracking-wide text-white shadow-[0_6px_18px_rgba(255,20,147,0.38)] transition hover:brightness-105 disabled:opacity-70 sm:text-[clamp(3rem,4.4vw,3.8rem)]"
      >
        <span>{state === "submitting" ? "Enviando..." : "Enviar solicitud"}</span>
        <ChevronRight className="h-[clamp(1rem,1.6vw,1.35rem)] w-[clamp(1rem,1.6vw,1.35rem)] sm:h-[clamp(1.25rem,2vw,1.6rem)] sm:w-[clamp(1.25rem,2vw,1.6rem)]" strokeWidth={3} />
      </button>

      <p className="flex items-center justify-center gap-2 text-[clamp(1.92rem,2.72vw,2.48rem)] font-bold leading-none text-soft-ink">
        <Heart className="h-[clamp(0.75rem,1.2vw,1rem)] w-[clamp(0.75rem,1.2vw,1rem)] fill-magenta-neon text-magenta-neon sm:h-[clamp(0.9rem,1.4vw,1.15rem)] sm:w-[clamp(0.9rem,1.4vw,1.15rem)]" aria-hidden />
        Te contactaremos en menos de 24 horas.
      </p>
    </form>
  );
}
