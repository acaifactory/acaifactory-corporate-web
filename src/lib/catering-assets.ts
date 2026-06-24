const HERO_WIDTH = 3434;
const HERO_HEIGHT = 1832;

function widthPercent(px: number): number {
  return (px / HERO_WIDTH) * 100;
}

function heightPercent(px: number): number {
  return (px / HERO_HEIGHT) * 100;
}

export const cateringAssets = {
  hero: "/marketing/catering/catering-hero.jpg",
  heroWidth: HERO_WIDTH,
  heroHeight: HERO_HEIGHT,
  quoteButton: {
    label: "Cotiza tu evento",
    leftPercent: widthPercent(154),
    topPercent: heightPercent(1576),
    widthPercent: widthPercent(544),
    heightPercent: heightPercent(128),
  },
  occasions: [
    {
      id: "baby-shower",
      title: "Baby Shower",
      image: "/marketing/catering/occasions/baby-shower.jpg",
      imageWidth: 2804,
      imageHeight: 2244,
    },
    {
      id: "boda",
      title: "Bodas",
      image: "/marketing/catering/occasions/boda.jpg",
      imageWidth: 2804,
      imageHeight: 2244,
    },
    {
      id: "escuela",
      title: "Escuelas",
      image: "/marketing/catering/occasions/escuela.jpg",
      imageWidth: 3072,
      imageHeight: 2048,
    },
    {
      id: "reunion-corporativa",
      title: "Reuniones corporativas",
      image: "/marketing/catering/occasions/reunion-corporativa.jpg",
      imageWidth: 3072,
      imageHeight: 2048,
    },
    {
      id: "social",
      title: "Eventos sociales",
      image: "/marketing/catering/occasions/social.jpg",
      imageWidth: 3072,
      imageHeight: 2048,
    },
    {
      id: "gender-reveal",
      title: "Gender Reveal",
      image: "/marketing/catering/occasions/gender-reveal.jpg",
      imageWidth: 3072,
      imageHeight: 2048,
    },
  ],
  /** Kept for the standalone catering form component even though the new hero no longer renders it. */
  formSlot: {
    top: "59.86%",
    right: "0.24%",
    width: "40.58%",
    height: "31%",
  },
  formSpec: {
    widthIn: 11.54,
    heightIn: 12.15,
    fieldHeightIn: 1,
    topOffsetIn: 5,
    rightOffsetIn: 1,
    imageWidthIn: 28.444,
    imageHeightIn: 42.556,
    dpi: 72,
  },
} as const;
