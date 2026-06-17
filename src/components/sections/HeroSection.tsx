"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ProductScene } from "@/components/ui/ProductScene";
import { orderingLink, siteConfig } from "@/lib/site";

export function HeroSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 120, damping: 22 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 22 });
  const rotateY = useTransform(springX, [-0.5, 0.5], [8, -8]);
  const rotateX = useTransform(springY, [-0.5, 0.5], [-6, 6]);

  return (
    <section className="gradient-hero noise-overlay relative min-h-[100svh] overflow-hidden pt-28 md:pt-32">
      <div className="spotlight-beam pointer-events-none absolute inset-0" />
      <div className="orb animate-pulse-glow -left-24 top-24 h-80 w-80 bg-magenta/30" />
      <div className="orb animate-pulse-glow right-0 top-1/3 h-96 w-96 bg-yellow/25" style={{ animationDelay: "1.5s" }} />
      <div className="orb bottom-0 left-1/3 h-72 w-72 bg-purple/25" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-24 md:grid-cols-2 md:gap-16 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className="badge-float-3d mb-6 inline-flex items-center gap-2 rounded-full border border-magenta/20 bg-gradient-to-r from-magenta/10 via-yellow/10 to-purple/10 px-5 py-2.5">
            <Sparkles className="h-4 w-4 text-magenta" />
            <span className="eyebrow-luxury !text-[0.65rem]">{siteConfig.slogan}</span>
          </div>

          <h1 className="heading-luxury text-depth text-5xl text-ink sm:text-6xl lg:text-7xl xl:text-[4.5rem]">
            La marca tropical que{" "}
            <span className="text-gradient-brand">conquista mercados</span>
          </h1>

          <p className="mt-7 max-w-xl font-display text-base font-medium leading-relaxed text-soft-ink md:text-lg md:leading-8">
            Experiencias premium de bienestar y sabor. Una cadena con visión
            global — construida para inspirar clientes, socios e inversionistas
            en cada mercado que conquistamos.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href={orderingLink()}>Order Now</Button>
            <Button variant="secondary" href="/menu">
              View Menu
            </Button>
            <Button variant="ghost" href="/rewards">
              Join Rewards
            </Button>
            <Button variant="ghost" href="/app">
              Download App
            </Button>
          </div>
        </motion.div>

        <div
          className="perspective-scene relative mx-auto w-full max-w-lg"
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
            className="badge-float-3d absolute -bottom-2 -left-2 rounded-2xl bg-gradient-to-br from-yellow to-yellow-deep px-5 py-3 md:-left-10"
          >
            <p className="font-display text-xs font-extrabold uppercase tracking-widest text-ink/70">
              Seismic Cinema
            </p>
            <p className="font-luxury text-lg font-bold text-ink">Official #1</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
