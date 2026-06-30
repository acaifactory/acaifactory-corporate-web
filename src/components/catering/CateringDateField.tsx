"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";

const WEEKDAYS = ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"] as const;
const CALENDAR_WIDTH = 280;
const CALENDAR_HEIGHT = 320;
const MONTHS = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
] as const;

function pad(value: number) {
  return String(value).padStart(2, "0");
}

function toIsoDate(year: number, month: number, day: number) {
  return `${year}-${pad(month + 1)}-${pad(day)}`;
}

function formatDisplay(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  if (!y || !m || !d) return "";
  return `${pad(d)}/${pad(m)}/${y}`;
}

function buildMonthDays(year: number, month: number) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: Array<number | null> = [];

  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let day = 1; day <= daysInMonth; day++) cells.push(day);

  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}

function getCalendarScale() {
  if (typeof window === "undefined") {
    return 5;
  }

  if (window.innerWidth < 640) {
    return Math.min(1.18, Math.max(1, (window.innerWidth - 24) / CALENDAR_WIDTH));
  }

  if (window.innerWidth < 1024) {
    return 1.45;
  }

  return 5;
}

export function CateringDateField({
  value,
  onChange,
  fieldClass,
  required,
}: {
  value: string;
  onChange: (value: string) => void;
  fieldClass: string;
  required?: boolean;
}) {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0, scale: 1 });
  const today = new Date();
  const parsed = value ? new Date(`${value}T00:00:00`) : null;
  const [viewYear, setViewYear] = useState(parsed?.getFullYear() ?? today.getFullYear());
  const [viewMonth, setViewMonth] = useState(parsed?.getMonth() ?? today.getMonth());

  const days = useMemo(() => buildMonthDays(viewYear, viewMonth), [viewYear, viewMonth]);

  useEffect(() => {
    if (!open || !triggerRef.current) return;

    const updatePosition = () => {
      const rect = triggerRef.current!.getBoundingClientRect();
      const scale = getCalendarScale();
      const scaledWidth = CALENDAR_WIDTH * scale;
      const scaledHeight = CALENDAR_HEIGHT * scale;
      let left = rect.left + rect.width / 2 - scaledWidth / 2;
      let top = rect.bottom + 8;

      left = Math.max(8, Math.min(left, window.innerWidth - scaledWidth - 8));
      if (top + scaledHeight > window.innerHeight - 8) {
        top = Math.max(8, rect.top - scaledHeight - 8);
      }

      setPosition({ top, left, scale });
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);
    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      const target = event.target as Node;
      if (triggerRef.current?.contains(target) || popoverRef.current?.contains(target)) return;
      setOpen(false);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  function selectDay(day: number) {
    onChange(toIsoDate(viewYear, viewMonth, day));
    setOpen(false);
  }

  function shiftMonth(delta: number) {
    const next = new Date(viewYear, viewMonth + delta, 1);
    setViewYear(next.getFullYear());
    setViewMonth(next.getMonth());
  }

  const calendar = open ? (
    <div
      ref={popoverRef}
      className="fixed z-[300]"
      style={{
        top: position.top,
        left: position.left,
        width: CALENDAR_WIDTH * position.scale,
        height: CALENDAR_HEIGHT * position.scale,
      }}
      role="dialog"
      aria-label="Seleccionar fecha del evento"
    >
      <div
        className="h-full w-full origin-top-left rounded-xl border border-black/10 bg-white p-3 shadow-[0_20px_50px_rgba(26,10,20,0.25)]"
        style={{
          width: CALENDAR_WIDTH,
          height: CALENDAR_HEIGHT,
          transform: `scale(${position.scale})`,
        }}
      >
        <div className="mb-2 flex items-center justify-between">
          <button
            type="button"
            aria-label="Mes anterior"
            onClick={() => shiftMonth(-1)}
            className="rounded-md p-1 text-magenta-neon hover:bg-magenta-neon/10"
          >
            <ChevronLeft className="h-4 w-4" strokeWidth={2.5} />
          </button>
          <p className="font-display text-sm font-bold text-ink">
            {MONTHS[viewMonth]} {viewYear}
          </p>
          <button
            type="button"
            aria-label="Mes siguiente"
            onClick={() => shiftMonth(1)}
            className="rounded-md p-1 text-magenta-neon hover:bg-magenta-neon/10"
          >
            <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
          </button>
        </div>

        <div className="mb-1 grid grid-cols-7 gap-1">
          {WEEKDAYS.map((day) => (
            <div key={day} className="text-center text-[10px] font-bold uppercase text-soft-ink">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {days.map((day, index) => {
            if (!day) return <div key={`empty-${index}`} className="h-8" />;

            const iso = toIsoDate(viewYear, viewMonth, day);
            const isSelected = value === iso;
            const isToday =
              day === today.getDate() && viewMonth === today.getMonth() && viewYear === today.getFullYear();

            return (
              <button
                key={iso}
                type="button"
                onClick={() => selectDay(day)}
                className={cn(
                  "flex h-8 items-center justify-center rounded-md text-xs font-bold transition",
                  isSelected
                    ? "bg-magenta-neon text-white"
                    : isToday
                      ? "border border-magenta-neon text-magenta-neon"
                      : "text-ink hover:bg-magenta-neon/10"
                )}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-haspopup="dialog"
        data-required={required || undefined}
        onClick={() => setOpen((current) => !current)}
        className={cn(
          fieldClass,
          "cursor-pointer text-left font-bold",
          !value && "text-soft-ink"
        )}
      >
        {value ? formatDisplay(value) : "Fecha del evento"}
      </button>
      {typeof document !== "undefined" ? createPortal(calendar, document.body) : null}
    </>
  );
}
