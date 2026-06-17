import { getProductTheme } from "./product-themes";

const MARKETING_COPY: Record<string, { description: string; note?: string }> = {
  "cherries-earthquake": {
    description:
      "El bowl que definió una generación. Cerezas intensas, frutas tropicales y açaí cremoso en una experiencia sísmica de sabor que no olvidarás.",
    note: "Official #1 — el más pedido de la casa.",
  },
  "volcano-eruption": {
    description:
      "Explosión cremosa de marshmallows, cerezas y whipped cream sobre açaí frío. Un volcán de indulgencia tropical.",
  },
  "tropical-summer": {
    description:
      "Premium de verdad: pitaya, mango sorbet, Nutella y coconut flakes en una obra maestra tropical.",
    note: "Premium crown — edición insignia.",
  },
  "nutella-flood": {
    description:
      "Nutella en cada capa. Fresas, piña y açaí se encuentran en una inundación de chocolate que conquista.",
  },
};

export function getProductCopy(productId: string, name: string) {
  const theme = getProductTheme(productId);
  const custom = MARKETING_COPY[productId];
  if (custom) return custom;
  return {
    description: `${name} — una creación ${theme.scene.toLowerCase()} con ingredientes frescos, energía tropical y la calidad premium que solo Açaí Factory entrega.`,
    note: theme.scene,
  };
}
