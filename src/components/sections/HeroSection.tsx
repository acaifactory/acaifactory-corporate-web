"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ProductScene } from "@/components/ui/ProductScene";
import { orderingLink, siteConfig, isExternalUrl } from "@/lib/site";

export function HeroSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 120, damping: 22 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 22 });
  const rotateY = useTransform(springX, [-0.5, 0.5], [8, -8]);
  const rotateX = useTransform(springY, [-0.5, 0.5], [-6, 6]);

  return (
    <section className="gradient-hero noise-overlay relative min-h-[100svh] overflow-hidden pt-24 md:pt-28">
      <div className="spotlight-beam pointer-events-none absolute inset-0" />
      <div className="orb animate-pulse-glow -left-24 top-24 h-80 w-80 bg-magenta/35" />
      <div className="orb animate-pulse-glow right-0 top-1/3 h-96 w-96 bg-yellow/30" style={{ animationDelay: "1.5s" }} />
      <div className="orb bottom-0 left-1/3 h-72 w-72 bg-purple/30" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-28 md:grid-cols-2 md:gap-14 md:px-8 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className="badge-float-3d mb-5 inline-flex items-center gap-2 rounded-full border border-magenta/25 bg-gradient-to-r from-magenta/15 via-yellow/15 to-purple/15 px-4 py-2 md:mb-6 md:px-5 md:py-2.5">
            <Sparkles className="h-4 w-4 text-magenta" />
            <span className="eyebrow-luxury !text-[0.6rem] md:!text-[0.65rem]">{siteConfig.slogan}</span>
          </div>

          <h1 className="heading-luxury text-depth text-4xl text-ink sm:text-5xl lg:text-6xl xl:text-7xl">
            El açaí que{" "}
            <span className="text-gradient-brand">despierta tus sentidos</span>
          </h1>

          <p className="mt-5 font-display text-base font-medium leading-relaxed text-soft-ink md:mt-7 md:text-lg md:leading-8">
            Bowls cinematográficos. Ingredientes frescos. Energía tropical en cada
            cucharada. Esto no es solo comida — es la experiencia que te hace volver,
            compartir y pedir otra vez.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-3 md:mt-10">
            <Button
              href={orderingLink()}
              external={isExternalUrl(siteConfig.orderingUrl)}
              className="col-span-2 sm:col-span-1"
            >
              ORDER NOW
            </Button>
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

        <div
          className="perspective-scene relative mx-auto w-full max-w-md md:max-w-lg"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
            mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
          }}
          onMouseLeave={() => {
            mouseX.set(0);
            mouseY.set(0);
          }}
        >
          <motion.div style={{ rotateX, rotateY }} className="animate-float-3d relative">
            <div className="absolute -inset-6 rounded-[2.5rem] opacity-50 blur-2xl ring-glow" />
            <div className="shadow-hero-3d overflow-hidden rounded-[2rem]">
              <ProductScene
                productId="cherries-earthquake"
                name="Cherries Earthquake"
                image="/images/products/cherries-earthquake.webp"
                tier="signature"
                className="aspect-square w-full"
                priority
              />
            </div>
            <div className="pedestal-3d absolute -bottom-6 left-1/2 h-8 w-[85%] -translate-x-1/2 rounded-[100%] blur-sm" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="badge-float-3d absolute -bottom-2 -left-1 rounded-2xl bg-gradient-to-br from-yellow to-yellow-deep px-4 py-2.5 md:-left-8 md:px-5 md:py-3"
          >
            <p className="font-display text-[0.65rem] font-extrabold uppercase tracking-widest text-ink/70">
              #1 Signature
            </p>
            <p className="font-luxury text-base font-bold text-ink md:text-lg">Cherries Earthquake</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
