"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { homeCarouselSlides } from "@/lib/home-assets";
import { cn } from "@/lib/utils";

export function HomeCarousel() {
  const [index, setIndex] = useState(0);

  const slides = homeCarouselSlides;

  const next = useCallback(() => {
    if (slides.length === 0) return;
    setIndex((i) => (i + 1) % slides.length);
  }, [slides.length]);

  const prev = useCallback(() => {
    if (slides.length === 0) return;
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (slides.length === 0) return;
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [next, slides.length]);

  if (slides.length === 0) {
    return null;
  }

  const slide = slides[index];

  return (
    <section className="relative isolate z-10 w-full bg-black" aria-label="Home carousel">
      <Link
        href={slide.href}
        className="relative block aspect-[16/9] w-full min-h-[220px] overflow-hidden sm:min-h-[320px] lg:min-h-[540px]"
        aria-label={`Ver más: ${slide.alt}`}
      >
        {slides.map((item, i) => (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            key={item.id}
            src={item.image}
            alt={item.alt}
            className={cn(
              "absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-500",
              i === index ? "opacity-100" : "pointer-events-none opacity-0"
            )}
            loading={i === 0 ? "eager" : "lazy"}
            decoding="async"
          />
        ))}
      </Link>

      {slides.length > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label="Slide anterior"
            className="absolute left-2 top-1/2 z-20 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-magenta-neon text-white shadow-[0_0_14px_rgba(255,20,147,0.45)] transition hover:scale-105 sm:left-4 sm:h-11 sm:w-11 md:h-12 md:w-12 lg:left-6 lg:h-16 lg:w-16 lg:shadow-[0_0_28px_rgba(255,20,147,0.65)] xl:left-8 xl:h-20 xl:w-20"
          >
            <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-9 lg:w-9 xl:h-11 xl:w-11" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Slide siguiente"
            className="absolute right-2 top-1/2 z-20 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-magenta-neon text-white shadow-[0_0_14px_rgba(255,20,147,0.45)] transition hover:scale-105 sm:right-4 sm:h-11 sm:w-11 md:h-12 md:w-12 lg:right-6 lg:h-16 lg:w-16 lg:shadow-[0_0_28px_rgba(255,20,147,0.65)] xl:right-8 xl:h-20 xl:w-20"
          >
            <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-9 lg:w-9 xl:h-11 xl:w-11" />
          </button>

          <div className="absolute bottom-2 left-1/2 z-20 flex -translate-x-1/2 gap-1 sm:bottom-5 sm:gap-2 lg:bottom-8 lg:gap-3">
            {slides.map((item, i) => (
              <button
                key={item.id}
                type="button"
                aria-label={`Ir al slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={cn(
                  "h-1.5 rounded-full transition-all sm:h-2.5 lg:h-3.5",
                  i === index
                    ? "w-5 bg-yellow shadow-[0_0_8px_rgba(255,207,0,0.55)] sm:w-9 lg:w-12 lg:shadow-[0_0_16px_rgba(255,207,0,0.75)]"
                    : "w-1.5 bg-white/75 hover:bg-white sm:w-2.5 lg:w-3.5"
                )}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
