"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { navLinks, siteConfig, orderingLink, isExternalUrl } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "glass-luxury mx-2 mt-2 rounded-2xl transition-shadow duration-300 md:mx-5",
          scrolled && "shadow-floating"
        )}
      >
        <div className="flex items-center justify-between gap-3 px-3 py-2.5 md:px-5 md:py-3">
          <Logo size="md" />

          {/* Desktop nav — lg+ */}
          <nav className="hidden flex-1 items-center justify-center gap-0.5 lg:flex">
            {navLinks.slice(0, 8).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-2.5 py-2 font-display text-[0.8rem] font-semibold text-soft-ink transition-all hover:bg-magenta/8 hover:text-magenta xl:px-3"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <Button variant="ghost" href="/app" className="hidden !px-4 !py-2.5 text-xs lg:inline-flex">
              DOWNLOAD APP
            </Button>
            <Button
              href={orderingLink()}
              external={isExternalUrl(siteConfig.orderingUrl)}
              className="!px-5 !py-2.5 text-xs"
            >
              ORDER NOW
            </Button>
          </div>

          {/* Mobile + tablet menu */}
          <button
            type="button"
            className="inline-flex rounded-xl p-2.5 text-ink lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <div
          className={cn(
            "overflow-hidden transition-all duration-300 lg:hidden",
            open ? "max-h-[85vh] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <nav className="max-h-[70vh] space-y-0.5 overflow-y-auto border-t border-magenta/10 px-3 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 font-display font-semibold text-ink hover:bg-gradient-to-r hover:from-magenta/10 hover:to-yellow/10"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 border-t border-magenta/10 pt-4">
              <Button
                href={orderingLink()}
                external={isExternalUrl(siteConfig.orderingUrl)}
                className="w-full"
              >
                ORDER NOW
              </Button>
              <Button variant="secondary" href="/app" className="w-full">
                DOWNLOAD APP
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
