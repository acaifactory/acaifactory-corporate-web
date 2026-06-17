import Link from "next/link";
import type { Promotion } from "@/lib/data";
import { orderingLink, isExternalUrl, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const accents = {
  magenta: "from-magenta/12 via-white to-magenta-hot/5",
  yellow: "from-yellow/18 via-white to-yellow/5",
  purple: "from-purple/12 via-white to-purple/5",
} as const;

function promoHref(promo: Promotion) {
  switch (promo.id) {
    case "rewards-offers":
      return "/rewards";
    case "app-exclusive":
      return "/app";
    case "acai-of-the-month":
      return "/menu/cherries-earthquake";
    case "tuesday-specials":
    case "limited-time-bowls":
      return "/menu";
    default:
      return "/promotions";
  }
}

function promoCta(promo: Promotion) {
  if (promo.cta === "ORDER NOW") return { href: orderingLink(), external: isExternalUrl(siteConfig.orderingUrl) };
  if (promo.cta === "DOWNLOAD APP") return { href: "/app", external: false };
  return { href: promoHref(promo), external: false };
}

export function PromoCard({ promo }: { promo: Promotion }) {
  const cta = promoCta(promo);

  return (
    <article
      className={cn(
        "card-3d group relative overflow-hidden rounded-[1.75rem] border border-white/80 bg-gradient-to-br p-7 md:p-9",
        accents[promo.accent]
      )}
    >
      <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-magenta/10 blur-3xl transition-transform duration-700 group-hover:scale-150" />
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-60" />

      <div className="relative">
        <span className="badge-float-3d inline-flex rounded-full border border-magenta/15 bg-white/90 px-4 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-magenta">
          {promo.badge}
        </span>
        <h3 className="heading-luxury mt-5 text-3xl text-ink md:text-4xl">
          {promo.title}
        </h3>
        <p className="mt-2 font-script text-3xl text-magenta">{promo.subtitle}</p>
        <p className="mt-5 font-display text-sm font-medium leading-relaxed text-soft-ink md:text-base">
          {promo.description}
        </p>
        <Link
          href={cta.href}
          target={cta.external ? "_blank" : undefined}
          rel={cta.external ? "noopener noreferrer" : undefined}
          className="mt-7 inline-flex items-center gap-2 font-display text-xs font-extrabold uppercase tracking-[0.2em] text-magenta transition-all hover:gap-3 hover:text-magenta-hot"
        >
          {promo.cta}
          <span aria-hidden>→</span>
        </Link>
      </div>
    </article>
  );
}
