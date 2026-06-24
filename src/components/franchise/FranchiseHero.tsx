"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { ArrowRight, BookOpenText, Languages, X } from "lucide-react";
import { franchiseAssets } from "@/lib/franchise-assets";

type StoryId = keyof typeof franchiseAssets.stories;
type Language = "es" | "en";
const mobileActionButtons = [
  {
    id: "invest",
    label: "Quiero invertir",
    href: "/contact?interest=franchise",
  },
  {
    id: "learn-more",
    label: "Conoce más",
    href: "/contact?interest=franchise",
  },
] as const;

export function FranchiseHero() {
  const [activeStory, setActiveStory] = useState<StoryId | null>(null);
  const [language, setLanguage] = useState<Language>("es");
  const dialogTitleId = useId();

  useEffect(() => {
    if (!activeStory) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const closeWithEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveStory(null);
      }
    };

    window.addEventListener("keydown", closeWithEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeWithEscape);
    };
  }, [activeStory]);

  const story = activeStory ? franchiseAssets.stories[activeStory] : null;
  const content = story ? story[language] : null;

  return (
    <section
      aria-label="Franquicias Açaí Factory"
      className="relative w-full bg-white"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={franchiseAssets.hero}
        alt="Franquicias Açaí Factory — más que açaí, es un estilo de vida. Conoce nuestros tres modelos de franquicia."
        className="block h-auto w-full"
        width={franchiseAssets.heroWidth}
        height={franchiseAssets.heroHeight}
        decoding="async"
        fetchPriority="high"
      />

      {franchiseAssets.buttons.map((button) => (
        <div
          key={button.id}
          className="absolute z-20 hidden box-border lg:block"
          style={{
            left: button.left,
            top: button.top,
            width: `${button.widthPercent}%`,
            height: `${button.heightPercent}%`,
          }}
          data-franchise-ui={`button-${button.id}`}
        >
          <Link
            href={button.href}
            className="flex h-full w-full items-center justify-center gap-[0.35em] rounded-[0.45em] bg-yellow px-[0.55em] font-display font-extrabold uppercase leading-none tracking-tight text-ink shadow-[0_4px_14px_rgba(245,183,0,0.45)] transition hover:bg-yellow-deep focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-magenta-neon"
            style={{
              fontSize: `max(${button.fontPt}pt, ${button.desktopFontVw}vw)`,
            }}
            aria-label={`${button.label} — ${button.id.replaceAll("-", " ")}`}
          >
            <span className="whitespace-nowrap">{button.label}</span>
            <span className="flex h-[1.25em] w-[1.25em] shrink-0 items-center justify-center rounded-full border-[0.12em] border-current">
              <ArrowRight
                className="h-[0.75em] w-[0.75em]"
                strokeWidth={3}
                aria-hidden
              />
            </span>
          </Link>
        </div>
      ))}

      {franchiseAssets.storyButtons.map((button) => (
        <button
          key={button.id}
          type="button"
          onClick={() => {
            setLanguage("es");
            setActiveStory(button.id as StoryId);
          }}
          className="absolute z-30 hidden flex-col items-center justify-center rounded-[0.75em] border-[0.16em] border-magenta-neon bg-magenta-neon px-[0.65em] text-center font-display font-extrabold uppercase leading-[1.05] text-white shadow-[0_8px_24px_rgba(34,5,50,0.38)] transition hover:-translate-y-0.5 hover:bg-magenta-dark focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-white lg:flex"
          style={{
            top: button.top,
            right: button.right,
            width: button.width,
            height: button.height,
            fontSize: "clamp(20pt, 2.3vw, 36pt)",
          }}
          data-franchise-ui={`story-${button.id}`}
        >
          <span className="whitespace-nowrap">{button.label}</span>
          <span className="mt-[0.12em] whitespace-nowrap text-[0.72em]">
            {button.secondaryLabel}
          </span>
        </button>
      ))}

      <div className="grid gap-4 bg-cream px-4 py-6 sm:grid-cols-2 lg:hidden">
        {mobileActionButtons.map((button) => (
          <Link
            key={button.id}
            href={button.href}
            className="flex min-h-16 items-center justify-center gap-3 rounded-full bg-yellow px-5 py-4 text-center font-display text-lg font-black uppercase leading-tight text-ink shadow-[0_10px_28px_rgba(245,183,0,0.28)]"
            aria-label={`${button.label} — ${button.id.replaceAll("-", " ")}`}
          >
            {button.label}
            <ArrowRight className="h-6 w-6 shrink-0" strokeWidth={3} aria-hidden />
          </Link>
        ))}
        {franchiseAssets.storyButtons.map((button) => (
          <button
            key={button.id}
            type="button"
            onClick={() => {
              setLanguage("es");
              setActiveStory(button.id as StoryId);
            }}
            className="flex min-h-16 flex-col items-center justify-center rounded-full bg-magenta-neon px-5 py-4 text-center font-display text-lg font-black uppercase leading-tight text-white shadow-[0_10px_28px_rgba(226,0,122,0.28)] sm:col-span-2"
          >
            <span>{button.label}</span>
            <span className="text-sm">{button.secondaryLabel}</span>
          </button>
        ))}
      </div>

      {story && content ? (
        <div
          className="fixed inset-0 z-[300] flex items-center justify-center overflow-y-auto bg-purple-deep/88 p-2 backdrop-blur-md sm:p-4 lg:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby={dialogTitleId}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setActiveStory(null);
            }
          }}
          data-franchise-ui={`story-dialog-${activeStory}`}
        >
          <article
            className="relative my-auto w-full overflow-hidden rounded-[1.25rem] border-4 border-[#b98b43] bg-[#ead4a7] shadow-[0_40px_120px_rgba(18,3,28,0.6)] lg:rounded-[3.5rem] lg:border-[10px]"
            style={{
              width: "min(99vw, 41.2in)",
              minHeight: "min(26in, calc(100vh - 0.25rem))",
              height: "calc(100vh - 0.25rem)",
              maxHeight: "calc(100vh - 0.25rem)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={story.background}
              alt={story.backgroundAlt}
              className="absolute inset-0 h-full w-full object-cover"
              decoding="async"
            />
            <div className="absolute inset-0 bg-[#f8e9c8]/58" aria-hidden />

            <button
              type="button"
              onClick={() => setActiveStory(null)}
              className="absolute right-4 top-4 z-20 inline-flex size-14 items-center justify-center rounded-full bg-purple-deep text-white shadow-xl transition hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow/40 lg:right-8 lg:top-8 lg:size-[clamp(86px,8vw,132px)] lg:focus:ring-[12px]"
              aria-label="Cerrar historia"
            >
              <X className="size-[55%]" strokeWidth={3} aria-hidden />
            </button>

            <div className="relative z-10 grid h-full lg:grid-cols-[30%_70%]">
              <div className="hidden lg:flex lg:items-end lg:p-12">
                <div className="rounded-[3rem] bg-purple-deep/90 p-10 text-white shadow-2xl backdrop-blur-sm">
                  <BookOpenText className="size-24 text-yellow" aria-hidden />
                  <p className="mt-7 font-display text-[clamp(38px,3.5vw,62px)] font-black uppercase leading-tight">
                    Resiliencia, innovación y una visión de crecimiento.
                  </p>
                </div>
              </div>

              <div className="m-2 flex min-h-0 flex-col rounded-[1rem] bg-[#fff8e9]/95 p-4 shadow-2xl backdrop-blur-sm sm:m-4 sm:p-6 lg:ml-0 lg:mr-4 lg:rounded-[3rem] lg:p-16">
                <div className="shrink-0 pr-16 lg:pr-32">
                  <p className="flex items-center gap-2 text-base font-black uppercase tracking-[0.16em] text-magenta-dark sm:text-lg lg:gap-4 lg:text-[clamp(30px,3.2vw,52px)]">
                    <Languages className="size-[1.25em]" aria-hidden />
                    Açaí Factory
                  </p>
                  <h2
                    id={dialogTitleId}
                    className="mt-3 font-display text-3xl font-black uppercase leading-[0.95] text-ink sm:text-4xl lg:mt-4 lg:text-[clamp(72px,9vw,132px)] lg:leading-[0.9]"
                  >
                    {content.title}
                  </h2>
                </div>

                <div className="mt-5 flex shrink-0 flex-wrap gap-3 lg:mt-9 lg:gap-6" aria-label="Seleccionar idioma">
                  <LanguageButton
                    active={language === "es"}
                    onClick={() => setLanguage("es")}
                  >
                    Español
                  </LanguageButton>
                  <LanguageButton
                    active={language === "en"}
                    onClick={() => setLanguage("en")}
                  >
                    English
                  </LanguageButton>
                </div>

                <div className="mt-5 min-h-0 flex-1 overflow-y-auto rounded-[1rem] border-2 border-[#b98b43]/35 bg-white/55 p-4 sm:p-5 lg:mt-9 lg:rounded-[2.5rem] lg:border-4 lg:p-12 lg:pr-10">
                  <div className="space-y-5 text-base font-semibold leading-relaxed text-[#352719] sm:text-lg lg:space-y-9 lg:text-[clamp(38px,4.2vw,60px)] lg:leading-[1.48]">
                    {content.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      ) : null}
    </section>
  );
}

function LanguageButton({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`min-h-12 rounded-full border-2 px-5 text-base font-black uppercase transition focus:outline-none focus:ring-4 focus:ring-yellow/35 sm:text-lg lg:min-h-[104px] lg:border-[7px] lg:px-14 lg:text-[clamp(34px,3.7vw,54px)] lg:focus:ring-[10px] ${
        active
          ? "border-magenta-neon bg-magenta-neon text-white"
          : "border-purple-deep bg-white text-purple-deep hover:bg-yellow"
      }`}
    >
      {children}
    </button>
  );
}
