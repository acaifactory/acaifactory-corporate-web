"use client";

import { Button } from "@/components/ui/Button";
import { orderingLink, siteConfig, isExternalUrl } from "@/lib/site";

/** Popeyes-style persistent mobile conversion bar */
export function MobileOrderBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-magenta/15 bg-white/95 p-3 shadow-[0_-12px_40px_rgba(236,0,140,0.12)] backdrop-blur-xl md:hidden">
      <div className="mx-auto flex max-w-lg gap-2">
        <Button
          href={orderingLink()}
          external={isExternalUrl(siteConfig.orderingUrl)}
          className="flex-1 !py-3.5"
        >
          ORDER NOW
        </Button>
        <Button variant="secondary" href="/app" className="!px-4 !py-3.5">
          APP
        </Button>
      </div>
    </div>
  );
}
