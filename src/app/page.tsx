import type { Metadata } from "next";
import { homeMetadata } from "@/lib/seo";
import { HeroSection } from "@/components/sections/HeroSection";
import { PromotionsSection } from "@/components/sections/PromotionsSection";
import { MenuPreviewSection } from "@/components/sections/MenuPreviewSection";
import { RewardsSection } from "@/components/sections/RewardsSection";
import { AppSection } from "@/components/sections/AppSection";
import { DeliveryLocationsSection } from "@/components/sections/DeliveryLocationsSection";
import { CommunitySection } from "@/components/sections/CommunitySection";

export const metadata: Metadata = homeMetadata;

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PromotionsSection />
      <MenuPreviewSection />
      <RewardsSection />
      <AppSection />
      <DeliveryLocationsSection />
      <CommunitySection />
    </>
  );
}
