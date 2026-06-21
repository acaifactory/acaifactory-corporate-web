export const cateringEventTypes = [
  "Corporativo / Oficina",
  "Fiesta / Celebración",
  "Escuela / Universidad",
  "Boda / Evento especial",
  "Deportivo",
  "Otro",
] as const;

export type CateringEventType = (typeof cateringEventTypes)[number];

export type CateringRequestPayload = {
  fullName: string;
  email: string;
  phone: string;
  eventDate: string;
  eventType: CateringEventType;
  message: string;
  company?: string;
};

export function validateCateringRequest(body: unknown):
  | { ok: true; data: CateringRequestPayload }
  | { ok: false; error: string } {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Datos inválidos." };
  }

  const raw = body as Record<string, unknown>;

  if (typeof raw.company === "string" && raw.company.trim().length > 0) {
    return { ok: true, data: buildPayload(raw) };
  }

  const fullName = trimString(raw.fullName);
  const email = trimString(raw.email);
  const phone = trimString(raw.phone);
  const eventDate = trimString(raw.eventDate);
  const eventType = trimString(raw.eventType);
  const message = trimString(raw.message);

  if (!fullName || fullName.length < 2) {
    return { ok: false, error: "Ingresa tu nombre completo." };
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "Ingresa un correo electrónico válido." };
  }
  if (!phone || phone.replace(/\D/g, "").length < 7) {
    return { ok: false, error: "Ingresa un número de teléfono válido." };
  }
  if (!eventDate) {
    return { ok: false, error: "Selecciona la fecha del evento." };
  }
  if (!cateringEventTypes.includes(eventType as CateringEventType)) {
    return { ok: false, error: "Selecciona un tipo de evento." };
  }
  if (!message || message.length < 10) {
    return { ok: false, error: "Cuéntanos más sobre tu evento (mínimo 10 caracteres)." };
  }

  return {
    ok: true,
    data: {
      fullName,
      email,
      phone,
      eventDate,
      eventType: eventType as CateringEventType,
      message,
    },
  };
}

function trimString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function buildPayload(raw: Record<string, unknown>): CateringRequestPayload {
  return {
    fullName: trimString(raw.fullName),
    email: trimString(raw.email),
    phone: trimString(raw.phone),
    eventDate: trimString(raw.eventDate),
    eventType: (trimString(raw.eventType) || "Otro") as CateringEventType,
    message: trimString(raw.message),
    company: trimString(raw.company),
  };
}

export function formatCateringRequestEmail(data: CateringRequestPayload) {
  const lines = [
    "Nueva solicitud de catering — Açaí Factory",
    "",
    `Nombre: ${data.fullName}`,
    `Correo: ${data.email}`,
    `Teléfono: ${data.phone}`,
    `Fecha del evento: ${data.eventDate}`,
    `Tipo de evento: ${data.eventType}`,
    "",
    "Detalles:",
    data.message,
  ];

  return {
    subject: `Solicitud de catering — ${data.fullName}`,
    text: lines.join("\n"),
    html: lines.map((line) => `<p>${escapeHtml(line || "&nbsp;")}</p>`).join(""),
  };
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
