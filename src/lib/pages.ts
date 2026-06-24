export const sitePages = [
  { slug: "home", path: "/", title: "Home", pageNumber: 1, flower: "🌸" },
  { slug: "menu", path: "/menu", title: "Menu", pageNumber: 2, flower: "🌺" },
  { slug: "offers", path: "/offers", title: "Offers", pageNumber: 3, flower: "🌻" },
  { slug: "rewards", path: "/rewards", title: "Rewards", pageNumber: 4, flower: "🌷" },
  { slug: "delivery", path: "/delivery", title: "Delivery", pageNumber: 5, flower: "🌼" },
  { slug: "locations", path: "/locations", title: "Locations", pageNumber: 6, flower: "💐" },
  { slug: "catering", path: "/catering", title: "Catering", pageNumber: 7, flower: "🪷" },
  { slug: "franchise", path: "/franchise", title: "Franchise", pageNumber: 8, flower: "🌹" },
  { slug: "app", path: "/app", title: "App", pageNumber: 9, flower: "🏵️" },
  { slug: "careers", path: "/careers", title: "Careers", pageNumber: 10, flower: "🌾" },
  { slug: "contact", path: "/contact", title: "Contact Us", pageNumber: 11, flower: "🍀" },
  { slug: "account", path: "/account", title: "My Account", pageNumber: 17, flower: "👤" },
  { slug: "about", path: "/about", title: "About Us", pageNumber: 12, flower: "🌿" },
  { slug: "faq", path: "/faq", title: "FAQ", pageNumber: 13, flower: "🌱" },
  { slug: "privacy-policy", path: "/privacy-policy", title: "Privacy Policy", pageNumber: 14, flower: "🌵" },
  { slug: "terms-and-conditions", path: "/terms-and-conditions", title: "Terms & Conditions", pageNumber: 15, flower: "🌴" },
  { slug: "promotion-disclaimer", path: "/promotion-disclaimer", title: "Promotion Disclaimer", pageNumber: 16, flower: "✨" },
  { slug: "legal-information", path: "/legal-information", title: "Legal Information", pageNumber: 18, flower: "⚖️" },
] as const;

export type SitePage = (typeof sitePages)[number];

export function getSitePage(slug: SitePage["slug"]) {
  return sitePages.find((page) => page.slug === slug)!;
}
