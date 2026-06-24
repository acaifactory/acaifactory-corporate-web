export const siteConfig = {
  name: "Açaí Factory",
  slogan: "A Taste of Brasil",
  description: "Açaí Factory corporate website",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://acaifactory-corporate-web.vercel.app",
} as const;

/** Functional routes — every CTA must use these. */
export const routes = {
  home: "/",
  menu: "/menu",
  order: "https://acai-factory-ordering-app.vercel.app",
  app: "/app",
  account: "/account",
} as const;

/**
 * OFFICIAL HEADER NAV — fixed order, all pages.
 * Do not remove or reorder without client approval.
 */
export const officialHeaderNav = [
  { href: "/", label: "Home" },
  { href: "/offers", label: "Promociones" },
  { href: "/rewards", label: "Rewards" },
  { href: "/menu", label: "Menú" },
  { href: "/delivery", label: "Delivery" },
  { href: "/locations", label: "Ubicaciones" },
  { href: "/catering", label: "Catering" },
  { href: "/franchise", label: "Franquicias" },
  { href: "/careers", label: "Employment" },
  { href: "/contact", label: "Contact Us" },
  { href: "/account", label: "My Account" },
] as const;

/** @deprecated Use officialHeaderNav — kept as alias for sitemap/legacy imports */
export const navLinks = officialHeaderNav;

export const legalLinks = [
  { href: "/legal-information#terms-and-conditions", label: "Terms & Conditions" },
  { href: "/legal-information#privacy-policy", label: "Privacy Policy" },
  { href: "/legal-information#disclaimer", label: "Disclaimer" },
  { href: "/legal-information#website-use-policy", label: "Website Use Policy" },
] as const;

export const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/acaifactorypr/",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/acaifactorypr/",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@acaifactorypr",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@acaifactorypr",
  },
] as const;

export const homeImages = {
  logo: "/brand/logo.png",
} as const;
