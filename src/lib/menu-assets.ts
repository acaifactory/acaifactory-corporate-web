export const menuCategories = [
  {
    id: "signature-bowls",
    label: "Signature Bowls",
    image: "/marketing/menu/signature-bowls.png",
    alt: "Açaí Factory Signature Bowls — Build Your Own, The Classic, Tropical Paradise, Berry Blast, Nutty Delight, Green Power y Chocolate Dream",
  },
  {
    id: "baby-chia",
    label: "Baby & Chia",
    image: "/marketing/menu/raw/menu-02.png",
    alt: "Açaí Factory Baby Bowls y Chia Puddings — porciones para los más pequeños y postres de chía",
  },
  {
    id: "drinks",
    label: "Drinks",
    image: "/marketing/menu/raw/menu-03.png",
    alt: "Açaí Factory Drinks — Smoothies, Milkshakes, Frappés, Specialty Coffee y Add Your Favorites",
  },
  {
    id: "coco-mango",
    label: "Coco & Mango",
    image: "/marketing/menu/raw/menu-04.png",
    alt: "Açaí Factory Coco & Mango — bowls tropicales con coco y mango",
  },
] as const;

export type MenuCategoryId = (typeof menuCategories)[number]["id"];
