// The 9 macro-regions used on the home page's "By region" tab — one per
// transcript file we originally curated. Each maps to one or more region IDs
// in lib/data/regions.ts so we can filter events into a single timeline.

export type HomeRegion = {
  id: string;
  name: string;
  blurb: string;
  /** Camera target for the globe when this region is opened. */
  lat: number;
  lng: number;
  altitude: number;
  /** ISO A3 codes coloured for the default (no event selected) view. */
  countryCodes: string[];
  /** Which IDs from regions.ts count as part of this macro-region. */
  eventRegionIds: string[];
};

export const homeRegions: HomeRegion[] = [
  {
    id: "china",
    name: "China",
    blurb:
      "Song → Yuan → Ming → Qing → Republic → PRC. Confucian state, civil-service exam, gunpowder, silver sink, opium wars, Mao, Deng.",
    lat: 35,
    lng: 105,
    altitude: 1.9,
    countryCodes: ["CHN"],
    eventRegionIds: ["china"],
  },
  {
    id: "japan",
    name: "Japan",
    blurb:
      "Kamakura and Tokugawa shogunates, sakoku isolation, Meiji Restoration, 20th-century empire, post-WWII economic miracle.",
    lat: 36,
    lng: 138,
    altitude: 1.7,
    countryCodes: ["JPN"],
    eventRegionIds: ["japan"],
  },
  {
    id: "south-east-asia",
    name: "South & East Asia",
    blurb:
      "Majapahit, Malacca, Dai Viet, Khmer, Dutch VOC in Indonesia, Vietnam War, decolonization, ASEAN tigers.",
    lat: 5,
    lng: 110,
    altitude: 2.1,
    countryCodes: ["IDN", "MYS", "VNM", "THA", "PHL", "KHM", "MMR", "LAO", "SGP", "BRN", "TLS"],
    eventRegionIds: ["seasia"],
  },
  {
    id: "india",
    name: "India",
    blurb:
      "Delhi Sultanate, Mughal Empire, Battle of Plassey, EIC raj, 1857 rebellion, Gandhi, partition 1947.",
    lat: 22,
    lng: 78,
    altitude: 2.0,
    countryCodes: ["IND", "PAK", "BGD", "LKA", "NPL", "BTN"],
    eventRegionIds: ["india"],
  },
  {
    id: "middle-east",
    name: "Middle East",
    blurb:
      "Abbasids → Mongol Ilkhanate → Ottoman → Safavid → Mandate Middle East → oil states → Iranian Revolution → Arab Spring.",
    lat: 32,
    lng: 45,
    altitude: 2.2,
    countryCodes: ["TUR", "SYR", "IRQ", "JOR", "LBN", "ISR", "PSE", "IRN", "SAU", "YEM", "OMN", "ARE", "QAT", "BHR", "KWT", "AFG"],
    eventRegionIds: ["ottoman", "persia"],
  },
  {
    id: "north-west-africa",
    name: "North & West Africa",
    blurb:
      "Mali → Songhai, Mansa Musa's hajj, trans-Saharan trade, Ottoman/Mamluk Egypt, French colonization, decolonization wave.",
    lat: 15,
    lng: 0,
    altitude: 2.3,
    countryCodes: ["MAR", "DZA", "TUN", "LBY", "EGY", "MLI", "SEN", "GMB", "GIN", "BFA", "NER", "NGA", "GHA", "CIV", "MRT", "SLE", "LBR", "BEN", "TGO", "TCD", "CMR"],
    eventRegionIds: ["wafrica", "egypt"],
  },
  {
    id: "central-africa",
    name: "Central & Southern Africa",
    blurb:
      "Swahili coast (Kilwa, Mombasa), Great Zimbabwe, Belgian Congo, Apartheid South Africa, Rwandan genocide.",
    lat: -5,
    lng: 25,
    altitude: 2.3,
    countryCodes: ["KEN", "TZA", "UGA", "RWA", "BDI", "COD", "AGO", "ZMB", "ZWE", "MOZ", "BWA", "NAM", "ZAF", "MWI", "ETH", "SOM", "SDN", "SSD", "CAF", "GAB", "COG"],
    eventRegionIds: ["eafrica"],
  },
  {
    id: "russia",
    name: "Russia",
    blurb:
      "Mongol yoke → Muscovy → Romanovs → Soviet Union → post-1991 Russian Federation. Serfdom, Trans-Siberian, 1917 revolution, Cold War.",
    lat: 60,
    lng: 90,
    altitude: 2.6,
    countryCodes: ["RUS", "BLR", "UKR", "KAZ", "UZB", "TKM", "TJK", "KGZ"],
    eventRegionIds: ["russia"],
  },
  {
    id: "latin-america",
    name: "Latin America",
    blurb:
      "Aztec, Inca, Spanish/Portuguese conquest, Potosí silver, casta system, independence wave, Mexican Revolution, Cuban Revolution.",
    lat: -10,
    lng: -65,
    altitude: 2.4,
    countryCodes: ["MEX", "GTM", "BLZ", "HND", "SLV", "NIC", "CRI", "PAN", "COL", "VEN", "ECU", "PER", "BOL", "BRA", "CHL", "ARG", "URY", "PRY", "CUB", "HTI", "DOM", "JAM", "PRI", "TTO", "BHS", "GUY", "SUR"],
    eventRegionIds: ["mesoamerica", "andes", "brazil", "caribbean"],
  },
];
