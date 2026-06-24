"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Smartphone, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { officialHeaderNav, routes } from "@/lib/site";
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
            href={routes.menu}
            className="site-header-btn-primary inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-full border-yellow bg-yellow font-display font-extrabold uppercase tracking-wide text-ink shadow-[0_4px_18px_rgba(255,207,0,0.4)] transition hover:bg-yellow-deep"
          >
            Order Now
          </Link>
        </nav>
      </div>

      {/* Mobile — hamburger */}
      <div className="flex w-full items-center justify-end px-4 py-4 lg:hidden">
        <button
          type="button"
          className={cn("shrink-0 rounded-md p-2", isHome ? "text-white" : "text-ink")}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-10 w-10" /> : <Menu className="h-10 w-10" />}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden transition-all lg:hidden",
          isHome ? "border-t border-white/15 bg-magenta-dark/95 backdrop-blur-md" : "border-t border-gray-200 bg-white",
          open ? "max-h-[90vh] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="max-h-[80vh] space-y-0.5 overflow-y-auto px-4 py-3">
          {officialHeaderNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                "block rounded-md px-3 py-3 font-display text-xl font-semibold",
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
              href={routes.menu}
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
