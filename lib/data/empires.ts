// Curated empire/state polities — colored on the globe at the active year.
// Phases handle the fact that borders shift over centuries.

export type EmpirePhase = {
  yearStart: number;
  yearEnd: number;
  countryCodes: string[];
};

export type Empire = {
  id: string;
  name: string;
  color: string;
  blurb: string;
  facts: string[];
  phases: EmpirePhase[];
};

export const empires: Empire[] = [
  {
    id: "goryeo",
    name: "Goryeo Korea",
    color: "#0ea5e9",
    blurb:
      "Korean kingdom (918–1392) closely modeled on China — Confucian bureaucracy, Buddhism, civil-service exam — while keeping its own identity.",
    facts: [
      "Adopted Chinese-style civil service exam (958).",
      "State Buddhism + Confucian bureaucracy.",
      "Invented metal movable type (1377), before Gutenberg.",
      "Survived Mongol invasions as a tributary state of the Yuan.",
    ],
    phases: [{ yearStart: 1200, yearEnd: 1392, countryCodes: ["KOR", "PRK"] }],
  },
  {
    id: "kamakura-japan",
    name: "Medieval Japan (Kamakura / Heian)",
    color: "#a855f7",
    blurb:
      "Japan in the period 1200–1450: Heian aristocratic court culture giving way to the Kamakura and Ashikaga shogunates — feudal warriors, samurai, daimyo, and bushido.",
    facts: [
      "Heian period (794–1185) — courtly culture, Tale of Genji, kana writing.",
      "Kamakura shogunate (1185–1333) — first samurai-led government.",
      "Defeated two Mongol invasions (1274, 1281) — kamikaze 'divine winds.'",
      "Ashikaga shogunate (1336–1573) — Zen Buddhism, Noh theater.",
    ],
    phases: [{ yearStart: 1200, yearEnd: 1450, countryCodes: ["JPN"] }],
  },
  {
    id: "dai-viet",
    name: "Dai Viet (Vietnam)",
    color: "#84cc16",
    blurb:
      "Vietnamese kingdom that adopted Chinese-style administration but fiercely resisted Chinese rule. Source of Champa rice. Defeated three Mongol invasions in the 1280s.",
    facts: [
      "Tran Dynasty (1225–1400) repulsed three Mongol invasions.",
      "Confucian civil-service bureaucracy, Mahayana Buddhism.",
      "Source of Champa rice — fast-ripening strain that fueled Song China's population boom.",
    ],
    phases: [{ yearStart: 1200, yearEnd: 1450, countryCodes: ["VNM"] }],
  },
  {
    id: "mamluk",
    name: "Mamluk Sultanate",
    color: "#eab308",
    blurb:
      "Slave-soldier dynasty in Egypt and Syria (1250–1517). Stopped the Mongols at Ain Jalut (1260) — the only force to do so. Patrons of Cairo's gold + spice trade.",
    facts: [
      "Founded 1250 when Mamluk slave-soldiers seized power from the Ayyubids.",
      "Defeated the Mongols at Ain Jalut, 1260.",
      "Conquered by the Ottomans, 1517.",
      "Built much of medieval Cairo's monumental architecture.",
    ],
    phases: [{ yearStart: 1250, yearEnd: 1517, countryCodes: ["EGY", "SYR", "ISR", "PSE", "JOR", "LBN"] }],
  },
  {
    id: "khmer",
    name: "Khmer Empire",
    color: "#06b6d4",
    blurb:
      "Hindu-Buddhist empire of Cambodia (802–1431). Built Angkor Wat and a massive water-management system that supported a city of ~1 million.",
    facts: [
      "Capital at Angkor.",
      "Angkor Wat originally built (early 1100s) as a Hindu temple to Vishnu, later converted to Buddhist.",
      "Vast canal + reservoir (baray) system enabled three rice harvests a year.",
      "Sacked by Ayutthaya 1431; capital moved south.",
    ],
    phases: [{ yearStart: 1200, yearEnd: 1431, countryCodes: ["KHM", "THA", "LAO"] }],
  },
  {
    id: "majapahit",
    name: "Majapahit",
    color: "#10b981",
    blurb:
      "Last great Hindu-Buddhist empire of Java (1293–c. 1527). Controlled much of maritime Southeast Asia until Islamic sultanates rose.",
    facts: [
      "Founded 1293 after defeating a Mongol invasion fleet.",
      "Peak under Hayam Wuruk + Gajah Mada (1350–89).",
      "Indian Ocean trade hub; coexisted with Buddhism and Islam.",
      "Replaced piecewise by Muslim sultanates by ~1527.",
    ],
    phases: [{ yearStart: 1293, yearEnd: 1527, countryCodes: ["IDN"] }],
  },
  {
    id: "vijayanagara",
    name: "Vijayanagara Empire",
    color: "#fb923c",
    blurb:
      "Hindu South Indian empire (1336–1646) that resisted Muslim sultanates to the north. Capital at Vijayanagara (Hampi) was one of the largest cities of its day.",
    facts: [
      "Founded 1336 by Harihara and Bukka.",
      "Rich on Indian Ocean spice + cotton trade.",
      "Lost capital after the Battle of Talikota (1565).",
      "Hampi ruins are a UNESCO World Heritage Site.",
    ],
    phases: [{ yearStart: 1336, yearEnd: 1646, countryCodes: ["IND"] }],
  },
  {
    id: "hre",
    name: "Holy Roman Empire",
    color: "#fde047",
    blurb:
      "Loose confederation of central European states under an elected emperor (962–1806). Dominated medieval and early modern Germany, Austria, Bohemia, and northern Italy.",
    facts: [
      "Crowned: Otto I (962). Voltaire: 'neither holy, nor Roman, nor an empire.'",
      "Habsburg dynasty held the imperial title from 1438 onward.",
      "Reformation tore it religiously; Westphalia (1648) cemented its decentralization.",
      "Dissolved by Napoleon in 1806.",
    ],
    phases: [
      { yearStart: 1200, yearEnd: 1450, countryCodes: ["DEU", "AUT", "CZE", "CHE", "NLD", "BEL", "LUX", "ITA"] },
      { yearStart: 1451, yearEnd: 1806, countryCodes: ["DEU", "AUT", "CZE", "CHE", "BEL", "LUX"] },
    ],
  },
  {
    id: "ethiopia-solomonic",
    name: "Solomonic Ethiopia",
    color: "#65a30d",
    blurb:
      "Christian East African dynasty (1270–1974) that traced itself to King Solomon. One of the few African states to escape European colonization.",
    facts: [
      "Founded 1270 by Yekuno Amlak.",
      "Defeated Italy at Adwa (1896) — only major colonial defeat in Africa.",
      "Coptic Christianity; capital eventually at Addis Ababa.",
      "Overthrown 1974 by the Derg (Soviet-backed).",
    ],
    phases: [{ yearStart: 1270, yearEnd: 1936, countryCodes: ["ETH", "ERI"] }],
  },
  {
    id: "mississippian",
    name: "Mississippian Culture",
    color: "#84cc16",
    blurb:
      "Maize-farming, mound-building societies of the eastern North American woodlands (c. 800–1600). Cahokia was the largest city north of Mexico.",
    facts: [
      "Cahokia (near modern St. Louis) peaked c. 1100 with ~20,000 people.",
      "Massive earthen pyramids — Monks Mound is the largest.",
      "Society declined for unclear reasons before European contact.",
      "Successor cultures (Natchez, Creek) survived into the colonial era.",
    ],
    phases: [{ yearStart: 1200, yearEnd: 1600, countryCodes: ["USA"] }],
  },
  {
    id: "song",
    name: "Song Dynasty",
    color: "#dc2626",
    blurb:
      "Pre-Mongol Chinese dynasty. Confucian revival, civil service exam, Champa rice, paper money, gunpowder, and the magnetic compass — the most prosperous and innovative state of its time.",
    facts: [
      "Northern Song (960–1127) ruled from Kaifeng; Southern Song (1127–1279) from Hangzhou.",
      "Restored the imperial civil service exam; meritocratic bureaucracy of scholar-officials.",
      "Imported Champa rice from Vietnam — fast-growing, two harvests a year, fueled population boom.",
      "Invented (or refined) paper money, gunpowder weapons, the magnetic compass, and movable type.",
      "Fell to the Mongols in 1279 (Battle of Yamen).",
    ],
    phases: [
      { yearStart: 1200, yearEnd: 1279, countryCodes: ["CHN"] },
    ],
  },
  {
    id: "mongol",
    name: "Mongol Empire",
    color: "#ec4899",
    blurb:
      "Largest contiguous land empire in history. Linked Eurasia under the Pax Mongolica.",
    facts: [
      "Founded 1206 when Temüjin became Genghis Khan.",
      "By 1294 stretched from Korea to Hungary.",
      "Split into 4 khanates: Yuan, Chagatai, Ilkhanate, Golden Horde.",
      "Made Silk Road safe for Marco Polo and Ibn Battuta.",
    ],
    phases: [
      { yearStart: 1206, yearEnd: 1227, countryCodes: ["MNG"] },
      { yearStart: 1228, yearEnd: 1259, countryCodes: ["MNG", "CHN", "KAZ", "UZB", "KGZ", "TJK", "IRN", "IRQ", "AFG", "TKM"] },
      { yearStart: 1260, yearEnd: 1294, countryCodes: ["MNG", "CHN", "RUS", "KAZ", "UZB", "KGZ", "TJK", "IRN", "IRQ", "AFG", "TKM", "UKR", "BLR", "GEO", "ARM", "AZE"] },
    ],
  },
  {
    id: "yuan",
    name: "Yuan Dynasty",
    color: "#fcd34d",
    blurb: "Mongol-ruled China founded by Kublai Khan; rebuilt the Grand Canal and welcomed Marco Polo.",
    facts: [
      "Founded 1271 by Kublai Khan.",
      "First non-Han dynasty to rule all China.",
      "Marco Polo served at the court (1275–1292).",
      "Fell to peasant rebellions → Ming, 1368.",
    ],
    phases: [{ yearStart: 1271, yearEnd: 1368, countryCodes: ["CHN", "MNG"] }],
  },
  {
    id: "ming",
    name: "Ming Dynasty",
    color: "#facc15",
    blurb: "Restored Han Chinese rule; sent Zheng He on treasure voyages, then turned inward.",
    facts: [
      "Yongle Emperor moved the capital to Beijing and built the Forbidden City.",
      "Zheng He's seven voyages (1405–1433) reached East Africa.",
      "Halted overseas voyages after 1433; built much of the Great Wall.",
      "Population doubled with American crops; fell 1644.",
    ],
    phases: [{ yearStart: 1368, yearEnd: 1644, countryCodes: ["CHN"] }],
  },
  {
    id: "qing",
    name: "Qing Dynasty",
    color: "#fb923c",
    blurb: "Manchu dynasty; last Chinese empire. Doubled territory and population.",
    facts: [
      "Manchus took Beijing 1644.",
      "Kangxi (r. 1661–1722) and Qianlong (r. 1735–96) expanded into Central Asia.",
      "Forced Han queue hairstyle.",
      "Crippled by the Opium Wars and Taiping Rebellion; fell 1912.",
    ],
    phases: [
      { yearStart: 1644, yearEnd: 1750, countryCodes: ["CHN", "MNG"] },
      { yearStart: 1751, yearEnd: 1912, countryCodes: ["CHN", "MNG", "TWN"] },
    ],
  },
  {
    id: "delhi",
    name: "Delhi Sultanate",
    color: "#a855f7",
    blurb: "Turkic Muslim dynasties ruled most of northern India until the Mughals.",
    facts: [
      "Five dynasties from Mamluk (1206) to Lodi (1526).",
      "Spread Sufi orders and Persian-influenced courtly culture.",
      "Levied jizya on non-Muslims.",
      "Ended at Panipat 1526 by Babur's Mughals.",
    ],
    phases: [{ yearStart: 1206, yearEnd: 1526, countryCodes: ["IND", "PAK", "BGD"] }],
  },
  {
    id: "mughal",
    name: "Mughal Empire",
    color: "#c084fc",
    blurb: "Persianate gunpowder empire; produced Akbar's syncretism and the Taj Mahal.",
    facts: [
      "Founded 1526 by Babur.",
      "Akbar (r. 1556–1605) merged Hindu/Muslim/Christian/Zoroastrian ideas.",
      "Cotton textiles made Mughal India the world's largest economy c. 1700.",
      "Aurangzeb's reimposed jizya and southern wars weakened the state.",
    ],
    phases: [
      { yearStart: 1526, yearEnd: 1700, countryCodes: ["IND", "PAK", "BGD", "AFG"] },
      { yearStart: 1701, yearEnd: 1857, countryCodes: ["IND", "PAK", "BGD"] },
    ],
  },
  {
    id: "mali",
    name: "Mali Empire",
    color: "#fde047",
    blurb: "West African empire of gold; Mansa Musa's hajj made it world-famous.",
    facts: [
      "Founded by Sundiata Keita 1235.",
      "Mansa Musa's 1324 hajj crashed Cairo's gold price.",
      "Timbuktu's Sankoré madrasa drew scholars from across Dar al-Islam.",
      "Declined after 1400; replaced by Songhai by 1500.",
    ],
    phases: [{ yearStart: 1235, yearEnd: 1465, countryCodes: ["MLI", "GIN", "SEN", "GMB", "MRT", "BFA"] }],
  },
  {
    id: "songhai",
    name: "Songhai Empire",
    color: "#eab308",
    blurb: "West Africa's largest empire; sacked by Moroccans in 1591.",
    facts: [
      "Sunni Ali (r. 1464–92) built it from Mali's ruins.",
      "Askia the Great's hajj 1496–98.",
      "Defeated at Tondibi 1591 by Moroccan musketeers.",
    ],
    phases: [{ yearStart: 1464, yearEnd: 1591, countryCodes: ["MLI", "NER", "BFA", "GIN", "SEN", "MRT"] }],
  },
  {
    id: "byzantine",
    name: "Byzantine Empire",
    color: "#6366f1",
    blurb: "Eastern Roman remnant; fell to Ottomans in 1453.",
    facts: [
      "Held Constantinople for over 1100 years.",
      "Greek-speaking Orthodox Christian empire.",
      "Walls breached by Mehmed II's bombards 1453.",
    ],
    phases: [
      { yearStart: 1200, yearEnd: 1300, countryCodes: ["GRC", "TUR"] },
      { yearStart: 1301, yearEnd: 1453, countryCodes: ["GRC"] },
    ],
  },
  {
    id: "ottoman",
    name: "Ottoman Empire",
    color: "#16a34a",
    blurb: "Sunni Muslim empire spanning the Mediterranean from 1300 to WWI.",
    facts: [
      "Founded c. 1299 by Osman I.",
      "Took Constantinople 1453 → Istanbul.",
      "Suleiman the Magnificent (r. 1520–66) marked the apex.",
      "Dissolved 1922 after WWI; replaced by Republic of Turkey.",
    ],
    phases: [
      { yearStart: 1300, yearEnd: 1453, countryCodes: ["TUR"] },
      { yearStart: 1454, yearEnd: 1566, countryCodes: ["TUR", "GRC", "BGR", "ALB", "MKD", "BIH", "SRB", "HUN", "ROU"] },
      { yearStart: 1567, yearEnd: 1700, countryCodes: ["TUR", "GRC", "BGR", "ALB", "MKD", "BIH", "SRB", "HUN", "ROU", "EGY", "SYR", "IRQ", "JOR", "ISR", "PSE", "LBN", "SAU", "YEM", "LBY", "TUN", "DZA"] },
      { yearStart: 1701, yearEnd: 1914, countryCodes: ["TUR", "SYR", "IRQ", "JOR", "ISR", "PSE", "LBN", "SAU", "YEM"] },
    ],
  },
  {
    id: "safavid",
    name: "Safavid Empire",
    color: "#84cc16",
    blurb: "Established Twelver Shia Islam as Iran's state religion.",
    facts: [
      "Founded 1501 by Shah Ismail I.",
      "Shah Abbas (r. 1588–1629) made Isfahan a wonder of the world.",
      "Long rivalry with Sunni Ottomans.",
      "Collapsed 1736.",
    ],
    phases: [{ yearStart: 1501, yearEnd: 1736, countryCodes: ["IRN", "AZE", "ARM", "TKM"] }],
  },
  {
    id: "maya",
    name: "Postclassic Maya",
    color: "#a3e635",
    blurb: "Yucatán Maya city-states; not one empire but a network of polities like Mayapán.",
    facts: [
      "Classic Maya collapsed c. 900 CE; Postclassic centers (1200–1521) included Mayapán, Chichen Itza.",
      "Famous for hieroglyphic writing, base-20 math, and the Long Count calendar.",
      "Spanish conquest of the Maya took until 1697 (Nojpetén).",
    ],
    phases: [{ yearStart: 1200, yearEnd: 1521, countryCodes: ["BLZ", "GTM", "HND"] }],
  },
  {
    id: "aztec",
    name: "Aztec Triple Alliance",
    color: "#d97706",
    blurb: "Mexica-led tribute empire; fell to Cortés and smallpox in 1521.",
    facts: [
      "Triple alliance of Tenochtitlán, Texcoco, Tlacopan (1428).",
      "Capital Tenochtitlán was bigger than any European city.",
      "Cortés + Tlaxcala allies + smallpox toppled it 1519–21.",
    ],
    phases: [{ yearStart: 1428, yearEnd: 1521, countryCodes: ["MEX"] }],
  },
  {
    id: "inca",
    name: "Inca Empire",
    color: "#b91c1c",
    blurb: "Largest pre-Columbian American empire, run on terrace farming and quipus.",
    facts: [
      "Pachacuti expanded it from 1438.",
      "23,000 km of paved roads through the Andes.",
      "Civil war + smallpox + Pizarro = collapse 1533.",
    ],
    phases: [{ yearStart: 1438, yearEnd: 1533, countryCodes: ["PER", "BOL", "ECU", "CHL"] }],
  },
  {
    id: "spanish-empire",
    name: "Spanish Empire",
    color: "#dc2626",
    blurb: "First truly global empire; collapsed in waves of independence.",
    facts: [
      "Treaty of Tordesillas (1494) split the New World with Portugal.",
      "Encomienda + repartimiento extracted indigenous labor.",
      "Potosí silver fueled global trade for 250 years.",
      "Lost the Americas 1810–25; lost Cuba/Philippines 1898.",
    ],
    phases: [
      { yearStart: 1492, yearEnd: 1700, countryCodes: ["ESP", "MEX", "CUB", "DOM", "HTI", "PRI", "GTM", "HND", "SLV", "NIC", "CRI", "PAN", "COL", "VEN", "ECU", "PER", "BOL", "CHL", "ARG", "URY", "PRY", "PHL"] },
      { yearStart: 1701, yearEnd: 1810, countryCodes: ["ESP", "MEX", "CUB", "DOM", "PRI", "GTM", "HND", "SLV", "NIC", "CRI", "PAN", "COL", "VEN", "ECU", "PER", "BOL", "CHL", "ARG", "URY", "PRY", "PHL"] },
      { yearStart: 1811, yearEnd: 1898, countryCodes: ["ESP", "CUB", "PRI", "PHL"] },
    ],
  },
  {
    id: "portuguese-empire",
    name: "Portuguese Empire",
    color: "#15803d",
    blurb: "Pioneered the Indian Ocean route and held Brazil for 322 years.",
    facts: [
      "Henry the Navigator funded African exploration from 1419.",
      "Tordesillas line gave them Brazil.",
      "Held Goa, Macau, Mozambique, Angola, Brazil for centuries.",
    ],
    phases: [
      { yearStart: 1450, yearEnd: 1820, countryCodes: ["PRT", "BRA", "AGO", "MOZ", "GNB", "CPV"] },
      { yearStart: 1821, yearEnd: 1975, countryCodes: ["PRT", "AGO", "MOZ", "GNB", "CPV"] },
    ],
  },
  {
    id: "tokugawa",
    name: "Tokugawa Japan",
    color: "#fda4af",
    blurb: "Closed Japan to foreigners (sakoku) for 250 years of stability.",
    facts: [
      "Founded 1603 after Sekigahara.",
      "Banned Christianity; Dejima island was the only Dutch contact.",
      "Ended by Perry's black ships 1853 → Meiji 1868.",
    ],
    phases: [{ yearStart: 1603, yearEnd: 1868, countryCodes: ["JPN"] }],
  },
  {
    id: "british-empire",
    name: "British Empire",
    color: "#1d4ed8",
    blurb: "Largest empire in history; covered ~1/4 of the world.",
    facts: [
      "Began with Atlantic plantations + EIC (1600).",
      "Took India after Plassey 1757; the Raj 1858.",
      "'The empire on which the sun never sets.'",
      "Decolonized rapidly 1947–1980.",
    ],
    phases: [
      { yearStart: 1707, yearEnd: 1815, countryCodes: ["GBR", "USA", "CAN", "JAM", "BHS", "BLZ", "GUY", "TTO", "BRB", "IND", "PAK", "BGD"] },
      { yearStart: 1816, yearEnd: 1946, countryCodes: ["GBR", "CAN", "AUS", "NZL", "IND", "PAK", "BGD", "MMR", "LKA", "MYS", "SGP", "EGY", "SDN", "KEN", "UGA", "TZA", "ZMB", "ZWE", "BWA", "ZAF", "NGA", "GHA", "SLE", "GMB", "JAM", "BHS", "BLZ", "GUY", "TTO", "BRB", "CYP", "MLT", "IRL", "HKG"] },
      { yearStart: 1947, yearEnd: 1997, countryCodes: ["GBR", "CAN", "AUS", "NZL"] },
    ],
  },
  {
    id: "french-empire",
    name: "French Colonial Empire",
    color: "#3b82f6",
    blurb: "Second-largest 19th-century empire; brutal end in Algeria + Indochina.",
    facts: [
      "First wave (1600s–1763) lost most of Canada/India to Britain.",
      "Second wave (1830–1962): Algeria, West/Equatorial Africa, Indochina.",
      "Algerian War (1954–62) killed ~500k.",
    ],
    phases: [
      { yearStart: 1830, yearEnd: 1939, countryCodes: ["FRA", "DZA", "TUN", "MAR", "SEN", "MLI", "BFA", "NER", "TCD", "CIV", "BEN", "CMR", "COG", "GAB", "CAF", "DJI", "MDG", "VNM", "LAO", "KHM", "SYR", "LBN"] },
      { yearStart: 1940, yearEnd: 1962, countryCodes: ["FRA", "DZA", "VNM", "LAO", "KHM"] },
    ],
  },
  {
    id: "russian-empire",
    name: "Russian Empire",
    color: "#be123c",
    blurb: "Tsardom turned imperial superpower; collapsed in 1917 revolution.",
    facts: [
      "Peter the Great's reforms 1689–1725 westernized the state.",
      "Defeated Napoleon 1812.",
      "Emancipated serfs 1861, lost to Japan 1905.",
      "Bolsheviks toppled 1917.",
    ],
    phases: [{ yearStart: 1721, yearEnd: 1917, countryCodes: ["RUS", "FIN", "EST", "LVA", "LTU", "BLR", "UKR", "MDA", "GEO", "ARM", "AZE", "KAZ", "UZB", "KGZ", "TKM", "TJK"] }],
  },
  {
    id: "soviet-union",
    name: "Soviet Union",
    color: "#991b1b",
    blurb: "First communist superpower; collapsed 1991.",
    facts: [
      "Founded December 1922 from civil war ruins.",
      "Stalin's 5-year plans + collectivization killed millions.",
      "Defeated Nazi Germany at colossal cost.",
      "Dissolved into 15 successor states Dec 1991.",
    ],
    phases: [{ yearStart: 1922, yearEnd: 1991, countryCodes: ["RUS", "EST", "LVA", "LTU", "BLR", "UKR", "MDA", "GEO", "ARM", "AZE", "KAZ", "UZB", "KGZ", "TKM", "TJK"] }],
  },
  {
    id: "japan-empire",
    name: "Empire of Japan",
    color: "#f87171",
    blurb: "Meiji to 1945 — only non-Western state to colonize Asia.",
    facts: [
      "Meiji Restoration 1868 launched modernization.",
      "Defeated China 1895, Russia 1905, took Korea 1910.",
      "Invaded Manchuria 1931, China 1937, Pacific war 1941–45.",
    ],
    phases: [
      { yearStart: 1895, yearEnd: 1930, countryCodes: ["JPN", "TWN", "KOR"] },
      { yearStart: 1931, yearEnd: 1945, countryCodes: ["JPN", "TWN", "KOR", "CHN", "MNG", "VNM", "LAO", "KHM", "MMR", "MYS", "SGP", "PHL", "IDN"] },
    ],
  },
  {
    id: "usa",
    name: "United States",
    color: "#2563eb",
    blurb: "Atlantic colonies → continental power → Cold War + post-war hegemon.",
    facts: [
      "Independence 1776; Constitution 1789.",
      "Civil War 1861–65 ended slavery.",
      "Took the Philippines, Puerto Rico, Guam 1898.",
      "Dropped atomic bombs 1945; led NATO from 1949.",
    ],
    phases: [
      { yearStart: 1776, yearEnd: 1898, countryCodes: ["USA"] },
      { yearStart: 1899, yearEnd: 1946, countryCodes: ["USA", "PHL", "PRI"] },
      { yearStart: 1947, yearEnd: 2025, countryCodes: ["USA", "PRI"] },
    ],
  },
  {
    id: "prc",
    name: "People's Republic of China",
    color: "#facc15",
    blurb: "Communist superpower since 1949; second-largest economy after Deng's reforms.",
    facts: [
      "Mao proclaimed PRC Oct 1, 1949.",
      "Great Leap Forward (1958–62) killed ~30M.",
      "Cultural Revolution 1966–76.",
      "Deng's reforms (1978) → ~10%/yr growth for decades.",
    ],
    phases: [{ yearStart: 1949, yearEnd: 2025, countryCodes: ["CHN"] }],
  },
];

export type ActiveTerritory = {
  empire: Empire;
  countryCodes: string[];
};

export function territoriesAtYear(year: number): ActiveTerritory[] {
  const out: ActiveTerritory[] = [];
  for (const empire of empires) {
    for (const phase of empire.phases) {
      if (year >= phase.yearStart && year <= phase.yearEnd) {
        out.push({ empire, countryCodes: phase.countryCodes });
        break;
      }
    }
  }
  return out;
}

export function empireAtCodeAndYear(code: string, year: number): Empire | null {
  // Iterate in reverse so newer / more specific empires win when they overlap.
  const territories = territoriesAtYear(year);
  for (let i = territories.length - 1; i >= 0; i--) {
    if (territories[i].countryCodes.includes(code)) return territories[i].empire;
  }
  return null;
}
