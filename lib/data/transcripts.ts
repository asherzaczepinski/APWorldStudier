// Transcripts live in /public/transcripts and are fetched on demand by the Library.

export type TranscriptKind = "unit" | "region";

export type TranscriptEntry = {
  id: string;
  kind: TranscriptKind;
  title: string;
  subtitle: string;
  file: string;
  /** Region IDs this transcript pairs with, so we can offer it from the globe. */
  regionIds?: string[];
};

export const transcripts: TranscriptEntry[] = [
  // Units
  { id: "u1", kind: "unit", title: "Unit 1", subtitle: "The Global Tapestry", file: "/transcripts/unit1.txt" },
  { id: "u2", kind: "unit", title: "Unit 2", subtitle: "Networks of Exchange", file: "/transcripts/unit2.txt" },
  { id: "u3", kind: "unit", title: "Unit 3", subtitle: "Land-Based Empires", file: "/transcripts/unit3.txt" },
  { id: "u4", kind: "unit", title: "Unit 4", subtitle: "Transoceanic Connections", file: "/transcripts/unit4.txt" },
  { id: "u5", kind: "unit", title: "Unit 5", subtitle: "Revolutions", file: "/transcripts/unit5.txt" },
  { id: "u6", kind: "unit", title: "Unit 6", subtitle: "Industrialization & Imperialism", file: "/transcripts/unit6.txt" },
  { id: "u7", kind: "unit", title: "Unit 7", subtitle: "Global Conflict", file: "/transcripts/unit7.txt" },
  { id: "u8", kind: "unit", title: "Unit 8", subtitle: "Cold War & Decolonization", file: "/transcripts/unit8.txt" },
  { id: "u9", kind: "unit", title: "Unit 9", subtitle: "Globalization", file: "/transcripts/unit9.txt" },

  // Regions
  {
    id: "r-china",
    kind: "region",
    title: "China",
    subtitle: "Song through the present",
    file: "/transcripts/china.txt",
    regionIds: ["china"],
  },
  {
    id: "r-india",
    kind: "region",
    title: "South Asia",
    subtitle: "Delhi Sultanate to modern India",
    file: "/transcripts/india.txt",
    regionIds: ["india"],
  },
  {
    id: "r-japan",
    kind: "region",
    title: "Japan",
    subtitle: "Tokugawa to today",
    file: "/transcripts/japan.txt",
    regionIds: ["japan"],
  },
  {
    id: "r-russia",
    kind: "region",
    title: "Russia",
    subtitle: "Muscovy to the Russian Federation",
    file: "/transcripts/russia.txt",
    regionIds: ["russia"],
  },
  {
    id: "r-middleeast",
    kind: "region",
    title: "Middle East",
    subtitle: "Mongols, Ottomans, Safavids, modern era",
    file: "/transcripts/middleeast.txt",
    regionIds: ["ottoman", "persia", "egypt"],
  },
  {
    id: "r-seasia",
    kind: "region",
    title: "South & East Asia",
    subtitle: "Mainland and maritime SE Asia",
    file: "/transcripts/southandeastasia.txt",
    regionIds: ["seasia"],
  },
  {
    id: "r-northwafrica",
    kind: "region",
    title: "North & West Africa",
    subtitle: "Mali, Songhai, the Maghreb",
    file: "/transcripts/northandwestafrica.txt",
    regionIds: ["wafrica", "egypt"],
  },
  {
    id: "r-centralafrica",
    kind: "region",
    title: "Central & East Africa",
    subtitle: "Kongo, Swahili coast, Great Zimbabwe",
    file: "/transcripts/centralafrica.txt",
    regionIds: ["eafrica"],
  },
  {
    id: "r-latinamerica",
    kind: "region",
    title: "Latin America",
    subtitle: "Pre-Columbian, colonial, independence, modern",
    file: "/transcripts/latinamerica.txt",
    regionIds: ["mesoamerica", "andes", "brazil", "caribbean"],
  },
];

export function transcriptsForRegion(regionId: string): TranscriptEntry[] {
  return transcripts.filter((t) => t.regionIds?.includes(regionId));
}
