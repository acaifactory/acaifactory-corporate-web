import type { Metadata } from "next";
import { MenuCategories } from "@/components/menu/MenuCategories";
import { getSitePage } from "@/lib/pages";

const page = getSitePage("menu");

export const metadata: Metadata = {
  title: page.title,
  description:
    "Menú Açaí Factory — Signature Bowls, Baby & Chia, Drinks y Coco & Mango.",
};

export default function MenuPage() {
  return (
    <main className="pt-[calc(var(--site-header-height,7rem)+1.25rem+0.5in)]">
      <MenuCategories />
    </main>
  );
}
