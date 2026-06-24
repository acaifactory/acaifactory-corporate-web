import {
  fileToBase64,
  formatCareersApplicationEmail,
  validateCareersApplication,
  type CareersApplicationPayload,
} from "@/lib/careers-form";

export const runtime = "nodejs";

const DEFAULT_INBOX = "acaifactorypr@gmail.com";

function getInbox() {
  return process.env.CAREERS_INBOX_EMAIL ?? DEFAULT_INBOX;
}

async function sendViaResend(data: CareersApplicationPayload, email: ReturnType<typeof formatCareersApplicationEmail>) {
  const apiKey = process.env.RESEND_API_KEY;
  const inbox = getInbox();
  if (!apiKey || !inbox || !data.resumeBase64) return false;

  const from = process.env.CAREERS_FROM_EMAIL ?? "Açaí Factory Careers <onboarding@resend.dev>";
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [inbox],
      reply_to: data.email,
      subject: email.subject,
      text: email.text,
      html: email.html,
      attachments: [
        {
          filename: data.resumeFileName,
          content: data.resumeBase64,
        },
      ],
    }),
  });

  return response.ok;
}

async function sendViaFormSubmit(data: CareersApplicationPayload, email: ReturnType<typeof formatCareersApplicationEmail>) {
  const inbox = getInbox();
  if (!inbox) return false;

  const formData = new FormData();
  formData.append("_subject", email.subject);
  formData.append("_template", "table");
  formData.append("_captcha", "false");
  formData.append("name", data.fullName);
  formData.append("email", data.email);
  formData.append("phone", data.phone);
  formData.append("availability", data.availability);

  if (data.resumeBase64 && data.resumeFileName) {
    const bytes = Buffer.from(data.resumeBase64, "base64");
    const blob = new Blob([bytes], { type: data.resumeMimeType || "application/octet-stream" });
    formData.append("attachment", blob, data.resumeFileName);
  }

  const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(inbox)}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: formData,
  });

  return response.ok;
}

export async function POST(request: Request) {
  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return Response.json({ error: "Solicitud inválida." }, { status: 400 });
  }

  const resumeEntry = formData.get("resume");
  const resumeFile = resumeEntry instanceof File && resumeEntry.size > 0 ? resumeEntry : null;

  const parsed = validateCareersApplication({
    fullName: String(formData.get("fullName") ?? ""),
    email: String(formData.get("email") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    availability: String(formData.get("availability") ?? ""),
    resumeFile,
    company: String(formData.get("company") ?? ""),
  });

  if (!parsed.ok) {
    return Response.json({ error: parsed.error }, { status: 400 });
  }

  if (parsed.data.company) {
    return Response.json({ ok: true });
  }

  if (resumeFile) {
    parsed.data.resumeBase64 = await fileToBase64(resumeFile);
    parsed.data.resumeMimeType = resumeFile.type || parsed.data.resumeMimeType;
    parsed.data.resumeFileName = resumeFile.name;
  }

  const email = formatCareersApplicationEmail(parsed.data);
  const sent =
    (await sendViaResend(parsed.data, email)) || (await sendViaFormSubmit(parsed.data, email));

  if (!sent) {
    console.error("[careers] Send failed.", {
      hasResend: Boolean(process.env.RESEND_API_KEY),
      inbox: getInbox(),
    });
    return Response.json(
      {
        error:
          "No pudimos enviar tu solicitud en este momento. Escríbenos a acaifactorypr@gmail.com o intenta más tarde.",
      },
      { status: 503 }
    );
  }

  return Response.json({ ok: true });
}
