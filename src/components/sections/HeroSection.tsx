"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ProductImage } from "@/components/ui/ProductImage";
import { orderingLink, siteConfig } from "@/lib/site";

export function HeroSection() {
  return (
    <section className="gradient-hero relative min-h-[100svh] overflow-hidden pt-28 md:pt-32">
      <div className="absolute -left-20 top-32 h-64 w-64 rounded-full bg-magenta/10 blur-3xl" />
      <div className="absolute -right-16 bottom-20 h-72 w-72 rounded-full bg-yellow/20 blur-3xl" />
      <div className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-purple/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 pb-20 md:grid-cols-2 md:gap-12 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-magenta shadow-sm backdrop-blur-sm">
            <Sparkles className="h-4 w-4" />
            {siteConfig.slogan}
          </div>
          <h1 className="font-display text-4xl font-black leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            La marca tropical que{" "}
            <span className="text-gradient-brand">conquista mercados</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-soft-ink md:text-lg">
            No vendemos solo bowls. Vendemos energía, comunidad, bienestar y
            experiencias que inspiran confianza — a clientes, socios e
            inversionistas.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href={orderingLink()}>ORDER NOW</Button>
            <Button variant="secondary" href="/menu">
              VIEW MENU
            </Button>
            <Button variant="ghost" href="/rewards">
              JOIN REWARDS
            </Button>
            <Button variant="ghost" href="/app">
              DOWNLOAD APP
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto w-full max-w-lg"
        >
          <div className="animate-float shimmer-border rounded-[2rem] p-[3px]">
            <div className="overflow-hidden rounded-[1.85rem] bg-white shadow-2xl">
              <ProductImage
                name="Cherries Earthquake"
                image="/images/products/cherries-earthquake.webp"
                tier="signature"
                className="aspect-square w-full"
                priority
              />
            </div>
          </div>
          <div className="absolute -bottom-4 -left-4 rounded-2xl bg-yellow px-4 py-3 font-display text-sm font-extrabold text-ink shadow-lg md:-left-8">
            Official #1 Bowl
          </div>
          <div className="absolute -right-2 top-8 rounded-2xl bg-white/90 px-4 py-3 text-sm font-bold text-magenta shadow-lg backdrop-blur-sm md:-right-6">
            3+ Locations
          </div>
        </motion.div>
      </div>
    </section>
  );
}
