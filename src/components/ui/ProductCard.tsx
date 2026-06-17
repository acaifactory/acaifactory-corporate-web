import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { MenuItem } from "@/lib/data";
import { getProductTheme } from "@/lib/product-themes";
import { formatPrice } from "@/lib/utils";
import { ProductScene } from "./ProductScene";

function primaryPrice(prices: Record<string, number>) {
  if (prices.LG) return { label: "LG", value: prices.LG };
  if (prices.SM) return { label: "SM", value: prices.SM };
  const key = Object.keys(prices)[0];
  return { label: key, value: prices[key] };
}

export function ProductCard({ item }: { item: MenuItem }) {
  const price = primaryPrice(item.prices);
  const theme = getProductTheme(item.id, item.tier);

  return (
    <Link href={`/menu/${item.id}`} className="group block perspective-scene">
      <article className="card-3d overflow-hidden rounded-[1.75rem] bg-white">
        <ProductScene
          productId={item.id}
          name={item.name}
          image={item.image}
          tier={item.tier}
          className="aspect-[4/5] w-full"
          compact
        />
        <div
          className="relative border-t border-white/80 p-5"
          style={{
            background: `linear-gradient(180deg, white 0%, ${theme.primary}08 100%)`,
          }}
        >
          <div className="mb-2 flex items-start justify-between gap-3">
            <div>
              <p className="eyebrow-luxury !text-[0.6rem]">{item.label}</p>
              <h3 className="mt-2 font-luxury text-2xl font-semibold leading-tight text-ink">
                {item.name}
              </h3>
            </div>
            <span
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white opacity-0 shadow-elevated transition-all duration-300 group-hover:opacity-100"
              style={{ background: `linear-gradient(135deg, ${theme.primary}, ${theme.tertiary})` }}
            >
              <ArrowUpRight className="h-5 w-5" />
            </span>
          </div>
          <p className="line-clamp-2 font-display text-sm font-medium text-soft-ink">
            {item.ingredients.slice(0, 5).join(" · ")}
          </p>
          <p className="mt-4 font-display text-xl font-extrabold text-ink">
            {formatPrice(price.value)}
            <span className="ml-2 text-sm font-semibold text-soft-ink">
              {price.label}
            </span>
          </p>
        </div>
      </article>
    </Link>
  );
}
