import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit, Allura } from "next/font/google";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { MobileOrderBar } from "@/components/layout/MobileOrderBar";
import {
  organizationJsonLd,
  restaurantJsonLd,
  localBusinessJsonLd,
  menuJsonLd,
  jsonLdScript,
} from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const body = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const display = Outfit({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const luxury = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-luxury",
  display: "swap",
});

const script = Allura({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.slogan}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  icons: {
    icon: "/brand/logo.png",
    apple: "/brand/logo.png",
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    locale: "es_PR",
    type: "website",
    images: [{ url: "/brand/logo.png", width: 835, height: 835, alt: "Açaí Factory" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = [
    organizationJsonLd(),
    restaurantJsonLd(),
    ...localBusinessJsonLd(),
    menuJsonLd(),
  ];

  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(schema)}
        />
      </head>
      <body
        className={`${body.variable} ${display.variable} ${luxury.variable} ${script.variable} antialiased pb-20 md:pb-0`}
      >
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <MobileOrderBar />
      </body>
    </html>
  );
}
