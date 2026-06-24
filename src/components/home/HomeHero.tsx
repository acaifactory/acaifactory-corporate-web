import Link from "next/link";
import Image from "next/image";
import { Smartphone } from "lucide-react";
import { homeAssets } from "@/lib/home-assets";
import { homeImages, routes, siteConfig, socialLinks } from "@/lib/site";

const features = [
  { label: "REAL FRUIT" },
  { label: "MADE FRESH DAILY" },
  { label: "NATURAL INGREDIENTS" },
] as const;

function SocialIcon({ name, className }: { name: string; className?: string }) {
  if (name === "Instagram") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  if (name === "Facebook") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H7v3h3v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1z" />
      </svg>
    );
  }
  if (name === "TikTok") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .55.04.8.11V9.01a6.27 6.27 0 0 0-.8-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.75a8.18 8.18 0 0 0 4.77 1.52V6.82a4.85 4.85 0 0 1-1.01-.13z" />
      </svg>
    );
  }
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M23 7.5a2.5 2.5 0 0 0-2.5-2.5h-15A2.5 2.5 0 0 0 3 7.5v9A2.5 2.5 0 0 0 5.5 19h15a2.5 2.5 0 0 0 2.5-2.5v-9zM10 15.5v-7l6 3.5-6 3.5z" />
    </svg>
  );
}

export function HomeHero() {
  return (
    <section className="relative isolate z-0 w-full shrink-0 bg-magenta-neon pt-[var(--site-header-height,64px)] lg:pt-0" aria-label="Home hero">
      {/* 16:9 desktop — full width; CLEAN image when delivered */}
      <div className="relative w-full overflow-hidden bg-magenta-neon lg:aspect-[16/9] lg:min-h-[540px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={homeAssets.heroClean}
          alt="Açaí Factory — A Taste of Brasil"
          className="block h-auto w-full lg:hidden"
          fetchPriority="high"
          decoding="async"
        />
        <div
          className="absolute inset-0 hidden bg-cover bg-center bg-no-repeat lg:block"
          style={{ backgroundImage: `url('${homeAssets.heroClean}')` }}
          role="img"
          aria-label="Açaí Factory — A Taste of Brasil"
        />

        {/* Logo — ~5in, below header (+2.5in from prior position) */}
        <Link
          href={routes.home}
          className="absolute left-4 top-20 z-[60] hidden shrink-0 sm:left-6 sm:top-24 lg:left-[1.5%] lg:top-[2.5in] lg:block"
          aria-label="Açaí Factory — Home"
        >
          <Image
            src={homeImages.logo}
            alt={siteConfig.name}
            width={480}
            height={480}
            className="h-28 w-28 rounded-full object-cover shadow-[0_8px_40px_rgba(0,0,0,0.35)] sm:h-36 sm:w-36 lg:h-[5in] lg:w-[5in] lg:max-h-[min(5in,42vh)] lg:max-w-[min(5in,42vh)]"
            priority
          />
        </Link>

        {/* Primary CTAs — larger and lowered to clear hero image text */}
        <div
          className="home-hero-primary-actions absolute inset-x-4 z-10 hidden max-w-none flex-col items-stretch gap-3 sm:left-[5%] sm:right-auto sm:flex-row sm:flex-nowrap sm:items-center sm:gap-5 lg:flex lg:gap-8 xl:left-[6%]"
        >
          <Link
            href={routes.menu}
            className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-yellow px-6 py-4 font-display text-lg font-extrabold uppercase tracking-wider text-ink shadow-[0_12px_48px_rgba(255,207,0,0.55)] transition hover:bg-yellow-deep sm:min-h-16 sm:px-8 sm:text-xl lg:min-h-[9rem] lg:gap-[1.35rem] lg:px-[4.5rem] lg:py-[2.25rem] lg:text-[2.65rem] xl:min-h-[9.75rem] xl:px-[5.25rem] xl:py-[2.5rem] xl:text-[3.1rem]"
          >
            <Image
              src={homeImages.logo}
              alt=""
              width={96}
              height={96}
              className="h-8 w-8 rounded-full object-cover sm:h-10 sm:w-10 lg:h-[4rem] lg:w-[4rem] xl:h-[5rem] xl:w-[5rem]"
              aria-hidden
            />
            ORDER NOW
          </Link>
          <Link
            href={routes.app}
            className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border-[3px] border-white bg-black/20 px-6 py-4 font-display text-lg font-extrabold uppercase tracking-wider text-white shadow-[0_0_40px_rgba(255,20,147,0.5)] backdrop-blur-sm transition hover:bg-white hover:text-magenta-neon sm:min-h-16 sm:px-8 sm:text-xl lg:min-h-[9rem] lg:gap-[1.35rem] lg:px-[4.5rem] lg:py-[2.25rem] lg:text-[2.65rem] xl:min-h-[9.75rem] xl:px-[5.25rem] xl:py-[2.5rem] xl:text-[3.1rem]"
          >
            <Smartphone className="h-8 w-8 sm:h-10 sm:w-10 lg:h-[4rem] lg:w-[4rem] xl:h-[5rem] xl:w-[5rem]" aria-hidden />
            DOWNLOAD APP
          </Link>
        </div>

        {/* Feature labels — below primary CTAs */}
        <ul className="absolute bottom-[10rem] left-4 right-4 z-10 hidden flex-wrap gap-x-5 gap-y-3 sm:bottom-[21%] sm:left-[5%] sm:right-auto sm:gap-x-10 sm:gap-y-4 lg:flex xl:left-[6%]">
          {features.map((f) => (
            <li
              key={f.label}
              className="flex items-center gap-2 font-display text-xs font-extrabold uppercase tracking-wide text-white [text-shadow:0_2px_10px_rgba(0,0,0,0.85)] sm:gap-3 sm:text-base xl:text-lg"
            >
              <span className="h-3 w-3 shrink-0 rounded-full bg-magenta-neon shadow-[0_0_12px_rgba(255,20,147,0.7)]" />
              {f.label}
            </li>
          ))}
        </ul>

        {/* Floating ORDER NOW — bottom-right (guide layout) */}
        <Link
          href={routes.menu}
          className="text-ui-lg absolute right-4 top-20 z-10 hidden min-h-12 items-center justify-center gap-2 rounded-full bg-magenta-neon px-5 py-3 font-display text-sm font-extrabold uppercase tracking-wider text-white shadow-[0_0_28px_rgba(255,20,147,0.65)] transition hover:scale-105 sm:bottom-[10%] sm:right-[4%] sm:top-auto sm:min-h-[60px] sm:gap-3 sm:px-10 sm:py-4 sm:text-lg lg:inline-flex xl:min-h-[68px] xl:px-12 xl:text-xl"
        >
          <Image
            src={homeImages.logo}
            alt=""
            width={28}
            height={28}
            className="h-7 w-7 rounded-full object-cover"
            aria-hidden
          />
          ORDER NOW
        </Link>
      </div>

      <div className="bg-magenta-neon px-4 py-5 lg:hidden">
        <div className="grid gap-3 sm:grid-cols-2">
          <Link
            href={routes.menu}
            className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-yellow px-5 py-3 font-display text-base font-extrabold uppercase tracking-wider text-ink shadow-[0_8px_24px_rgba(255,207,0,0.4)] transition hover:bg-yellow-deep"
          >
            <Image
              src={homeImages.logo}
              alt=""
              width={40}
              height={40}
              className="h-8 w-8 rounded-full object-cover"
              aria-hidden
            />
            ORDER NOW
          </Link>
          <Link
            href={routes.app}
            className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border-2 border-white bg-black/15 px-5 py-3 font-display text-base font-extrabold uppercase tracking-wider text-white shadow-[0_0_24px_rgba(255,20,147,0.35)] backdrop-blur-sm transition hover:bg-white hover:text-magenta-neon"
          >
            <Smartphone className="h-7 w-7" aria-hidden />
            DOWNLOAD APP
          </Link>
        </div>

        <ul className="mt-4 grid gap-2 text-white sm:grid-cols-3">
          {features.map((f) => (
            <li
              key={f.label}
              className="flex items-center gap-2 font-display text-sm font-extrabold uppercase tracking-wide [text-shadow:0_2px_10px_rgba(0,0,0,0.4)]"
            >
              <span className="h-3 w-3 shrink-0 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.65)]" />
              {f.label}
            </li>
          ))}
        </ul>
      </div>

      {/* Social bar — full width magenta strip between hero and carousel (3× scale) */}
      <div className="flex w-full flex-col items-center justify-center gap-5 bg-magenta-neon px-4 py-7 sm:flex-row sm:gap-8 sm:px-8 lg:gap-[6rem] lg:px-[4.5rem] lg:py-[3.75rem]">
        <span className="font-display text-3xl font-extrabold uppercase leading-none tracking-widest text-white sm:text-4xl lg:text-[3.375rem] xl:text-[3.75rem]">
          Follow Us
        </span>
        <nav aria-label="Social media" className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-[3.75rem]">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              title={link.label}
              className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-full border-[4px] border-white/90 text-white transition hover:scale-105 hover:bg-white hover:text-magenta-neon focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-white sm:h-20 sm:w-20 lg:h-36 lg:w-36 lg:border-[6px] xl:h-[10.5rem] xl:w-[10.5rem]"
            >
              <SocialIcon name={link.label} className="h-7 w-7 sm:h-9 sm:w-9 lg:h-[3.75rem] lg:w-[3.75rem] xl:h-[4.5rem] xl:w-[4.5rem]" />
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}
