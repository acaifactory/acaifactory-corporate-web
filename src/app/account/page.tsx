import type { Metadata } from "next";
import { UnderConstruction } from "@/components/UnderConstruction";
import { getSitePage } from "@/lib/pages";

const page = getSitePage("account");

export const metadata: Metadata = {
  title: page.title,
  description: "My Account — sign in, register, and manage your Açaí Factory Rewards.",
};

export default function AccountPage() {
  return (
    <UnderConstruction
      title={page.title}
      pageNumber={page.pageNumber}
      flower={page.flower}
    />
  );
}
