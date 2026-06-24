import type { Metadata } from "next";
import { UnderConstruction } from "@/components/UnderConstruction";
import { getSitePage } from "@/lib/pages";

const page = getSitePage("about");

export const metadata: Metadata = {
  title: page.title,
};

export default function AboutPage() {
  return (
    <UnderConstruction
      title={page.title}
      pageNumber={page.pageNumber}
      flower={page.flower}
    />
  );
}
