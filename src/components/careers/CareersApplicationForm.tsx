"use client";

import { FileText, Mail, Phone, User, X } from "lucide-react";
import { useEffect, useState, type CSSProperties, type FormEvent } from "react";
import { careersAssets } from "@/lib/careers-assets";
import { careersResumeAllowedExtensions } from "@/lib/careers-form";
import "./careers-accessible.css";

const formSpec = careersAssets.applicationForm;

const modalStyle = {
  "--careers-form-width": `${formSpec.widthIn}in`,
  "--careers-form-width-vw": `${formSpec.desktopWidthVw}vw`,
  "--careers-form-height": `${formSpec.heightIn}in`,
  "--careers-form-height-vh": `${formSpec.desktopHeightVh}vh`,
  "--careers-form-font-size": `max(${formSpec.fontPt}pt, ${formSpec.desktopFontVw}vw)`,
  "--careers-field-height": `max(${formSpec.fieldHeightIn}in, ${formSpec.fieldHeightVh}vh)`,
  "--careers-textarea-height": `max(${formSpec.textareaHeightIn}in, ${formSpec.textareaHeightVh}vh)`,
  "--careers-submit-height": `max(${formSpec.submitHeightIn}in, ${formSpec.submitHeightVh}vh)`,
} as CSSProperties;

type FormState = "idle" | "submitting" | "success" | "error";

export function CareersApplicationForm({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && state !== "submitting") onClose();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose, state]);

  if (!open) return null;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setError("");

    const form = event.currentTarget;

    try {
      const response = await fetch("/api/careers", {
        method: "POST",
        body: new FormData(form),
      });
      const result = (await response.json()) as { ok?: boolean; error?: string };

      if (!response.ok || !result.ok) {
        throw new Error(result.error ?? "No se pudo enviar la solicitud.");
      }

      form.reset();
      setState("success");
    } catch (submitError) {
      setState("error");
      setError(submitError instanceof Error ? submitError.message : "Error inesperado.");
    }
  }

  return (
    <div
      className="careers-modal-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget && state !== "submitting") onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="careers-form-title"
        className="careers-modal"
        style={modalStyle}
        data-careers-ui="form-art-anchored"
      >
        <button
          type="button"
          aria-label="Cerrar formulario"
          onClick={onClose}
          disabled={state === "submitting"}
          className="careers-close"
        >
          <X size={18} strokeWidth={2.5} />
        </button>

        <div className="careers-modal-scroll">
          {state === "success" ? (
            <div style={{ textAlign: "center", padding: "1.5rem 0" }}>
              <p className="careers-modal-title font-display">¡Solicitud enviada!</p>
              <p className="careers-modal-help">
                Gracias por tu interés. Revisaremos tu información y te contactaremos pronto.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="careers-label"
                style={{
                  marginTop: "1rem",
                  color: "#ff1493",
                  textDecoration: "underline",
                  background: "none",
                  border: 0,
                  cursor: "pointer",
                }}
              >
                Cerrar
              </button>
            </div>
          ) : (
            <>
              <h2 id="careers-form-title" className="careers-modal-title font-display">
                Aplicar al equipo
              </h2>
              <p className="careers-modal-help">
                Completa tu información básica, disponibilidad y adjunta tu resumé.
              </p>

              <form onSubmit={handleSubmit} className="careers-form">
                <div className="careers-field-wrap">
                  <User className="careers-field-icon" strokeWidth={2.4} aria-hidden />
                  <input
                    name="fullName"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Nombre completo"
                    className="careers-input"
                  />
                </div>

                <div className="careers-field-wrap">
                  <Mail className="careers-field-icon" strokeWidth={2.4} aria-hidden />
                  <input
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="Correo electrónico"
                    className="careers-input"
                  />
                </div>

                <div className="careers-field-wrap">
                  <Phone className="careers-field-icon" strokeWidth={2.4} aria-hidden />
                  <input
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="Número de teléfono"
                    className="careers-input"
                  />
                </div>

                <div className="careers-textarea-wrap">
                  <FileText className="careers-field-icon careers-field-icon-top" strokeWidth={2.4} aria-hidden />
                  <textarea
                    name="availability"
                    required
                    placeholder="Disponibilidad (días, horarios, turnos preferidos)"
                    className="careers-textarea"
                  />
                </div>

                <div>
                  <label className="careers-label" htmlFor="careers-resume">
                    Resumé (PDF, DOC o DOCX — máx. 5 MB)
                  </label>
                  <div className="careers-field-wrap">
                    <input
                      id="careers-resume"
                      name="resume"
                      type="file"
                      required
                      accept={careersResumeAllowedExtensions.join(",")}
                      className="careers-file careers-input"
                    />
                  </div>
                </div>

                <input
                  type="text"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  className="pointer-events-none absolute -left-[9999px] h-0 w-0 opacity-0"
                  aria-hidden
                />

                {state === "error" && error ? <p className="careers-error">{error}</p> : null}

                <button type="submit" disabled={state === "submitting"} className="careers-submit font-display">
                  {state === "submitting" ? "Enviando..." : "Enviar solicitud"}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
