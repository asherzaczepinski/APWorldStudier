import type { EventCategory } from "@/lib/types";

export const EVENT_CATEGORIES: Record<string, EventCategory> = {
  // Period 1
  "mongol-rise": "war",
  "delhi-sultanate": "founding",
  "mansa-musa": "religious",
  "black-death": "disaster",
  "zheng-he": "discovery",
  // Period 2
  "constantinople-1453": "war",
  "columbus-1492": "discovery",
  "tordesillas": "treaty",
  "cortes-aztec": "war",
  "mughal-1526": "founding",
  "pizarro-inca": "war",
  "potosi-1545": "economic",
  "voc-1602": "economic",
  "tokugawa-sakoku": "founding",
  "qing-1644": "founding",
  "thirteen-colonies": "founding",
  "us-empire": "war",
  // Period 3
  "seven-years": "war",
  "american-rev": "independence",
  "french-rev": "rebellion",
  "haitian-rev": "independence",
  "industrial-rev": "tech",
  "latin-am-indep": "independence",
  "opium-wars": "war",
  "taiping": "rebellion",
  "1857-rebellion": "rebellion",
  "meiji": "founding",
  "scramble-africa": "war",
  // Period 4
  "wwi": "war",
  "russian-rev": "rebellion",
  "great-depression": "economic",
  "wwii": "war",
  "indian-indep": "independence",
  "prc-1949": "founding",
  "korean-war": "war",
  "decolonization": "independence",
  "non-aligned": "treaty",
  "cold-war-alliances": "treaty",
  "cuban-missile": "war",
  "berlin-wall": "war",
  "vietnam-war": "war",
  "deng-reform": "economic",
  "ussr-collapse": "independence",
  "wto-1995": "economic",
  "9-11": "war",
};

export const CATEGORY_META: Record<EventCategory, { icon: string; label: string; color: string }> = {
  war:           { icon: "⚔",  label: "War / Conflict", color: "#ef4444" },
  treaty:        { icon: "📜", label: "Treaty / Pact",   color: "#60a5fa" },
  disaster:      { icon: "💀", label: "Disaster",        color: "#a855f7" },
  discovery:     { icon: "🧭", label: "Discovery",       color: "#22d3ee" },
  founding:      { icon: "👑", label: "Empire Founding", color: "#fbbf24" },
  religious:     { icon: "🕌", label: "Religious",       color: "#facc15" },
  tech:          { icon: "⚙",  label: "Technology",      color: "#fb923c" },
  economic:      { icon: "💰", label: "Economic",        color: "#34d399" },
  independence:  { icon: "🏳", label: "Independence",    color: "#14b8a6" },
  rebellion:     { icon: "✊", label: "Rebellion",       color: "#f97316" },
};

export function categoryFor(eventId: string): EventCategory {
  return EVENT_CATEGORIES[eventId] ?? "founding";
}
