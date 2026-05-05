import type { Period } from "@/lib/types";

export const periods: Period[] = [
  {
    id: "p1",
    unit: "Unit 1–2",
    name: "Networks of Exchange",
    startYear: 1200,
    endYear: 1450,
    description:
      "Trans-regional exchange via the Silk Roads, Indian Ocean, and Trans-Saharan routes. Mongol unification, Dar al-Islam expansion, and the rise of states like Mali and the Delhi Sultanate.",
    themes: [
      "Silk Roads revival under the Mongols (Pax Mongolica)",
      "Indian Ocean monsoon trade",
      "Trans-Saharan caravan trade and Mali",
      "Spread of Islam, Buddhism, and Neo-Confucianism",
      "Bubonic plague along trade networks",
    ],
    color: "#fbbf24",
  },
  {
    id: "p2",
    unit: "Unit 3–4",
    name: "Land-Based & Maritime Empires",
    startYear: 1450,
    endYear: 1750,
    description:
      "Gunpowder empires (Ottoman, Safavid, Mughal, Ming/Qing) consolidate. European maritime expansion creates the Columbian Exchange, Atlantic slave trade, and global silver flows.",
    themes: [
      "Gunpowder empires",
      "Columbian Exchange",
      "Atlantic slave trade",
      "Silver trade (Potosí ↔ Manila ↔ Ming China)",
      "Joint-stock companies (VOC, EIC)",
    ],
    color: "#60a5fa",
  },
  {
    id: "p3",
    unit: "Unit 5–6",
    name: "Revolutions & Industrialization",
    startYear: 1750,
    endYear: 1900,
    description:
      "Atlantic revolutions, Industrial Revolution, new imperialism. Steam, railroads, telegraph, and global migration reshape labor and politics.",
    themes: [
      "Atlantic revolutions (American, French, Haitian, Latin American)",
      "Industrial Revolution",
      "New imperialism — Scramble for Africa",
      "Indentured servitude after abolition",
      "Nationalism and ideologies",
    ],
    color: "#ef4444",
  },
  {
    id: "p4",
    unit: "Unit 7–9",
    name: "Global Conflict to Globalization",
    startYear: 1900,
    endYear: 2025,
    description:
      "World wars, decolonization, the Cold War, and globalization. New technologies, communism vs. capitalism, and the rise of multinational institutions.",
    themes: [
      "World Wars I & II",
      "Decolonization",
      "Cold War proxy conflicts",
      "Globalization and multinational corporations",
      "Digital revolution",
    ],
    color: "#4ade80",
  },
];

export function findPeriodByYear(year: number): Period {
  return (
    periods.find((p) => year >= p.startYear && year <= p.endYear) ??
    periods[periods.length - 1]
  );
}
