import { contactAssets } from "@/lib/contact-assets";

export function ContactHero() {
  const primaryActions = contactAssets.actions.filter((action) =>
    ["locations", "call", "whatsapp", "email"].includes(action.id)
  );

  return (
    <section aria-label="Contact Us Açaí Factory" className="relative w-full bg-white">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={contactAssets.hero}
        alt="Contact Us Açaí Factory — locations, call us, WhatsApp, email us and social media."
        className="block h-auto w-full"
        width={contactAssets.heroWidth}
        height={contactAssets.heroHeight}
        decoding="async"
        fetchPriority="high"
      />

      {contactAssets.actions.map((action) => (
        <a
          key={action.id}
          href={action.href}
          aria-label={action.label}
          className="absolute hidden rounded-[1.5rem] transition hover:bg-white/10 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-magenta-neon lg:block"
          style={{
            left: `${action.box.leftPercent}%`,
            top: `${action.box.topPercent}%`,
            width: `${action.box.widthPercent}%`,
            height: `${action.box.heightPercent}%`,
          }}
          {...(action.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        />
      ))}

      <div className="grid gap-4 bg-cream px-4 py-6 sm:grid-cols-2 lg:hidden">
        {primaryActions.map((action) => (
          <a
            key={action.id}
            href={action.href}
            className="flex min-h-16 items-center justify-center rounded-full bg-magenta-neon px-5 py-4 text-center font-display text-lg font-black uppercase leading-tight text-white shadow-[0_10px_28px_rgba(226,0,122,0.28)]"
            aria-label={action.label}
            {...(action.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            {action.label}
          </a>
        ))}
      </div>
    </section>
  );
}
