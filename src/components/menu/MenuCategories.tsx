"use client";

import { useCallback, useEffect, useState } from "react";
import { menuCategories, type MenuCategoryId } from "@/lib/menu-assets";
import { cn } from "@/lib/utils";

const categoryIds = menuCategories.map((c) => c.id);

function categoryFromHash(): MenuCategoryId {
  if (typeof window === "undefined") return menuCategories[0].id;
  const hash = window.location.hash.replace("#", "");
  return categoryIds.includes(hash as MenuCategoryId)
    ? (hash as MenuCategoryId)
    : menuCategories[0].id;
}

export function MenuCategories() {
  const [activeId, setActiveId] = useState<MenuCategoryId>(menuCategories[0].id);

  useEffect(() => {
    const onHashChange = () => setActiveId(categoryFromHash());
    const animationFrame = window.requestAnimationFrame(onHashChange);
    window.addEventListener("hashchange", onHashChange);
    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  const selectCategory = useCallback((id: MenuCategoryId) => {
    setActiveId(id);
    const next = `#${id}`;
    if (window.location.hash !== next) {
      window.history.replaceState(null, "", next);
    }
  }, []);

  const active = menuCategories.find((c) => c.id === activeId) ?? menuCategories[0];

  return (
    <>
      <nav
        aria-label="Categorías del menú"
        className="sticky top-[var(--site-header-height,7rem)] z-40 border-b border-gray-200 bg-white/95 backdrop-blur-sm"
      >
        <div className="mx-auto flex w-full max-w-[1920px] flex-wrap items-stretch justify-center gap-3 px-4 py-5 sm:gap-8 sm:px-8 sm:py-10 lg:px-10">
          {menuCategories.map((category) => {
            const selected = category.id === activeId;
            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                id={`menu-tab-${category.id}`}
                aria-selected={selected}
                aria-controls={`menu-panel-${category.id}`}
                onClick={() => selectCategory(category.id)}
                className={cn(
                  "font-display w-full min-w-0 flex-1 rounded-full px-6 py-4 text-2xl font-extrabold uppercase leading-none tracking-wide transition sm:w-auto sm:flex-none sm:px-20 sm:py-10 sm:text-[3rem] lg:text-[3.5rem]",
                  selected
                    ? "bg-magenta-neon text-white shadow-[0_16px_64px_rgba(255,20,147,0.35)]"
                    : "bg-gray-100 text-ink hover:bg-gray-200"
                )}
              >
                {category.label}
              </button>
            );
          })}
        </div>
      </nav>

      <section
        role="tabpanel"
        id={`menu-panel-${active.id}`}
        aria-labelledby={`menu-tab-${active.id}`}
        className="w-full bg-white"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={active.id}
          src={active.image}
          alt={active.alt}
          className="block h-auto w-full"
          width={3072}
          height={2048}
          decoding="async"
        />
      </section>
    </>
  );
}
