import Link from "next/link";
import { legalLinks, siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-magenta-neon/15 bg-gray-50">
      <div className="mx-auto flex max-w-[1900px] flex-col gap-9 px-5 py-12 md:px-8 lg:py-14">
        <div className="text-center lg:text-left">
          <p className="font-display text-base font-black leading-none text-ink sm:text-lg lg:text-[clamp(25pt,2.8vw,36pt)]">
            {siteConfig.name}
          </p>
          <p className="mt-2 text-xs font-semibold leading-snug text-soft-ink sm:text-sm lg:mt-3 lg:text-[clamp(18pt,2vw,26pt)]">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
        <nav
          aria-label="Legal information"
          className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:gap-4 xl:grid-cols-4"
        >
          {legalLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-magenta-neon/20 bg-white px-5 py-3 text-center text-base font-black leading-tight text-purple-deep shadow-[0_8px_24px_rgba(74,18,136,0.08)] transition hover:border-magenta-neon hover:bg-magenta-neon hover:text-white focus:outline-none focus:ring-4 focus:ring-magenta-neon/20 sm:text-lg lg:min-h-[88px] lg:px-8 lg:py-5 lg:text-[clamp(20pt,2.35vw,36pt)] lg:focus:ring-8"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
