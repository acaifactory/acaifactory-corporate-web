export const cateringEventTypes = [
  "Boda / Aniversario",
  "Gender Reveal",
  "Evento corporativo",
  "Escuela / Universidad",
  "Evento privado",
  "Cumpleaños / Celebración",
  "Otro",
] as const;

export type CateringEventType = (typeof cateringEventTypes)[number];

export type CateringRequestPayload = {
  clientName: string;
  email: string;
  phone: string;
  eventDate: string;
  address: string;
  desiredSchedule: string;
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

  const clientName = trimString(raw.clientName);
  const email = trimString(raw.email);
  const phone = trimString(raw.phone);
  const eventDate = trimString(raw.eventDate);
  const address = trimString(raw.address);
  const desiredSchedule = trimString(raw.desiredSchedule);
  const eventType = trimString(raw.eventType);
  const message = trimString(raw.message);

  if (!clientName || clientName.length < 2) {
    return { ok: false, error: "Ingresa el nombre del cliente o institución." };
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "Ingresa un email de contacto válido." };
  }
  if (!phone || phone.replace(/\D/g, "").length < 7) {
    return { ok: false, error: "Ingresa un número de teléfono válido." };
  }
  if (!eventDate) {
    return { ok: false, error: "Selecciona la fecha del evento." };
  }
  if (!address || address.length < 5) {
    return { ok: false, error: "Ingresa la dirección del evento." };
  }
  if (!desiredSchedule || desiredSchedule.length < 3) {
    return { ok: false, error: "Ingresa el horario deseado." };
  }
  if (!cateringEventTypes.includes(eventType as CateringEventType)) {
    return { ok: false, error: "Selecciona un tipo de actividad." };
  }
  if (!message || message.length < 10) {
    return { ok: false, error: "Describe la necesidad para la actividad (mínimo 10 caracteres)." };
  }

  return {
    ok: true,
    data: {
      clientName,
      email,
      phone,
      eventDate,
      address,
      desiredSchedule,
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
    clientName: trimString(raw.clientName),
    email: trimString(raw.email),
    phone: trimString(raw.phone),
    eventDate: trimString(raw.eventDate),
    address: trimString(raw.address),
    desiredSchedule: trimString(raw.desiredSchedule),
    eventType: (trimString(raw.eventType) || "Otro") as CateringEventType,
    message: trimString(raw.message),
    company: trimString(raw.company),
  };
}

export function formatCateringRequestEmail(data: CateringRequestPayload) {
  const lines = [
    "Nueva solicitud de catering — Açaí Factory",
    "",
    `Cliente / institución: ${data.clientName}`,
    `Email de contacto: ${data.email}`,
    `Teléfono: ${data.phone}`,
    `Fecha del evento: ${data.eventDate}`,
    `Dirección: ${data.address}`,
    `Horario deseado: ${data.desiredSchedule}`,
    `Tipo de actividad: ${data.eventType}`,
    "",
    "Descripción de la necesidad para la actividad:",
    data.message,
  ];

  return {
    subject: `Solicitud de catering — ${data.clientName}`,
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
