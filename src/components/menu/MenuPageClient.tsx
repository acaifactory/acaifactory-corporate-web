"use client";

import { useEffect, useState } from "react";
import { SectionShell } from "@/components/ui/SectionShell";
import { ProductCard } from "@/components/ui/ProductCard";
import { menuCategories, getItemsByCategory } from "@/lib/data";
import { cn } from "@/lib/utils";

function slugify(cat: string) {
  return cat.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and");
}

export default function MenuPageClient() {
  const [active, setActive] = useState(menuCategories[0]);

  useEffect(() => {
    const sections = menuCategories.map((c) => document.getElementById(slugify(c)));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          const cat = menuCategories.find((c) => slugify(c) === visible.target.id);
          if (cat) setActive(cat);
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5] }
    );
    sections.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="pt-24 md:pt-28">
      <SectionShell
        eyebrow="Menú completo"
        title="Elige tu experiencia"
        subtitle="Signature, premium, tropical y más — cada bowl es un protagonista. Navega por categoría y encuentra tu próxima obsesión."
        className="mesh-luxury !pb-8"
      />

      {/* Popeyes-style sticky category nav */}
      <div className="sticky top-[4.5rem] z-40 border-b border-magenta/10 bg-white/90 px-4 py-3 backdrop-blur-xl md:top-[5rem]">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {menuCategories.map((category) => (
            <a
              key={category}
              href={`#${slugify(category)}`}
              className={cn(
                "shrink-0 rounded-full px-4 py-2 font-display text-xs font-bold uppercase tracking-wider transition-all md:text-sm",
                active === category
                  ? "bg-gradient-to-r from-magenta to-purple text-white shadow-glow-magenta"
                  : "bg-cream text-soft-ink hover:bg-magenta/10 hover:text-magenta"
              )}
            >
              {category}
            </a>
          ))}
        </div>
      </div>

      <SectionShell className="!pt-8 mesh-luxury">
        <div className="space-y-16">
          {menuCategories.map((category) => {
            const items = getItemsByCategory(category);
            if (!items.length) return null;
            return (
              <div key={category} id={slugify(category)} className="scroll-mt-36">
                <h2 className="heading-luxury mb-6 text-3xl text-ink md:text-4xl">
                  {category}
                </h2>
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {items.map((item) => (
                    <ProductCard key={item.id} item={item} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </SectionShell>
    </div>
  );
}
