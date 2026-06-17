export const siteConfig = {
  name: "Açaí Factory",
  slogan: "A Taste of Brasil",
  description:
    "Experiencias premium de açaí, bowls tropicales y bienestar. Una marca construida para crecer a nivel nacional e internacional.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://acaifactory.com",
  contactEmail: "acaifactorypr@gmail.com",
  phone: "(787) 000-0000",
  orderingUrl: process.env.NEXT_PUBLIC_ORDERING_URL || "#order",
  appStoreUrl: process.env.NEXT_PUBLIC_APP_STORE_URL || "#app-store",
  playStoreUrl: process.env.NEXT_PUBLIC_PLAY_STORE_URL || "#play-store",
  instagramUrl:
    process.env.NEXT_PUBLIC_INSTAGRAM_URL ||
    "https://www.instagram.com/acaifactorypr/",
  facebookUrl: process.env.NEXT_PUBLIC_FACEBOOK_URL || "#facebook",
  doorDashUrl: process.env.NEXT_PUBLIC_DOORDASH_URL || "#doordash",
  uberEatsUrl: process.env.NEXT_PUBLIC_UBER_EATS_URL || "#ubereats",
  rewards: {
    pointsPerDollar: 1,
    goal: 90,
    prize: "$9.00 Reward Credit",
  },
} as const;

export const navLinks = [
  { href: "/promotions", label: "Promociones" },
  { href: "/rewards", label: "Rewards" },
  { href: "/menu", label: "Menú" },
  { href: "/locations", label: "Locations" },
  { href: "/catering", label: "Catering" },
  { href: "/franchises", label: "Franquicias" },
  { href: "/app", label: "App" },
  { href: "/contact", label: "Contacto" },
  { href: "/support", label: "Support" },
] as const;

export function orderingLink(productId?: string) {
  const base = siteConfig.orderingUrl;
  if (!productId || base.startsWith("#")) return base;
  const url = new URL(base);
  url.searchParams.set("product", productId);
  return url.toString();
}
