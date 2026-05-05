import type { Region } from "@/lib/types";

// ISO A3 country codes used to highlight polygons on hover.
export const regions: Region[] = [
  {
    id: "china",
    name: "China",
    lat: 35.0,
    lng: 105.0,
    countryCodes: ["CHN"],
    blurb:
      "Yuan, Ming, and Qing dynasties. Heart of the Silk Roads, source of silk, porcelain, and tea. Major silver sink under the Ming.",
  },
  {
    id: "mongol",
    name: "Mongol Heartland",
    lat: 47.0,
    lng: 105.0,
    countryCodes: ["MNG"],
    blurb:
      "Genghis Khan unified the steppe in 1206. The Mongol khanates linked Eurasia under the Pax Mongolica.",
  },
  {
    id: "india",
    name: "South Asia",
    lat: 22.0,
    lng: 78.0,
    countryCodes: ["IND", "PAK", "BGD"],
    blurb:
      "Delhi Sultanate, then the Mughal Empire (1526–1857). Cotton textiles, spices, and Hindu–Islamic syncretism.",
  },
  {
    id: "seasia",
    name: "Southeast Asia",
    lat: 5.0,
    lng: 110.0,
    countryCodes: ["IDN", "MYS", "VNM", "THA", "PHL", "KHM", "MMR"],
    blurb:
      "Majapahit, Malacca, and later Dutch (VOC) and Spanish colonies. Spice islands and entrepôt trade.",
  },
  {
    id: "japan",
    name: "Japan",
    lat: 36.0,
    lng: 138.0,
    countryCodes: ["JPN"],
    blurb:
      "Tokugawa shogunate's sakoku isolation, Meiji Restoration (1868), industrialization, and 20th-century empire.",
  },
  {
    id: "persia",
    name: "Persia / Iran",
    lat: 32.0,
    lng: 53.0,
    countryCodes: ["IRN"],
    blurb:
      "Ilkhanate, then the Safavid Empire (1501–1736). Shia Islam, Persian carpets, and Silk Road hub.",
  },
  {
    id: "ottoman",
    name: "Ottoman Empire",
    lat: 39.0,
    lng: 35.0,
    countryCodes: ["TUR", "SYR", "IRQ", "JOR", "LBN", "ISR", "PSE", "EGY", "GRC", "BGR", "ROU", "ALB", "MKD", "BIH", "SRB"],
    blurb:
      "Constantinople fell in 1453. Ottomans dominated the eastern Mediterranean and Islamic world until WWI.",
  },
  {
    id: "russia",
    name: "Russia",
    lat: 60.0,
    lng: 90.0,
    countryCodes: ["RUS"],
    blurb:
      "Muscovy throws off the Mongol yoke (1480), expands under Ivan IV and Peter the Great. USSR dominates Eurasia in the 20th c.",
  },
  {
    id: "wafrica",
    name: "West Africa",
    lat: 13.0,
    lng: -5.0,
    countryCodes: ["MLI", "SEN", "GMB", "GIN", "BFA", "NER", "NGA", "GHA", "CIV", "CMR", "TCD"],
    blurb:
      "Mali Empire (Mansa Musa's 1324 hajj), Songhai, and later coastal kingdoms drawn into the Atlantic slave trade.",
  },
  {
    id: "eafrica",
    name: "East Africa (Swahili Coast)",
    lat: -6.0,
    lng: 39.0,
    countryCodes: ["KEN", "TZA", "MOZ", "SOM", "ETH"],
    blurb:
      "Swahili city-states (Kilwa, Mombasa) traded gold, ivory, and slaves across the Indian Ocean.",
  },
  {
    id: "egypt",
    name: "Egypt / Mamluk",
    lat: 27.0,
    lng: 30.0,
    countryCodes: ["EGY"],
    blurb:
      "Mamluk Sultanate controlled Red Sea trade until Ottoman conquest (1517). Suez Canal opens 1869.",
  },
  {
    id: "wnerope",
    name: "Western Europe",
    lat: 48.0,
    lng: 5.0,
    countryCodes: ["FRA", "DEU", "BEL", "NLD", "LUX", "CHE", "AUT", "GBR", "IRL"],
    blurb:
      "Renaissance, Reformation, Enlightenment, Atlantic exploration, and the Industrial Revolution.",
  },
  {
    id: "iberia",
    name: "Iberia",
    lat: 40.0,
    lng: -4.0,
    countryCodes: ["ESP", "PRT"],
    blurb:
      "Reconquista (1492), Columbus, and the first global maritime empires. Treaty of Tordesillas split the world.",
  },
  {
    id: "italy",
    name: "Italian Peninsula",
    lat: 43.0,
    lng: 12.0,
    countryCodes: ["ITA"],
    blurb:
      "Venice and Genoa monopolized the medieval spice trade. Renaissance birthplace.",
  },
  {
    id: "mesoamerica",
    name: "Mesoamerica",
    lat: 19.0,
    lng: -99.0,
    countryCodes: ["MEX", "GTM", "BLZ", "HND", "SLV"],
    blurb:
      "Aztec Triple Alliance fell to Cortés in 1521. Silver from Zacatecas fed global trade.",
  },
  {
    id: "andes",
    name: "Andes",
    lat: -13.0,
    lng: -72.0,
    countryCodes: ["PER", "BOL", "ECU", "CHL"],
    blurb:
      "Inca Empire fell to Pizarro in 1533. Potosí silver mine became the engine of the global silver economy.",
  },
  {
    id: "brazil",
    name: "Brazil",
    lat: -10.0,
    lng: -55.0,
    countryCodes: ["BRA"],
    blurb:
      "Portuguese sugar plantations powered by African slave labor. Largest destination of the Atlantic slave trade.",
  },
  {
    id: "caribbean",
    name: "Caribbean",
    lat: 18.0,
    lng: -75.0,
    countryCodes: ["CUB", "HTI", "DOM", "JAM", "PRI", "TTO", "BHS"],
    blurb:
      "Plantation economies, the Haitian Revolution (1791–1804), and a hub of the triangular trade.",
  },
  {
    id: "northam",
    name: "North America",
    lat: 40.0,
    lng: -100.0,
    countryCodes: ["USA", "CAN"],
    blurb:
      "British and French colonies; American Revolution (1776), industrialization, and Cold War superpower.",
  },
  {
    id: "australia",
    name: "Australia / Oceania",
    lat: -25.0,
    lng: 135.0,
    countryCodes: ["AUS", "NZL", "PNG"],
    blurb:
      "British penal colony from 1788. Indigenous societies disrupted; later a Commonwealth dominion.",
  },
];

export const regionByCountryCode = new Map<string, Region>();
for (const region of regions) {
  for (const code of region.countryCodes) {
    regionByCountryCode.set(code, region);
  }
}
