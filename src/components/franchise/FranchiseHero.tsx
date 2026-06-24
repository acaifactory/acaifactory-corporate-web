"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { ArrowRight, BookOpenText, Languages, X } from "lucide-react";
import { franchiseAssets } from "@/lib/franchise-assets";

type StoryId = keyof typeof franchiseAssets.stories;
type Language = "es" | "en";

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
          className="absolute z-20 box-border"
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
          className="absolute z-30 flex flex-col items-center justify-center rounded-[0.75em] border-[0.16em] border-magenta-neon bg-magenta-neon px-[0.65em] text-center font-display font-extrabold uppercase leading-[1.05] text-white shadow-[0_8px_24px_rgba(34,5,50,0.38)] transition hover:-translate-y-0.5 hover:bg-magenta-dark focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-white"
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

      {story && content ? (
        <div
          className="fixed inset-0 z-[300] flex items-center justify-center overflow-y-auto bg-purple-deep/88 p-3 backdrop-blur-md sm:p-6"
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
            className="relative my-auto w-full overflow-hidden rounded-[3.5rem] border-[10px] border-[#b98b43] bg-[#ead4a7] shadow-[0_40px_120px_rgba(18,3,28,0.6)]"
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
              className="absolute right-8 top-8 z-20 inline-flex size-[clamp(86px,8vw,132px)] items-center justify-center rounded-full bg-purple-deep text-white shadow-xl transition hover:scale-105 focus:outline-none focus:ring-[12px] focus:ring-yellow/40"
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

              <div className="m-2 flex min-h-0 flex-col rounded-[3rem] bg-[#fff8e9]/95 p-7 shadow-2xl backdrop-blur-sm sm:m-4 sm:p-12 lg:ml-0 lg:mr-4 lg:p-16">
                <div className="shrink-0 pr-32">
                  <p className="flex items-center gap-4 text-[clamp(30px,3.2vw,52px)] font-black uppercase tracking-[0.16em] text-magenta-dark">
                    <Languages className="size-[1.25em]" aria-hidden />
                    Açaí Factory
                  </p>
                  <h2
                    id={dialogTitleId}
                    className="mt-4 font-display text-[clamp(72px,9vw,132px)] font-black uppercase leading-[0.9] text-ink"
                  >
                    {content.title}
                  </h2>
                </div>

                <div className="mt-9 flex shrink-0 flex-wrap gap-6" aria-label="Seleccionar idioma">
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

                <div className="mt-9 min-h-0 flex-1 overflow-y-auto rounded-[2.5rem] border-4 border-[#b98b43]/35 bg-white/55 p-8 pr-10 sm:p-12">
                  <div className="space-y-9 text-[clamp(38px,4.2vw,60px)] font-semibold leading-[1.48] text-[#352719]">
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
      className={`min-h-[104px] rounded-full border-[7px] px-14 text-[clamp(34px,3.7vw,54px)] font-black uppercase transition focus:outline-none focus:ring-[10px] focus:ring-yellow/35 ${
        active
          ? "border-magenta-neon bg-magenta-neon text-white"
          : "border-purple-deep bg-white text-purple-deep hover:bg-yellow"
      }`}
    >
      {children}
    </button>
  );
}
