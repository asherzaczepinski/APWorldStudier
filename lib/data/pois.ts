// Points of interest. Importance drives zoom-tier reveal.
// 1 = always visible (continent-scale).
// 2 = appears at moderate zoom (regional).
// 3 = appears only when zoomed in deep.

export type POICategory =
  | "capital"
  | "port"
  | "caravanserai"
  | "religious"
  | "battle"
  | "mine"
  | "university"
  | "tech"
  | "modern";

export type POI = {
  id: string;
  name: string;
  lat: number;
  lng: number;
  importance: 1 | 2 | 3;
  category: POICategory;
  blurb: string; // one tight AP-relevant sentence
  yearStart?: number;
  yearEnd?: number;
};

export const pois: POI[] = [
  // === Tier 1 — major capitals always shown ===
  { id: "beijing",        name: "Beijing",          lat: 39.90, lng: 116.40, importance: 1, category: "capital",   blurb: "Yuan / Ming / Qing / PRC capital — the seat of the Mandate of Heaven for 700+ years." },
  { id: "constantinople", name: "Constantinople / Istanbul", lat: 41.01, lng: 28.98, importance: 1, category: "capital", blurb: "Byzantine then Ottoman capital; the bridge between Europe and Asia." },
  { id: "cairo",          name: "Cairo",            lat: 30.04, lng: 31.24, importance: 1, category: "capital",   blurb: "Mamluk and Ottoman power center; Mansa Musa flooded its markets with gold in 1324." },
  { id: "delhi",          name: "Delhi",            lat: 28.61, lng: 77.21, importance: 1, category: "capital",   blurb: "Delhi Sultanate (1206–1526) and Mughal capital. Persianate Indo-Islamic court." },
  { id: "london",         name: "London",           lat: 51.51, lng: -0.13, importance: 1, category: "capital",   blurb: "Industrial Revolution + global British Empire nerve center." },
  { id: "paris",          name: "Paris",            lat: 48.86, lng: 2.35,  importance: 1, category: "capital",   blurb: "Center of the French Revolution and Enlightenment." },
  { id: "moscow",         name: "Moscow",           lat: 55.76, lng: 37.62, importance: 1, category: "capital",   blurb: "Tsarist + Soviet capital; survived Napoleon and the Wehrmacht." },
  { id: "tokyo",          name: "Tokyo / Edo",      lat: 35.68, lng: 139.76, importance: 1, category: "capital",  blurb: "Tokugawa shogunate; later Meiji modernization launchpad." },
  { id: "rome",           name: "Rome",             lat: 41.90, lng: 12.49, importance: 1, category: "capital",   blurb: "Papal capital; center of Catholic Europe and the Renaissance." },
  { id: "mexico-city",    name: "Mexico City",      lat: 19.43, lng: -99.13, importance: 1, category: "capital",  blurb: "Built on Tenochtitlán's ruins; capital of New Spain and global silver hub." },
  { id: "washington",     name: "Washington DC",    lat: 38.91, lng: -77.04, importance: 1, category: "capital",  blurb: "US capital from 1800; Cold War superpower seat." },
  { id: "baghdad",        name: "Baghdad",          lat: 33.31, lng: 44.36, importance: 1, category: "capital",   blurb: "Abbasid capital and Islamic Golden Age; sacked by Mongols 1258." },

  // === Tier 2 — major trade hubs / religious sites / battle sites ===
  { id: "samarkand",      name: "Samarkand",        lat: 39.65, lng: 66.97, importance: 2, category: "caravanserai", blurb: "Silk Road jewel; capital of Timur (Tamerlane), 14th-century Renaissance of the steppe." },
  { id: "bukhara",        name: "Bukhara",          lat: 39.77, lng: 64.42, importance: 2, category: "caravanserai", blurb: "Silk Road metropolis and major Sufi learning center." },
  { id: "kashgar",        name: "Kashgar",          lat: 39.47, lng: 75.99, importance: 2, category: "caravanserai", blurb: "Western terminus of the Tarim Basin Silk Road." },
  { id: "dunhuang",       name: "Dunhuang",         lat: 40.14, lng: 94.66, importance: 2, category: "caravanserai", blurb: "Mogao Caves; Silk Road oasis where Buddhist art flourished." },
  { id: "tabriz",         name: "Tabriz",           lat: 38.08, lng: 46.30, importance: 2, category: "caravanserai", blurb: "Ilkhanate capital; major Silk Road and Safavid trading center." },
  { id: "hormuz",         name: "Hormuz",           lat: 27.10, lng: 56.30, importance: 2, category: "port",        blurb: "Strait of Hormuz — gateway between the Persian Gulf and Indian Ocean." },
  { id: "calicut",        name: "Calicut",          lat: 11.26, lng: 75.78, importance: 2, category: "port",        blurb: "Indian Ocean spice hub; da Gama landed here 1498." },
  { id: "malacca",        name: "Malacca",          lat: 2.20,  lng: 102.25, importance: 2, category: "port",       blurb: "Strategic strait entrepôt; spread Islam across SE Asia." },
  { id: "aden",           name: "Aden",             lat: 12.78, lng: 45.04, importance: 2, category: "port",        blurb: "Red Sea / Indian Ocean choke point; British coaling station after 1839." },
  { id: "kilwa",          name: "Kilwa",            lat: -8.96, lng: 39.50, importance: 2, category: "port",        blurb: "Wealthiest Swahili coast city-state; gold from Great Zimbabwe." },
  { id: "mombasa",        name: "Mombasa",          lat: -4.04, lng: 39.67, importance: 2, category: "port",        blurb: "Swahili coast port; later Portuguese, Omani, then British East African hub." },
  { id: "sofala",         name: "Sofala",           lat: -20.16, lng: 34.86, importance: 2, category: "port",       blurb: "Swahili port that exported Great Zimbabwe's gold." },
  { id: "timbuktu",       name: "Timbuktu",         lat: 16.78, lng: -3.00, importance: 2, category: "university",  blurb: "Mali university city; Sankoré madrasa under Mansa Musa.", yearStart: 1100 },
  { id: "gao",            name: "Gao",              lat: 16.27, lng: -0.04, importance: 3, category: "capital",     blurb: "Songhai capital after Mali — center of West African gold trade.", yearStart: 1300 },
  { id: "marrakesh",      name: "Marrakesh",        lat: 31.63, lng: -8.00, importance: 2, category: "caravanserai",blurb: "Almoravid / Almohad / Saadian capital; trans-Saharan caravan terminal." },
  { id: "fez",            name: "Fez",              lat: 34.03, lng: -5.00, importance: 3, category: "university",  blurb: "Al-Qarawiyyin (859) — one of the oldest continuously operating universities." },
  { id: "venice",         name: "Venice",           lat: 45.44, lng: 12.32, importance: 2, category: "port",        blurb: "Mediterranean trading republic; Marco Polo's hometown; spice monopolist." },
  { id: "genoa",          name: "Genoa",            lat: 44.41, lng: 8.93,  importance: 3, category: "port",        blurb: "Venice's rival; bankers to the Spanish Crown." },
  { id: "florence",       name: "Florence",         lat: 43.77, lng: 11.25, importance: 3, category: "tech",        blurb: "Medici Florence — birthplace of the Renaissance and double-entry bookkeeping." },
  { id: "bruges",         name: "Bruges",           lat: 51.21, lng: 3.22,  importance: 3, category: "port",        blurb: "Hanseatic League hub; medieval Europe's wool / cloth capital." },
  { id: "antwerp",        name: "Antwerp",          lat: 51.22, lng: 4.40,  importance: 2, category: "port",        blurb: "16th-century world entrepôt before Dutch independence shifted trade to Amsterdam." },
  { id: "amsterdam",      name: "Amsterdam",        lat: 52.37, lng: 4.90,  importance: 2, category: "port",        blurb: "VOC (1602) headquarters — first joint-stock company; modern banking forged here." },
  { id: "lisbon",         name: "Lisbon",           lat: 38.72, lng: -9.13, importance: 2, category: "port",        blurb: "Launchpad of the Portuguese maritime empire — first global trade network." },
  { id: "seville",        name: "Seville",          lat: 37.39, lng: -5.99, importance: 3, category: "port",        blurb: "Casa de Contratación — sole legal port for Spanish American silver until 1717." },
  { id: "cadiz",          name: "Cádiz",            lat: 36.53, lng: -6.30, importance: 3, category: "port",        blurb: "Replaced Seville as Spain's American trade port after 1717." },
  { id: "potosi",         name: "Potosí",           lat: -19.58, lng: -65.75, importance: 2, category: "mine",      blurb: "Cerro Rico (1545–) world's largest silver source; ran on brutal mita labor.", yearStart: 1545 },
  { id: "zacatecas",      name: "Zacatecas",        lat: 22.77, lng: -102.58, importance: 3, category: "mine",      blurb: "New Spain's silver mountain (1546)." },
  { id: "acapulco",       name: "Acapulco",         lat: 16.86, lng: -99.88, importance: 3, category: "port",       blurb: "Pacific terminus of the Spanish silver / silk trade with Manila.", yearStart: 1565, yearEnd: 1815 },
  { id: "manila",         name: "Manila",           lat: 14.60, lng: 120.98, importance: 2, category: "port",       blurb: "Spain's only Pacific colonial capital; Asian terminus of the silver galleon trade." },
  { id: "macau",          name: "Macau",            lat: 22.20, lng: 113.55, importance: 3, category: "port",       blurb: "Portuguese trading enclave in China from 1557; gateway for the China–Japan silver trade." },
  { id: "goa",            name: "Goa",              lat: 15.30, lng: 74.12, importance: 3, category: "port",        blurb: "Portuguese 'Rome of the East' (1510); base for Estado da Índia." },
  { id: "batavia",        name: "Batavia (Jakarta)", lat: -6.21, lng: 106.85, importance: 3, category: "port",      blurb: "VOC capital from 1619 — the heart of Dutch Asia." },
  { id: "singapore",      name: "Singapore",        lat: 1.30,  lng: 103.85, importance: 2, category: "port",       blurb: "British free port (1819); modern South-East Asian financial hub." },
  { id: "hong-kong",      name: "Hong Kong",        lat: 22.30, lng: 114.17, importance: 2, category: "port",       blurb: "Ceded to Britain after the First Opium War; returned to China 1997." },

  // Religious / pilgrimage
  { id: "mecca",          name: "Mecca",            lat: 21.42, lng: 39.83, importance: 2, category: "religious",   blurb: "Islam's holiest city; destination of the hajj." },
  { id: "medina",         name: "Medina",           lat: 24.47, lng: 39.61, importance: 3, category: "religious",   blurb: "Second holiest city of Islam; Muhammad's tomb." },
  { id: "jerusalem",      name: "Jerusalem",        lat: 31.78, lng: 35.22, importance: 2, category: "religious",   blurb: "Holy to Jews, Christians, and Muslims; contested for millennia." },
  { id: "vatican",        name: "Vatican / Rome",   lat: 41.90, lng: 12.46, importance: 3, category: "religious",   blurb: "Seat of the Catholic Church; Reformation rebellion target." },
  { id: "lhasa",          name: "Lhasa",            lat: 29.65, lng: 91.13, importance: 3, category: "religious",   blurb: "Tibetan Buddhist capital; Potala Palace home of the Dalai Lama." },
  { id: "varanasi",       name: "Varanasi",         lat: 25.32, lng: 82.97, importance: 3, category: "religious",   blurb: "Hinduism's holiest city, on the Ganges." },
  { id: "wittenberg",     name: "Wittenberg",       lat: 51.87, lng: 12.65, importance: 3, category: "religious",   blurb: "Luther nailed the 95 Theses here in 1517." },

  // Battles / war sites
  { id: "stalingrad",     name: "Stalingrad / Volgograd", lat: 48.71, lng: 44.51, importance: 2, category: "battle", blurb: "Turning point of WWII Eastern Front (1942–43)." },
  { id: "hiroshima",      name: "Hiroshima",        lat: 34.39, lng: 132.46, importance: 2, category: "battle",    blurb: "First atomic bomb dropped, August 6, 1945." },
  { id: "pearl-harbor",   name: "Pearl Harbor",     lat: 21.35, lng: -157.95, importance: 3, category: "battle",   blurb: "Japanese attack December 7, 1941 — brought the US into WWII." },
  { id: "sarajevo",       name: "Sarajevo",         lat: 43.86, lng: 18.41, importance: 2, category: "battle",     blurb: "Archduke Franz Ferdinand assassinated June 28, 1914 — triggered WWI." },
  { id: "verdun",         name: "Verdun",           lat: 49.16, lng: 5.39,  importance: 3, category: "battle",     blurb: "1916 — among the bloodiest battles of WWI; ~700,000 casualties." },
  { id: "waterloo",       name: "Waterloo",         lat: 50.68, lng: 4.41,  importance: 3, category: "battle",     blurb: "Napoleon's final defeat, June 1815." },
  { id: "yorktown",       name: "Yorktown",         lat: 37.24, lng: -76.51, importance: 3, category: "battle",    blurb: "Cornwallis surrendered to Washington and Rochambeau, 1781." },
  { id: "plassey",        name: "Plassey",          lat: 23.81, lng: 88.25, importance: 3, category: "battle",     blurb: "1757 EIC victory that opened Bengal to British rule." },
  { id: "adwa",           name: "Adwa",             lat: 14.17, lng: 38.89, importance: 3, category: "battle",     blurb: "1896 Ethiopian victory over Italy — only major colonial defeat in Africa." },
  { id: "nanjing",        name: "Nanjing",          lat: 32.06, lng: 118.80, importance: 2, category: "capital",   blurb: "Ming capital; Taiping 'Heavenly Capital'; 1937 Japanese massacre." },
  { id: "panipat",        name: "Panipat",          lat: 29.39, lng: 76.97, importance: 3, category: "battle",     blurb: "Three battles (1526, 1556, 1761) decided North India's rulers." },
  { id: "vienna",         name: "Vienna",           lat: 48.21, lng: 16.37, importance: 2, category: "capital",    blurb: "Habsburg capital; Ottoman siege of 1683 marked the empire's high tide." },
  { id: "berlin",         name: "Berlin",           lat: 52.52, lng: 13.40, importance: 2, category: "capital",    blurb: "Prussian / German capital; divided 1945–89 by the Iron Curtain." },

  // Mines / canals / engineering
  { id: "suez",           name: "Suez Canal",       lat: 30.00, lng: 32.55, importance: 2, category: "tech",       blurb: "Opened 1869; cut Europe–Asia voyage by ~7,000 km.", yearStart: 1869 },
  { id: "panama-canal",   name: "Panama Canal",     lat: 9.08,  lng: -79.68, importance: 3, category: "tech",      blurb: "Opened 1914; let ships skip the Cape Horn detour.", yearStart: 1914 },
  { id: "witwatersrand",  name: "Witwatersrand",    lat: -26.20, lng: 28.05, importance: 3, category: "mine",      blurb: "South African gold rush (1886) — sparked the Boer Wars.", yearStart: 1886 },

  // Major modern / Cold War sites
  { id: "shenzhen",       name: "Shenzhen",         lat: 22.54, lng: 114.06, importance: 2, category: "modern",    blurb: "First Special Economic Zone (1980); fishing village → megacity in 30 years.", yearStart: 1980 },
  { id: "shanghai",       name: "Shanghai",         lat: 31.23, lng: 121.47, importance: 2, category: "port",      blurb: "Treaty port (1842) and 21st-century world economic engine." },
  { id: "kolkata",        name: "Kolkata / Calcutta", lat: 22.57, lng: 88.36, importance: 2, category: "capital",  blurb: "British Raj capital until 1911; 1857 rebellion epicenter; partition refugee inflow." },
  { id: "mumbai",         name: "Mumbai / Bombay",  lat: 19.08, lng: 72.88, importance: 2, category: "port",       blurb: "EIC port; Britain's main Indian textile and cotton hub." },
  { id: "saigon",         name: "Saigon / HCMC",    lat: 10.82, lng: 106.63, importance: 3, category: "battle",    blurb: "Fell April 30, 1975 — ended the Vietnam War.", yearStart: 1900 },
  { id: "hanoi",          name: "Hanoi",            lat: 21.03, lng: 105.85, importance: 3, category: "capital",   blurb: "Ho Chi Minh's North Vietnamese capital; Soviet-backed during the Vietnam War." },
  { id: "havana",         name: "Havana",           lat: 23.13, lng: -82.36, importance: 3, category: "capital",   blurb: "Spanish silver-fleet anchor; 1959 Cuban Revolution flashpoint." },
  { id: "tehran",         name: "Tehran",           lat: 35.69, lng: 51.39, importance: 2, category: "capital",    blurb: "Iranian capital from 1796; Shah / Islamic Republic transition 1979." },
  { id: "isfahan",        name: "Isfahan",          lat: 32.65, lng: 51.67, importance: 2, category: "capital",    blurb: "Safavid capital under Shah Abbas — 'half the world.'" },
  { id: "tenochtitlan",   name: "Tenochtitlán",     lat: 19.43, lng: -99.13, importance: 2, category: "capital",   blurb: "Aztec capital on Lake Texcoco; bigger than any European city in 1500.", yearEnd: 1521 },
  { id: "cuzco",          name: "Cuzco",            lat: -13.53, lng: -71.97, importance: 2, category: "capital",  blurb: "Inca capital; conquered by Pizarro 1533.", yearEnd: 1533 },
  { id: "great-zimbabwe", name: "Great Zimbabwe",   lat: -20.27, lng: 30.93, importance: 3, category: "capital",   blurb: "Stone-walled capital (1100–1450) of a southern African gold trade kingdom.", yearStart: 1100, yearEnd: 1450 },
  { id: "machu-picchu",   name: "Machu Picchu",     lat: -13.16, lng: -72.55, importance: 3, category: "capital",  blurb: "Inca royal estate built ~1450; never found by the Spanish." },

  // Universities / learning
  { id: "al-azhar",       name: "Al-Azhar (Cairo)", lat: 30.05, lng: 31.26, importance: 3, category: "university", blurb: "Founded 970 — premier Sunni learning center for over a millennium." },
  { id: "bologna",        name: "Bologna",          lat: 44.49, lng: 11.34, importance: 3, category: "university", blurb: "Western Europe's oldest university (1088)." },
  { id: "salamanca",      name: "Salamanca",        lat: 40.97, lng: -5.66, importance: 3, category: "university", blurb: "Castilian university (1218) where the School of Salamanca debated New World ethics." },
  { id: "oxford",         name: "Oxford",           lat: 51.75, lng: -1.26, importance: 3, category: "university", blurb: "English university (1096) — long entwined with British imperial governance." },
  { id: "nalanda",        name: "Nalanda",          lat: 25.13, lng: 85.44, importance: 3, category: "university", blurb: "Buddhist mega-monastery in eastern India; sacked c. 1200." },

  // Caravanserais / lesser nodes
  { id: "merv",           name: "Merv",             lat: 37.66, lng: 62.19, importance: 3, category: "caravanserai", blurb: "Silk Road oasis sacked by Mongols 1221 — an estimated 700,000 killed." },
  { id: "balkh",          name: "Balkh",            lat: 36.76, lng: 66.90, importance: 3, category: "caravanserai", blurb: "Ancient 'mother of cities' on the Silk Road, in modern Afghanistan." },
  { id: "khotan",         name: "Khotan / Hotan",   lat: 37.11, lng: 79.93, importance: 3, category: "caravanserai", blurb: "Silk Road jade trade center on the southern Tarim route." },
  { id: "aleppo",         name: "Aleppo",           lat: 36.20, lng: 37.16, importance: 3, category: "caravanserai", blurb: "Trans-Asian caravan terminus; one of the oldest continuously inhabited cities." },
  { id: "damascus",       name: "Damascus",         lat: 33.51, lng: 36.30, importance: 2, category: "caravanserai", blurb: "Umayyad capital; major Mediterranean–Mesopotamia caravan node." },
  { id: "mosul",          name: "Mosul",            lat: 36.34, lng: 43.13, importance: 3, category: "caravanserai", blurb: "Strategic Tigris crossing; Mongol massacre 1262." },
];

export function poisAtYear(year: number): POI[] {
  return pois.filter((p) => {
    if (p.yearStart !== undefined && year < p.yearStart) return false;
    if (p.yearEnd !== undefined && year > p.yearEnd) return false;
    return true;
  });
}
