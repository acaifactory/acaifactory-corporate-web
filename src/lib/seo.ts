import type { Metadata } from "next";
import { menuItems, stores } from "@/lib/data";
import { siteConfig } from "@/lib/site";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    slogan: siteConfig.slogan,
    url: siteConfig.url,
    logo: `${siteConfig.url}/brand/logo.png`,
    sameAs: [siteConfig.instagramUrl, siteConfig.facebookUrl].filter((u) => !u.startsWith("#")),
    contactPoint: {
      "@type": "ContactPoint",
      email: siteConfig.contactEmail,
      telephone: siteConfig.phone,
      contactType: "customer service",
      areaServed: "PR",
      availableLanguage: ["Spanish", "English"],
    },
  };
}

export function restaurantJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    image: `${siteConfig.url}/brand/logo.png`,
    servesCuisine: ["Brazilian", "Healthy", "Açaí", "Smoothies"],
    priceRange: "$$",
    brand: { "@type": "Brand", name: siteConfig.name },
  };
}

export function localBusinessJsonLd() {
  return stores.map((store) => ({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/locations#${store.id}`,
    name: store.name,
    description: `${siteConfig.name} — ${store.city}. Bowls premium, smoothies y experiencias tropicales.`,
    telephone: store.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: store.address,
      addressLocality: store.city,
      addressRegion: "PR",
      addressCountry: "US",
    },
    openingHours: "Mo-Su 10:00-21:00",
    url: `${siteConfig.url}/locations#${store.id}`,
    parentOrganization: { "@type": "Organization", name: siteConfig.name },
  }));
}

export function menuJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: `${siteConfig.name} Menu`,
    hasMenuSection: [...new Set(menuItems.map((i) => i.category))].map((category) => ({
      "@type": "MenuSection",
      name: category,
      hasMenuItem: menuItems
        .filter((i) => i.category === category)
        .slice(0, 8)
        .map((item) => ({
          "@type": "MenuItem",
          name: item.name,
          description: item.ingredients.slice(0, 5).join(", "),
          offers: {
            "@type": "Offer",
            price: Object.values(item.prices)[0],
            priceCurrency: "USD",
          },
        })),
    })),
  };
}

export function jsonLdScript(data: object | object[]) {
  return {
    __html: JSON.stringify(Array.isArray(data) ? data : data),
  };
}

export const homeMetadata: Metadata = {
  title: "Açaí Factory | A Taste of Brasil",
  description:
    "Bowls premium, smoothies tropicales y experiencias que conquistan. Ordena ahora, únete a Factory Rewards y descubre por qué Açaí Factory es la cadena de açaí que Puerto Rico ama.",
  keywords: [
    "açaí",
    "açaí bowls",
    "Açaí Factory",
    "Puerto Rico",
    "smoothies",
    "healthy food",
    "franquicia açaí",
    "Factory Rewards",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Açaí Factory — A Taste of Brasil",
    description:
      "La experiencia premium de açaí. Ordena bowls signature, gana rewards y vive la energía tropical.",
    images: [{ url: "/images/products/cherries-earthquake.webp", width: 1200, height: 1200 }],
  },
};
