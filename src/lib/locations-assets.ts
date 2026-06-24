import { routes } from "@/lib/site";

const HERO_WIDTH = 3072;
const HERO_HEIGHT = 2048;

function widthPercent(px: number): number {
  return (px / HERO_WIDTH) * 100;
}

function heightPercent(px: number): number {
  return (px / HERO_HEIGHT) * 100;
}

function googleMapsDirections(destination: string): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`;
}

const directionsButtonBase = {
  label: "Cómo llegar",
  topPercent: heightPercent(1616),
  widthPercent: widthPercent(420),
  heightPercent: heightPercent(50),
  fontPt: 14,
  desktopFontVw: 0.9,
} as const;

export const locationsAssets = {
  hero: "/marketing/locations/locations-hero.jpg",
  heroWidth: HERO_WIDTH,
  heroHeight: HERO_HEIGHT,
  stores: [
    {
      id: "bayamon",
      city: "Bayamón",
      address: "Can. #2, Plaza Bayamón, Bayamón, PR 00961",
      phone: "(787) 619-5485",
      directionsUrl: googleMapsDirections("Açaí Factory Plaza Bayamón, Bayamón, PR 00961"),
      orderHref: routes.order,
      directionsButton: {
        ...directionsButtonBase,
        leftPercent: widthPercent(198),
      },
    },
    {
      id: "catano",
      city: "Cataño",
      address: "Carr. #888, Parque Real, Cataño, PR 00962",
      phone: "(787) 619-5485",
      directionsUrl: googleMapsDirections("Açaí Factory Parque Real, Cataño, PR 00962"),
      orderHref: routes.order,
      directionsButton: {
        ...directionsButtonBase,
        leftPercent: widthPercent(755),
      },
    },
    {
      id: "corozal",
      city: "Corozal",
      address: "Carr. #159, Parozal Town Center, Corozal, PR 00783",
      phone: "(787) 619-5485",
      directionsUrl: googleMapsDirections("Açaí Factory Parozal Town Center, Corozal, PR 00783"),
      orderHref: routes.order,
      directionsButton: {
        ...directionsButtonBase,
        leftPercent: widthPercent(1317),
      },
    },
  ],
} as const;
