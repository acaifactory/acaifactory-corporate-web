import Link from "next/link";
import type { Promotion } from "@/lib/data";
import { cn } from "@/lib/utils";

const accents = {
  magenta: "from-magenta/15 to-magenta-hot/5 border-magenta/20",
  yellow: "from-yellow/20 to-yellow/5 border-yellow/30",
  purple: "from-purple/15 to-purple/5 border-purple/20",
} as const;

export function PromoCard({ promo }: { promo: Promotion }) {
  return (
    <article
      className={cn(
        "card-elevated group relative overflow-hidden rounded-3xl border bg-gradient-to-br p-6 md:p-8",
        accents[promo.accent]
      )}
    >
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/30 blur-2xl transition-transform duration-500 group-hover:scale-150" />
      <span className="inline-flex rounded-full bg-white/80 px-3 py-1 text-xs font-bold uppercase tracking-wider text-magenta">
        {promo.badge}
      </span>
      <h3 className="mt-4 font-display text-2xl font-extrabold text-ink md:text-3xl">
        {promo.title}
      </h3>
      <p className="mt-1 font-script text-xl text-magenta">{promo.subtitle}</p>
      <p className="mt-4 text-sm leading-relaxed text-soft-ink md:text-base">
        {promo.description}
      </p>
      <Link
        href={
          promo.id === "rewards-offers"
            ? "/rewards"
            : promo.id === "app-exclusive"
              ? "/app"
              : "/promotions"
        }
        className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-magenta transition-colors hover:text-magenta-hot"
      >
        {promo.cta}
        <span aria-hidden>→</span>
      </Link>
    </article>
  );
}
