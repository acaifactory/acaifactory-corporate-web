"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { navLinks, siteConfig, orderingLink } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="glass-luxury mx-3 mt-3 rounded-2xl md:mx-6">
        <div className="flex items-center justify-between gap-4 px-4 py-3 md:px-6">
          <Logo size="md" />

          <nav className="hidden items-center gap-1 xl:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-3 py-2 font-display text-sm font-semibold text-soft-ink transition-all hover:bg-magenta/5 hover:text-magenta hover:shadow-contact"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <Button variant="ghost" href="/app" className="hidden lg:inline-flex">
              DOWNLOAD APP
            </Button>
            <Button href={orderingLink()} external={siteConfig.orderingUrl.startsWith("http")}>
              ORDER NOW
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex rounded-xl p-2 text-ink md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <div
          className={cn(
            "overflow-hidden transition-all duration-300 md:hidden",
            open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <nav className="space-y-1 border-t border-magenta/10 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-3 text-base font-medium text-ink hover:bg-magenta/5"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-4">
              <Button href={orderingLink()} className="w-full">
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
