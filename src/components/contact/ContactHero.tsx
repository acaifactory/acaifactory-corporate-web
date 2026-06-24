import { contactAssets } from "@/lib/contact-assets";

export function ContactHero() {
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
          className="absolute rounded-[1.5rem] transition hover:bg-white/10 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-magenta-neon"
          style={{
            left: `${action.box.leftPercent}%`,
            top: `${action.box.topPercent}%`,
            width: `${action.box.widthPercent}%`,
            height: `${action.box.heightPercent}%`,
          }}
          {...(action.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        />
      ))}
    </section>
  );
}
