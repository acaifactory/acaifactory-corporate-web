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
  storyButtons: [
    {
      id: "history",
      label: "Our History",
      secondaryLabel: "Nuestra Historia",
      top: "16.2%",
      right: "1.5%",
      width: "16%",
      height: "5.4%",
    },
  ],
  stories: {
    history: {
      background: "/marketing/franchise/history-background.jpg",
      backgroundAlt: "A coastal landscape beneath a small storm",
      en: {
        title: "The Story Behind Açaí Factory",
        paragraphs: [
          "The idea for Açaí Factory was born during one of the most challenging periods in Puerto Rico's history.",
          "Around the time Hurricane Maria impacted the island, I had the opportunity to discover a new world of products focused on wellness, nutrition, and healthy living. During my visits to the United States, I experienced flavors and concepts that were unlike anything I had tried before. Those products left a lasting impression on me and stayed in my mind long after I returned home.",
          "At that time, I was already in the process of acquiring a food trailer for a completely different business concept. However, the more I reflected on those healthy products and the growing demand for better food options, the more I realized that this was the direction I truly wanted to pursue.",
          "Like many entrepreneurs in Puerto Rico during that period, I faced numerous obstacles. Hurricane Maria brought unprecedented challenges, causing delays, uncertainty, and difficulties that affected nearly every aspect of life and business on the island. Yet those challenges became the inspiration behind something much greater.",
          "As the concept evolved, I wanted the brand to remember the moment in which it was born. That is why many of our products are inspired by the powerful forces of nature. Names such as Hurricane Pineapple, Tsunami Mango, Thunder Bowl, Blizzard Pitaya, Volcano Eruption, and many others reflect the events and experiences that shaped the creation of Açaí Factory.",
          "But there is a deeper meaning behind those names.",
          "While natural storms can be destructive, our products transform those powerful images into something positive—an explosion of flavor, energy, freshness, and enjoyment. Each bowl is designed to deliver an unforgettable experience, turning the intensity of nature into something people can enjoy and celebrate.",
          "What began as an idea during a difficult time eventually became Açaí Factory—a brand built on resilience, innovation, and the belief that great opportunities can emerge from life's greatest challenges.",
          "Today, every bowl we serve carries a piece of that story.",
        ],
      },
      es: {
        title: "La Historia Detrás de Açaí Factory",
        paragraphs: [
          "La idea de Açaí Factory nació durante uno de los períodos más desafiantes en la historia de Puerto Rico.",
          "Alrededor de la época en que el huracán María impactó la isla, tuve la oportunidad de descubrir un nuevo mundo de productos enfocados en el bienestar, la nutrición y un estilo de vida saludable. Durante mis visitas a los Estados Unidos, experimenté sabores y conceptos diferentes a todo lo que había probado antes. Esos productos dejaron una impresión duradera en mí y permanecieron en mi mente mucho después de regresar a casa.",
          "En aquel momento, ya me encontraba en proceso de adquirir un food trailer para un concepto de negocio completamente diferente. Sin embargo, mientras más reflexionaba sobre aquellos productos saludables y la creciente demanda por mejores opciones de alimentos, más comprendía que esa era la dirección que realmente quería seguir.",
          "Como muchos emprendedores en Puerto Rico durante ese período, enfrenté numerosos obstáculos. El huracán María trajo desafíos sin precedentes, provocando retrasos, incertidumbre y dificultades que afectaron prácticamente todos los aspectos de la vida y los negocios en la isla. Sin embargo, aquellos retos se convirtieron en la inspiración para algo mucho más grande.",
          "A medida que el concepto evolucionaba, quería que la marca recordara el momento en que nació. Por eso muchos de nuestros productos están inspirados en las poderosas fuerzas de la naturaleza. Nombres como Hurricane Pineapple, Tsunami Mango, Thunder Bowl, Blizzard Pitaya, Volcano Eruption y muchos otros reflejan los acontecimientos y experiencias que dieron forma a la creación de Açaí Factory.",
          "Pero existe un significado más profundo detrás de esos nombres.",
          "Aunque las tormentas naturales pueden ser destructivas, nuestros productos transforman esas imágenes poderosas en algo positivo: una explosión de sabor, energía, frescura y disfrute. Cada bowl está diseñado para ofrecer una experiencia inolvidable, convirtiendo la intensidad de la naturaleza en algo que las personas pueden disfrutar y celebrar.",
          "Lo que comenzó como una idea durante un momento difícil finalmente se convirtió en Açaí Factory: una marca construida sobre la resiliencia, la innovación y la creencia de que las grandes oportunidades pueden surgir de los mayores desafíos de la vida.",
          "Hoy, cada bowl que servimos lleva consigo una parte de esa historia.",
        ],
      },
    },
  },
} as const;
