import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { MenuItem } from "@/lib/data";
import { formatPrice } from "@/lib/utils";
import { ProductImage } from "./ProductImage";

function primaryPrice(prices: Record<string, number>) {
  if (prices.LG) return { label: "LG", value: prices.LG };
  if (prices.SM) return { label: "SM", value: prices.SM };
  const key = Object.keys(prices)[0];
  return { label: key, value: prices[key] };
}

export function ProductCard({ item }: { item: MenuItem }) {
  const price = primaryPrice(item.prices);

  return (
    <Link href={`/menu/${item.id}`} className="group block">
      <article className="card-elevated overflow-hidden rounded-3xl bg-white">
        <ProductImage
          name={item.name}
          image={item.image}
          tier={item.tier}
          className="aspect-[4/5] w-full"
        />
        <div className="p-5">
          <div className="mb-2 flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-magenta">
                {item.label}
              </p>
              <h3 className="mt-1 font-display text-xl font-bold text-ink">
                {item.name}
              </h3>
            </div>
            <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-magenta opacity-0 transition-opacity group-hover:opacity-100" />
          </div>
          <p className="line-clamp-2 text-sm text-soft-ink">
            {item.ingredients.slice(0, 5).join(" · ")}
          </p>
          <p className="mt-4 text-lg font-bold text-ink">
            {formatPrice(price.value)}
            <span className="ml-1 text-sm font-medium text-soft-ink">
              {price.label}
            </span>
          </p>
        </div>
      </article>
    </Link>
  );
}
