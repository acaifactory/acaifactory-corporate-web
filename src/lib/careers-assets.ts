import { inchesToArtHeightPercent, inchesToArtWidthPercent } from "./art-scale";

const HERO_WIDTH = 3072;
const HERO_HEIGHT = 2048;
const DPI = 72;

/** Employment page — single source of truth for sizes and slots. */
export const careersAssets = {
  hero: "/marketing/careers/careers-hero.jpg",
  heroWidth: HERO_WIDTH,
  heroHeight: HERO_HEIGHT,
  dpi: DPI,
  applyButtonSlot: {
    top: "2%",
    right: "2%",
    widthPercent: inchesToArtWidthPercent(4, HERO_WIDTH, DPI),
    heightPercent: inchesToArtHeightPercent(2, HERO_HEIGHT, DPI),
  },
  applyButton: {
    widthIn: 4,
    heightIn: 2,
    fontPt: 14,
    desktopFontVw: 1,
  },
  applicationForm: {
    widthIn: 8,
    heightIn: 10,
    desktopWidthVw: 50,
    desktopHeightVh: 85,
    fontPt: 14,
    desktopFontVw: 1,
    fieldHeightIn: 1,
    fieldHeightVh: 7,
    textareaHeightIn: 1.6,
    textareaHeightVh: 12,
    submitHeightIn: 1,
    submitHeightVh: 7,
  },
} as const;
