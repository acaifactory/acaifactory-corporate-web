import type { Metadata } from "next";
import { CommunitySection } from "@/components/sections/CommunitySection";

export const metadata: Metadata = {
  title: "Comunidad",
  description: "Síguenos en redes sociales y forma parte de la comunidad Açaí Factory.",
};

export default function CommunityPage() {
  return (
    <div className="pt-28">
      <CommunitySection />
    </div>
  );
}
