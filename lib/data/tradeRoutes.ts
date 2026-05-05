import type { TradeRoute } from "@/lib/types";

export const tradeRoutes: TradeRoute[] = [
  {
    id: "silk-road",
    name: "Silk Roads",
    periodIds: ["p1", "p2"],
    mode: "land",
    yearStart: 1200,
    yearEnd: 1450,
    goods: ["Silk", "Porcelain", "Paper", "Gunpowder", "Horses", "Jade"],
    ideas: ["Buddhism", "Islam", "Bubonic Plague", "Printing tech"],
    color: "#fbbf24",
    regionIds: ["china", "mongol", "persia", "ottoman", "italy", "wnerope"],
    description:
      "Overland Eurasian network revived under Mongol Pax Mongolica. Caravanserai dotted the route from Chang'an through Samarkand to Baghdad and Constantinople.",
    path: [
      { lat: 34.3, lng: 108.9 }, { lat: 40.4, lng: 95.0 }, { lat: 39.6, lng: 66.9 },
      { lat: 35.7, lng: 51.4 }, { lat: 33.3, lng: 44.4 }, { lat: 41.0, lng: 28.9 },
      { lat: 45.4, lng: 12.3 },
    ],
  },
  {
    id: "indian-ocean",
    name: "Indian Ocean Trade",
    periodIds: ["p1", "p2"],
    mode: "sea",
    yearStart: 1200,
    yearEnd: 1750,
    goods: ["Spices", "Cotton textiles", "Ivory", "Gold", "Slaves", "Horses"],
    ideas: ["Islam", "Swahili language", "Lateen sail", "Astrolabe"],
    color: "#22d3ee",
    regionIds: ["china", "seasia", "india", "persia", "egypt", "eafrica"],
    description:
      "Monsoon-driven maritime network linking China to East Africa. Diasporic merchant communities connected hubs like Calicut, Malacca, Hormuz, and Kilwa.",
    path: [
      { lat: 31.2, lng: 121.5 }, { lat: 22.3, lng: 114.2 }, { lat: 2.2, lng: 102.3 },
      { lat: 6.9, lng: 79.9 }, { lat: 11.3, lng: 75.8 }, { lat: 27.1, lng: 56.3 },
      { lat: 12.8, lng: 45.0 }, { lat: -8.96, lng: 39.5 },
    ],
  },
  {
    id: "trans-saharan",
    name: "Trans-Saharan Trade",
    periodIds: ["p1", "p2"],
    mode: "land",
    yearStart: 1200,
    yearEnd: 1700,
    goods: ["Gold", "Salt", "Slaves", "Kola nuts", "Cloth"],
    ideas: ["Islam", "Arabic script", "Universities (Timbuktu)"],
    color: "#fb923c",
    regionIds: ["wafrica", "egypt", "ottoman"],
    description:
      "Camel caravans across the Sahara linked West African gold producers to North African markets. Mansa Musa's 1324 hajj famously flooded Cairo with gold.",
    path: [
      { lat: 16.8, lng: -3.0 }, { lat: 22.8, lng: 5.5 }, { lat: 32.9, lng: 13.2 },
      { lat: 30.0, lng: 31.2 },
    ],
  },
  {
    id: "trans-saharan-2",
    name: "Trans-Saharan (Western)",
    periodIds: ["p1", "p2"],
    mode: "land",
    yearStart: 1200,
    yearEnd: 1700,
    goods: ["Gold", "Salt", "Slaves"],
    ideas: ["Islam"],
    color: "#fb923c",
    regionIds: ["wafrica"],
    description:
      "Western caravan routes from the Niger bend up through the Maghreb to Marrakesh and Fez.",
    path: [
      { lat: 13.5, lng: -2.1 }, { lat: 16.8, lng: -3.0 }, { lat: 27.2, lng: -13.2 },
      { lat: 31.6, lng: -8.0 },
    ],
  },
  {
    id: "columbian-exchange-east",
    name: "Columbian Exchange — Old → New",
    periodIds: ["p2"],
    mode: "sea",
    yearStart: 1492,
    yearEnd: 1800,
    goods: ["Wheat", "Sugar cane", "Horses", "Cattle", "Smallpox"],
    ideas: ["Christianity", "Spanish/Portuguese language", "Encomienda"],
    color: "#f472b6",
    regionIds: ["iberia", "wnerope", "caribbean", "mesoamerica", "andes", "brazil"],
    description:
      "Post-1492 transfer of crops, animals, people, and pathogens between the Old and New Worlds. Disease catastrophically depopulated the Americas.",
    path: [
      { lat: 38.7, lng: -9.1 }, { lat: 36.5, lng: -6.3 }, { lat: 28.3, lng: -16.6 },
      { lat: 18.5, lng: -69.9 }, { lat: 19.4, lng: -99.1 },
    ],
  },
  {
    id: "columbian-exchange-west",
    name: "Columbian Exchange — New → Old",
    periodIds: ["p2"],
    mode: "sea",
    yearStart: 1492,
    yearEnd: 1800,
    goods: ["Potato", "Maize", "Tomato", "Cassava", "Tobacco", "Chocolate", "Silver"],
    ideas: ["New world crops reshaping Old World diets"],
    color: "#a3e635",
    regionIds: ["mesoamerica", "andes", "iberia", "wnerope", "wafrica", "china"],
    description:
      "Caloric American crops (potato, maize, cassava) drove population growth across Eurasia and Africa. American silver fueled Chinese commerce.",
    path: [
      { lat: -12.0, lng: -77.0 }, { lat: 9.0, lng: -79.5 }, { lat: 23.1, lng: -82.4 },
      { lat: 36.5, lng: -6.3 }, { lat: 50.9, lng: 4.4 },
    ],
  },
  {
    id: "atlantic-slave",
    name: "Atlantic Slave Trade",
    periodIds: ["p2", "p3"],
    mode: "sea",
    yearStart: 1500,
    yearEnd: 1850,
    goods: ["Enslaved Africans", "Sugar", "Rum", "Cotton", "Tobacco"],
    ideas: ["Plantation system", "Racial slavery"],
    color: "#ef4444",
    regionIds: ["wnerope", "iberia", "wafrica", "caribbean", "brazil", "northam"],
    description:
      "Triangular trade: European manufactures to Africa, enslaved Africans to the Americas (Middle Passage), cash crops back to Europe. Roughly 12.5 million Africans were forcibly shipped.",
    path: [
      { lat: 51.5, lng: -3.0 }, { lat: 6.5, lng: 3.4 }, { lat: -8.8, lng: 13.2 },
      { lat: -8.0, lng: -34.9 }, { lat: 13.1, lng: -59.6 }, { lat: 32.8, lng: -79.9 },
      { lat: 51.5, lng: -3.0 },
    ],
  },
  {
    id: "british-empire",
    name: "British Imperial Trade",
    periodIds: ["p3"],
    mode: "sea",
    yearStart: 1750,
    yearEnd: 1947,
    goods: ["Cotton", "Tea", "Opium", "Manufactured goods"],
    ideas: ["Free trade ideology", "Western education"],
    color: "#60a5fa",
    regionIds: ["wnerope", "india", "china", "eafrica", "australia", "northam"],
    description:
      "After 1815 Britain dominated global maritime trade. The triangular India–China–Britain opium/tea/cotton trade and the Suez Canal (1869) reshaped Asian economies.",
    path: [
      { lat: 51.5, lng: -0.1 }, { lat: 36.1, lng: -5.4 }, { lat: 30.0, lng: 32.5 },
      { lat: 12.8, lng: 45.0 }, { lat: 18.9, lng: 72.8 }, { lat: 22.6, lng: 88.4 },
      { lat: 1.3, lng: 103.8 }, { lat: 22.3, lng: 114.2 },
    ],
  },
  {
    id: "industrial-railway",
    name: "Industrial Railways",
    periodIds: ["p3"],
    mode: "rail",
    yearStart: 1830,
    yearEnd: 1950,
    goods: ["Coal", "Steel", "Manufactured goods", "Migrants"],
    ideas: ["Industrial capitalism", "Time zones", "Mass production"],
    color: "#94a3b8",
    regionIds: ["wnerope", "northam", "russia", "india"],
    description:
      "Steam-powered railways and steamships crashed transport costs. Trans-Siberian, US transcontinental, and Indian railways re-organized continental economies.",
    path: [
      { lat: 53.5, lng: -2.2 }, { lat: 40.7, lng: -74.0 }, { lat: 41.9, lng: -87.6 },
      { lat: 37.8, lng: -122.4 },
    ],
  },
  {
    id: "indentured",
    name: "Indentured Labor",
    periodIds: ["p3", "p4"],
    mode: "sea",
    yearStart: 1834,
    yearEnd: 1920,
    goods: ["Indentured South Asians, Chinese, Javanese"],
    ideas: ["Diaspora networks"],
    color: "#facc15",
    regionIds: ["india", "china", "caribbean", "eafrica", "australia", "seasia"],
    description:
      "After abolition, millions of South Asian and Chinese laborers were shipped under indenture to Caribbean, African, and Pacific plantations.",
    path: [
      { lat: 22.6, lng: 88.4 }, { lat: 12.8, lng: 45.0 }, { lat: -20.2, lng: 57.5 },
      { lat: 10.7, lng: -61.5 }, { lat: 5.8, lng: -55.2 }, { lat: -17.7, lng: 178.1 },
    ],
  },
  {
    id: "cold-war",
    name: "Cold War Spheres",
    periodIds: ["p4"],
    mode: "modern",
    yearStart: 1945,
    yearEnd: 1991,
    goods: ["Weapons", "Aid", "Oil", "Cultural exports"],
    ideas: ["Capitalism vs. Communism", "Nuclear deterrence"],
    color: "#c084fc",
    regionIds: ["northam", "russia", "china", "wnerope", "seasia"],
    description:
      "US and USSR competed for influence via proxy wars (Korea, Vietnam, Afghanistan), aid, and arms. Decolonizing states navigated alignment.",
    path: [
      { lat: 38.9, lng: -77.0 }, { lat: 52.5, lng: 13.4 }, { lat: 55.8, lng: 37.6 },
      { lat: 39.9, lng: 116.4 }, { lat: 21.0, lng: 105.8 },
    ],
  },
  {
    id: "globalization",
    name: "Globalization Supply Chains",
    periodIds: ["p4"],
    mode: "modern",
    yearStart: 1980,
    yearEnd: 2025,
    goods: ["Electronics", "Apparel", "Cars", "Oil", "Containerized goods"],
    ideas: ["Neoliberal trade", "WTO", "Multinational corporations"],
    color: "#34d399",
    regionIds: ["china", "northam", "wnerope", "seasia", "india", "japan", "australia"],
    description:
      "Containerization and the WTO (1995) created hyper-efficient global supply chains. China became the 'world's factory' after 1978 reforms.",
    path: [
      { lat: 22.5, lng: 114.0 }, { lat: 1.3, lng: 103.8 }, { lat: 33.7, lng: -118.2 },
      { lat: 51.9, lng: 4.5 }, { lat: 35.7, lng: 139.7 },
    ],
  },
];

export function routesForPeriod(periodId: string): TradeRoute[] {
  return tradeRoutes.filter((r) => r.periodIds.includes(periodId));
}

export function routesAtYear(year: number): TradeRoute[] {
  return tradeRoutes.filter((r) => year >= r.yearStart && year <= r.yearEnd);
}

export function routesForRegion(regionId: string, periodId: string): TradeRoute[] {
  return tradeRoutes.filter(
    (r) => r.periodIds.includes(periodId) && r.regionIds.includes(regionId)
  );
}
