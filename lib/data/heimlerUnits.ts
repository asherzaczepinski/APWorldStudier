// Heimler's History — AP World Modern unit review playlists.
// Each topic = one video in the unit's playlist (one per non-blank line in unit{N}.txt).
//
// Per-topic entity IDs (empireIds, poiIds, etc.) describe what Heimler mentions
// in that specific video. The TopicView component filters the globe down to
// JUST these — nothing else shows.

/**
 * A "cool thing" Heimler highlights in the video — a technology, crop, idea,
 * person, structure, etc. Lives in the topic side panel; only appears on the
 * globe when the user clicks it (or when `pinned: true`).
 */
export type TopicFeature = {
  id: string;
  label: string;
  /** Emoji shown in the side panel and (when activated) on the globe. */
  emoji: string;
  category:
    | "tech"
    | "crop"
    | "idea"
    | "policy"
    | "person"
    | "trade"
    | "structure"
    | "disease"
    | "movement";
  /** When set, a marker is placed on the globe. */
  lat?: number;
  lng?: number;
  /**
   * Optional polyline traced on the globe — for things that span across
   * geography (Grand Canal, Inca road network, Trans-Siberian Railway, etc.).
   * Drawn as a line from waypoint to waypoint.
   */
  path?: { lat: number; lng: number }[];
  /** Click to read this in the popover. */
  explanation: string;
  /**
   * If true, the marker is always visible on the globe (use for true
   * geographical features — regions, structures, places). Otherwise the
   * feature only appears once the user clicks it in the side panel.
   */
  pinned?: boolean;
  /** Year (or start year for date ranges) for the unit timeline at the bottom. */
  year?: number;
  /** Optional end year — feature spans a date range (war, dynasty, etc.). */
  endYear?: number;
};

export type HeimlerTopic = {
  code: string;
  title: string;
  summary: string;
  videoUrl: string;
  /** Year the globe scrubs to when this topic opens. */
  year: number;
  /** IDs from /lib/data/empires.ts to highlight on the map. */
  empireIds?: string[];
  /** IDs from /lib/data/tradeRoutes.ts to draw. */
  routeIds?: string[];
  /** IDs from /lib/data/events.ts to pin. */
  eventIds?: string[];
  /** IDs from /lib/data/pois.ts to show as cities/places. */
  poiIds?: string[];
  /** IDs from /lib/data/regions.ts (for context only — not currently rendered). */
  regionIds?: string[];
  /**
   * Free-form "cool stuff" Heimler mentions that doesn't map cleanly to a globe
   * entity — e.g. "Champa rice", "civil service exam", "casta system",
   * "scientific racism". Shown as chips in the topic side panel.
   */
  mentions?: string[];
  /**
   * Featured "cool stuff" — gets emoji markers on the globe and a richer card
   * in the topic side panel.
   */
  features?: TopicFeature[];
  /**
   * If true, treat this topic as the unit's full review — TopicView merges in
   * every entity / mention / feature from sibling topics in the same unit so
   * the user sees all of unit X at once.
   */
  isUnitSummary?: boolean;
  /**
   * If true, every country on the globe gets a soft highlight in the unit's
   * accent color. Used for globalization-style topics where the whole world is
   * the subject. Topic-specific empires still paint over with full color.
   */
  highlightAllCountries?: boolean;
};

export type HeimlerUnit = {
  unitNumber: number;
  title: string;
  subtitle: string;
  yearStart: number;
  yearEnd: number;
  centerYear: number;
  videoId: string;
  videoUrl: string;
  playlistId: string;
  playlistUrl: string;
  accent: string;
  topics: HeimlerTopic[];
};

function topicVideoUrl(playlistId: string, firstVideoId: string, index: number): string {
  return `https://www.youtube.com/watch?v=${firstVideoId}&list=${playlistId}&index=${index}`;
}

type RawTopic = Omit<HeimlerTopic, "videoUrl">;
type RawUnit = Omit<HeimlerUnit, "videoUrl" | "playlistUrl" | "topics"> & {
  topics: RawTopic[];
};

const rawUnits: RawUnit[] = [
  {
    unitNumber: 1,
    title: "The Global Tapestry",
    subtitle: "States and societies before the great convergence",
    yearStart: 1200,
    yearEnd: 1450,
    centerYear: 1325,
    videoId: "HfIWZhXt7fY",
    playlistId: "PLEHRHjICEfDUKsY0KFUEvmFCs8aCj0RO5",
    accent: "#f59e0b",
    topics: [
      {
        code: "1.1",
        title: "Developments in East Asia",
        summary:
          "Song China stays on top through a Confucian revival, the imperial civil service exam, and economic muscle (Champa rice, Grand Canal, paper money). Tributary neighbors Korea, Japan, and Vietnam each adapt Chinese ideas.",
        year: 1250,
        empireIds: ["song", "goryeo", "kamakura-japan", "dai-viet"],
        poiIds: ["beijing", "nanjing"],
        regionIds: ["china", "japan", "seasia"],
        features: [
          {
            id: "grand-canal",
            label: "Grand Canal",
            emoji: "🛶",
            category: "structure",
            lat: 33.6,
            lng: 119.0,
            pinned: true,
            // Beijing → Tianjin → Linqing → Jining → Xuzhou → Huai'an → Yangzhou
            // → Zhenjiang → Suzhou → Hangzhou. ~1,100 miles.
            path: [
              { lat: 39.9, lng: 116.4 },
              { lat: 39.13, lng: 117.2 },
              { lat: 36.84, lng: 116.0 },
              { lat: 35.42, lng: 116.6 },
              { lat: 34.27, lng: 117.18 },
              { lat: 33.6, lng: 119.0 },
              { lat: 32.39, lng: 119.41 },
              { lat: 32.21, lng: 119.45 },
              { lat: 31.3, lng: 120.6 },
              { lat: 30.27, lng: 120.16 },
            ],
            explanation:
              "1,100-mile waterway linking the Yellow River and the Yangzi. Originally Sui-era; the Yuan extended it north to Beijing. It moved tribute grain, troops, and merchants — the spinal cord of imperial China's economy.",
          },
          {
            id: "champa-rice",
            label: "Champa rice",
            emoji: "🌾",
            category: "crop",
            lat: 16.0,
            lng: 108.0,
            explanation:
              "Fast-ripening, drought-resistant strain imported from the Champa kingdom in modern Vietnam. Two harvests a year — sometimes three. Fueled a Song population boom from ~60M to over 100M.",
          },
          {
            id: "paper-money",
            label: "Paper money",
            emoji: "💴",
            category: "tech",
            lat: 30.27,
            lng: 120.16,
            explanation:
              "Issued in Song-era Hangzhou and Sichuan as 'flying cash' — paper notes redeemable for coin elsewhere. World's first true paper currency. Made long-distance trade vastly easier.",
          },
          {
            id: "civil-service-exam",
            label: "Civil service exam",
            emoji: "📜",
            category: "policy",
            lat: 34.78,
            lng: 113.65,
            explanation:
              "Standardized test on Confucian classics held at Kaifeng (Northern Song capital). Open to most men in theory; in practice favored the wealthy. Created a shared scholar-official elite.",
          },
          {
            id: "gunpowder-song",
            label: "Gunpowder weapons",
            emoji: "💥",
            category: "tech",
            lat: 35.0,
            lng: 113.0,
            explanation:
              "Tang-era alchemists' accident, weaponized by the Song: fire arrows, bombs, early cannons. Diffused west via the Mongols and changed warfare globally.",
          },
          {
            id: "magnetic-compass",
            label: "Magnetic compass",
            emoji: "🧭",
            category: "tech",
            lat: 30.5,
            lng: 114.3,
            explanation:
              "Song navigators floated a magnetized needle in water. Made open-water sailing reliable; diffused to Arab and European sailors via Indian Ocean trade.",
          },
          {
            id: "porcelain-jingdezhen",
            label: "Porcelain (Jingdezhen)",
            emoji: "🏺",
            category: "trade",
            lat: 29.27,
            lng: 117.18,
            explanation:
              "Hard, white, translucent ceramic perfected at the Jingdezhen kilns. So associated with China that 'china' became the English word for the dish itself. Major Indian Ocean export.",
          },
          {
            id: "confucian-revival",
            label: "Confucianism revival",
            emoji: "📚",
            category: "idea",
            lat: 35.6,
            lng: 117.0,
            explanation:
              "Song-era Neo-Confucianism (Zhu Xi) synthesized Confucian ethics with Buddhist and Daoist metaphysics. Hierarchy, filial piety, scholar-official as ideal. Remained China's official state philosophy until 1905.",
          },
          {
            id: "foot-binding",
            label: "Foot binding",
            emoji: "👣",
            category: "policy",
            lat: 32.0,
            lng: 116.0,
            explanation:
              "Practice of breaking and binding young girls' feet to keep them small. Began in elite Song households as a status marker; signaled that a family didn't need its women to walk or work.",
          },
          {
            id: "tributary-system",
            label: "Tributary system",
            emoji: "🎁",
            category: "policy",
            lat: 39.9,
            lng: 116.4,
            explanation:
              "China's diplomatic protocol: surrounding states sent envoys + tribute and acknowledged Chinese cultural superiority; in exchange they got trade access and titles. Not literal control — symbolic respect.",
          },
          {
            id: "samurai",
            label: "Samurai / shogun",
            emoji: "🗡️",
            category: "policy",
            lat: 35.45,
            lng: 139.65,
            explanation:
              "Japan's military class. The shogun ruled in fact while the emperor reigned in name. Daimyo were regional lords; samurai their warrior retainers, bound by the bushido code.",
          },
        ],
        mentions: [
          "Song Dynasty", "Confucianism revival", "civil service exam", "filial piety",
          "foot binding", "Champa rice", "Grand Canal", "paper money", "woodblock printing",
          "gunpowder", "magnetic compass", "tributary system", "Korea (Goryeo)",
          "Heian Japan", "samurai / shogun / daimyo", "bushido", "Vietnam (Dai Viet)",
          "Buddhism", "Neo-Confucianism", "porcelain",
        ],
      },
      {
        code: "1.2",
        title: "Developments in Dar al-Islam",
        summary:
          "Abbasid power fragments and is replaced by the Seljuk Turks, Mamluks, and Delhi Sultanate. Islamic scholarship pushes math, medicine, and translation forward at the House of Wisdom in Baghdad.",
        year: 1300,
        empireIds: ["delhi", "mamluk"],
        eventIds: ["delhi-sultanate"],
        poiIds: ["baghdad", "cairo", "delhi", "mecca", "medina", "al-azhar"],
        regionIds: ["persia", "ottoman", "egypt"],
        features: [
          { id: "baghdad-1258", label: "Sack of Baghdad", emoji: "💥", category: "movement", lat: 33.31, lng: 44.36, year: 1258, pinned: true, explanation: "Mongols under Hulagu Khan sack Baghdad and execute the last Abbasid caliph. End of the Islamic Golden Age in its Baghdad form." },
          { id: "ain-jalut", label: "Battle of Ain Jalut", emoji: "💥", category: "movement", lat: 32.55, lng: 35.36, year: 1260, pinned: true, explanation: "1260 — Mamluks of Egypt halt the Mongol advance. Only force ever to stop the Mongols cold." },
        ],
        mentions: [
          "Abbasid Caliphate", "Seljuk Turks", "Mamluk Sultanate", "Delhi Sultanate",
          "House of Wisdom", "Islamic Golden Age", "Sufism", "sharia",
          "algebra (al-Khwarizmi)", "Avicenna / Ibn Sina", "Averroes / Ibn Rushd",
          "Ibn Battuta", "trans-Saharan trade", "Sunni vs Shia", "Quranic schools",
        ],
      },
      {
        code: "1.3",
        title: "Developments in South and Southeast Asia",
        summary:
          "The Delhi Sultanate spreads Islam across South Asia while Hindu Vijayanagara pushes back. In Southeast Asia the Khmer, Srivijaya, and Majapahit blend Hindu, Buddhist, and Islamic influence.",
        year: 1350,
        empireIds: ["delhi", "vijayanagara", "khmer", "majapahit"],
        eventIds: ["delhi-sultanate"],
        poiIds: ["delhi", "malacca", "varanasi", "nalanda"],
        regionIds: ["india", "seasia"],
        mentions: [
          "Delhi Sultanate", "Vijayanagara Empire", "Rajput kingdoms", "bhakti movement",
          "Hinduism", "Theravada Buddhism", "Mahayana Buddhism", "Khmer Empire",
          "Angkor Wat", "Srivijaya", "Majapahit", "Sukhothai", "Sinhala (Sri Lanka)",
          "qutub Minar", "Sultan of Delhi", "spread of Islam to SE Asia",
        ],
      },
      {
        code: "1.4",
        title: "State Building in the Americas",
        summary:
          "The Aztecs run a tribute empire from Tenochtitlán, the Inca centralize via the mit'a labor system and Andean roads, and the Mississippian culture builds Cahokia. Maya city-states persist further south.",
        year: 1400,
        empireIds: ["aztec", "inca", "maya", "mississippian"],
        poiIds: ["tenochtitlan", "cuzco", "machu-picchu"],
        regionIds: ["mesoamerica", "andes", "northam"],
        mentions: [
          "Aztec Triple Alliance", "Tenochtitlán", "Lake Texcoco", "chinampas",
          "tribute system", "Huitzilopochtli", "human sacrifice", "Inca Empire",
          "mit'a labor", "Andean roads", "quipu", "terrace farming", "Pachacuti",
          "Maya city-states", "Mississippian culture", "Cahokia", "mound-builders",
          "Mexica", "Triple Alliance", "Sapa Inca",
        ],
      },
      {
        code: "1.5",
        title: "State Building in Africa",
        summary:
          "Mali grows rich on trans-Saharan gold under Mansa Musa, the Hausa Kingdoms organize West Africa, Great Zimbabwe controls the southern interior, Ethiopia stays Christian, and Swahili city-states plug into Indian Ocean trade.",
        year: 1325,
        empireIds: ["mali", "mamluk", "ethiopia-solomonic"],
        eventIds: ["mansa-musa"],
        poiIds: ["timbuktu", "gao", "great-zimbabwe", "kilwa", "mombasa", "sofala", "cairo"],
        regionIds: ["wafrica", "eafrica", "egypt"],
        mentions: [
          "Mali Empire", "Mansa Musa", "hajj of 1324", "trans-Saharan gold–salt trade",
          "Timbuktu", "Sankoré madrasa", "Hausa Kingdoms", "Songhai Empire",
          "Great Zimbabwe", "stone enclosures", "Ethiopia (Aksum lineage)", "Lalibela churches",
          "Swahili coast", "Kilwa", "Sofala", "Mombasa", "stone houses",
          "Swahili language (Bantu + Arabic)", "griots / oral tradition",
        ],
      },
      {
        code: "1.6",
        title: "Developments in Europe",
        summary:
          "Decentralized feudalism and the manorial economy organize politics and labor. The Catholic Church is the unifying institution, but the Crusades, Black Death, and Hundred Years' War crack the old order.",
        year: 1350,
        empireIds: ["hre", "byzantine"],
        eventIds: ["black-death"],
        poiIds: ["rome", "vatican", "paris", "venice", "genoa", "florence", "bologna", "oxford"],
        features: [
          { id: "crusades", label: "Crusades", emoji: "💥", category: "movement", lat: 31.78, lng: 35.22, year: 1095, endYear: 1291, pinned: true, explanation: "1095–1291 — Catholic Europe's wars to retake the Holy Land from Muslim rulers. Eight major Crusades; only the First captured Jerusalem (1099)." },
          { id: "reconquista", label: "Reconquista", emoji: "💥", category: "movement", lat: 40.0, lng: -3.7, year: 1200, endYear: 1492, pinned: true, explanation: "Christian re-conquest of Iberia from Muslim rule. Granada falls 1492 — same year as Columbus." },
          { id: "100-years-war", label: "Hundred Years' War", emoji: "💥", category: "movement", lat: 47.0, lng: 2.5, year: 1337, endYear: 1453, pinned: true, explanation: "England vs. France over the French crown. Joan of Arc, longbows, Black Death disruption. Helped consolidate national monarchies." },
          { id: "bd-feature", label: "Black Death", emoji: "💀", category: "disease", lat: 45.0, lng: 12.0, year: 1347, endYear: 1351, pinned: true, explanation: "Bubonic plague pandemic. Killed 30–50% of Europeans. Reached Europe via Crimean trade in 1347; spread along Mediterranean shipping lanes." },
        ],
        regionIds: ["italy", "wnerope", "iberia"],
        mentions: [
          "feudalism", "manorialism", "three estates", "serfdom", "vassals", "fiefs",
          "Catholic Church", "Pope", "tithes", "Crusades", "Magna Carta",
          "Hundred Years' War", "Black Death", "Reconquista",
          "Holy Roman Empire", "Hanseatic League", "Italian city-states",
          "Renaissance (proto)", "Marco Polo", "scholasticism", "Aquinas",
        ],
      },
      {
        code: "1.7",
        title: "Full Unit 1 Review",
        summary:
          "Heimler's full cram-session video for Unit 1 — every state, every belief system, every comparison line you need before the test.",
        isUnitSummary: true,
        highlightAllCountries: true,
        year: 1325,
        empireIds: ["delhi", "mali", "aztec", "inca", "maya"],
        eventIds: ["delhi-sultanate", "mansa-musa", "black-death"],
        poiIds: [
          "beijing", "delhi", "baghdad", "cairo", "tenochtitlan", "cuzco", "timbuktu",
          "great-zimbabwe", "kilwa", "rome", "venice", "paris",
        ],
        regionIds: ["china", "india", "seasia", "persia", "ottoman", "wafrica", "eafrica", "wnerope", "italy", "mesoamerica", "andes"],
        mentions: [
          "Song China", "Confucianism", "Champa rice", "civil service exam",
          "Abbasid Caliphate", "Delhi Sultanate", "Mali", "Mansa Musa",
          "Aztec Triple Alliance", "Inca", "Great Zimbabwe", "Swahili coast",
          "feudalism", "Catholic Church", "Black Death", "Crusades",
        ],
      },
    ],
  },

  {
    unitNumber: 2,
    title: "Networks of Exchange",
    subtitle: "How the Afro-Eurasian world wired itself together",
    yearStart: 1200,
    yearEnd: 1450,
    centerYear: 1325,
    videoId: "daiQ6aChKfk",
    playlistId: "PLEHRHjICEfDVlP4J7Zn1_LFTm_-8bkxpN",
    accent: "#10b981",
    topics: [
      {
        code: "2.1",
        title: "The Silk Roads",
        summary:
          "Caravan routes carry luxury goods across Eurasia. Caravanserai, paper money / flying cash, and bills of exchange make long-distance trade safer and bigger.",
        year: 1300,
        routeIds: ["silk-road"],
        poiIds: ["beijing", "kashgar", "samarkand", "bukhara", "dunhuang", "tabriz", "constantinople", "merv", "balkh", "khotan", "aleppo", "damascus"],
        mentions: [
          "silk", "porcelain", "tea", "spices", "horses", "gunpowder", "paper",
          "caravanserai", "yams", "flying cash (paper money)", "bills of exchange",
          "Chinese banking houses", "money economies", "Hanseatic League",
          "luxury goods", "Marco Polo", "Ibn Battuta", "Buddhist monasteries on the road",
          "spread of Buddhism + Islam", "diasporic merchant communities",
        ],
      },
      {
        code: "2.2",
        title: "The Mongol Empire and the Modern World",
        summary:
          "Genghis and his successors build the largest contiguous land empire ever. Pax Mongolica makes the Silk Roads safer, gunpowder and printing move west, and Marco Polo and Ibn Battuta travel across it.",
        year: 1280,
        empireIds: ["mongol", "yuan"],
        routeIds: ["silk-road"],
        eventIds: ["mongol-rise"],
        poiIds: ["beijing", "samarkand", "baghdad", "merv", "tabriz", "venice"],
        mentions: [
          "Genghis Khan / Temüjin", "kurultai", "Pax Mongolica", "Mongol cavalry",
          "composite bow", "siege weapons", "Yam relay system", "yurts",
          "Yuan Dynasty (Kublai Khan)", "Ilkhanate", "Chagatai Khanate", "Golden Horde",
          "sack of Baghdad 1258", "destruction of Merv", "Marco Polo at Kublai's court",
          "transfer of gunpowder + printing west", "religious tolerance",
          "Black Death along Mongol routes", "Mongol postal system",
        ],
      },
      {
        code: "2.3",
        title: "Exchange in the Indian Ocean",
        summary:
          "Predictable monsoons plus the dhow, lateen sail, magnetic compass, and astrolabe knit together East Africa, Arabia, India, and Southeast Asia. Swahili city-states, Malacca, and Zheng He all live here.",
        year: 1410,
        routeIds: ["indian-ocean"],
        eventIds: ["zheng-he"],
        poiIds: ["calicut", "malacca", "hormuz", "aden", "kilwa", "mombasa", "sofala", "beijing"],
        mentions: [
          "monsoon winds", "dhow ships", "junks", "lateen sail", "magnetic compass",
          "astrolabe", "Swahili city-states", "Kilwa", "stonetown", "spices",
          "cotton textiles", "ivory", "gold (from Great Zimbabwe)", "porcelain",
          "Malacca Strait", "Calicut", "Indian Ocean cosmopolitanism",
          "Zheng He's treasure fleets (1405–1433)", "diasporic communities (Gujarati, Arab, Persian)",
        ],
      },
      {
        code: "2.4",
        title: "Trans-Saharan Trade Routes",
        summary:
          "The camel saddle and caravan organization make the Sahara crossable. Gold flows north and salt flows south, fueling Mali, Songhai, and Timbuktu as a learning center.",
        year: 1325,
        empireIds: ["mali"],
        routeIds: ["trans-saharan", "trans-saharan-2"],
        eventIds: ["mansa-musa"],
        poiIds: ["timbuktu", "gao", "marrakesh", "fez", "cairo"],
        mentions: [
          "camel saddle", "caravans", "gold (West African)", "salt (Sahara)",
          "kola nuts", "slaves", "ivory", "Mali Empire", "Mansa Musa",
          "1324 hajj — Cairo gold crash", "Timbuktu / Sankoré", "Songhai successor",
          "Hausa Kingdoms", "Kanem-Bornu", "Berber middlemen",
          "spread of Islam to West Africa", "Arabic literacy",
        ],
      },
      {
        code: "2.5",
        title: "Cultural Consequences of Connectivity",
        summary:
          "Trade carries ideas: Islam spreads into West Africa and Southeast Asia, Buddhism diffuses through East Asia, and travelers like Ibn Battuta and Marco Polo write the medieval equivalent of travel blogs.",
        year: 1325,
        routeIds: ["silk-road", "indian-ocean", "trans-saharan"],
        poiIds: ["timbuktu", "malacca", "mecca", "medina", "dunhuang", "varanasi", "lhasa"],
        mentions: [
          "spread of Islam (West Africa, SE Asia, Swahili coast)",
          "spread of Buddhism (Silk Roads, East Asia)", "Neo-Confucianism",
          "Marco Polo", "Ibn Battuta", "syncretism", "diaspora communities",
          "Sufi missionaries", "merchants as cultural carriers",
          "spread of Sanskrit/Arabic literacy", "pilgrimages (hajj, etc.)",
        ],
      },
      {
        code: "2.6",
        title: "Environmental Consequences of Connectivity",
        summary:
          "Same routes, different cargo: Champa rice, bananas, citrus — and the bubonic plague, which devastates Eurasia in the 1300s.",
        year: 1350,
        routeIds: ["silk-road", "indian-ocean"],
        eventIds: ["black-death"],
        poiIds: ["constantinople", "venice", "cairo"],
        mentions: [
          "Champa rice", "bananas (to Africa)", "citrus", "sugar", "cotton",
          "bubonic plague (Yersinia pestis)", "Black Death", "rats + fleas",
          "demographic collapse (~1/3 of Europe)", "labor shortage",
          "end of serfdom (in some places)", "deforestation from intensive farming",
        ],
      },
      {
        code: "2.7",
        title: "Full Unit 2 Review",
        summary:
          "Heimler's full Unit 2 cram covering every trade network, every cultural and environmental consequence, and every comparison the test wants.",
        isUnitSummary: true,
        highlightAllCountries: true,
        year: 1325,
        empireIds: ["mongol", "yuan", "mali"],
        routeIds: ["silk-road", "indian-ocean", "trans-saharan", "trans-saharan-2"],
        eventIds: ["mongol-rise", "zheng-he", "mansa-musa", "black-death"],
        poiIds: ["beijing", "samarkand", "kashgar", "calicut", "malacca", "kilwa", "timbuktu", "cairo", "venice"],
        mentions: [
          "Silk Roads", "Indian Ocean trade", "trans-Saharan trade",
          "Pax Mongolica", "Zheng He", "Mansa Musa", "Black Death",
          "Champa rice", "bananas", "spread of Islam", "spread of Buddhism",
          "caravanserai", "dhow", "lateen sail", "compass", "astrolabe",
        ],
      },
    ],
  },

  {
    unitNumber: 3,
    title: "Land-Based Empires",
    subtitle: "The gunpowder empires consolidate power",
    yearStart: 1450,
    yearEnd: 1750,
    centerYear: 1600,
    videoId: "jqMQMUKEc3c",
    playlistId: "PLEHRHjICEfDXd8x9722rSfw5go8MX2R7z",
    accent: "#f97316",
    topics: [
      {
        code: "3.1",
        title: "Empires Expand",
        summary:
          "Ottomans, Safavids, Mughals, Ming/Qing China, and Russia all expand using gunpowder weapons — Heimler's 'gunpowder empires' that dominate the early modern world.",
        year: 1600,
        empireIds: ["ottoman", "safavid", "mughal", "ming", "qing", "russian-empire"],
        eventIds: ["constantinople-1453", "mughal-1526", "qing-1644"],
        poiIds: ["constantinople", "isfahan", "delhi", "beijing", "moscow", "panipat"],
        mentions: [
          "gunpowder empires", "cannons", "Janissaries (with muskets)",
          "Mehmed II", "fall of Constantinople 1453", "Suleiman the Magnificent",
          "Shah Ismail (Safavid)", "Shah Abbas", "Babur", "Akbar", "Aurangzeb",
          "Hongwu / Ming founding", "Yongle", "Forbidden City",
          "Manchus / Qing 1644", "Kangxi", "Ivan IV / Ivan the Terrible",
          "Peter the Great", "Cossacks (Russian frontier)",
        ],
      },
      {
        code: "3.2",
        title: "Empires: Administration",
        summary:
          "Centralization through professionalizing the state: Ottoman devshirme/Janissaries, Mughal zamindars and mansabdari, Russia's salaried bureaucracy, and tax-farming across the board.",
        year: 1600,
        empireIds: ["ottoman", "safavid", "mughal", "russian-empire"],
        poiIds: ["constantinople", "isfahan", "delhi", "moscow"],
        mentions: [
          "devshirme system", "Janissaries", "millets", "tax-farming (iltizam)",
          "zamindars", "mansabdari", "jizya", "Akbar's tolerance",
          "Russian boyars", "Table of Ranks (Peter)", "Kangxi's bureaucracy",
          "salaried officials", "Versailles (absolutism)", "divine right of kings",
          "monumental architecture (Taj Mahal, Topkapi, Versailles, Forbidden City)",
        ],
      },
      {
        code: "3.3",
        title: "Empires: Belief Systems",
        summary:
          "The Sunni–Shia split hardens between Ottomans and Safavids, Akbar tries syncretism in India, Sikhism appears, and Europe fractures through the Protestant and Catholic Reformations.",
        year: 1550,
        empireIds: ["ottoman", "safavid", "mughal"],
        poiIds: ["wittenberg", "vatican", "rome", "jerusalem", "mecca", "isfahan", "constantinople"],
        features: [
          { id: "chaldiran", label: "Battle of Chaldiran (Sunni-Shia)", emoji: "💥", category: "movement", lat: 39.04, lng: 44.41, year: 1514, pinned: true, explanation: "1514 — Ottoman Sunni Selim I crushes Safavid Shia Ismail I in eastern Anatolia. Cemented the Sunni–Shia geographic split that still defines the Middle East." },
          { id: "ottoman-vienna-1529", label: "Siege of Vienna", emoji: "💥", category: "movement", lat: 48.21, lng: 16.37, year: 1529, pinned: true, explanation: "Ottoman Suleiman besieges Christian Vienna. Repulsed — high-water mark of Ottoman expansion into Europe (until the second siege in 1683)." },
          { id: "lepanto", label: "Battle of Lepanto", emoji: "💥", category: "movement", lat: 38.34, lng: 21.47, year: 1571, pinned: true, explanation: "Holy League fleet (Spain, Venice, Papal States) vs. Ottomans. First major Christian naval victory over the Ottomans — symbolic turning point." },
          { id: "wittenberg-95", label: "95 Theses", emoji: "📜", category: "idea", lat: 51.87, lng: 12.65, year: 1517, pinned: true, explanation: "Oct 31, 1517 — Martin Luther nails (or mails) his 95 Theses to the Wittenberg church door. Launches the Protestant Reformation." },
          { id: "30-years-war", label: "Thirty Years' War", emoji: "💥", category: "movement", lat: 50.08, lng: 14.43, year: 1618, endYear: 1648, pinned: true, explanation: "1618–48 — Catholic vs. Protestant war that consumed central Europe. Ended with the Treaty of Westphalia, the modern state system." },
          { id: "trent", label: "Council of Trent", emoji: "📚", category: "policy", lat: 46.07, lng: 11.12, year: 1545, endYear: 1563, pinned: true, explanation: "Catholic Counter-Reformation council. Reaffirmed doctrine, banned indulgence-selling, founded seminaries, energized the Jesuits." },
        ],
        mentions: [
          "Sunni–Shia split", "Twelver Shi'ism (Safavid state religion)",
          "Akbar's syncretism (Din-i Ilahi)", "Sikhism (Guru Nanak)",
          "95 Theses (Luther 1517)", "Calvinism", "Anglicanism",
          "Catholic Counter-Reformation", "Council of Trent", "Jesuits",
          "Inquisition", "wars of religion", "Edict of Nantes",
          "European wars of religion", "millet system tolerance",
        ],
      },
      {
        code: "3.4",
        title: "Full Unit 3 Review",
        summary:
          "Heimler's full Unit 3 cram — every empire, every administration trick, every belief-system shift, all in one go.",
        isUnitSummary: true,
        highlightAllCountries: true,
        year: 1600,
        empireIds: ["ottoman", "safavid", "mughal", "ming", "qing", "russian-empire"],
        eventIds: ["constantinople-1453", "mughal-1526", "qing-1644"],
        poiIds: ["constantinople", "isfahan", "delhi", "beijing", "moscow", "wittenberg", "vatican"],
        mentions: [
          "gunpowder empires", "Ottomans", "Safavids", "Mughals", "Ming/Qing", "Russia",
          "devshirme", "Janissaries", "zamindars", "mansabdari", "Sunni–Shia split",
          "Akbar's syncretism", "Sikhism", "Protestant Reformation", "Counter-Reformation",
          "Versailles + absolutism",
        ],
      },
    ],
  },

  {
    unitNumber: 4,
    title: "Transoceanic Connections",
    subtitle: "Europeans take to the seas and remake the world economy",
    yearStart: 1450,
    yearEnd: 1750,
    centerYear: 1600,
    videoId: "TPaLulRrKuM",
    playlistId: "PLEHRHjICEfDVG6osVMx-168RjRmHv7eby",
    accent: "#06b6d4",
    topics: [
      {
        code: "4.1–4.2",
        title: "Technology and Causes of Exploration",
        summary:
          "Caravel, carrack, fluyt, astrolabe, magnetic compass, and lateen sail make oceangoing trips practical. Motivations: God, glory, gold, plus the fall of Constantinople pushing new routes.",
        year: 1500,
        empireIds: ["portuguese-empire", "spanish-empire"],
        eventIds: ["constantinople-1453", "columbus-1492", "tordesillas"],
        poiIds: ["lisbon", "seville", "constantinople", "calicut"],
        mentions: [
          "caravel", "carrack", "fluyt", "astrolabe", "magnetic compass", "lateen sail",
          "Mercator projection", "Henry the Navigator", "Prince Henry's school at Sagres",
          "Portuguese trading-post empire", "Bartolomeu Dias (Cape of Good Hope, 1488)",
          "Vasco da Gama (Calicut, 1498)", "Christopher Columbus (1492)",
          "fall of Constantinople 1453", "Treaty of Tordesillas 1494",
          "God, glory, gold", "spice trade", "Reconquista funding",
        ],
      },
      {
        code: "4.3",
        title: "The Columbian Exchange",
        summary:
          "Plants, animals, people, and pathogens move across the Atlantic. Maize, potatoes, and cassava transform Old World diets; smallpox kills up to 90% of Indigenous populations.",
        year: 1550,
        routeIds: ["columbian-exchange-east", "columbian-exchange-west"],
        eventIds: ["columbus-1492"],
        poiIds: ["lisbon", "seville", "mexico-city", "tenochtitlan"],
        features: [
          {
            id: "maize",
            label: "Maize / corn",
            emoji: "🌽",
            category: "crop",
            lat: 19.4,
            lng: -99.1,
            explanation:
              "Mesoamerican staple. After 1492 it spread across Africa and Asia — became a major food crop in West Africa, China, and Italy. Caloric workhorse of the Old World.",
          },
          {
            id: "potatoes",
            label: "Potatoes",
            emoji: "🥔",
            category: "crop",
            lat: -13.5,
            lng: -71.97,
            explanation:
              "Andean tuber. Crossed to Europe, transformed Irish, German, Russian, and Northern Chinese diets. Massive caloric density — fueled population growth.",
          },
          {
            id: "tomatoes",
            label: "Tomatoes",
            emoji: "🍅",
            category: "crop",
            lat: 18.0,
            lng: -98.0,
            explanation:
              "Mesoamerican fruit. Italians initially thought it was poisonous (member of nightshade family). Eventually became central to Italian cuisine.",
          },
          {
            id: "cacao",
            label: "Cacao",
            emoji: "🍫",
            category: "crop",
            lat: 17.0,
            lng: -89.0,
            explanation:
              "Mesoamerican bean used for ceremonial bitter chocolate drink. Spaniards added sugar; chocolate became a European luxury and global commodity.",
          },
          {
            id: "tobacco",
            label: "Tobacco",
            emoji: "🌿",
            category: "crop",
            lat: 37.0,
            lng: -76.0,
            explanation:
              "Native American crop. Became Virginia's economic lifeline; chewed, smoked, snuffed across the Old World. Drove labor demand → African slavery.",
          },
          {
            id: "cassava",
            label: "Cassava / manioc",
            emoji: "🌱",
            category: "crop",
            lat: -3.0,
            lng: -60.0,
            explanation:
              "Amazonian root crop, drought-resistant. Spread to Africa where it became a staple in many regions — particularly important in Central + West Africa.",
          },
          {
            id: "chili",
            label: "Chili peppers",
            emoji: "🌶️",
            category: "crop",
            lat: 23.0,
            lng: -102.0,
            explanation:
              "Mesoamerican Capsicum. Spread to South Asia, China, Korea, Hungary — became central to those cuisines (curry heat, kimchi, paprika).",
          },
          {
            id: "wheat",
            label: "Wheat → Americas",
            emoji: "🌾",
            category: "crop",
            lat: 40.0,
            lng: -100.0,
            explanation:
              "European staple. Brought to the Americas by colonists; became central to grain production across the Great Plains and Argentine pampas.",
          },
          {
            id: "sugar",
            label: "Sugar plantations",
            emoji: "🍬",
            category: "crop",
            lat: 18.5,
            lng: -69.9,
            explanation:
              "Brought from the Mediterranean to the Caribbean. Insatiable European demand drove Brazilian and Caribbean plantations — the engine of the Atlantic slave trade.",
          },
          {
            id: "horses",
            label: "Horses → Americas",
            emoji: "🐎",
            category: "crop",
            lat: 35.0,
            lng: -106.0,
            explanation:
              "Reintroduced by Spanish (extinct in Americas since the Ice Age). Transformed Plains Indian life — bison hunting, warfare, mobility — and Argentine pampas economy.",
          },
          {
            id: "cattle",
            label: "Cattle, pigs, sheep",
            emoji: "🐄",
            category: "crop",
            lat: -12.0,
            lng: -55.0,
            explanation:
              "European livestock with no New World equivalents. Transformed American ecosystems — overgrazing, ranching cultures, dietary protein.",
          },
          {
            id: "smallpox",
            label: "Smallpox",
            emoji: "💀",
            category: "disease",
            lat: 19.0,
            lng: -99.0,
            explanation:
              "Old World viral disease the Americas had no immunity to. Estimates: 60–90% of Indigenous Americans died of imported diseases. Single biggest factor in conquest.",
          },
          {
            id: "measles",
            label: "Measles, flu, typhus",
            emoji: "🦠",
            category: "disease",
            lat: -10.0,
            lng: -75.0,
            explanation:
              "Old World 'crowd diseases' the Americas had never met. Combined with smallpox to cause demographic collapse across two continents.",
          },
          {
            id: "syphilis",
            label: "Syphilis → Europe",
            emoji: "🩸",
            category: "disease",
            lat: 38.7,
            lng: -9.13,
            explanation:
              "Probably an American disease that crossed back. First major European outbreak in the 1490s, quickly spread across Eurasia.",
          },
          {
            id: "encomienda-cx",
            label: "Encomienda labor",
            emoji: "⛓️",
            category: "policy",
            lat: 19.0,
            lng: -99.13,
            explanation:
              "Spanish system: a colonist gets the right to extract labor from a group of Indigenous people in exchange for nominal protection + Christianization. Effectively slavery.",
          },
          {
            id: "demographic-collapse",
            label: "Indigenous demographic collapse",
            emoji: "📉",
            category: "movement",
            lat: -8.0,
            lng: -75.0,
            explanation:
              "Pre-1492 American population estimated 50–100 million. By 1600, ~90% gone — mostly to disease, plus war and forced labor. One of the largest demographic catastrophes in human history.",
          },
        ],
        mentions: [
          "maize / corn", "potatoes", "sweet potatoes", "cassava / manioc", "tomatoes",
          "cacao", "tobacco", "chili peppers", "rubber", "pineapple",
          "wheat", "rice", "sugar", "coffee", "bananas", "grapes",
          "horses", "cattle", "pigs", "sheep", "chickens",
          "smallpox", "measles", "influenza", "typhus", "yellow fever",
          "syphilis (back to Europe)", "demographic collapse of Indigenous peoples",
          "encomienda labor", "ranching transforms the Americas",
        ],
      },
      {
        code: "4.4",
        title: "Maritime Empires Established",
        summary:
          "Portugal sets up trading-post empires in Africa, India, and East Asia. Spain conquers the Aztecs and Inca. The Dutch (VOC), French, and British follow with chartered companies.",
        year: 1600,
        empireIds: ["portuguese-empire", "spanish-empire", "british-empire", "french-empire"],
        eventIds: ["columbus-1492", "tordesillas", "cortes-aztec", "pizarro-inca", "voc-1602"],
        poiIds: ["lisbon", "goa", "malacca", "macau", "amsterdam", "batavia", "mexico-city", "manila"],
        features: [
          { id: "fall-tenoch", label: "Fall of Tenochtitlán", emoji: "💥", category: "movement", lat: 19.43, lng: -99.13, year: 1521, pinned: true, explanation: "Aug 13, 1521 — Cortés + native allies + smallpox topple the Aztec Empire after a 79-day siege." },
          { id: "fall-cuzco", label: "Spanish capture of Cuzco", emoji: "💥", category: "movement", lat: -13.53, lng: -71.97, year: 1533, pinned: true, explanation: "Pizarro captures the Inca capital after executing Atahualpa. Inca state effectively over." },
        ],
        mentions: [
          "Portuguese trading-post empire", "Estado da Índia", "Goa", "Malacca", "Macau",
          "Hernán Cortés", "fall of Tenochtitlán 1521", "Francisco Pizarro",
          "fall of the Inca 1533", "Spanish viceroyalties", "New Spain", "Peru",
          "Dutch East India Company (VOC, 1602)", "joint-stock company",
          "British East India Company (1600)", "French colonies in Canada / Louisiana",
          "Manila Galleon trade", "Dutch in Java / Batavia", "Macau (Portuguese in China)",
        ],
      },
      {
        code: "4.5",
        title: "Maritime Empires Maintained and Developed",
        summary:
          "Coerced labor systems power it: encomienda, hacienda, the Andean mit'a (repurposed), chattel slavery, indentured servitude. The triangular trade and Middle Passage anchor the Atlantic economy.",
        year: 1650,
        empireIds: ["spanish-empire", "portuguese-empire", "british-empire"],
        routeIds: ["atlantic-slave"],
        eventIds: ["potosi-1545"],
        poiIds: ["potosi", "zacatecas", "acapulco", "manila", "mexico-city", "havana"],
        mentions: [
          "encomienda", "hacienda", "repartimiento", "mit'a (Spanish version)",
          "chattel slavery", "Atlantic slave trade", "Middle Passage",
          "indentured servitude", "plantation economy",
          "sugar (Brazil, Caribbean)", "tobacco (Virginia)", "rice (Carolina)",
          "silver from Potosí + Zacatecas", "Manila Galleon (silver → silk)",
          "triangular trade", "joint-stock companies", "mercantilism",
        ],
      },
      {
        code: "4.6",
        title: "Internal and External Challenges to State Power",
        summary:
          "Pueblo Revolt, Maroon societies, Metacom's War, the Fronde in France, and Cossack uprisings in Russia all push back on imperial authority.",
        year: 1675,
        empireIds: ["spanish-empire", "russian-empire", "french-empire", "british-empire"],
        poiIds: ["mexico-city", "moscow", "paris"],
        mentions: [
          "Pueblo Revolt (1680)", "Maroon societies", "Palmares (Brazil)",
          "Metacom's War (King Philip's War, 1675)", "Glorious Revolution (1688)",
          "the Fronde (France, 1648–53)", "Cossack uprisings (Stenka Razin)",
          "Pugachev's Rebellion (1773)", "slave revolts", "millennial movements",
          "Tupac Amaru II (Andes, 1780)",
        ],
      },
      {
        code: "4.7",
        title: "Changing Social Hierarchies",
        summary:
          "New mixed populations produce the casta system in Spanish America (peninsulares, criollos, mestizos, mulattos). Atlantic slavery hardens race-based hierarchies that didn't exist before.",
        year: 1700,
        empireIds: ["spanish-empire", "portuguese-empire"],
        routeIds: ["atlantic-slave"],
        poiIds: ["mexico-city", "havana", "lisbon", "seville"],
        mentions: [
          "casta system", "peninsulares", "creoles / criollos", "mestizos", "mulattos",
          "Indigenous peoples", "African slaves", "race-based hierarchy",
          "limpieza de sangre", "Atlantic chattel slavery", "creolization",
          "growing merchant class in Europe", "decline of European nobility",
          "Manchu Banner system", "Russian boyar reform under Peter the Great",
          "Ottoman millet hierarchy",
        ],
      },
      {
        code: "4.8",
        title: "Continuity and Change from 1450 to 1750",
        summary:
          "What stays (peasant agriculture, religion as legitimacy, patriarchy) vs. what changes (global trade integration, racial hierarchies, joint-stock capitalism).",
        year: 1700,
        empireIds: ["spanish-empire", "portuguese-empire", "british-empire", "french-empire", "ottoman", "mughal"],
        routeIds: ["atlantic-slave", "columbian-exchange-east", "columbian-exchange-west"],
        poiIds: ["amsterdam", "london", "lisbon", "seville", "mexico-city", "potosi"],
        mentions: [
          "first truly global trade network", "joint-stock companies",
          "rise of bourgeois / merchant class", "Atlantic slavery",
          "racialized hierarchies", "casta system", "encomienda → hacienda",
          "global silver flow (Potosí → Manila → Ming China)", "mercantilism",
          "still: peasant agriculture, religion as legitimacy, patriarchy",
        ],
      },
      {
        code: "4.R",
        title: "Full Unit 4 Review",
        summary:
          "Heimler's full Unit 4 cram covering every maritime empire, every labor system, and every social shift across the early modern oceans.",
        isUnitSummary: true,
        highlightAllCountries: true,
        year: 1600,
        empireIds: ["spanish-empire", "portuguese-empire", "british-empire", "french-empire"],
        routeIds: ["atlantic-slave", "columbian-exchange-east", "columbian-exchange-west"],
        eventIds: ["columbus-1492", "tordesillas", "cortes-aztec", "pizarro-inca", "voc-1602", "potosi-1545"],
        poiIds: ["lisbon", "seville", "amsterdam", "potosi", "mexico-city", "manila", "goa", "macau", "batavia", "havana"],
        mentions: [
          "Portuguese trading-post empire", "Spanish viceroyalties",
          "Dutch VOC", "British EIC", "French colonies",
          "Columbian Exchange", "Atlantic slave trade", "Manila Galleon",
          "casta system", "encomienda", "hacienda", "Potosí silver",
          "joint-stock companies", "mercantilism",
        ],
      },
    ],
  },

  {
    unitNumber: 5,
    title: "Revolutions",
    subtitle: "Ideas, uprisings, and industry remake politics",
    yearStart: 1750,
    yearEnd: 1900,
    centerYear: 1825,
    videoId: "teTYdvjpSoM",
    playlistId: "PLEHRHjICEfDVqlm9W8s3LiDUJDF_M7eBv",
    accent: "#ef4444",
    topics: [
      {
        code: "5.1",
        title: "The Enlightenment",
        summary:
          "Locke, Voltaire, Rousseau, and Adam Smith apply reason to government and economy. Natural rights, social contract, deism, and individualism become the toolkit for the revolutions to come.",
        year: 1770,
        empireIds: ["british-empire", "french-empire"],
        poiIds: ["paris", "london", "oxford"],
        mentions: [
          "Scientific Revolution", "John Locke (natural rights)", "Voltaire",
          "Jean-Jacques Rousseau (social contract)", "Montesquieu (separation of powers)",
          "Adam Smith (Wealth of Nations 1776)", "deism", "individualism",
          "natural rights", "consent of the governed",
          "Mary Wollstonecraft (Vindication of the Rights of Woman)",
          "Olympe de Gouges", "salons", "the Encyclopédie", "abolition of slavery (Britain 1833)",
        ],
      },
      {
        code: "5.2",
        title: "Nationalism and Revolutions",
        summary:
          "American, French, Haitian, and Latin American revolutions all draw on Enlightenment ideas. Later, nationalism drives Italian and German unification and the Propaganda Movement in the Philippines.",
        year: 1810,
        empireIds: ["british-empire", "french-empire", "spanish-empire", "usa"],
        eventIds: ["american-rev", "french-rev", "haitian-rev", "latin-am-indep", "seven-years"],
        poiIds: ["paris", "washington", "yorktown", "havana", "mexico-city", "waterloo"],
        features: [
          { id: "yorktown-feat", label: "Yorktown surrender", emoji: "💥", category: "movement", lat: 37.24, lng: -76.51, year: 1781, pinned: true, explanation: "Cornwallis surrenders to Washington + Rochambeau. Effectively ended the American Revolutionary War." },
          { id: "bastille", label: "Storming of the Bastille", emoji: "💥", category: "movement", lat: 48.85, lng: 2.37, year: 1789, pinned: true, explanation: "July 14, 1789 — Parisians storm the royal prison. Symbolic start of the French Revolution." },
          { id: "haiti-feat", label: "Haitian Revolution", emoji: "💥", category: "movement", lat: 18.97, lng: -72.28, year: 1791, endYear: 1804, pinned: true, explanation: "Only successful slave-led revolution. Toussaint L'Ouverture, then Dessalines. Independence Jan 1, 1804." },
          { id: "waterloo-feat", label: "Waterloo", emoji: "💥", category: "movement", lat: 50.68, lng: 4.41, year: 1815, pinned: true, explanation: "June 1815 — Napoleon's final defeat by Wellington + Blücher. Ends 25 years of revolutionary / Napoleonic wars." },
        ],
        mentions: [
          "American Revolution (1775–83)", "Declaration of Independence",
          "French Revolution (1789)", "Storming of the Bastille", "Reign of Terror",
          "Napoleon Bonaparte", "Napoleonic Code", "Haitian Revolution (1791–1804)",
          "Toussaint L'Ouverture", "Jean-Jacques Dessalines",
          "Latin American independence", "Simón Bolívar", "José de San Martín",
          "Hidalgo (Mexico)", "Italian unification (Garibaldi, Cavour)",
          "German unification (Bismarck)", "Propaganda Movement (Philippines)", "José Rizal",
        ],
      },
      {
        code: "5.3",
        title: "The Industrial Revolution Begins",
        summary:
          "Britain industrializes first thanks to coal, iron, capital, a navy, navigable rivers, and an enclosed agriculture system that pushes rural workers into cities.",
        year: 1800,
        empireIds: ["british-empire"],
        eventIds: ["industrial-rev"],
        poiIds: ["london", "oxford"],
        mentions: [
          "Britain industrializes first", "coal", "iron", "navigable rivers",
          "navy + global empire", "agricultural revolution", "enclosure movement",
          "rural workers → cities (urbanization)", "spinning jenny (Hargreaves)",
          "water frame (Arkwright)", "spinning mule (Crompton)", "factory system",
          "James Watt (steam engine)", "cotton textiles", "putting-out system",
          "global capital + banking",
        ],
      },
      {
        code: "5.4",
        title: "Industrial Revolution Spreads",
        summary:
          "Industrialization radiates to France, the United States, Germany, Russia (state-led under Witte), and Japan (state-led under Meiji). Egypt under Muhammad Ali briefly tries.",
        year: 1870,
        eventIds: ["meiji"],
        poiIds: ["paris", "washington", "berlin", "moscow", "tokyo", "cairo"],
        mentions: [
          "France (post-Napoleon)", "Germany (Zollverein, Krupp steel)",
          "United States (Northeast textile mills, then heavy industry)",
          "Russia under Witte (state-led)", "Trans-Siberian Railway",
          "Meiji Restoration (1868)", "Iwakura Mission", "Japanese zaibatsu",
          "Egypt under Muhammad Ali", "cotton + Suez context",
          "uneven global industrialization",
        ],
      },
      {
        code: "5.5",
        title: "Technology of the Industrial Age",
        summary:
          "Steam engine, railroads, steamships, telegraph, then electricity and the internal combustion engine — each a multiplier on production and communication.",
        year: 1850,
        empireIds: ["british-empire", "usa", "german-empire"],
        routeIds: ["industrial-railway"],
        eventIds: ["industrial-rev"],
        poiIds: ["london", "berlin", "suez"],
        mentions: [
          "steam engine", "steam locomotives + railroads", "steamships", "telegraph",
          "transcontinental railroad (1869)", "Suez Canal (1869)", "Panama Canal (1914)",
          "interchangeable parts", "Bessemer process (steel)", "internal combustion engine",
          "electricity (Edison, Tesla)", "telephone (Bell)", "wireless (Marconi)",
          "second industrial revolution", "petroleum + refining",
        ],
      },
      {
        code: "5.6",
        title: "Industrialization: Government's Role",
        summary:
          "Laissez-faire (Britain, US) vs. state-driven catch-up industrialization (Meiji Japan, Russia, Egypt). Tariffs, infrastructure spending, and forced modernization all show up.",
        year: 1880,
        eventIds: ["meiji"],
        empireIds: ["british-empire", "russian-empire"],
        poiIds: ["london", "tokyo", "moscow", "cairo"],
        mentions: [
          "laissez-faire (Britain, US)", "Adam Smith's invisible hand",
          "tariffs / protectionism (Hamilton, Friedrich List)",
          "state-led industrialization (Russia, Japan, Germany)",
          "Witte's reforms (Russia)", "Trans-Siberian Railway",
          "Meiji's top-down modernization", "Muhammad Ali's modernization (Egypt)",
          "infrastructure spending + military reform",
        ],
      },
      {
        code: "5.7",
        title: "Economic Developments and Innovations",
        summary:
          "The corporation, the stock market, and transnational businesses (Unilever, HSBC) emerge. Capital becomes more important than land for the first time.",
        year: 1880,
        empireIds: ["british-empire", "usa"],
        poiIds: ["london", "amsterdam", "hong-kong", "shanghai"],
        mentions: [
          "the corporation", "limited liability", "stock markets", "London Stock Exchange",
          "transnational business (Unilever, HSBC)", "monopolies + trusts",
          "Standard Oil (Rockefeller)", "U.S. Steel (Carnegie)",
          "international banking (Rothschilds)", "gold standard",
          "modern advertising", "mass-produced consumer goods",
        ],
      },
      {
        code: "5.8–5.9",
        title: "Reactions and Society in the Industrial Age",
        summary:
          "Marx and Engels, socialism, labor unions. An expanded middle class, a brutal working class, urban slums, and changing gender roles. Women enter factories and drive early suffrage movements.",
        year: 1870,
        empireIds: ["british-empire", "german-empire", "french-empire"],
        poiIds: ["london", "berlin", "paris"],
        mentions: [
          "Karl Marx + Friedrich Engels", "Communist Manifesto (1848)",
          "scientific socialism", "labor unions", "strikes",
          "utopian socialism (Owen, Fourier)", "anarchism",
          "Chartism (Britain)", "1848 revolutions",
          "middle class growth", "working-class slums (Manchester)",
          "child labor laws", "Factory Acts", "public health reforms",
          "women in factories", "Seneca Falls (1848)", "first-wave feminism",
          "abolition of serfdom (Russia 1861)", "abolition of slavery (Brazil 1888)",
        ],
      },
      {
        code: "5.10",
        title: "Continuity and Change in the Industrial Age",
        summary:
          "What's new (urbanization, factory labor, mass politics) vs. what persists (rural agriculture, gender hierarchies, religious authority in many places).",
        year: 1880,
        empireIds: ["british-empire", "russian-empire"],
        eventIds: ["industrial-rev", "meiji", "american-rev", "french-rev", "haitian-rev"],
        poiIds: ["london", "paris", "berlin", "tokyo", "washington"],
        mentions: [
          "Enlightenment ideas spread", "Atlantic Revolutions",
          "Industrial Revolution starts in Britain, spreads",
          "urbanization", "factory labor", "mass politics",
          "rise of the corporation", "labor unions", "first-wave feminism",
          "still: rural agriculture, gender hierarchies, religious authority in many places",
        ],
      },
      {
        code: "5.R",
        title: "Full Unit 5 Review",
        summary:
          "Heimler's full Unit 5 cram — Enlightenment ideas, the Atlantic Revolutions, the Industrial Revolution and its spread, new tech, new economies, and Marx-era backlash.",
        isUnitSummary: true,
        highlightAllCountries: true,
        year: 1825,
      },
    ],
  },

  {
    unitNumber: 6,
    title: "Consequences of Industrialization",
    subtitle: "Imperialism, migration, and a global economy",
    yearStart: 1750,
    yearEnd: 1900,
    centerYear: 1880,
    videoId: "DrjQ1dir1SI",
    playlistId: "PLEHRHjICEfDUcEYepeOH1x30epqrxfHoW",
    accent: "#a855f7",
    topics: [
      {
        code: "6.1",
        title: "Rationales for Imperialism",
        summary:
          "Nationalism, social Darwinism, scientific racism, and the 'civilizing mission' / White Man's Burden are the justifications elites give for the second wave of imperialism.",
        year: 1880,
        empireIds: ["british-empire", "french-empire"],
        poiIds: ["london", "paris", "berlin"],
        mentions: [
          "nationalism", "social Darwinism", "Herbert Spencer",
          "scientific racism", "phrenology", "eugenics (later)",
          "civilizing mission / mission civilisatrice", "White Man's Burden (Kipling)",
          "Christian missionary movements", "second wave imperialism",
          "geopolitics + great power competition", "national prestige",
          "industrial demand for raw materials + new markets",
        ],
      },
      {
        code: "6.2",
        title: "State Expansion",
        summary:
          "The Berlin Conference (1884–85) carves up Africa with no Africans present. Britain takes India directly after 1857, France takes Algeria and Indochina, the US takes the Philippines.",
        year: 1885,
        empireIds: ["british-empire", "french-empire", "usa"],
        eventIds: ["scramble-africa", "1857-rebellion", "us-empire", "plassey"],
        poiIds: ["berlin", "kolkata", "mumbai", "plassey", "saigon", "manila"],
        mentions: [
          "Berlin Conference (1884–85)", "Bismarck", "scramble for Africa",
          "British Raj (1858)", "EIC dissolved", "Queen Victoria as Empress of India",
          "French Algeria", "French Indochina", "Suez Canal (British control)",
          "Belgian Congo (Leopold II)", "Dutch East Indies",
          "US in the Philippines (1898)", "US in Hawaii", "US in Puerto Rico, Guam",
          "settler colonies (Australia, New Zealand, S. Africa)",
          "Russia expanding into Central Asia",
        ],
      },
      {
        code: "6.3",
        title: "Indigenous Responses to State Expansion",
        summary:
          "Sepoy Rebellion in India, Xhosa Cattle Killing, Yaa Asantewaa in the Ashanti, the Boxer Rebellion in China, and the Sokoto Caliphate in West Africa.",
        year: 1880,
        eventIds: ["1857-rebellion", "taiping", "adwa"],
        poiIds: ["kolkata", "plassey", "adwa", "beijing", "nanjing"],
        features: [
          { id: "sepoy", label: "Sepoy Rebellion", emoji: "💥", category: "movement", lat: 25.76, lng: 82.75, year: 1857, pinned: true, explanation: "Indian sepoys + displaced princes + peasants rise against the British East India Company. Crushed; led to direct British Crown rule (1858)." },
          { id: "boxer", label: "Boxer Rebellion", emoji: "💥", category: "movement", lat: 39.9, lng: 116.4, year: 1899, endYear: 1901, pinned: true, explanation: "Anti-foreign, anti-Christian uprising in China. Crushed by 8-nation coalition. Hastened Qing collapse." },
          { id: "taiping-feat", label: "Taiping Rebellion", emoji: "💥", category: "movement", lat: 32.06, lng: 118.8, year: 1850, endYear: 1864, pinned: true, explanation: "Hong Xiuquan, who believed he was Jesus's brother, led a 14-year civil war. ~20 million dead — among the deadliest wars in history." },
          { id: "adwa-feat", label: "Battle of Adwa", emoji: "💥", category: "movement", lat: 14.17, lng: 38.89, year: 1896, pinned: true, explanation: "Ethiopia under Menelik II crushes invading Italy. Only major colonial defeat in Africa during the scramble; kept Ethiopia independent." },
        ],
        mentions: [
          "Sepoy Rebellion / Indian Rebellion of 1857", "greased cartridges",
          "Xhosa Cattle Killing (1856–57)", "Zulu Wars", "Cetshwayo",
          "Yaa Asantewaa (Ashanti)", "Sokoto Caliphate", "Usman dan Fodio",
          "Mahdist Revolt (Sudan)", "Boxer Rebellion (1899–1901)",
          "Taiping Rebellion (Hong Xiuquan)", "Self-Strengthening Movement (China)",
          "Battle of Adwa (1896)", "Menelik II of Ethiopia",
          "Indian National Congress (1885)",
        ],
      },
      {
        code: "6.4–6.5",
        title: "Global Economy and Economic Imperialism",
        summary:
          "Cash crops and monoculture economies tie colonies into a single global market. Even places not formally colonized — Qing China after the Opium Wars, Egypt under British finance, much of Latin America — get hit by economic imperialism.",
        year: 1870,
        empireIds: ["british-empire", "qing"],
        routeIds: ["british-empire"],
        eventIds: ["opium-wars"],
        poiIds: ["shanghai", "hong-kong", "suez", "cairo", "havana"],
        features: [
          { id: "opium-1", label: "First Opium War", emoji: "💥", category: "movement", lat: 22.3, lng: 113.6, year: 1839, endYear: 1842, pinned: true, explanation: "Britain forces China to keep accepting opium. Treaty of Nanjing opens ports + cedes Hong Kong. Start of China's 'century of humiliation.'" },
          { id: "opium-2", label: "Second Opium War", emoji: "💥", category: "movement", lat: 39.9, lng: 116.4, year: 1856, endYear: 1860, pinned: true, explanation: "Britain + France force more concessions; burn the Summer Palace. Treaty of Tianjin." },
        ],
        mentions: [
          "cash crops", "monoculture", "rubber (Belgian Congo)", "palm oil (W. Africa)",
          "cotton (Egypt, India, US South)", "sugar (Caribbean)", "tea (India, Ceylon)",
          "First Opium War (1839–42)", "Treaty of Nanjing", "Hong Kong ceded",
          "Second Opium War", "unequal treaties", "Treaty of Tianjin",
          "extraterritoriality", "British takeover of Egyptian finance (1882)",
          "Suez Canal Company", "Latin America economically dependent on Britain + US",
          "United Fruit Company", "banana republics",
        ],
      },
      {
        code: "6.6",
        title: "Causes of Migration",
        summary:
          "Push factors (Irish famine, Italian poverty, Indian poverty) and pull factors (industrial jobs, gold rushes, plantation labor) move people in unprecedented numbers.",
        year: 1870,
        empireIds: ["british-empire", "usa"],
        poiIds: ["london", "mumbai", "kolkata", "witwatersrand"],
        mentions: [
          "push factors: famine (Irish potato famine 1845–52)",
          "poverty (Italians, Eastern Europeans)",
          "religious persecution (Russian Jews)",
          "indentured servitude after slavery ends",
          "pull factors: industrial jobs", "California Gold Rush (1848)",
          "Witwatersrand gold rush (1886)", "Australian gold rush",
          "plantation labor (sugar, rubber)",
          "transportation: steamships + railroads make migration cheap + fast",
        ],
      },
      {
        code: "6.7",
        title: "Effects of Migration",
        summary:
          "Ethnic enclaves form (Chinese in Southeast Asia, Indians across the British Empire as indentured laborers). Receiving societies often respond with restrictions like the Chinese Exclusion Act.",
        year: 1880,
        empireIds: ["british-empire", "usa"],
        routeIds: ["indentured"],
        poiIds: ["singapore", "mumbai", "kolkata", "havana", "washington"],
        mentions: [
          "Chinese diaspora (SE Asia, US, Caribbean)", "coolie labor",
          "Indian indentured laborers (Caribbean, S. Africa, Fiji, Mauritius)",
          "ethnic enclaves / Chinatowns",
          "Chinese Exclusion Act (US, 1882)",
          "White Australia policy", "anti-Asian violence",
          "remittances", "creolization",
        ],
      },
      {
        code: "6.8",
        title: "Causation in the Imperial Age",
        summary:
          "Industrialization needed raw materials and markets, which drove imperialism, which drove migration, which reshaped the social map of the world.",
        year: 1880,
        empireIds: ["british-empire", "french-empire", "qing"],
        routeIds: ["british-empire", "indentured"],
        eventIds: ["industrial-rev", "scramble-africa", "opium-wars", "1857-rebellion"],
        poiIds: ["london", "berlin", "kolkata", "shanghai", "suez", "cairo"],
        mentions: [
          "industry → demand for raw materials + markets",
          "imperialism (formal + informal)",
          "global cash-crop economies", "labor migration (free, indentured, coerced)",
          "ethnic enclaves",
          "global hierarchy reinforced by ideology + economy",
        ],
      },
      {
        code: "6.R",
        title: "Full Unit 6 Review",
        summary:
          "Heimler's full Unit 6 cram — second-wave imperialism, the Berlin Conference, indigenous resistance, the Opium Wars, global migration, and the human cost of industry.",
        isUnitSummary: true,
        highlightAllCountries: true,
        year: 1880,
      },
    ],
  },

  {
    unitNumber: 7,
    title: "Global Conflict",
    subtitle: "Two world wars and the end of the imperial age",
    yearStart: 1900,
    yearEnd: 1945,
    centerYear: 1920,
    videoId: "wl7KVg8TOs0",
    playlistId: "PLEHRHjICEfDXpIjArszCIqDxXGHApX6WY",
    accent: "#dc2626",
    topics: [
      {
        code: "7.1",
        title: "Shifting Power After 1900",
        summary:
          "The Ottoman, Russian, Qing, and Austro-Hungarian empires all collapse. Russia goes through revolution (1917), Mexico has its own (1910), and the global balance starts to wobble.",
        year: 1917,
        empireIds: ["ottoman", "qing", "russian-empire"],
        eventIds: ["russian-rev"],
        poiIds: ["moscow", "beijing", "vienna", "mexico-city", "constantinople"],
        mentions: [
          "Ottoman 'sick man of Europe'", "Young Turks", "Tanzimat reforms",
          "Qing collapse", "1911 Xinhai Revolution", "Sun Yat-sen", "ROC founded 1912",
          "Russo-Japanese War (1905)", "1905 Russian Revolution", "Bloody Sunday",
          "1917 Russian Revolution", "Lenin", "Bolsheviks", "Treaty of Brest-Litovsk",
          "Mexican Revolution (1910)", "Pancho Villa", "Emiliano Zapata", "Porfirio Díaz",
          "Habsburg / Austria-Hungary disintegration",
        ],
      },
      {
        code: "7.2",
        title: "Causes of World War I",
        summary:
          "MAIN: Militarism, Alliances, Imperialism, Nationalism — plus Franz Ferdinand as the spark. The alliance system turns a Balkan crisis into a world war.",
        year: 1914,
        empireIds: ["german-empire", "austria-hungary", "ottoman", "russian-empire", "british-empire", "french-empire"],
        eventIds: ["wwi"],
        poiIds: ["sarajevo", "vienna", "berlin", "paris", "london", "moscow"],
        mentions: [
          "MAIN: Militarism, Alliances, Imperialism, Nationalism",
          "Triple Entente (France, Russia, Britain)",
          "Triple Alliance (Germany, Austria-Hungary, Italy)",
          "Pan-Slavism", "the Balkans powder keg",
          "Archduke Franz Ferdinand assassination (June 28, 1914)",
          "Gavrilo Princip", "Black Hand",
          "Schlieffen Plan", "Germany's blank check to Austria",
        ],
      },
      {
        code: "7.3",
        title: "Conducting World War I",
        summary:
          "Trench warfare, machine guns, poison gas, tanks, planes, and total war on the home front. The Treaty of Versailles ends it with humiliating terms for Germany.",
        year: 1916,
        empireIds: ["german-empire", "austria-hungary", "british-empire", "french-empire", "russian-empire", "usa"],
        eventIds: ["wwi"],
        poiIds: ["verdun", "paris", "berlin", "london"],
        features: [
          { id: "wwi-verdun", label: "Verdun", emoji: "💥", category: "movement", lat: 49.16, lng: 5.39, year: 1916, pinned: true, explanation: "Battle of Verdun, Feb–Dec 1916. ~700,000 casualties. France 'shall not pass.'" },
          { id: "wwi-somme", label: "Somme", emoji: "💥", category: "movement", lat: 50.0, lng: 2.7, year: 1916, pinned: true, explanation: "Battle of the Somme, July–Nov 1916. ~1 million casualties. First mass tank deployment." },
          { id: "wwi-marne", label: "Marne", emoji: "💥", category: "movement", lat: 48.94, lng: 3.45, year: 1914, pinned: true, explanation: "First Battle of the Marne, Sep 1914. Halted the German Schlieffen Plan; began trench warfare." },
          { id: "wwi-ypres", label: "Ypres", emoji: "💥", category: "movement", lat: 50.85, lng: 2.88, year: 1915, pinned: true, explanation: "Three battles at Ypres (1914, 1915, 1917). Site of the first large-scale poison-gas attack (1915)." },
          { id: "wwi-gallipoli", label: "Gallipoli", emoji: "💥", category: "movement", lat: 40.22, lng: 26.4, year: 1915, pinned: true, explanation: "Allied campaign to take the Dardanelles from the Ottomans. Disaster — ~250,000 Allied casualties. Made Mustafa Kemal (Atatürk) a national hero." },
          { id: "wwi-tannenberg", label: "Tannenberg", emoji: "💥", category: "movement", lat: 53.5, lng: 20.13, year: 1914, pinned: true, explanation: "German victory over Russia, Aug 1914. Set the tone for the Eastern Front." },
        ],
        mentions: [
          "trench warfare", "no man's land", "machine guns", "barbed wire",
          "poison gas (chlorine, mustard)", "tanks", "airplanes", "U-boats",
          "Battle of the Somme", "Battle of Verdun", "Gallipoli",
          "total war", "rationing", "war propaganda", "women in factories",
          "colonial troops (Indians, Senegalese, Algerians, ANZACs)",
          "US enters 1917", "Wilson's 14 Points", "Treaty of Versailles (1919)",
          "war guilt clause", "League of Nations",
        ],
      },
      {
        code: "7.4",
        title: "Economy in the Interwar Period",
        summary:
          "Hyperinflation in Weimar Germany gives way to the Great Depression after 1929, which spreads worldwide and fuels political extremism.",
        year: 1930,
        empireIds: ["usa", "british-empire", "german-empire"],
        eventIds: ["great-depression"],
        poiIds: ["berlin", "washington", "london"],
        mentions: [
          "Weimar hyperinflation (1923)", "wheelbarrows of marks",
          "reparations", "Dawes Plan (1924)", "Young Plan",
          "Roaring Twenties", "speculation + margin buying",
          "Wall Street Crash (October 1929)", "Great Depression",
          "global trade collapse", "Smoot-Hawley Tariff (1930)",
          "FDR's New Deal", "Keynesian economics",
          "Soviet Five-Year Plans", "command economy",
        ],
      },
      {
        code: "7.5",
        title: "Unresolved Tensions After WWI",
        summary:
          "Anticolonial movements ramp up — Gandhi in India, Ho Chi Minh in Indochina, the Pan-African Congress — even though the Allies refused to extend self-determination to colonies.",
        year: 1925,
        empireIds: ["british-empire", "french-empire"],
        eventIds: ["indian-indep"],
        poiIds: ["kolkata", "mumbai", "hanoi", "saigon"],
        mentions: [
          "Mahatma Gandhi", "Indian National Congress", "Salt March (1930)",
          "satyagraha (non-violent resistance)", "Muhammad Ali Jinnah",
          "Ho Chi Minh (Vietnam)", "First Indochinese Communist Party",
          "Pan-African Congress (1919)", "W.E.B. Du Bois", "Marcus Garvey",
          "Négritude movement (Senghor, Césaire)",
          "Easter Rising (Ireland 1916)", "Irish Independence",
          "May Fourth Movement (China 1919)",
          "Wilson's denial of self-determination to colonies",
        ],
      },
      {
        code: "7.6",
        title: "Causes of World War II",
        summary:
          "Versailles + Depression + fascism (Hitler, Mussolini, militarist Japan) + appeasement = a second war. Rhineland, Anschluss, Sudetenland, Munich Agreement.",
        year: 1938,
        eventIds: ["great-depression"],
        empireIds: ["japan-empire"],
        poiIds: ["berlin", "vienna", "rome", "tokyo"],
        mentions: [
          "fascism", "Mussolini's March on Rome (1922)", "Italian Fascist Party",
          "Adolf Hitler", "NSDAP / Nazi Party", "Mein Kampf",
          "Nuremberg Laws (1935)", "Kristallnacht (1938)",
          "remilitarization of the Rhineland (1936)",
          "Anschluss with Austria (1938)", "Sudetenland", "Munich Agreement (1938)",
          "Neville Chamberlain", "appeasement",
          "Japanese militarism", "invasion of Manchuria (1931)",
          "Second Sino-Japanese War (1937)", "Rape of Nanjing",
          "Spanish Civil War (1936–39)", "Francisco Franco",
          "Molotov-Ribbentrop Pact (1939)",
        ],
      },
      {
        code: "7.7",
        title: "Conducting World War II",
        summary:
          "Blitzkrieg in Europe, Pacific island-hopping, total war economies, firebombing of Tokyo and Dresden, atomic bombs on Hiroshima and Nagasaki.",
        year: 1943,
        eventIds: ["wwii"],
        empireIds: ["japan-empire", "german-empire", "soviet-union", "usa", "british-empire", "french-empire"],
        poiIds: ["stalingrad", "hiroshima", "pearl-harbor", "berlin", "tokyo", "nanjing"],
        features: [
          { id: "wwii-pearl", label: "Pearl Harbor", emoji: "💥", category: "movement", lat: 21.35, lng: -157.95, year: 1941, pinned: true, explanation: "Japanese surprise attack, Dec 7, 1941. Brought the US into WWII." },
          { id: "wwii-stalingrad", label: "Stalingrad", emoji: "💥", category: "movement", lat: 48.71, lng: 44.51, year: 1942, endYear: 1943, pinned: true, explanation: "Brutal urban battle. Soviet victory turned the tide on the Eastern Front. ~2 million casualties." },
          { id: "wwii-dday", label: "D-Day", emoji: "💥", category: "movement", lat: 49.42, lng: -0.75, year: 1944, pinned: true, explanation: "Allied landings at Normandy. Largest seaborne invasion in history; opened the Western Front." },
          { id: "wwii-berlin", label: "Fall of Berlin", emoji: "💥", category: "movement", lat: 52.52, lng: 13.4, year: 1945, pinned: true, explanation: "Soviet forces capture Berlin, late April–May 1945. Hitler kills himself; Germany surrenders." },
          { id: "wwii-london", label: "Battle of Britain / Blitz", emoji: "💥", category: "movement", lat: 51.51, lng: -0.13, year: 1940, pinned: true, explanation: "1940 air war over Britain; the Blitz bombed London for ~8 months. RAF win prevented invasion." },
          { id: "wwii-midway", label: "Midway", emoji: "💥", category: "movement", lat: 28.21, lng: -177.37, year: 1942, pinned: true, explanation: "US naval victory over Japan, June 1942. Turned the tide of the Pacific War." },
          { id: "wwii-iwo", label: "Iwo Jima", emoji: "💥", category: "movement", lat: 24.78, lng: 141.32, year: 1945, pinned: true, explanation: "Brutal Pacific island battle, Feb–Mar 1945. Famous flag-raising on Mt. Suribachi." },
          { id: "wwii-okinawa", label: "Okinawa", emoji: "💥", category: "movement", lat: 26.5, lng: 127.94, year: 1945, pinned: true, explanation: "Last major Pacific battle, Apr–Jun 1945. Influenced the decision to use the atomic bomb." },
          { id: "wwii-hiroshima", label: "Hiroshima atomic bomb", emoji: "💥", category: "movement", lat: 34.39, lng: 132.46, year: 1945, pinned: true, explanation: "First atomic bomb dropped Aug 6, 1945. Killed ~140,000 people." },
          { id: "wwii-nagasaki", label: "Nagasaki atomic bomb", emoji: "💥", category: "movement", lat: 32.75, lng: 129.88, year: 1945, pinned: true, explanation: "Second atomic bomb, Aug 9, 1945. Killed ~70,000 people. Japan surrendered Aug 15." },
          { id: "wwii-dresden", label: "Dresden firebombing", emoji: "🔥", category: "movement", lat: 51.05, lng: 13.74, year: 1945, pinned: true, explanation: "Allied firebombing, Feb 1945. ~25,000 civilians killed." },
          { id: "wwii-tokyo-fire", label: "Tokyo firebombing", emoji: "🔥", category: "movement", lat: 35.68, lng: 139.76, year: 1945, pinned: true, explanation: "March 1945 — single deadliest air raid in history. ~100,000 people killed in one night." },
          { id: "wwii-nanjing", label: "Rape of Nanjing", emoji: "💥", category: "movement", lat: 32.06, lng: 118.8, year: 1937, pinned: true, explanation: "Japanese mass atrocity in the Chinese capital, Dec 1937. ~200,000+ killed." },
        ],
        mentions: [
          "Blitzkrieg", "Fall of France (1940)", "Battle of Britain", "the Blitz",
          "Operation Barbarossa (1941)", "Battle of Stalingrad",
          "Pearl Harbor (Dec 7, 1941)", "Pacific island-hopping",
          "Battle of Midway (1942)", "kamikaze pilots", "Bataan Death March",
          "D-Day (June 6, 1944)", "Battle of the Bulge",
          "firebombing of Dresden + Tokyo", "atomic bomb (Manhattan Project)",
          "Hiroshima (Aug 6) + Nagasaki (Aug 9, 1945)", "VE Day", "VJ Day",
          "total war economies", "code-breaking (Enigma, Bletchley)",
        ],
      },
      {
        code: "7.8",
        title: "Mass Atrocities After 1900",
        summary:
          "The Holocaust is the central example, plus the Armenian genocide, Holodomor, Cambodia under the Khmer Rouge, Rwanda (1994), and Bosnia (1990s).",
        year: 1942,
        empireIds: ["german-empire", "soviet-union", "japan-empire", "ottoman"],
        eventIds: ["wwii"],
        poiIds: ["berlin", "sarajevo", "moscow", "nanjing"],
        features: [
          { id: "holocaust", label: "Holocaust", emoji: "💀", category: "movement", lat: 50.04, lng: 19.18, year: 1941, endYear: 1945, pinned: true, explanation: "Nazi systematic murder of ~6 million Jews + millions of Roma, disabled, LGBT, Slavs. Auschwitz alone: ~1.1 million." },
          { id: "armenian-gen", label: "Armenian Genocide", emoji: "💀", category: "movement", lat: 39.93, lng: 41.27, year: 1915, endYear: 1923, pinned: true, explanation: "Ottoman government deports + kills ~1.5 million Armenians during WWI. First major 20th-c. genocide." },
          { id: "holodomor", label: "Holodomor", emoji: "💀", category: "movement", lat: 50.45, lng: 30.52, year: 1932, endYear: 1933, pinned: true, explanation: "Stalin's man-made famine in Ukraine during forced collectivization. Killed millions; recognized as genocide by Ukraine + many countries." },
          { id: "khmer-rouge", label: "Cambodian Genocide", emoji: "💀", category: "movement", lat: 11.55, lng: 104.92, year: 1975, endYear: 1979, pinned: true, explanation: "Pol Pot's Khmer Rouge killed ~1.7–2 million Cambodians (~25% of the population) in the 'killing fields.'" },
          { id: "rwanda-gen", label: "Rwandan Genocide", emoji: "💀", category: "movement", lat: -1.95, lng: 30.06, year: 1994, pinned: true, explanation: "April–July 1994 — Hutu extremists kill ~800,000 Tutsis and moderate Hutus in 100 days." },
          { id: "bosnia-gen", label: "Bosnian Genocide", emoji: "💀", category: "movement", lat: 44.1, lng: 19.3, year: 1992, endYear: 1995, pinned: true, explanation: "Bosnian Serb forces kill ~8,000 Bosniak men + boys at Srebrenica (1995). Broader ethnic cleansing across Bosnia." },
        ],
        mentions: [
          "Holocaust / Shoah", "concentration camps", "Auschwitz", "Treblinka",
          "Final Solution (Wannsee 1942)", "6 million Jews murdered",
          "Roma, disabled, LGBT, Slavs also targeted",
          "Armenian Genocide (1915, Ottoman)", "Holodomor (Stalin's Ukraine, 1932–33)",
          "Khmer Rouge (Cambodia, 1975–79)", "Pol Pot", "killing fields",
          "Rwandan Genocide (1994)", "Hutu vs Tutsi",
          "Bosnian Genocide (1992–95)", "Srebrenica massacre",
          "ethnic cleansing", "UN Genocide Convention (1948)",
        ],
      },
      {
        code: "7.R",
        title: "Full Unit 7 Review",
        summary:
          "Heimler's full Unit 7 cram — collapse of old empires, both world wars, the Great Depression, fascism, the Holocaust, and the broader 20th-century mass atrocities.",
        isUnitSummary: true,
        highlightAllCountries: true,
        year: 1920,
      },
    ],
  },

  {
    unitNumber: 8,
    title: "Cold War and Decolonization",
    subtitle: "Superpowers, proxy wars, and new nations",
    yearStart: 1945,
    yearEnd: 1991,
    centerYear: 1965,
    videoId: "4UjI9r_l6tc",
    playlistId: "PLEHRHjICEfDVHumyadDXNRYm_SDYmilbi",
    accent: "#3b82f6",
    topics: [
      {
        code: "8.1",
        title: "Setting the Stage for the Cold War",
        summary:
          "After WWII the US and USSR emerge as superpowers with incompatible ideologies — capitalism and democracy versus communism and one-party rule. Europe is exhausted; the Cold War fills the vacuum.",
        year: 1947,
        empireIds: ["usa", "soviet-union"],
        poiIds: ["washington", "moscow", "berlin", "london"],
        mentions: [
          "Yalta + Potsdam Conferences (1945)", "Truman", "Stalin", "Churchill",
          "United Nations (1945)", "Marshall Plan (1948)",
          "Truman Doctrine + containment", "George Kennan's Long Telegram",
          "Iron Curtain (Churchill speech 1946)", "Bretton Woods system",
          "IMF + World Bank founded", "Soviet eastern bloc",
          "ideological conflict: capitalism vs. communism",
        ],
      },
      {
        code: "8.2",
        title: "The Cold War",
        summary:
          "Iron Curtain, NATO vs. Warsaw Pact, the arms race, the space race, the Berlin Blockade and Wall, and the Cuban Missile Crisis as the moment it almost went hot.",
        year: 1962,
        empireIds: ["usa", "soviet-union", "prc", "cuba-castro", "north-korea", "south-korea", "communist-vietnam", "yugoslavia-tito"],
        routeIds: ["cold-war"],
        eventIds: ["cold-war-alliances", "cuban-missile", "berlin-wall"],
        poiIds: ["berlin", "moscow", "washington", "havana"],
        mentions: [
          "NATO (1949)", "Warsaw Pact (1955)",
          "arms race", "atomic + hydrogen bombs", "MAD (mutually assured destruction)",
          "ICBMs", "Sputnik (1957)", "space race", "Apollo 11 (1969)",
          "Berlin Blockade + Airlift (1948–49)", "Berlin Wall (1961)",
          "Cuban Missile Crisis (1962)", "U-2 incident",
          "McCarthyism / Red Scare", "domino theory",
        ],
      },
      {
        code: "8.3",
        title: "Effects of the Cold War",
        summary:
          "Conflict goes global through proxy wars: Korea, Vietnam, Afghanistan, Angola. Both superpowers prop up dictators in the Global South to keep the other side out.",
        year: 1965,
        empireIds: ["usa", "soviet-union", "prc", "north-korea", "south-korea", "communist-vietnam", "cuba-castro", "afghanistan-soviet", "angola-mpla"],
        eventIds: ["korean-war", "vietnam-war"],
        poiIds: ["hanoi", "saigon", "havana"],
        features: [
          { id: "korea-38", label: "Korean War", emoji: "💥", category: "movement", lat: 38.0, lng: 127.5, year: 1950, endYear: 1953, pinned: true, explanation: "1950–53 — North + China vs. South + UN. Stalemate at the 38th parallel; armistice 1953." },
          { id: "vietnam-saigon", label: "Fall of Saigon", emoji: "💥", category: "movement", lat: 10.82, lng: 106.63, year: 1975, pinned: true, explanation: "April 30, 1975 — North Vietnamese forces enter Saigon. End of the Vietnam War; reunification." },
          { id: "vietnam-tet", label: "Tet Offensive", emoji: "💥", category: "movement", lat: 16.45, lng: 107.6, year: 1968, pinned: true, explanation: "Surprise communist attacks across South Vietnam during Tet (Lunar New Year). Tactical US victory but turned American public opinion against the war." },
          { id: "afghan-war", label: "Soviet-Afghan War", emoji: "💥", category: "movement", lat: 34.5, lng: 69.17, year: 1979, endYear: 1989, pinned: true, explanation: "1979–89 — USSR invades; US-backed mujahideen resist. Soviet 'Vietnam.'" },
          { id: "angola-civil", label: "Angolan Civil War", emoji: "💥", category: "movement", lat: -8.84, lng: 13.23, year: 1975, endYear: 2002, pinned: true, explanation: "1975–2002 — Soviet/Cuban-backed MPLA vs. US/South-African-backed UNITA + FNLA." },
          { id: "cuban-missile-feat", label: "Cuban Missile Crisis", emoji: "💥", category: "movement", lat: 23.13, lng: -82.36, year: 1962, pinned: true, explanation: "13 days when the US and USSR came closest to nuclear war over Soviet missiles in Cuba." },
        ],
        mentions: [
          "Korean War (1950–53)", "38th parallel", "MacArthur",
          "Vietnam War", "Tet Offensive (1968)", "Ho Chi Minh Trail",
          "Soviet invasion of Afghanistan (1979–89)", "mujahideen",
          "Angolan Civil War", "Cuban troops in Africa",
          "Nicaragua + Contras", "Chile (Pinochet, 1973 coup)", "Allende",
          "proxy wars", "client states",
          "US backing of dictators (Iran, Indonesia, Latin America)",
          "Soviet backing of regimes (Cuba, Vietnam, Ethiopia)",
        ],
      },
      {
        code: "8.4",
        title: "Spread of Communism After 1900",
        summary:
          "Mao's communist victory in China (1949), the Great Leap Forward, and the Cultural Revolution. Castro's Cuba in 1959. Communist movements rise across Southeast Asia, Africa, and Latin America.",
        year: 1955,
        empireIds: ["prc", "soviet-union", "cuba-castro", "north-korea"],
        eventIds: ["prc-1949"],
        poiIds: ["beijing", "havana", "hanoi", "moscow"],
        features: [
          { id: "prc-1949-feat", label: "PRC founded", emoji: "💥", category: "movement", lat: 39.9, lng: 116.4, year: 1949, pinned: true, explanation: "Oct 1, 1949 — Mao announces the People's Republic of China from Tiananmen. Nationalists flee to Taiwan." },
          { id: "great-leap", label: "Great Leap Forward", emoji: "💀", category: "policy", lat: 35.0, lng: 105.0, year: 1958, endYear: 1962, pinned: true, explanation: "Mao's forced collectivization + backyard furnaces. Famine killed ~30 million people. Largest single-decade death toll in modern history." },
          { id: "cultural-rev", label: "Cultural Revolution", emoji: "💥", category: "movement", lat: 39.9, lng: 116.4, year: 1966, endYear: 1976, pinned: true, explanation: "Mao mobilized youth (Red Guards) against 'old' culture and party rivals. Schools closed; intellectuals exiled or killed." },
          { id: "cuban-rev", label: "Cuban Revolution", emoji: "💥", category: "movement", lat: 23.13, lng: -82.36, year: 1959, pinned: true, explanation: "Castro overthrows the US-backed Batista. Cuba becomes the first communist state in the Americas." },
        ],
        mentions: [
          "Mao Zedong", "Chinese Communist Party", "Long March (1934–35)",
          "Chinese Civil War", "PRC founded (Oct 1, 1949)",
          "Great Leap Forward (1958–62)", "famine deaths (~30 million)",
          "Cultural Revolution (1966–76)", "Red Guards", "Little Red Book",
          "Sino-Soviet Split (1960s)",
          "Fidel Castro", "Cuban Revolution (1959)", "Bay of Pigs (1961)",
          "Che Guevara", "Sandinistas (Nicaragua)",
        ],
      },
      {
        code: "8.5",
        title: "Decolonization After 1900",
        summary:
          "India and Pakistan partition (1947), Ghana under Nkrumah (1957), Algeria after a brutal war (1962), Vietnam from France then the US, and a wave of African independence in the 1960s.",
        year: 1960,
        empireIds: ["modern-india", "pakistan", "modern-vietnam", "ghana", "algeria", "indonesia"],
        eventIds: ["indian-indep", "decolonization", "vietnam-war"],
        poiIds: ["kolkata", "mumbai", "hanoi", "saigon"],
        mentions: [
          "India + Pakistan partition (1947)", "Gandhi assassinated (1948)",
          "Jawaharlal Nehru", "Muhammad Ali Jinnah",
          "Ghana independence (1957)", "Kwame Nkrumah",
          "Algerian War (1954–62)", "FLN", "Battle of Algiers",
          "Vietnamese independence (Dien Bien Phu, 1954)",
          "Year of Africa (1960)", "17 nations independent",
          "Mau Mau Uprising (Kenya)", "Apartheid in South Africa",
          "Suez Crisis (1956)", "Nasser nationalizes the canal",
        ],
      },
      {
        code: "8.6",
        title: "Newly Independent States",
        summary:
          "New states navigate Cold War pressure with the Non-Aligned Movement (Nehru, Nasser, Tito). The creation of Israel in 1948 and the resulting Arab-Israeli wars reshape the Middle East.",
        year: 1955,
        empireIds: ["modern-india", "modern-egypt", "indonesia", "israel", "pakistan", "modern-vietnam", "ghana", "algeria", "yugoslavia-tito", "iran-republic"],
        eventIds: ["non-aligned"],
        poiIds: ["jerusalem", "cairo", "tehran"],
        mentions: [
          "Non-Aligned Movement (Bandung 1955)",
          "Jawaharlal Nehru", "Gamal Abdel Nasser", "Sukarno", "Tito (Yugoslavia)",
          "Israel founded (1948)", "Arab-Israeli wars (1948, 1967, 1973)",
          "Yom Kippur War", "Six-Day War", "1973 oil embargo",
          "OPEC", "Iranian Revolution (1979)", "Ayatollah Khomeini",
          "Mosaddegh + 1953 coup", "Indo-Pakistani Wars",
          "Bangladesh Liberation War (1971)",
          "ujamaa (Tanzania, Nyerere)",
        ],
      },
      {
        code: "8.7",
        title: "Global Resistance to Established Power Structures",
        summary:
          "Civil rights in the US, anti-apartheid in South Africa, Tiananmen Square in China, Solidarity in Poland, and second-wave feminism — protest movements challenge entrenched power on both sides of the Iron Curtain.",
        year: 1985,
        empireIds: ["usa", "soviet-union", "prc", "south-africa-apartheid"],
        poiIds: ["washington", "beijing", "berlin", "witwatersrand"],
        features: [
          { id: "tiananmen", label: "Tiananmen Square", emoji: "💥", category: "movement", lat: 39.9, lng: 116.4, year: 1989, pinned: true, explanation: "June 4, 1989 — Chinese army crushes pro-democracy protests in Beijing. Hundreds to thousands killed." },
          { id: "selma", label: "Selma march", emoji: "✊", category: "movement", lat: 32.41, lng: -87.02, year: 1965, pinned: true, explanation: "March 1965 — civil rights march from Selma to Montgomery. 'Bloody Sunday' on the Edmund Pettus Bridge. Helped pass the Voting Rights Act." },
          { id: "mandela-free", label: "Mandela released", emoji: "✊", category: "movement", lat: -33.9, lng: 18.42, year: 1990, pinned: true, explanation: "Feb 11, 1990 — Nelson Mandela freed after 27 years. Apartheid ends 1994 with the first multiracial election." },
          { id: "solidarity", label: "Solidarity (Poland)", emoji: "✊", category: "movement", lat: 54.35, lng: 18.65, year: 1980, pinned: true, explanation: "Lech Wałęsa's labor-movement-turned-political party. First non-communist government in Eastern Europe (1989)." },
        ],
        mentions: [
          "US Civil Rights Movement", "Martin Luther King Jr.", "Selma",
          "1964 Civil Rights Act", "Voting Rights Act 1965",
          "anti-apartheid in South Africa", "Nelson Mandela", "ANC",
          "Tiananmen Square (1989)", "Solidarity (Poland, Lech Wałęsa, 1980)",
          "second-wave feminism", "third-wave feminism",
          "Stonewall Riots (1969)", "LGBT rights",
          "Praha Spring (1968)", "Soviet invasion of Czechoslovakia",
          "1968 protests (Paris, Mexico City, Chicago)",
        ],
      },
      {
        code: "8.8",
        title: "End of the Cold War",
        summary:
          "Gorbachev's glasnost and perestroika, the fall of the Berlin Wall (1989), and the dissolution of the USSR (1991). Communist regimes across Eastern Europe collapse in a chain reaction.",
        year: 1989,
        empireIds: ["soviet-union", "usa"],
        eventIds: ["berlin-wall", "ussr-collapse"],
        poiIds: ["berlin", "moscow", "washington"],
        mentions: [
          "Mikhail Gorbachev", "perestroika (restructuring)", "glasnost (openness)",
          "Reagan", "Strategic Defense Initiative ('Star Wars')",
          "Pope John Paul II + Solidarity",
          "fall of the Berlin Wall (Nov 9, 1989)",
          "Velvet Revolution (Czechoslovakia)", "Romania (Ceaușescu executed)",
          "reunification of Germany (1990)",
          "dissolution of the USSR (Dec 25, 1991)",
          "Boris Yeltsin", "end of bipolar world", "rise of US 'unipolar moment'",
        ],
      },
      {
        code: "8.R",
        title: "Full Unit 8 Review",
        summary:
          "Heimler's full Unit 8 cram — origins of the Cold War, NATO vs. Warsaw, proxy wars, the spread of communism, decolonization, the Non-Aligned Movement, civil rights, and the Soviet collapse.",
        isUnitSummary: true,
        highlightAllCountries: true,
        year: 1965,
      },
    ],
  },

  {
    unitNumber: 9,
    title: "Globalization",
    subtitle: "A connected, contested, and changing world",
    yearStart: 1900,
    yearEnd: 2025,
    centerYear: 2000,
    videoId: "EePpwgs6syY",
    playlistId: "PLEHRHjICEfDXnx-yOpgjNqEHQISXjk4at",
    accent: "#22d3ee",
    topics: [
      {
        code: "9.1",
        title: "Advances in Technology and Exchange",
        summary:
          "Internet, cell phones, satellites, and shipping containerization compress time and distance. Capital, goods, ideas, and people move faster than ever.",
        year: 2000,
        highlightAllCountries: true,
        empireIds: ["usa", "prc", "modern-india"],
        routeIds: ["globalization"],
        poiIds: ["shenzhen", "shanghai", "singapore", "hong-kong"],
        mentions: [
          "internet (ARPANET → WWW)", "Tim Berners-Lee", "World Wide Web (1989)",
          "personal computer", "Apple, Microsoft", "Moore's Law",
          "cell phones", "smartphones (iPhone 2007)",
          "satellite communications", "GPS",
          "shipping container revolution (1956)",
          "globalized supply chains", "just-in-time manufacturing",
          "outsourcing", "offshoring (manufacturing → China, services → India)",
          "Special Economic Zones (Shenzhen 1980)",
          "Silicon Valley", "Bangalore",
        ],
      },
      {
        code: "9.2",
        title: "Technological Advances and Limitations: Disease",
        summary:
          "Vaccines and antibiotics extend life, but disease still travels — the 1918 flu, HIV/AIDS, Ebola, and COVID-19 spread along globalized networks.",
        year: 2010,
        highlightAllCountries: true,
        routeIds: ["globalization"],
        mentions: [
          "Green Revolution (Norman Borlaug)", "high-yield wheat + rice",
          "fertilizers + pesticides", "GMOs",
          "vaccines (polio, measles, smallpox eradicated 1980)",
          "antibiotic resistance",
          "1918 Spanish flu (~50 million deaths)",
          "HIV / AIDS", "ART antiretroviral therapy",
          "Ebola outbreaks", "SARS (2003)", "COVID-19 (2019–)",
          "tropical diseases (malaria) still endemic",
        ],
      },
      {
        code: "9.3",
        title: "Technology and the Environment",
        summary:
          "Climate change, deforestation, the shrinking Aral Sea, and the broader Anthropocene — the same technologies that connect us also degrade the planet at a global scale.",
        year: 2010,
        highlightAllCountries: true,
        routeIds: ["globalization"],
        mentions: [
          "anthropogenic climate change", "fossil fuels", "CO₂ emissions",
          "greenhouse effect", "global warming",
          "deforestation (Amazon)", "Aral Sea desiccation (Soviet cotton)",
          "ozone hole", "Montreal Protocol (1987)",
          "Kyoto Protocol (1997)", "Paris Agreement (2015)",
          "rising sea levels", "biodiversity loss", "species extinction",
          "the Anthropocene",
          "agricultural runoff + dead zones",
          "plastic pollution",
        ],
      },
      {
        code: "9.4",
        title: "Economics in the Global Age",
        summary:
          "Neoliberalism (Reagan, Thatcher), the IMF/World Bank/WTO, free trade agreements (NAFTA), and multinational corporations reorganize global production into supply chains.",
        year: 1995,
        highlightAllCountries: true,
        empireIds: ["usa", "prc", "modern-india"],
        routeIds: ["globalization"],
        eventIds: ["wto-1995", "deng-reform"],
        poiIds: ["washington", "london", "hong-kong", "shanghai", "shenzhen"],
        mentions: [
          "neoliberalism", "Ronald Reagan + Margaret Thatcher",
          "deregulation", "privatization", "Reaganomics",
          "Washington Consensus", "structural adjustment",
          "World Bank", "IMF", "World Trade Organization (1995)",
          "GATT predecessor", "NAFTA (1994)", "EU single market",
          "Deng Xiaoping's reforms (1978–)", "Special Economic Zones",
          "China joins WTO (2001)", "BRICS",
          "multinational corporations (MNCs)",
          "outsourcing", "offshoring", "rise of finance",
          "2008 Global Financial Crisis",
        ],
      },
      {
        code: "9.5",
        title: "Calls for Reform and Responses",
        summary:
          "Second- and third-wave feminism, environmentalism, the UN Universal Declaration of Human Rights, and movements for indigenous rights all push back on the costs of the global order.",
        year: 1990,
        highlightAllCountries: true,
        empireIds: ["usa", "soviet-union"],
        poiIds: ["washington", "paris", "moscow"],
        mentions: [
          "second-wave feminism (Friedan, NOW)",
          "third-wave feminism (Crenshaw, intersectionality)",
          "Roe v. Wade (1973)",
          "UN Universal Declaration of Human Rights (1948)",
          "International Criminal Court (2002)",
          "Indigenous rights movements", "AIM (American Indian Movement)",
          "environmentalism", "Earth Day (1970)", "Greenpeace",
          "anti-nuclear movement", "LGBT rights movements",
          "disability rights", "Negritude", "Black Power",
        ],
      },
      {
        code: "9.6",
        title: "Globalized Culture",
        summary:
          "Hollywood, K-pop, World Cup soccer, English as a global lingua franca, and consumer brands like Coke and McDonald's create a shared global pop culture — alongside fierce local resistance to it.",
        year: 2000,
        highlightAllCountries: true,
        empireIds: ["usa", "prc", "modern-india"],
        routeIds: ["globalization"],
        poiIds: ["washington", "tokyo", "london", "hong-kong"],
        mentions: [
          "Hollywood (films)", "Bollywood", "Nollywood",
          "K-pop (Korean wave)", "J-pop + anime",
          "World Cup soccer (FIFA)", "Olympics",
          "English as global lingua franca",
          "McDonald's", "Coca-Cola", "Starbucks", "Nike",
          "Disneyfication", "Americanization", "cultural homogenization",
          "hybridization / glocalization",
          "internet memes + viral culture",
          "Netflix + global streaming",
        ],
      },
      {
        code: "9.7",
        title: "Resistance to Globalization",
        summary:
          "Religious fundamentalism and terrorism (9/11, Al-Qaeda, ISIS), anti-globalization protests (Seattle 1999), and the recent rise of economic nationalism all push back on the global order.",
        year: 2001,
        highlightAllCountries: true,
        empireIds: ["usa"],
        eventIds: ["9-11"],
        poiIds: ["washington", "tehran"],
        mentions: [
          "religious fundamentalism", "Iranian Revolution (1979)",
          "Hezbollah", "Hamas",
          "Al-Qaeda", "Osama bin Laden", "9/11 attacks (2001)",
          "War on Terror", "Afghanistan invasion (2001)",
          "Iraq War (2003)", "ISIS / Daesh",
          "Taliban",
          "anti-globalization protests", "Battle of Seattle (WTO 1999)",
          "Occupy Wall Street (2011)", "Arab Spring (2010–11)",
          "Brexit (2016)", "rise of populism + economic nationalism",
        ],
      },
      {
        code: "9.8–9.9",
        title: "Global Institutions and Continuity & Change",
        summary:
          "UN, WHO, World Bank, IMF, NGOs (Greenpeace, Amnesty), regional blocs (EU, ASEAN, Mercosur). What changed (instant communication, multinational economies) and what didn't (inequality, ethnic conflict).",
        year: 2010,
        highlightAllCountries: true,
        empireIds: ["usa", "prc", "modern-india"],
        routeIds: ["globalization"],
        eventIds: ["wto-1995", "9-11", "ussr-collapse"],
        poiIds: ["washington", "london", "shanghai", "hong-kong", "shenzhen", "singapore"],
        mentions: [
          "United Nations", "WHO", "World Bank", "IMF", "WTO",
          "NGOs", "Greenpeace", "Amnesty International", "Doctors Without Borders",
          "European Union (Maastricht 1993)", "Eurozone",
          "ASEAN", "Mercosur", "African Union (2002)", "G7 / G20",
          "International Criminal Court (2002)",
          "what changed: instant communication, multinational economies, cultural blending",
          "what stayed: global inequality, ethnic conflict, environmental limits, religion as motivator",
        ],
      },
      {
        code: "9.R",
        title: "Full Unit 9 Review",
        summary:
          "Heimler's full Unit 9 cram — globalization in tech, economy, environment, culture, and politics. Every country on Earth is in this story.",
        isUnitSummary: true,
        highlightAllCountries: true,
        year: 2000,
      },
    ],
  },
];

export const heimlerUnits: HeimlerUnit[] = rawUnits.map((u) => ({
  ...u,
  videoUrl: `https://www.youtube.com/watch?v=${u.videoId}&list=${u.playlistId}`,
  playlistUrl: `https://www.youtube.com/playlist?list=${u.playlistId}`,
  topics: u.topics.map((t, i) => ({
    ...t,
    videoUrl: topicVideoUrl(u.playlistId, u.videoId, i + 1),
  })),
}));

export type TopicLocation = {
  unit: HeimlerUnit;
  topic: HeimlerTopic;
};

export function findTopic(unitNumber: number, code: string): TopicLocation | null {
  const unit = heimlerUnits.find((u) => u.unitNumber === unitNumber);
  if (!unit) return null;
  const topic = unit.topics.find((t) => t.code === code);
  if (!topic) return null;
  return { unit, topic };
}
