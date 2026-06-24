import type { Metadata } from "next";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeCarousel } from "@/components/home/HomeCarousel";
import { getSitePage } from "@/lib/pages";

const page = getSitePage("home");

export const metadata: Metadata = {
  title: page.title,
  description:
    "Handcrafted Açaí bowls made with real fruit, premium ingredients and a whole lot of love. A Taste of Brasil.",
};

export default function HomePage() {
  return (
    <div className="relative flex flex-col">
      <HomeHero />
      <HomeCarousel />
    </div>
  );
}
