import { deliveryAssets } from "@/lib/delivery-assets";

function DeliveryPartnerButton({
  href,
  label,
  partner,
  topClassName,
  barClassName,
}: {
  href: string;
  label: string;
  partner: "uber" | "doordash";
  topClassName: string;
  barClassName: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Ordenar en ${label}`}
      className="group flex min-h-[9rem] flex-1 flex-col overflow-hidden rounded-[2.5rem] shadow-[0_0_56px_rgba(255,20,147,0.42)] transition hover:scale-[1.02] hover:shadow-[0_0_72px_rgba(255,20,147,0.55)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-magenta-neon sm:min-h-[11rem] lg:min-h-[14rem] lg:rounded-[3.5rem]"
    >
      <div
        className={`flex flex-1 items-center justify-center px-6 py-6 sm:px-8 sm:py-8 lg:px-12 lg:py-10 ${topClassName}`}
      >
        {partner === "uber" ? (
          <span className="font-display text-[clamp(2rem,4.8vw,5.5rem)] font-extrabold leading-none tracking-tight text-white">
            Uber<span className="text-[#06c167]"> Eats</span>
          </span>
        ) : (
          <span className="flex items-center gap-4 font-display text-[clamp(2rem,4.8vw,5.5rem)] font-extrabold uppercase leading-none tracking-tight text-white">
            <span className="inline-flex h-[1.1em] w-[1.1em] items-center justify-center rounded bg-white text-[0.55em] font-black text-[#eb1700]">
              D
            </span>
            DoorDash
          </span>
        )}
      </div>
      <div
        className={`py-4 text-center font-display text-[clamp(1.3rem,2.7vw,2.7rem)] font-extrabold uppercase tracking-wide text-white sm:py-5 lg:py-7 ${barClassName}`}
      >
        ORDENA AHORA
      </div>
    </a>
  );
}

export function DeliveryHero() {
  return (
    <section aria-label="Açaí Factory Delivery" className="relative w-full bg-black">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={deliveryAssets.hero}
        alt="Açaí Factory Delivery — No vengas, nosotros vamos. Tu bowl favorito sin salir de casa."
        className="block h-auto w-full"
        width={1600}
        height={1066}
        decoding="async"
      />

      <div
        className="absolute inset-x-0 bottom-[2.5%] hidden justify-center px-[6%] sm:bottom-[3%] lg:flex lg:bottom-[3.5%]"
        aria-label="Ordenar delivery"
      >
        <div className="flex w-full max-w-[min(92vw,1960px)] gap-[3%] lg:max-w-[min(88vw,2200px)]">
          <DeliveryPartnerButton
            href={deliveryAssets.uberEats}
            label="Uber Eats"
            partner="uber"
            topClassName="bg-[#0b0b0b]"
            barClassName="bg-[#8f1248]"
          />
          <DeliveryPartnerButton
            href={deliveryAssets.doorDash}
            label="DoorDash"
            partner="doordash"
            topClassName="bg-gradient-to-br from-[#ff3008] to-[#ff5c00]"
            barClassName="bg-[#c41400]"
          />
        </div>
      </div>

      <div className="grid gap-4 bg-cream px-4 py-6 sm:grid-cols-2 sm:px-6 lg:hidden">
        <DeliveryPartnerButton
          href={deliveryAssets.uberEats}
          label="Uber Eats"
          partner="uber"
          topClassName="bg-[#0b0b0b]"
          barClassName="bg-[#8f1248]"
        />
        <DeliveryPartnerButton
          href={deliveryAssets.doorDash}
          label="DoorDash"
          partner="doordash"
          topClassName="bg-gradient-to-br from-[#ff3008] to-[#ff5c00]"
          barClassName="bg-[#c41400]"
        />
      </div>
    </section>
  );
}
