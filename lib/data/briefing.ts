// All study content here is paraphrased from the user's briefing.txt — nothing
// added beyond what's in the briefing. Each Big Idea has the focus coords for
// the globe, the regions to spotlight, the bullets the user wrote, the "cool
// stuff" to drop on the map, and a sample SAQ + CER answer (per the briefing's
// "Show some very common SAQ … and CER for SAQ" instructions).

export type LatLng = { lat: number; lng: number };

export type BigIdeaFeature = {
  id: string;
  emoji: string;
  label: string;
  /** One-line context shown next to the marker. */
  blurb: string;
  /** Single point — drop a pin / emoji here. */
  lat?: number;
  lng?: number;
  /** Optional path drawn on the surface (Mansa Musa hajj, Salt March, etc.). */
  path?: LatLng[];
  /** Override marker color — defaults to unit accent. */
  color?: string;
};

export type BigIdeaSAQ = {
  prompt: string;
  /**
   * Briefing said: "CER for SAQ not TEA". So every sample answer is broken into
   * Claim → Evidence → Reasoning. (Each part 1–3 sentences.)
   */
  cer: { claim: string; evidence: string; reasoning: string };
};

export type BigIdea = {
  id: string;
  unitNumber: number;
  ideaNumber: number;
  title: string;
  /** The thesis sentence (verbatim from briefing where possible). */
  thesis: string;
  /** Year the globe scrubs to. */
  year: number;
  endYear?: number;
  /** Camera target. */
  focus: { lat: number; lng: number; altitude: number };
  /** home-region IDs (regionPalette keys) to glow brighter than the base tint. */
  spotlightRegions: string[];
  /** Specific ISO A3 codes to override with the unit accent. */
  spotlightCountries?: string[];
  /** The user's bullets — kept paraphrased but faithful. */
  bullets: string[];
  /** Cool things to show on the globe (markers, paths). */
  features: BigIdeaFeature[];
  /** Optional sample SAQ in CER format. */
  saq?: BigIdeaSAQ;
  /** Optional Venn diagram — comparing two of the things in this idea. */
  venn?: { left: string; right: string; leftOnly: string[]; rightOnly: string[]; both: string[] };
};

export type BriefingUnit = {
  unitNumber: number;
  title: string;
  yearStart: number;
  yearEnd: number;
  accent: string;
  blurb: string;
  bigIdeas: BigIdea[];
};

// ---------------------------------------------------------------------------
// UNIT 1 — The Global Tapestry
// ---------------------------------------------------------------------------

const unit1: BriefingUnit = {
  unitNumber: 1,
  title: "The Global Tapestry",
  yearStart: 1200,
  yearEnd: 1450,
  accent: "#f59e0b",
  blurb: "States and societies before the great convergence — Song China, Dar al-Islam, the Americas, Africa, and feudal Europe.",
  bigIdeas: [
    {
      id: "u1-bi1",
      unitNumber: 1,
      ideaNumber: 1,
      title: "Song China",
      thesis: "Song China justified rule through Confucianism and the imperial bureaucracy — appointed officials carried out policies across the empire while Chan Buddhism, Champa rice, and the Grand Canal kept the economy flourishing.",
      year: 1100,
      focus: { lat: 33.5, lng: 113.0, altitude: 1.7 },
      spotlightRegions: ["china"],
      spotlightCountries: ["CHN"],
      bullets: [
        "Civil service exam (Confucian classics) staffed an imperial bureaucracy → consolidates power across a vast empire.",
        "Buddhism continued to shape Chinese society — outside influence from India.",
        "Chan Buddhism = Chinese Buddhism → spread to Korea, Japan, Vietnam (cultural diffusion).",
        "Song economy flourished — bureaucracy was already there, the Song expanded it.",
        "Champa rice (from Vietnam) + the Grand Canal made the Song an economic powerhouse.",
      ],
      features: [
        { id: "civil-exam", emoji: "📜", label: "Civil service exam", blurb: "Confucian-classics test that staffed the bureaucracy.", lat: 34.78, lng: 113.65 },
        { id: "champa-rice", emoji: "🌾", label: "Champa rice", blurb: "Fast-ripening rice imported from Vietnam — fueled the Song population boom.", lat: 16.0, lng: 108.0 },
        { id: "grand-canal", emoji: "🛶", label: "Grand Canal", blurb: "1,100-mi waterway moving tribute grain north.", path: [
          { lat: 39.9, lng: 116.4 }, { lat: 36.84, lng: 116.0 }, { lat: 33.6, lng: 119.0 },
          { lat: 32.21, lng: 119.45 }, { lat: 31.3, lng: 120.6 }, { lat: 30.27, lng: 120.16 },
        ] },
        { id: "chan-buddhism", emoji: "☸️", label: "Chan Buddhism", blurb: "Chinese form of Buddhism — diffused to Korea & Japan.", lat: 30.07, lng: 112.0 },
      ],
      saq: {
        prompt: "Identify ONE way the Song dynasty consolidated political power in the period 1200–1450.",
        cer: {
          claim: "Song China consolidated power by expanding the imperial civil service exam and bureaucracy.",
          evidence: "The Song expanded the Confucian civil-service exam and used appointed scholar-officials to run an empire-wide bureaucracy that collected taxes and enforced policy.",
          reasoning: "By staffing offices with men whose loyalty came from a Confucian education (not noble birth), the dynasty replaced regional warlords with a state-trained class — making centralized rule durable across a huge territory.",
        },
      },
    },
    {
      id: "u1-bi2",
      unitNumber: 1,
      ideaNumber: 2,
      title: "Dar al-Islam after the Abbasids",
      thesis: "As the Abbasid Caliphate fell apart, new Turkic Islamic entities (Delhi & Mamluk Sultanates) became Dar al-Islam — and Islam spread through military expansion, merchants, and a wave of intellectual transfer.",
      year: 1300,
      focus: { lat: 30.0, lng: 50.0, altitude: 2.0 },
      spotlightRegions: ["middleEast", "westAfrica", "india"],
      spotlightCountries: ["IRN", "IRQ", "EGY", "TUR", "IND", "MLI"],
      bullets: [
        "Abbasid Caliphate falling apart → new Islamic political entities (Delhi Sultanate, Mamluk Sultanate). Different from Abbasids — they were Turkic.",
        "Islam spread by military expansion (Delhi Sultanate).",
        "Islam spread through merchants — Silk Road revival, West Africa.",
        "Algebra + Trig invented by Islamic scholars; Greek classics translated into Arabic → fueled Renaissance.",
        "Transferred Indian mathematics to Europeans; adopted paper-making from China → carried it to Europe.",
      ],
      features: [
        { id: "delhi-sultanate", emoji: "🏛️", label: "Delhi Sultanate", blurb: "Turkic Muslim sultanate ruling much of N India.", lat: 28.6, lng: 77.2 },
        { id: "mamluk", emoji: "⚔️", label: "Mamluk Sultanate", blurb: "Slave-soldier dynasty in Egypt + Syria. Stopped the Mongols at Ain Jalut (1260).", lat: 30.0, lng: 31.2 },
        { id: "house-wisdom", emoji: "📚", label: "Translation of Greek classics", blurb: "Arabic scholars translated Greek philosophy → fed back into Europe.", lat: 33.3, lng: 44.4 },
        { id: "paper", emoji: "📄", label: "Paper-making", blurb: "Adopted from China → relayed through Dar al-Islam to Europe.", lat: 39.9, lng: 32.85 },
      ],
      saq: {
        prompt: "Identify ONE way Dar al-Islam contributed to intellectual life in Afro-Eurasia during 1200–1450.",
        cer: {
          claim: "Muslim scholars served as a transmission bridge for classical and Indian knowledge into Europe.",
          evidence: "Scholars in Baghdad and Iberian al-Andalus translated Greek philosophy into Arabic, developed algebra and trigonometry, and passed on Indian numerals plus Chinese paper-making.",
          reasoning: "Because Latin Europe had largely lost direct access to these works, this Islamic intellectual hub gave the later Renaissance the texts and tools it needed — Dar al-Islam wasn't just receiving knowledge, it was actively producing and rerouting it.",
        },
      },
    },
    {
      id: "u1-bi3",
      unitNumber: 1,
      ideaNumber: 3,
      title: "South & SE Asia: Hinduism, Buddhism, Islam",
      thesis: "Hinduism, Buddhism, and Islam deeply influenced state-building in South and Southeast Asia — Delhi, Vijayanagara, Srivijaya, Majapahit.",
      year: 1350,
      focus: { lat: 12.0, lng: 95.0, altitude: 2.0 },
      spotlightRegions: ["india", "seasia"],
      spotlightCountries: ["IND", "IDN", "MYS", "THA", "VNM"],
      bullets: [
        "Delhi Sultanate ruled a Hindu-majority population — non-Muslims paid the jizya tax; conversion = social mobility.",
        "Vijayanagara: two brothers sent south to claim land for Delhi reconverted to Hinduism and founded a new empire.",
        "Merchants brought Hinduism + Buddhism into Southeast Asia.",
        "Srivijaya — Hindu kingdom that prospered by taxing ships in the sea lanes.",
        "Majapahit — Buddhist kingdom that controlled trade routes.",
      ],
      features: [
        { id: "vijayanagara", emoji: "🛕", label: "Vijayanagara Empire", blurb: "Hindu South Indian empire founded by reconverted brothers.", lat: 15.34, lng: 76.46 },
        { id: "srivijaya", emoji: "⛵", label: "Srivijaya", blurb: "Hindu kingdom that taxed ships in the Strait of Malacca.", lat: -3.0, lng: 105.0 },
        { id: "majapahit", emoji: "🪷", label: "Majapahit", blurb: "Buddhist Javanese trade empire.", lat: -7.5, lng: 112.5 },
        { id: "jizya", emoji: "💰", label: "Jizya tax", blurb: "Tax non-Muslims paid in the Delhi Sultanate.", lat: 28.6, lng: 77.2 },
      ],
      saq: {
        prompt: "Explain ONE way that religion shaped state-building in South or Southeast Asia, 1200–1450.",
        cer: {
          claim: "In Southeast Asia, Hindu and Buddhist kingdoms used religion to legitimize their control of maritime trade.",
          evidence: "Srivijaya, a Hindu kingdom, taxed ships passing through the Strait of Malacca, while the Buddhist Majapahit dominated the same sea lanes a century later.",
          reasoning: "Tying the ruler to a universal religion gave the dynasty a moral claim over merchants of many origins, which made it possible to demand tariffs across a far-flung sea-lane network rather than just a single river valley.",
        },
      },
    },
    {
      id: "u1-bi4",
      unitNumber: 1,
      ideaNumber: 4,
      title: "Civilizations of the Americas",
      thesis: "Various civilizations of the Americas developed strong states, large urban centers, and complex belief systems — Cahokia, Mexica/Aztec, Maya legacy, Inca.",
      year: 1450,
      focus: { lat: 5.0, lng: -75.0, altitude: 2.2 },
      spotlightRegions: ["latinAmerica", "northAmerica"],
      spotlightCountries: ["MEX", "GTM", "PER", "BOL", "USA"],
      bullets: [
        "Cahokia, Aztecs (after Maya / Tenochtitlan), Inca — all show ziggurat-style monumental architecture.",
        "Aztec empire: tribute system, decentralized state — local government extracted tribute.",
        "Continuity from Maya: human sacrifice carried over into the Aztec world.",
      ],
      features: [
        { id: "tenochtitlan", emoji: "🏯", label: "Tenochtitlán", blurb: "Aztec capital — built on Lake Texcoco.", lat: 19.43, lng: -99.13 },
        { id: "cuzco", emoji: "🏔️", label: "Cuzco", blurb: "Inca capital, sun-temple at the heart.", lat: -13.53, lng: -71.97 },
        { id: "cahokia", emoji: "⛰️", label: "Cahokia", blurb: "Mound-builder city in N America.", lat: 38.66, lng: -90.06 },
        { id: "tribute", emoji: "📦", label: "Aztec tribute", blurb: "Decentralized state — local rulers sent goods + people to the capital.", lat: 19.43, lng: -99.13 },
      ],
      saq: {
        prompt: "Identify ONE continuity in the political organization of the Mesoamerican civilizations 1200–1450.",
        cer: {
          claim: "Mesoamerican states continued the Maya practice of decentralized rule paired with religious legitimization.",
          evidence: "The Aztec empire let local governments extract tribute on its behalf and continued the Maya practice of human sacrifice as a public religious act.",
          reasoning: "Holding the empire together through ritual obligation rather than direct administration meant new conquests could be absorbed without rebuilding institutions — a continuity that helped the empire grow fast but also made it brittle when a single conquest (Tenochtitlán) was lost.",
        },
      },
    },
    {
      id: "u1-bi5",
      unitNumber: 1,
      ideaNumber: 5,
      title: "African States: Trade & Religion",
      thesis: "African state-building was facilitated through participation in trade networks and religion — Great Zimbabwe, the Swahili Coast, and Christian Ethiopia.",
      year: 1300,
      focus: { lat: -10.0, lng: 30.0, altitude: 2.0 },
      spotlightRegions: ["southAfrica", "westAfrica"],
      spotlightCountries: ["ZWE", "ETH", "TZA", "KEN", "MOZ"],
      bullets: [
        "Great Zimbabwe — agriculture + gold; participated in the Indian Ocean trade network.",
        "Connected through Indian Ocean trade to many far-off places.",
        "Swahili language: indigenous Bantu mixed with Arabic — cultural diffusion from merchant contact.",
        "Capital city of Great Zimbabwe was massive (monumental architecture).",
        "Ethiopia stood out as a Christian kingdom — consolidated power through monumental architecture.",
      ],
      features: [
        { id: "great-zim", emoji: "🪨", label: "Great Zimbabwe", blurb: "Stone-walled royal city — gold and cattle wealth.", lat: -20.27, lng: 30.93 },
        { id: "swahili", emoji: "🗣️", label: "Swahili language", blurb: "Bantu + Arabic blend — born of merchant contact.", lat: -6.0, lng: 39.0 },
        { id: "ethiopia", emoji: "✝️", label: "Christian Ethiopia", blurb: "Rock-hewn churches at Lalibela. Christian state in Africa.", lat: 12.03, lng: 39.04 },
        { id: "swahili-trade", emoji: "⛵", label: "Swahili Coast → Calicut", blurb: "Kilwa → Mombasa → Mogadishu → Aden → Arabian Sea → Calicut. Gold and ivory out, cloth and porcelain back.", color: "#06b6d4", path: [
          { lat: -8.96, lng: 39.51 },   // Kilwa (offshore — keeps the line off shore)
          { lat: -6.16, lng: 39.20 },   // Zanzibar
          { lat: -4.05, lng: 39.67 },   // Mombasa
          { lat: 2.05, lng: 45.32 },    // Mogadishu
          { lat: 11.5, lng: 43.3 },     // Bab al-Mandeb
          { lat: 12.78, lng: 45.04 },   // Aden
          { lat: 12.5, lng: 53.0 },     // Socotra
          { lat: 14.0, lng: 64.0 },     // mid-Arabian Sea
          { lat: 11.25, lng: 75.78 },   // Calicut
        ] },
      ],
      saq: {
        prompt: "Explain ONE effect of Indian Ocean trade on East African societies, 1200–1450.",
        cer: {
          claim: "Indian Ocean trade produced the Swahili coastal city-states and a new lingua franca, Swahili.",
          evidence: "Cities like Kilwa and Mombasa grew rich on gold and ivory exports, and Swahili emerged as a Bantu-Arabic creole used by merchants up and down the coast.",
          reasoning: "The trade didn't just enrich elites — it forced cultural mixing serious enough to spawn an entirely new language, which is the clearest possible sign that exchange was reshaping daily East African society, not just its economy.",
        },
      },
    },
    {
      id: "u1-bi6",
      unitNumber: 1,
      ideaNumber: 6,
      title: "Feudal Europe",
      thesis: "State-building in Europe was characterized by religious belief, feudalism, and decentralized monarchies — no large empire, lots of manors.",
      year: 1300,
      focus: { lat: 48.0, lng: 5.0, altitude: 1.9 },
      spotlightRegions: ["europe", "iberia"],
      spotlightCountries: ["FRA", "DEU", "GBR", "ESP", "ITA"],
      bullets: [
        "Roman Catholic Church was hugely important.",
        "Strong Muslim presence in Iberia — site of major text transfer; Muslims and Jews ejected by Ferdinand & Isabella.",
        "European states stayed decentralized — no unified empire.",
        "Feudalism: king grants land to nobles; nobles give service / tribute, hire knights; peasants work the land. Manorial system — a manor is a whole village; serfs rarely leave.",
        "Three-field system in agriculture — crops rotated through 3 fields, one fallow → more food → population growth → more power.",
      ],
      features: [
        { id: "manor", emoji: "🏰", label: "Manor", blurb: "Self-contained village — lord, knights, peasants.", lat: 47.5, lng: 2.0 },
        { id: "iberia-transfer", emoji: "📚", label: "Iberian text transfer", blurb: "Muslim al-Andalus relayed classical texts to Latin Europe.", lat: 37.39, lng: -5.99 },
        { id: "three-field", emoji: "🌾", label: "Three-field system", blurb: "Crop rotation w/ a fallow third — boosted yields.", lat: 50.0, lng: 8.0 },
        { id: "rcc", emoji: "✝️", label: "Roman Catholic Church", blurb: "Spiritual + political authority across Europe.", lat: 41.9, lng: 12.46 },
      ],
      saq: {
        prompt: "Identify ONE way feudalism shaped European political life in the period 1200–1450.",
        cer: {
          claim: "Feudalism kept European political authority decentralized.",
          evidence: "Kings granted land to nobles in exchange for military service; those nobles, in turn, hired knights and ran their own manors with peasant labor.",
          reasoning: "Because real power lived at the manor level — not at a centralized capital — Europe couldn't field a single large empire the way the Song or Abbasids had, and the Catholic Church ended up filling the role of the only Europe-wide institution.",
        },
      },
    },
  ],
};

// ---------------------------------------------------------------------------
// UNIT 2 — Networks of Exchange
// ---------------------------------------------------------------------------

const unit2: BriefingUnit = {
  unitNumber: 2,
  title: "Networks of Exchange",
  yearStart: 1200,
  yearEnd: 1450,
  accent: "#10b981",
  blurb: "Silk Roads, Indian Ocean, Trans-Saharan trade — and the Mongols who tied it all together.",
  bigIdeas: [
    {
      id: "u2-bi1",
      unitNumber: 2,
      ideaNumber: 1,
      title: "Trade Networks Expand",
      thesis: "Networks of exchange expanded in geographical scope and led to increasing interactions between states.",
      year: 1300,
      focus: { lat: 35.0, lng: 70.0, altitude: 2.4 },
      spotlightRegions: ["china", "middleEast", "india", "westAfrica"],
      bullets: [
        "Silk Roads carried luxury goods (silk, porcelain). Cities along the route grew — Kashgar, Samarkand.",
        "Caravanserai = inn/guesthouses about a day's travel apart for merchants.",
        "New animal tech: yokes, saddles, stirrups.",
        "Commercial tech: paper money first developed in China; new forms of credit.",
        "Indian Ocean Network: spices from SE Asia, enslaved people from Africa. Lateen sails, magnetic compass, astrolabe, Chinese junk, Arab dhow. Spread of Islam. Swahili city-states grew.",
        "Trans-Saharan network connected N Africa & Mediterranean with W African interior — Arabian camel + camel saddle made it go.",
      ],
      features: [
        { id: "silk-road", emoji: "🐫", label: "Silk Road", blurb: "Chang'an → Hexi Corridor → Tarim Basin → Pamirs → Sogdia → Persia → Levant → Constantinople. Luxury goods over land.", color: "#fbbf24", path: [
          { lat: 34.34, lng: 108.94 }, // Chang'an (Xi'an)
          { lat: 36.06, lng: 103.83 }, // Lanzhou
          { lat: 37.93, lng: 102.64 }, // Wuwei (Hexi Corridor)
          { lat: 38.93, lng: 100.45 }, // Zhangye
          { lat: 39.74, lng: 98.51 },  // Jiuquan
          { lat: 40.14, lng: 94.66 },  // Dunhuang
          { lat: 42.94, lng: 89.18 },  // Turpan (northern Tarim route)
          { lat: 41.70, lng: 82.96 },  // Kucha
          { lat: 41.17, lng: 80.26 },  // Aksu
          { lat: 39.47, lng: 75.99 },  // Kashgar (Pamir gateway)
          { lat: 39.77, lng: 64.42 },  // Bukhara
          { lat: 39.65, lng: 66.97 },  // Samarkand
          { lat: 37.66, lng: 61.83 },  // Merv
          { lat: 36.21, lng: 58.79 },  // Nishapur
          { lat: 35.69, lng: 51.42 },  // Rey (Tehran)
          { lat: 34.80, lng: 48.51 },  // Hamadan
          { lat: 33.31, lng: 44.36 },  // Baghdad
          { lat: 34.55, lng: 38.27 },  // Palmyra
          { lat: 33.51, lng: 36.27 },  // Damascus
          { lat: 36.20, lng: 36.16 },  // Antioch
          { lat: 41.01, lng: 28.98 },  // Constantinople
        ] },
        { id: "indian-ocean-route", emoji: "⛵", label: "Indian Ocean route", blurb: "Guangzhou → Malacca Strait → Sri Lanka → Calicut → Arabian Sea → Aden → Swahili coast. Stays in real ocean, riding monsoon winds.", color: "#06b6d4", path: [
          { lat: 23.13, lng: 113.27 }, // Guangzhou
          { lat: 16.06, lng: 110.0 },  // South China Sea (offshore Vietnam)
          { lat: 8.0, lng: 107.5 },    // S. China Sea south
          { lat: 1.35, lng: 103.82 },  // Singapore Strait
          { lat: 2.20, lng: 102.25 },  // Malacca
          { lat: 6.03, lng: 80.21 },   // Galle, Sri Lanka
          { lat: 8.0, lng: 76.9 },     // SW tip of India coast
          { lat: 11.25, lng: 75.78 },  // Calicut (Malabar Coast)
          { lat: 14.0, lng: 64.0 },    // mid-Arabian Sea
          { lat: 12.5, lng: 53.0 },    // Socotra
          { lat: 12.78, lng: 45.04 },  // Aden
          { lat: 11.5, lng: 43.3 },    // Bab al-Mandeb
          { lat: 2.05, lng: 45.32 },   // Mogadishu
          { lat: -4.05, lng: 39.67 },  // Mombasa
          { lat: -8.96, lng: 39.51 },  // Kilwa
        ] },
        { id: "indian-ocean-gulf", emoji: "⛵", label: "Persian Gulf branch", blurb: "Calicut → Hormuz. Branch of Indian Ocean trade into the Persian Gulf.", color: "#22d3ee", path: [
          { lat: 11.25, lng: 75.78 },  // Calicut
          { lat: 18.0, lng: 65.0 },    // Arabian Sea
          { lat: 23.6, lng: 58.5 },    // Muscat
          { lat: 27.10, lng: 56.46 },  // Hormuz
        ] },
        { id: "trans-saharan-route", emoji: "🐪", label: "Trans-Saharan route", blurb: "Marrakech → Sijilmasa → Taghaza salt mines → Timbuktu → Gao. Gold, salt, slaves on Arabian camels.", color: "#d97706", path: [
          { lat: 31.63, lng: -7.99 },  // Marrakech
          { lat: 31.28, lng: -4.28 },  // Sijilmasa
          { lat: 23.55, lng: -4.85 },  // Taghaza
          { lat: 17.30, lng: -7.04 },  // Walata
          { lat: 16.77, lng: -3.01 },  // Timbuktu
          { lat: 16.27, lng: -0.04 },  // Gao
        ] },
        { id: "samarkand", emoji: "🏙️", label: "Samarkand", blurb: "Silk Road hub city — gateway between China and Persia.", lat: 39.65, lng: 66.97 },
        { id: "kashgar", emoji: "🏙️", label: "Kashgar", blurb: "Silk Road hub at the foot of the Pamirs.", lat: 39.47, lng: 75.99 },
        { id: "caravanserai", emoji: "🏨", label: "Caravanserai", blurb: "Day's-travel guesthouse for caravans.", lat: 35.69, lng: 51.42 },
        { id: "camel", emoji: "🐪", label: "Arabian camel + saddle", blurb: "Made trans-Saharan caravans possible.", lat: 22.0, lng: 5.0 },
      ],
      saq: {
        prompt: "Identify ONE technological innovation that contributed to the growth of an Afro-Eurasian trade network 1200–1450.",
        cer: {
          claim: "The lateen sail allowed merchants to use the Indian Ocean monsoon winds in both directions.",
          evidence: "The triangular lateen sail, paired with the magnetic compass and the astrolabe, was used on Arab dhows and Chinese junks to travel reliably between East Africa, Arabia, India, and Southeast Asia.",
          reasoning: "Without a sail that could tack into the wind, merchants would have been stuck waiting six months for the monsoon to flip — the lateen sail was what turned a seasonal route into a year-round commercial system.",
        },
      },
    },
    {
      id: "u2-bi2",
      unitNumber: 2,
      ideaNumber: 2,
      title: "Cultural Diffusion",
      thesis: "A major effect of the growth of trade routes was cultural diffusion.",
      year: 1300,
      focus: { lat: 30.0, lng: 70.0, altitude: 2.5 },
      spotlightRegions: ["china", "middleEast", "india", "westAfrica", "seasia"],
      bullets: [
        "Trading ideas — religions, art, technology — spread along with goods.",
        "Buddhism, Islam, and Chinese inventions diffused along the routes.",
      ],
      features: [
        { id: "buddhism-path", emoji: "☸️", label: "Buddhism diffusion", blurb: "Bodh Gaya → Luoyang → Korea → Japan → Sukhothai. Carried by monks and merchants along the Silk Road.", color: "#fbbf24", path: [
          { lat: 24.7, lng: 84.99 },    // Bodh Gaya, India
          { lat: 34.62, lng: 112.45 },  // Luoyang, China
          { lat: 35.86, lng: 129.22 },  // Gyeongju, Korea
          { lat: 34.69, lng: 135.83 },  // Nara, Japan
        ] },
        { id: "buddhism-sea", emoji: "🪷", label: "Buddhism (sea route)", blurb: "Indian Ocean spread to mainland & maritime SE Asia.", color: "#a855f7", path: [
          { lat: 24.7, lng: 84.99 },    // Bodh Gaya
          { lat: 11.25, lng: 75.78 },   // Calicut
          { lat: 17.02, lng: 99.82 },   // Sukhothai (Theravada)
          { lat: -7.5, lng: 110.4 },    // Java
        ] },
        { id: "islam-path", emoji: "☪️", label: "Islam diffusion", blurb: "Mecca → Cairo → Kilwa & Mecca → Calicut → Malacca → Sumatra. Spread by merchants on Indian Ocean.", color: "#10b981", path: [
          { lat: 21.42, lng: 39.83 },   // Mecca
          { lat: 30.04, lng: 31.24 },   // Cairo
          { lat: -8.96, lng: 39.51 },   // Kilwa
        ] },
        { id: "islam-east", emoji: "☪️", label: "Islam → SE Asia", blurb: "Indian Ocean merchant route brought Islam to SE Asia.", color: "#10b981", path: [
          { lat: 21.42, lng: 39.83 },   // Mecca
          { lat: 11.25, lng: 75.78 },   // Calicut
          { lat: 2.20, lng: 102.25 },   // Malacca
          { lat: -7.5, lng: 110.4 },    // Java (eventually)
        ] },
      ],
      saq: {
        prompt: "Explain ONE example of cultural diffusion along the Silk Roads, 1200–1450.",
        cer: {
          claim: "Buddhism diffused along the Silk Roads from India and China into Korea, Japan, and Southeast Asia.",
          evidence: "Chan Buddhism, the Chinese form, traveled along the trade routes into Korean Goryeo and Japanese Zen monasteries.",
          reasoning: "Goods are easy to ship; ideas are stickier — that monks rode the same routes as silk caravans is what makes the Silk Roads more than just an economic story.",
        },
      },
    },
    {
      id: "u2-bi3",
      unitNumber: 2,
      ideaNumber: 3,
      title: "Environmental Consequences",
      thesis: "Increasing interconnection facilitated by trading routes led to significant environmental consequences.",
      year: 1347,
      focus: { lat: 40.0, lng: 30.0, altitude: 2.4 },
      spotlightRegions: ["middleEast", "europe", "china", "southAfrica"],
      bullets: [
        "Bananas from Southeast Asia introduced to Africa via Indian Ocean trade.",
        "Disease spread — Black Death.",
      ],
      features: [
        { id: "banana-path", emoji: "🍌", label: "Banana spread", blurb: "From SE Asia along Indian Ocean monsoon routes into East Africa.", color: "#eab308", path: [
          { lat: -7.5, lng: 110.4 },   // Java
          { lat: 11.25, lng: 75.78 },  // Calicut
          { lat: -8.96, lng: 39.51 },  // Kilwa
          { lat: -3.0, lng: 35.0 },    // East African interior
        ] },
        { id: "black-death-path", emoji: "☠️", label: "Black Death spread", blurb: "Caffa (Crimea) → Constantinople → Sicily → Marseille → Paris → London. Plague rode the trade routes west.", color: "#ef4444", path: [
          { lat: 45.05, lng: 35.39 },  // Caffa, Crimea
          { lat: 41.01, lng: 28.98 },  // Constantinople
          { lat: 38.19, lng: 15.55 },  // Messina, Sicily
          { lat: 43.30, lng: 5.37 },   // Marseille
          { lat: 48.86, lng: 2.35 },   // Paris
          { lat: 51.51, lng: -0.13 },  // London
        ] },
      ],
      saq: {
        prompt: "Identify ONE environmental consequence of expanded trade networks 1200–1450.",
        cer: {
          claim: "Expanded trade networks helped spread the Black Death across Afro-Eurasia.",
          evidence: "The bubonic plague traveled west along Silk Road and Mediterranean trade routes, devastating populations from China to Western Europe.",
          reasoning: "The same network that moved silk and ideas also moved fleas — the more connected the world got, the faster a single outbreak could become a continent-spanning pandemic.",
        },
      },
    },
    {
      id: "u2-bi4",
      unitNumber: 2,
      ideaNumber: 4,
      title: "The Mongols",
      thesis: "The Mongols created the largest land-based empire in history, which facilitated further interconnection across Afro-Eurasia.",
      year: 1280,
      focus: { lat: 47.0, lng: 100.0, altitude: 2.3 },
      spotlightRegions: ["china", "russia", "middleEast"],
      spotlightCountries: ["MNG", "CHN", "RUS", "IRN", "KAZ"],
      bullets: [
        "Made the full Silk Road safe.",
        "Persian and Chinese courts could work together at long distance because of the Mongol system.",
        "Mongols sent skilled people across the empire to spread ideas/knowledge — better astronomy, improved astrolabe.",
      ],
      features: [
        { id: "mongol-yam", emoji: "🐎", label: "Yam relay system", blurb: "Khanbaliq (Beijing) → Karakorum → Samarkand → Tabriz → Sarai. Pony-express stations linked the four khanates.", color: "#3b82f6", path: [
          { lat: 39.9, lng: 116.4 },    // Khanbaliq (Beijing)
          { lat: 47.20, lng: 102.83 },  // Karakorum
          { lat: 43.27, lng: 76.95 },   // Almaty
          { lat: 39.65, lng: 66.97 },   // Samarkand
          { lat: 38.08, lng: 46.29 },   // Tabriz (Ilkhanate)
          { lat: 47.20, lng: 47.92 },   // Sarai (Golden Horde)
        ] },
        { id: "silk-road-pax", emoji: "🐫", label: "Silk Road (Pax Mongolica)", blurb: "Made the full Silk Road safe for the first time in centuries — Marco Polo travelled this.", color: "#fbbf24", path: [
          { lat: 39.9, lng: 116.4 },   // Khanbaliq (Beijing)
          { lat: 38.93, lng: 100.45 }, // Zhangye
          { lat: 40.14, lng: 94.66 },  // Dunhuang
          { lat: 42.94, lng: 89.18 },  // Turpan
          { lat: 41.70, lng: 82.96 },  // Kucha
          { lat: 39.47, lng: 75.99 },  // Kashgar
          { lat: 39.65, lng: 66.97 },  // Samarkand
          { lat: 37.66, lng: 61.83 },  // Merv
          { lat: 35.69, lng: 51.42 },  // Rey
          { lat: 33.31, lng: 44.36 },  // Baghdad
          { lat: 36.20, lng: 36.16 },  // Antioch
          { lat: 41.01, lng: 28.98 },  // Constantinople
        ] },
        { id: "pax-mongolica", emoji: "🛡️", label: "Pax Mongolica", blurb: "Steppe-wide peace that protected Silk Road merchants.", lat: 45.0, lng: 90.0 },
        { id: "ilkhanate", emoji: "🏹", label: "Ilkhanate", blurb: "Mongol khanate over Persia — astronomy hub.", lat: 35.69, lng: 51.42 },
        { id: "yuan", emoji: "🐎", label: "Yuan China", blurb: "Mongol Yuan dynasty — kept Silk Road open.", lat: 39.9, lng: 116.4 },
      ],
      saq: {
        prompt: "Explain ONE way the Mongol Empire facilitated cultural or intellectual exchange.",
        cer: {
          claim: "The Mongols deliberately moved skilled scholars and artisans across the empire.",
          evidence: "Mongol rulers brought Chinese astronomers and Persian scholars together in courts like Maragha, where they improved the astrolabe and refined astronomical tables.",
          reasoning: "This wasn't accidental diffusion through trade — it was state-engineered exchange, which is why the Mongol century produced such a dense burst of technical innovation.",
        },
      },
    },
  ],
};

// ---------------------------------------------------------------------------
// UNIT 3 — Land-Based Empires
// ---------------------------------------------------------------------------

const unit3: BriefingUnit = {
  unitNumber: 3,
  title: "Land-Based Empires",
  yearStart: 1450,
  yearEnd: 1750,
  accent: "#60a5fa",
  blurb: "Gunpowder empires (Ottoman, Safavid, Mughal, Manchu/Qing) consolidate. Religion divides and binds.",
  bigIdeas: [
    {
      id: "u3-bi1",
      unitNumber: 3,
      ideaNumber: 1,
      title: "Gunpowder Empires",
      thesis: "Various land-based empires expanded 1450–1750 most significantly through the use of gunpowder.",
      year: 1600,
      focus: { lat: 35.0, lng: 55.0, altitude: 2.4 },
      spotlightRegions: ["middleEast", "india", "china"],
      spotlightCountries: ["TUR", "IRN", "IND", "CHN"],
      bullets: [
        "Ottoman Empire adopted gunpowder weapons from the Mongols. Sacked Constantinople (1453), renamed it Istanbul. Janissaries — Christian boys enslaved and converted to Islam.",
        "Safavids — Shah Ismail; Shi'ite dynasty at odds with Sunni Mughal/Ottoman. Shah Abbas built up Safavid military.",
        "Mughal Empire — Babur displaced the Delhi Sultanate. Akbar made it tolerant; Mughals ruled half of S Asia.",
        "Manchu / Qing — replaced the weakening Ming. Manchu rulers used the Mandate of Heaven to legitimize rule over a Han majority.",
        "Safavid / Mughal conflict in the Middle East — Sunni vs Shia.",
      ],
      features: [
        { id: "istanbul", emoji: "🕌", label: "Sack of Constantinople (1453)", blurb: "Ottoman gunpowder army takes the city, renames it Istanbul.", lat: 41.01, lng: 28.98 },
        { id: "janissary", emoji: "⚔️", label: "Janissaries", blurb: "Christian boys enslaved → converted → elite Ottoman infantry.", lat: 41.01, lng: 28.98 },
        { id: "babur", emoji: "🐘", label: "Babur founds the Mughals", blurb: "Displaced the Delhi Sultanate to start the Mughal Empire.", lat: 28.6, lng: 77.2 },
        { id: "shah-ismail", emoji: "🌙", label: "Shah Ismail / Safavids", blurb: "Founded a Shia dynasty at odds with the Sunni Ottomans + Mughals.", lat: 36.27, lng: 50.0 },
        { id: "manchu", emoji: "🐉", label: "Manchu / Qing", blurb: "Used the Mandate of Heaven to rule a Han majority.", lat: 39.9, lng: 116.4 },
      ],
      saq: {
        prompt: "Identify ONE way gunpowder weapons contributed to the rise of an Asian empire 1450–1750.",
        cer: {
          claim: "Ottoman gunpowder weapons were decisive in the conquest of Constantinople.",
          evidence: "In 1453, Mehmed II's Ottoman army used massive bronze cannons to breach the Theodosian walls of Constantinople, capturing the city and renaming it Istanbul.",
          reasoning: "Walls that had held off besiegers for 1,000 years collapsed in weeks once enough gunpowder firepower was pointed at them — a single technology rewrote what an empire could conquer.",
        },
      },
      venn: {
        left: "Sunni (Ottoman, Mughal)",
        right: "Shia (Safavid)",
        leftOnly: ["Caliph as legitimate successor", "Devshirme / Janissaries (Ottoman)", "Akbar's tolerance (Mughal)"],
        rightOnly: ["Imam from Ali's bloodline", "Persian carpet-court culture", "Shi'ism the state religion"],
        both: ["Gunpowder armies", "Land-based empire", "Patronized monumental art / architecture"],
      },
    },
    {
      id: "u3-bi2",
      unitNumber: 3,
      ideaNumber: 2,
      title: "Power & Maintaining Control",
      thesis: "Rulers gained and maintained power through bureaucracies, art, centralized tax collection, and large militaries.",
      year: 1650,
      focus: { lat: 40.0, lng: 30.0, altitude: 2.4 },
      spotlightRegions: ["middleEast", "europe", "china", "india", "japan", "latinAmerica"],
      bullets: [
        "Ottoman Devshirme system staffed the imperial bureaucracy + professional military.",
        "Tokugawa shogunate put samurai on the government payroll.",
        "European kings claimed divine right (Louis XIV — Versailles).",
        "Aztecs: human sacrifice. Inca: Sun Temple of Cuzco for festivals of worship.",
        "Qing emperor Kangxi posed in portraits with Confucian books in the background.",
        "Mughal Zamindars — elite landowners who collected taxes from peasants.",
        "Ottoman tax farming — auctioned the right to collect taxes.",
      ],
      features: [
        { id: "devshirme", emoji: "🏛️", label: "Devshirme", blurb: "Forced recruitment of Christian boys → bureaucracy + Janissary corps.", lat: 41.01, lng: 28.98 },
        { id: "versailles", emoji: "👑", label: "Versailles", blurb: "Louis XIV's palace — divine right of kings made architectural.", lat: 48.8, lng: 2.12 },
        { id: "cuzco", emoji: "☀️", label: "Sun Temple of Cuzco", blurb: "Inca religious + administrative center.", lat: -13.53, lng: -71.97 },
        { id: "zamindar", emoji: "📜", label: "Zamindar tax system", blurb: "Mughal local elites collected revenue from peasants.", lat: 26.0, lng: 80.0 },
        { id: "tax-farm", emoji: "💰", label: "Ottoman tax farming", blurb: "Right to collect taxes auctioned to the highest bidder.", lat: 41.01, lng: 28.98 },
        { id: "kangxi", emoji: "📚", label: "Kangxi portrait", blurb: "Manchu emperor surrounded by Confucian books — visual legitimacy.", lat: 39.9, lng: 116.4 },
      ],
      saq: {
        prompt: "Identify ONE way an early modern empire used a labor or tax system to consolidate power.",
        cer: {
          claim: "The Mughal Empire used Zamindars to collect taxes on its behalf.",
          evidence: "Zamindars were elite landowners granted authority over peasants in their districts; they collected taxes and remitted a share to the Mughal state.",
          reasoning: "By outsourcing collection to local elites, Muslim Mughal rulers got a working revenue system over a Hindu-majority population without needing to impose direct administrators in every village — a clever way to extract resources without provoking resistance everywhere at once.",
        },
      },
    },
    {
      id: "u3-bi3",
      unitNumber: 3,
      ideaNumber: 3,
      title: "Belief Systems: Bind & Divide",
      thesis: "Belief systems played different roles — sometimes binding people together, sometimes causing conflict.",
      year: 1550,
      focus: { lat: 45.0, lng: 25.0, altitude: 2.3 },
      spotlightRegions: ["europe", "middleEast", "india"],
      spotlightCountries: ["DEU", "TUR", "IRN", "IND"],
      bullets: [
        "Protestant Reformation — Martin Luther's 95 Theses exposed Catholic corruption. Printing press helped it spread.",
        "Sunni / Shia split intensified (Mughal / Safavid / Ottoman).",
        "Syncretism produced new traditions — Sikhism, a syncretic blend of Hindu and Islamic doctrines that became its own faith.",
      ],
      features: [
        { id: "luther", emoji: "📜", label: "95 Theses", blurb: "Luther nails the 95 Theses, 1517 — splits Western Christianity.", lat: 51.87, lng: 12.65 },
        { id: "printing", emoji: "🖨️", label: "Printing press", blurb: "Helped the Reformation spread across Europe.", lat: 50.0, lng: 8.27 },
        { id: "sunni-shia", emoji: "☪️", label: "Sunni–Shia split", blurb: "Sharpened by Ottoman vs Safavid rivalry.", lat: 33.3, lng: 44.4 },
        { id: "sikhism", emoji: "🕉️", label: "Sikhism", blurb: "Syncretic Hindu–Islamic faith born in S Asia.", lat: 31.62, lng: 74.87 },
      ],
      saq: {
        prompt: "Explain ONE way a religious development changed European or Asian society 1450–1750.",
        cer: {
          claim: "The Protestant Reformation fractured the religious unity of Western Europe.",
          evidence: "Luther's 95 Theses, spread by the printing press, exposed Catholic corruption and pushed German princes to break with Rome.",
          reasoning: "Once a major bloc of Christendom rejected Papal authority, religion stopped being a unifying force across Europe and became a wedge that drove wars (Thirty Years' War) and reshaped which monarchs allied with whom.",
        },
      },
    },
  ],
};

export const briefingUnits1to3: BriefingUnit[] = [unit1, unit2, unit3];

import { briefingUnits4to9 } from "./briefingPart2";

/** All 9 units, in order. */
export const briefingUnits: BriefingUnit[] = [
  ...briefingUnits1to3,
  ...briefingUnits4to9,
];

export function findBigIdea(id: string): { unit: BriefingUnit; idea: BigIdea } | null {
  for (const u of briefingUnits) {
    for (const i of u.bigIdeas) {
      if (i.id === id) return { unit: u, idea: i };
    }
  }
  return null;
}
