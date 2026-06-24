import type { Metadata } from "next";
import { AccountExperience } from "@/components/account/AccountExperience";
import { getSitePage } from "@/lib/pages";

const page = getSitePage("account");

export const metadata: Metadata = {
  title: page.title,
  description: "My Account — sign in, register, and manage your Açaí Factory Rewards.",
};

export default function AccountPage() {
  return <AccountExperience />;
}
