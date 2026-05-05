// AP World key cities — only ones the CED tests on.
// Period tags drive what shows up on the globe at a given time.

export type CityRole =
  | "capital"
  | "port"
  | "mine"
  | "religious"
  | "battle"
  | "industrial"
  | "tech"
  | "rebellion";

export type City = {
  id: string;
  name: string;
  lat: number;
  lng: number;
  periodIds: string[];
  role: CityRole;
  blurb: string; // one tight AP-style sentence
  emoji: string; // tiny visual cue
};

export const cities: City[] = [
  // Period 1 — 1200-1450
  { id: "hangzhou", name: "Hangzhou", lat: 30.27, lng: 120.15, periodIds: ["p1"], role: "capital", blurb: "Song dynasty capital; world's largest city c. 1200.", emoji: "🏯" },
  { id: "khanbaliq", name: "Khanbaliq (Beijing)", lat: 39.90, lng: 116.40, periodIds: ["p1", "p2", "p3", "p4"], role: "capital", blurb: "Yuan/Ming/Qing capital — seat of the Mandate of Heaven.", emoji: "🏯" },
  { id: "samarkand", name: "Samarkand", lat: 39.65, lng: 66.97, periodIds: ["p1"], role: "tech", blurb: "Silk Road hub; capital of Timur (Tamerlane).", emoji: "🐫" },
  { id: "baghdad", name: "Baghdad", lat: 33.31, lng: 44.36, periodIds: ["p1"], role: "capital", blurb: "Abbasid capital; sacked by the Mongols in 1258.", emoji: "📜" },
  { id: "constantinople", name: "Constantinople", lat: 41.01, lng: 28.98, periodIds: ["p1", "p2"], role: "capital", blurb: "Byzantine capital; fell to the Ottomans 1453.", emoji: "⛪" },
  { id: "cairo-mamluk", name: "Cairo", lat: 30.04, lng: 31.24, periodIds: ["p1", "p2"], role: "capital", blurb: "Mamluk seat; Mansa Musa flooded its markets with gold in 1324.", emoji: "🪙" },
  { id: "timbuktu", name: "Timbuktu", lat: 16.78, lng: -3.00, periodIds: ["p1", "p2"], role: "religious", blurb: "Mali university city; Sankoré madrasa under Mansa Musa.", emoji: "🪙" },
  { id: "kilwa", name: "Kilwa", lat: -8.96, lng: 39.50, periodIds: ["p1", "p2"], role: "port", blurb: "Wealthiest Swahili coast city-state; gold and ivory.", emoji: "⚓" },
  { id: "calicut", name: "Calicut", lat: 11.26, lng: 75.78, periodIds: ["p1", "p2"], role: "port", blurb: "Indian Ocean spice hub; da Gama landed here 1498.", emoji: "🌶️" },
  { id: "malacca", name: "Malacca", lat: 2.20, lng: 102.25, periodIds: ["p1", "p2"], role: "port", blurb: "Strategic strait entrepôt; spread Islam in SE Asia.", emoji: "⚓" },
  { id: "tenochtitlan", name: "Tenochtitlán", lat: 19.43, lng: -99.13, periodIds: ["p1", "p2"], role: "capital", blurb: "Aztec capital on Lake Texcoco; fell to Cortés 1521.", emoji: "🐍" },
  { id: "cuzco", name: "Cuzco", lat: -13.53, lng: -71.97, periodIds: ["p1", "p2"], role: "capital", blurb: "Inca capital; conquered by Pizarro 1533.", emoji: "🌄" },

  // Period 2 — 1450-1750
  { id: "istanbul", name: "Istanbul", lat: 41.01, lng: 28.98, periodIds: ["p2", "p3"], role: "capital", blurb: "Ottoman capital after 1453; Suleiman's golden age.", emoji: "🕌" },
  { id: "isfahan", name: "Isfahan", lat: 32.65, lng: 51.67, periodIds: ["p2"], role: "capital", blurb: "Safavid capital under Shah Abbas; 'half the world.'", emoji: "🕌" },
  { id: "agra", name: "Agra", lat: 27.18, lng: 78.02, periodIds: ["p2"], role: "capital", blurb: "Mughal capital; Akbar's syncretic court and Taj Mahal (1648).", emoji: "🕌" },
  { id: "potosi", name: "Potosí", lat: -19.58, lng: -65.75, periodIds: ["p2", "p3"], role: "mine", blurb: "Silver mountain (1545–) that powered the global economy.", emoji: "🪙" },
  { id: "manila", name: "Manila", lat: 14.60, lng: 120.98, periodIds: ["p2"], role: "port", blurb: "Galleon hub linking American silver to Ming China.", emoji: "⛵" },
  { id: "lisbon", name: "Lisbon", lat: 38.72, lng: -9.13, periodIds: ["p2"], role: "port", blurb: "Portuguese maritime empire — first global trade network.", emoji: "⛵" },
  { id: "amsterdam", name: "Amsterdam", lat: 52.37, lng: 4.90, periodIds: ["p2", "p3"], role: "port", blurb: "Home of the VOC (1602) — first joint-stock company.", emoji: "💰" },
  { id: "edo", name: "Edo (Tokyo)", lat: 35.68, lng: 139.76, periodIds: ["p2", "p3", "p4"], role: "capital", blurb: "Tokugawa capital under sakoku isolation, 1639–1853.", emoji: "🏯" },
  { id: "salvador", name: "Salvador", lat: -12.97, lng: -38.51, periodIds: ["p2", "p3"], role: "port", blurb: "Portuguese sugar/slave entrepôt in Brazil.", emoji: "🍬" },

  // Period 3 — 1750-1900
  { id: "london", name: "London", lat: 51.51, lng: -0.13, periodIds: ["p3", "p4"], role: "industrial", blurb: "Industrial Revolution and global imperial nerve center.", emoji: "🏭" },
  { id: "manchester", name: "Manchester", lat: 53.48, lng: -2.24, periodIds: ["p3"], role: "industrial", blurb: "First factory city; cotton textile capital.", emoji: "🏭" },
  { id: "paris-rev", name: "Paris", lat: 48.86, lng: 2.35, periodIds: ["p3", "p4"], role: "rebellion", blurb: "French Revolution (1789); Declaration of the Rights of Man.", emoji: "🗽" },
  { id: "cap-haitien", name: "Cap-Haïtien", lat: 19.76, lng: -72.20, periodIds: ["p3"], role: "rebellion", blurb: "Haitian Revolution (1791–1804); only successful slave revolt.", emoji: "✊" },
  { id: "calcutta", name: "Calcutta", lat: 22.57, lng: 88.36, periodIds: ["p3"], role: "capital", blurb: "British Raj capital; epicenter of the 1857 rebellion.", emoji: "🏛️" },
  { id: "hong-kong", name: "Hong Kong", lat: 22.30, lng: 114.17, periodIds: ["p3", "p4"], role: "port", blurb: "Ceded to Britain after the First Opium War (1842).", emoji: "⛵" },
  { id: "suez", name: "Suez", lat: 30.00, lng: 32.55, periodIds: ["p3", "p4"], role: "tech", blurb: "Suez Canal opened 1869; cut Europe–Asia route in half.", emoji: "🛳️" },

  // Period 4 — 1900-present
  { id: "sarajevo", name: "Sarajevo", lat: 43.86, lng: 18.41, periodIds: ["p4"], role: "battle", blurb: "1914 assassination triggered World War I.", emoji: "💥" },
  { id: "moscow", name: "Moscow", lat: 55.76, lng: 37.62, periodIds: ["p4"], role: "capital", blurb: "Soviet capital; Bolshevik Revolution moved here 1918.", emoji: "☭" },
  { id: "berlin", name: "Berlin", lat: 52.52, lng: 13.40, periodIds: ["p4"], role: "battle", blurb: "Wall divided Cold War Europe 1961–89.", emoji: "🧱" },
  { id: "hiroshima", name: "Hiroshima", lat: 34.39, lng: 132.46, periodIds: ["p4"], role: "battle", blurb: "First atomic bomb dropped, August 6, 1945.", emoji: "☢️" },
  { id: "saigon", name: "Saigon", lat: 10.82, lng: 106.63, periodIds: ["p4"], role: "battle", blurb: "Fell 1975; ended the Vietnam War.", emoji: "🪖" },
  { id: "shenzhen", name: "Shenzhen", lat: 22.54, lng: 114.06, periodIds: ["p4"], role: "industrial", blurb: "First Special Economic Zone (1980); engine of China's rise.", emoji: "🏗️" },
];

export function citiesForPeriod(periodId: string): City[] {
  return cities.filter((c) => c.periodIds.includes(periodId));
}
