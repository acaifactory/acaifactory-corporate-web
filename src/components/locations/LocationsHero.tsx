"use client";

import type { ReactNode } from "react";
import { locationsAssets } from "@/lib/locations-assets";
import { routes } from "@/lib/site";
import { cn } from "@/lib/utils";

function LocationCta({
  href,
  variant,
  children,
  ariaLabel,
  onClick,
  className,
}: {
  href?: string;
  variant: "pink" | "yellow";
  children: ReactNode;
  ariaLabel: string;
  onClick?: () => void;
  className?: string;
}) {
  const styles = cn(
    "font-display inline-flex min-h-[2.5rem] w-full items-center justify-center rounded-full px-4 py-4 text-center text-[clamp(0.9rem,1.9vw,1.7rem)] font-extrabold uppercase leading-none tracking-wide transition hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-magenta-neon sm:min-h-[3rem] sm:px-6 sm:py-5 sm:text-[clamp(1.1rem,2.1vw,1.9rem)]",
    variant === "pink"
      ? "bg-magenta-neon text-white shadow-[0_4px_18px_rgba(255,20,147,0.45)]"
      : "bg-yellow text-ink shadow-[0_4px_18px_rgba(255,207,0,0.45)]",
    className
  );

  if (onClick) {
    return (
      <button type="button" aria-label={ariaLabel} onClick={onClick} className={styles}>
        {children}
      </button>
    );
  }

  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className={styles}
      {...(href?.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

const storeColumns = [
  { left: "5.5%", width: "27%" },
  { left: "36.5%", width: "27%" },
  { left: "67.5%", width: "27%" },
] as const;

export function LocationsHero() {
  const scrollToStores = () => {
    document.getElementById("locations-stores")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section aria-label="Ubicaciones Açaí Factory" className="relative w-full bg-white">
      <span id="locations-stores" className="absolute left-0 top-[31%] h-px w-px" aria-hidden />

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={locationsAssets.hero}
        alt="Açaí Factory Ubicaciones — Bayamón, Cataño y Corozal. Encuentra tu próximo bowl favorito."
        className="block h-auto w-full"
        width={locationsAssets.heroWidth}
        height={locationsAssets.heroHeight}
        decoding="async"
        fetchPriority="high"
      />

      {/* Hero CTAs */}
      <div className="absolute left-[5%] top-[16.8%] flex w-[44%] gap-[2.5%]">
        <LocationCta variant="pink" ariaLabel="Ver ubicaciones" onClick={scrollToStores}>
          Ver ubicaciones &gt;
        </LocationCta>
        <LocationCta href={routes.menu} variant="yellow" ariaLabel="Ordenar ahora">
          Ordenar ahora &gt;
        </LocationCta>
      </div>

      {/* Store card CTAs — below phone line, in white footer of each card */}
      {locationsAssets.stores.map((store, index) => (
        <div
          key={store.id}
          className="absolute flex gap-[2%]"
          style={{
            left: storeColumns[index].left,
            top: "57.2%",
            width: storeColumns[index].width,
          }}
        >
          <LocationCta
            href={store.directionsUrl}
            variant="pink"
            ariaLabel={`Cómo llegar a ${store.city}`}
          >
            Get directions &gt;
          </LocationCta>
          <LocationCta
            href={store.orderHref}
            variant="yellow"
            ariaLabel={`Ordenar desde ${store.city}`}
          >
            Order from here &gt;
          </LocationCta>
        </div>
      ))}
    </section>
  );
}
