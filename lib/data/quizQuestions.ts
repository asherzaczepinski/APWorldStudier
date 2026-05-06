// Hand-curated multiple-choice question bank, one set per Big Idea.
// These are designed to be actually useful for the AP — they hit specific
// people, dates, concepts, comparisons, and the "why does this matter" angle.
// Each set targets ~8 questions per Big Idea.
//
// Used by StudyDeck.tsx as the primary pool for both global Quiz mode and
// the per-Big-Idea focused quiz launched from each review card.

export type IdeaQuestion = {
  prompt: string;
  options: string[];
  correctIndex: number;
  rationale: string;
};

import { ideaQuizzesPart2 } from "./quizQuestionsPart2";

const part1: Record<string, IdeaQuestion[]> = {
  // =========================================================================
  // UNIT 1
  // =========================================================================
  "u1-bi1": [
    {
      prompt: "How did the Song dynasty primarily staff its imperial bureaucracy?",
      options: [
        "Hereditary aristocratic appointments",
        "The Confucian civil-service exam",
        "A military-officer rotation system",
        "Buddhist monastic networks",
      ],
      correctIndex: 1,
      rationale: "The Song expanded the civil-service exam, basing officeholding on Confucian-classics knowledge rather than birth.",
    },
    {
      prompt: "Champa rice, imported from modern Vietnam, mattered most because it…",
      options: [
        "Fed the Mongol cavalry on the Silk Road",
        "Was traded for spices in the Indian Ocean",
        "Allowed two or three harvests per year and fueled a Song population boom",
        "Replaced wheat as the staple of northern China",
      ],
      correctIndex: 2,
      rationale: "Fast-ripening Champa rice sustained a population spike from ~60M to over 100M under the Song.",
    },
    {
      prompt: "The Grand Canal was significant because it…",
      options: [
        "Connected the Yellow and Yangzi rivers, moving tribute grain north",
        "Linked China to Persia via overland trade",
        "Was built entirely under the Mongol Yuan dynasty",
        "Replaced the need for the Silk Road",
      ],
      correctIndex: 0,
      rationale: "The 1,100-mile canal was the spinal cord of the Song economy, moving tribute grain between two great river systems.",
    },
    {
      prompt: "Chan Buddhism is best described as…",
      options: [
        "An Indian school resistant to Chinese influence",
        "A Sinified form of Buddhism that diffused to Korea and Japan",
        "A revival movement against Confucian orthodoxy",
        "The state religion of the Song dynasty",
      ],
      correctIndex: 1,
      rationale: "Chan was the Chinese form of Buddhism — it spread to Korea and Japan (where it became Zen).",
    },
    {
      prompt: "What was a key economic innovation in Song China?",
      options: [
        "The world's first paper currency",
        "The double-entry ledger",
        "The joint-stock company",
        "Gold-backed treasury notes",
      ],
      correctIndex: 0,
      rationale: "Song-era 'flying cash' was the first true paper money in world history.",
    },
    {
      prompt: "The Song dynasty's bureaucracy is BEST contrasted with which earlier political form?",
      options: [
        "Decentralized European feudalism",
        "Theocratic Mesopotamian city-states",
        "Roman senatorial aristocracy",
        "All of the above",
      ],
      correctIndex: 3,
      rationale: "The Song bureaucracy concentrated power through merit-based exam appointments — the opposite of feudalism, theocracy, or aristocratic senates.",
    },
    {
      prompt: "Buddhism's continued influence in Song China demonstrates which AP World theme?",
      options: [
        "The decline of religious diversity in Asia",
        "Cultural diffusion via earlier trade contacts",
        "The triumph of Confucianism over all other belief systems",
        "The collapse of Indian intellectual influence",
      ],
      correctIndex: 1,
      rationale: "Buddhism reached China via Silk Road trade — its persistence under the Song shows long-term diffusion at work.",
    },
    {
      prompt: "The Song dynasty's expansion of bureaucracy primarily helped the state by…",
      options: [
        "Replacing nobles with state-trained officials, making centralized rule durable",
        "Empowering local warlords against the emperor",
        "Eliminating the need for taxation",
        "Removing Buddhism from public life",
      ],
      correctIndex: 0,
      rationale: "Scholar-officials owed their positions to the state, not noble birth — that's what made centralized rule stick across a huge territory.",
    },
  ],

  "u1-bi2": [
    {
      prompt: "The Delhi Sultanate and the Mamluk Sultanate were similar in that both…",
      options: [
        "Were Sunni Turkic Islamic states that emerged after Abbasid decline",
        "Were direct successors to the Roman Empire",
        "Practiced Shia Islam exclusively",
        "Refused to engage in trade with non-Muslims",
      ],
      correctIndex: 0,
      rationale: "Both were Turkic Sunni sultanates that filled the vacuum left by the weakening Abbasids — they continued Dar al-Islam in new political forms.",
    },
    {
      prompt: "What halted the Mongol advance into the Middle East?",
      options: [
        "The Battle of Manzikert",
        "The Mamluk victory at Ain Jalut (1260)",
        "The First Crusade",
        "The Sack of Baghdad",
      ],
      correctIndex: 1,
      rationale: "The Mamluks defeated the Mongols at Ain Jalut in 1260 — the only force to do so.",
    },
    {
      prompt: "Which mathematical contribution is associated with Islamic scholars in this period?",
      options: [
        "Calculus",
        "Algebra and trigonometry",
        "Non-Euclidean geometry",
        "Statistics",
      ],
      correctIndex: 1,
      rationale: "Algebra (al-jabr) and trigonometry were developed and refined by Islamic mathematicians.",
    },
    {
      prompt: "Islamic scholars served as crucial transmitters of which type of knowledge to medieval Europe?",
      options: [
        "Greek philosophical and scientific texts",
        "Native Mesoamerican astronomy",
        "Confucian political theory",
        "Hindu temple architecture",
      ],
      correctIndex: 0,
      rationale: "Arabic scholars translated and preserved Greek texts (Aristotle, Galen, Ptolemy), feeding them back to Europe.",
    },
    {
      prompt: "Paper-making technology reached Europe via which route?",
      options: [
        "Direct contact between China and Italy",
        "Adoption by Islamic societies, then transmission to Europe",
        "Invented independently in Iberia",
        "Brought by Vikings from Russia",
      ],
      correctIndex: 1,
      rationale: "Muslims adopted paper-making from China and brought it to Iberia and the Mediterranean, from where it spread into Latin Europe.",
    },
    {
      prompt: "The Delhi Sultanate's main mode of expansion was…",
      options: [
        "Peaceful merchant settlement",
        "Military conquest",
        "Religious conversion of all subjects",
        "Marriage alliances with Hindu kingdoms",
      ],
      correctIndex: 1,
      rationale: "The Delhi Sultanate spread Islam in S. Asia primarily through military expansion, not voluntary conversion.",
    },
    {
      prompt: "Islam reached West Africa primarily through…",
      options: [
        "Military conquest by Arab armies",
        "Trans-Saharan merchant networks",
        "Forced relocation of Mediterranean populations",
        "Crusader settlement",
      ],
      correctIndex: 1,
      rationale: "Islam diffused into West Africa with traders crossing the Sahara — by Mansa Musa's time it was the religion of the Mali ruling class.",
    },
    {
      prompt: "Which best describes the role of Dar al-Islam in 1200–1450 Afro-Eurasia?",
      options: [
        "An isolated theological community",
        "A transmission bridge for goods, ideas, and technologies between East and West",
        "Primarily a cultural import market with little to export",
        "A purely political entity with no economic significance",
      ],
      correctIndex: 1,
      rationale: "Dar al-Islam wasn't just receiving — it was producing and rerouting math, philosophy, paper-making, and trade between distant regions.",
    },
  ],

  "u1-bi3": [
    {
      prompt: "Under the Delhi Sultanate, non-Muslims paid which tax?",
      options: ["Zakat", "Jizya", "Tithe", "Khums"],
      correctIndex: 1,
      rationale: "Jizya was the tax non-Muslims (mostly Hindus) paid under the Delhi Sultanate.",
    },
    {
      prompt: "The Vijayanagara Empire was founded by…",
      options: [
        "Muslim generals serving the Mughal court",
        "Two brothers originally sent by the Delhi Sultanate who reconverted to Hinduism",
        "Portuguese trading-post commanders",
        "Buddhist missionaries from Sri Lanka",
      ],
      correctIndex: 1,
      rationale: "Harihara and Bukka were sent south to reclaim land for Delhi but reconverted to Hinduism and founded their own Hindu empire.",
    },
    {
      prompt: "Srivijaya generated wealth primarily by…",
      options: [
        "Mining gold in Sumatra",
        "Taxing ships that passed through the Strait of Malacca",
        "Slave-trading with the Mongols",
        "Rice exports to China",
      ],
      correctIndex: 1,
      rationale: "Srivijaya was a Hindu kingdom whose wealth came from controlling and taxing the Indian Ocean shipping lanes.",
    },
    {
      prompt: "Majapahit was associated with which religious tradition?",
      options: ["Sunni Islam", "Hinduism only", "Buddhism", "Jainism"],
      correctIndex: 2,
      rationale: "Majapahit was a Buddhist Javanese empire that controlled SE Asian trade routes.",
    },
    {
      prompt: "Hindu and Buddhist influences reached Southeast Asia primarily through…",
      options: [
        "Conquest by South Asian armies",
        "Trade contact with South Asian merchants",
        "Migration of monks during famines",
        "European missionary efforts",
      ],
      correctIndex: 1,
      rationale: "Indian Ocean merchants, not armies, carried Hinduism and Buddhism to SE Asia.",
    },
    {
      prompt: "A central problem of Delhi Sultanate rule was…",
      options: [
        "Lack of military experience",
        "Difficulty consolidating power over a Hindu majority",
        "Excessive taxation by Mongol overlords",
        "Loss of Indian Ocean trade",
      ],
      correctIndex: 1,
      rationale: "The Sultanate's Muslim leadership ruled a vast Hindu population — never able to maintain efficient government across all of South Asia.",
    },
    {
      prompt: "Why did some Hindus convert to Islam under the Delhi Sultanate?",
      options: [
        "Forced conversion at the point of a sword",
        "Conversion offered social mobility (e.g., escape from low-caste status)",
        "Required by the Sultan for citizenship",
        "Conversion was made mandatory for trade access",
      ],
      correctIndex: 1,
      rationale: "Conversions were largely voluntary — Islam offered social mobility, especially for lower castes.",
    },
    {
      prompt: "Which best describes religious life in Southeast Asia 1200–1450?",
      options: [
        "Strictly Buddhist",
        "Strictly Muslim",
        "A mix — Hindu kingdoms (Srivijaya) coexisted with Buddhist (Majapahit) and increasingly Islamic states",
        "Christian-dominated",
      ],
      correctIndex: 2,
      rationale: "SE Asia was religiously layered: Hindu, Buddhist, and (later) Islamic states all built power through trade.",
    },
  ],

  "u1-bi4": [
    {
      prompt: "The Aztec capital was located at…",
      options: ["Cuzco", "Cahokia", "Tenochtitlán", "Chichén Itzá"],
      correctIndex: 2,
      rationale: "Tenochtitlán was the Aztec capital, built on Lake Texcoco in modern Mexico City.",
    },
    {
      prompt: "Aztec political organization is BEST described as…",
      options: [
        "A unified theocracy",
        "A decentralized empire that extracted tribute through local rulers",
        "A fully bureaucratic civil-service state",
        "A republic with elected senators",
      ],
      correctIndex: 1,
      rationale: "The Aztecs ran a decentralized state — local governments collected tribute and sent it to the capital.",
    },
    {
      prompt: "Human sacrifice in Aztec religion is an example of…",
      options: [
        "An innovation unique to the Aztecs",
        "Continuity from earlier Maya practice",
        "A practice imported from Spain",
        "A Buddhist influence",
      ],
      correctIndex: 1,
      rationale: "Human sacrifice continued from the Maya tradition — it wasn't an Aztec invention.",
    },
    {
      prompt: "Cahokia was located in…",
      options: [
        "Central Mexico",
        "The Andes",
        "Modern-day Illinois",
        "Yucatán",
      ],
      correctIndex: 2,
      rationale: "Cahokia was a North American mound-builder city near modern St. Louis.",
    },
    {
      prompt: "The Inca capital was…",
      options: ["Tenochtitlán", "Cuzco", "Tikal", "Tula"],
      correctIndex: 1,
      rationale: "Cuzco was the Inca capital, with the Sun Temple at its center.",
    },
    {
      prompt: "Which feature was COMMON to Aztec, Maya, and Mesopotamian societies?",
      options: [
        "Use of horses for transport",
        "Monumental religious architecture (e.g., pyramids/ziggurats)",
        "Iron-working technology",
        "Alphabetic writing systems",
      ],
      correctIndex: 1,
      rationale: "Both Mesoamerican civilizations and Mesopotamian ones built large religious step-pyramids.",
    },
    {
      prompt: "Aztec tribute systems primarily extracted…",
      options: [
        "Goods, food, and people from conquered communities",
        "A flat poll tax payable in silver",
        "Volunteer labor only",
        "Naval levies for the imperial fleet",
      ],
      correctIndex: 0,
      rationale: "Conquered local rulers sent goods, food, and people (sacrifices) to the Aztec capital.",
    },
    {
      prompt: "Why did Aztec power collapse so quickly when the Spanish arrived?",
      options: [
        "Their decentralized tribute system meant losing the capital meant losing the empire",
        "They had no military experience",
        "They lacked stone tools",
        "They had already adopted Spanish institutions",
      ],
      correctIndex: 0,
      rationale: "Decentralization made the empire fast-growing but brittle — when Tenochtitlán fell, so did the structure.",
    },
  ],

  "u1-bi5": [
    {
      prompt: "Great Zimbabwe's wealth came primarily from…",
      options: [
        "Trans-Saharan caravan tolls",
        "Gold and cattle linked to Indian Ocean trade",
        "Christian pilgrim donations",
        "Silver mines on the coast",
      ],
      correctIndex: 1,
      rationale: "Great Zimbabwe traded gold (and cattle wealth) into Indian Ocean networks via the Swahili coast.",
    },
    {
      prompt: "The Swahili language emerged from…",
      options: [
        "Bantu mixed with Arabic, born of merchant contact",
        "Pure Arabic spoken by Yemeni traders",
        "Berber influence from West Africa",
        "Latin contact from medieval Christian missions",
      ],
      correctIndex: 0,
      rationale: "Swahili is a Bantu-Arabic creole that grew from trade contact along the East African coast.",
    },
    {
      prompt: "Ethiopia's distinctive feature among medieval African states was…",
      options: [
        "Its Buddhist court religion",
        "Its Christian monarchy",
        "Its Hindu trading caste",
        "Its theocracy under a sultanate",
      ],
      correctIndex: 1,
      rationale: "Ethiopia stood out as a Christian kingdom that consolidated power with monumental architecture (Lalibela).",
    },
    {
      prompt: "The Swahili coast city-states (Kilwa, Mombasa) were tied into which network?",
      options: [
        "Trans-Saharan trade only",
        "Indian Ocean trade",
        "Mediterranean shipping under the Byzantines",
        "Atlantic networks via the Cape Verde Islands",
      ],
      correctIndex: 1,
      rationale: "Kilwa and Mombasa were Indian Ocean entrepôts, gold + ivory + slaves out, cloth + porcelain in.",
    },
    {
      prompt: "Great Zimbabwe is most famous for its…",
      options: [
        "Pyramidal step-temples",
        "Massive stone walls and royal complex",
        "Iron foundries",
        "Rock-hewn churches",
      ],
      correctIndex: 1,
      rationale: "The Great Zimbabwe complex — large dry-stone walls — was its capital city's signature.",
    },
    {
      prompt: "African state-building in this period was MAINLY shaped by…",
      options: [
        "Conquest by European powers",
        "Trade-network participation and religious belief systems",
        "Tribal isolation",
        "Ottoman political models",
      ],
      correctIndex: 1,
      rationale: "African states grew by hooking into trade networks and adopting world religions (Islam, Christianity).",
    },
    {
      prompt: "Which of the following BEST shows that Indian Ocean trade transformed East African society?",
      options: [
        "The use of Greek as a lingua franca",
        "The development of the Swahili language",
        "The adoption of European feudalism",
        "The construction of pyramids",
      ],
      correctIndex: 1,
      rationale: "A new language born of merchant contact is the strongest possible signal of cultural transformation.",
    },
    {
      prompt: "Lalibela is associated with…",
      options: [
        "Mali Empire mosques",
        "Ethiopian rock-hewn Christian churches",
        "Swahili coast pottery",
        "Igbo-Ukwu metalwork",
      ],
      correctIndex: 1,
      rationale: "Lalibela's churches are carved from solid rock — emblems of Ethiopian Christian state-building.",
    },
  ],

  "u1-bi6": [
    {
      prompt: "European feudalism is BEST described as…",
      options: [
        "A centralized empire run by appointed bureaucrats",
        "A hierarchical land-for-service system: king → lords → knights → peasants",
        "A theocracy run by the papacy",
        "A republic with elected magistrates",
      ],
      correctIndex: 1,
      rationale: "Feudalism: king grants land to nobles in exchange for service; nobles hire knights; peasants work the land.",
    },
    {
      prompt: "The manorial system primarily described…",
      options: [
        "A free-trade port system",
        "Self-contained village economies tied to a lord, with peasants/serfs as the labor base",
        "Universities serving the Catholic Church",
        "Imperial Roman tax collection",
      ],
      correctIndex: 1,
      rationale: "A manor was a whole village — lord + knights + peasants + serfs — largely self-sufficient.",
    },
    {
      prompt: "What was the three-field system?",
      options: [
        "A military formation used by knights",
        "Crop rotation through three fields, one left fallow each cycle",
        "A taxation method for the manor",
        "A Church-administered famine response",
      ],
      correctIndex: 1,
      rationale: "Three-field rotation increased yields and supported population growth in medieval Europe.",
    },
    {
      prompt: "Which institution was the most powerful Europe-wide during 1200–1450?",
      options: [
        "The Holy Roman Empire",
        "The Roman Catholic Church",
        "The Hanseatic League",
        "The Ottoman Sultanate",
      ],
      correctIndex: 1,
      rationale: "Politically Europe was decentralized; the Catholic Church filled the role of pan-European authority.",
    },
    {
      prompt: "Iberia in this period was distinctive because it…",
      options: [
        "Was the seat of the Holy Roman Empire",
        "Had a large Muslim presence and served as a transmission point for classical and Islamic texts",
        "Was the only fully Christian region of Europe",
        "Had no contact with Islamic societies",
      ],
      correctIndex: 1,
      rationale: "Muslim al-Andalus relayed Greek and Arabic learning to Latin Europe.",
    },
    {
      prompt: "Ferdinand and Isabella expelled which groups from Iberia in 1492?",
      options: [
        "Muslims and Jews",
        "Vikings and Anglo-Saxons",
        "Italians and Frenchmen",
        "Mongols and Turks",
      ],
      correctIndex: 0,
      rationale: "The Reconquista ended with the expulsion of Muslims and Jews from Spain.",
    },
    {
      prompt: "Compared to Song China, medieval Europe was…",
      options: [
        "Just as centralized politically",
        "Far more decentralized — no equivalent imperial bureaucracy",
        "More urbanized",
        "Less Christian",
      ],
      correctIndex: 1,
      rationale: "Europe lacked the empire-wide bureaucracy of Song China; power lived at the manor and kingdom level.",
    },
    {
      prompt: "Why did European agricultural productivity rise during this period?",
      options: [
        "Three-field rotation + better plows + horse-collar harnessing",
        "Adoption of Mesoamerican crops",
        "Confucian land reform",
        "End of the manorial system",
      ],
      correctIndex: 0,
      rationale: "The combination of crop rotation and improved plowing and harnessing increased yields, fueling population growth.",
    },
  ],

  // =========================================================================
  // UNIT 2
  // =========================================================================
  "u2-bi1": [
    {
      prompt: "Caravanserai were…",
      options: [
        "Mongol cavalry units",
        "Inn/guesthouses spaced about a day's travel apart along trade routes",
        "Banking houses in Italian city-states",
        "Medieval Persian poetry collections",
      ],
      correctIndex: 1,
      rationale: "Caravanserai gave merchants and animals a place to rest along Silk Road and trans-Saharan routes.",
    },
    {
      prompt: "The lateen sail was originally associated with…",
      options: [
        "Chinese junks",
        "Roman galleys",
        "Arab dhows",
        "Norse longships",
      ],
      correctIndex: 2,
      rationale: "The triangular lateen sail was used on Arab dhows — Europeans later adopted it.",
    },
    {
      prompt: "Which technology was first developed in Song China and aided Indian Ocean and broader trade?",
      options: ["Paper money", "Movable type", "The astrolabe", "All of the above"],
      correctIndex: 3,
      rationale: "Song-era China produced paper money, movable type, and refined navigational instruments — all reshaped trade.",
    },
    {
      prompt: "Trans-Saharan trade depended heavily on…",
      options: [
        "Iron-hulled steamships",
        "The Arabian camel and camel saddle",
        "Roman roads",
        "The astrolabe",
      ],
      correctIndex: 1,
      rationale: "Camels + camel saddles enabled long desert crossings with cargo.",
    },
    {
      prompt: "Which good MOST defined Indian Ocean trade?",
      options: ["Furs", "Spices", "Silk only", "Gold"],
      correctIndex: 1,
      rationale: "Spices from Southeast Asia were the high-value goods of Indian Ocean networks.",
    },
    {
      prompt: "Samarkand and Kashgar grew as cities BECAUSE they…",
      options: [
        "Sat on the Silk Roads as caravan hubs",
        "Were Mongol military bases",
        "Were Christian missionary centers",
        "Mined gold and silver",
      ],
      correctIndex: 0,
      rationale: "Their location on the Silk Road made them rich and cosmopolitan trade hubs.",
    },
    {
      prompt: "Indian Ocean trade was made navigable year-round by…",
      options: [
        "Steam engines",
        "The lateen sail + astrolabe + magnetic compass + monsoon-wind knowledge",
        "Mongol postal couriers",
        "Polynesian outrigger canoes",
      ],
      correctIndex: 1,
      rationale: "These technologies + monsoon timing turned a seasonal route into a regular commercial network.",
    },
    {
      prompt: "The Swahili city-states grew most directly because of…",
      options: [
        "Trans-Saharan caravans",
        "Indian Ocean monsoon trade",
        "Atlantic exploration",
        "Roman-Greek conquest",
      ],
      correctIndex: 1,
      rationale: "The Swahili coast plugged into Indian Ocean trade via gold, ivory, and Indian/Arab merchant contact.",
    },
  ],

  "u2-bi2": [
    {
      prompt: "Cultural diffusion is BEST defined as…",
      options: [
        "Forcible religious conversion",
        "The spread of ideas, religions, technologies, and practices via contact networks",
        "Government censorship of foreign culture",
        "Linguistic isolation",
      ],
      correctIndex: 1,
      rationale: "Cultural diffusion = ideas riding the same routes that goods do.",
    },
    {
      prompt: "Buddhism's diffusion along the Silk Road eventually reached…",
      options: ["Japan", "Korea", "Vietnam", "All of the above"],
      correctIndex: 3,
      rationale: "Buddhism reached Korea, Japan, and Vietnam from China via the Silk Roads.",
    },
    {
      prompt: "Islam's diffusion along the Indian Ocean led to the development of which language?",
      options: ["Arabic", "Swahili", "Urdu", "Pashto"],
      correctIndex: 1,
      rationale: "Swahili = Bantu × Arabic, born of merchant + Islamic contact along the East African coast.",
    },
    {
      prompt: "An effect of cultural diffusion in this period was…",
      options: [
        "The decline of all religious practice",
        "Hybrid art, language, and religious traditions in trade-network cities",
        "Total replacement of local cultures",
        "End of long-distance trade",
      ],
      correctIndex: 1,
      rationale: "Trade hubs developed syncretic cultures (Swahili, Persian Buddhist art, etc.).",
    },
    {
      prompt: "Why is cultural diffusion considered a 'major effect' rather than a side effect of trade?",
      options: [
        "Because people had no goods to trade in this period",
        "Because trade routes carried both goods AND ideas — the cultural change was as significant as the economic",
        "Because no economic exchange occurred",
        "Because cultures were strictly isolated until 1500",
      ],
      correctIndex: 1,
      rationale: "AP World treats cultural diffusion as a primary, not secondary, outcome of trade.",
    },
    {
      prompt: "Which religious tradition spread MOST through Indian Ocean trade?",
      options: ["Christianity", "Hinduism", "Islam", "Zoroastrianism"],
      correctIndex: 2,
      rationale: "Islam diffused through Indian Ocean merchant networks to East Africa and Southeast Asia.",
    },
    {
      prompt: "Which is an example of cultural diffusion FROM East Asia to West?",
      options: [
        "Paper-making",
        "Gunpowder",
        "Block-printing techniques",
        "All of the above",
      ],
      correctIndex: 3,
      rationale: "All three diffused west along the Silk Roads.",
    },
    {
      prompt: "Buddhism's transformation as it diffused to China is BEST described as…",
      options: [
        "Replaced entirely by Confucianism",
        "Sinified into Chan (Zen) Buddhism, blending with Daoist + Confucian elements",
        "Made into the Chinese state religion",
        "Erased by the Mongols",
      ],
      correctIndex: 1,
      rationale: "Chan Buddhism is the Sinified form, then diffused further to Korea and Japan as Zen.",
    },
  ],

  "u2-bi3": [
    {
      prompt: "Bananas were introduced to Africa from…",
      options: ["The Americas", "Southeast Asia via Indian Ocean trade", "Spain", "Egypt"],
      correctIndex: 1,
      rationale: "Bananas from SE Asia spread to East Africa via Indian Ocean networks.",
    },
    {
      prompt: "The Black Death entered Europe most directly through…",
      options: [
        "Mongol siege engines and trade routes via Crimea/Caffa",
        "Direct passage from Australia",
        "American merchant ships",
        "Ottoman conquests",
      ],
      correctIndex: 0,
      rationale: "Plague rode the Mongol-protected trade routes from inner Asia to Crimea, then to Constantinople and Europe.",
    },
    {
      prompt: "Which trade route was MOST associated with banana diffusion to Africa?",
      options: [
        "Trans-Saharan",
        "Silk Road",
        "Indian Ocean",
        "Atlantic",
      ],
      correctIndex: 2,
      rationale: "Bananas crossed the Indian Ocean from SE Asia to East Africa.",
    },
    {
      prompt: "An estimated mortality rate for the Black Death in Europe was approximately…",
      options: ["1–5%", "10–15%", "30–50%", "70–90%"],
      correctIndex: 2,
      rationale: "Roughly 30–50% of Europe's population died — among the deadliest pandemics in recorded history.",
    },
    {
      prompt: "The environmental and biological consequences of expanding trade networks demonstrate…",
      options: [
        "That globalization is a 19th-century invention only",
        "That increased connectivity also accelerates disease and species transfer, not just goods",
        "That trade networks had no impact outside markets",
        "That no biological exchange occurred until 1492",
      ],
      correctIndex: 1,
      rationale: "Connectivity multiplies environmental and biological transfers — the deeper the network, the bigger the spillovers.",
    },
    {
      prompt: "Long-term, the Black Death contributed to which political/economic shift in Europe?",
      options: [
        "Strengthening of feudalism",
        "Labor shortages that weakened serfdom and raised wages",
        "Permanent population stagnation",
        "Conversion of Europe to Islam",
      ],
      correctIndex: 1,
      rationale: "Massive deaths created labor scarcity, which gave surviving peasants leverage and weakened the manorial system.",
    },
    {
      prompt: "Banana cultivation in East Africa BEST illustrates which AP World theme?",
      options: [
        "Industrialization spreads to all regions",
        "Cross-cultural environmental and biological exchange via trade",
        "Climate change in the medieval period",
        "Decolonization",
      ],
      correctIndex: 1,
      rationale: "It's a textbook example of biological diffusion via trade contact.",
    },
    {
      prompt: "Why did the Black Death spread so much faster in 1346–1353 than in earlier centuries?",
      options: [
        "Roman roads were finally completed",
        "Mongol-protected trade routes had increased connectivity across Eurasia",
        "Sailors had just developed steamships",
        "Vaccination programs failed",
      ],
      correctIndex: 1,
      rationale: "Pax Mongolica's open routes meant goods AND fleas crossed Eurasia more efficiently than ever before.",
    },
  ],

  "u2-bi4": [
    {
      prompt: "Pax Mongolica refers to…",
      options: [
        "A peace treaty signed at Karakorum in 1206",
        "The period of Mongol-protected stability across Eurasia that revived Silk Road trade",
        "An alliance between the Pope and Genghis Khan",
        "The treaty ending the Crusades",
      ],
      correctIndex: 1,
      rationale: "Pax Mongolica was the Mongol-enforced peace that made overland trade safer than it had been in centuries.",
    },
    {
      prompt: "The Yam relay system was…",
      options: [
        "An agricultural technique for growing tubers",
        "A pony-express network of stations linking Mongol khanates",
        "A Korean fishing protocol",
        "A taxation system",
      ],
      correctIndex: 1,
      rationale: "Yam stations + horses connected Khanbaliq to the rest of the empire — fast communication across vast distance.",
    },
    {
      prompt: "Marco Polo's travels were possible BECAUSE…",
      options: [
        "He sailed via Atlantic routes",
        "Pax Mongolica had made overland Silk Road travel safe",
        "Italian fleets controlled the Indian Ocean",
        "He bypassed the Mongols using submarines",
      ],
      correctIndex: 1,
      rationale: "Mongol stability made the journey from Venice to China feasible for European travelers.",
    },
    {
      prompt: "An example of Mongol-driven knowledge exchange is…",
      options: [
        "The Maragha observatory bringing together Chinese and Persian astronomers",
        "Zen Buddhist monks exchanging haiku with Norse poets",
        "Aztec calendar reform under Kublai Khan",
        "Latin translation of the Quran in Karakorum",
      ],
      correctIndex: 0,
      rationale: "The Mongol Ilkhanate's Maragha observatory was a hub for cross-cultural scientific work.",
    },
    {
      prompt: "Which best describes the Mongol approach to skilled people in conquered territories?",
      options: [
        "Always killed",
        "Often spared and relocated to spread skills across the empire",
        "Forced into manual labor only",
        "Always sold into slavery",
      ],
      correctIndex: 1,
      rationale: "Mongols deliberately moved scholars, artisans, and engineers across the empire.",
    },
    {
      prompt: "The Mongol Yuan dynasty in China kept the Silk Road…",
      options: [
        "Closed to all merchants",
        "Open and protected — encouraging long-distance trade",
        "Open only to Mongols and Persians",
        "Restricted to Buddhist monks",
      ],
      correctIndex: 1,
      rationale: "The Yuan kept the Silk Road safe; this was central to the Pax Mongolica trade revival.",
    },
    {
      prompt: "Compared to earlier conquerors, the Mongols are NOTABLE for…",
      options: [
        "Discouraging trade",
        "Building the largest contiguous land empire in history",
        "Adopting Christianity as a state religion",
        "Avoiding cavalry warfare",
      ],
      correctIndex: 1,
      rationale: "The Mongol Empire was the largest land-based empire ever assembled.",
    },
    {
      prompt: "Which technological/scientific tool was IMPROVED through Mongol-era exchange?",
      options: [
        "The astrolabe",
        "Cannons (gunpowder)",
        "Astronomical tables",
        "All of the above",
      ],
      correctIndex: 3,
      rationale: "Mongol-protected exchange improved navigation, astronomy, and military technology.",
    },
  ],

  // =========================================================================
  // UNIT 3
  // =========================================================================
  "u3-bi1": [
    {
      prompt: "Which empire took Constantinople in 1453?",
      options: ["Safavid", "Mughal", "Ottoman", "Mamluk"],
      correctIndex: 2,
      rationale: "Mehmed II's Ottoman gunpowder army breached the city walls in 1453.",
    },
    {
      prompt: "Janissaries were…",
      options: [
        "Italian mercenaries hired by the Pope",
        "Christian boys taken via the devshirme system, converted to Islam, and trained as elite Ottoman soldiers",
        "Persian cavalry of the Safavids",
        "Mongol tribute warriors",
      ],
      correctIndex: 1,
      rationale: "Devshirme: Christian boys → enslaved → converted → elite Ottoman infantry / bureaucrats.",
    },
    {
      prompt: "The Safavid Empire was associated with which branch of Islam?",
      options: ["Sunni", "Shia", "Ibadi", "Sufi"],
      correctIndex: 1,
      rationale: "Shah Ismail made Twelver Shia the state religion of Safavid Persia.",
    },
    {
      prompt: "Babur founded the Mughal Empire by…",
      options: [
        "Marrying into the Ottoman royal family",
        "Displacing the Delhi Sultanate after the Battle of Panipat (1526)",
        "Sailing from Java to Goa",
        "Inheriting it from his Mongol ancestors directly",
      ],
      correctIndex: 1,
      rationale: "Babur defeated the Delhi Sultanate, founding the Mughal Empire in 1526.",
    },
    {
      prompt: "Akbar the Great is famous for…",
      options: [
        "Religious tolerance and integration of Hindus into Mughal governance",
        "Banning Islam in the Mughal Empire",
        "Conquering Constantinople",
        "Defeating the Qing",
      ],
      correctIndex: 0,
      rationale: "Akbar's tolerant policies (e.g., abolishing jizya) integrated Hindu nobles into the Mughal administration.",
    },
    {
      prompt: "The Qing dynasty was founded by…",
      options: ["Han Chinese rebels", "Manchus from the north", "Mongol descendants of Kublai Khan", "Tibetan monks"],
      correctIndex: 1,
      rationale: "The Manchus invaded after the Ming weakened, founding the Qing in 1644.",
    },
    {
      prompt: "How did the Qing legitimize rule over a Han Chinese majority?",
      options: [
        "By converting to Buddhism",
        "By invoking the Mandate of Heaven and continuing Confucian institutions",
        "By replacing Chinese with Manchu language only",
        "By establishing a Christian state church",
      ],
      correctIndex: 1,
      rationale: "Qing rulers used the Mandate of Heaven and continued Han bureaucratic forms to legitimize foreign rule.",
    },
    {
      prompt: "The Sunni-Shia divide MOST shaped conflict between which two empires?",
      options: [
        "Mughal vs Qing",
        "Ottoman vs Manchu",
        "Safavid vs Ottoman/Mughal",
        "Tokugawa vs Mughal",
      ],
      correctIndex: 2,
      rationale: "Shia Safavid sat between Sunni Ottoman and Sunni Mughal — religious divide drove their wars.",
    },
  ],

  "u3-bi2": [
    {
      prompt: "Devshirme was a system that…",
      options: [
        "Auctioned tax-collection rights",
        "Took Christian boys as 'tax in flesh' to serve in the Ottoman bureaucracy + Janissary corps",
        "Granted nobles their estates",
        "Set artisan-guild prices",
      ],
      correctIndex: 1,
      rationale: "Devshirme staffed Ottoman bureaucracy + military with conscripted, converted Christian boys.",
    },
    {
      prompt: "Versailles symbolized which European political idea?",
      options: [
        "Constitutional monarchy",
        "The divine right of kings — a king as God's representative on earth",
        "Republican governance",
        "Federalism",
      ],
      correctIndex: 1,
      rationale: "Louis XIV's Versailles displayed absolute monarchy + divine-right rule architecturally.",
    },
    {
      prompt: "Tokugawa Japan consolidated power by…",
      options: [
        "Empowering daimyo with full independence",
        "Putting samurai on the government payroll and tightly regulating daimyo movement",
        "Adopting full Western parliamentary democracy",
        "Renouncing the shogunate",
      ],
      correctIndex: 1,
      rationale: "Tokugawa converted samurai into bureaucratic functionaries on state pay.",
    },
    {
      prompt: "The Mughal Zamindar system was a method of…",
      options: [
        "Forced military conscription",
        "Tax collection — local landed elites collected revenue from peasants for the state",
        "Religious conversion",
        "Long-distance maritime trade",
      ],
      correctIndex: 1,
      rationale: "Zamindars were elite landowners who collected and remitted taxes for the Mughals.",
    },
    {
      prompt: "Ottoman tax farming worked by…",
      options: [
        "Civil-service exam appointments",
        "Auctioning tax-collection rights to the highest bidder",
        "A flat poll tax administered centrally",
        "Volunteer collection by religious officials",
      ],
      correctIndex: 1,
      rationale: "Ottoman tax farming = auction the right to collect, then squeeze the population for profit.",
    },
    {
      prompt: "Inca religious ritual centered on which monumental site?",
      options: [
        "Tenochtitlán",
        "The Sun Temple of Cuzco",
        "Machu Picchu",
        "Cahokia",
      ],
      correctIndex: 1,
      rationale: "Cuzco's Sun Temple was the heart of Inca state religion + ritual festivals.",
    },
    {
      prompt: "Kangxi posed for portraits with Confucian books behind him because…",
      options: [
        "He was illiterate and wanted to look educated",
        "It visually legitimized Manchu rule by aligning him with Han Confucian tradition",
        "Confucianism was banned and he was rebelling",
        "He preferred Daoism but had to pretend",
      ],
      correctIndex: 1,
      rationale: "Visual self-presentation as Confucian scholar legitimized Manchu rule over Han subjects.",
    },
    {
      prompt: "Which is a SHARED method of legitimization across Mughal, Ottoman, and Inca empires?",
      options: [
        "Use of state-sponsored monumental architecture or ritual",
        "Adoption of Christianity",
        "Free elections",
        "Universal literacy programs",
      ],
      correctIndex: 0,
      rationale: "All three used architecture and ritual to project state power.",
    },
  ],

  "u3-bi3": [
    {
      prompt: "Martin Luther's 95 Theses (1517) primarily attacked…",
      options: [
        "Calvinist predestination",
        "Sale of indulgences and broader Catholic Church corruption",
        "The papacy's foreign policy with Spain",
        "Lutheran congregations themselves",
      ],
      correctIndex: 1,
      rationale: "Luther attacked indulgences and Church corruption, sparking the Reformation.",
    },
    {
      prompt: "Which technology accelerated the Reformation?",
      options: [
        "The astrolabe",
        "The printing press",
        "Gunpowder",
        "The lateen sail",
      ],
      correctIndex: 1,
      rationale: "Movable-type printing put Luther's theses + vernacular Bibles in lay hands across Europe.",
    },
    {
      prompt: "The Sunni-Shia split in the early modern period MOST influenced…",
      options: [
        "Anglo-French wars",
        "Ottoman / Safavid / Mughal political conflicts",
        "Spanish-Portuguese naval treaties",
        "Aztec religious reforms",
      ],
      correctIndex: 1,
      rationale: "Shia Safavid sat between Sunni Ottoman + Sunni Mughal — drove decades of warfare.",
    },
    {
      prompt: "Sikhism is BEST described as…",
      options: [
        "A Hindu reform movement only",
        "A Muslim reform movement only",
        "A syncretic faith blending Hindu + Islamic elements that became its own religion",
        "A Christian missionary product",
      ],
      correctIndex: 2,
      rationale: "Sikhism began with elements of both, but emerged as a distinct faith — that's the key AP move.",
    },
    {
      prompt: "Which is a CONTINUITY across early-modern empires regarding belief?",
      options: [
        "Religion was fully separated from state power",
        "Religion remained central to state legitimization, even as conflicts intensified",
        "All empires became atheist",
        "Religious dissent was always tolerated",
      ],
      correctIndex: 1,
      rationale: "Religion stayed essential to legitimization; it just took new forms (Versailles, Manchu Confucianism, Mughal architecture).",
    },
    {
      prompt: "Which was a CHANGE in religious life caused by the Protestant Reformation?",
      options: [
        "Christianity disappeared from Europe",
        "Western Christianity fractured into Catholic and Protestant traditions",
        "Islam became the dominant religion in France",
        "Buddhism replaced Catholicism in Italy",
      ],
      correctIndex: 1,
      rationale: "The Reformation split Western Christianity — a major fracture in Christendom.",
    },
    {
      prompt: "The Reformation created problems for state legitimacy because…",
      options: [
        "Monarchs lost their thrones immediately",
        "Religion no longer provided pan-European unity, making religious wars and shifting alliances common",
        "Catholicism was banned in all of Europe",
        "The Pope abolished himself",
      ],
      correctIndex: 1,
      rationale: "Religious unity had legitimized political alliances; Reformation broke that, fueling wars like the Thirty Years' War.",
    },
    {
      prompt: "Sikhism's emergence in South Asia is an example of…",
      options: [
        "Forced conversion",
        "Religious syncretism",
        "Atheist reform",
        "Imperial propaganda",
      ],
      correctIndex: 1,
      rationale: "Sikhism is a textbook AP example of syncretism — interaction of belief systems producing something new.",
    },
  ],
};

// Merge with the rest of the question bank (units 4-9 + auto-generated supplements).
export const ideaQuizzes: Record<string, IdeaQuestion[]> = {
  ...part1,
  ...ideaQuizzesPart2,
};

export function quizForIdea(ideaId: string): IdeaQuestion[] {
  return ideaQuizzes[ideaId] ?? [];
}
