import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { ProductImage } from "@/components/ui/ProductImage";
import { SectionShell } from "@/components/ui/SectionShell";
import { addOns, getMenuItem, menuItems } from "@/lib/data";
import { orderingLink } from "@/lib/site";
import { formatPrice } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return menuItems.map((item) => ({ slug: item.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getMenuItem(slug);
  if (!item) return { title: "Producto" };
  return {
    title: item.name,
    description: `${item.name} — ${item.ingredients.join(", ")}`,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const item = getMenuItem(slug);
  if (!item) notFound();

  return (
    <div className="pt-28">
      <SectionShell className="bg-cream">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <ProductImage
            name={item.name}
            image={item.image}
            tier={item.tier}
            className="aspect-square w-full rounded-[2rem]"
            priority
          />
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-magenta">
              {item.category} · {item.label}
            </p>
            <h1 className="mt-3 font-display text-4xl font-black text-ink md:text-5xl">
              {item.name}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-soft-ink">
              Una creación premium pensada para verse tan bien como sabe. Ingredientes
              seleccionados, energía tropical y la calidad que define a Açaí Factory.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {Object.entries(item.prices).map(([size, price]) => (
                <div
                  key={size}
                  className="rounded-2xl bg-white px-5 py-4 shadow-sm"
                >
                  <p className="text-xs font-bold uppercase text-soft-ink">{size}</p>
                  <p className="text-2xl font-black text-ink">{formatPrice(price)}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h2 className="font-display text-lg font-bold text-ink">Ingredientes</h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {item.ingredients.map((ing) => (
                  <li
                    key={ing}
                    className="rounded-full bg-white px-4 py-2 text-sm text-soft-ink shadow-sm"
                  >
                    {ing}
                  </li>
                ))}
              </ul>
            </div>

            {addOns.length > 0 && (
              <div className="mt-8">
                <h2 className="font-display text-lg font-bold text-ink">Extras</h2>
                <ul className="mt-3 space-y-2">
                  {addOns.map((addon) => (
                    <li
                      key={addon.name}
                      className="flex justify-between rounded-xl bg-white px-4 py-3 text-sm"
                    >
                      <span>{addon.name}</span>
                      <span className="font-bold">{formatPrice(addon.price)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href={orderingLink(item.id)}>ADD TO BAG</Button>
              <Button variant="secondary" href="/menu">
                BACK TO MENU
              </Button>
            </div>
          </div>
        </div>
      </SectionShell>
    </div>
  );
}
