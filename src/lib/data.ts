import menuData from "@/data/menu.json";
import locationsData from "@/data/locations.json";
import promotionsData from "@/data/promotions.json";

export type MenuItem = {
  id: string;
  name: string;
  category: string;
  tier: string;
  label: string;
  image: string | null;
  prices: Record<string, number>;
  ingredients: string[];
};

export type Store = {
  id: string;
  name: string;
  city: string;
  address: string;
  phone: string;
  hours: string;
  mapQuery: string;
  featured: boolean;
};

export type Promotion = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  cta: string;
  accent: "magenta" | "yellow" | "purple";
};

export const menuCategories = menuData.categories;
export const menuItems = menuData.items as unknown as MenuItem[];
export const addOns = menuData.addOns as { name: string; price: number }[];
export const stores = locationsData.stores as Store[];
export const promotions = promotionsData.promotions as Promotion[];

export function getMenuItem(slug: string) {
  return menuItems.find((item) => item.id === slug);
}

export function getItemsByCategory(category: string) {
  return menuItems.filter((item) => item.category === category);
}

export function getFeaturedItems(limit = 8) {
  const priority = ["cherries-earthquake", "tropical-summer", "nutella-flood", "mango-galaxis"];
  const featured = priority
    .map((id) => menuItems.find((item) => item.id === id))
    .filter(Boolean) as MenuItem[];
  const rest = menuItems.filter((item) => !priority.includes(item.id));
  return [...featured, ...rest].slice(0, limit);
}
