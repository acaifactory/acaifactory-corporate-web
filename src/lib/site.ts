export const siteConfig = {
  name: "Açaí Factory",
  slogan: "A Taste of Brasil",
  description:
    "Bowls premium de açaí, smoothies tropicales y experiencias de bienestar. La cadena de açaí con visión nacional e internacional — energía, frescura y sabor Brasil en cada visita.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://acaifactory-corporate-web.vercel.app",
  contactEmail: "acaifactorypr@gmail.com",
  phone: "(787) 000-0000",
  orderingUrl: process.env.NEXT_PUBLIC_ORDERING_URL || "/menu",
  rewardsUrl: process.env.NEXT_PUBLIC_REWARDS_URL || "/rewards",
  appStoreUrl: process.env.NEXT_PUBLIC_APP_STORE_URL || "/app",
  playStoreUrl: process.env.NEXT_PUBLIC_PLAY_STORE_URL || "/app",
  instagramUrl:
    process.env.NEXT_PUBLIC_INSTAGRAM_URL ||
    "https://www.instagram.com/acaifactorypr/",
  facebookUrl: process.env.NEXT_PUBLIC_FACEBOOK_URL || "https://www.facebook.com/",
  doorDashUrl: process.env.NEXT_PUBLIC_DOORDASH_URL || "/delivery",
  uberEatsUrl: process.env.NEXT_PUBLIC_UBER_EATS_URL || "/delivery",
  rewards: {
    pointsPerDollar: 1,
    goal: 90,
    prize: "$9.00 Reward Credit",
    birthdayPerk: "Oferta especial de cumpleaños solo para miembros",
    exclusiveDeals: "Promociones y sorpresas que no verás en tienda",
  },
} as const;

export const navLinks = [
  { href: "/promotions", label: "Promociones" },
  { href: "/rewards", label: "Rewards" },
  { href: "/menu", label: "Menú" },
  { href: "/delivery", label: "Delivery" },
  { href: "/locations", label: "Ubicaciones" },
  { href: "/catering", label: "Catering" },
  { href: "/franchises", label: "Franquicias" },
  { href: "/app", label: "App" },
  { href: "/community", label: "Comunidad" },
  { href: "/contact", label: "Contacto" },
  { href: "/support", label: "Soporte" },
] as const;

export function orderingLink(productId?: string) {
  const base = siteConfig.orderingUrl;
  if (base.startsWith("#") || base.startsWith("/")) {
    return productId ? `/menu/${productId}` : base === "#order" ? "/menu" : base;
  }
  if (!productId) return base;
  try {
    const url = new URL(base);
    url.searchParams.set("product", productId);
    return url.toString();
  } catch {
    return base;
  }
}

export function isExternalUrl(url: string) {
  return url.startsWith("http");
}
