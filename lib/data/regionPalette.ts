// Color palette tied to home regions. Stays the same across every Big Idea
// view so the user builds a mental map: "purple = Latin America, gold = Middle East, …".
//
// Used by:
//  - the globe (countryColors map for the always-on regional tint)
//  - the unit / big-idea cards (badge + accent stripes)

export type RegionPaletteEntry = {
  id: string;
  name: string;
  color: string;
};

export const regionPalette: Record<string, RegionPaletteEntry> = {
  china: { id: "china", name: "China", color: "#dc2626" },
  japan: { id: "japan", name: "Japan", color: "#a855f7" },
  seasia: { id: "seasia", name: "Southeast Asia", color: "#14b8a6" },
  india: { id: "india", name: "India", color: "#f97316" },
  middleEast: { id: "middleEast", name: "Middle East", color: "#eab308" },
  westAfrica: { id: "westAfrica", name: "North & West Africa", color: "#d97706" },
  southAfrica: { id: "southAfrica", name: "Central & Southern Africa", color: "#16a34a" },
  russia: { id: "russia", name: "Russia / Eurasia", color: "#3b82f6" },
  europe: { id: "europe", name: "Europe", color: "#8b5cf6" },
  iberia: { id: "iberia", name: "Iberia", color: "#c026d3" },
  northAmerica: { id: "northAmerica", name: "North America", color: "#1d4ed8" },
  latinAmerica: { id: "latinAmerica", name: "Latin America", color: "#9333ea" },
  oceania: { id: "oceania", name: "Oceania", color: "#0ea5e9" },
  korea: { id: "korea", name: "Korea", color: "#0891b2" },
};

// ISO A3 → region id. The globe uses this to paint EVERY country at all times,
// even when no Big Idea is open.
export const countryToRegion: Record<string, string> = {
  // China bloc
  CHN: "china", MNG: "china", TWN: "china", HKG: "china",
  // Japan
  JPN: "japan",
  // Korea
  KOR: "korea", PRK: "korea",
  // SE Asia
  IDN: "seasia", MYS: "seasia", VNM: "seasia", THA: "seasia",
  PHL: "seasia", KHM: "seasia", MMR: "seasia", LAO: "seasia",
  SGP: "seasia", BRN: "seasia", TLS: "seasia",
  // India / South Asia
  IND: "india", PAK: "india", BGD: "india", LKA: "india",
  NPL: "india", BTN: "india", AFG: "india",
  // Middle East
  TUR: "middleEast", SYR: "middleEast", IRQ: "middleEast", JOR: "middleEast",
  LBN: "middleEast", ISR: "middleEast", PSE: "middleEast", IRN: "middleEast",
  SAU: "middleEast", YEM: "middleEast", OMN: "middleEast", ARE: "middleEast",
  QAT: "middleEast", BHR: "middleEast", KWT: "middleEast",
  // North + West Africa
  MAR: "westAfrica", DZA: "westAfrica", TUN: "westAfrica", LBY: "westAfrica",
  EGY: "westAfrica", MLI: "westAfrica", SEN: "westAfrica", GMB: "westAfrica",
  GIN: "westAfrica", BFA: "westAfrica", NER: "westAfrica", NGA: "westAfrica",
  GHA: "westAfrica", CIV: "westAfrica", MRT: "westAfrica", SLE: "westAfrica",
  LBR: "westAfrica", BEN: "westAfrica", TGO: "westAfrica", TCD: "westAfrica",
  CMR: "westAfrica", SDN: "westAfrica", SSD: "westAfrica", ESH: "westAfrica",
  // Central + Southern Africa
  KEN: "southAfrica", TZA: "southAfrica", UGA: "southAfrica", RWA: "southAfrica",
  BDI: "southAfrica", COD: "southAfrica", AGO: "southAfrica", ZMB: "southAfrica",
  ZWE: "southAfrica", MOZ: "southAfrica", BWA: "southAfrica", NAM: "southAfrica",
  ZAF: "southAfrica", MWI: "southAfrica", ETH: "southAfrica", SOM: "southAfrica",
  CAF: "southAfrica", GAB: "southAfrica", COG: "southAfrica", GNQ: "southAfrica",
  LSO: "southAfrica", SWZ: "southAfrica", DJI: "southAfrica", ERI: "southAfrica",
  MDG: "southAfrica",
  // Russia / Eurasia
  RUS: "russia", BLR: "russia", UKR: "russia", KAZ: "russia",
  UZB: "russia", TKM: "russia", TJK: "russia", KGZ: "russia",
  GEO: "russia", ARM: "russia", AZE: "russia", MDA: "russia",
  // Europe
  FRA: "europe", DEU: "europe", BEL: "europe", NLD: "europe", LUX: "europe",
  CHE: "europe", AUT: "europe", GBR: "europe", IRL: "europe", ITA: "europe",
  POL: "europe", CZE: "europe", SVK: "europe", HUN: "europe", ROU: "europe",
  BGR: "europe", GRC: "europe", DNK: "europe", SWE: "europe", NOR: "europe",
  FIN: "europe", EST: "europe", LVA: "europe", LTU: "europe", HRV: "europe",
  SVN: "europe", BIH: "europe", SRB: "europe", MNE: "europe", MKD: "europe",
  ALB: "europe", ISL: "europe", CYP: "europe",
  // Iberia (broken out from Europe so Spain / Portugal pop visually)
  ESP: "iberia", PRT: "iberia",
  // North America
  USA: "northAmerica", CAN: "northAmerica",
  // Latin America
  MEX: "latinAmerica", GTM: "latinAmerica", BLZ: "latinAmerica", HND: "latinAmerica",
  SLV: "latinAmerica", NIC: "latinAmerica", CRI: "latinAmerica", PAN: "latinAmerica",
  COL: "latinAmerica", VEN: "latinAmerica", ECU: "latinAmerica", PER: "latinAmerica",
  BOL: "latinAmerica", BRA: "latinAmerica", CHL: "latinAmerica", ARG: "latinAmerica",
  URY: "latinAmerica", PRY: "latinAmerica", CUB: "latinAmerica", HTI: "latinAmerica",
  DOM: "latinAmerica", JAM: "latinAmerica", PRI: "latinAmerica", TTO: "latinAmerica",
  BHS: "latinAmerica", GUY: "latinAmerica", SUR: "latinAmerica",
  // Oceania
  AUS: "oceania", NZL: "oceania", PNG: "oceania", FJI: "oceania",
};

/** Build the always-on country → color map for the globe (every country tinted). */
export function buildBaseCountryColors(opacity: string = "55"): Map<string, string> {
  const map = new Map<string, string>();
  for (const [code, regionId] of Object.entries(countryToRegion)) {
    const color = regionPalette[regionId]?.color;
    if (color) map.set(code, color + opacity);
  }
  return map;
}

/** Build the always-on country → label map (region name on hover). */
export function buildBaseCountryLabels(): Map<string, string> {
  const map = new Map<string, string>();
  for (const [code, regionId] of Object.entries(countryToRegion)) {
    const name = regionPalette[regionId]?.name;
    if (name) map.set(code, name);
  }
  return map;
}
