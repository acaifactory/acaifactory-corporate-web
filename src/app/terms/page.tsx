import type { Metadata } from "next";
import { SectionShell } from "@/components/ui/SectionShell";

export const metadata: Metadata = {
  title: "Términos",
};

export default function TermsPage() {
  return (
    <div className="pt-28">
      <SectionShell title="Términos y Condiciones" className="bg-white">
        <div className="prose prose-neutral max-w-3xl text-soft-ink">
          <p>
            Al usar el sitio web de Açaí Factory, aceptas estos términos. El contenido,
            marcas y materiales son propiedad de Açaí Factory.
          </p>
          <p>
            Los precios, promociones y disponibilidad de productos pueden variar por
            location y están sujetos a cambio sin previo aviso.
          </p>
          <p>
            Las órdenes se procesan a través de nuestra plataforma de pedidos independiente,
            sujeta a sus propios términos.
          </p>
          <p className="text-sm italic">Última actualización: junio 2026. Contenido provisional — se actualizará con asesoría legal.</p>
        </div>
      </SectionShell>
    </div>
  );
}
