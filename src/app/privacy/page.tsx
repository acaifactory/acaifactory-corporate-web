import type { Metadata } from "next";
import { SectionShell } from "@/components/ui/SectionShell";

export const metadata: Metadata = {
  title: "Privacidad",
};

export default function PrivacyPage() {
  return (
    <div className="pt-28">
      <SectionShell title="Política de Privacidad" className="bg-white">
        <div className="prose prose-neutral max-w-3xl text-soft-ink">
          <p>
            Açaí Factory respeta tu privacidad. Esta política describe cómo recopilamos,
            usamos y protegemos tu información cuando visitas nuestro sitio web corporativo.
          </p>
          <p>
            La información que proporcionas a través de formularios de contacto, catering o
            franquicias se utiliza únicamente para responder a tu solicitud.
          </p>
          <p>
            Para preguntas sobre privacidad, contáctanos en acaifactorypr@gmail.com.
          </p>
          <p className="text-sm italic">Última actualización: junio 2026. Contenido provisional — se actualizará con asesoría legal.</p>
        </div>
      </SectionShell>
    </div>
  );
}
