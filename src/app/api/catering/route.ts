import {
  formatCateringRequestEmail,
  validateCateringRequest,
  type CateringRequestPayload,
} from "@/lib/catering-form";

export const runtime = "nodejs";

async function sendViaResend(data: CateringRequestPayload, email: ReturnType<typeof formatCateringRequestEmail>) {
  const apiKey = process.env.RESEND_API_KEY;
  const inbox = process.env.CATERING_INBOX_EMAIL;
  if (!apiKey || !inbox) return false;

  const from = process.env.CATERING_FROM_EMAIL ?? "Açaí Factory Catering <onboarding@resend.dev>";
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
    }),
  });

  return response.ok;
}

async function sendViaFormSubmit(data: CateringRequestPayload, email: ReturnType<typeof formatCateringRequestEmail>) {
  const inbox = process.env.CATERING_INBOX_EMAIL;
  if (!inbox) return false;

  const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(inbox)}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      _subject: email.subject,
      _template: "table",
      _captcha: "false",
      name: data.fullName,
      email: data.email,
      phone: data.phone,
      eventDate: data.eventDate,
      eventType: data.eventType,
      message: data.message,
    }),
  });

  return response.ok;
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Solicitud inválida." }, { status: 400 });
  }

  const parsed = validateCateringRequest(body);
  if (!parsed.ok) {
    return Response.json({ error: parsed.error }, { status: 400 });
  }

  if (parsed.data.company) {
    return Response.json({ ok: true });
  }

  const email = formatCateringRequestEmail(parsed.data);
  const sent =
    (await sendViaResend(parsed.data, email)) || (await sendViaFormSubmit(parsed.data, email));

  if (!sent) {
    console.error("[catering] Send failed.", {
      hasResend: Boolean(process.env.RESEND_API_KEY),
      hasInbox: Boolean(process.env.CATERING_INBOX_EMAIL),
    });
    return Response.json(
      {
        error:
          "No pudimos enviar tu solicitud en este momento. Escríbenos por Contact Us o intenta más tarde.",
      },
      { status: 503 }
    );
  }

  return Response.json({ ok: true });
}
