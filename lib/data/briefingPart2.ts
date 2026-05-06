// Units 4–9 of the briefing data. Re-exports from briefing.ts so consumers
// can import a single combined `briefingUnits` array.

import type { BriefingUnit } from "./briefing";

const unit4: BriefingUnit = {
  unitNumber: 4,
  title: "Transoceanic Interconnections",
  yearStart: 1450,
  yearEnd: 1750,
  accent: "#0ea5e9",
  blurb: "Maritime tech, sea-based empires, the Columbian Exchange, coerced-labor systems.",
  bigIdeas: [
    {
      id: "u4-bi1",
      unitNumber: 4,
      ideaNumber: 1,
      title: "Maritime Tech",
      thesis: "New and updated maritime technology enabled transoceanic trade and the development of sea-based empires.",
      year: 1500,
      focus: { lat: 30.0, lng: -20.0, altitude: 2.4 },
      spotlightRegions: ["iberia", "europe"],
      spotlightCountries: ["PRT", "ESP", "NLD", "GBR"],
      bullets: [
        "Europeans borrowed from classical Islamic / Asian societies — astrolabe, magnetic compass, lateen sail.",
        "Portuguese caravel — smaller, faster, square + lateen sail. Carries lots of cargo.",
        "Dutch fluyt — massive cargo space; Dutch VOC dominated Indian Ocean trade.",
      ],
      features: [
        { id: "caravel-route", emoji: "🚢", label: "Portuguese caravel route", blurb: "Lisbon → W African coast → Cape → Indian Ocean. Square + lateen sail let the caravel work coastlines AND open ocean.", color: "#0ea5e9", path: [
          { lat: 38.7, lng: -9.14 },   // Lisbon
          { lat: 14.6, lng: -17.4 },   // Dakar
          { lat: 0.0, lng: 9.45 },     // Gulf of Guinea
          { lat: -34.0, lng: 18.4 },   // Cape of Good Hope
          { lat: -20.0, lng: 35.0 },   // Mozambique
          { lat: 11.25, lng: 75.78 },  // Calicut
        ] },
        { id: "fluyt-route", emoji: "🛳️", label: "Dutch fluyt → Spice Islands", blurb: "Amsterdam → Cape → Batavia. VOC's cargo workhorse.", color: "#84cc16", path: [
          { lat: 52.37, lng: 4.9 },    // Amsterdam
          { lat: -34.0, lng: 18.4 },   // Cape
          { lat: -20.0, lng: 60.0 },   // Mauritius
          { lat: -6.21, lng: 106.85 }, // Batavia (Jakarta)
        ] },
        { id: "astrolabe", emoji: "🧭", label: "Astrolabe", blurb: "Borrowed from Islamic world; measures latitude.", lat: 33.0, lng: 35.0 },
        { id: "compass", emoji: "🧲", label: "Magnetic compass", blurb: "From China — adapted by Europeans.", lat: 32.0, lng: 105.0 },
        { id: "lateen", emoji: "⛵", label: "Lateen sail", blurb: "Borrowed from Arab dhows.", lat: 25.0, lng: 56.0 },
      ],
      saq: {
        prompt: "Identify ONE non-European source of maritime technology that aided European exploration.",
        cer: {
          claim: "European explorers depended on the magnetic compass borrowed from China.",
          evidence: "The compass — first developed in Song China — let Portuguese and Spanish ships navigate consistently when out of sight of land.",
          reasoning: "The point isn't that Europeans 'invented' transoceanic travel; it's that they assembled tech from China, the Islamic world, and Arab seafarers and pointed the combined toolkit at the Atlantic.",
        },
      },
    },
    {
      id: "u4-bi2",
      unitNumber: 4,
      ideaNumber: 2,
      title: "State-Sponsored Exploration",
      thesis: "European state-sponsored exploration led to a rapid expansion of trade and transatlantic contact with the Americas.",
      year: 1500,
      focus: { lat: 20.0, lng: -40.0, altitude: 2.5 },
      spotlightRegions: ["iberia", "europe", "latinAmerica", "northAmerica", "westAfrica", "india", "seasia"],
      bullets: [
        "Wealth-building: states wanted lucrative Indian Ocean trade on their own terms (Muslim merchants controlled the routes).",
        "Religion: spread Christianity (universalizing — sent missionaries).",
        "Mercantilism: finite world wealth; empire = your slice of the pie.",
        "Portugal — first sea-based trading post empire (around Africa, into Indian Ocean). Wanted spice monopoly, not colonies.",
        "Spain — Ferdinand & Isabella sponsor Columbus. Sails west; far more interested in conquering people / land in the Americas.",
        "England, France, the Dutch — sponsor explorers to find a sea route to Asia.",
      ],
      features: [
        { id: "columbus", emoji: "🚢", label: "Columbus, 1492", blurb: "Sponsored by Ferdinand & Isabella — sails west.", path: [
          { lat: 36.0, lng: -6.5 }, { lat: 28.0, lng: -16.0 }, { lat: 20.0, lng: -40.0 }, { lat: 22.0, lng: -75.0 },
        ] },
        { id: "da-gama", emoji: "⛵", label: "Da Gama", blurb: "Portuguese reach India around the Cape (1498).", path: [
          { lat: 38.7, lng: -9.14 }, { lat: 14.6, lng: -17.4 }, { lat: -34.0, lng: 18.0 }, { lat: -20.0, lng: 35.0 }, { lat: 11.25, lng: 75.78 },
        ] },
        { id: "trading-posts", emoji: "🏴‍☠️", label: "Portuguese trading posts", blurb: "Strategic ports — not full colonies.", lat: 15.5, lng: 73.83 },
      ],
      saq: {
        prompt: "Explain ONE motive behind state-sponsored European exploration 1450–1750.",
        cer: {
          claim: "European states explored to break Muslim merchants' monopoly on the Indian Ocean spice trade.",
          evidence: "Portugal sponsored Vasco da Gama's 1498 voyage around Africa to reach Indian spices directly, bypassing Muslim middlemen.",
          reasoning: "Under mercantilism, every coin going to a foreign middleman was a coin out of the home treasury — direct sea access to spices was a way to redirect that wealth back to Lisbon and Madrid.",
        },
      },
    },
    {
      id: "u4-bi3",
      unitNumber: 4,
      ideaNumber: 3,
      title: "The Columbian Exchange",
      thesis: "The Columbian Exchange transferred animals, plants, food, and disease between the Old World and New World.",
      year: 1550,
      focus: { lat: 15.0, lng: -50.0, altitude: 2.4 },
      spotlightRegions: ["europe", "iberia", "westAfrica", "latinAmerica", "northAmerica"],
      bullets: [
        "America → Europe: maize, potato.",
        "Europe → America: wheat, rice.",
        "Enslaved Africans brought okra and rice.",
        "Animals: turkeys, llamas (Americas → Europe). Cattle, pigs, horses (Europe → Americas).",
        "Disease: smallpox + measles to Americas; syphilis back to Europe.",
        "Effect: Afro-Eurasian populations grew, longer/healthier lives → tech, wealth. Americas devastated.",
      ],
      features: [
        { id: "potato-route", emoji: "🥔", label: "Potato → Europe", blurb: "Andes → Spain → all of Europe.", color: "#fbbf24", path: [
          { lat: -13.0, lng: -72.0 },  // Andes
          { lat: 12.5, lng: -70.0 },   // Caribbean
          { lat: 28.0, lng: -16.0 },   // Canaries
          { lat: 36.5, lng: -6.3 },    // Cádiz
          { lat: 40.0, lng: -3.7 },    // Madrid
        ] },
        { id: "maize-route", emoji: "🌽", label: "Maize → Europe & Africa", blurb: "Mesoamerica → Spain → spread inland.", color: "#facc15", path: [
          { lat: 19.0, lng: -99.0 },   // Mesoamerica
          { lat: 19.0, lng: -75.0 },   // Caribbean
          { lat: 28.0, lng: -16.0 },   // Canaries
          { lat: 36.5, lng: -6.3 },    // Cádiz
          { lat: 8.0, lng: 4.0 },      // West Africa
        ] },
        { id: "wheat-route", emoji: "🌾", label: "Wheat → Americas", blurb: "Spain → New Spain. Adopted on Spanish colonial plantations.", color: "#a3e635", path: [
          { lat: 40.0, lng: -3.7 },    // Spain
          { lat: 28.0, lng: -16.0 },   // Canaries
          { lat: 19.43, lng: -99.13 }, // Mexico City
        ] },
        { id: "smallpox-route", emoji: "💀", label: "Smallpox → Americas", blurb: "Crossed the Atlantic with Cortés' conquest. Devastated Indigenous populations.", color: "#dc2626", path: [
          { lat: 36.5, lng: -6.3 },    // Cádiz
          { lat: 23.0, lng: -82.0 },   // Cuba (1518 epidemic)
          { lat: 19.43, lng: -99.13 }, // Mexico (Tenochtitlán, 1520)
          { lat: -13.53, lng: -71.97 },// Cuzco (1530s)
        ] },
        { id: "horses-route", emoji: "🐎", label: "Horses → Americas", blurb: "Europe → Mexico → Plains. Transformed Indigenous societies.", color: "#f59e0b", path: [
          { lat: 40.0, lng: -3.7 },    // Spain
          { lat: 19.43, lng: -99.13 }, // Mexico
          { lat: 35.0, lng: -100.0 },  // Great Plains
        ] },
        { id: "syphilis-route", emoji: "🦠", label: "Syphilis → Europe", blurb: "Carried back to Europe with returning sailors.", color: "#7c3aed", path: [
          { lat: 19.0, lng: -75.0 },   // Caribbean
          { lat: 28.0, lng: -16.0 },   // Canaries
          { lat: 36.5, lng: -6.3 },    // Cádiz
          { lat: 41.9, lng: 12.5 },    // Rome
        ] },
      ],
      saq: {
        prompt: "Identify ONE consequence of the Columbian Exchange for societies in Afro-Eurasia.",
        cer: {
          claim: "American crops like the potato fueled population growth across Afro-Eurasia.",
          evidence: "Potatoes from the Andes and maize from Mesoamerica entered European, African, and Chinese diets, providing more calories per acre than the local staples.",
          reasoning: "More food meant more surviving children, longer lives, and more workers — the Columbian Exchange wasn't just biological, it set up the demographic engine that would drive the next two centuries of European and Chinese expansion.",
        },
      },
    },
    {
      id: "u4-bi4",
      unitNumber: 4,
      ideaNumber: 4,
      title: "Coerced Labor & Empire",
      thesis: "European states established empires fueled by mercantilist policy and coerced-labor systems.",
      year: 1600,
      focus: { lat: 0.0, lng: -50.0, altitude: 2.4 },
      spotlightRegions: ["latinAmerica", "westAfrica", "iberia", "europe", "india"],
      bullets: [
        "Spanish encomienda — colonists compelled Indigenous people to work plantations.",
        "Hacienda system replaced encomienda — low wages + permanent debt.",
        "Mit'a (Andean labor draft, repurposed by Spain).",
        "Mercantilism: colonies exist for the homeland's enrichment.",
        "Indigenous populations died from disease → demand for enslaved African laborers grew.",
        "Asante empire grew on the Atlantic. British East India Company built trading posts in India.",
        "Spain encountered Aztec / Inca empires; both fell because of disease.",
        "Treaty of Tordesillas — divided the Americas between Spain and Portugal.",
      ],
      features: [
        { id: "encomienda", emoji: "🪓", label: "Encomienda", blurb: "Forced Indigenous labor on Spanish plantations.", lat: 19.0, lng: -99.0 },
        { id: "hacienda", emoji: "🏚️", label: "Hacienda", blurb: "Replaced encomienda — debt peonage.", lat: 23.0, lng: -102.0 },
        { id: "mita", emoji: "⛏️", label: "Mit'a (Potosí)", blurb: "Andean labor draft repurposed by Spain to mine silver.", lat: -19.59, lng: -65.75 },
        { id: "tordesillas", emoji: "📜", label: "Treaty of Tordesillas", blurb: "Spain–Portugal split of the Americas (1494).", lat: 41.5, lng: -5.0 },
        { id: "asante", emoji: "🪙", label: "Asante", blurb: "West African empire that grew on Atlantic trade.", lat: 6.7, lng: -1.62 },
      ],
      saq: {
        prompt: "Identify ONE coerced-labor system used in the Spanish American empire 1492–1750.",
        cer: {
          claim: "Spain used the encomienda system to extract labor from Indigenous peoples.",
          evidence: "Under encomienda, Spanish colonists were granted the right to compel Indigenous communities to work on plantations and in mines in exchange for nominal protection and Christianization.",
          reasoning: "Mercantilism's logic — colonies exist to enrich the metropole — required cheap, mass labor. When disease wrecked the Indigenous workforce, Spain shifted to the hacienda system and ultimately to enslaved Africans, but the engine was the same: coerce labor → extract wealth → ship it home.",
        },
      },
      venn: {
        left: "Encomienda",
        right: "Hacienda",
        leftOnly: ["Granted by Crown", "Tied to specific Indigenous community", "Earlier (16th c.)"],
        rightOnly: ["Private estate", "Wage + debt peonage", "Later (17th–18th c.)"],
        both: ["Coerced labor", "Spanish colonial agriculture", "Mercantilist enrichment of Spain"],
      },
    },
    {
      id: "u4-bi5",
      unitNumber: 4,
      ideaNumber: 5,
      title: "Maritime Empires Reshape Society",
      thesis: "The development of maritime empires significantly changed economies and societies — joint-stock companies, the triangular trade, syncretism.",
      year: 1700,
      focus: { lat: 5.0, lng: -25.0, altitude: 2.5 },
      spotlightRegions: ["europe", "iberia", "westAfrica", "latinAmerica", "northAmerica", "india"],
      bullets: [
        "Joint-stock companies — Dutch VOC, British / French East India Companies — limited investor risk and powered colonization.",
        "Triangular trade — manufactured goods to W Africa, enslaved people to Americas, sugar/molasses to Europe.",
        "Syncretism + religious conflict spread with Atlantic trade.",
      ],
      features: [
        { id: "voc", emoji: "💼", label: "VOC", blurb: "Dutch East India Company — first publicly-traded joint-stock corporation.", lat: 52.37, lng: 4.9 },
        { id: "eic", emoji: "💼", label: "British East India Co.", blurb: "Took over much of India before the British state did.", lat: 51.51, lng: -0.13 },
        { id: "triangle", emoji: "🔺", label: "Triangle trade (Atlantic)", blurb: "Manufactured goods → W Africa → enslaved people → Americas → sugar / molasses → Europe.", color: "#f59e0b", path: [
          { lat: 51.45, lng: -2.59 },  // Bristol
          { lat: 6.45, lng: 3.4 },     // Lagos coast
          { lat: -8.0, lng: 13.2 },    // Luanda
          { lat: -8.0, lng: -35.0 },   // NE Brazil (Recife)
          { lat: 18.0, lng: -75.0 },   // Caribbean
          { lat: 32.78, lng: -79.93 }, // Charleston, SC
          { lat: 51.45, lng: -2.59 },  // back to Bristol
        ] },
      ],
      saq: {
        prompt: "Identify ONE economic innovation that supported European maritime empires 1600–1750.",
        cer: {
          claim: "Joint-stock companies allowed European empires to scale colonization with limited individual investor risk.",
          evidence: "The Dutch VOC and the British East India Company pooled capital from many shareholders to fund voyages, build forts, and run colonies in Asia and the Atlantic.",
          reasoning: "A monarchy gambling its own treasury on every voyage was a slow, fragile way to build empire. Joint-stock spread the risk across thousands of investors, which is why the Dutch and English overtook Portugal and Spain even though they started later.",
        },
      },
    },
    {
      id: "u4-bi6",
      unitNumber: 4,
      ideaNumber: 6,
      title: "Resistance to Empire",
      thesis: "As states imposed their cultural, political, and economic will on colonized and enslaved peoples, resistance occurred.",
      year: 1700,
      focus: { lat: 15.0, lng: -50.0, altitude: 2.5 },
      spotlightRegions: ["india", "northAmerica", "latinAmerica", "westAfrica"],
      bullets: [
        "Maratha rebellion — Hindu rebellion against Mughal rule; brought the Mughal empire to an end and replaced it with the Maratha state.",
        "Pueblo revolt — Pueblo + Apache killed Spaniards and burned churches in the Spanish North American colonies.",
        "Stono Rebellion — uprising of enslaved Africans (use the dancing example).",
      ],
      features: [
        { id: "maratha", emoji: "🛡️", label: "Maratha rebellion", blurb: "Hindu rebellion that ended Mughal supremacy.", lat: 18.52, lng: 73.86 },
        { id: "pueblo-revolt", emoji: "🪶", label: "Pueblo Revolt", blurb: "Killed hundreds of Spaniards in N America (1680).", lat: 35.69, lng: -105.94 },
        { id: "stono", emoji: "✊🏿", label: "Stono Rebellion", blurb: "Enslaved Africans rebelled in S Carolina (1739).", lat: 32.74, lng: -80.18 },
      ],
      saq: {
        prompt: "Identify ONE example of resistance to imperial rule between 1450 and 1750.",
        cer: {
          claim: "The Maratha rebellion ended Mughal dominance in South Asia.",
          evidence: "Hindu Marathas violently rejected what they saw as Mughal Muslim rule's invasion of their religious life, eventually displacing the Mughals and establishing their own state.",
          reasoning: "When an empire's legitimacy is religious, religious grievance is the most effective fuel for rebellion — the Marathas show how syncretic, tolerant Mughal rule (Akbar) could still snap when later emperors leaned harder into Islamic identity.",
        },
      },
    },
    {
      id: "u4-bi7",
      unitNumber: 4,
      ideaNumber: 7,
      title: "Continuity & Change in Society",
      thesis: "Social categories, roles, and practices were both maintained and underwent significant change.",
      year: 1700,
      focus: { lat: 10.0, lng: -70.0, altitude: 2.4 },
      spotlightRegions: ["china", "latinAmerica"],
      bullets: [
        "Qing dynasty kept Chinese institutions — civil service exam, bureaucracy — but added restrictive policies against ethnic minorities.",
        "Spanish casta system — entirely new race-based social hierarchy in the Americas. Spaniards on top, Africans + Indigenous on the bottom.",
      ],
      features: [
        { id: "qing-bureau", emoji: "📜", label: "Qing bureaucracy", blurb: "Continued Han civil-service exam system.", lat: 39.9, lng: 116.4 },
        { id: "casta", emoji: "🪜", label: "Casta system", blurb: "Race-based hierarchy in Spanish America.", lat: 19.43, lng: -99.13 },
      ],
      saq: {
        prompt: "Explain ONE change in social hierarchy in the Americas 1500–1750.",
        cer: {
          claim: "The Spanish casta system created a new, ancestry-based hierarchy in the Americas.",
          evidence: "Spaniards born in Spain (peninsulares) sat at the top, with creoles, mestizos, mulattoes, and Africans / Indigenous people below in a strict racial pyramid.",
          reasoning: "Pre-conquest Indigenous societies had hierarchies of birth and tribute, but the casta system was new in that it explicitly used skin and ancestry to determine legal rights, which ended up being the template for racial hierarchy across the modern Atlantic world.",
        },
      },
    },
  ],
};

const unit5: BriefingUnit = {
  unitNumber: 5,
  title: "Revolutions",
  yearStart: 1750,
  yearEnd: 1900,
  accent: "#ef4444",
  blurb: "Enlightenment, Atlantic revolutions, the Industrial Revolution, and economic shifts.",
  bigIdeas: [
    {
      id: "u5-bi1",
      unitNumber: 5,
      ideaNumber: 1,
      title: "Enlightenment",
      thesis: "New ways of thinking embodied in the Enlightenment created the occasion for reform and revolution.",
      year: 1780,
      focus: { lat: 48.0, lng: 5.0, altitude: 2.0 },
      spotlightRegions: ["europe", "northAmerica", "russia"],
      bullets: [
        "Belief → empirical data and observation.",
        "Natural rights (John Locke). Social contract (Rousseau).",
        "Authority sits in the person, not tradition.",
        "Women's suffrage — Seneca Falls Convention.",
        "Big abolition movement; many states banned the slave trade.",
        "Russia abolished serfdom.",
      ],
      features: [
        { id: "locke", emoji: "📖", label: "Natural rights (Locke)", blurb: "Life, liberty, property — foundational to the Atlantic revolutions.", lat: 51.51, lng: -0.13 },
        { id: "rousseau", emoji: "📖", label: "Social contract (Rousseau)", blurb: "Government legitimacy comes from the governed.", lat: 46.2, lng: 6.14 },
        { id: "seneca", emoji: "♀️", label: "Seneca Falls", blurb: "1848 — first US women's rights convention.", lat: 42.91, lng: -76.79 },
        { id: "serfdom", emoji: "🛠️", label: "Serfdom abolished", blurb: "Russia, 1861.", lat: 55.75, lng: 37.62 },
      ],
      saq: {
        prompt: "Explain ONE way Enlightenment ideas led to political reform 1750–1900.",
        cer: {
          claim: "Enlightenment ideas about natural rights drove movements to abolish the slave trade.",
          evidence: "Locke's argument that all people have rights to life and liberty was used by abolitionists in Britain and the US to argue that slavery violated a universal moral principle.",
          reasoning: "Once the Enlightenment relocated political authority from kings to individual rights, any institution that openly denied those rights — slavery being the most obvious — became philosophically indefensible, and over the 19th century the trade and then the institution were banned across much of the Atlantic world.",
        },
      },
    },
    {
      id: "u5-bi2",
      unitNumber: 5,
      ideaNumber: 2,
      title: "Atlantic Revolutions",
      thesis: "Enlightenment ideas combined with rising nationalism led to revolutions throughout the world.",
      year: 1800,
      focus: { lat: 15.0, lng: -50.0, altitude: 2.4 },
      spotlightRegions: ["northAmerica", "europe", "latinAmerica", "iberia"],
      bullets: [
        "American Revolution — Declaration of Independence, growing nationalism in British colonies in response to repressive policies (taxation). Built on Enlightenment principles: life, liberty, pursuit of property.",
        "French Revolution — inspired by the American Revolution.",
        "Haitian Revolution — French colony.",
        "Latin American revolutions — Simón Bolívar's Letter from Jamaica.",
        "Documents express Enlightenment thought — Declaration of the Rights of Man and Citizen (France), Letter from Jamaica (Bolívar).",
      ],
      features: [
        { id: "americanrev", emoji: "🇺🇸", label: "American Revolution", blurb: "1776 — Declaration of Independence.", lat: 39.95, lng: -75.16 },
        { id: "frenchrev", emoji: "🇫🇷", label: "French Revolution", blurb: "1789 — Declaration of the Rights of Man.", lat: 48.86, lng: 2.35 },
        { id: "haitianrev", emoji: "✊🏿", label: "Haitian Revolution", blurb: "1791–1804 — only successful slave revolt → independent state.", lat: 18.59, lng: -72.31 },
        { id: "bolivar", emoji: "📜", label: "Letter from Jamaica", blurb: "Simón Bolívar — vision for L. American independence.", lat: 18.11, lng: -77.30 },
      ],
      saq: {
        prompt: "Explain ONE way Atlantic revolutions reflected Enlightenment thinking.",
        cer: {
          claim: "The U.S. Declaration of Independence is a direct application of Enlightenment natural-rights theory.",
          evidence: "The Declaration's claim that 'all men are created equal' and entitled to 'life, liberty, and the pursuit of happiness' lifts Locke's natural-rights formulation almost verbatim.",
          reasoning: "Revolutionary documents weren't generic complaints — they were literal arguments built from Enlightenment premises, which is how they ended up being copied (Declaration of the Rights of Man, Letter from Jamaica) by every Atlantic revolution that followed.",
        },
      },
    },
    {
      id: "u5-bi3",
      unitNumber: 5,
      ideaNumber: 3,
      title: "Industrial Revolution",
      thesis: "The Industrial Revolution began in Britain and would eventually transform the world.",
      year: 1830,
      focus: { lat: 53.0, lng: -2.0, altitude: 1.8 },
      spotlightRegions: ["europe"],
      spotlightCountries: ["GBR"],
      bullets: [
        "Hand → machine. Mass production.",
        "Began in Britain — proximity to waterways (rivers, canals); concentration of coal, iron; timber from Americas.",
        "Urbanization — enclosure movement pushed poorer rural people into cities.",
        "Improved agricultural productivity — seed drill, field rotation.",
        "Innovations: factory system. Initially water-powered, then steam.",
        "Big money: textiles. Shift from artisan to unskilled labor.",
      ],
      features: [
        { id: "factory", emoji: "🏭", label: "Factory system", blurb: "Centralized, machine-powered production.", lat: 53.48, lng: -2.24 },
        { id: "coal", emoji: "⛏️", label: "British coal", blurb: "Powered the steam engines.", lat: 54.97, lng: -1.61 },
        { id: "enclosure", emoji: "🚧", label: "Enclosure", blurb: "Privatized common land → pushed peasants to cities.", lat: 51.5, lng: 0 },
        { id: "textiles", emoji: "🧵", label: "Textiles", blurb: "First mass-produced industrial good.", lat: 53.81, lng: -1.55 },
      ],
      saq: {
        prompt: "Identify ONE reason the Industrial Revolution began in Britain.",
        cer: {
          claim: "Britain industrialized first because of its concentrated supply of coal and iron.",
          evidence: "Britain's coalfields sat next to its iron deposits and were crisscrossed by navigable rivers and canals, and timber from the Americas helped fill out the raw-material supply.",
          reasoning: "Industrialization needs cheap energy and cheap metal in the same place — Britain happened to have both literally underfoot, which is why its factory system scaled before continental Europe's even started.",
        },
      },
    },
    {
      id: "u5-bi4",
      unitNumber: 5,
      ideaNumber: 4,
      title: "Industrialization Spreads (Unevenly)",
      thesis: "As Western industrialization spread, Middle Eastern and Asian shares of global manufacturing declined.",
      year: 1870,
      focus: { lat: 35.0, lng: 80.0, altitude: 2.2 },
      spotlightRegions: ["europe", "russia", "japan", "india", "northAmerica"],
      bullets: [
        "US: massive immigration to urban centers.",
        "Russia: Trans-Siberian railroad connects distant parts of empire.",
        "Japan: embraces industrialization as defense vs. westernization — Meiji Restoration.",
        "Traditional textile producers (India) decline — British put taxes on Indian textiles.",
      ],
      features: [
        { id: "transsib", emoji: "🚂", label: "Trans-Siberian Railway", blurb: "Connected European Russia to the Pacific.", path: [
          { lat: 55.75, lng: 37.62 }, { lat: 56.0, lng: 60.6 }, { lat: 54.98, lng: 73.37 }, { lat: 55.04, lng: 82.93 }, { lat: 56.49, lng: 84.97 }, { lat: 52.29, lng: 104.3 }, { lat: 43.13, lng: 131.9 },
        ] },
        { id: "meiji", emoji: "🎌", label: "Meiji Restoration", blurb: "Japan industrializes as a defense vs westernization.", lat: 35.68, lng: 139.69 },
        { id: "india-textiles", emoji: "🧵", label: "Indian textiles taxed", blurb: "British policy crushed local textile industry.", lat: 22.57, lng: 88.36 },
      ],
      saq: {
        prompt: "Explain ONE response to the spread of Western industrialization 1750–1900.",
        cer: {
          claim: "Japan responded to industrialization with the Meiji Restoration.",
          evidence: "Following the Meiji Restoration in 1868, Japan rapidly built railroads, factories, and a Western-style military and education system.",
          reasoning: "Most non-Western states reacted defensively or got steamrolled (Tanzimat in the Ottomans, India taxed out of textiles). Japan is the exception that proves the rule — it adopted Western industrial methods aggressively, which is exactly why it ended up colonizing rather than being colonized.",
        },
      },
    },
    {
      id: "u5-bi5",
      unitNumber: 5,
      ideaNumber: 5,
      title: "Second Industrial Revolution",
      thesis: "New technologies fundamentally changed the landscape of manufacturing.",
      year: 1880,
      focus: { lat: 45.0, lng: -10.0, altitude: 2.0 },
      spotlightRegions: ["europe", "northAmerica", "russia"],
      bullets: [
        "First IR: textiles, steam engine, coal.",
        "Second IR: building materials like steel; oil; internal combustion engine. Fossil fuel revolution.",
        "Railroads = transferring stuff. Transcontinental railroads.",
        "National markets for goods. Trans-Siberian had the same effect in Russia. Telegraph linked it all.",
      ],
      features: [
        { id: "steel", emoji: "🏗️", label: "Steel", blurb: "Defining material of the Second Industrial Revolution.", lat: 40.44, lng: -79.99 },
        { id: "oil", emoji: "🛢️", label: "Oil", blurb: "Fueled internal combustion engines.", lat: 41.5, lng: -80.07 },
        { id: "telegraph", emoji: "📡", label: "Telegraph", blurb: "First near-instant long-distance communication.", lat: 51.51, lng: -0.13 },
        { id: "transcontinental", emoji: "🚂", label: "U.S. Transcontinental Railroad", blurb: "Linked Atlantic to Pacific — created national markets.", path: [
          { lat: 41.32, lng: -95.93 }, { lat: 41.13, lng: -104.82 }, { lat: 40.76, lng: -111.89 }, { lat: 39.53, lng: -119.81 }, { lat: 37.77, lng: -122.42 },
        ] },
      ],
      saq: {
        prompt: "Identify ONE technological change of the Second Industrial Revolution.",
        cer: {
          claim: "The internal combustion engine, powered by oil, transformed manufacturing and transportation.",
          evidence: "The Second Industrial Revolution shifted from coal-fired steam to oil-fired internal combustion, with steel as the dominant building material and railroads + telegraph linking national markets.",
          reasoning: "The shift wasn't incremental — it changed what could be built (steel skyscrapers, automobiles), how fast goods moved, and how quickly information traveled. That whole package is what flipped 'industrialized' countries into industrial powers in the modern sense.",
        },
      },
    },
    {
      id: "u5-bi6",
      unitNumber: 5,
      ideaNumber: 6,
      title: "Free-Market Capitalism",
      thesis: "Significant economic shifts — rise of free-market capitalism, transnational businesses, increased standards of living.",
      year: 1880,
      focus: { lat: 50.0, lng: 10.0, altitude: 2.0 },
      spotlightRegions: ["europe", "northAmerica"],
      bullets: [
        "Mercantilism abandoned in favor of Adam Smith's capitalism (Wealth of Nations).",
        "Government removes itself from the economy — supply, demand, invisible hand.",
        "Rise of transnational corporations — Unilever (British/Dutch).",
        "More mass production → nicer things for an expanding middle class.",
      ],
      features: [
        { id: "smith", emoji: "📘", label: "Wealth of Nations", blurb: "Adam Smith's capitalist manifesto, 1776.", lat: 55.95, lng: -3.19 },
        { id: "unilever", emoji: "🏢", label: "Unilever", blurb: "British-Dutch transnational corporation.", lat: 51.51, lng: -0.13 },
      ],
      saq: {
        prompt: "Explain ONE economic shift in industrialized societies 1750–1900.",
        cer: {
          claim: "Industrialized states shifted from mercantilism to free-market capitalism.",
          evidence: "Adam Smith's Wealth of Nations argued for removing government from the economy, and 19th-century Britain led other industrial states in abandoning protectionist mercantilism in favor of free trade.",
          reasoning: "Mercantilism made sense when wealth was viewed as a fixed pie. After industrialization unlocked productivity gains, free trade became the more profitable approach — and the new transnational companies (like Unilever) needed a global free-market environment to function.",
        },
      },
    },
    {
      id: "u5-bi7",
      unitNumber: 5,
      ideaNumber: 7,
      title: "Reform from Industrialization",
      thesis: "Industrialization created the occasion for reform — labor unions, Marxism, Tanzimat.",
      year: 1880,
      focus: { lat: 45.0, lng: 25.0, altitude: 2.2 },
      spotlightRegions: ["europe", "middleEast"],
      bullets: [
        "Labor unions → minimum wage, shorter work days, 5-day work week.",
        "Marxism — Communist Manifesto. Proletariat vs bourgeoisie. Solution: socialism → communism. Capitalism will fail.",
        "Tanzimat reforms in the Ottoman Empire — late attempt to industrialize, eliminate corruption. Less successful than Japan.",
      ],
      features: [
        { id: "unions", emoji: "✊", label: "Labor unions", blurb: "Bargained for minimum wage + shorter work day.", lat: 53.48, lng: -2.24 },
        { id: "marx", emoji: "📕", label: "Communist Manifesto", blurb: "Marx & Engels, 1848.", lat: 50.94, lng: 6.96 },
        { id: "tanzimat", emoji: "🏛️", label: "Tanzimat", blurb: "Ottoman reform to industrialize + clean up corruption.", lat: 41.01, lng: 28.98 },
      ],
      saq: {
        prompt: "Explain ONE reform movement that responded to industrialization 1750–1900.",
        cer: {
          claim: "Marxism emerged as a reform ideology challenging industrial capitalism.",
          evidence: "Marx's Communist Manifesto split industrial society into proletariat and bourgeoisie and argued capitalism would inevitably collapse, replaced by socialism.",
          reasoning: "Labor unions tried to make industrial capitalism livable; Marxism argued the system itself was broken. Both responses came from the same place — bad working conditions and inequality — but they led to wildly different 20th-century paths.",
        },
      },
    },
  ],
};

const unit6: BriefingUnit = {
  unitNumber: 6,
  title: "Consequences of Industrialization",
  yearStart: 1750,
  yearEnd: 1900,
  accent: "#a855f7",
  blurb: "Imperialism, resistance, raw-material economies, migration.",
  bigIdeas: [
    {
      id: "u6-bi1",
      unitNumber: 6,
      ideaNumber: 1,
      title: "Ideologies of Imperialism",
      thesis: "Various ideologies contributed to the growing development of imperialism 1750–1900.",
      year: 1885,
      focus: { lat: 0.0, lng: 20.0, altitude: 2.4 },
      spotlightRegions: ["europe", "iberia", "westAfrica", "southAfrica", "india", "japan"],
      bullets: [
        "European empire-building: needed resources; civilizing mission; nationalism.",
        "Cultural ideologies: 'white man's burden' (Kipling); social Darwinism applied to politics.",
        "Desire to spread Christianity.",
        "Nationalism — Britain takes India; France takes African colonies; Japan modernizes (Meiji) and colonizes Korea after defeating China.",
        "Economic motives — 2nd IR demanded new markets and raw materials.",
      ],
      features: [
        { id: "kipling", emoji: "📜", label: "White Man's Burden", blurb: "Kipling's poem — civilizing-mission ideology.", lat: 51.51, lng: -0.13 },
        { id: "social-darwin", emoji: "🦠", label: "Social Darwinism", blurb: "'Strong eat the weak' applied to politics.", lat: 51.51, lng: -0.13 },
        { id: "japan-korea", emoji: "🎌", label: "Japan colonizes Korea", blurb: "After beating China in war.", lat: 37.57, lng: 126.98 },
      ],
      saq: {
        prompt: "Explain ONE ideological justification for imperialism 1750–1900.",
        cer: {
          claim: "Social Darwinism was used to justify European imperialism as a natural law.",
          evidence: "Imperialists argued that, just as 'fittest' species outcompete others in nature, industrialized European societies were naturally suited to dominate non-industrial ones.",
          reasoning: "Repackaging conquest as biology is what made imperialism feel inevitable and even moral to its 19th-century supporters — it gave 'civilizing mission' a scientific veneer that pure economic motive couldn't.",
        },
      },
    },
    {
      id: "u6-bi2",
      unitNumber: 6,
      ideaNumber: 2,
      title: "Means of Imperial Consolidation",
      thesis: "Imperial states used different means of consolidating + expanding their empires.",
      year: 1885,
      focus: { lat: 5.0, lng: 20.0, altitude: 2.4 },
      spotlightRegions: ["europe", "westAfrica", "southAfrica", "india", "russia", "japan", "northAmerica"],
      bullets: [
        "Non-state-to-state colonies: Belgian Congo as private colony of Leopold II; Belgian state takes over after international pressure.",
        "India: British EIC controlled it; Sepoy Rebellion → British govt takes direct control.",
        "New imperial powers replace old — US replaces Spain (Spanish-American War; Philippines).",
        "Japan expands into China, SE Asia, Pacific. Manchuria.",
        "Russia: tsars expand into Poland, Middle East, China.",
        "Scramble for Africa — Berlin Conference (Bismarck) carved up Africa with no African input.",
      ],
      features: [
        { id: "berlin-conf", emoji: "🗺️", label: "Berlin Conference", blurb: "1884–85 — European powers carve up Africa.", lat: 52.52, lng: 13.4 },
        { id: "congo", emoji: "🪵", label: "Belgian Congo", blurb: "Leopold II's private colony (then Belgian state).", lat: -4.32, lng: 15.31 },
        { id: "sepoy", emoji: "🪖", label: "Sepoy Rebellion", blurb: "1857 — pushed Britain to take direct control of India.", lat: 28.6, lng: 77.2 },
        { id: "philippines", emoji: "🇵🇭", label: "Philippines (US)", blurb: "Acquired in Spanish-American War.", lat: 14.6, lng: 121.0 },
        { id: "manchuria", emoji: "🎌", label: "Manchuria (Japan)", blurb: "Japanese expansion into NE Asia.", lat: 43.82, lng: 125.32 },
      ],
      saq: {
        prompt: "Identify ONE method by which a European state consolidated control of an African colony 1750–1900.",
        cer: {
          claim: "European powers used the Berlin Conference to formalize their claims in Africa.",
          evidence: "In 1884–85, Bismarck convened the Berlin Conference where European states carved up Africa among themselves — with no African representatives present.",
          reasoning: "By converting messy colonial competition into a paper agreement, the Conference let Europeans expand without fighting each other, which is why the 'Scramble' moved so fast in the late 19th century.",
        },
      },
    },
    {
      id: "u6-bi3",
      unitNumber: 6,
      ideaNumber: 3,
      title: "Resistance to New Imperialism",
      thesis: "The new wave of imperialism led to new waves of resistance among colonized people.",
      year: 1880,
      focus: { lat: -10.0, lng: -50.0, altitude: 2.4 },
      spotlightRegions: ["latinAmerica", "india", "europe", "northAmerica", "southAfrica"],
      bullets: [
        "Direct resistance — Tupac Amaru rebellion in Peru (Indigenous leader vs Spanish atrocities).",
        "Direct resistance — Sepoy Mutiny in India.",
        "Creation of new states — Balkan states broke from Ottoman rule (Greece, Serbia, Bulgaria) on a wave of nationalism.",
        "Religiously inspired rebellions — Ghost Dance movement (US Indigenous); Xhosa Cattle Killing (S Africa).",
      ],
      features: [
        { id: "tupac", emoji: "🛡️", label: "Tupac Amaru II", blurb: "Indigenous Peruvian rebellion against Spain (1780).", lat: -13.53, lng: -71.97 },
        { id: "balkans", emoji: "🇬🇷", label: "Balkan independence", blurb: "Greece, Serbia, Bulgaria break from Ottomans.", lat: 42.5, lng: 22.0 },
        { id: "ghost-dance", emoji: "👻", label: "Ghost Dance", blurb: "US Indigenous prophetic rebellion.", lat: 43.55, lng: -102.55 },
        { id: "xhosa", emoji: "🐂", label: "Xhosa Cattle Killing", blurb: "Religiously-inspired protest in S Africa (1856–57).", lat: -32.3, lng: 27.5 },
      ],
      saq: {
        prompt: "Explain ONE form of resistance to imperialism 1750–1900.",
        cer: {
          claim: "Religiously-inspired rebellions like the Ghost Dance were a form of anti-imperial resistance.",
          evidence: "Indigenous Americans believed that performing the Ghost Dance ritual would awaken ancestral dead to help them resist westward US expansion.",
          reasoning: "When colonized peoples lacked the military or economic tools to fight industrial empires, they turned to spiritual frameworks. The Ghost Dance and the Xhosa Cattle Killing both fit this pattern — religion as a rallying point when nothing else was available.",
        },
      },
    },
    {
      id: "u6-bi4",
      unitNumber: 6,
      ideaNumber: 4,
      title: "Cash Crops & the Global Economy",
      thesis: "The growing need for raw materials and food transformed the global economy.",
      year: 1880,
      focus: { lat: -15.0, lng: -50.0, altitude: 2.5 },
      spotlightRegions: ["latinAmerica", "westAfrica", "india", "seasia"],
      bullets: [
        "Subsistence farmers → cash-crop farmers (export-based). Coffee, rubber, sugar.",
        "Uruguay/Argentina cattle ranching became huge.",
        "Peru/Chile specialized in guano (bird poop) → incredible fertilizer.",
        "Colonial economies served urban centers, not colonial people.",
      ],
      features: [
        { id: "coffee-route", emoji: "☕", label: "Coffee → Europe", blurb: "Brazil → Atlantic → Hamburg / London. Cash crop boomed in 19th c.", color: "#a16207", path: [
          { lat: -22.9, lng: -43.2 },  // Rio de Janeiro
          { lat: 14.6, lng: -17.4 },   // Dakar
          { lat: 53.55, lng: 9.99 },   // Hamburg
        ] },
        { id: "sugar-route", emoji: "🍬", label: "Sugar → Europe", blurb: "Caribbean / Brazil → Liverpool / Bristol. Powered by enslaved labor.", color: "#f9a8d4", path: [
          { lat: 18.0, lng: -75.0 },   // Caribbean
          { lat: -8.0, lng: -35.0 },   // NE Brazil
          { lat: -8.0, lng: -35.0 },
          { lat: 51.45, lng: -2.59 },  // Bristol
        ] },
        { id: "rubber-route", emoji: "🌳", label: "Rubber → Europe", blurb: "Belgian Congo + Amazon → Antwerp. Extracted brutally.", color: "#16a34a", path: [
          { lat: -3.0, lng: -60.0 },   // Manaus, Amazon
          { lat: 14.6, lng: -17.4 },   // Dakar
          { lat: 51.22, lng: 4.4 },    // Antwerp
        ] },
        { id: "rubber-congo", emoji: "🌳", label: "Congo rubber → Europe", blurb: "Belgian Congo extraction → Antwerp.", color: "#10b981", path: [
          { lat: -4.32, lng: 15.31 },  // Léopoldville (Kinshasa)
          { lat: -8.83, lng: 13.23 },  // Luanda
          { lat: 51.22, lng: 4.4 },    // Antwerp
        ] },
        { id: "guano", emoji: "🐦", label: "Guano (Peru/Chile)", blurb: "Premium fertilizer; bird-poop islands → European farms.", lat: -12.0, lng: -77.0 },
        { id: "pampas-route", emoji: "🐄", label: "Pampas beef → Europe", blurb: "Argentine pampas → Liverpool. Refrigerated steamers transformed the trade.", color: "#dc2626", path: [
          { lat: -34.6, lng: -58.4 },  // Buenos Aires
          { lat: -22.9, lng: -43.2 },  // Rio de Janeiro
          { lat: 53.41, lng: -2.99 },  // Liverpool
        ] },
      ],
      saq: {
        prompt: "Explain ONE economic transformation in colonial regions 1750–1900.",
        cer: {
          claim: "Colonial regions shifted from subsistence farming to cash-crop production for export.",
          evidence: "Latin American farms specialized in coffee and sugar; Belgian Congo extracted rubber; Peru and Chile produced guano fertilizer for industrial agriculture in Europe.",
          reasoning: "This wasn't just a change in what was grown — it was a redirection of entire colonies' economies toward serving European urban centers, which is why so many post-colonial states still have export-dependent economies today.",
        },
      },
    },
    {
      id: "u6-bi5",
      unitNumber: 6,
      ideaNumber: 5,
      title: "Economic Imperialism",
      thesis: "Industrialized states practiced economic imperialism primarily in Asia and Latin America.",
      year: 1860,
      focus: { lat: 30.0, lng: 105.0, altitude: 2.2 },
      spotlightRegions: ["china", "india", "latinAmerica", "europe", "northAmerica"],
      bullets: [
        "British dominance of cotton in India and Egypt.",
        "Britain–China Opium Wars: trade deficit fixed by smuggling opium. China bans opium → destroys British shipments → Britain wins the war → forces free-trade treaty.",
        "China carved into spheres of influence — Britain, France, Germany, Russia, US wanted in.",
        "US invested in Mexico, Cuba infrastructure.",
      ],
      features: [
        { id: "opium-route", emoji: "💊", label: "Opium shipping route", blurb: "British India → Canton. Smuggled to fix Britain's trade deficit with China.", color: "#7c2d12", path: [
          { lat: 22.57, lng: 88.36 },   // Calcutta
          { lat: 13.08, lng: 80.27 },   // Madras
          { lat: 1.35, lng: 103.82 },   // Singapore
          { lat: 22.4, lng: 113.5 },    // Canton
        ] },
        { id: "indian-cotton-route", emoji: "🧵", label: "Indian cotton → Britain", blurb: "Britain dominated cotton extraction from India.", color: "#f97316", path: [
          { lat: 22.57, lng: 88.36 },   // Calcutta
          { lat: 18.97, lng: 72.83 },   // Bombay
          { lat: 12.78, lng: 45.04 },   // Aden (Suez bypass before 1869)
          { lat: 30.04, lng: 32.55 },   // Suez (post-1869)
          { lat: 36.14, lng: -5.35 },   // Gibraltar
          { lat: 53.41, lng: -2.99 },   // Liverpool
        ] },
        { id: "spheres", emoji: "🗺️", label: "Spheres of Influence", blurb: "Britain, France, Germany, Russia, US carved trading rights in China.", lat: 31.23, lng: 121.47 },
        { id: "us-cuba", emoji: "🇺🇸", label: "US in Cuba/Mexico", blurb: "Invested heavily in infrastructure.", lat: 23.13, lng: -82.36 },
      ],
      saq: {
        prompt: "Explain ONE example of economic imperialism between 1750 and 1900.",
        cer: {
          claim: "Britain practiced economic imperialism in China through the Opium Wars and resulting unequal treaties.",
          evidence: "Britain smuggled opium into China to balance its tea trade deficit; when China banned and seized opium, Britain's industrial military forced China to sign treaties opening trading ports.",
          reasoning: "Britain didn't annex China — it didn't have to. Forcing 'free trade' on its terms gave it the same economic benefit as colonization without the administrative cost, which is the textbook definition of economic imperialism.",
        },
      },
    },
    {
      id: "u6-bi6",
      unitNumber: 6,
      ideaNumber: 6,
      title: "Migration",
      thesis: "Various environmental + economic factors contributed to patterns of migration 1750–1900.",
      year: 1870,
      focus: { lat: 20.0, lng: 110.0, altitude: 2.6 },
      spotlightRegions: ["china", "india", "northAmerica", "oceania", "southAfrica"],
      bullets: [
        "Industrialization + globalization → mass migration for work. Slavery dying out → indentured servitude replaces it.",
        "Asian contract laborers — Chinese & Indian workers brought in for very low wages after Britain abolished the slave trade.",
        "Penal colonies — Australia (British convicts).",
        "Indians from Mauritius go to Britain in indentured servitude.",
        "Discrimination at destination — White Australia Policy, Chinese Exclusion Act in the US.",
      ],
      features: [
        { id: "chinese-laborers", emoji: "🚂", label: "Chinese laborers → Americas", blurb: "Guangdong → San Francisco / Peru. Built the Transcontinental Railroad.", color: "#dc2626", path: [
          { lat: 22.4, lng: 113.5 },    // Canton
          { lat: 22.27, lng: 114.17 },  // Hong Kong
          { lat: 21.31, lng: -157.86 }, // Honolulu
          { lat: 37.77, lng: -122.42 }, // San Francisco
        ] },
        { id: "indian-laborers-mauritius", emoji: "📜", label: "Indian indentured → Mauritius", blurb: "Calcutta → Port Louis. Replaced enslaved labor on sugar plantations.", color: "#f97316", path: [
          { lat: 22.57, lng: 88.36 },   // Calcutta
          { lat: 6.93, lng: 79.85 },    // Colombo
          { lat: -20.35, lng: 57.55 },  // Mauritius
        ] },
        { id: "indian-laborers-caribbean", emoji: "📜", label: "Indian indentured → Caribbean", blurb: "Calcutta → Trinidad / British Guiana. Sugar plantations.", color: "#fb923c", path: [
          { lat: 22.57, lng: 88.36 },   // Calcutta
          { lat: -34.0, lng: 18.4 },    // Cape Town
          { lat: 14.6, lng: -17.4 },    // Dakar
          { lat: 10.65, lng: -61.52 },  // Trinidad
        ] },
        { id: "convicts-australia", emoji: "🇦🇺", label: "British convicts → Australia", blurb: "London → Cape Town → Botany Bay. Penal-colony shipping.", color: "#a855f7", path: [
          { lat: 51.51, lng: -0.13 },   // London
          { lat: 14.6, lng: -17.4 },    // Cape Verde
          { lat: -34.0, lng: 18.4 },    // Cape of Good Hope
          { lat: -33.87, lng: 151.21 }, // Sydney
        ] },
        { id: "chinese-exclusion", emoji: "🚫", label: "Chinese Exclusion Act", blurb: "1882 — racist US legislation against Chinese immigrants.", lat: 37.77, lng: -122.42 },
        { id: "white-australia", emoji: "🚫", label: "White Australia Policy", blurb: "Restricted non-European immigration.", lat: -35.28, lng: 149.13 },
      ],
      saq: {
        prompt: "Identify ONE pattern of migration 1750–1900 caused by industrialization.",
        cer: {
          claim: "Industrialization fueled mass migration of Asian indentured laborers to European colonies.",
          evidence: "After Britain abolished the slave trade, it imported Chinese and Indian indentured workers to plantations and railways in the Caribbean, Mauritius, and beyond.",
          reasoning: "Industrial economies still needed cheap labor; abolition closed the slave-trade pipeline; indenture filled the gap. The discrimination workers met (Chinese Exclusion Act, White Australia Policy) shows how this migration also reshaped racial politics in destination countries.",
        },
      },
    },
  ],
};

const unit7: BriefingUnit = {
  unitNumber: 7,
  title: "Global Conflict",
  yearStart: 1900,
  yearEnd: 1945,
  accent: "#dc2626",
  blurb: "WWI, the Great Depression, the rise of fascism, WWII, genocide.",
  bigIdeas: [
    {
      id: "u7-bi1",
      unitNumber: 7,
      ideaNumber: 1,
      title: "States Change After 1900",
      thesis: "Internal and external factors caused significant change in states across the world after 1900.",
      year: 1917,
      focus: { lat: 45.0, lng: 50.0, altitude: 2.4 },
      spotlightRegions: ["russia", "china", "latinAmerica"],
      bullets: [
        "Russian Revolution — Russia lagging economically; Crimean & Russo-Japanese losses; Bolsheviks seize power; communist govt; USSR.",
        "Qing dynasty falls — ethnic tension under Manchu rulers; famine; encroaching Western imperialism. Sun Yat-sen overthrows the last dynasty. Boxer + Taiping rebellions.",
        "Mexican Revolution — wealth gap (especially land), long cooperation with US investors via the state. Francisco Madero leads.",
      ],
      features: [
        { id: "bolshevik", emoji: "☭", label: "Bolshevik Revolution", blurb: "1917 — Lenin establishes communist govt.", lat: 59.93, lng: 30.34 },
        { id: "sun-yatsen", emoji: "🇨🇳", label: "Sun Yat-sen", blurb: "Overthrows Qing dynasty (1911).", lat: 23.13, lng: 113.27 },
        { id: "madero", emoji: "🇲🇽", label: "Francisco Madero", blurb: "Leader of the Mexican Revolution.", lat: 19.43, lng: -99.13 },
        { id: "boxer", emoji: "👊", label: "Boxer Rebellion", blurb: "1899–1901 — Chinese rebellion vs foreign influence.", lat: 39.9, lng: 116.4 },
      ],
      saq: {
        prompt: "Explain ONE internal cause of revolutionary change in a state 1900–1945.",
        cer: {
          claim: "The Russian Revolution was caused by Russia's failure to industrialize at the pace of the West.",
          evidence: "Russia's economy lagged behind Western powers, and military losses in the Crimean and Russo-Japanese Wars exposed the regime's weakness; the Bolsheviks used the resulting unrest to seize power in 1917.",
          reasoning: "The pattern repeats elsewhere — Qing China, revolutionary Mexico — when a state can't keep up economically with industrialized rivals, internal grievances and external pressure usually combine to produce regime change.",
        },
      },
    },
    {
      id: "u7-bi2",
      unitNumber: 7,
      ideaNumber: 2,
      title: "Causes of WWI: MAIN",
      thesis: "WWI was caused by Militarism, Alliances, Imperialism, and Nationalism — plus Archduke Franz Ferdinand's assassination.",
      year: 1914,
      focus: { lat: 50.0, lng: 15.0, altitude: 2.0 },
      spotlightRegions: ["europe", "russia", "middleEast"],
      bullets: [
        "Militarism: massive industrial weapons buildup. Standing armies grew. Eager to use them.",
        "Alliance system: defensive blocs — promised mutual defense.",
        "Imperialism: fierce competition for remaining colonial lands.",
        "Nationalism: intense pride; wanted to prove themselves on the world stage.",
        "Trigger: assassination of Archduke Franz Ferdinand.",
      ],
      features: [
        { id: "ferdinand", emoji: "🔫", label: "Archduke Franz Ferdinand", blurb: "Assassinated in Sarajevo, 1914.", lat: 43.85, lng: 18.39 },
        { id: "alliances", emoji: "🤝", label: "Alliance system", blurb: "Defensive blocs that turned a regional crisis into a world war.", lat: 48.86, lng: 2.35 },
        { id: "militarism", emoji: "🪖", label: "Militarism", blurb: "Industrial buildup of armies + weapons.", lat: 52.52, lng: 13.4 },
      ],
      saq: {
        prompt: "Identify ONE long-term cause of World War I.",
        cer: {
          claim: "The European alliance system turned a localized assassination into a continental war.",
          evidence: "The Triple Entente (France, Russia, Britain) and the Triple Alliance (Germany, Austria-Hungary, Italy) committed every major power to mutual defense, so when Austria-Hungary declared war on Serbia, the alliances pulled everyone in.",
          reasoning: "Alliances alone wouldn't have caused war — but layered on top of militarism, imperial competition, and nationalism, they removed any off-ramp once the trigger was pulled in Sarajevo.",
        },
      },
    },
    {
      id: "u7-bi3",
      unitNumber: 7,
      ideaNumber: 3,
      title: "Total War",
      thesis: "Governments used propaganda + new weapons technology to fight WWI as a total war.",
      year: 1916,
      focus: { lat: 50.0, lng: 5.0, altitude: 1.9 },
      spotlightRegions: ["europe"],
      bullets: [
        "Total war — every country leveraged all domestic assets, home and abroad.",
        "Propaganda — biased imagery meant to strike fear / mobilize.",
        "New weapons: poison gas, machine guns, submarines, tanks.",
        "Trench warfare — first time it produced lasting stalemates (industrialization kept pumping out munitions). Enormous casualties.",
        "Ended with the Treaty of Versailles.",
      ],
      features: [
        { id: "trenches", emoji: "🪖", label: "Trench warfare", blurb: "Stalemate on the Western Front.", lat: 50.45, lng: 2.83 },
        { id: "gas", emoji: "☠️", label: "Poison gas", blurb: "First mass-deployed at Ypres.", lat: 50.85, lng: 2.89 },
        { id: "tanks", emoji: "🚙", label: "Tanks", blurb: "First used by Britain on the Somme.", lat: 50.0, lng: 2.7 },
        { id: "versailles", emoji: "📜", label: "Treaty of Versailles", blurb: "Ended WWI; blamed Germany.", lat: 48.8, lng: 2.12 },
      ],
      saq: {
        prompt: "Identify ONE characteristic of WWI as a total war.",
        cer: {
          claim: "Industrialized weapons production made WWI a total war by sustaining stalemates indefinitely.",
          evidence: "Trench warfare on the Western Front killed millions but moved the lines barely at all because both sides could mass-produce machine guns, gas, and artillery.",
          reasoning: "Earlier wars ran out of steam when one side ran out of resources. Industrial economies could keep replacing what was destroyed, which is what produced the four-year stalemate and the casualty totals that made WWI feel categorically new.",
        },
      },
    },
    {
      id: "u7-bi4",
      unitNumber: 7,
      ideaNumber: 4,
      title: "Government in the Economy",
      thesis: "After WWI, governments took a more prominent role in their economies.",
      year: 1933,
      focus: { lat: 45.0, lng: 0.0, altitude: 2.2 },
      spotlightRegions: ["northAmerica", "europe", "russia"],
      bullets: [
        "1929 Great Depression starts in US, spreads. Hoover thinks the market will correct itself; FDR's New Deal = massive govt spending.",
        "Germany ruined → hyperinflation. Versailles' unfavorable terms → rise of fascism. Nazis champion strong govt intervention; cease reparations; ramp up military spending.",
        "Soviet Union — Stalin's 5-year plans force-industrialize the economy. Collectivization of agriculture (kinda a disaster). Food forcibly to urban centers → famine, especially in Ukraine.",
      ],
      features: [
        { id: "new-deal", emoji: "🇺🇸", label: "FDR New Deal", blurb: "Massive govt spending after the 1929 crash.", lat: 38.91, lng: -77.04 },
        { id: "weimar", emoji: "💸", label: "Weimar hyperinflation", blurb: "German economy collapses → space for fascism.", lat: 50.98, lng: 11.33 },
        { id: "five-year", emoji: "📈", label: "Stalin's 5-Year Plans", blurb: "Forced industrialization + collectivization.", lat: 55.75, lng: 37.62 },
      ],
      saq: {
        prompt: "Explain ONE way governments increased their role in their economies 1900–1945.",
        cer: {
          claim: "FDR's New Deal increased the U.S. government's role in the economy.",
          evidence: "After the 1929 Great Depression, FDR's administration launched massive federal spending programs to put people back to work and stabilize banks.",
          reasoning: "Hoover's hands-off approach hadn't worked, and similar pressures abroad pushed Germany toward fascist intervention and the USSR toward Stalin's 5-year plans. The New Deal is the democratic-capitalist version of the same trend: that the 1929 shock was severe enough to push every major government deeper into managing the economy.",
        },
      },
    },
    {
      id: "u7-bi5",
      unitNumber: 7,
      ideaNumber: 5,
      title: "Causes of WWII",
      thesis: "WWII was caused by the unsustainable WWI peace, economic crisis, and the rise of fascism.",
      year: 1939,
      focus: { lat: 52.0, lng: 13.0, altitude: 2.0 },
      spotlightRegions: ["europe", "russia"],
      bullets: [
        "War-guilt clause — Versailles blamed Germany; massive national shame.",
        "Reparations bankrupted Germany; the Great Depression hit hyperinflation.",
        "Rise of Nazis — extreme nationalism. Wanted to restore Germany.",
        "Hitler cancels reparations; takes land around Germany.",
        "Britain practiced appeasement — didn't want to oppose Hitler. Red line: invasion of Poland.",
      ],
      features: [
        { id: "war-guilt", emoji: "⚖️", label: "War-Guilt Clause", blurb: "Versailles blamed Germany — shame fuel for fascism.", lat: 48.8, lng: 2.12 },
        { id: "appeasement", emoji: "🤝", label: "Appeasement", blurb: "Britain ceded ground to Hitler.", lat: 51.51, lng: -0.13 },
        { id: "poland", emoji: "🚫", label: "Invasion of Poland", blurb: "1939 — red line crossed.", lat: 52.23, lng: 21.01 },
        { id: "hitler", emoji: "🪖", label: "Rise of Nazis", blurb: "Extreme nationalism — restore German greatness.", lat: 52.52, lng: 13.4 },
      ],
      saq: {
        prompt: "Identify ONE cause of World War II.",
        cer: {
          claim: "The unsustainable Treaty of Versailles helped cause WWII.",
          evidence: "Versailles' war-guilt clause and reparations payments humiliated Germany and crippled its economy, which the Nazis exploited to ride into power on a promise of national restoration.",
          reasoning: "Punishing Germany so hard after WWI made fascism marketable: any movement promising to undo Versailles had a built-in audience. WWII isn't just 'caused by' Versailles, but the treaty's terms set up the ideological conditions Hitler needed.",
        },
      },
    },
    {
      id: "u7-bi6",
      unitNumber: 7,
      ideaNumber: 6,
      title: "Total War: WWII",
      thesis: "WWII was another total war — totalitarian and democratic nations deployed all resources.",
      year: 1944,
      focus: { lat: 35.0, lng: 0.0, altitude: 2.4 },
      spotlightRegions: ["europe", "northAmerica", "russia", "japan"],
      bullets: [
        "Propaganda; manufacturing repurposed; colonial men fought in the war.",
        "US — strongest industrial center; protected by the Atlantic; enormous munitions output. Women into factories.",
        "Germany — relied on forced labor (concentration camps). Counterproductive; harsh conditions wrecked productivity.",
        "Civil liberties repressed — US Japanese-American internment.",
        "New tactics + tech: firebombing of Tokyo and Dresden; atomic bomb.",
      ],
      features: [
        { id: "us-factories", emoji: "🏭", label: "US wartime factories", blurb: "Untouchable behind the Atlantic; massive output.", lat: 41.83, lng: -87.62 },
        { id: "internment", emoji: "🚫", label: "Japanese-American internment", blurb: "US civil-liberty repression during WWII.", lat: 36.49, lng: -116.86 },
        { id: "dresden", emoji: "🔥", label: "Firebombing of Dresden", blurb: "Allied incendiary bombing.", lat: 51.05, lng: 13.74 },
        { id: "tokyo-fire", emoji: "🔥", label: "Firebombing of Tokyo", blurb: "Most destructive bombing raid in history.", lat: 35.68, lng: 139.69 },
        { id: "atom", emoji: "☢️", label: "Atomic bomb", blurb: "Hiroshima + Nagasaki, 1945.", lat: 34.39, lng: 132.45 },
      ],
      saq: {
        prompt: "Explain ONE way states mobilized for WWII.",
        cer: {
          claim: "The US mobilized by repurposing its industrial sector and bringing women into factories.",
          evidence: "Sheltered from invasion by the Atlantic, US factories produced enormous quantities of munitions; men went to fight while women filled industrial jobs.",
          reasoning: "Total war required total resource use — and the US had the rare combination of safe geography + huge industrial capacity. Germany's reliance on forced labor in concentration camps shows the opposite — coercion worked badly enough that Germany couldn't match Allied output.",
        },
      },
    },
    {
      id: "u7-bi7",
      unitNumber: 7,
      ideaNumber: 7,
      title: "Genocide & Ethnic Violence",
      thesis: "Extremist groups attempted to destroy populations through genocide and ethnic violence.",
      year: 1942,
      focus: { lat: 50.0, lng: 18.0, altitude: 2.0 },
      spotlightRegions: ["europe", "russia"],
      bullets: [
        "Nazi Holocaust — 'final solution.' Forced removal → ghettos → concentration camps.",
        "Holodomor — Stalin's collectivization in Ukraine. Farmers resented it, burned crops + killed livestock; food was confiscated and sent to urban workers; 7–10 million peasants died.",
      ],
      features: [
        { id: "auschwitz", emoji: "🕯️", label: "Auschwitz", blurb: "Nazi extermination camp in occupied Poland.", lat: 50.04, lng: 19.18 },
        { id: "holodomor", emoji: "🌾", label: "Holodomor", blurb: "1932–33 famine in Ukraine — forced collectivization.", lat: 50.45, lng: 30.52 },
      ],
      saq: {
        prompt: "Identify ONE example of state-sponsored mass violence in the period 1900–1945.",
        cer: {
          claim: "The Holodomor was a Soviet state-engineered famine in Ukraine.",
          evidence: "Stalin's collectivization stripped Ukrainian farms of grain to feed Soviet urban workers; 7–10 million peasants died of starvation.",
          reasoning: "Genocide isn't always rifles and gas chambers — the Holodomor shows how state policy plus food can be a weapon, which is why historians consistently group it with the Holocaust as a 20th-century state-sponsored mass killing.",
        },
      },
    },
  ],
};

const unit8: BriefingUnit = {
  unitNumber: 8,
  title: "Cold War & Decolonization",
  yearStart: 1945,
  yearEnd: 1991,
  accent: "#3b82f6",
  blurb: "Superpower rivalry, decolonization, proxy wars, and resistance movements.",
  bigIdeas: [
    {
      id: "u8-bi1",
      unitNumber: 8,
      ideaNumber: 1,
      title: "Cold War: An Ideological Struggle",
      thesis: "The Cold War was a decades-long ideological struggle between the US and USSR that shaped the geopolitics of the second half of the 20th century.",
      year: 1962,
      focus: { lat: 50.0, lng: 30.0, altitude: 2.5 },
      spotlightRegions: ["northAmerica", "russia", "europe"],
      bullets: [
        "Tensions before WWII even ended. Conflicting ideologies — democratic capitalism vs authoritarian communism.",
        "Mutual mistrust over post-WWII world. Stalin's Eastern Europe didn't get the promised democratic elections.",
        "Germany split into 4 zones; Berlin split into 4. Soviets put up the Berlin Wall.",
        "Decolonization spawns new states that can be pulled into either camp — or stay non-aligned.",
        "Non-Aligned Movement — Sukarno of Indonesia, African ex-colonies, decided not to be pulled into either bloc.",
      ],
      features: [
        { id: "berlin-wall", emoji: "🧱", label: "Berlin Wall", blurb: "Divided Berlin from 1961.", lat: 52.52, lng: 13.4 },
        { id: "non-aligned", emoji: "🕊️", label: "Non-Aligned Movement", blurb: "Sukarno + African ex-colonies refuse both blocs.", lat: -6.21, lng: 106.85 },
        { id: "iron-curtain", emoji: "🛡️", label: "Iron Curtain", blurb: "Divided Eastern + Western Europe.", lat: 50.0, lng: 14.0 },
      ],
      saq: {
        prompt: "Identify ONE cause of Cold War tensions between the US and USSR.",
        cer: {
          claim: "Disagreement over post-WWII Eastern Europe drove Cold War tensions.",
          evidence: "Stalin claimed Eastern Europe and refused to hold the democratic elections he had agreed to with Britain and the US.",
          reasoning: "The wartime alliance held only as long as Germany was the bigger threat. The moment that ended, ideological mistrust over what Eastern Europe should look like turned a temporary marriage of convenience into a four-decade rivalry.",
        },
      },
    },
    {
      id: "u8-bi2",
      unitNumber: 8,
      ideaNumber: 2,
      title: "Arms Race + Proxy Wars",
      thesis: "Major effects of the Cold War — an arms race, new alliances (NATO/Warsaw), and proxy wars.",
      year: 1965,
      focus: { lat: 10.0, lng: 80.0, altitude: 2.5 },
      spotlightRegions: ["northAmerica", "russia", "seasia", "latinAmerica", "southAfrica"],
      bullets: [
        "Massive nuclear stockpiles. MAD — mutually assured destruction.",
        "NATO + Warsaw Pact.",
        "Proxy wars — couldn't fight directly:",
        "  Asia: Korean War, Vietnam War (former colonies split between communist + anti-communist).",
        "  Latin America: Sandinistas vs Contras in Nicaragua.",
        "  Africa: Angolan Civil War (communists won).",
      ],
      features: [
        { id: "iron-curtain-line", emoji: "🛡️", label: "Iron Curtain", blurb: "Stettin → Trieste — the line dividing NATO Europe from the Warsaw Pact.", color: "#3b82f6", path: [
          { lat: 53.43, lng: 14.55 },  // Stettin (Szczecin)
          { lat: 52.23, lng: 21.01 },  // Warsaw
          { lat: 50.08, lng: 14.43 },  // Prague
          { lat: 48.21, lng: 16.37 },  // Vienna (border)
          { lat: 47.50, lng: 19.04 },  // Budapest
          { lat: 45.65, lng: 13.78 },  // Trieste
        ] },
        { id: "vietnam-war", emoji: "🇻🇳", label: "Vietnam War", blurb: "Hanoi (Soviet-backed N) vs Saigon (US-backed S). Ho Chi Minh trail supplied the south.", color: "#dc2626", path: [
          { lat: 21.03, lng: 105.85 }, // Hanoi
          { lat: 17.5, lng: 106.6 },   // DMZ
          { lat: 15.97, lng: 108.25 }, // Da Nang
          { lat: 10.82, lng: 106.63 }, // Saigon
        ] },
        { id: "korean-war", emoji: "🇰🇷", label: "Korean War", blurb: "1950–53 — proxy war on the peninsula.", lat: 38.0, lng: 127.0 },
        { id: "nicaragua", emoji: "🇳🇮", label: "Sandinistas / Contras", blurb: "Cold War proxy in L. America.", lat: 12.86, lng: -85.21 },
        { id: "angola", emoji: "🇦🇴", label: "Angolan Civil War", blurb: "Communists won this one.", lat: -11.2, lng: 17.87 },
        { id: "nato", emoji: "🛡️", label: "NATO", blurb: "Western alliance.", lat: 50.85, lng: 4.35 },
        { id: "warsaw", emoji: "🛡️", label: "Warsaw Pact", blurb: "Soviet bloc alliance.", lat: 52.23, lng: 21.01 },
      ],
      saq: {
        prompt: "Identify ONE example of a Cold War proxy conflict.",
        cer: {
          claim: "The Vietnam War was a Cold War proxy conflict.",
          evidence: "After Vietnam was decolonized, communist North Vietnam (backed by the USSR) and anti-communist South Vietnam (backed by the US) fought a long, deadly war.",
          reasoning: "Direct US-USSR fighting risked nuclear annihilation, so the rivalry was outsourced to client states. Vietnam shows the pattern: a local civil war was supercharged into a long, deadly conflict because both superpowers used it as a place to compete safely.",
        },
      },
    },
    {
      id: "u8-bi3",
      unitNumber: 8,
      ideaNumber: 3,
      title: "Communist China",
      thesis: "Some states adopted communism — none more significantly than China.",
      year: 1958,
      focus: { lat: 35.0, lng: 105.0, altitude: 1.9 },
      spotlightRegions: ["china", "westAfrica"],
      bullets: [
        "Grievances over Western dominance + unequal treaties.",
        "1911 Republic; civil war on/off; Mao Zedong + USSR-backed communists defeat the Nationalists. China becomes a communist state — different flavor than the USSR.",
        "Mao's collectivization of agriculture — relatively peaceful because peasants supported the revolution.",
        "Great Leap Forward — rapid industrialization in rural areas via heavy industry. Bad harvest → millions starved.",
        "Egypt — Nasser nationalized the Suez Canal (1956). Britain, France, Israel invade. USSR backs Egypt; Eisenhower tells the invaders to withdraw.",
      ],
      features: [
        { id: "mao", emoji: "☭", label: "Mao Zedong", blurb: "Defeated Nationalists, founded PRC, 1949.", lat: 39.9, lng: 116.4 },
        { id: "great-leap", emoji: "📉", label: "Great Leap Forward", blurb: "Rapid industrialization → famine.", lat: 30.27, lng: 120.16 },
        { id: "suez-route", emoji: "🚢", label: "Suez Canal route", blurb: "Mediterranean → Red Sea — Egypt's most strategic asset. Nationalized by Nasser, 1956.", color: "#0ea5e9", path: [
          { lat: 31.26, lng: 32.30 },   // Port Said
          { lat: 30.59, lng: 32.27 },   // Ismailia
          { lat: 29.97, lng: 32.55 },   // Suez
          { lat: 22.0, lng: 38.0 },     // Red Sea
        ] },
      ],
      saq: {
        prompt: "Explain ONE difference between Maoist Chinese and Soviet communism.",
        cer: {
          claim: "Mao's collectivization was peasant-driven; Stalin's was forced from the top.",
          evidence: "In China, peasants who had supported the revolution accepted collectivization relatively peacefully; in the USSR, Stalin's collectivization triggered the Holodomor and mass resistance.",
          reasoning: "The peasant base of the Chinese revolution gave Mao buy-in that Stalin never had — which is why Maoism's failures (Great Leap Forward) came from policy disasters, not political resistance, while Stalin's came from violently coercing a population that didn't want it.",
        },
      },
    },
    {
      id: "u8-bi4",
      unitNumber: 8,
      ideaNumber: 4,
      title: "Decolonization: Two Paths",
      thesis: "Decolonization happened either through negotiated independence or armed conflict.",
      year: 1947,
      focus: { lat: 25.0, lng: 75.0, altitude: 2.4 },
      spotlightRegions: ["india", "westAfrica", "europe"],
      bullets: [
        "India — Indian National Congress (1885) petitioned for self-rule. Gandhi's nonviolence didn't end colonialism before WWII; after WWII Britain was too broke and granted independence. Partition into India + Pakistan was extremely violent.",
        "Algeria — French colony. Algerians wanted independence after WWII; FLN (National Liberation Front) fought violently. France retaliated brutally; new French president ended the war and granted independence.",
      ],
      features: [
        { id: "gandhi-india", emoji: "🇮🇳", label: "Indian Independence (1947)", blurb: "Gandhi-led nonviolent path → partition.", lat: 28.6, lng: 77.2 },
        { id: "partition", emoji: "✂️", label: "Partition", blurb: "Violent division of India + Pakistan.", lat: 31.55, lng: 74.34 },
        { id: "algeria", emoji: "🇩🇿", label: "Algerian War", blurb: "FLN's violent struggle for independence.", lat: 36.75, lng: 3.06 },
      ],
      saq: {
        prompt: "Identify ONE difference between two decolonization movements.",
        cer: {
          claim: "Indian decolonization was largely nonviolent while Algerian decolonization was won through armed conflict.",
          evidence: "Gandhi's Indian National Congress used nonviolent civil disobedience to pressure Britain; Algeria's FLN waged a violent guerrilla war against France.",
          reasoning: "Both paths worked, but they tell different stories. Nonviolence assumed a colonizer with enough domestic moral pressure to budge (post-war Britain); armed struggle was needed when the colonizer (France with deep settler-citizen roots in Algeria) wouldn't.",
        },
      },
      venn: {
        left: "India (negotiated)",
        right: "Algeria (armed)",
        leftOnly: ["Gandhi's nonviolence", "Indian National Congress petitions", "Britain weakened by WWII"],
        rightOnly: ["FLN guerrilla war", "Brutal French retaliation", "Settler-citizen colonizer"],
        both: ["Decolonized after WWII", "Anti-colonial nationalism", "Major impact on global decolonization"],
      },
    },
    {
      id: "u8-bi5",
      unitNumber: 8,
      ideaNumber: 5,
      title: "Borders, Conflict & Displacement",
      thesis: "The redrawing of political boundaries during decolonization led to conflict and displacement.",
      year: 1948,
      focus: { lat: 30.0, lng: 35.0, altitude: 2.2 },
      spotlightRegions: ["middleEast", "india"],
      bullets: [
        "India / Pakistan partition.",
        "Palestine — pre-WWI part of Ottoman Empire; majority Muslim. Ottomans on the losing side; Britain mandated. Late-19th-c Zionism wanted a Jewish state in Palestine; growing Jewish migration; Arab resistance.",
      ],
      features: [
        { id: "partition2", emoji: "✂️", label: "India–Pakistan partition", blurb: "Mass displacement, mass violence.", lat: 31.55, lng: 74.34 },
        { id: "palestine", emoji: "🏳️", label: "British Mandate Palestine", blurb: "Site of Zionist migration + Arab resistance.", lat: 31.78, lng: 35.21 },
      ],
      saq: {
        prompt: "Explain ONE consequence of decolonization-era boundary changes.",
        cer: {
          claim: "Partition of British India produced one of the largest forced migrations in modern history.",
          evidence: "When Britain partitioned the subcontinent into Hindu-majority India and Muslim-majority Pakistan in 1947, mass communal violence and displacement killed and uprooted millions.",
          reasoning: "Drawing borders along religious lines didn't resolve the conflict — it just relocated it. The Palestine mandate is the same pattern: redrawn borders by departing imperial powers seeded ongoing 21st-century conflicts.",
        },
      },
    },
    {
      id: "u8-bi6",
      unitNumber: 8,
      ideaNumber: 6,
      title: "State-Led Economic Development",
      thesis: "In newly independent states, governments often took a strong role in guiding economic life.",
      year: 1956,
      focus: { lat: 25.0, lng: 60.0, altitude: 2.4 },
      spotlightRegions: ["middleEast", "india"],
      bullets: [
        "Nasser nationalized the Suez Canal — strong state assertion of economic sovereignty. Aligned with USSR.",
        "Indira Gandhi adopted the Green Revolution in India.",
      ],
      features: [
        { id: "nasser", emoji: "🇪🇬", label: "Nasser", blurb: "Nationalized the Suez Canal.", lat: 30.04, lng: 31.24 },
        { id: "green-rev", emoji: "🌾", label: "Green Revolution", blurb: "Indira Gandhi adopts new grain strains.", lat: 28.6, lng: 77.2 },
      ],
      saq: {
        prompt: "Explain ONE way a newly-independent state used the government to direct its economy.",
        cer: {
          claim: "Egypt's Nasser nationalized the Suez Canal to assert economic sovereignty.",
          evidence: "After independence, Nasser nationalized the strategically critical Suez Canal, drawing British, French, and Israeli intervention — and Soviet backing.",
          reasoning: "Newly independent states couldn't trust their economies to former colonizers, so a strong state hand was the default play. The Suez nationalization wasn't just symbolic — it gave Egypt a major revenue stream and signaled to other ex-colonies that the same was possible for them.",
        },
      },
    },
    {
      id: "u8-bi7",
      unitNumber: 8,
      ideaNumber: 7,
      title: "Resistance Movements",
      thesis: "Movements to resist oppressive power structures multiplied — some nonviolent, some violent.",
      year: 1964,
      focus: { lat: 0.0, lng: 30.0, altitude: 2.5 },
      spotlightRegions: ["india", "northAmerica", "southAfrica"],
      bullets: [
        "Gandhi — homespun (boycott British cotton, make clothes at home); Salt March (walked hundreds of miles to make their own salt).",
        "Martin Luther King Jr. — civil disobedience vs racial segregation; Montgomery Bus Boycott. Civil Rights movement → school desegregation, anti-discrimination laws.",
        "Nelson Mandela — ended South African Apartheid. Strikes / boycotts at first, later other tactics. Jailed two decades; released 1990; elected president 1994.",
      ],
      features: [
        { id: "salt-march", emoji: "🧂", label: "Salt March", blurb: "Gandhi walks 240 mi to the sea to make salt.", path: [
          { lat: 23.22, lng: 72.68 }, { lat: 22.6, lng: 72.55 }, { lat: 22.2, lng: 72.6 }, { lat: 21.65, lng: 72.81 },
        ] },
        { id: "homespun", emoji: "🧵", label: "Homespun movement", blurb: "Boycotted British cloth.", lat: 22.3, lng: 70.78 },
        { id: "mlk", emoji: "✊🏿", label: "Montgomery Bus Boycott", blurb: "MLK-led civil-disobedience action.", lat: 32.36, lng: -86.3 },
        { id: "mandela", emoji: "🇿🇦", label: "Nelson Mandela", blurb: "Ended Apartheid; elected president 1994.", lat: -25.74, lng: 28.18 },
      ],
      saq: {
        prompt: "Identify ONE nonviolent resistance movement of the 20th century.",
        cer: {
          claim: "Gandhi's Salt March was a defining nonviolent protest.",
          evidence: "In 1930, Gandhi led followers on a hundreds-of-miles walk to the sea to make their own salt, defying the British salt monopoly.",
          reasoning: "The march was deliberately undramatic — peaceful, mass, public — which made the British response (mass arrests) look indefensible. That contrast is what made nonviolent resistance an effective political tool, copied later by King and the civil-rights movement.",
        },
      },
    },
    {
      id: "u8-bi8",
      unitNumber: 8,
      ideaNumber: 8,
      title: "End of the Cold War",
      thesis: "The Cold War ended because of US military spending, the failed Soviet invasion of Afghanistan, and Gorbachev's reforms.",
      year: 1989,
      focus: { lat: 50.0, lng: 50.0, altitude: 2.5 },
      spotlightRegions: ["russia", "northAmerica", "india"],
      bullets: [
        "Reagan led massive US spending. Soviets tried to match it.",
        "1979: Soviets invaded Afghanistan to prop up communist govt. US, Pakistan, Saudis supplied the rebels. Long, expensive failure for the USSR.",
        "Gorbachev (1985): perestroika (restructure economy, reduce central planning) + glasnost (openness — freedom of speech). Said USSR would not militarily prop up communist states; states in the bloc wanted out; the Supreme Soviet dissolved the USSR.",
      ],
      features: [
        { id: "afghan", emoji: "🪖", label: "Soviet-Afghan War", blurb: "1979–89 — quagmire that bled the USSR.", lat: 34.53, lng: 69.17 },
        { id: "reagan", emoji: "🇺🇸", label: "Reagan spending", blurb: "Forced USSR into a budget race it couldn't win.", lat: 38.91, lng: -77.04 },
        { id: "gorbachev", emoji: "📜", label: "Glasnost / Perestroika", blurb: "Gorbachev's reforms — accelerated the unraveling.", lat: 55.75, lng: 37.62 },
      ],
      saq: {
        prompt: "Explain ONE reason for the end of the Cold War.",
        cer: {
          claim: "Gorbachev's reforms accelerated the dissolution of the Soviet Union.",
          evidence: "His perestroika reduced central planning and glasnost lifted decades of speech restrictions; he also announced the USSR would no longer use force to keep communist states in line.",
          reasoning: "Once the threat of Soviet intervention was off the table, Eastern Bloc states immediately moved toward independence — Gorbachev's reforms were meant to save the USSR's economy, but they removed the coercion that had been holding the bloc together.",
        },
      },
    },
  ],
};

const unit9: BriefingUnit = {
  unitNumber: 9,
  title: "Globalization",
  yearStart: 1900,
  yearEnd: 2025,
  accent: "#14b8a6",
  blurb: "Tech, disease, environment, economy, culture, resistance, institutions.",
  bigIdeas: [
    {
      id: "u9-bi1",
      unitNumber: 9,
      ideaNumber: 1,
      title: "Technologies of Globalization",
      thesis: "New technologies increased the speed of globalization with widespread effects on the global population in the 20th–21st centuries.",
      year: 1990,
      focus: { lat: 30.0, lng: 0.0, altitude: 2.6 },
      spotlightRegions: ["northAmerica", "europe", "japan", "china", "india", "seasia"],
      bullets: [
        "Communication: radio, cellphones, Internet → people meet ideas outside their culture.",
        "Transportation: air travel; shipping containers (huge increase in goods that can ship internationally).",
        "New energy: petroleum, nuclear power.",
        "Medical: birth control → declining birth rates in Italy, Japan, Germany. Vaccines (polio, measles).",
        "Agriculture: Green Revolution — controlled cross-breeding; new strains of wheat and grain. Most occurred in developing nations.",
      ],
      features: [
        { id: "container-route", emoji: "📦", label: "Trans-Pacific container route", blurb: "Shanghai → Long Beach. The single biggest container lane in the world.", color: "#0ea5e9", path: [
          { lat: 31.23, lng: 121.47 }, // Shanghai
          { lat: 22.4, lng: 113.5 },   // Hong Kong / Shenzhen
          { lat: 21.31, lng: -157.86 },// Honolulu
          { lat: 33.77, lng: -118.19 },// Long Beach
        ] },
        { id: "container-suez", emoji: "📦", label: "Asia → Europe (Suez)", blurb: "Shanghai → Singapore → Suez → Rotterdam.", color: "#22d3ee", path: [
          { lat: 31.23, lng: 121.47 }, // Shanghai
          { lat: 1.35, lng: 103.82 },  // Singapore
          { lat: 6.93, lng: 79.85 },   // Colombo
          { lat: 12.78, lng: 45.04 },  // Aden
          { lat: 30.04, lng: 32.55 },  // Suez
          { lat: 36.14, lng: -5.35 },  // Gibraltar
          { lat: 51.92, lng: 4.48 },   // Rotterdam
        ] },
        { id: "internet", emoji: "🌐", label: "Internet", blurb: "Cross-border ideas at the speed of light.", lat: 37.77, lng: -122.42 },
        { id: "green-rev2", emoji: "🌾", label: "Green Revolution", blurb: "New high-yield grain strains.", lat: 17.45, lng: 78.49 },
        { id: "vaccines", emoji: "💉", label: "Vaccines", blurb: "Polio, measles in wealthy nations.", lat: 39.95, lng: -75.16 },
      ],
      saq: {
        prompt: "Explain ONE way technology accelerated globalization in the 20th century.",
        cer: {
          claim: "Shipping containers dramatically increased global trade.",
          evidence: "Standardized containers let goods move by ship, train, and truck without being repacked, which slashed shipping costs and increased the volume of internationally shipped goods.",
          reasoning: "Cheap, fast shipping is what made it economically rational to manufacture in Vietnam and sell in Sweden. Without the container, multinational supply chains as we know them aren't possible — every other tech of globalization (Internet, free trade agreements) leans on it.",
        },
      },
    },
    {
      id: "u9-bi2",
      unitNumber: 9,
      ideaNumber: 2,
      title: "Disease in Globalization",
      thesis: "Old and new diseases continued to threaten populations in the age of globalization.",
      year: 2020,
      focus: { lat: 0.0, lng: 30.0, altitude: 2.5 },
      spotlightRegions: ["southAfrica", "westAfrica", "china", "europe"],
      bullets: [
        "Diseases of poverty: malaria, tuberculosis, cholera. Vaccines exist; access uneven.",
        "Globalization-era pandemics: Ebola, AIDS, Spanish Flu (1918) → demographic + economic impact, drove tech advances (COVID mRNA vaccines).",
        "Diseases of old age: heart disease, Alzheimer's.",
      ],
      features: [
        { id: "ebola", emoji: "🦠", label: "Ebola", blurb: "W African outbreaks.", lat: 9.94, lng: -9.7 },
        { id: "spanish-flu", emoji: "🦠", label: "Spanish Flu (1918)", blurb: "Global pandemic following WWI.", lat: 41.9, lng: 12.5 },
        { id: "covid", emoji: "💉", label: "COVID mRNA vaccine", blurb: "Tech leap from a global crisis.", lat: 50.94, lng: 6.96 },
      ],
      saq: {
        prompt: "Identify ONE pattern of disease in the modern globalized world.",
        cer: {
          claim: "Diseases linked to poverty (TB, malaria, cholera) persist unevenly even though vaccines and treatments exist.",
          evidence: "Wealthier nations have largely controlled malaria, TB, and cholera through public-health infrastructure; in poorer nations these diseases still kill millions annually.",
          reasoning: "Globalization made medical tech available globally, but distribution didn't follow. The split between curable diseases that still kill in poor countries and lifestyle-of-old-age diseases in rich ones is one of the clearest signals of inequality the modern era produces.",
        },
      },
    },
    {
      id: "u9-bi3",
      unitNumber: 9,
      ideaNumber: 3,
      title: "Environmental Problems",
      thesis: "Globalization has created significant environmental problems with various attempted solutions.",
      year: 1997,
      focus: { lat: 0.0, lng: 30.0, altitude: 2.6 },
      spotlightRegions: ["southAfrica", "westAfrica", "europe", "northAmerica", "seasia", "china"],
      bullets: [
        "Deforestation.",
        "Desertification — fertile land dried out.",
        "Air-quality decline — Great Smog of London (1950s).",
        "Increasing freshwater use — farming + impoverished access to clean water.",
        "Climate change — Kyoto Protocol (1997), Paris Agreement.",
      ],
      features: [
        { id: "deforest", emoji: "🌳", label: "Deforestation (Amazon)", blurb: "Tropical forest loss.", lat: -3.0, lng: -60.0 },
        { id: "great-smog", emoji: "🌫️", label: "Great Smog of London", blurb: "1952 — fog + coal emissions.", lat: 51.51, lng: -0.13 },
        { id: "kyoto", emoji: "📜", label: "Kyoto Protocol", blurb: "1997 — climate treaty.", lat: 35.01, lng: 135.77 },
        { id: "paris", emoji: "📜", label: "Paris Agreement", blurb: "2015 — climate commitments.", lat: 48.86, lng: 2.35 },
      ],
      saq: {
        prompt: "Identify ONE environmental challenge produced by globalization.",
        cer: {
          claim: "Industrial activity has driven climate change to the point of requiring international treaties.",
          evidence: "Carbon emissions from industrial activity have raised global temperatures, prompting the Kyoto Protocol (1997) and the Paris Agreement to commit member nations to emission limits.",
          reasoning: "Climate change is the most globalization-shaped problem on the list — no single country produced it, no single country can fix it, and the response (international treaties) reflects that the problem itself doesn't respect borders.",
        },
      },
    },
    {
      id: "u9-bi4",
      unitNumber: 9,
      ideaNumber: 4,
      title: "Globalized Economy",
      thesis: "Both the nature and scope of the globalized economy changed significantly since 1900.",
      year: 1995,
      focus: { lat: 30.0, lng: 0.0, altitude: 2.6 },
      spotlightRegions: ["northAmerica", "europe", "seasia", "latinAmerica"],
      bullets: [
        "Free-market economics spreads — Reagan + Thatcher; deregulation, tax cuts.",
        "Knowledge economies — wealthy countries facilitate; poor countries (Vietnam, Mexico) become manufacturing hubs.",
        "Multinational corporations — Nestlé. Knowledge workers in HQ countries; mfg in poorer countries.",
        "Free-trade agreements — NAFTA (Canada, US, Mexico), ASEAN.",
      ],
      features: [
        { id: "reagan-thatcher", emoji: "💼", label: "Reagan / Thatcher", blurb: "Deregulation + tax cuts.", lat: 51.51, lng: -0.13 },
        { id: "nestle", emoji: "🍫", label: "Nestlé", blurb: "Multinational — global supply chain.", lat: 46.46, lng: 6.86 },
        { id: "nafta", emoji: "🤝", label: "NAFTA", blurb: "Canada + US + Mexico free trade.", lat: 19.43, lng: -99.13 },
        { id: "asean", emoji: "🤝", label: "ASEAN", blurb: "Southeast Asian regional trade unit.", lat: 1.35, lng: 103.82 },
      ],
      saq: {
        prompt: "Explain ONE shift in the global economy after 1900.",
        cer: {
          claim: "Multinational corporations split production globally — knowledge work in wealthy countries, manufacturing in poorer ones.",
          evidence: "Nestlé and similar multinationals employ knowledge workers in their headquarters countries while contracting manufacturing out to lower-wage economies like Vietnam and Mexico.",
          reasoning: "This isn't just a corporate-strategy detail; it's the basic structure of the post-1900 global economy. NAFTA and ASEAN exist to lubricate that structure by lowering trade barriers between the headquarters and the factory floor.",
        },
      },
    },
    {
      id: "u9-bi5",
      unitNumber: 9,
      ideaNumber: 5,
      title: "Reform: Rights & Inequality",
      thesis: "Globalization has led to calls for reform — human rights and economic inequality.",
      year: 1975,
      focus: { lat: 30.0, lng: 30.0, altitude: 2.5 },
      spotlightRegions: ["southAfrica", "northAmerica", "india", "europe"],
      bullets: [
        "Apartheid in South Africa — Nelson Mandela.",
        "Civil rights movement vs Jim Crow in the US.",
        "Caste reform in India — caste reservation system.",
        "1975 UN World Conference on Women — declaration of rights for women, right to vote.",
      ],
      features: [
        { id: "apartheid-end", emoji: "🇿🇦", label: "End of Apartheid", blurb: "Mandela leads the transition.", lat: -25.74, lng: 28.18 },
        { id: "civil-rights", emoji: "✊🏿", label: "Civil Rights Movement", blurb: "Outlawed Jim Crow segregation.", lat: 33.75, lng: -84.39 },
        { id: "caste-reserve", emoji: "🛕", label: "Caste reservation", blurb: "Indian quotas for lower-caste groups.", lat: 28.6, lng: 77.2 },
        { id: "un-women", emoji: "♀️", label: "UN World Conf. on Women", blurb: "1975 — Declaration of rights for women.", lat: 19.43, lng: -99.13 },
      ],
      saq: {
        prompt: "Identify ONE 20th-century reform movement against discrimination.",
        cer: {
          claim: "The end of South African Apartheid was the result of a sustained reform movement.",
          evidence: "Nelson Mandela led decades of strikes, boycotts, and (later) other tactics; jailed for two decades; released 1990; elected president 1994.",
          reasoning: "Apartheid wasn't just a domestic story — global pressure (sanctions, boycotts, international solidarity) was what made it untenable. That's the pattern of globalization-era reform: domestic movements amplified by transnational support.",
        },
      },
    },
    {
      id: "u9-bi6",
      unitNumber: 9,
      ideaNumber: 6,
      title: "Globalized Culture",
      thesis: "After 1900, culture became increasingly globalized.",
      year: 2000,
      focus: { lat: 20.0, lng: 90.0, altitude: 2.6 },
      spotlightRegions: ["northAmerica", "japan", "india", "seasia", "latinAmerica"],
      bullets: [
        "Jamaican Reggae — Bob Marley.",
        "K-pop — BTS.",
        "Hollywood + Bollywood — American values spread through films.",
        "Consumer culture — online commerce (Amazon, Alibaba) → goods cross borders.",
        "Global brands — Coca-Cola, McDonald's, KFC.",
      ],
      features: [
        { id: "marley", emoji: "🎵", label: "Bob Marley / Reggae", blurb: "Jamaica → world.", lat: 18.11, lng: -77.30 },
        { id: "bts", emoji: "🎤", label: "BTS / K-pop", blurb: "Korean wave goes global.", lat: 37.57, lng: 126.98 },
        { id: "bollywood", emoji: "🎬", label: "Bollywood", blurb: "Indian film industry — global reach.", lat: 19.07, lng: 72.87 },
        { id: "mcd", emoji: "🍔", label: "McDonald's", blurb: "Globalized consumer brand.", lat: 41.88, lng: -87.63 },
      ],
      saq: {
        prompt: "Explain ONE example of cultural globalization after 1900.",
        cer: {
          claim: "American films exported American cultural values to places that had not historically been influenced by them.",
          evidence: "Hollywood films circulated globally, alongside multinational consumer brands like Coca-Cola and McDonald's.",
          reasoning: "Cultural globalization is mostly carried by entertainment + brands, not formal policy. Hollywood doesn't just sell tickets — it ships an idea of what 'modern' looks like, which is why governments from France to China have all tried (with mixed success) to push back on it.",
        },
      },
    },
    {
      id: "u9-bi7",
      unitNumber: 9,
      ideaNumber: 7,
      title: "Resistance to Globalization",
      thesis: "Despite the benefits of globalization, significant resistance movements exist.",
      year: 1999,
      focus: { lat: 30.0, lng: -100.0, altitude: 2.5 },
      spotlightRegions: ["northAmerica", "latinAmerica", "southAfrica", "westAfrica"],
      bullets: [
        "Most benefits of globalization concentrated in the Global North.",
        "Global South often experienced globalization as a threat.",
        "1999 Battle for Seattle — protest against the WTO.",
        "Other protests against the IMF, claiming it favored richer nations.",
      ],
      features: [
        { id: "seattle", emoji: "🪧", label: "Battle for Seattle", blurb: "1999 anti-WTO protest.", lat: 47.6, lng: -122.33 },
        { id: "imf-protest", emoji: "🪧", label: "Anti-IMF protests", blurb: "Argued IMF favored richer nations.", lat: 38.91, lng: -77.04 },
      ],
      saq: {
        prompt: "Identify ONE form of resistance to globalization.",
        cer: {
          claim: "The 1999 Battle for Seattle was a major anti-globalization protest.",
          evidence: "Protesters mobilized en masse against the World Trade Organization meeting, arguing it served wealthy nations and corporations at the expense of workers and the Global South.",
          reasoning: "Resistance to globalization isn't just rhetorical — Seattle showed that global institutions face real political pressure, which is why later WTO/IMF policies have had to account for environmental and labor critiques in ways they didn't in the 1980s.",
        },
      },
    },
    {
      id: "u9-bi8",
      unitNumber: 9,
      ideaNumber: 8,
      title: "Global Governance",
      thesis: "Globalization changed how nations and states interact.",
      year: 1948,
      focus: { lat: 40.0, lng: -73.0, altitude: 2.4 },
      spotlightRegions: ["northAmerica", "europe", "russia", "china", "india"],
      bullets: [
        "United Nations formed after WWII to maintain world peace.",
        "Security Council, International Court of Justice, Universal Declaration of Human Rights.",
        "All humans have inherent rights regardless of state — life, gender equality, anti-slavery, refugee protection.",
      ],
      features: [
        { id: "un", emoji: "🇺🇳", label: "United Nations", blurb: "Formed 1945 — international peace body.", lat: 40.75, lng: -73.97 },
        { id: "udhr", emoji: "📜", label: "Universal Declaration of Human Rights", blurb: "1948 — global framework of rights.", lat: 46.21, lng: 6.14 },
        { id: "icj", emoji: "⚖️", label: "International Court of Justice", blurb: "UN judicial organ.", lat: 52.08, lng: 4.31 },
      ],
      saq: {
        prompt: "Identify ONE international institution that emerged from globalization.",
        cer: {
          claim: "The United Nations institutionalized global governance after WWII.",
          evidence: "Founded 1945 to keep peace, the UN runs the Security Council, the International Court of Justice, and produced the 1948 Universal Declaration of Human Rights.",
          reasoning: "The UN's existence formalizes the idea that some problems — peace, rights, refugees — are too big for any one state. It's not always effective, but the framework itself is a globalization product: institutions that operate across borders because the problems they handle do, too.",
        },
      },
    },
  ],
};

export const briefingUnits4to9: BriefingUnit[] = [unit4, unit5, unit6, unit7, unit8, unit9];
