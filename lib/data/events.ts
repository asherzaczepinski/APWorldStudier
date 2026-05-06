import type { HistoricalEvent } from "@/lib/types";

// ISO A3 code groups used by event highlights.
const COLD_WAR_US_BLOC = [
  "USA","CAN","GBR","FRA","DEU","ITA","NLD","BEL","LUX","NOR","DNK","ISL","PRT","ESP","GRC","TUR","JPN","KOR","AUS","NZL","PHL","THA",
];
const COLD_WAR_SOVIET_BLOC = [
  "RUS","CHN","MNG","POL","CZE","SVK","HUN","ROU","BGR","ALB","BLR","UKR","KAZ","UZB","TKM","TJK","KGZ","ARM","AZE","GEO","MDA","LTU","LVA","EST","CUB","VNM","LAO","KHM","PRK","YEM",
];
// Africa decolonization wave (post-1945 newly independent states)
const DECOLONIZED_AFRICA = [
  "GHA","KEN","NGA","COD","AGO","MOZ","ZAF","SDN","ZMB","ZWE","TUN","MAR","DZA","EGY","LBY","ETH","SOM","UGA","RWA","BDI","TZA","MLI","BFA","NER","TCD","CMR","GIN","SEN","MRT","GMB","GNB","CPV","STP","SLE","LBR","CIV","BEN","TGO","GAB","COG","GNQ","MWI","BWA","NAM","MDG","MUS","SYC","COM","DJI","ERI","SSD",
];
// Decolonized Asia
const DECOLONIZED_ASIA = [
  "IND","PAK","BGD","IDN","VNM","KHM","LAO","MMR","PHL","MYS","SGP","LKA","JOR","ISR","SYR","LBN","MDV","BTN","NPL",
];
// Founding Non-Aligned Movement members (Belgrade 1961) — using modern equivalents.
const NAM_FOUNDING = [
  "EGY","IND","IDN","SRB","BIH","MNE","HRV","MKD","SVN","CUB","GHA","DZA","SAU","LKA","IRQ","JOR","LBN","SDN","TUN","YEM","AFG","MMR","KHM","CYP","ETH","MLI","MAR","NPL","SOM",
];

export const events: HistoricalEvent[] = [
  // ---------- Period 1: 1200–1450 ----------
  {
    id: "mongol-rise",
    year: 1206,
    endYear: 1227,
    periodId: "p1",
    regionIds: ["mongol", "china", "persia", "russia"],
    title: "Genghis Khan unifies the Mongols",
    description:
      "Temüjin is proclaimed Genghis Khan in 1206 and conquers Central Asia, parts of China, and Khwarezm.",
    significance:
      "The Mongol khanates create the Pax Mongolica, expanding Eurasian trade and cultural exchange.",
    facts: [
      "Mongol cavalry tactics and composite bows out-ranged most rivals.",
      "Genghis's heirs split Eurasia into 4 khanates: Yuan (China), Chagatai, Ilkhanate (Persia), Golden Horde (Russia).",
      "Pax Mongolica safe-passed Marco Polo, Ibn Battuta, and the bubonic plague.",
    ],
    highlight: {
      countryCodes: ["MNG", "CHN", "RUS", "KAZ", "UZB", "TKM", "TJK", "KGZ", "IRN", "AFG", "PAK"],
      focus: { lat: 47, lng: 90, altitude: 2.0 },
    },
  },
  {
    id: "delhi-sultanate",
    year: 1206,
    endYear: 1526,
    periodId: "p1",
    regionIds: ["india"],
    title: "Delhi Sultanate",
    description:
      "Turkic Muslim dynasties rule much of northern India until the Mughal conquest.",
    significance:
      "Brought lasting Islamic political and cultural presence to South Asia, including Persianate court culture.",
    facts: [
      "Five successive dynasties from Mamluk to Lodi.",
      "Spread Sufi orders and Urdu / Persian-influenced languages.",
      "Levied jizya on non-Muslims; stable rule mostly above the Vindhyas.",
    ],
    highlight: { countryCodes: ["IND", "PAK", "BGD"], focus: { lat: 28, lng: 77, altitude: 2.0 } },
  },
  {
    id: "mansa-musa",
    year: 1324,
    periodId: "p1",
    regionIds: ["wafrica", "egypt"],
    title: "Mansa Musa's hajj",
    description:
      "The Mali emperor's pilgrimage to Mecca passed through Cairo, where his gold spending caused inflation for years.",
    significance:
      "Showcased Mali's wealth and integrated West Africa into the wider Dar al-Islam.",
    facts: [
      "Gave away so much gold that Cairo's currency depreciated for over a decade.",
      "Brought scholars and architects back to Timbuktu, founding Sankoré madrasa.",
      "Made Mali appear on European maps for the first time (1375 Catalan Atlas).",
    ],
    highlight: {
      countryCodes: ["MLI", "EGY", "SAU"],
      // Bright magenta — Mansa Musa's route runs across Sahara desert; a
      // sandy/yellow line would blend into the terrain. Pink pops.
      color: "#ec4899",
      focus: { lat: 20, lng: 10, altitude: 2.4 },
      pins: [
        { lat: 13.21, lng: -8.29, label: "Niani (Mali capital)", color: "#ec4899" },
        { lat: 16.78, lng: -3.00, label: "Timbuktu", color: "#ec4899" },
        { lat: 32.89, lng: 13.18, label: "Tripoli", color: "#ec4899" },
        { lat: 30.05, lng: 31.24, label: "Cairo (1324)", color: "#ec4899" },
        { lat: 24.47, lng: 39.61, label: "Medina", color: "#ec4899" },
        { lat: 21.42, lng: 39.83, label: "Mecca", color: "#ec4899" },
      ],
      path: [
        { lat: 13.21, lng: -8.29 },
        { lat: 16.78, lng: -3.00 },
        { lat: 18.74, lng: 7.39 },
        { lat: 32.89, lng: 13.18 },
        { lat: 30.05, lng: 31.24 },
        { lat: 24.47, lng: 39.61 },
        { lat: 21.42, lng: 39.83 },
      ],
    },
  },
  {
    id: "black-death",
    year: 1347,
    endYear: 1351,
    periodId: "p1",
    regionIds: ["china", "ottoman", "italy", "wnerope", "egypt"],
    title: "Black Death pandemic",
    description:
      "Bubonic plague spreads via Silk Road and Mediterranean trade ships, killing perhaps 1/3 of Europe and millions across Eurasia.",
    significance:
      "Reshaped labor, religion, and economy — peasants gained leverage; serfdom decayed in western Europe.",
    facts: [
      "Yersinia pestis spread by Oriental rat fleas riding Mongol caravans + Genoese ships.",
      "Killed 75–200 million across Eurasia (1347–51 alone).",
      "Labor scarcity broke serfdom in W. Europe; Peasants' Revolt 1381 in England.",
    ],
    highlight: {
      countryCodes: [
        "CHN","KAZ","UZB","IRN","TUR","SYR","ITA","FRA","ESP","GBR","DEU","POL","HUN","ROU","NLD","BEL","GRC","EGY",
      ],
      focus: { lat: 40, lng: 30, altitude: 2.0 },
    },
  },
  {
    id: "zheng-he",
    year: 1405,
    endYear: 1433,
    periodId: "p1",
    regionIds: ["china", "seasia", "india", "eafrica"],
    title: "Zheng He's voyages",
    description:
      "Ming admiral Zheng He led seven massive treasure fleets across the Indian Ocean, reaching East Africa.",
    significance:
      "Demonstrated Chinese maritime supremacy before Ming withdrawal — leaving the ocean open for European entrants.",
    facts: [
      "Treasure ships were ~120m long, 5x bigger than da Gama's caravels.",
      "Fleets reached Hormuz, the Swahili coast, and brought a giraffe to Beijing.",
      "After 1433, Confucian officials shut the program down — China turned inward.",
    ],
    highlight: {
      countryCodes: ["CHN", "VNM", "IDN", "IND", "LKA", "IRN", "SOM", "KEN"],
      color: "#ef4444",
      routeId: "indian-ocean",
      focus: { lat: 5, lng: 75, altitude: 2.6 },
      pins: [
        { lat: 32.06, lng: 118.79, label: "Nanjing (start)", color: "#ef4444" },
        { lat: 10.78, lng: 106.70, label: "Champa (Vietnam)", color: "#ef4444" },
        { lat: -7.25, lng: 112.75, label: "Java", color: "#ef4444" },
        { lat: 11.26, lng: 75.78, label: "Calicut", color: "#ef4444" },
        { lat: 27.18, lng: 56.27, label: "Hormuz", color: "#ef4444" },
        { lat: 12.77, lng: 45.04, label: "Aden", color: "#ef4444" },
        { lat: 2.04, lng: 45.34, label: "Mogadishu", color: "#ef4444" },
        { lat: -3.22, lng: 40.12, label: "Malindi (giraffe!)", color: "#ef4444" },
      ],
      path: [
        { lat: 32.06, lng: 118.79 },  // Nanjing
        { lat: 28.0, lng: 122.0 },    // East China Sea
        { lat: 22.30, lng: 114.17 },  // Hong Kong
        { lat: 14.0, lng: 113.0 },    // South China Sea
        { lat: 1.3, lng: 104.5 },     // off Singapore
        { lat: 4.5, lng: 99.5 },      // Strait of Malacca
        { lat: 7.0, lng: 92.0 },      // Andaman Sea
        { lat: 6.93, lng: 79.85 },    // Sri Lanka
        { lat: 11.26, lng: 75.78 },   // Calicut
        { lat: 14.0, lng: 65.0 },     // open Arabian Sea
        { lat: 22.0, lng: 60.0 },     // off Oman
        { lat: 27.18, lng: 56.27 },   // Hormuz
        { lat: 13.0, lng: 53.0 },     // off Socotra
        { lat: 12.77, lng: 45.04 },   // Aden
        { lat: 2.04, lng: 45.34 },    // off Mogadishu
        { lat: -3.22, lng: 40.12 },   // Malindi
      ],
    },
  },

  // ---------- Period 2: 1450–1750 ----------
  {
    id: "constantinople-1453",
    year: 1453,
    periodId: "p2",
    regionIds: ["ottoman", "italy"],
    title: "Fall of Constantinople",
    description:
      "Mehmed II's Ottomans conquer the Byzantine capital using massive cannon, ending the Roman tradition.",
    significance:
      "Ottomans dominate eastern Mediterranean trade; pushes Europeans to seek new oceanic routes east.",
    facts: [
      "Hungarian engineer Orban's bombards smashed walls that had held for 1000 years.",
      "Renamed Istanbul; Hagia Sophia becomes a mosque.",
      "Cuts European overland trade to Asia → fuels Iberian voyages.",
    ],
    highlight: { countryCodes: ["TUR"], focus: { lat: 41, lng: 29, altitude: 1.5 } },
  },
  {
    id: "columbus-1492",
    year: 1492,
    periodId: "p2",
    regionIds: ["iberia", "caribbean"],
    title: "Columbus reaches the Caribbean",
    description:
      "Sponsored by Castile, Columbus lands at Hispaniola, beginning sustained Old World–New World contact.",
    significance:
      "Initiates the Columbian Exchange, the demographic catastrophe of the Americas, and 300+ years of Iberian colonization.",
    facts: [
      "Same year Castile takes Granada and expels Sephardic Jews.",
      "Encomienda labor system imposed on indigenous Caribs and Taínos.",
      "Smallpox + measles wipe out ~90% of indigenous populations within a century.",
    ],
    highlight: {
      countryCodes: ["ESP", "BHS", "CUB", "HTI", "DOM"],
      color: "#22c55e",
      focus: { lat: 22, lng: -45, altitude: 2.4 },
      pins: [
        { lat: 37.23, lng: -6.92, label: "Palos (Aug 1492)", color: "#22c55e" },
        { lat: 28.10, lng: -15.41, label: "Canary Islands", color: "#22c55e" },
        { lat: 25.07, lng: -77.34, label: "San Salvador (Oct 1492)", color: "#22c55e" },
        { lat: 19.00, lng: -72.00, label: "Hispaniola", color: "#22c55e" },
      ],
      path: [
        { lat: 37.23, lng: -6.92 },
        { lat: 28.10, lng: -15.41 },
        { lat: 25.07, lng: -77.34 },
        { lat: 19.00, lng: -72.00 },
      ],
    },
  },
  {
    id: "tordesillas",
    year: 1494,
    periodId: "p2",
    regionIds: ["iberia", "brazil"],
    title: "Treaty of Tordesillas",
    description:
      "Spain and Portugal divide non-Christian lands along a meridian west of Cape Verde.",
    significance: "Gave Portugal Brazil and the African/Asian routes; Spain got most of the Americas.",
    facts: [
      "Pope Alexander VI mediated; line at 46°37′W.",
      "Other European powers ignored it once strong enough to defy Iberia.",
    ],
    highlight: { countryCodes: ["ESP","PRT","BRA"], focus: { lat: -10, lng: -30, altitude: 2.0 } },
  },
  {
    id: "cortes-aztec",
    year: 1521,
    periodId: "p2",
    regionIds: ["mesoamerica", "iberia"],
    title: "Cortés conquers Tenochtitlán",
    description:
      "With smallpox and indigenous allies (Tlaxcala), Cortés topples the Aztec Triple Alliance.",
    significance:
      "Founded New Spain; silver from Zacatecas/Potosí soon entered global circuits.",
    facts: [
      "Cortés had ~600 men; Tlaxcala provided tens of thousands of warriors.",
      "Smallpox epidemic killed Cuitláhuac and devastated defenders.",
      "Tenochtitlán razed; Mexico City built atop it.",
    ],
    highlight: { countryCodes: ["MEX","ESP"], focus: { lat: 19, lng: -99, altitude: 1.7 } },
  },
  {
    id: "mughal-1526",
    year: 1526,
    endYear: 1857,
    periodId: "p2",
    regionIds: ["india"],
    title: "Mughal Empire founded",
    description:
      "Babur defeats the Delhi Sultanate at Panipat. Akbar (r. 1556–1605) builds a syncretic gunpowder empire.",
    significance:
      "South Asia is unified under a Persian-influenced Muslim dynasty; cotton textiles dominate world markets.",
    facts: [
      "Akbar's din-i ilahi merged Hindu, Muslim, Christian, and Zoroastrian ideas.",
      "Cotton textiles made Mughal India the world's largest economy by GDP c. 1700.",
      "Aurangzeb's reimposition of jizya and southern wars weakened the empire.",
    ],
    highlight: { countryCodes: ["IND","PAK","BGD","AFG"], focus: { lat: 27, lng: 78, altitude: 2.0 } },
  },
  {
    id: "pizarro-inca",
    year: 1533,
    periodId: "p2",
    regionIds: ["andes", "iberia"],
    title: "Pizarro conquers the Inca",
    description: "Spaniards capture and execute Atahualpa amid civil war and smallpox.",
    significance: "Opens Potosí (1545), the silver mountain that powered global commerce for two centuries.",
    facts: [
      "Inca were already weakened by Atahualpa-Huáscar civil war.",
      "Smallpox killed Huayna Capac before any Spaniard ever met him.",
    ],
    highlight: { countryCodes: ["PER","BOL","ECU","CHL"], focus: { lat: -13, lng: -72, altitude: 1.8 } },
  },
  {
    id: "potosi-1545",
    year: 1545,
    periodId: "p2",
    regionIds: ["andes", "seasia", "china"],
    title: "Potosí silver discovered",
    description:
      "The Cerro Rico in modern Bolivia becomes the largest silver source in history under brutal mita labor.",
    significance:
      "Silver flows to China via Manila galleons reshape the global economy; Ming China demonetizes paper money.",
    facts: [
      "Mita: forced rotational labor draft borrowed from the Inca.",
      "By 1600 Potosí was as populous as London (~150k).",
      "Silver went via Acapulco–Manila galleons to Ming silk and porcelain.",
    ],
    highlight: { routeId: "manila-galleon", focus: { lat: 5, lng: -120, altitude: 2.4 } },
  },
  {
    id: "voc-1602",
    year: 1602,
    endYear: 1799,
    periodId: "p2",
    regionIds: ["wnerope", "seasia", "japan"],
    title: "Dutch East India Company (VOC)",
    description:
      "World's first joint-stock company with quasi-state powers. Built Batavia (Jakarta).",
    significance:
      "Pioneers corporate capitalism and finance; dominates the Indonesian spice trade.",
    facts: [
      "Could mint coins, raise armies, and sign treaties.",
      "Massacred Banda Islanders (1621) to monopolize nutmeg.",
      "Bankrupted in 1799 by corruption and competition.",
    ],
    highlight: { countryCodes: ["NLD","IDN","ZAF","LKA"], focus: { lat: 0, lng: 90, altitude: 2.4 } },
  },
  {
    id: "tokugawa-sakoku",
    year: 1639,
    periodId: "p2",
    regionIds: ["japan"],
    title: "Tokugawa sakoku begins",
    description:
      "Japan restricts foreign contact mostly to Dutch traders at Dejima.",
    significance:
      "Two centuries of relative isolation until Perry's 1853 black ships.",
    facts: [
      "Christianity banned; expelled missionaries; fumi-e icon-stomping tests.",
      "Dejima island in Nagasaki was Japan's only opening to Europe.",
    ],
    highlight: { countryCodes: ["JPN"], focus: { lat: 36, lng: 138, altitude: 1.6 } },
  },
  {
    id: "thirteen-colonies",
    year: 1607,
    endYear: 1776,
    periodId: "p2",
    regionIds: ["northam", "wnerope"],
    title: "Thirteen British Colonies",
    description:
      "Thirteen British colonies along the Atlantic seaboard, from Jamestown (1607) to Georgia (1733).",
    significance:
      "Resistance to British taxation produced the first successful colonial revolt against a European empire (1775–83).",
    facts: [
      "Three regions: New England (Puritan trade), Middle Colonies (the 'breadbasket'), Southern (tobacco/rice plantations + slavery).",
      "Mercantilism + Navigation Acts forced colonial trade through England.",
      "Stamp Act 1765 → Tea Act 1773 → Boston Tea Party → Revolution.",
    ],
    highlight: {
      // No country fill — modern USA is way bigger than the actual colonial
      // strip. Pins + coastline path show the real footprint.
      countryCodes: [],
      color: "#3b82f6",
      focus: { lat: 38, lng: -73, altitude: 1.5 },
      pins: [
        { lat: 37.21, lng: -76.78, label: "Jamestown 1607",  color: "#3b82f6" },
        { lat: 41.96, lng: -70.66, label: "Plymouth 1620",   color: "#3b82f6" },
        { lat: 42.36, lng: -71.06, label: "Boston 1630",     color: "#3b82f6" },
        { lat: 38.97, lng: -76.50, label: "Annapolis 1649",  color: "#3b82f6" },
        { lat: 41.83, lng: -71.41, label: "Providence 1636", color: "#3b82f6" },
        { lat: 40.71, lng: -74.00, label: "New York 1624",   color: "#3b82f6" },
        { lat: 39.95, lng: -75.16, label: "Philadelphia 1682", color: "#3b82f6" },
        { lat: 32.78, lng: -79.93, label: "Charleston 1670", color: "#3b82f6" },
        { lat: 32.08, lng: -81.09, label: "Savannah 1733",   color: "#3b82f6" },
      ],
      // Coastal path roughly tracing the Atlantic colonial seaboard, north to south.
      path: [
        { lat: 44.81, lng: -68.78 },
        { lat: 43.66, lng: -70.26 },
        { lat: 42.36, lng: -71.06 },
        { lat: 41.83, lng: -71.41 },
        { lat: 40.71, lng: -74.00 },
        { lat: 39.95, lng: -75.16 },
        { lat: 38.97, lng: -76.50 },
        { lat: 36.85, lng: -76.30 },
        { lat: 34.23, lng: -77.95 },
        { lat: 32.78, lng: -79.93 },
        { lat: 32.08, lng: -81.09 },
        { lat: 30.33, lng: -81.66 },
      ],
    },
  },
  {
    id: "us-empire",
    year: 1898,
    endYear: 1946,
    periodId: "p4",
    regionIds: ["northam", "caribbean", "seasia"],
    title: "American Overseas Empire",
    description:
      "After beating Spain in 1898, the US acquired the Philippines, Puerto Rico, Guam, and (briefly) Cuba.",
    significance:
      "The US shifts from continental power to overseas empire — a turning point of late-19th-century imperialism.",
    facts: [
      "Spanish-American War (1898) — Treaty of Paris hands Spain's colonies to the US.",
      "Philippine-American War (1899–1902): 200,000+ Filipino civilian deaths.",
      "Hawaii annexed the same year; Puerto Rico and Guam are still US territories.",
    ],
    highlight: {
      splits: [
        { label: "Acquired 1898 (Philippines, Cuba, Puerto Rico, Guam)", color: "#facc15", countryCodes: ["PHL", "CUB", "PRI"] },
      ],
      focus: { lat: 18, lng: -120, altitude: 2.7 },
    },
  },
  {
    id: "qing-1644",
    year: 1644,
    endYear: 1912,
    periodId: "p2",
    regionIds: ["china"],
    title: "Qing dynasty",
    description:
      "Manchus take Beijing; under Kangxi and Qianlong, China expands into Central Asia.",
    significance: "Last imperial dynasty; population doubles thanks to New World crops.",
    facts: [
      "Manchus required Han men to wear the queue hairstyle on pain of death.",
      "Population: ~150M (1700) → ~430M (1850) thanks to maize/sweet potato.",
      "Banner system mixed Manchu, Mongol, Han military elites.",
    ],
    highlight: { countryCodes: ["CHN","MNG","TWN"], focus: { lat: 35, lng: 105, altitude: 1.9 } },
  },

  // ---------- Period 3: 1750–1900 ----------
  {
    id: "seven-years",
    year: 1756,
    endYear: 1763,
    periodId: "p3",
    regionIds: ["wnerope", "northam", "india"],
    title: "Seven Years' War",
    description: "Global conflict won by Britain — gains French Canada and dominance in India.",
    significance: "Britain becomes the leading European empire; debts spark American taxation and revolution.",
    facts: [
      "First truly global war — fought on 5 continents.",
      "Battle of Plassey (1757) gave Britain Bengal.",
      "Treaty of Paris (1763) handed Canada and Florida to Britain.",
    ],
    highlight: {
      splits: [
        { label: "Britain & allies", color: "#3b82f6", countryCodes: ["GBR","PRT","DEU"] },
        { label: "France & allies", color: "#ef4444", countryCodes: ["FRA","ESP","AUT","RUS"] },
      ],
      focus: { lat: 35, lng: -10, altitude: 2.5 },
    },
  },
  {
    id: "american-rev",
    year: 1776,
    endYear: 1783,
    periodId: "p3",
    regionIds: ["northam", "wnerope"],
    title: "American Revolution",
    description: "Thirteen colonies declare independence on Enlightenment principles.",
    significance: "First successful colonial revolt against a European empire; inspires France and Latin America.",
    facts: [
      "Declaration of Independence drafted by Jefferson, July 4, 1776.",
      "French alliance (1778) decisive at Yorktown 1781.",
      "Treaty of Paris (1783) recognized US independence to the Mississippi.",
    ],
    highlight: { countryCodes: ["USA","GBR","FRA"], focus: { lat: 38, lng: -77, altitude: 2.0 } },
  },
  {
    id: "french-rev",
    year: 1789,
    endYear: 1799,
    periodId: "p3",
    regionIds: ["wnerope"],
    title: "French Revolution",
    description: "Storming of the Bastille; Declaration of the Rights of Man; Reign of Terror; Napoleon's rise.",
    significance: "Spread liberal nationalism and abolitionist pressure across Europe and the colonies.",
    facts: [
      "Estates-General → National Assembly → guillotine of Louis XVI (1793).",
      "Napoleon's Code reshaped European law.",
      "Inspired Haitian, Latin American, and 1848 revolutions.",
    ],
    highlight: { countryCodes: ["FRA"], focus: { lat: 48, lng: 2, altitude: 1.6 } },
  },
  {
    id: "haitian-rev",
    year: 1791,
    endYear: 1804,
    periodId: "p3",
    regionIds: ["caribbean", "wnerope"],
    title: "Haitian Revolution",
    description: "Enslaved Africans, led by Toussaint Louverture and Dessalines, defeat France.",
    significance: "Only successful slave revolt to create an independent state; terrified slaveholding societies worldwide.",
    facts: [
      "Saint-Domingue produced 40% of the world's sugar before the revolt.",
      "Defeated French, Spanish, and British armies in succession.",
      "Independence 1804 → first Black republic; ostracized by slaveholding powers.",
    ],
    highlight: { countryCodes: ["HTI","FRA","DOM"], focus: { lat: 19, lng: -72, altitude: 1.7 } },
  },
  {
    id: "industrial-rev",
    year: 1780,
    endYear: 1850,
    periodId: "p3",
    regionIds: ["wnerope", "northam"],
    title: "Industrial Revolution",
    description: "Britain mechanizes textiles (spinning jenny, water frame), then iron and rail.",
    significance: "Created urban factory labor, fossil-fueled growth, and a vast military-economic gap with non-industrial regions.",
    facts: [
      "Spinning jenny 1764; steam engine 1769; power loom 1785.",
      "British coal output 5x between 1750–1850.",
      "Spreads to Belgium → Germany → US → Japan by century's end.",
    ],
    highlight: { countryCodes: ["GBR","BEL","DEU","FRA","USA"], focus: { lat: 53, lng: -2, altitude: 2.0 } },
  },
  {
    id: "latin-am-indep",
    year: 1810,
    endYear: 1825,
    periodId: "p3",
    regionIds: ["mesoamerica", "andes", "brazil", "iberia"],
    title: "Latin American independence",
    description: "Bolívar, San Martín, and Hidalgo lead movements; Brazil splits peacefully from Portugal in 1822.",
    significance: "Iberian Atlantic empires collapse; new republics struggle with caudillos and economic dependence.",
    facts: [
      "Napoleon's invasion of Spain (1808) cracked imperial legitimacy.",
      "Bolívar liberated Venezuela, Colombia, Ecuador, Peru, Bolivia.",
      "Brazil's Pedro I declared independence on the Ipiranga (1822).",
    ],
    highlight: {
      countryCodes: ["MEX","GTM","HND","SLV","NIC","CRI","PAN","COL","VEN","ECU","PER","BOL","CHL","ARG","URY","PRY","BRA"],
      focus: { lat: -10, lng: -60, altitude: 2.4 },
    },
  },
  {
    id: "opium-wars",
    year: 1839,
    endYear: 1860,
    periodId: "p3",
    regionIds: ["china", "wnerope"],
    title: "Opium Wars",
    description: "Britain forces China to open ports and accept opium imports. Treaty of Nanjing (1842) cedes Hong Kong.",
    significance: "Begins China's 'century of humiliation' and unequal treaties.",
    facts: [
      "British smuggled Indian opium to balance silver outflows for tea.",
      "Treaty of Nanjing: Hong Kong + 5 treaty ports + extraterritoriality.",
      "Second Opium War (1856–60) burned Beijing's Summer Palace.",
    ],
    highlight: { countryCodes: ["CHN","GBR","FRA"], focus: { lat: 30, lng: 115, altitude: 1.8 } },
  },
  {
    id: "taiping",
    year: 1850,
    endYear: 1864,
    periodId: "p3",
    regionIds: ["china"],
    title: "Taiping Rebellion",
    description: "A millenarian Christian-influenced uprising kills 20–30 million.",
    significance: "Reveals Qing weakness; opens door to further foreign and warlord pressure.",
    facts: [
      "Hong Xiuquan declared himself Christ's younger brother.",
      "Held Nanjing as 'Heavenly Capital' for over a decade.",
      "Quelled with British/French help and Han Chinese armies under Zeng Guofan.",
    ],
    highlight: { countryCodes: ["CHN"], focus: { lat: 30, lng: 115, altitude: 1.7 } },
  },
  {
    id: "1857-rebellion",
    year: 1857,
    periodId: "p3",
    regionIds: ["india", "wnerope"],
    title: "Indian Rebellion (Sepoy Mutiny)",
    description: "Indian soldiers and rulers revolt against the East India Company.",
    significance: "British Crown takes direct rule (the Raj) in 1858; Indian nationalism slowly gestates.",
    facts: [
      "Trigger: rumors of pig/cow fat on new Enfield rifle cartridges.",
      "EIC dissolved 1858; British Raj imposed direct rule.",
      "Last Mughal emperor Bahadur Shah Zafar exiled to Burma.",
    ],
    highlight: { countryCodes: ["IND","PAK","BGD","GBR"], focus: { lat: 25, lng: 80, altitude: 1.9 } },
  },
  {
    id: "meiji",
    year: 1868,
    periodId: "p3",
    regionIds: ["japan"],
    title: "Meiji Restoration",
    description: "Tokugawa shogunate is replaced by an oligarchy that rapidly industrializes Japan.",
    significance: "Only non-Western state to industrialize and join imperial powers; defeats China (1895) and Russia (1905).",
    facts: [
      "'Rich nation, strong army' — fukoku kyōhei.",
      "Iwakura Mission toured Western powers to copy institutions.",
      "Defeated Russia 1905 — first non-European to beat a European empire.",
    ],
    highlight: { countryCodes: ["JPN","KOR","TWN"], focus: { lat: 36, lng: 138, altitude: 1.7 } },
  },
  {
    id: "scramble-africa",
    year: 1884,
    endYear: 1914,
    periodId: "p3",
    regionIds: ["wnerope", "wafrica", "eafrica", "egypt"],
    title: "Scramble for Africa",
    description: "Berlin Conference (1884–85) carves Africa among European powers.",
    significance: "By 1914 only Ethiopia and Liberia are independent; resource extraction and colonial borders shape modern Africa.",
    facts: [
      "No African leaders attended Berlin.",
      "Belgium's Leopold II ran Congo as a private fiefdom — millions died.",
      "Ethiopia repelled Italy at Adwa 1896 — only major resistance success.",
    ],
    highlight: {
      splits: [
        { label: "British", color: "#ef4444", countryCodes: ["EGY","SDN","KEN","UGA","ZMB","ZWE","BWA","ZAF","NGA","GHA","SLE","GMB"] },
        { label: "French", color: "#3b82f6", countryCodes: ["DZA","TUN","MAR","SEN","MLI","BFA","NER","TCD","CIV","BEN","CMR","COG","GAB","CAF","DJI","MDG"] },
        { label: "Portuguese", color: "#a855f7", countryCodes: ["AGO","MOZ","GNB","CPV"] },
        { label: "Belgian", color: "#facc15", countryCodes: ["COD","RWA","BDI"] },
        { label: "Italian", color: "#22c55e", countryCodes: ["LBY","SOM","ERI"] },
        { label: "Independent", color: "#ffffff", countryCodes: ["ETH","LBR"] },
      ],
      focus: { lat: 5, lng: 20, altitude: 2.4 },
    },
  },

  // ---------- Period 4: 1900–present ----------
  {
    id: "wwi",
    year: 1914,
    endYear: 1918,
    periodId: "p4",
    regionIds: ["wnerope", "ottoman", "russia", "northam"],
    title: "World War I",
    description: "Industrial mass warfare engulfs Europe and its empires. Ottoman Empire collapses; Russian tsardom ends.",
    significance: "Reshapes the map; sows resentment that fuels WWII and decolonization.",
    facts: [
      "16M dead, 21M wounded.",
      "Treaty of Versailles (1919) blamed Germany; League of Nations created.",
      "Ottoman Empire dismantled; Sykes-Picot redrew the Middle East.",
    ],
    highlight: {
      splits: [
        { label: "Allies", color: "#3b82f6", countryCodes: ["GBR","FRA","RUS","ITA","USA","JPN","BEL","SRB","ROU"] },
        { label: "Central Powers", color: "#ef4444", countryCodes: ["DEU","AUT","TUR","BGR","HUN"] },
      ],
      focus: { lat: 50, lng: 15, altitude: 2.0 },
    },
  },
  {
    id: "russian-rev",
    year: 1917,
    periodId: "p4",
    regionIds: ["russia"],
    title: "Russian Revolution",
    description: "Bolsheviks seize power; civil war creates the USSR (1922).",
    significance: "First communist state; alternative model to capitalist liberalism for the rest of the century.",
    facts: [
      "February revolution toppled the Tsar; October revolution put Lenin in power.",
      "Treaty of Brest-Litovsk (1918) exited the war on harsh terms.",
      "Civil war (1918–22) killed ~7 million.",
    ],
    highlight: { countryCodes: ["RUS","UKR","BLR","KAZ"], focus: { lat: 60, lng: 50, altitude: 2.4 } },
  },
  {
    id: "great-depression",
    year: 1929,
    endYear: 1939,
    periodId: "p4",
    regionIds: ["northam", "wnerope", "japan"],
    title: "Great Depression",
    description: "Stock market crash spirals into global economic collapse.",
    significance: "Discredits laissez-faire; fuels fascism and the New Deal.",
    facts: [
      "US unemployment peaked at 25% in 1933.",
      "Smoot-Hawley tariffs deepened the global slump.",
      "FDR's New Deal redefined the role of government.",
    ],
    highlight: { countryCodes: ["USA","GBR","FRA","DEU","JPN"], focus: { lat: 40, lng: -80, altitude: 2.4 } },
  },
  {
    id: "wwii",
    year: 1939,
    endYear: 1945,
    periodId: "p4",
    regionIds: ["wnerope", "russia", "china", "japan", "northam", "seasia"],
    title: "World War II",
    description: "Axis powers (Germany, Italy, Japan) wage global war. The Holocaust murders 6 million Jews. Atomic bombs end the Pacific war.",
    significance: "End of European global dominance; UN founded; superpower era begins.",
    facts: [
      "70–85 million dead, including 6M Jewish victims of the Shoah.",
      "Pearl Harbor (1941) brought the US in; Stalingrad (1943) turned the East.",
      "Hiroshima + Nagasaki: only wartime use of atomic weapons.",
    ],
    highlight: {
      splits: [
        { label: "Allies", color: "#3b82f6", countryCodes: ["USA","GBR","RUS","CHN","FRA","CAN","AUS","NZL","IND","BRA","MEX"] },
        { label: "Axis", color: "#ef4444", countryCodes: ["DEU","ITA","JPN","HUN","ROU","BGR","FIN","HRV","SVK"] },
      ],
      focus: { lat: 40, lng: 20, altitude: 2.6 },
    },
  },
  {
    id: "indian-indep",
    year: 1947,
    periodId: "p4",
    regionIds: ["india", "wnerope"],
    title: "Indian independence and Partition",
    description: "British India splits into India and Pakistan; ~1 million die in communal violence.",
    significance: "Largest decolonization moment; sets template for postwar independence movements.",
    facts: [
      "Cyril Radcliffe drew the borders in 5 weeks, never having visited India.",
      "10–15 million displaced — largest migration in human history.",
      "Gandhi assassinated by a Hindu nationalist 1948.",
    ],
    highlight: {
      splits: [
        { label: "India", color: "#f97316", countryCodes: ["IND"] },
        { label: "Pakistan / Bangladesh", color: "#16a34a", countryCodes: ["PAK","BGD"] },
      ],
      focus: { lat: 28, lng: 78, altitude: 2.0 },
    },
  },
  {
    id: "prc-1949",
    year: 1949,
    periodId: "p4",
    regionIds: ["china"],
    title: "People's Republic of China",
    description: "Mao Zedong proclaims the PRC after defeating the KMT.",
    significance: "World's most populous communist state; later the second-largest economy.",
    facts: [
      "KMT under Chiang Kai-shek retreated to Taiwan.",
      "Land reform redistributed ~43% of arable land in 3 years.",
      "Great Leap Forward (1958–62) killed ~30M from famine.",
    ],
    highlight: { countryCodes: ["CHN","TWN"], focus: { lat: 35, lng: 105, altitude: 1.9 } },
  },
  {
    id: "korean-war",
    year: 1950,
    endYear: 1953,
    periodId: "p4",
    regionIds: ["china", "northam", "russia"],
    title: "Korean War",
    description: "First hot Cold War proxy conflict; ends in armistice on the 38th parallel.",
    significance: "Locks in Cold War divisions in East Asia.",
    facts: [
      "North invaded south June 1950 with Soviet approval.",
      "Chinese 'volunteers' (300,000+) joined when UN forces neared the Yalu.",
      "Armistice 1953 (no peace treaty); ~3 million dead, mostly Korean civilians.",
    ],
    highlight: {
      splits: [
        { label: "UN / South", color: "#3b82f6", countryCodes: ["KOR","USA","GBR","CAN","AUS","TUR","PHL","THA","NZL"] },
        { label: "North / allies", color: "#ef4444", countryCodes: ["PRK","CHN","RUS"] },
      ],
      focus: { lat: 38, lng: 127, altitude: 1.6 },
    },
  },
  {
    id: "decolonization",
    year: 1945,
    endYear: 1980,
    periodId: "p4",
    regionIds: ["wafrica", "eafrica", "egypt", "india", "seasia"],
    title: "Decolonization wave",
    description: "After 1945 the European empires collapse, mostly in Asia and Africa, creating ~80 new states.",
    significance: "Reshapes the UN and global politics; many states inherit unstable colonial borders.",
    facts: [
      "Asia first: India/Pakistan 1947, Indonesia 1949, Indochina 1954.",
      "Africa: Ghana 1957 → 17 countries in 1960 ('Year of Africa').",
      "Many states inherited arbitrary colonial borders → later civil wars.",
    ],
    highlight: {
      splits: [
        { label: "Decolonized Africa", color: "#facc15", countryCodes: DECOLONIZED_AFRICA },
        { label: "Decolonized Asia", color: "#22d3ee", countryCodes: DECOLONIZED_ASIA },
      ],
      focus: { lat: 10, lng: 40, altitude: 2.5 },
    },
  },
  {
    id: "non-aligned",
    year: 1961,
    endYear: 1991,
    periodId: "p4",
    regionIds: ["india", "egypt", "seasia"],
    title: "Non-Aligned Movement",
    description: "Belgrade 1961: 25 newly independent states refuse to join either superpower bloc.",
    significance: "Gave the Global South a third path; pushed UN agenda on decolonization and development.",
    facts: [
      "Founded by Tito, Nehru, Nasser, Sukarno, Nkrumah.",
      "Built on the 1955 Bandung Conference.",
      "Did not always mean neutrality — many leaned to one side.",
    ],
    highlight: { countryCodes: NAM_FOUNDING, focus: { lat: 15, lng: 30, altitude: 2.6 } },
  },
  {
    id: "cold-war-alliances",
    year: 1955,
    endYear: 1991,
    periodId: "p4",
    regionIds: ["northam", "russia", "wnerope", "seasia"],
    title: "Cold War alliances",
    description:
      "After WWII the world divided into NATO (US-led) and Warsaw Pact (Soviet-led) blocs, with China splitting from the USSR after 1960 and the Non-Aligned Movement carving a third path.",
    significance:
      "The bipolar order shaped proxy wars, decolonization, aid, and global trade for nearly half a century.",
    facts: [
      "NATO founded 1949; Warsaw Pact founded 1955.",
      "Sino-Soviet split (~1960) put PRC outside the Soviet bloc.",
      "Non-Aligned Movement (1961) refused to choose — India, Indonesia, Egypt, Yugoslavia.",
    ],
    highlight: {
      splits: [
        {
          label: "NATO + close US allies",
          color: "#3b82f6",
          countryCodes: [
            "USA","CAN","GBR","FRA","DEU","ITA","NLD","BEL","LUX","NOR","DNK","ISL","PRT","ESP","GRC","TUR","JPN","KOR","AUS","NZL","PHL","THA","ISR","SAU","TWN",
          ],
        },
        {
          label: "Warsaw Pact + Soviet allies",
          color: "#ef4444",
          countryCodes: [
            "RUS","POL","CZE","SVK","HUN","ROU","BGR","BLR","UKR","KAZ","UZB","TKM","TJK","KGZ","ARM","AZE","GEO","MDA","LTU","LVA","EST","CUB","VNM","LAO","KHM","PRK","MNG","AGO","MOZ","SYR",
          ],
        },
        { label: "Non-Aligned", color: "#22d3ee", countryCodes: ["IND","IDN","EGY","SRB","BIH","MNE","HRV","MKD","SVN","GHA","DZA","LKA","JOR","SDN","TUN","AFG","MMR","CYP","ETH","MLI","MAR","NPL","SOM","YEM"] },
        { label: "China", color: "#facc15", countryCodes: ["CHN"] },
      ],
      focus: { lat: 40, lng: 30, altitude: 2.6 },
    },
  },
  {
    id: "cuban-missile",
    year: 1962,
    periodId: "p4",
    regionIds: ["caribbean", "northam", "russia"],
    title: "Cuban Missile Crisis",
    description: "Soviet missiles in Cuba spark a 13-day standoff that nearly triggered nuclear war.",
    significance: "Closest the Cold War came to going hot; led to direct US–USSR hotline and arms control treaties.",
    facts: [
      "U-2 photos of missile sites discovered Oct 14, 1962.",
      "Naval 'quarantine' (not blockade — that's an act of war).",
      "Resolved: USSR removed Cuban missiles, US quietly removed Jupiters from Turkey.",
    ],
    highlight: {
      splits: [
        { label: "USA", color: "#3b82f6", countryCodes: ["USA"] },
        { label: "Cuba & USSR", color: "#ef4444", countryCodes: ["CUB","RUS"] },
      ],
      focus: { lat: 23, lng: -80, altitude: 1.7 },
    },
  },
  {
    id: "berlin-wall",
    year: 1961,
    endYear: 1989,
    periodId: "p4",
    regionIds: ["wnerope", "russia"],
    title: "Berlin Wall",
    description: "East Germany walls off West Berlin to stop defections; falls in 1989 as the Cold War ends.",
    significance: "Iconic Cold War symbol; its fall accelerated the USSR's collapse.",
    facts: [
      "Built overnight Aug 13, 1961.",
      "~140 killed trying to cross.",
      "Fell Nov 9, 1989 — bureaucratic mistake on a press briefing.",
    ],
    highlight: { countryCodes: ["DEU"], focus: { lat: 52.5, lng: 13.4, altitude: 1.4 } },
  },
  {
    id: "vietnam-war",
    year: 1955,
    endYear: 1975,
    periodId: "p4",
    regionIds: ["seasia", "northam", "russia", "china"],
    title: "Vietnam War",
    description: "US fails to prevent communist unification under Ho Chi Minh.",
    significance: "Major Cold War defeat for the US; spurs anti-war movements globally.",
    facts: [
      "Geneva Accords (1954) divided Vietnam at the 17th parallel.",
      "Tet Offensive (1968) shifted US public opinion.",
      "Saigon fell April 30, 1975; ~58,000 US dead, ~2M+ Vietnamese.",
    ],
    highlight: {
      splits: [
        { label: "South + US allies", color: "#3b82f6", countryCodes: ["VNM","USA","KOR","AUS","THA","PHL"] },
        { label: "North + Comm. allies", color: "#ef4444", countryCodes: ["CHN","RUS","KHM","LAO"] },
      ],
      focus: { lat: 16, lng: 107, altitude: 1.7 },
    },
  },
  {
    id: "deng-reform",
    year: 1978,
    periodId: "p4",
    regionIds: ["china"],
    title: "Deng Xiaoping's Reforms",
    description: "Special Economic Zones, market reforms, and opening to foreign investment.",
    significance: "Begins China's economic ascent — lifts hundreds of millions from poverty.",
    facts: [
      "Shenzhen (1980) was the first SEZ — fishing village to megacity in 30 years.",
      "Reformed agriculture: household responsibility system replaced communes.",
      "GDP grew ~10%/yr for three decades.",
    ],
    highlight: { countryCodes: ["CHN"], focus: { lat: 22, lng: 113, altitude: 1.4 } },
  },
  {
    id: "ussr-collapse",
    year: 1989,
    endYear: 1991,
    periodId: "p4",
    regionIds: ["russia", "wnerope"],
    title: "Fall of the USSR",
    description: "Berlin Wall falls 1989; Soviet Union dissolves 1991.",
    significance: "Ends the Cold War; unipolar US moment; capitalist globalization accelerates.",
    facts: [
      "1989: Eastern bloc revolutions cascade — Poland, Hungary, Czechoslovakia, Romania.",
      "Aug 1991 hardliner coup attempt failed; Yeltsin emerged.",
      "USSR formally dissolved Dec 26, 1991 — 15 successor states.",
    ],
    highlight: {
      countryCodes: ["RUS","UKR","BLR","KAZ","UZB","TKM","TJK","KGZ","ARM","AZE","GEO","MDA","LTU","LVA","EST"],
      focus: { lat: 60, lng: 60, altitude: 2.6 },
    },
  },
  {
    id: "wto-1995",
    year: 1995,
    periodId: "p4",
    regionIds: ["wnerope", "northam", "china"],
    title: "World Trade Organization founded",
    description: "Successor to GATT; enforces global trade rules. China joins in 2001.",
    significance: "Codifies neoliberal globalization and accelerates Chinese export growth.",
    facts: [
      "164 member states today.",
      "Doha Round (2001–) effectively stalled.",
      "Anti-globalization protests at Seattle 1999.",
    ],
    highlight: { countryCodes: ["USA","GBR","FRA","DEU","CHN","JPN","BRA","IND"], focus: { lat: 10, lng: 0, altitude: 2.7 } },
  },
  {
    id: "9-11",
    year: 2001,
    periodId: "p4",
    regionIds: ["northam", "ottoman"],
    title: "9/11 attacks and War on Terror",
    description: "Al-Qaeda strikes the US; invasion of Afghanistan (2001) and Iraq (2003).",
    significance: "Reorients US foreign policy; reshapes Middle East for two decades.",
    facts: [
      "Nearly 3,000 killed in the attacks.",
      "Iraq War 2003 — premised on (false) WMD claims.",
      "US withdrew from Afghanistan in 2021 — Taliban returned to power.",
    ],
    highlight: { countryCodes: ["USA","AFG","IRQ","PAK","SAU"], focus: { lat: 30, lng: 50, altitude: 2.2 } },
  },

  // ---------- Trade networks (p1) — Networks of Exchange ----------
  {
    id: "silk-roads",
    year: 1200,
    endYear: 1450,
    periodId: "p1",
    regionIds: ["china", "mongol", "persia", "ottoman", "italy"],
    title: "Silk Roads revival",
    description:
      "Overland Eurasian caravan network from Chang'an through Samarkand, Baghdad, and Constantinople — revived under the Mongol Pax Mongolica.",
    significance:
      "Moves silk, porcelain, gunpowder, and paper west; carries Buddhism, Islam, and the Black Death along the same lanes.",
    facts: [
      "Pax Mongolica (~1250–1350) made caravans safe across four khanates.",
      "Caravanserai every ~30 km; jam-jami passports protected merchants.",
      "Same network spread the bubonic plague west by 1347.",
    ],
    highlight: {
      countryCodes: ["CHN", "MNG", "KAZ", "UZB", "TKM", "TJK", "KGZ", "IRN", "IRQ", "TUR", "AFG", "ITA", "SYR", "GRC"],
      color: "#fbbf24",
      focus: { lat: 40, lng: 70, altitude: 2.6 },
      path: [
        { lat: 34.27, lng: 108.93 },  // Chang'an (Xi'an)
        { lat: 36.06, lng: 103.83 },  // Lanzhou
        { lat: 39.74, lng: 98.51 },   // Jiayuguan (Great Wall western terminus)
        { lat: 40.14, lng: 94.66 },   // Dunhuang (Mogao Caves)
        { lat: 41.83, lng: 86.62 },   // Korla
        { lat: 39.47, lng: 75.99 },   // Kashgar
        { lat: 39.65, lng: 66.97 },   // Samarkand
        { lat: 39.77, lng: 64.43 },   // Bukhara
        { lat: 37.59, lng: 61.83 },   // Merv
        { lat: 36.30, lng: 59.61 },   // Mashhad / Nishapur
        { lat: 35.69, lng: 51.39 },   // Tehran (Rey)
        { lat: 33.31, lng: 44.36 },   // Baghdad
        { lat: 36.20, lng: 37.16 },   // Aleppo
        { lat: 36.85, lng: 31.75 },   // Antalya / southern Anatolia
        { lat: 41.01, lng: 28.97 },   // Constantinople
        { lat: 40.64, lng: 22.94 },   // Thessalonica
        { lat: 45.44, lng: 12.32 },   // Venice
      ],
    },
  },
  {
    id: "indian-ocean-trade",
    year: 1200,
    endYear: 1450,
    periodId: "p1",
    regionIds: ["china", "seasia", "india", "persia", "egypt", "eafrica"],
    title: "Indian Ocean monsoon trade",
    description:
      "Maritime network linking China, Southeast Asia, India, the Persian Gulf, the Red Sea, and the Swahili coast — driven by predictable monsoon winds.",
    significance:
      "Built diasporic merchant communities, Swahili culture, and the spread of Islam across maritime Asia and East Africa.",
    facts: [
      "Hubs: Quanzhou, Malacca, Calicut, Hormuz, Aden, Kilwa.",
      "Lateen sail + astrolabe + Chinese magnetic compass = navigation revolution.",
      "Carried spices, cotton, ivory, gold, slaves, horses, porcelain.",
    ],
    highlight: {
      countryCodes: ["CHN", "VNM", "MYS", "IDN", "IND", "LKA", "IRN", "OMN", "YEM", "SAU", "EGY", "SOM", "KEN", "TZA"],
      color: "#22d3ee",
      focus: { lat: 5, lng: 75, altitude: 2.7 },
      path: [
        { lat: 31.2, lng: 121.5 }, { lat: 22.3, lng: 114.2 }, { lat: 14.0, lng: 113.0 },
        { lat: 1.3, lng: 104.5 }, { lat: 4.5, lng: 99.5 }, { lat: 7.0, lng: 92.0 },
        { lat: 6.9, lng: 79.9 }, { lat: 11.3, lng: 75.8 }, { lat: 14.0, lng: 65.0 },
        { lat: 22.0, lng: 60.0 }, { lat: 27.1, lng: 56.3 }, { lat: 13.0, lng: 53.0 },
        { lat: 12.8, lng: 45.0 }, { lat: 2.0, lng: 47.0 }, { lat: -4.0, lng: 40.5 },
        { lat: -8.96, lng: 39.5 },
      ],
    },
  },
  {
    id: "trans-saharan-trade",
    year: 1200,
    endYear: 1450,
    periodId: "p1",
    regionIds: ["wafrica", "egypt"],
    title: "Trans-Saharan caravan trade",
    description:
      "Camel caravans crossed the Sahara linking West African gold (Mali, Songhai) to North African and Mediterranean markets.",
    significance:
      "Made Mali and Timbuktu rich; spread Islam, Arabic script, and the salt-for-gold exchange that drew Europeans south.",
    facts: [
      "Camel saddle + caravan organization made desert crossings viable year-round.",
      "Salt from Taghaza traded ounce-for-ounce with Mali gold.",
      "Mansa Musa's 1324 hajj followed this network east through Cairo.",
    ],
    highlight: {
      countryCodes: ["MLI", "SEN", "GMB", "GIN", "MRT", "NER", "BFA", "TCD", "DZA", "LBY", "MAR", "TUN", "EGY", "NGA", "GHA"],
      color: "#fb923c",
      focus: { lat: 22, lng: 5, altitude: 2.4 },
      path: [
        // Eastern axis: Niger Bend → Cairo
        { lat: 12.65, lng: -8.00 },   // Niani (Mali capital)
        { lat: 13.51, lng: -2.10 },   // Djenné
        { lat: 16.78, lng: -3.00 },   // Timbuktu (Niger bend)
        { lat: 16.97, lng: 1.00 },    // Gao
        { lat: 19.10, lng: 1.27 },    // Tessalit
        { lat: 22.79, lng: 5.52 },    // Tamanrasset (Hoggar)
        { lat: 26.74, lng: 8.10 },    // Ghat
        { lat: 30.13, lng: 9.50 },    // Ghadames
        { lat: 32.88, lng: 13.18 },   // Tripoli
        { lat: 30.75, lng: 20.22 },   // Cyrenaica
        { lat: 30.05, lng: 31.24 },   // Cairo
        // Continue west — separate caravan returning from Niger bend
        { lat: 16.78, lng: -3.00 },   // Timbuktu (loop point)
        { lat: 18.74, lng: -7.39 },   // Walata
        { lat: 21.44, lng: -9.97 },   // Awdaghost
        { lat: 27.20, lng: -13.20 },  // Tindouf
        { lat: 31.62, lng: -4.99 },   // Sijilmasa (Morocco)
        { lat: 31.63, lng: -7.99 },   // Marrakech
        { lat: 33.97, lng: -5.00 },   // Fez
      ],
    },
  },

  // ---------- Maritime networks (p2) — Land-Based & Maritime Empires ----------
  {
    id: "columbian-exchange",
    year: 1492,
    endYear: 1750,
    periodId: "p2",
    regionIds: ["iberia", "wnerope", "caribbean", "mesoamerica", "andes", "brazil", "wafrica", "china"],
    title: "Columbian Exchange",
    description:
      "After 1492, sustained transfer of crops, animals, people, and pathogens between the Old and New Worlds.",
    significance:
      "American crops (potato, maize, cassava) drove Eurasian/African population growth; Old World disease wiped out ~90% of indigenous Americans.",
    facts: [
      "New → Old: potato, maize, tomato, cassava, tobacco, chocolate, silver.",
      "Old → New: wheat, sugar, horses, cattle, smallpox, measles.",
      "Smallpox enabled Spanish conquest of the Aztec and Inca.",
    ],
    highlight: {
      countryCodes: ["ESP", "PRT", "MEX", "PER", "BOL", "CUB", "HTI", "DOM", "JAM", "BRA", "VEN", "COL", "PAN", "FRA", "GBR", "DEU", "ITA", "NLD", "CHN"],
      color: "#a3e635",
      focus: { lat: 15, lng: -50, altitude: 2.7 },
      path: [
        // Old → New
        { lat: 38.71, lng: -9.14 },    // Lisbon
        { lat: 36.54, lng: -6.30 },    // Cádiz / Seville
        { lat: 28.10, lng: -15.41 },   // Canary Islands
        { lat: 14.92, lng: -23.50 },   // Cape Verde
        { lat: 18.50, lng: -69.90 },   // Hispaniola (Santo Domingo)
        { lat: 23.13, lng: -82.40 },   // Havana
        { lat: 19.43, lng: -99.13 },   // Mexico City (Tenochtitlán)
        { lat: 9.98, lng: -84.08 },    // Panama / Cartagena
        { lat: -12.05, lng: -77.04 },  // Lima
        { lat: -19.59, lng: -65.75 },  // Potosí
        // New → Old crops & silver
        { lat: -8.04, lng: -34.95 },   // Recife / Brazilian coast
        { lat: 13.10, lng: -59.62 },   // Barbados
        { lat: 32.78, lng: -79.93 },   // Charleston
        { lat: 36.54, lng: -6.30 },    // back to Cádiz
        { lat: 50.85, lng: 4.35 },     // Antwerp
        { lat: 51.51, lng: -0.13 },    // London
      ],
    },
  },
  {
    id: "manila-galleon",
    year: 1565,
    endYear: 1815,
    periodId: "p2",
    regionIds: ["andes", "mesoamerica", "seasia", "china"],
    title: "Manila Galleon trade",
    description:
      "Spanish galleons sailed Acapulco ↔ Manila annually, swapping Potosí silver for Chinese silk and porcelain.",
    significance:
      "First sustained trans-Pacific trade route — funneled American silver into the Ming/Qing economy and tied the world into one market.",
    facts: [
      "Roughly one-third of New World silver ended up in China.",
      "Round-trip Acapulco–Manila took ~6 months each way.",
      "Ended 1815 with Mexican independence wars.",
    ],
    highlight: {
      countryCodes: ["MEX", "PHL", "CHN", "PER", "BOL", "ESP", "JPN"],
      color: "#facc15",
      focus: { lat: 8, lng: -160, altitude: 2.8 },
      path: [
        { lat: -19.59, lng: -65.75 },  // Potosí (silver source)
        { lat: -12.05, lng: -77.04 },  // Lima / Callao
        { lat: 9.98, lng: -84.08 },    // Panama (overland transit)
        { lat: 16.86, lng: -99.88 },   // Acapulco (Pacific departure)
        { lat: 18.0, lng: -120.0 },    // mid-Pacific NE swing
        { lat: 19.0, lng: -155.5 },    // Hawaii waters
        { lat: 14.0, lng: 175.0 },     // central Pacific
        { lat: 13.49, lng: 144.78 },   // Guam (provisioning stop)
        { lat: 14.60, lng: 120.98 },   // Manila
        { lat: 22.30, lng: 114.17 },   // Macau / Hong Kong
        { lat: 23.13, lng: 113.27 },   // Guangzhou (Chinese silk + porcelain)
      ],
    },
  },
  {
    id: "song-dynasty",
    year: 1200,
    endYear: 1279,
    periodId: "p1",
    regionIds: ["china"],
    title: "Song dynasty (Southern Song)",
    description:
      "Southern Song rules from Hangzhou after losing the north to the Jin in 1127 — Confucian revival, the imperial civil service exam at full scale, Champa rice, paper money, and gunpowder weapons.",
    significance:
      "Most economically and technologically advanced state of its era; ~100 million population, mass urbanization, and a meritocratic bureaucracy that other East Asian states copy.",
    facts: [
      "Champa rice → two harvests/year → population doubles.",
      "First true paper money; compass, gunpowder, and movable type all mature here.",
      "Falls to Kublai Khan's Mongols in 1279.",
    ],
    highlight: {
      countryCodes: ["CHN"],
      color: "#dc2626",
      focus: { lat: 30, lng: 113, altitude: 1.7 },
    },
  },
  {
    id: "yuan-dynasty",
    year: 1271,
    endYear: 1368,
    periodId: "p1",
    regionIds: ["china", "mongol"],
    title: "Yuan dynasty (Mongol China)",
    description:
      "Kublai Khan declares the Yuan, completes the conquest of the Southern Song (1279), and rules China as part of the wider Mongol world.",
    significance:
      "First non-Han dynasty to rule all of China. Pax Mongolica reopens Silk Roads — Marco Polo, Ibn Battuta, and the Black Death all travel through Yuan territory.",
    facts: [
      "Capital at Khanbaliq (Dadu) — modern Beijing.",
      "Han Chinese ranked 4th of 4 social classes; civil service exam suspended.",
      "Red Turban revolts + plague → collapse 1368.",
    ],
    highlight: {
      countryCodes: ["CHN", "MNG"],
      color: "#7c3aed",
      focus: { lat: 40, lng: 110, altitude: 2.0 },
    },
  },
  {
    id: "ming-dynasty",
    year: 1368,
    endYear: 1644,
    periodId: "p2",
    regionIds: ["china"],
    title: "Ming dynasty",
    description:
      "Hongwu (Zhu Yuanzhang), a peasant rebel, expels the Mongols and founds the Ming. Yongle moves the capital to Beijing, builds the Forbidden City, and sponsors Zheng He's voyages.",
    significance:
      "Restores Han rule, rebuilds the Great Wall in stone, and at its peak is the world's wealthiest economy. Silver inflows from Potosí via Manila tie China to the global economy.",
    facts: [
      "Yongle built the Forbidden City and sponsored Zheng He's 7 voyages (1405–1433).",
      "Single-Whip tax reform demanded silver payment → ties China to global silver trade.",
      "Falls to peasant rebellion (1644) → Manchus walk in and become the Qing.",
    ],
    highlight: {
      countryCodes: ["CHN"],
      color: "#f59e0b",
      focus: { lat: 35, lng: 110, altitude: 1.7 },
    },
  },
  {
    id: "sundiata-mali",
    year: 1235,
    endYear: 1464,
    periodId: "p1",
    regionIds: ["wafrica"],
    title: "Sundiata founds the Mali Empire",
    description:
      "Sundiata Keita defeats the Sosso at Kirina and unifies the Mande peoples, founding Mali on the trans-Saharan gold–salt trade.",
    significance:
      "Mali becomes the wealthiest state in the medieval world, dominating trans-Saharan commerce and Islamic scholarship at Timbuktu.",
    facts: [
      "Epic of Sundiata preserved by jeli (griot) oral tradition.",
      "Capital at Niani; controlled gold fields of Bambuk and Bure.",
      "Mansa Musa (r. 1312–37) was Sundiata's grand-nephew.",
    ],
    highlight: { countryCodes: ["MLI", "SEN", "GMB", "GIN", "MRT", "BFA"], focus: { lat: 14, lng: -5, altitude: 2.0 } },
  },
  {
    id: "marco-polo",
    year: 1271,
    endYear: 1295,
    periodId: "p1",
    regionIds: ["italy", "persia", "china"],
    title: "Marco Polo's travels",
    description:
      "The Venetian merchant travels overland to Kublai Khan's Yuan court and serves him for 17 years before returning to dictate Il Milione.",
    significance:
      "Pax Mongolica makes the journey safe — his book seeds European appetite for Asian goods that drives later voyages.",
    facts: [
      "Paid in Mongol paper money; described coal, asbestos, and 'black stones' that burn.",
      "His book inspires Columbus (who carried an annotated copy in 1492).",
    ],
    highlight: {
      countryCodes: ["ITA", "TUR", "IRN", "AFG", "CHN", "MNG"],
      // Bright cyan — overland Silk Road route crosses brown/tan Central Asia;
      // cyan stands out where purple/blue would blend with mountains and sky.
      color: "#22d3ee",
      focus: { lat: 42, lng: 70, altitude: 2.5 },
      pins: [
        { lat: 45.44, lng: 12.32, label: "Venice (1271)", color: "#22d3ee" },
        { lat: 36.20, lng: 36.16, label: "Acre", color: "#22d3ee" },
        { lat: 32.66, lng: 51.67, label: "Isfahan", color: "#22d3ee" },
        { lat: 36.71, lng: 67.12, label: "Balkh", color: "#22d3ee" },
        { lat: 39.63, lng: 75.99, label: "Kashgar", color: "#22d3ee" },
        { lat: 39.91, lng: 116.40, label: "Khanbaliq (Beijing)", color: "#22d3ee" },
      ],
      path: [
        { lat: 45.44, lng: 12.32 },
        { lat: 36.20, lng: 36.16 },
        { lat: 35.69, lng: 51.39 },
        { lat: 32.66, lng: 51.67 },
        { lat: 36.71, lng: 67.12 },
        { lat: 39.63, lng: 75.99 },
        { lat: 41.83, lng: 95.18 },
        { lat: 39.91, lng: 116.40 },
      ],
    },
  },
  {
    id: "tenochtitlan-founded",
    year: 1325,
    periodId: "p1",
    regionIds: ["mesoamerica"],
    title: "Aztecs found Tenochtitlán",
    description:
      "The Mexica build their island capital on Lake Texcoco after seeing the prophesied eagle on a cactus.",
    significance:
      "Becomes the largest city in the Americas (~200k); seat of the Triple Alliance until Cortés (1521).",
    facts: [
      "Engineered chinampas (floating gardens) supported huge population.",
      "Triple Alliance with Texcoco and Tlacopan formed 1428.",
      "Ruled via tribute, not direct administration — fueled later defections.",
    ],
    highlight: { countryCodes: ["MEX"], focus: { lat: 19.4, lng: -99.1, altitude: 1.4 } },
  },
  {
    id: "ibn-battuta",
    year: 1325,
    endYear: 1354,
    periodId: "p1",
    regionIds: ["egypt", "ottoman", "india", "china", "wafrica", "eafrica"],
    title: "Ibn Battuta's travels",
    description:
      "The Moroccan jurist journeys ~75,000 miles across Dar al-Islam — Mecca, Cairo, Delhi, Quanzhou, Kilwa, and Mali.",
    significance:
      "Eyewitness to the depth of cosmopolitan Islamic networks before the Black Death; his Rihla is a foundational world history source.",
    facts: [
      "Served as a qadi (Islamic judge) under Muhammad bin Tughluq in Delhi.",
      "Visited Mansa Musa's successor Mansa Sulayman in Mali.",
      "Returned to Fez in 1354 — dictated the Rihla to a court scribe.",
    ],
    highlight: {
      countryCodes: ["MAR", "EGY", "SAU", "IND", "CHN", "MLI", "TZA"],
      color: "#06b6d4",
      focus: { lat: 18, lng: 55, altitude: 2.8 },
      pins: [
        { lat: 35.78, lng: -5.81, label: "Tangier (1325 start)", color: "#06b6d4" },
        { lat: 30.05, lng: 31.24, label: "Cairo", color: "#06b6d4" },
        { lat: 21.42, lng: 39.83, label: "Mecca", color: "#06b6d4" },
        { lat: -8.96, lng: 39.65, label: "Kilwa", color: "#06b6d4" },
        { lat: 28.61, lng: 77.21, label: "Delhi", color: "#06b6d4" },
        { lat: 24.87, lng: 118.66, label: "Quanzhou", color: "#06b6d4" },
        { lat: 16.78, lng: -3.00, label: "Timbuktu (1352)", color: "#06b6d4" },
      ],
      path: [
        { lat: 35.78, lng: -5.81 },   // Tangier
        { lat: 36.80, lng: 10.18 },   // Tunis (overland)
        { lat: 31.20, lng: 29.92 },   // Alexandria
        { lat: 30.05, lng: 31.24 },   // Cairo
        { lat: 21.42, lng: 39.83 },   // Mecca
        { lat: 33.31, lng: 44.36 },   // Baghdad (overland)
        { lat: 32.66, lng: 51.67 },   // Isfahan
        { lat: 28.61, lng: 77.21 },   // Delhi (overland)
        { lat: 11.26, lng: 75.78 },   // Calicut
        // Calicut → Quanzhou: keep arcs over water around the Indian peninsula
        // and through the Malacca Strait.
        { lat: 6.93, lng: 79.85 },    // Sri Lanka
        { lat: 7.0, lng: 92.0 },      // Andaman Sea
        { lat: 4.5, lng: 99.5 },      // Strait of Malacca
        { lat: 14.0, lng: 113.0 },    // South China Sea
        { lat: 24.87, lng: 118.66 },  // Quanzhou
        // Return down East Africa coast via Indian Ocean, not through Asia again.
        { lat: 14.0, lng: 65.0 },     // Arabian Sea
        { lat: 12.8, lng: 45.0 },     // Aden
        { lat: 2.0, lng: 47.0 },      // off Mogadishu
        { lat: -6.81, lng: 39.27 },   // Dar es Salaam
        { lat: -8.96, lng: 39.65 },   // Kilwa
        // Then back overland up through Africa to Mali and Morocco.
        { lat: 21.42, lng: 39.83 },   // Mecca again on return
        { lat: 30.05, lng: 31.24 },   // Cairo
        { lat: 16.78, lng: -3.00 },   // Timbuktu
        { lat: 33.97, lng: -4.99 },   // Fez
      ],
    },
  },
  {
    id: "malacca-founded",
    year: 1400,
    endYear: 1511,
    periodId: "p1",
    regionIds: ["seasia"],
    title: "Sultanate of Malacca founded",
    description:
      "Parameswara establishes Malacca on the strait between Sumatra and the Malay Peninsula; converts to Islam and becomes a Ming tributary.",
    significance:
      "Malacca becomes the great Indian Ocean entrepôt — Muslim trade hub spreading Islam across maritime Southeast Asia until Portuguese conquest 1511.",
    facts: [
      "Strait of Malacca handled all India ↔ China sea traffic.",
      "Tributary to Ming under Zheng He's protection.",
      "Fell to Afonso de Albuquerque's Portuguese in 1511.",
    ],
    highlight: { countryCodes: ["MYS", "IDN", "SGP"], focus: { lat: 2.2, lng: 102.2, altitude: 1.8 } },
  },
  {
    id: "kilwa-swahili",
    year: 1300,
    endYear: 1505,
    periodId: "p1",
    regionIds: ["eafrica"],
    title: "Kilwa and the Swahili city-states",
    description:
      "Kilwa, Mombasa, Mogadishu, and Sofala thrive on Indian Ocean trade — gold from Great Zimbabwe, ivory, slaves traded for Chinese porcelain and Indian cloth.",
    significance:
      "Swahili culture (Bantu + Arab + Persian) spreads Islam down the East African coast; sacked by Portuguese under Almeida in 1505.",
    facts: [
      "Husuni Kubwa palace at Kilwa — largest stone building in sub-Saharan Africa.",
      "Ibn Battuta called Kilwa 'one of the most beautiful cities in the world' (1331).",
      "Swahili language is Bantu grammar with heavy Arabic loanwords.",
    ],
    highlight: { countryCodes: ["TZA", "KEN", "MOZ", "SOM", "ZWE"], focus: { lat: -8, lng: 39, altitude: 1.9 } },
  },
  {
    id: "inca-founding",
    year: 1438,
    endYear: 1533,
    periodId: "p1",
    regionIds: ["andes"],
    title: "Pachacuti expands the Inca Empire",
    description:
      "Pachacuti reorganizes a small Cuzco kingdom into Tawantinsuyu — the largest pre-Columbian empire — through conquest and the mit'a labor system.",
    significance:
      "Built ~25,000 miles of Andean roads, terrace agriculture, and quipu accounting — administered without writing or wheeled vehicles.",
    facts: [
      "Capital at Cuzco; ceremonial center at Machu Picchu (built ~1450).",
      "Mit'a: rotational labor obligation later reused by the Spanish at Potosí.",
      "Sapa Inca venerated as son of the sun god Inti.",
    ],
    highlight: { countryCodes: ["PER", "BOL", "ECU", "CHL", "ARG", "COL"], focus: { lat: -13, lng: -72, altitude: 2.0 } },
  },

  // ---------- Unit 3 (p2) — land-based empires ----------
  {
    id: "safavid-1501",
    year: 1501,
    endYear: 1736,
    periodId: "p2",
    regionIds: ["persia"],
    title: "Safavid Empire founded",
    description:
      "Shah Ismail I conquers Tabriz and proclaims Twelver Shia Islam the state religion — forcibly converting Sunni Persia.",
    significance:
      "Creates the Sunni–Shia geopolitical fault line that still defines the Middle East. Buffer between Ottoman and Mughal empires.",
    facts: [
      "Qizilbash Turkmen cavalry as military backbone.",
      "Shah Abbas I (r. 1588–1629) made Isfahan a global art capital.",
      "Fell to Afghan Hotaki invasion in 1722.",
    ],
    highlight: { countryCodes: ["IRN", "IRQ", "AZE", "ARM", "AFG", "TKM"], focus: { lat: 32, lng: 53, altitude: 1.8 } },
  },
  {
    id: "chaldiran-1514",
    year: 1514,
    periodId: "p2",
    regionIds: ["ottoman", "persia"],
    title: "Battle of Chaldiran",
    description:
      "Selim I's Ottoman musketeers and artillery devastate Shah Ismail's Qizilbash cavalry in eastern Anatolia.",
    significance:
      "Cements Ottoman gunpowder supremacy and sets the long Sunni–Shia frontier; Selim seizes the Mamluk caliphate three years later.",
    facts: [
      "Janissaries armed with arquebuses; Safavids had almost no firearms.",
      "Loss convinced Safavids to adopt gunpowder weapons themselves.",
    ],
    highlight: { countryCodes: ["TUR", "IRN", "IRQ", "AZE"], focus: { lat: 39, lng: 44, altitude: 1.7 } },
  },
  {
    id: "suleiman",
    year: 1520,
    endYear: 1566,
    periodId: "p2",
    regionIds: ["ottoman", "wnerope"],
    title: "Suleiman the Magnificent",
    description:
      "Ottoman sultan presides over the empire's golden age — codifies kanun law, captures Belgrade and Rhodes, besieges Vienna (1529).",
    significance:
      "Ottoman Empire reaches greatest extent and cultural peak; rivals Habsburg Spain as the dominant Mediterranean power.",
    facts: [
      "Allied with France against the Habsburgs (1536 Capitulations).",
      "Sinan, his court architect, designed the Süleymaniye Mosque.",
      "Failed siege of Vienna 1529 — Ottoman high-water mark in Europe.",
    ],
    highlight: {
      countryCodes: ["TUR", "GRC", "BGR", "ROU", "SRB", "BIH", "HUN", "EGY", "SYR", "IRQ", "JOR", "ISR", "SAU", "DZA", "TUN", "LBY"],
      focus: { lat: 38, lng: 30, altitude: 2.2 },
    },
  },
  {
    id: "akbar",
    year: 1556,
    endYear: 1605,
    periodId: "p2",
    regionIds: ["india"],
    title: "Akbar's reign",
    description:
      "Third Mughal emperor builds a syncretic regime — abolishes jizya on non-Muslims, marries Rajput princesses, founds din-i ilahi.",
    significance:
      "Stabilizes Mughal rule by integrating Hindu elites; sets the template for Mughal art, architecture, and revenue (zabt) administration.",
    facts: [
      "Built Fatehpur Sikri as a planned capital (later abandoned).",
      "Held interfaith debates with Jesuits, Jains, Hindus, and Zoroastrians.",
      "Mansabdari system tied military rank to revenue grants (jagirs).",
    ],
    highlight: { countryCodes: ["IND", "PAK", "BGD", "AFG"], focus: { lat: 27, lng: 78, altitude: 1.9 } },
  },
  {
    id: "lepanto-1571",
    year: 1571,
    periodId: "p2",
    regionIds: ["italy", "ottoman", "iberia"],
    title: "Battle of Lepanto",
    description:
      "Holy League galleys (Spain, Venice, the Papacy) crush the Ottoman fleet off Greece — first major Christian naval victory over the Ottomans.",
    significance:
      "Halts Ottoman naval expansion in the Mediterranean, though Constantinople rebuilt the fleet within a year.",
    facts: [
      "Don John of Austria commanded the Holy League.",
      "~30,000 Ottoman casualties; ~7,500 Christian.",
      "Cervantes (Don Quixote) lost the use of his left hand at Lepanto.",
    ],
    highlight: { countryCodes: ["GRC", "TUR", "ITA", "ESP"], focus: { lat: 38, lng: 21, altitude: 1.7 } },
  },
  {
    id: "aurangzeb",
    year: 1658,
    endYear: 1707,
    periodId: "p2",
    regionIds: ["india"],
    title: "Aurangzeb's reign",
    description:
      "Last 'great' Mughal — expands the empire to its greatest territorial extent but reimposes jizya, destroys Hindu temples, and wages costly Deccan wars.",
    significance:
      "His religious intolerance and military overreach drain the treasury; after his death the empire fractures, opening India to Mughal successor states and the British EIC.",
    facts: [
      "Imprisoned his father Shah Jahan in Agra Fort.",
      "Executed the ninth Sikh guru Tegh Bahadur (1675).",
      "27-year Deccan campaign vs. the Marathas under Shivaji bled the treasury.",
    ],
    highlight: { countryCodes: ["IND", "PAK", "BGD", "AFG"], focus: { lat: 22, lng: 78, altitude: 1.9 } },
  },

  // ---------- Unit 4 (p2) — maritime empires ----------
  {
    id: "da-gama-1498",
    year: 1498,
    periodId: "p2",
    regionIds: ["iberia", "eafrica", "india"],
    title: "Vasco da Gama reaches India",
    description:
      "Portuguese mariner rounds the Cape of Good Hope and lands at Calicut — the first all-water route from Europe to India.",
    significance:
      "Breaks the Venetian–Mamluk monopoly on the spice trade; Portugal builds a string of fortified factories from Mozambique to Macau.",
    facts: [
      "Used a Gujarati pilot, Ibn Majid (per some accounts), across the Indian Ocean.",
      "Returned with cargo worth 60× the cost of the voyage.",
      "Portuguese cartaz licensing system extorted Indian Ocean shippers.",
    ],
    highlight: {
      countryCodes: ["PRT", "ZAF", "MOZ", "KEN", "IND"],
      color: "#3b82f6",
      focus: { lat: 0, lng: 50, altitude: 2.7 },
      pins: [
        { lat: 38.71, lng: -9.14, label: "Lisbon (Jul 1497)", color: "#3b82f6" },
        { lat: -34.36, lng: 18.47, label: "Cape of Good Hope", color: "#3b82f6" },
        { lat: -3.22, lng: 40.12, label: "Malindi", color: "#3b82f6" },
        { lat: 11.26, lng: 75.78, label: "Calicut (May 1498)", color: "#3b82f6" },
      ],
      path: [
        { lat: 38.71, lng: -9.14 },
        { lat: 14.92, lng: -23.50 },
        { lat: -23.55, lng: -16.00 },
        { lat: -34.36, lng: 18.47 },
        { lat: -25.96, lng: 32.58 },
        { lat: -3.22, lng: 40.12 },
        { lat: 11.26, lng: 75.78 },
      ],
    },
  },
  {
    id: "magellan-1519",
    year: 1519,
    endYear: 1522,
    periodId: "p2",
    regionIds: ["iberia", "andes", "seasia"],
    title: "Magellan's circumnavigation",
    description:
      "Castilian-funded Portuguese captain crosses the Atlantic, threads the strait at South America's tip, and crosses the Pacific. He dies in the Philippines; Elcano completes the circuit.",
    significance:
      "Proves the world is one ocean and gives Spain its claim to the Philippines — basis of the later Manila galleon trade.",
    facts: [
      "5 ships and 270 men set out; 1 ship and 18 men returned.",
      "Killed at Mactan by Datu Lapu-Lapu (1521).",
      "First crossing of the Pacific — took 99 days, scurvy decimated the crew.",
    ],
    highlight: {
      countryCodes: ["ESP", "BRA", "ARG", "CHL", "PHL", "IDN"],
      color: "#a855f7",
      focus: { lat: -5, lng: -90, altitude: 3.2 },
      pins: [
        { lat: 36.79, lng: -6.35, label: "Sanlúcar (Sep 1519)", color: "#a855f7" },
        { lat: -22.91, lng: -43.20, label: "Rio de Janeiro", color: "#a855f7" },
        { lat: -53.50, lng: -70.92, label: "Strait of Magellan", color: "#a855f7" },
        { lat: 13.49, lng: 144.78, label: "Guam", color: "#a855f7" },
        { lat: 10.31, lng: 123.99, label: "Mactan (Magellan †1521)", color: "#a855f7" },
        { lat: -34.36, lng: 18.47, label: "Cape of Good Hope", color: "#a855f7" },
      ],
      path: [
        { lat: 36.79, lng: -6.35 },
        { lat: 14.92, lng: -23.50 },
        { lat: -22.91, lng: -43.20 },
        { lat: -53.50, lng: -70.92 },
        { lat: -25.00, lng: -120.00 },
        { lat: 0.00, lng: 160.00 },
        { lat: 13.49, lng: 144.78 },
        { lat: 10.31, lng: 123.99 },
        { lat: -8.65, lng: 115.21 },
        { lat: -34.36, lng: 18.47 },
        { lat: 14.92, lng: -23.50 },
        { lat: 36.79, lng: -6.35 },
      ],
    },
  },
  {
    id: "atlantic-slave-trade",
    year: 1500,
    endYear: 1888,
    periodId: "p2",
    regionIds: ["wafrica", "brazil", "caribbean", "northam"],
    title: "Atlantic slave trade",
    description:
      "European traders ship ~12.5 million enslaved Africans across the Middle Passage — primarily to Brazilian and Caribbean sugar plantations.",
    significance:
      "Demographic catastrophe for West/Central Africa, racialized chattel slavery in the Americas, and the labor base for Atlantic plantation capitalism.",
    facts: [
      "~10.7 million survived the Middle Passage; ~1.8 million died en route.",
      "Brazil received ~5 million; the Caribbean ~4 million; British North America ~400,000.",
      "Britain abolished the trade 1807; Brazil ended slavery last (1888).",
    ],
    highlight: {
      splits: [
        { label: "Sources (West/Central Africa)", color: "#a855f7", countryCodes: ["SEN", "GMB", "GIN", "GHA", "TGO", "BEN", "NGA", "CMR", "GAB", "COG", "AGO"] },
        { label: "Destinations (Americas)", color: "#f97316", countryCodes: ["BRA", "CUB", "HTI", "DOM", "JAM", "USA", "PRI", "TTO"] },
      ],
      focus: { lat: 5, lng: -20, altitude: 2.6 },
    },
  },
  {
    id: "spanish-armada",
    year: 1588,
    periodId: "p2",
    regionIds: ["iberia", "wnerope"],
    title: "Spanish Armada defeated",
    description:
      "Philip II's invasion fleet is dispersed by English fireships and Atlantic storms off the British Isles.",
    significance:
      "Marks the relative decline of Habsburg sea power and the rise of English/Dutch Atlantic ambitions — joint-stock companies follow within decades.",
    facts: [
      "130 ships, ~30,000 men set out; ~half made it home.",
      "Storms ('Protestant wind') killed more men than English cannon.",
      "Drake's 1577–80 circumnavigation already showed Spain's vulnerability.",
    ],
    highlight: { countryCodes: ["ESP", "GBR", "IRL", "NLD"], focus: { lat: 50, lng: -8, altitude: 1.9 } },
  },

  // ---------- Unit 5 (p3) — revolutions ----------
  {
    id: "napoleonic-wars",
    year: 1803,
    endYear: 1815,
    periodId: "p3",
    regionIds: ["wnerope", "iberia", "italy", "russia", "ottoman"],
    title: "Napoleonic Wars",
    description:
      "Napoleon Bonaparte builds a French continental empire, exporting the Civil Code and metric system before defeat at Leipzig (1813) and Waterloo (1815).",
    significance:
      "Spreads Enlightenment legal codes across Europe, stokes nationalism, and destabilizes Spanish America — opening the door to Latin American independence.",
    facts: [
      "Continental System (1806) tried to embargo Britain — backfired.",
      "Russian campaign (1812): 600,000 invaded, ~100,000 returned.",
      "Defeat at Waterloo by Wellington & Blücher (1815).",
    ],
    highlight: {
      countryCodes: ["FRA", "ESP", "PRT", "ITA", "DEU", "NLD", "BEL", "AUT", "POL", "RUS", "GBR"],
      focus: { lat: 48, lng: 12, altitude: 2.1 },
    },
  },
  {
    id: "congress-vienna",
    year: 1815,
    periodId: "p3",
    regionIds: ["wnerope", "italy"],
    title: "Congress of Vienna",
    description:
      "Metternich, Castlereagh, Talleyrand, and Tsar Alexander I redraw post-Napoleonic Europe around legitimacy, balance of power, and conservative restoration.",
    significance:
      "Inaugurates the Concert of Europe — no general European war for 99 years (until 1914).",
    facts: [
      "Restored Bourbons in France, Spain, and Naples.",
      "Created the German Confederation (39 states).",
      "Holy Alliance (Russia, Austria, Prussia) suppressed liberal revolutions.",
    ],
    highlight: { countryCodes: ["AUT", "FRA", "DEU", "RUS", "GBR", "ITA", "POL"], focus: { lat: 48, lng: 16, altitude: 2.0 } },
  },
  {
    id: "mexican-indep",
    year: 1810,
    endYear: 1821,
    periodId: "p3",
    regionIds: ["mesoamerica"],
    title: "Mexican War of Independence",
    description:
      "Hidalgo's Grito de Dolores (1810) launches an indigenous-mestizo revolt; criollo Iturbide finally negotiates independence in 1821.",
    significance:
      "Largest peninsular colony breaks free; demonstrates how Napoleonic invasion of Spain (1808) cracked the Atlantic empire.",
    facts: [
      "Hidalgo and Morelos executed (1811, 1815) before independence achieved.",
      "Plan of Iguala (1821): independence, Catholicism, racial equality among Spaniards/criollos.",
      "Iturbide briefly crowned Emperor Agustín I (1822–23).",
    ],
    highlight: { countryCodes: ["MEX", "GTM", "ESP"], focus: { lat: 22, lng: -100, altitude: 1.7 } },
  },
  {
    id: "simon-bolivar",
    year: 1819,
    endYear: 1825,
    periodId: "p3",
    regionIds: ["andes", "caribbean"],
    title: "Bolívar liberates South America",
    description:
      "Simón Bolívar wins the wars of Spanish American independence — Boyacá (1819), Carabobo (1821), Ayacucho (1824) — creating Gran Colombia and Bolivia.",
    significance:
      "Five new republics emerge from Spanish America; Bolívar's dream of a united Latin America fails as Gran Colombia fragments by 1831.",
    facts: [
      "Crossed the Andes from Venezuela to surprise Spanish at Boyacá.",
      "Haiti's Pétion gave him refuge and arms in exchange for an abolition pledge.",
      "Died disillusioned in 1830: 'América is ungovernable.'",
    ],
    highlight: {
      countryCodes: ["VEN", "COL", "ECU", "PER", "BOL", "PAN"],
      color: "#22c55e",
      focus: { lat: -2, lng: -73, altitude: 2.3 },
      pins: [
        { lat: 10.49, lng: -66.88, label: "Caracas (Bolívar's birth)", color: "#22c55e" },
        { lat: 5.76, lng: -72.60, label: "Boyacá 1819", color: "#22c55e" },
        { lat: 4.71, lng: -74.07, label: "Bogotá", color: "#22c55e" },
        { lat: 10.16, lng: -67.99, label: "Carabobo 1821", color: "#22c55e" },
        { lat: -0.18, lng: -78.47, label: "Quito 1822", color: "#22c55e" },
        { lat: -13.16, lng: -74.22, label: "Ayacucho 1824", color: "#22c55e" },
        { lat: -16.50, lng: -68.15, label: "La Paz (Bolivia 1825)", color: "#22c55e" },
      ],
      path: [
        { lat: 10.49, lng: -66.88 },
        { lat: 10.16, lng: -67.99 },
        { lat: 5.76, lng: -72.60 },
        { lat: 4.71, lng: -74.07 },
        { lat: -0.18, lng: -78.47 },
        { lat: -12.05, lng: -77.04 },
        { lat: -13.16, lng: -74.22 },
        { lat: -16.50, lng: -68.15 },
      ],
    },
  },
  {
    id: "abolition-1833",
    year: 1833,
    endYear: 1888,
    periodId: "p3",
    regionIds: ["wnerope", "northam", "caribbean", "brazil"],
    title: "Abolition of slavery in the Atlantic",
    description:
      "Britain abolishes slavery throughout the empire (1833); the US (1865, 13th Amendment); Cuba (1886); Brazil (1888) — last in the Americas.",
    significance:
      "Plantations transition to indentured labor (Indian, Chinese 'coolies') — reshapes global migration patterns through the late 19th century.",
    facts: [
      "British paid £20m compensation to slaveowners — not the enslaved.",
      "US Civil War (1861–65) cost ~750,000 lives.",
      "Brazil's Lei Áurea (Golden Law) signed by Princess Isabel.",
    ],
    highlight: {
      countryCodes: ["GBR", "USA", "BRA", "CUB", "JAM", "TTO", "HTI", "ZAF"],
      focus: { lat: 10, lng: -40, altitude: 2.6 },
    },
  },
  {
    id: "tanzimat",
    year: 1839,
    endYear: 1876,
    periodId: "p3",
    regionIds: ["ottoman"],
    title: "Tanzimat reforms",
    description:
      "Ottoman state launches top-down modernization — equal citizenship for non-Muslims, modern army, secular schools, decimal currency, telegraph network.",
    significance:
      "Classic example of a defensive industrialization / westernization program — partial success, generates Young Ottoman backlash and 1876 constitution.",
    facts: [
      "Hatt-i Şerif of Gülhane (1839) launched the program.",
      "Ended legal distinction (millet) between Muslims and non-Muslims.",
      "Constitution of 1876 suspended by Abdülhamid II two years later.",
    ],
    highlight: {
      countryCodes: ["TUR", "SYR", "IRQ", "JOR", "ISR", "PSE", "LBN", "EGY", "GRC", "BGR", "ALB", "BIH", "SRB"],
      focus: { lat: 39, lng: 35, altitude: 2.0 },
    },
  },

  // ---------- Unit 6 (p3) — imperialism ----------
  {
    id: "plassey",
    year: 1757,
    periodId: "p3",
    regionIds: ["india", "wnerope"],
    title: "Battle of Plassey",
    description:
      "Robert Clive's East India Company forces defeat the Nawab of Bengal Siraj-ud-Daulah after bribing his commander Mir Jafar to defect.",
    significance:
      "Hands Bengal — the richest province of the Mughal world — to the EIC. Beginning of British territorial empire in India and the model of company rule.",
    facts: [
      "Roughly 3,000 EIC troops vs. 50,000 Bengali — outcome decided by treachery.",
      "Bengal famine of 1770 killed ~10 million under EIC mismanagement.",
      "EIC ruled India directly until the 1857 Rebellion, then the Crown took over.",
    ],
    highlight: { countryCodes: ["IND", "BGD", "GBR"], focus: { lat: 23, lng: 88, altitude: 1.7 } },
  },
  {
    id: "suez-canal",
    year: 1869,
    periodId: "p3",
    regionIds: ["egypt", "wnerope", "india"],
    title: "Suez Canal opens",
    description:
      "Ferdinand de Lesseps's 100-mile canal links the Mediterranean and the Red Sea, slashing the Europe–India voyage by ~7,000 miles.",
    significance:
      "Indispensable to British India; Britain buys the Khedive's shares in 1875 and occupies Egypt in 1882 to secure it.",
    facts: [
      "Built largely by forced Egyptian corvée labor — ~120,000 deaths.",
      "Verdi composed Aida for the canal's opening ceremonies.",
      "Nationalized by Nasser in 1956 → triggered the Suez Crisis.",
    ],
    highlight: { countryCodes: ["EGY", "GBR", "FRA", "IND", "ISR"], focus: { lat: 30, lng: 32, altitude: 1.6 } },
  },
  {
    id: "berlin-conference",
    year: 1884,
    endYear: 1885,
    periodId: "p3",
    regionIds: ["wafrica", "eafrica", "wnerope"],
    title: "Berlin Conference",
    description:
      "Bismarck convenes 14 European powers (no Africans) to set rules for the partition of Africa — 'effective occupation' to claim territory.",
    significance:
      "Codifies the Scramble for Africa; by 1914 only Ethiopia and Liberia remain independent. Borders drawn at the conference still cause conflict today.",
    facts: [
      "Leopold II of Belgium got the Congo Free State as personal property.",
      "Congo Free State atrocities killed ~10 million by 1908.",
      "No African leaders invited — borders ignored ethnic, linguistic lines.",
    ],
    highlight: {
      splits: [
        { label: "British Africa", color: "#dc2626", countryCodes: ["EGY", "SDN", "KEN", "UGA", "TZA", "ZAF", "ZWE", "ZMB", "BWA", "GHA", "NGA", "SLE"] },
        { label: "French Africa", color: "#3b82f6", countryCodes: ["MAR", "DZA", "TUN", "MLI", "SEN", "GIN", "BFA", "CIV", "NER", "TCD", "CAF", "COG", "GAB", "MDG", "DJI"] },
        { label: "Belgian / Portuguese / German / Italian", color: "#a855f7", countryCodes: ["COD", "AGO", "MOZ", "GNB", "CPV", "STP", "CMR", "TGO", "NAM", "RWA", "BDI", "LBY", "ERI", "SOM"] },
      ],
      focus: { lat: 0, lng: 20, altitude: 2.4 },
    },
  },
  {
    id: "adwa",
    year: 1896,
    periodId: "p3",
    regionIds: ["eafrica", "italy"],
    title: "Battle of Adwa",
    description:
      "Emperor Menelik II's Ethiopian army crushes Italian invaders at Adwa — the only major African military defeat of a European colonial power in the Scramble.",
    significance:
      "Preserves Ethiopian independence (until 1936) and becomes a global symbol of anti-colonial resistance — inspiring Pan-Africanism.",
    facts: [
      "Empress Taytu Betul commanded a flank in person.",
      "Ethiopia had bought modern Russian and French rifles in advance.",
      "Italy got revenge under Mussolini in 1935 — briefly occupied Ethiopia.",
    ],
    highlight: { countryCodes: ["ETH", "ERI", "ITA"], focus: { lat: 14, lng: 39, altitude: 1.7 } },
  },
  {
    id: "boxer-rebellion",
    year: 1899,
    endYear: 1901,
    periodId: "p3",
    regionIds: ["china"],
    title: "Boxer Rebellion",
    description:
      "Society of Righteous and Harmonious Fists, with Empress Dowager Cixi's tacit support, attacks foreign legations in Beijing.",
    significance:
      "Eight-Nation Alliance (Britain, US, Germany, France, Russia, Japan, Italy, Austria-Hungary) crushes the rising. Boxer Protocol (1901) imposes a crippling indemnity, accelerating the Qing collapse.",
    facts: [
      "55-day siege of Beijing's foreign legation quarter.",
      "Boxers practiced martial arts and believed they were bullet-proof.",
      "$330m indemnity — US later refunded part of it as scholarships (Tsinghua).",
    ],
    highlight: { countryCodes: ["CHN", "JPN", "RUS", "GBR", "FRA", "DEU", "USA", "ITA"], focus: { lat: 39, lng: 116, altitude: 1.6 } },
  },

  // ---------- Unit 7 (p4) — global conflict ----------
  {
    id: "mexican-rev",
    year: 1910,
    endYear: 1920,
    periodId: "p4",
    regionIds: ["mesoamerica"],
    title: "Mexican Revolution",
    description:
      "Madero, Zapata, Villa, and Carranza overthrow Porfirio Díaz in a decade-long peasant-and-elite revolt — produces the 1917 Constitution.",
    significance:
      "First social revolution of the 20th century; land reform, anti-clericalism, and labor rights enshrined in Latin America's most progressive constitution of its day.",
    facts: [
      "~1 million dead; ~10% of Mexicans fled north to the US.",
      "Zapata's slogan: 'Tierra y Libertad.'",
      "1917 Constitution restored ejido communal land tenure.",
    ],
    highlight: { countryCodes: ["MEX"], color: "#22c55e", focus: { lat: 23, lng: -102, altitude: 1.8 } },
  },
  {
    id: "versailles-1919",
    year: 1919,
    periodId: "p4",
    regionIds: ["wnerope", "ottoman"],
    title: "Treaty of Versailles",
    description:
      "Allied 'Big Four' impose harsh terms on Germany — war guilt clause, 132 billion gold marks reparations, demilitarization, lost colonies and territory.",
    significance:
      "Founds the League of Nations and the mandate system; punitive economics fuel German revanchism that Hitler exploits in the 1930s.",
    facts: [
      "Wilson's 14 Points largely abandoned at the negotiating table.",
      "US Senate rejected the treaty — US never joined the League.",
      "Mandate system carved up the Ottoman Middle East (Britain → Iraq, Palestine; France → Syria, Lebanon).",
    ],
    highlight: {
      countryCodes: ["FRA", "GBR", "USA", "ITA", "DEU", "AUT", "HUN", "POL", "TUR", "SYR", "IRQ", "ISR", "JOR", "LBN"],
      focus: { lat: 48, lng: 15, altitude: 2.3 },
    },
  },
  {
    id: "holocaust",
    year: 1941,
    endYear: 1945,
    periodId: "p4",
    regionIds: ["wnerope", "russia"],
    title: "The Holocaust",
    description:
      "Nazi Germany and collaborators systematically murder six million Jews and millions of Roma, Slavs, disabled, and political prisoners.",
    significance:
      "Defining genocide of the 20th century; drives the founding of the State of Israel (1948), the Genocide Convention (1948), and the Universal Declaration of Human Rights.",
    facts: [
      "Wannsee Conference (Jan 1942) coordinated the 'Final Solution.'",
      "Auschwitz-Birkenau alone killed ~1.1 million.",
      "Einsatzgruppen mass shootings on the Eastern Front killed ~1.5 million Jews.",
    ],
    highlight: {
      countryCodes: ["DEU", "POL", "AUT", "CZE", "HUN", "ROU", "BLR", "UKR", "LTU", "LVA", "EST", "FRA", "NLD", "BEL"],
      focus: { lat: 51, lng: 18, altitude: 2.0 },
    },
  },
  {
    id: "atomic-bombs",
    year: 1945,
    periodId: "p4",
    regionIds: ["japan", "northam"],
    title: "Atomic bombs on Hiroshima and Nagasaki",
    description:
      "US drops 'Little Boy' on Hiroshima (Aug 6) and 'Fat Man' on Nagasaki (Aug 9); Japan surrenders Aug 15.",
    significance:
      "First and only military use of nuclear weapons. Opens the nuclear age and reshapes Cold War strategy around mutually assured destruction.",
    facts: [
      "Combined immediate deaths ~110,000; long-term radiation deaths ~120,000+.",
      "Manhattan Project cost ~$2 billion (1945 dollars), employed 130,000 people.",
      "USSR detonates its first atomic bomb in 1949 — race begins.",
    ],
    highlight: { countryCodes: ["JPN", "USA"], focus: { lat: 33.6, lng: 132.8, altitude: 1.6 } },
  },

  // ---------- Unit 8 (p4) — Cold War ----------
  {
    id: "berlin-airlift",
    year: 1948,
    endYear: 1949,
    periodId: "p4",
    regionIds: ["wnerope", "russia", "northam"],
    title: "Berlin Airlift",
    description:
      "Soviet blockade of West Berlin (Jun 1948) is broken by 11 months of US/UK/French cargo flights — ~2.3 million tons of supplies.",
    significance:
      "First major Cold War confrontation; spurs the creation of NATO (Apr 1949), the Federal Republic of Germany (May 1949), and East Germany (Oct 1949).",
    facts: [
      "Up to 1,500 flights/day at the peak.",
      "'Operation Vittles' — 'Candy Bomber' Gail Halvorsen dropped sweets to children.",
      "Stalin lifted the blockade May 1949 without concessions.",
    ],
    highlight: {
      countryCodes: ["DEU"],
      color: "#3b82f6",
      focus: { lat: 51, lng: 11, altitude: 1.4 },
      pins: [
        { lat: 50.04, lng: 8.56, label: "Frankfurt (Rhein-Main)", color: "#3b82f6" },
        { lat: 52.40, lng: 9.28, label: "Wunstorf", color: "#3b82f6" },
        { lat: 52.46, lng: 13.40, label: "Tempelhof, Berlin", color: "#3b82f6" },
        { lat: 52.55, lng: 13.29, label: "Tegel, Berlin", color: "#3b82f6" },
      ],
      path: [
        { lat: 50.04, lng: 8.56 },
        { lat: 52.46, lng: 13.40 },
        { lat: 52.40, lng: 9.28 },
        { lat: 52.55, lng: 13.29 },
      ],
    },
  },
  {
    id: "bandung",
    year: 1955,
    periodId: "p4",
    regionIds: ["seasia", "india", "china"],
    title: "Bandung Conference",
    description:
      "Sukarno hosts 29 newly independent African and Asian states in Bandung, Indonesia — Nehru, Zhou Enlai, Nasser, and Sukarno articulate Third World solidarity and non-alignment.",
    significance:
      "Direct precursor to the 1961 Non-Aligned Movement; first major postcolonial diplomatic gathering outside Western institutions.",
    facts: [
      "Ten Principles of peaceful coexistence and decolonization.",
      "Brought together leaders from Ghana, Egypt, Yugoslavia, India, Indonesia, China.",
      "Set the stage for the New International Economic Order push (1970s).",
    ],
    highlight: {
      countryCodes: ["IDN", "IND", "CHN", "EGY", "GHA", "VNM", "PAK", "IRN", "JPN", "PHL"],
      focus: { lat: 5, lng: 90, altitude: 2.5 },
    },
  },
  {
    id: "cultural-rev",
    year: 1966,
    endYear: 1976,
    periodId: "p4",
    regionIds: ["china"],
    title: "Mao's Cultural Revolution",
    description:
      "Mao mobilizes Red Guards to purge 'capitalist roaders' and the 'Four Olds' — leads to mass struggle sessions, school shutdowns, and persecution of intellectuals.",
    significance:
      "Tens of millions sent down to the countryside; China's economic and cultural development paralyzed for a decade. Ends only with Mao's death (1976) and Deng's rise.",
    facts: [
      "Estimated 1–2 million deaths; tens of millions persecuted.",
      "Little Red Book (Mao's quotations) printed in over a billion copies.",
      "Targeted Liu Shaoqi, Deng Xiaoping, and the broader CCP elite.",
    ],
    highlight: { countryCodes: ["CHN"], focus: { lat: 35, lng: 105, altitude: 1.8 } },
  },
  {
    id: "iranian-rev",
    year: 1979,
    periodId: "p4",
    regionIds: ["persia"],
    title: "Iranian Revolution",
    description:
      "Mass strikes and protests overthrow the US-backed Shah Mohammad Reza Pahlavi; Ayatollah Khomeini returns from exile to found the Islamic Republic.",
    significance:
      "First successful 20th-century revolution led by Islamists; reshapes Middle East politics and triggers the Iran–Iraq War (1980–88) and the US hostage crisis.",
    facts: [
      "US embassy hostage crisis: 52 Americans held 444 days.",
      "1979 also: Soviet invasion of Afghanistan, Saudi Grand Mosque seizure.",
      "Created velayat-e faqih — clerical guardianship of the state.",
    ],
    highlight: { countryCodes: ["IRN", "USA", "IRQ"], focus: { lat: 32, lng: 53, altitude: 1.7 } },
  },
  {
    id: "tiananmen",
    year: 1989,
    periodId: "p4",
    regionIds: ["china"],
    title: "Tiananmen Square protests",
    description:
      "Student-led democracy protests fill Beijing's Tiananmen Square for seven weeks; PLA tanks crush the movement on June 4.",
    significance:
      "Deng's CCP shows it will not follow Gorbachev's path. Reform continues economically; political liberalization is foreclosed for a generation.",
    facts: [
      "Death toll estimates range from hundreds to several thousand.",
      "Tank Man photo became one of the most iconic images of the 20th century.",
      "Topic remains heavily censored within the PRC.",
    ],
    highlight: { countryCodes: ["CHN"], focus: { lat: 39.9, lng: 116.4, altitude: 1.5 } },
  },
  {
    id: "apartheid-end",
    year: 1990,
    endYear: 1994,
    periodId: "p4",
    regionIds: ["eafrica"],
    title: "End of apartheid in South Africa",
    description:
      "F. W. de Klerk frees Mandela (1990), legalizes the ANC, and negotiates a transition; Mandela is elected president in 1994 in South Africa's first multiracial vote.",
    significance:
      "Closes the last formal white-minority regime in Africa; Truth and Reconciliation Commission becomes a global model for transitional justice.",
    facts: [
      "Mandela imprisoned 27 years (1962–1990).",
      "International boycott + Cold War's end made apartheid unsustainable.",
      "Mandela and de Klerk shared the 1993 Nobel Peace Prize.",
    ],
    highlight: { countryCodes: ["ZAF", "NAM", "ZWE", "BWA"], focus: { lat: -26, lng: 25, altitude: 2.0 } },
  },

  // ---------- Unit 9 (p4) — globalization ----------
  {
    id: "eu-1993",
    year: 1993,
    periodId: "p4",
    regionIds: ["wnerope"],
    title: "European Union founded (Maastricht)",
    description:
      "The Maastricht Treaty turns the European Community into the European Union — single market, common foreign policy, and the path to the euro (introduced 1999/2002).",
    significance:
      "Largest peacetime political-economic integration in history. Eastward enlargement (2004, 2007) absorbs ex-Warsaw Pact states.",
    facts: [
      "12 founding members; 27 today (after Brexit, 2020).",
      "Schengen Area abolishes most internal border checks.",
      "Euro replaces 12 national currencies in 2002.",
    ],
    highlight: {
      countryCodes: ["DEU", "FRA", "ITA", "ESP", "PRT", "NLD", "BEL", "LUX", "IRL", "DNK", "GRC", "AUT", "SWE", "FIN", "POL", "CZE", "SVK", "HUN", "ROU", "BGR", "HRV", "SVN", "EST", "LVA", "LTU", "MLT", "CYP"],
      focus: { lat: 50, lng: 10, altitude: 2.2 },
    },
  },
  {
    id: "rwandan-genocide",
    year: 1994,
    periodId: "p4",
    regionIds: ["eafrica"],
    title: "Rwandan Genocide",
    description:
      "Hutu extremists massacre ~800,000 Tutsis and moderate Hutus in 100 days following the assassination of President Habyarimana.",
    significance:
      "Worst genocide since the Holocaust — international community (UN, US, France) failed to intervene. Drives later 'Responsibility to Protect' doctrine (2005).",
    facts: [
      "Radio RTLM broadcast incitement and lists of victims.",
      "RPF under Paul Kagame ended the genocide militarily.",
      "Triggered the Second Congo War (1998–2003), Africa's deadliest.",
    ],
    highlight: { countryCodes: ["RWA", "BDI", "COD", "UGA", "TZA"], focus: { lat: -2, lng: 30, altitude: 1.7 } },
  },
  {
    id: "arab-spring",
    year: 2010,
    endYear: 2012,
    periodId: "p4",
    regionIds: ["egypt", "ottoman"],
    title: "Arab Spring",
    description:
      "Mohamed Bouazizi's self-immolation (Tunisia, Dec 2010) sparks pro-democracy uprisings across Tunisia, Egypt, Libya, Syria, Yemen, Bahrain.",
    significance:
      "Fall of Ben Ali, Mubarak, Gaddafi, and Saleh; Syria descends into civil war that draws in Russia, Iran, the US, and ISIS. Decade of regional upheaval.",
    facts: [
      "Tunisia is the only durable democratic transition (until 2021).",
      "Egypt: Mubarak out 2011 → Morsi elected → Sisi coup 2013.",
      "Syria's war has killed 500,000+ and displaced 13+ million.",
    ],
    highlight: {
      countryCodes: ["TUN", "EGY", "LBY", "SYR", "YEM", "BHR", "JOR", "MAR"],
      focus: { lat: 28, lng: 25, altitude: 2.3 },
    },
  },
  {
    id: "paris-agreement",
    year: 2015,
    periodId: "p4",
    regionIds: ["wnerope", "northam", "china", "india"],
    title: "Paris Climate Agreement",
    description:
      "196 parties to the UNFCCC commit to limiting global warming to well below 2°C (target 1.5°C) through nationally determined contributions.",
    significance:
      "First universal climate accord; shifts climate policy from top-down targets to bottom-up pledges. Implementation (and US withdrawal/return) remains contested.",
    facts: [
      "Replaces the Kyoto Protocol (1997).",
      "US withdrew under Trump (2020), rejoined under Biden (2021).",
      "Built on top of decades of IPCC scientific assessment.",
    ],
    highlight: {
      countryCodes: ["FRA", "USA", "CHN", "IND", "DEU", "BRA", "RUS", "JPN", "GBR"],
      focus: { lat: 20, lng: 0, altitude: 2.8 },
    },
  },
];

export function eventsForPeriod(periodId: string): HistoricalEvent[] {
  return events
    .filter((e) => e.periodId === periodId)
    .sort((a, b) => a.year - b.year);
}

export function eventsForRegionAndPeriod(regionId: string, periodId: string): HistoricalEvent[] {
  return events
    .filter((e) => e.periodId === periodId && e.regionIds.includes(regionId))
    .sort((a, b) => a.year - b.year);
}

export const allEventsSorted = [...events].sort((a, b) => a.year - b.year);
