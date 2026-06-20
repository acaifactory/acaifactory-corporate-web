/**
 * Home image paths — Desktop 1920×1080 (16:9).
 *
 * GUIDE (reference only, never publish): guides/home-hero-layout-guide.png
 * CLEAN hero (production): public/marketing/home/hero-desktop-clean.png
 * CLEAN carousel: public/marketing/home/carousel/slide-01.png, slide-02.png, …
 */

export const homeAssets = {
  /** CLEAN hero — 1920×1080, no buttons baked in */
  heroClean: "/marketing/home/hero-desktop-clean.png",
} as const;

export type HomeCarouselSlideConfig = {
  id: string;
  /** CLEAN image path — 1920×1080 desktop */
  image: string;
  alt: string;
  href: string;
};

/**
 * Add slides here when client delivers new carousel CLEAN images.
 * Example:
 * { id: "slide-1", image: "/marketing/home/carousel/slide-01.png", alt: "…", href: "/menu" }
 */
export const homeCarouselSlides: HomeCarouselSlideConfig[] = [
  {
    id: "slide-01",
    image: "/marketing/home/carousel/slide-01.png",
    alt: "Açaí Experience — bowls premium a domicilio o en tienda",
    href: "/menu",
  },
  {
    id: "slide-02",
    image: "/marketing/home/carousel/slide-02.png",
    alt: "Descubre el poder del açaí — superfruta amazónica",
    href: "/menu",
  },
  {
    id: "slide-03",
    image: "/marketing/home/carousel/slide-03.png",
    alt: "Dragon Fruit Pitaya — color, sabor y bienestar",
    href: "/menu",
  },
  {
    id: "slide-04",
    image: "/marketing/home/carousel/slide-04.png",
    alt: "No es solo comida saludable — es todo un ambiente",
    href: "/locations",
  },
  {
    id: "slide-05",
    image: "/marketing/home/carousel/slide-05.png",
    alt: "Frutas reales — nutrición que te hace bien",
    href: "/menu",
  },
  {
    id: "slide-06",
    image: "/marketing/home/carousel/slide-06.png",
    alt: "Bienvenido a la familia Açaí Factory",
    href: "/about",
  },
];
