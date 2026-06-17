import type { Metadata } from "next";
import MenuPageClient from "@/components/menu/MenuPageClient";

export const metadata: Metadata = {
  title: "Menú",
  description:
    "Signature Bowls, Premium Bowls, Coco & Mango, smoothies, frappés y más. El menú completo de Açaí Factory — ordena tu experiencia tropical.",
  alternates: { canonical: "/menu" },
};

export default function MenuPage() {
  return <MenuPageClient />;
}
