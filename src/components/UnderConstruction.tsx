type UnderConstructionProps = {
  title: string;
  pageNumber: number;
  flower: string;
};

/** Temporary Phase 1 marker — remove per page when real content is added. */
export function UnderConstruction({ title, pageNumber, flower }: UnderConstructionProps) {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-10rem)] max-w-4xl flex-col px-4 pb-16 pt-[var(--site-header-height,7rem)]">
      <h1 className="font-display text-3xl font-semibold text-ink">{title}</h1>

      <div
        role="status"
        className="mt-8 flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 px-6 py-16"
      >
        <span className="text-5xl" aria-hidden>
          {flower}
        </span>
        <p className="mt-4 font-display text-xl font-bold tracking-[0.2em] text-gray-600">
          UNDER CONSTRUCTION
        </p>
        <p className="mt-2 font-display text-sm font-semibold text-gray-500">
          Page {pageNumber}
        </p>
      </div>

      <div
        aria-label="Reserved for future content"
        className="mt-8 min-h-[12rem] flex-1 rounded-lg border border-dashed border-gray-200 bg-gray-50/50"
      />
    </section>
  );
}
