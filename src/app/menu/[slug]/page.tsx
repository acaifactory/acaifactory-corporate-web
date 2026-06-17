import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { ProductScene } from "@/components/ui/ProductScene";
import { SectionShell } from "@/components/ui/SectionShell";
import { addOns, getMenuItem, menuItems } from "@/lib/data";
import { getProductTheme } from "@/lib/product-themes";
import { getProductCopy } from "@/lib/product-copy";
import { orderingLink, isExternalUrl, siteConfig } from "@/lib/site";
import { formatPrice } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return menuItems.map((item) => ({ slug: item.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getMenuItem(slug);
  if (!item) return { title: "Producto" };
  const copy = getProductCopy(item.id, item.name);
  return {
    title: item.name,
    description: copy.description,
    alternates: { canonical: `/menu/${item.id}` },
    openGraph: {
      images: item.image ? [{ url: item.image }] : undefined,
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const item = getMenuItem(slug);
  if (!item) notFound();
  const theme = getProductTheme(item.id, item.tier);
  const copy = getProductCopy(item.id, item.name);

  return (
    <div className="pt-24 md:pt-28">
      <SectionShell
        className="mesh-luxury"
        eyebrow={theme.scene}
        title={item.name}
      >
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="shadow-floating overflow-hidden rounded-[2rem]">
            <ProductScene
              productId={item.id}
              name={item.name}
              image={item.image}
              tier={item.tier}
              className="aspect-square w-full"
              priority
            />
          </div>
          <div>
            <p className="eyebrow-luxury">{item.category} · {item.label}</p>
            <p className="mt-5 font-display text-lg font-medium leading-relaxed text-soft-ink">
              {copy.description}
            </p>
            {copy.note && (
              <p className="mt-3 rounded-xl bg-gradient-to-r from-magenta/10 to-yellow/10 px-4 py-3 font-display text-sm font-semibold text-magenta">
                {copy.note}
              </p>
            )}

            <div className="mt-6 flex flex-wrap gap-2">
              {[theme.primary, theme.secondary, theme.tertiary].map((color) => (
                <span
                  key={color}
                  className="h-9 w-9 rounded-full shadow-contact ring-2 ring-white"
                  style={{ background: color }}
                />
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {Object.entries(item.prices).map(([size, price]) => (
                <div
                  key={size}
                  className="rounded-2xl px-5 py-4 shadow-elevated"
                  style={{ background: `linear-gradient(135deg, white, ${theme.primary}12)` }}
                >
                  <p className="text-xs font-bold uppercase text-soft-ink">{size}</p>
                  <p className="font-luxury text-3xl font-bold text-ink">
                    {formatPrice(price)}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h2 className="font-display text-lg font-bold text-ink">Ingredientes</h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {item.ingredients.map((ing) => (
                  <li
                    key={ing}
                    className="rounded-full px-4 py-2 text-sm font-medium text-ink shadow-contact"
                    style={{
                      background: `linear-gradient(135deg, ${theme.secondary}22, ${theme.tertiary}18)`,
                    }}
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
                      className="flex justify-between rounded-xl bg-white/80 px-4 py-3 text-sm shadow-contact"
                    >
                      <span>{addon.name}</span>
                      <span className="font-bold text-magenta">{formatPrice(addon.price)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button
                href={orderingLink(item.id)}
                external={isExternalUrl(siteConfig.orderingUrl)}
              >
                ADD TO BAG
              </Button>
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
