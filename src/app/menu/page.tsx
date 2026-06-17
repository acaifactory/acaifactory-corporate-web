import type { Metadata } from "next";
import { SectionShell } from "@/components/ui/SectionShell";
import { ProductCard } from "@/components/ui/ProductCard";
import { menuCategories, getItemsByCategory } from "@/lib/data";

export const metadata: Metadata = {
  title: "Menú",
  description:
    "Explora Signature Bowls, Premium Bowls, smoothies, frappés y más. El menú completo de Açaí Factory.",
};

export default function MenuPage() {
  return (
    <div className="pt-28">
      <SectionShell
        eyebrow="Menú completo"
        title="Cada categoría, una experiencia"
        subtitle="Navega por nuestro menú premium — bowls protagonistas, ingredientes frescos y precios transparentes."
        className="bg-cream"
      >
        <div className="space-y-16">
          {menuCategories.map((category) => {
            const items = getItemsByCategory(category);
            if (!items.length) return null;
            return (
              <div key={category} id={category.toLowerCase().replace(/\s+/g, "-")}>
                <h2 className="mb-6 font-display text-2xl font-extrabold text-ink md:text-3xl">
                  {category}
                </h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {items.map((item) => (
                    <ProductCard key={item.id} item={item} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </SectionShell>
    </div>
  );
}
