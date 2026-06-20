export const deliveryAssets = {
  hero: "/marketing/delivery/delivery-hero.png",
  uberEats:
    process.env.NEXT_PUBLIC_UBER_EATS_URL ??
    "https://www.order.store/store/acai-factory/WegESXsZWk6JSKkOsVvJdA",
  doorDash:
    process.env.NEXT_PUBLIC_DOORDASH_URL ??
    "https://www.doordash.com/store/a%C3%A7a%C3%AD-factory-bayam%C3%B3n-24896890/",
  /** Set false when hero is the clean artwork without baked-in partner buttons. */
  heroHasBakedButtons: true,
} as const;
