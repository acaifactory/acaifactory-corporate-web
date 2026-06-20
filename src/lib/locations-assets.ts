import { routes } from "@/lib/site";

export const locationsAssets = {
  hero: "/marketing/locations/locations-hero.png",
  heroWidth: 2048,
  heroHeight: 3072,
  stores: [
    {
      id: "bayamon",
      city: "Bayamón",
      address: "Cra. 781 Km. 2.9 Int. 105, Bayamón, PR",
      phone: "(787) 568-4322",
      directionsUrl:
        "https://www.google.com/maps/search/?api=1&query=Cra.+781+Km.+2.9+Int.+105+Bayam%C3%B3n+PR",
      orderHref: routes.menu,
    },
    {
      id: "catano",
      city: "Cataño",
      address: "Cll. San Antonio Final, Cataño, PR",
      phone: "(787) 586-4322",
      directionsUrl:
        "https://www.google.com/maps/search/?api=1&query=Cll.+San+Antonio+Final+Cata%C3%B1o+PR",
      orderHref: routes.menu,
    },
    {
      id: "corozal",
      city: "Corozal",
      address: "Blvd. Norte L-7, Corozal, PR 00783",
      phone: "(787) 516-2954",
      directionsUrl:
        "https://www.google.com/maps/search/?api=1&query=Blvd.+Norte+L-7+Corozal+PR+00783",
      orderHref: routes.menu,
    },
  ],
} as const;
