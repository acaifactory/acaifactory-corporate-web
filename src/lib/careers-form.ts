export const careersResumeMaxBytes = 5 * 1024 * 1024;

export const careersResumeAllowedTypes = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

export const careersResumeAllowedExtensions = [".pdf", ".doc", ".docx"] as const;

export type CareersApplicationPayload = {
  fullName: string;
  email: string;
  phone: string;
  availability: string;
  resumeFileName: string;
  resumeMimeType: string;
  resumeBase64: string;
  company?: string;
};

export function validateCareersApplication(input: {
  fullName: string;
  email: string;
  phone: string;
  availability: string;
  resumeFile: File | null;
  company?: string;
}):
  | { ok: true; data: CareersApplicationPayload }
  | { ok: false; error: string } {
  if (input.company?.trim()) {
    return {
      ok: true,
      data: {
        fullName: input.fullName.trim(),
        email: input.email.trim(),
        phone: input.phone.trim(),
        availability: input.availability.trim(),
        resumeFileName: "",
        resumeMimeType: "",
        resumeBase64: "",
        company: input.company.trim(),
      },
    };
  }

  const fullName = input.fullName.trim();
  const email = input.email.trim();
  const phone = input.phone.trim();
  const availability = input.availability.trim();
  const resumeFile = input.resumeFile;

  if (!fullName || fullName.length < 2) {
    return { ok: false, error: "Ingresa tu nombre completo." };
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "Ingresa un correo electrónico válido." };
  }
  if (!phone || phone.replace(/\D/g, "").length < 7) {
    return { ok: false, error: "Ingresa un número de teléfono válido." };
  }
  if (!availability || availability.length < 5) {
    return { ok: false, error: "Indica tu disponibilidad (mínimo 5 caracteres)." };
  }
  if (!resumeFile) {
    return { ok: false, error: "Adjunta tu resumé (PDF o Word)." };
  }
  if (resumeFile.size > careersResumeMaxBytes) {
    return { ok: false, error: "El resumé no puede superar 5 MB." };
  }

  const extension = resumeFile.name.toLowerCase().slice(resumeFile.name.lastIndexOf("."));
  const mimeOk =
    careersResumeAllowedTypes.has(resumeFile.type) ||
    careersResumeAllowedExtensions.includes(extension as (typeof careersResumeAllowedExtensions)[number]);

  if (!mimeOk) {
    return { ok: false, error: "Formato no permitido. Usa PDF, DOC o DOCX." };
  }

  return {
    ok: true,
    data: {
      fullName,
      email,
      phone,
      availability,
      resumeFileName: resumeFile.name,
      resumeMimeType: resumeFile.type || "application/octet-stream",
      resumeBase64: "",
    },
  };
}

export async function fileToBase64(file: File) {
  const buffer = Buffer.from(await file.arrayBuffer());
  return buffer.toString("base64");
}

export function formatCareersApplicationEmail(data: CareersApplicationPayload) {
  const lines = [
    "Nueva solicitud de empleo — Açaí Factory",
    "",
    `Nombre: ${data.fullName}`,
    `Correo: ${data.email}`,
    `Teléfono: ${data.phone}`,
    "",
    "Disponibilidad:",
    data.availability,
    "",
    data.resumeFileName ? `Resumé adjunto: ${data.resumeFileName}` : "Sin resumé adjunto.",
  ];

  return {
    subject: `Solicitud de empleo — ${data.fullName}`,
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
