export type ProductEffect =
  | "earthquake"
  | "volcano"
  | "twister"
  | "tsunami"
  | "swirl"
  | "storm"
  | "arctic"
  | "snow"
  | "tropical"
  | "flood"
  | "rain"
  | "galaxy"
  | "eclipse"
  | "iceberg"
  | "paradise"
  | "power"
  | "bliss"
  | "cheesecake"
  | "cookies"
  | "pistachio"
  | "berry"
  | "dragon"
  | "coconut"
  | "chocolate"
  | "nutella"
  | "caramel"
  | "vanilla"
  | "frappe"
  | "coffee"
  | "mocha";

export type ProductTheme = {
  effect: ProductEffect;
  /** Cinematic scene label */
  scene: string;
  primary: string;
  secondary: string;
  tertiary: string;
};

const BRAND = {
  magenta: "#ec008c",
  magentaHot: "#ff1493",
  yellow: "#ffcf00",
  yellowDeep: "#f5b700",
  purple: "#6a1fb8",
  purpleDeep: "#4a1288",
};

/** Explicit cinematic theme per product */
const THEMES: Record<string, ProductTheme> = {
  "cherries-earthquake": {
    effect: "earthquake",
    scene: "Seismic cherry shockwave",
    primary: BRAND.magentaHot,
    secondary: BRAND.purpleDeep,
    tertiary: BRAND.yellow,
  },
  "volcano-eruption": {
    effect: "volcano",
    scene: "Lava eruption cinema",
    primary: BRAND.magenta,
    secondary: BRAND.yellowDeep,
    tertiary: BRAND.purple,
  },
  "twister-flavor": {
    effect: "twister",
    scene: "Fruit vortex storm",
    primary: BRAND.purple,
    secondary: BRAND.magentaHot,
    tertiary: BRAND.yellow,
  },
  "tsunami-mango": {
    effect: "tsunami",
    scene: "Mango tidal wave",
    primary: BRAND.yellow,
    secondary: BRAND.magenta,
    tertiary: BRAND.purple,
  },
  "swirl-acai": {
    effect: "swirl",
    scene: "Açaí spiral dimension",
    primary: BRAND.purple,
    secondary: BRAND.magenta,
    tertiary: BRAND.yellow,
  },
  "strawberry-storm": {
    effect: "storm",
    scene: "Electric berry storm",
    primary: BRAND.magentaHot,
    secondary: BRAND.purple,
    tertiary: BRAND.yellow,
  },
  "north-pole": {
    effect: "arctic",
    scene: "Arctic aurora freeze",
    primary: BRAND.purple,
    secondary: "#a8e6ff",
    tertiary: BRAND.magenta,
  },
  "snow-coconut": {
    effect: "snow",
    scene: "Snowfall coconut dream",
    primary: "#e8f4ff",
    secondary: BRAND.yellow,
    tertiary: BRAND.magenta,
  },
  "tropical-summer": {
    effect: "tropical",
    scene: "Tropical summer paradise",
    primary: BRAND.yellow,
    secondary: BRAND.magentaHot,
    tertiary: BRAND.purple,
  },
  "nutella-flood": {
    effect: "flood",
    scene: "Chocolate flood surge",
    primary: "#5c3317",
    secondary: BRAND.magenta,
    tertiary: BRAND.yellow,
  },
  rainstorm: {
    effect: "rain",
    scene: "Tropical rainstorm",
    primary: BRAND.purpleDeep,
    secondary: BRAND.magenta,
    tertiary: BRAND.yellow,
  },
  lotus: {
    effect: "paradise",
    scene: "Lotus bloom glow",
    primary: BRAND.magenta,
    secondary: BRAND.yellow,
    tertiary: BRAND.purple,
  },
  sunny: {
    effect: "tropical",
    scene: "Sun-kissed horizon",
    primary: BRAND.yellowDeep,
    secondary: BRAND.magentaHot,
    tertiary: BRAND.purple,
  },
  "mango-galaxis": {
    effect: "galaxy",
    scene: "Mango galaxy nebula",
    primary: BRAND.purpleDeep,
    secondary: BRAND.magentaHot,
    tertiary: BRAND.yellow,
  },
  "mango-eclipse": {
    effect: "eclipse",
    scene: "Solar mango eclipse",
    primary: "#1a0a14",
    secondary: BRAND.yellowDeep,
    tertiary: BRAND.magenta,
  },
  iceberg: {
    effect: "iceberg",
    scene: "Glacial iceberg drift",
    primary: "#b8e4ff",
    secondary: BRAND.purple,
    tertiary: BRAND.magenta,
  },
  "mini-nutella-flood": {
    effect: "flood",
    scene: "Mini chocolate wave",
    primary: "#4a2810",
    secondary: BRAND.magenta,
    tertiary: BRAND.yellow,
  },
  "mini-tropical-storm": {
    effect: "storm",
    scene: "Mini tropical storm",
    primary: BRAND.magenta,
    secondary: BRAND.yellow,
    tertiary: BRAND.purple,
  },
  "mini-power-bowl": {
    effect: "power",
    scene: "Power energy surge",
    primary: BRAND.yellowDeep,
    secondary: BRAND.magentaHot,
    tertiary: BRAND.purple,
  },
  "mini-coconut-bliss": {
    effect: "bliss",
    scene: "Coconut bliss aura",
    primary: BRAND.yellow,
    secondary: "#fff5e6",
    tertiary: BRAND.magenta,
  },
  "strawberry-cheesecake-chia": {
    effect: "cheesecake",
    scene: "Berry cheesecake glow",
    primary: BRAND.magentaHot,
    secondary: "#ffe4ec",
    tertiary: BRAND.purple,
  },
  "mango-paradise-chia": {
    effect: "paradise",
    scene: "Mango paradise rays",
    primary: BRAND.yellow,
    secondary: BRAND.magenta,
    tertiary: BRAND.purple,
  },
  "oreo-nutella-chia": {
    effect: "cookies",
    scene: "Cookie crumble cosmos",
    primary: "#2d1810",
    secondary: BRAND.magenta,
    tertiary: BRAND.yellow,
  },
  "pistachio-crunch-chia": {
    effect: "pistachio",
    scene: "Pistachio emerald rain",
    primary: "#7cb342",
    secondary: BRAND.magenta,
    tertiary: BRAND.yellow,
  },
  "a-a-smoothie": {
    effect: "berry",
    scene: "Açaí purple pulse",
    primary: BRAND.purpleDeep,
    secondary: BRAND.magentaHot,
    tertiary: BRAND.yellow,
  },
  "pitaya-smoothie": {
    effect: "dragon",
    scene: "Dragon fruit neon",
    primary: BRAND.magentaHot,
    secondary: "#ff6b9d",
    tertiary: BRAND.yellow,
  },
  "mango-madness": {
    effect: "tropical",
    scene: "Mango madness burst",
    primary: BRAND.yellowDeep,
    secondary: BRAND.magenta,
    tertiary: BRAND.purple,
  },
  "strawberry-banana-bliss": {
    effect: "bliss",
    scene: "Strawberry banana glow",
    primary: BRAND.magenta,
    secondary: BRAND.yellow,
    tertiary: BRAND.purple,
  },
  "coconut-paradise": {
    effect: "coconut",
    scene: "Coconut tropical breeze",
    primary: BRAND.yellow,
    secondary: "#fff8e7",
    tertiary: BRAND.magenta,
  },
  "oreo-smoothness": {
    effect: "cookies",
    scene: "Oreo swirl void",
    primary: "#1a1020",
    secondary: BRAND.magenta,
    tertiary: BRAND.yellow,
  },
  "chocolate-passion": {
    effect: "chocolate",
    scene: "Chocolate passion melt",
    primary: "#3d1c0a",
    secondary: BRAND.magentaHot,
    tertiary: BRAND.yellow,
  },
  "gone-nuts-nutella": {
    effect: "nutella",
    scene: "Nutella golden drizzle",
    primary: "#4a2810",
    secondary: BRAND.yellowDeep,
    tertiary: BRAND.magenta,
  },
  "strawberry-glow": {
    effect: "berry",
    scene: "Strawberry neon glow",
    primary: BRAND.magentaHot,
    secondary: "#ffb3c6",
    tertiary: BRAND.purple,
  },
  "fluffy-vanilla": {
    effect: "vanilla",
    scene: "Vanilla cloud dream",
    primary: "#fff5e6",
    secondary: BRAND.yellow,
    tertiary: BRAND.magenta,
  },
  "caramel-kisses": {
    effect: "caramel",
    scene: "Caramel golden kiss",
    primary: BRAND.yellowDeep,
    secondary: "#c68e17",
    tertiary: BRAND.magenta,
  },
  "oreo-frapp": {
    effect: "frappe",
    scene: "Oreo frappe blizzard",
    primary: "#2a1520",
    secondary: BRAND.magenta,
    tertiary: BRAND.yellow,
  },
  "nutella-frapp": {
    effect: "frappe",
    scene: "Nutella frappe storm",
    primary: "#3d2010",
    secondary: BRAND.magentaHot,
    tertiary: BRAND.yellow,
  },
  "m-m-s-frapp": {
    effect: "frappe",
    scene: "Candy color explosion",
    primary: BRAND.magenta,
    secondary: BRAND.yellow,
    tertiary: BRAND.purple,
  },
  "twix-frapp": {
    effect: "frappe",
    scene: "Caramel chocolate swirl",
    primary: "#5c3317",
    secondary: BRAND.yellow,
    tertiary: BRAND.magenta,
  },
  "kit-kat-frapp": {
    effect: "frappe",
    scene: "Crunch wave cinema",
    primary: "#4a2810",
    secondary: BRAND.magenta,
    tertiary: BRAND.yellow,
  },
  "hot-chocolate": {
    effect: "chocolate",
    scene: "Steaming cocoa cinema",
    primary: "#3d1c0a",
    secondary: BRAND.magenta,
    tertiary: BRAND.yellow,
  },
  "hot-coffee": {
    effect: "coffee",
    scene: "Morning brew warmth",
    primary: "#2d1810",
    secondary: BRAND.yellowDeep,
    tertiary: BRAND.magenta,
  },
  "large-hot-coffee": {
    effect: "coffee",
    scene: "Bold roast atmosphere",
    primary: "#1a0e08",
    secondary: BRAND.yellow,
    tertiary: BRAND.magentaHot,
  },
  mocha: {
    effect: "mocha",
    scene: "Mocha velvet steam",
    primary: "#3d2010",
    secondary: BRAND.magenta,
    tertiary: BRAND.yellow,
  },
  cappuccino: {
    effect: "coffee",
    scene: "Cappuccino foam art",
    primary: "#f5e6d3",
    secondary: BRAND.magenta,
    tertiary: BRAND.purple,
  },
};

const TIER_FALLBACK: Record<string, ProductTheme> = {
  signature: {
    effect: "swirl",
    scene: "Signature cinema",
    primary: BRAND.magentaHot,
    secondary: BRAND.yellow,
    tertiary: BRAND.purple,
  },
  premium: {
    effect: "galaxy",
    scene: "Premium nebula",
    primary: BRAND.purple,
    secondary: BRAND.magenta,
    tertiary: BRAND.yellow,
  },
  coco: {
    effect: "tropical",
    scene: "Tropical cinema",
    primary: BRAND.yellow,
    secondary: BRAND.magentaHot,
    tertiary: BRAND.purple,
  },
  baby: {
    effect: "bliss",
    scene: "Baby bowl sparkle",
    primary: BRAND.magenta,
    secondary: BRAND.yellow,
    tertiary: BRAND.purple,
  },
  menu: {
    effect: "swirl",
    scene: "Factory classic",
    primary: BRAND.magenta,
    secondary: BRAND.yellow,
    tertiary: BRAND.purple,
  },
};

export function getProductTheme(productId: string, tier = "menu"): ProductTheme {
  return THEMES[productId] ?? TIER_FALLBACK[tier] ?? TIER_FALLBACK.menu;
}
