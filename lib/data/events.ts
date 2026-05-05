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
      countryCodes: ["MLI", "MRT", "SEN", "GMB", "BFA", "NER", "DZA", "LBY", "EGY", "SAU"],
      focus: { lat: 22, lng: 0, altitude: 2.1 },
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
    highlight: { routeId: "indian-ocean", focus: { lat: 5, lng: 80, altitude: 2.2 } },
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
    highlight: { countryCodes: ["ESP","CUB","HTI","DOM","BHS","JAM"], focus: { lat: 22, lng: -50, altitude: 1.8 } },
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
      "Thirteen British colonies developed along the Atlantic seaboard from Jamestown (1607) to Georgia (1733), governed under royal, proprietary, and charter systems.",
    significance:
      "Their resistance to British mercantilism and parliamentary taxation produced the first successful colonial revolt against a European empire (1775–83).",
    facts: [
      "New England (4): Massachusetts (Plymouth 1620), New Hampshire, Rhode Island, Connecticut — Puritan small farms, shipbuilding, fishing, rum.",
      "Middle Colonies (4): New York (Dutch 1624 → English 1664), New Jersey, Pennsylvania (Quaker 1682), Delaware — diverse migrants, the 'breadbasket'.",
      "Southern Colonies (5): Virginia (Jamestown 1607), Maryland (1634 Catholic refuge), N. Carolina, S. Carolina, Georgia (1733) — tobacco, rice, indigo plantations using enslaved Africans.",
      "Three governance types: royal (king-appointed governor), proprietary (granted to a person/family), and charter (self-government).",
      "British mercantilism + Navigation Acts (1651–) forced trade through England.",
      "Salutary neglect ended after the Seven Years' War debt → Stamp Act 1765, Townshend 1767, Tea Act 1773 → Boston Tea Party → Revolution.",
      "By 1775 ~2.5 million colonists; ~20% were enslaved Africans, mostly in the South.",
    ],
    highlight: {
      countryCodes: ["USA"],
      color: "#3b82f6",
      focus: { lat: 38, lng: -76, altitude: 1.5 },
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
      "After defeating Spain in 1898, the US acquired the Philippines, Puerto Rico, Guam, plus the briefly occupied Cuba, while Hawaii was annexed the same year.",
    significance:
      "The US transitions from continental power to overseas empire — a turning point of late-19th-century imperialism.",
    facts: [
      "Spanish-American War (1898) — John Hay's 'splendid little war'.",
      "Treaty of Paris 1898 → US gets Philippines, Puerto Rico, Guam; Cuba briefly under occupation.",
      "Philippine-American War (1899–1902): ~20,000 Filipino fighters and 200,000+ civilians dead.",
      "Hawaii annexed 1898 (planters had toppled Queen Liliʻuokalani 1893).",
      "Puerto Rico + Guam: still US territories today.",
      "Philippines independent 1946; Cuba 1902 (with US oversight via Platt Amendment).",
    ],
    highlight: {
      splits: [
        { label: "United States + PR", color: "#3b82f6", countryCodes: ["USA", "PRI"] },
        { label: "Acquired 1898 (Philippines, Cuba)", color: "#facc15", countryCodes: ["PHL", "CUB"] },
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
      "North invaded south on June 25, 1950 with Soviet approval.",
      "MacArthur's Inchon landing reversed the tide; he was fired for wanting to invade China.",
      "Chinese 'volunteers' (300,000+) entered after UN forces neared the Yalu.",
      "Armistice (1953) — no peace treaty to this day; DMZ at the 38th parallel.",
      "~3 million dead, mostly Korean civilians.",
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
      "Africa: Ghana 1957, then 17 countries in 1960 ('Year of Africa').",
      "Algeria's 1954–62 war of independence killed ~500k.",
      "Portuguese Africa held out until 1975 (Angola, Mozambique).",
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
      "Founded by Tito (Yugoslavia), Nehru (India), Nasser (Egypt), Sukarno (Indonesia), Nkrumah (Ghana).",
      "Bandung Conference (1955) preceded it.",
      "Now ~120 members — second-largest UN bloc.",
      "Did not always mean neutrality — many leaned to one side or the other.",
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
      "NATO founded 1949 (12 founding members); Warsaw Pact founded 1955.",
      "Sino-Soviet split (~1960) put PRC outside the Soviet bloc.",
      "Cuba (1959), Vietnam, North Korea, Angola, Mozambique aligned with Moscow.",
      "South Korea, Japan, Philippines, Taiwan, Iran (pre-1979), Saudi Arabia leaned US.",
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
      "Operation Enduring Freedom: Afghanistan invasion Oct 2001.",
      "Iraq War 2003 — premised on (false) WMD claims.",
      "US withdrew from Afghanistan in 2021 — Taliban returned to power.",
    ],
    highlight: { countryCodes: ["USA","AFG","IRQ","PAK","SAU"], focus: { lat: 30, lng: 50, altitude: 2.2 } },
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
