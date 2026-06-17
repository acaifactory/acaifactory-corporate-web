"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function FAQAccordion({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={item.q} className="overflow-hidden rounded-2xl bg-white shadow-sm">
          <button
            type="button"
            className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-ink"
            onClick={() => setOpen(open === i ? null : i)}
          >
            {item.q}
            <ChevronDown
              className={cn(
                "h-5 w-5 shrink-0 text-magenta transition-transform",
                open === i && "rotate-180"
              )}
            />
          </button>
          {open === i && (
            <div className="border-t border-magenta/10 px-5 py-4 text-sm leading-relaxed text-soft-ink">
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
