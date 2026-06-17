import type { Metadata } from "next";
import { AppSection } from "@/components/sections/AppSection";

export const metadata: Metadata = {
  title: "App",
  description: "Descarga la app de Açaí Factory. Ordena rápido, acumula puntos y recibe promociones exclusivas.",
};

export default function AppPage() {
  return (
    <div className="pt-28">
      <AppSection />
    </div>
  );
}
