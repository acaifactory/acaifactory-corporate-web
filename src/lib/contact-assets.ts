const HERO_WIDTH = 3072;
const HERO_HEIGHT = 2048;

function widthPercent(px: number): number {
  return (px / HERO_WIDTH) * 100;
}

function heightPercent(px: number): number {
  return (px / HERO_HEIGHT) * 100;
}

function linkBox(leftPx: number, topPx: number, widthPx: number, heightPx: number) {
  return {
    leftPercent: widthPercent(leftPx),
    topPercent: heightPercent(topPx),
    widthPercent: widthPercent(widthPx),
    heightPercent: heightPercent(heightPx),
  };
}

export const contactAssets = {
  hero: "/marketing/contact/contact-hero.jpg",
  heroWidth: HERO_WIDTH,
  heroHeight: HERO_HEIGHT,
  actions: [
    {
      id: "locations",
      label: "View locations",
      href: "/locations",
      box: linkBox(872, 1262, 414, 108),
    },
    {
      id: "call",
      label: "Call Açaí Factory",
      href: "tel:+17876195485",
      box: linkBox(1388, 1262, 414, 108),
    },
    {
      id: "whatsapp",
      label: "Chat on WhatsApp",
      href: "https://wa.me/17876195485?text=Hola%20A%C3%A7a%C3%AD%20Factory%2C%20necesito%20ayuda.",
      box: linkBox(1906, 1262, 414, 108),
    },
    {
      id: "email",
      label: "Email Açaí Factory",
      href: "mailto:acaifactorypr@gmail.com",
      box: linkBox(2424, 1262, 414, 108),
    },
    {
      id: "instagram",
      label: "Instagram",
      href: "https://www.instagram.com/acaifactorypr/",
      box: linkBox(2000, 1832, 66, 66),
    },
    {
      id: "facebook",
      label: "Facebook",
      href: "https://www.facebook.com/acaifactorypr/",
      box: linkBox(2078, 1832, 66, 66),
    },
    {
      id: "tiktok",
      label: "TikTok",
      href: "https://www.tiktok.com/@acaifactorypr",
      box: linkBox(2158, 1832, 66, 66),
    },
  ],
} as const;
