import Link from "next/link";
import { SectionShell } from "@/components/ui/SectionShell";
import { ProductCard } from "@/components/ui/ProductCard";
import { Button } from "@/components/ui/Button";
import { getFeaturedItems } from "@/lib/data";

export function MenuPreviewSection() {
  const items = getFeaturedItems(8);

  return (
    <SectionShell
      id="menu"
      eyebrow="Menú"
      title="Bowls que se comen con los ojos"
      subtitle="Signature, premium, tropical y baby bowls — cada creación diseñada para verse real, fresca y premium."
        className="bg-cream mesh-luxury"
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
      <div className="mt-10 text-center">
        <Button href="/menu" variant="primary">
          VER MENÚ COMPLETO
        </Button>
      </div>
    </SectionShell>
  );
}
