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
    <section className="relative isolate z-0 w-full shrink-0 bg-magenta-neon" aria-label="Home hero">
      {/* 16:9 desktop — full width; CLEAN image when delivered */}
      <div className="relative aspect-[16/9] w-full min-h-[540px]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${homeAssets.heroClean}')` }}
          role="img"
          aria-label="Açaí Factory — A Taste of Brasil"
        />

        {/* Logo — ~5in, below header (+2.5in from prior position) */}
        <Link
          href={routes.home}
          className="absolute left-[1.5%] top-[2.5in] z-[60] block shrink-0"
          aria-label="Açaí Factory — Home"
        >
          <Image
            src={homeImages.logo}
            alt={siteConfig.name}
            width={480}
            height={480}
            className="h-[5in] w-[5in] max-h-[min(5in,42vh)] max-w-[min(5in,42vh)] rounded-full object-cover shadow-[0_8px_40px_rgba(0,0,0,0.35)]"
            priority
          />
        </Link>

        {/* Primary CTAs — 25% smaller to clear hero image text */}
        <div className="absolute left-[5%] top-[68%] z-10 flex max-w-5xl flex-col gap-6 sm:flex-row sm:flex-wrap sm:items-center xl:left-[6%] xl:top-[69%]">
          <Link
            href={routes.menu}
            className="inline-flex min-h-[8.25rem] items-center justify-center gap-[1.125rem] rounded-full bg-yellow px-15 py-[1.875rem] font-display text-[2.25rem] font-extrabold uppercase tracking-wider text-ink shadow-[0_12px_48px_rgba(255,207,0,0.55)] transition hover:bg-yellow-deep xl:min-h-[9rem] xl:px-18 xl:py-9 xl:text-[2.8125rem]"
          >
            <Image
              src={homeImages.logo}
              alt=""
              width={96}
              height={96}
              className="h-15 w-15 rounded-full object-cover xl:h-18 xl:w-18"
              aria-hidden
            />
            ORDER NOW
          </Link>
          <Link
            href={routes.app}
            className="inline-flex min-h-[8.25rem] items-center justify-center gap-[1.125rem] rounded-full border-[3px] border-white bg-black/20 px-15 py-[1.875rem] font-display text-[2.25rem] font-extrabold uppercase tracking-wider text-white shadow-[0_0_40px_rgba(255,20,147,0.5)] backdrop-blur-sm transition hover:bg-white hover:text-magenta-neon xl:min-h-[9rem] xl:px-18 xl:py-9 xl:text-[2.8125rem]"
          >
            <Smartphone className="h-15 w-15 xl:h-18 xl:w-18" aria-hidden />
            DOWNLOAD APP
          </Link>
        </div>

        {/* Feature labels — below primary CTAs */}
        <ul className="absolute bottom-[6%] left-[5%] z-10 flex flex-wrap gap-x-10 gap-y-4 xl:left-[6%]">
          {features.map((f) => (
            <li
              key={f.label}
              className="flex items-center gap-3 font-display text-base font-extrabold uppercase tracking-wide text-white [text-shadow:0_2px_10px_rgba(0,0,0,0.85)] xl:text-lg"
            >
              <span className="h-3 w-3 shrink-0 rounded-full bg-magenta-neon shadow-[0_0_12px_rgba(255,20,147,0.7)]" />
              {f.label}
            </li>
          ))}
        </ul>

        {/* Floating ORDER NOW — bottom-right (guide layout) */}
        <Link
          href={routes.menu}
          className="text-ui-lg absolute bottom-[10%] right-[4%] z-10 inline-flex min-h-[60px] items-center justify-center gap-3 rounded-full bg-magenta-neon px-10 py-4 font-display text-lg font-extrabold uppercase tracking-wider text-white shadow-[0_0_28px_rgba(255,20,147,0.65)] transition hover:scale-105 xl:min-h-[68px] xl:px-12 xl:text-xl"
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

      {/* Social bar — full width magenta strip between hero and carousel (3× scale) */}
      <div className="flex w-full items-center justify-center gap-[4.5rem] bg-magenta-neon px-[4.5rem] py-12 lg:gap-[6rem] lg:py-[3.75rem]">
        <span className="font-display text-[3.375rem] font-extrabold uppercase leading-none tracking-widest text-white xl:text-[3.75rem]">
          Follow Us
        </span>
        <nav aria-label="Social media" className="flex items-center gap-12 lg:gap-[3.75rem]">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="flex h-36 w-36 items-center justify-center rounded-full border-[6px] border-white/90 text-white transition hover:bg-white hover:text-magenta-neon xl:h-[10.5rem] xl:w-[10.5rem]"
            >
              <SocialIcon name={link.label} className="h-[3.75rem] w-[3.75rem] xl:h-[4.5rem] xl:w-[4.5rem]" />
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}
