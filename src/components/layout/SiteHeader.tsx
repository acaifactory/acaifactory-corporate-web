"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Smartphone, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { homeImages, officialHeaderNav, routes, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const navLinkClass = (isHome: boolean, active: boolean) =>
  cn(
    "site-header-link inline-flex shrink-0 items-center whitespace-nowrap font-display font-extrabold uppercase transition-colors",
    isHome
      ? active
        ? "text-magenta-neon [text-shadow:0_0_12px_rgba(255,20,147,0.55)]"
        : "text-white [text-shadow:0_1px_6px_rgba(0,0,0,0.85)] hover:text-yellow"
      : active
        ? "text-magenta-neon"
        : "text-soft-ink hover:text-ink"
  );

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header
      className={cn(
        "site-header fixed top-0 z-50",
        isHome ? "bg-black/45 backdrop-blur-md" : "border-b border-gray-200 bg-white shadow-sm"
      )}
    >
      {/* Desktop — ONE line, starts 1in from left edge, full viewport width */}
      <div className="site-header-bar hidden lg:block">
        <nav className="site-header-nav" aria-label="Main navigation">
          {officialHeaderNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={navLinkClass(isHome, pathname === link.href)}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href={routes.app}
            className={cn(
              "site-header-btn-outline inline-flex shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-full font-display font-extrabold uppercase tracking-wide transition",
              isHome
                ? "border-white text-white hover:bg-white hover:text-magenta-neon"
                : "border-magenta-neon text-magenta-neon hover:bg-magenta-neon hover:text-white"
            )}
          >
            <Smartphone className="site-header-btn-icon shrink-0" aria-hidden />
            Download App
          </Link>

          <Link
            href={routes.order}
            className="site-header-btn-primary inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-full border-yellow bg-yellow font-display font-extrabold uppercase tracking-wide text-ink shadow-[0_4px_18px_rgba(255,207,0,0.4)] transition hover:bg-yellow-deep"
          >
            Order Now
          </Link>
        </nav>
      </div>

      {/* Mobile — hamburger */}
      <div className="flex h-[var(--site-header-height,72px)] w-full items-center justify-between px-4 py-2 lg:hidden">
        <Link
          href={routes.home}
          className="flex min-h-12 min-w-12 items-center gap-2 rounded-full focus:outline-none focus:ring-4 focus:ring-magenta-neon/30"
          aria-label="Açaí Factory — Home"
          onClick={() => setOpen(false)}
        >
          <Image
            src={homeImages.logo}
            alt={siteConfig.name}
            width={48}
            height={48}
            className="h-12 w-12 rounded-full object-cover shadow-[0_4px_16px_rgba(0,0,0,0.25)]"
            priority
          />
        </Link>
        <button
          type="button"
          className={cn(
            "inline-flex min-h-12 min-w-12 shrink-0 items-center justify-center rounded-full border-2 p-2 shadow-sm",
            isHome
              ? "border-white/70 bg-black/20 text-white"
              : "border-magenta-neon/25 bg-white text-ink"
          )}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden transition-all lg:hidden",
          isHome ? "border-t border-white/15 bg-magenta-dark/95 backdrop-blur-md" : "border-t border-gray-200 bg-white",
          open ? "max-h-[90vh] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="max-h-[calc(100dvh-var(--site-header-height,72px))] space-y-1 overflow-y-auto px-4 py-3">
          {officialHeaderNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                "block rounded-2xl px-4 py-3.5 font-display text-xl font-extrabold uppercase tracking-wide",
                isHome ? "text-white hover:bg-white/10" : "text-ink hover:bg-gray-100"
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4 flex flex-col gap-2 border-t border-white/20 pt-4">
            <Link
              href={routes.app}
              onClick={() => setOpen(false)}
              className={cn(
                "block rounded-full border-2 px-6 py-4 text-center font-display text-xl font-extrabold uppercase tracking-wider",
                isHome ? "border-white text-white" : "border-magenta-neon text-magenta-neon"
              )}
            >
              Download App
            </Link>
            <Link
              href={routes.order}
              onClick={() => setOpen(false)}
              className="block rounded-full bg-yellow px-6 py-4 text-center font-display text-xl font-extrabold uppercase tracking-wider text-ink"
            >
              Order Now
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
