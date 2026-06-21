import {
  inchesToArtHeightPercent,
  inchesToArtWidthPercent,
} from "./art-scale";

const HERO_WIDTH = 3072;
const HERO_HEIGHT = 2048;
const DPI = 72;

export const franchiseAssets = {
  hero: "/marketing/franchise/franchise-hero.jpg",
  heroWidth: HERO_WIDTH,
  heroHeight: HERO_HEIGHT,
  dpi: DPI,
  buttons: [
    {
      id: "invest",
      label: "Quiero invertir",
      href: "/contact?interest=franchise",
      left: "3.385%",
      top: "46.729%",
      widthIn: 6.92,
      heightIn: 1.26,
      widthPercent: inchesToArtWidthPercent(6.92, HERO_WIDTH, DPI),
      heightPercent: inchesToArtHeightPercent(1.26, HERO_HEIGHT, DPI),
      fontPt: 14,
      desktopFontVw: 1,
    },
    {
      id: "traditional-store",
      label: "Conoce más",
      href: "/contact?interest=franchise&model=traditional-store",
      left: "23.763%",
      top: "82.861%",
      widthIn: 3.56,
      heightIn: 1.03,
      widthPercent: inchesToArtWidthPercent(3.56, HERO_WIDTH, DPI),
      heightPercent: inchesToArtHeightPercent(1.03, HERO_HEIGHT, DPI),
      fontPt: 10,
      desktopFontVw: 0.7,
    },
    {
      id: "food-truck",
      label: "Conoce más",
      href: "/contact?interest=franchise&model=food-truck",
      left: "52.865%",
      top: "82.861%",
      widthIn: 3.43,
      heightIn: 1.03,
      widthPercent: inchesToArtWidthPercent(3.43, HERO_WIDTH, DPI),
      heightPercent: inchesToArtHeightPercent(1.03, HERO_HEIGHT, DPI),
      fontPt: 10,
      desktopFontVw: 0.7,
    },
    {
      id: "vagone-store",
      label: "Conoce más",
      href: "/contact?interest=franchise&model=vagone-store",
      left: "83.724%",
      top: "82.861%",
      widthIn: 3.67,
      heightIn: 1.03,
      widthPercent: inchesToArtWidthPercent(3.67, HERO_WIDTH, DPI),
      heightPercent: inchesToArtHeightPercent(1.03, HERO_HEIGHT, DPI),
      fontPt: 10,
      desktopFontVw: 0.7,
    },
  ],
} as const;
