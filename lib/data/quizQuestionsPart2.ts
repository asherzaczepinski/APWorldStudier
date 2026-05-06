// Hand-curated quiz banks — Units 4 through 9.
// Imported by quizQuestions.ts.

import type { IdeaQuestion } from "./quizQuestions";

export const ideaQuizzesPart2: Record<string, IdeaQuestion[]> = {
  // =========================================================================
  // UNIT 4
  // =========================================================================
  "u4-bi1": [
    {
      prompt: "The astrolabe was originally developed by which culture before European adoption?",
      options: ["Greek/Hellenistic and Islamic societies", "Aztec", "Norse", "Polynesian"],
      correctIndex: 0,
      rationale: "The astrolabe came from Greek/Hellenistic origins, was refined by Islamic scholars, then adopted by Europeans.",
    },
    {
      prompt: "The magnetic compass was first developed in…",
      options: ["Italy", "Egypt", "China", "Persia"],
      correctIndex: 2,
      rationale: "Song China developed the magnetic compass; Europeans later adopted it for ocean navigation.",
    },
    {
      prompt: "The Portuguese caravel combined which sail types?",
      options: [
        "Square + lateen",
        "Junk + dhow",
        "Steam + sail",
        "Galley + galleon",
      ],
      correctIndex: 0,
      rationale: "Caravels mixed square sails (downwind speed) with lateen (working into wind) — both fast and seaworthy.",
    },
    {
      prompt: "The Dutch fluyt was famous for…",
      options: [
        "Speed in naval combat",
        "Massive cargo capacity, dominating commercial shipping",
        "Steam propulsion",
        "Carrying enslaved laborers exclusively",
      ],
      correctIndex: 1,
      rationale: "The fluyt was a cargo workhorse — central to the VOC's Indian Ocean trade dominance.",
    },
    {
      prompt: "Which company most dominated Indian Ocean trade by the 1600s?",
      options: ["Hudson's Bay Co.", "Dutch VOC", "Hanseatic League", "Spanish Crown"],
      correctIndex: 1,
      rationale: "The Dutch East India Company (VOC) dominated Indian Ocean spice trade in the 17th century.",
    },
    {
      prompt: "Maritime tech borrowing illustrates the AP World concept of…",
      options: [
        "Cultural diffusion (Europeans adopted non-European technologies)",
        "Cultural isolation",
        "Indigenous European invention without outside contact",
        "Industrialization",
      ],
      correctIndex: 0,
      rationale: "Europeans assembled their toolkit from China + Islamic societies — diffusion in action.",
    },
    {
      prompt: "Which navigational tool primarily measured latitude?",
      options: ["Magnetic compass", "Astrolabe", "Sextant clock", "Lateen sail"],
      correctIndex: 1,
      rationale: "The astrolabe measured latitude by the angle of stars/sun above the horizon.",
    },
    {
      prompt: "Why did European sea-empire building succeed where earlier attempts had failed?",
      options: [
        "Europe abandoned older trade goods",
        "Maritime tech (sails, navigation, cannons on ships) made transoceanic travel + trade enforceable",
        "Asian states stopped trading entirely",
        "The world became cooler, freezing rivers",
      ],
      correctIndex: 1,
      rationale: "The combination of borrowed + improved tech made Atlantic + Indian Ocean travel routine for the first time.",
    },
  ],

  "u4-bi2": [
    {
      prompt: "Christopher Columbus was sponsored by…",
      options: ["Henry the Navigator", "Ferdinand and Isabella of Spain", "Queen Elizabeth", "The Pope"],
      correctIndex: 1,
      rationale: "Columbus's 1492 voyage was sponsored by the Catholic Monarchs of Spain.",
    },
    {
      prompt: "Mercantilism is BEST defined as the belief that…",
      options: [
        "World wealth is finite, so empires must accumulate gold/silver and limit imports",
        "Free markets always create growth",
        "Wealth comes only from agriculture",
        "Trade should be banned with non-Christians",
      ],
      correctIndex: 0,
      rationale: "Mercantilism: world wealth = fixed pie; empire = your slice; export more than you import.",
    },
    {
      prompt: "Portugal's empire in the Indian Ocean was best described as…",
      options: [
        "A network of trading posts and forts, not full territorial colonies",
        "A continuous land empire from Lisbon to Goa",
        "A purely religious mission with no economic goals",
        "A federation of independent republics",
      ],
      correctIndex: 0,
      rationale: "Portuguese were 'first movers' with strategic trading-post empires — they wanted spice monopoly, not colonies.",
    },
    {
      prompt: "Spain's strategy in the Americas differed from Portugal's strategy in Asia in that Spain…",
      options: [
        "Sought territorial conquest and large-scale colonization, not just trade posts",
        "Avoided contact with Indigenous people",
        "Was uninterested in gold and silver",
        "Refused to spread Christianity",
      ],
      correctIndex: 0,
      rationale: "Spain conquered land + people; Portugal preferred strategic ports.",
    },
    {
      prompt: "European motives for sea exploration included…",
      options: [
        "Wealth from spice trade",
        "Religious conversion",
        "Political prestige + competition between states",
        "All of the above",
      ],
      correctIndex: 3,
      rationale: "Wealth + Christianity + national glory + competition all drove European exploration.",
    },
    {
      prompt: "European states wanted direct access to Indian Ocean trade because…",
      options: [
        "Muslim merchants controlled the existing routes and their share of profits",
        "Indian Ocean trade was new and untested",
        "Asia had nothing they wanted",
        "European states had no navy",
      ],
      correctIndex: 0,
      rationale: "Bypassing Muslim middlemen meant capturing more of the spice profit — that's the mercantilist payoff.",
    },
    {
      prompt: "Vasco da Gama's 1498 voyage…",
      options: [
        "Crossed the Pacific to Japan",
        "Reached India by sailing around Africa, opening direct European access to Indian Ocean trade",
        "Landed in Brazil",
        "Discovered Australia",
      ],
      correctIndex: 1,
      rationale: "Da Gama's route around the Cape gave Portugal direct sea access to Calicut.",
    },
    {
      prompt: "The Treaty of Tordesillas (1494)…",
      options: [
        "Divided the Americas between Spain and Portugal",
        "Ended the Hundred Years' War",
        "Established the Holy Roman Empire",
        "Granted England access to the Indian Ocean",
      ],
      correctIndex: 0,
      rationale: "Spain and Portugal split the world along a meridian — Spain west, Portugal east.",
    },
  ],

  "u4-bi3": [
    {
      prompt: "Which item moved from the Americas to Afro-Eurasia in the Columbian Exchange?",
      options: ["Wheat", "Potato", "Cattle", "Horses"],
      correctIndex: 1,
      rationale: "The potato (Andes), maize, tomatoes, and cassava all flowed FROM Americas to Old World.",
    },
    {
      prompt: "Which item moved from Afro-Eurasia to the Americas?",
      options: ["Maize", "Llamas", "Wheat", "Tomatoes"],
      correctIndex: 2,
      rationale: "Wheat, rice, cattle, pigs, horses, and sugar moved from the Old World to the Americas.",
    },
    {
      prompt: "The MOST devastating biological transfer to the Americas was…",
      options: ["Wheat blight", "Smallpox and other Eurasian diseases", "Cattle ticks", "Locusts"],
      correctIndex: 1,
      rationale: "Eurasian diseases (smallpox, measles) killed up to 90% of Indigenous populations.",
    },
    {
      prompt: "Why did Eurasian diseases devastate Indigenous Americans so severely?",
      options: [
        "Indigenous people refused all contact with Europeans",
        "Indigenous populations had no prior exposure or built-up immunity",
        "European medicine was withheld",
        "All Indigenous people lived in cities",
      ],
      correctIndex: 1,
      rationale: "Indigenous populations had no immunity — Eurasians had built up resistance over millennia.",
    },
    {
      prompt: "Horses radically changed which Indigenous American group most?",
      options: ["The Aztecs", "The Inca", "Plains Indigenous societies of North America", "The Maya"],
      correctIndex: 2,
      rationale: "Horses transformed Plains hunting and warfare — buffalo hunts, raiding, and intertribal politics all changed.",
    },
    {
      prompt: "An effect of New World crops on Afro-Eurasia was…",
      options: [
        "Smaller populations",
        "Population growth, longer lives, and more workers (more calories per acre)",
        "Permanent famine",
        "End of agricultural diversity",
      ],
      correctIndex: 1,
      rationale: "Potatoes + maize fueled population growth across Europe, China, and Africa.",
    },
    {
      prompt: "A disease that traveled from the Americas to Europe was…",
      options: ["Smallpox", "Bubonic plague", "Syphilis", "Measles"],
      correctIndex: 2,
      rationale: "Syphilis is widely believed to have originated in the Americas and traveled with returning sailors.",
    },
    {
      prompt: "Enslaved Africans contributed which crops to the Americas?",
      options: ["Wheat", "Okra and rice", "Potatoes", "Maize"],
      correctIndex: 1,
      rationale: "Enslaved Africans brought okra and African rice (which thrived in low-country South Carolina, etc.).",
    },
  ],

  "u4-bi4": [
    {
      prompt: "Encomienda was…",
      options: [
        "A Spanish coerced-labor system that compelled Indigenous people to work on plantations",
        "A free wage labor system",
        "A Mughal tax system",
        "An Inca road system",
      ],
      correctIndex: 0,
      rationale: "Encomienda forced Indigenous Americans to work for Spanish colonists in exchange for nominal Christianization.",
    },
    {
      prompt: "Hacienda differed from encomienda primarily in that hacienda…",
      options: [
        "Was a private estate using debt-peonage / wage labor rather than crown-granted Indigenous tribute labor",
        "Used only enslaved Africans",
        "Was located in Africa",
        "Required no labor",
      ],
      correctIndex: 0,
      rationale: "Hacienda relied on debt peonage and wage labor; encomienda was a crown grant of Indigenous labor.",
    },
    {
      prompt: "Mit'a was a Spanish adaptation of which Indigenous labor system?",
      options: ["Inca rotational labor draft", "Aztec slavery", "Maya tribute", "Carib war captives"],
      correctIndex: 0,
      rationale: "Mit'a was the Inca rotational-labor draft, repurposed by Spain — most infamously to mine silver at Potosí.",
    },
    {
      prompt: "The Treaty of Tordesillas (1494) split which two empires' claims?",
      options: [
        "Spain and Portugal in the New World",
        "Spain and France in Europe",
        "England and Portugal in Africa",
        "Mughal and Safavid in Persia",
      ],
      correctIndex: 0,
      rationale: "Tordesillas split the Americas between Spain and Portugal (line drawn down the Atlantic).",
    },
    {
      prompt: "Why did demand for enslaved African labor grow in the 16th–17th centuries?",
      options: [
        "Indigenous populations were collapsing from disease",
        "European workers refused to migrate",
        "Enslaved Africans were free of all illness",
        "All of these are equally valid explanations",
      ],
      correctIndex: 0,
      rationale: "Disease devastated Indigenous labor; Europeans turned to enslaved Africans, who had immunity to many Old World diseases.",
    },
    {
      prompt: "The Asante Empire grew in West Africa primarily by…",
      options: [
        "Resisting all contact with Europeans",
        "Engaging in Atlantic trade — including selling captives — to acquire firearms and goods",
        "Conquering the Mughals",
        "Migrating to Brazil",
      ],
      correctIndex: 1,
      rationale: "The Asante grew by entering and managing Atlantic trade networks (a complex, often violent integration).",
    },
    {
      prompt: "The British East India Company built its position in India by…",
      options: [
        "Establishing trading posts and exploiting Hindu-Muslim political divisions",
        "Direct military conquest of all of India in a single year",
        "Marrying into the Mughal royal family",
        "Buying India from Portugal",
      ],
      correctIndex: 0,
      rationale: "BEIC used trading posts + local alliances + manipulation of disputes to build a quasi-state in India.",
    },
    {
      prompt: "What was the main mercantilist purpose of colonies?",
      options: [
        "Spread universal human rights",
        "Enrich the homeland — extract raw materials and create captive markets",
        "Establish democratic republics",
        "Promote religious tolerance",
      ],
      correctIndex: 1,
      rationale: "Colonies existed to enrich the metropole — that's mercantilism's core logic.",
    },
  ],

  "u4-bi5": [
    {
      prompt: "Joint-stock companies were significant because they…",
      options: [
        "Pooled capital from many investors with limited individual risk, scaling colonization",
        "Were government departments only",
        "Existed only in China",
        "Banned international trade",
      ],
      correctIndex: 0,
      rationale: "Joint-stock spread risk; investors funded voyages they couldn't afford alone, enabling scale.",
    },
    {
      prompt: "The Dutch East India Company (VOC) was the FIRST…",
      options: [
        "Centralized Catholic order",
        "Publicly traded joint-stock corporation",
        "Maritime insurance bureau",
        "Slave-trading monopoly chartered in Madrid",
      ],
      correctIndex: 1,
      rationale: "The VOC pioneered the modern publicly traded joint-stock corporation.",
    },
    {
      prompt: "The British East India Company eventually…",
      options: [
        "Was dissolved peacefully in 1700",
        "Took de-facto control of much of India before being absorbed by the British state",
        "Sold itself to the Mughals",
        "Refused to engage in any military action",
      ],
      correctIndex: 1,
      rationale: "BEIC ran much of India until the British government took direct control after the Sepoy Rebellion.",
    },
    {
      prompt: "The 'triangular' Atlantic trade involved which three legs?",
      options: [
        "Manufactured goods to Africa → enslaved people to Americas → sugar/tobacco to Europe",
        "Spices to China → tea to Europe → silver to Mexico",
        "Wheat to Africa → cattle to Americas → silk to Europe",
        "Iron to India → cotton to Britain → wool to Africa",
      ],
      correctIndex: 0,
      rationale: "Classic triangular trade: goods → Africa → enslaved people → Americas → sugar/molasses → Europe.",
    },
    {
      prompt: "Religious syncretism in the Atlantic world produced traditions like…",
      options: [
        "Vodou, Santería, Candomblé — African + Christian + Indigenous blends",
        "Pure Catholicism unchanged",
        "Pure West African religion unchanged",
        "Calvinism imported wholesale",
      ],
      correctIndex: 0,
      rationale: "Forced contact + religious blending produced syncretic Afro-Atlantic religions.",
    },
    {
      prompt: "Atlantic-system economies depended on which labor model?",
      options: ["Free wage labor", "Coerced labor — particularly enslaved Africans", "Volunteer monastic labor", "Indentured European labor only"],
      correctIndex: 1,
      rationale: "The plantation Atlantic ran on enslaved African labor.",
    },
    {
      prompt: "Joint-stock charter companies are important because they LET…",
      options: [
        "States offload risk to private investors while still profiting from colonization",
        "Investors avoid taxes only",
        "European states ban trade",
        "Sovereigns rule colonies in person",
      ],
      correctIndex: 0,
      rationale: "Charter companies = states get colonization without bankrupting their treasuries.",
    },
    {
      prompt: "Which best describes how Atlantic trade reshaped European societies?",
      options: [
        "It enriched merchant + investor classes and created consumer demand for sugar, tobacco, etc.",
        "It had no effect on European life",
        "It impoverished Europeans uniformly",
        "It restored medieval feudalism",
      ],
      correctIndex: 0,
      rationale: "New consumer goods + investor classes reshaped European urban life.",
    },
  ],

  "u4-bi6": [
    {
      prompt: "The Maratha rebellion was significant because it…",
      options: [
        "Began in Spain",
        "Was a Hindu rebellion that helped end the Mughal Empire",
        "Was a Buddhist revival in China",
        "Crushed Ottoman power",
      ],
      correctIndex: 1,
      rationale: "Maratha resistance fatally weakened Mughal power and replaced it in much of India.",
    },
    {
      prompt: "The Pueblo Revolt (1680) targeted…",
      options: [
        "British colonists in Massachusetts",
        "Spanish colonists in modern New Mexico",
        "Russian fur traders in Alaska",
        "French settlers in Quebec",
      ],
      correctIndex: 1,
      rationale: "Pueblo + allied groups expelled Spanish colonists from New Mexico, burning churches.",
    },
    {
      prompt: "The Stono Rebellion (1739) was a…",
      options: [
        "Pueblo uprising in California",
        "Slave rebellion in South Carolina",
        "Mughal-backed revolt in Calcutta",
        "Ming-loyalist uprising in Manchuria",
      ],
      correctIndex: 1,
      rationale: "Stono was an uprising of enslaved Africans in colonial South Carolina.",
    },
    {
      prompt: "Resistance movements in this period reveal that imposed colonial systems were…",
      options: [
        "Universally accepted by colonized peoples",
        "Constantly contested — coercion produced ongoing rebellion",
        "Stable until 1900",
        "Limited to North America",
      ],
      correctIndex: 1,
      rationale: "Coercion produced resistance globally — Maratha, Pueblo, Stono, etc.",
    },
    {
      prompt: "Mughal religious policies under later emperors (e.g., Aurangzeb) toward Hindus moved toward…",
      options: [
        "More tolerance",
        "Less tolerance, fueling Maratha and other resistance",
        "Full conversion of Hindus",
        "Abolition of Islam",
      ],
      correctIndex: 1,
      rationale: "Aurangzeb's reversal of Akbar's tolerance fueled Hindu rebellion (notably the Marathas).",
    },
    {
      prompt: "Resistance to Spanish rule in the Americas often took which form?",
      options: [
        "Diplomatic petitions to the Pope",
        "Revolts targeting Spanish religious + economic institutions (e.g., burning churches, killing officials)",
        "Migration to Australia",
        "Rejection of all violence in favor of pacifist withdrawal",
      ],
      correctIndex: 1,
      rationale: "Pueblo Revolt is the classic example — direct attack on Spanish religious + colonial infrastructure.",
    },
    {
      prompt: "Enslaved Africans in the Atlantic resisted through which forms?",
      options: [
        "Open rebellion (Stono, later Haitian Revolution)",
        "Maroon communities, sabotage, work slowdowns, cultural retention",
        "Religious syncretism preserving African traditions",
        "All of the above",
      ],
      correctIndex: 3,
      rationale: "Resistance ranged from open revolt to subtle daily sabotage and cultural preservation.",
    },
    {
      prompt: "An AP-relevant takeaway from these resistances is…",
      options: [
        "Colonial systems were imposed top-down but never went unchallenged — coercion always produced resistance",
        "Indigenous and enslaved people accepted European rule passively",
        "Only Europeans rebelled in this period",
        "Resistance was always nonviolent",
      ],
      correctIndex: 0,
      rationale: "AP World theme: imposed systems → resistance, in many forms, in many places.",
    },
  ],

  "u4-bi7": [
    {
      prompt: "The Spanish casta system organized society based on…",
      options: ["Wealth only", "Ancestry and race", "Religion alone", "Profession"],
      correctIndex: 1,
      rationale: "Casta was a race/ancestry-based hierarchy: peninsulares > criollos > mestizos > African/Indigenous.",
    },
    {
      prompt: "At the top of the casta system were…",
      options: ["Mestizos", "Peninsulares (Iberian-born Spaniards)", "Africans", "Indigenous Americans"],
      correctIndex: 1,
      rationale: "Spaniards born in Spain (peninsulares) sat at the top.",
    },
    {
      prompt: "The Qing dynasty's social policy showed CONTINUITY with earlier Chinese practice through…",
      options: [
        "Continuing the Confucian civil-service exam and bureaucracy",
        "Adopting Christianity as state religion",
        "Abolishing the bureaucracy",
        "Banning Confucian education",
      ],
      correctIndex: 0,
      rationale: "Manchu rulers retained Han Chinese institutions to legitimize their rule.",
    },
    {
      prompt: "The casta system was a CHANGE because…",
      options: [
        "It was identical to Aztec hierarchy",
        "It introduced an explicit, racially defined legal hierarchy in the New World",
        "It abolished slavery",
        "It granted equal rights to all colonial subjects",
      ],
      correctIndex: 1,
      rationale: "Casta was a new legal hierarchy based explicitly on race/ancestry — a template for later racial systems.",
    },
    {
      prompt: "Mestizo refers to people of which ancestry?",
      options: [
        "European + Indigenous",
        "European + African",
        "African + Indigenous",
        "Pure European",
      ],
      correctIndex: 0,
      rationale: "Mestizos were European + Indigenous mixed-ancestry colonists.",
    },
    {
      prompt: "Mulatto refers to people of which ancestry?",
      options: [
        "European + Indigenous",
        "European + African",
        "African + Indigenous",
        "Asian + European",
      ],
      correctIndex: 1,
      rationale: "Mulatto = European + African mixed ancestry.",
    },
    {
      prompt: "The Qing implemented restrictive policies AGAINST which groups?",
      options: [
        "European immigrants",
        "Han Chinese only",
        "Indigenous frontier ethnic minorities (e.g., Mongols, Tibetans, Uyghurs)",
        "All Buddhists",
      ],
      correctIndex: 2,
      rationale: "Qing kept Han institutions but imposed restrictive policies on frontier ethnic minorities.",
    },
    {
      prompt: "Casta-style racial hierarchies in the Americas had what long-term consequence?",
      options: [
        "They became the template for later racial categorization systems in the modern Atlantic world",
        "They disappeared by 1700",
        "They never affected legal systems",
        "They reinforced Inca governance",
      ],
      correctIndex: 0,
      rationale: "Casta categorization seeded enduring racial hierarchies that outlasted Spanish rule.",
    },
  ],

  // =========================================================================
  // UNIT 5
  // =========================================================================
  "u5-bi1": [
    {
      prompt: "John Locke is best known for which Enlightenment idea?",
      options: ["Divine right of kings", "Natural rights — life, liberty, property", "Social Darwinism", "Communism"],
      correctIndex: 1,
      rationale: "Locke argued people have natural rights to life, liberty, and property — foundational for the American + French revolutions.",
    },
    {
      prompt: "Rousseau's 'social contract' argued that…",
      options: [
        "Kings rule by divine right",
        "Government legitimacy comes from the consent of the governed",
        "Property must be abolished",
        "Religion must control law",
      ],
      correctIndex: 1,
      rationale: "Rousseau: legitimate government rests on a social contract between people and rulers.",
    },
    {
      prompt: "The 1848 Seneca Falls Convention was…",
      options: [
        "The first US women's-rights convention",
        "An anti-slavery treaty",
        "A treaty ending the Mexican-American War",
        "A constitutional convention",
      ],
      correctIndex: 0,
      rationale: "Seneca Falls (1848) was the first major US women's rights convention.",
    },
    {
      prompt: "Russia abolished serfdom in…",
      options: ["1789", "1815", "1848", "1861"],
      correctIndex: 3,
      rationale: "Tsar Alexander II emancipated the serfs in 1861.",
    },
    {
      prompt: "Enlightenment thought relocated political authority FROM…",
      options: [
        "Tradition + religion → individual rights and rational consent",
        "Rationalism → mysticism",
        "The market → the church",
        "Family → village",
      ],
      correctIndex: 0,
      rationale: "Enlightenment shifted authority from tradition/religion to individual rights and reason.",
    },
    {
      prompt: "The Enlightenment supported abolition because…",
      options: [
        "Slavery was unprofitable",
        "Universal natural rights theory made human bondage philosophically indefensible",
        "Slavery violated mercantilist logic",
        "Slaves had voting rights",
      ],
      correctIndex: 1,
      rationale: "If everyone has natural rights, slavery contradicts the moral premise — that's the abolitionist argument.",
    },
    {
      prompt: "Empirical thinking in the Enlightenment meant…",
      options: [
        "Belief on faith",
        "Knowledge from observation, data, and experiment rather than tradition",
        "Knowledge from royal decree",
        "Knowledge from divine revelation only",
      ],
      correctIndex: 1,
      rationale: "Empirical = observation + experiment, not authority or tradition.",
    },
    {
      prompt: "Which is NOT a direct outgrowth of Enlightenment thinking?",
      options: ["Women's suffrage movements", "Abolitionism", "Constitutional government", "Divine right of kings"],
      correctIndex: 3,
      rationale: "Divine right is exactly what the Enlightenment rejected.",
    },
  ],

  "u5-bi2": [
    {
      prompt: "The American Revolution drew its philosophical foundation MOST directly from…",
      options: ["Confucian civil service", "Enlightenment natural-rights theory", "Catholic divine right", "Mercantilist economics"],
      correctIndex: 1,
      rationale: "The Declaration of Independence is essentially Locke quoted — natural rights theory in revolutionary form.",
    },
    {
      prompt: "The French Revolution was inspired most directly by…",
      options: [
        "The Russian Revolution",
        "The American Revolution and Enlightenment thought",
        "The Mexican Revolution",
        "The Glorious Revolution alone",
      ],
      correctIndex: 1,
      rationale: "American Revolution + Enlightenment ideas (Voltaire, Rousseau) inspired French revolutionaries.",
    },
    {
      prompt: "The Haitian Revolution was significant because it…",
      options: [
        "Was the only successful slave revolt to produce an independent nation",
        "Restored French colonial rule",
        "Failed to abolish slavery",
        "Was led by Napoleon",
      ],
      correctIndex: 0,
      rationale: "Haiti (1804) — only enslaved-led revolution that produced an independent state and abolished slavery there.",
    },
    {
      prompt: "Simón Bolívar's 'Letter from Jamaica' did what?",
      options: [
        "Proposed monarchy for Latin America",
        "Outlined Bolívar's vision for independence and republican government in Latin America",
        "Surrendered to Spain",
        "Demanded reparations from Britain",
      ],
      correctIndex: 1,
      rationale: "Bolívar's Letter from Jamaica articulated his case for Latin American independence.",
    },
    {
      prompt: "The 'Declaration of the Rights of Man and Citizen' came from which revolution?",
      options: ["American", "French", "Haitian", "Latin American"],
      correctIndex: 1,
      rationale: "France's 1789 declaration laid out universal natural rights as revolutionary doctrine.",
    },
    {
      prompt: "An UNDERLYING shared cause of the Atlantic revolutions was…",
      options: [
        "Increased religious dogma",
        "Spread of Enlightenment ideas + repressive colonial / monarchical policies",
        "Decline of literacy",
        "Removal of taxes",
      ],
      correctIndex: 1,
      rationale: "Shared causes: Enlightenment ideas + repression (taxation, lack of representation, slavery).",
    },
    {
      prompt: "The Atlantic revolutions reveal what AP World theme?",
      options: [
        "Ideas can move faster than goods, sparking similar revolutions across distant regions",
        "Revolutions are always purely local affairs",
        "Religion alone causes revolutions",
        "Revolutions in this period were primarily Asian",
      ],
      correctIndex: 0,
      rationale: "Print + Atlantic networks let revolutionary ideas leap from continent to continent.",
    },
    {
      prompt: "The chronological order of major Atlantic revolutions is…",
      options: [
        "American → French → Haitian → Latin American",
        "Haitian → French → American → Latin American",
        "Latin American → French → American → Haitian",
        "French → American → Latin American → Haitian",
      ],
      correctIndex: 0,
      rationale: "American (1776) → French (1789) → Haitian (1791–1804) → Latin American (early 1800s).",
    },
  ],

  "u5-bi3": [
    {
      prompt: "The Industrial Revolution began in…",
      options: ["France", "Britain", "Germany", "United States"],
      correctIndex: 1,
      rationale: "Britain industrialized first because of its coal, iron, waterways, capital, and stable politics.",
    },
    {
      prompt: "The first industrial sector to mechanize was…",
      options: ["Steel", "Cotton textiles", "Shipbuilding", "Coal mining"],
      correctIndex: 1,
      rationale: "Cotton textile production was the first major industry transformed by mechanization.",
    },
    {
      prompt: "Britain's enclosure movement contributed to industrialization by…",
      options: [
        "Pushing rural peasants into urban areas to work in factories",
        "Banning rural agriculture",
        "Strengthening serfdom",
        "Returning farmland to forest",
      ],
      correctIndex: 0,
      rationale: "Enclosure consolidated farmland and pushed displaced peasants to cities — a labor reservoir for factories.",
    },
    {
      prompt: "The factory system was initially powered by…",
      options: ["Steam engines from the start", "Water (from rivers, then steam)", "Wind only", "Coal-fired steam from 1700 onward"],
      correctIndex: 1,
      rationale: "Early factories used water power; coal-fired steam engines came in later, scaling industry massively.",
    },
    {
      prompt: "A crucial agricultural technology that increased yields before the IR was…",
      options: ["Tractors", "Seed drills + crop rotation", "GMOs", "Petroleum fertilizers"],
      correctIndex: 1,
      rationale: "The British Agricultural Revolution (seed drill, crop rotation) increased yields and freed labor for factories.",
    },
    {
      prompt: "Industrialization shifted labor from…",
      options: [
        "Skilled artisanal work to unskilled factory labor",
        "Skilled labor to subsistence farming",
        "Slavery to feudalism",
        "Urban to rural",
      ],
      correctIndex: 0,
      rationale: "The factory system replaced skilled artisans with unskilled mass labor.",
    },
    {
      prompt: "Britain's resource advantages included…",
      options: [
        "Coal + iron + navigable rivers and canals + colonial timber",
        "Vast oil reserves",
        "Volcanic farmland",
        "Rich gold mines",
      ],
      correctIndex: 0,
      rationale: "Coal + iron + waterways + colonial supply chains made Britain the first industrializer.",
    },
    {
      prompt: "Urbanization during the Industrial Revolution refers to…",
      options: [
        "Mass migration of workers to factory cities",
        "Movement back to rural areas",
        "Decline of city populations",
        "Shrinking of London",
      ],
      correctIndex: 0,
      rationale: "Industrialization concentrated workers in cities like Manchester, Liverpool, Birmingham.",
    },
  ],

  "u5-bi4": [
    {
      prompt: "Japan's response to Western industrialization was…",
      options: [
        "The Meiji Restoration — embracing industrialization to defend against westernization",
        "Total isolation",
        "Adopting British colonial rule",
        "Conversion to Christianity",
      ],
      correctIndex: 0,
      rationale: "Meiji Japan industrialized rapidly to avoid being colonized — an exception that proves the rule.",
    },
    {
      prompt: "The Trans-Siberian Railway connected…",
      options: [
        "Western Russia to the Pacific Ocean coast",
        "Beijing to Mumbai",
        "Cape Town to Cairo",
        "London to Calcutta",
      ],
      correctIndex: 0,
      rationale: "The Trans-Siberian linked European Russia to the Pacific — vital for connecting + industrializing the empire.",
    },
    {
      prompt: "British policy in India contributed to which industrial outcome?",
      options: [
        "Indian textile manufacturing collapsed under tariffs and imported British cloth",
        "Indian textiles became the dominant global export",
        "India was rapidly industrialized",
        "British factories closed to protect Indian craftspeople",
      ],
      correctIndex: 0,
      rationale: "Britain taxed Indian textiles + flooded India with British cloth, deindustrializing India.",
    },
    {
      prompt: "The US experienced massive immigration during industrialization, primarily to…",
      options: [
        "Rural Midwest farms only",
        "Urban industrial centers",
        "Mexico",
        "The Caribbean",
      ],
      correctIndex: 1,
      rationale: "European immigrants flowed to US industrial cities like New York, Chicago, Pittsburgh.",
    },
    {
      prompt: "India's share of global manufacturing during the 19th century…",
      options: [
        "Rose dramatically",
        "Collapsed from ~25% (1750) to under 2% (1900)",
        "Stayed exactly the same",
        "Surpassed Britain's",
      ],
      correctIndex: 1,
      rationale: "Industrialization + British policy crushed India's traditional manufacturing.",
    },
    {
      prompt: "The Meiji Restoration BEGAN in…",
      options: ["1789", "1815", "1868", "1900"],
      correctIndex: 2,
      rationale: "The Meiji Restoration began in 1868 in Japan.",
    },
    {
      prompt: "Russian industrialization was distinctive because it was…",
      options: [
        "Top-down, state-directed (e.g., Trans-Siberian, Witte's reforms)",
        "Bottom-up via private banks",
        "Driven by religious missions",
        "Outsourced to Britain entirely",
      ],
      correctIndex: 0,
      rationale: "Russia industrialized largely under state direction — Witte's reforms, government-built railways.",
    },
    {
      prompt: "Japan's success at industrialization differed from the Ottoman Tanzimat reforms because Japan…",
      options: [
        "Adopted Western industrial methods more aggressively + with stronger state direction",
        "Refused to adopt any Western technology",
        "Was less interested in modernization",
        "Lacked any military advantage",
      ],
      correctIndex: 0,
      rationale: "Both states tried to modernize — Japan succeeded; the Ottomans had less institutional success.",
    },
  ],

  "u5-bi5": [
    {
      prompt: "The Second Industrial Revolution is associated with which materials and energy?",
      options: [
        "Coal + textiles only",
        "Steel + oil + electricity + chemicals",
        "Wood + water power only",
        "Iron + animal labor",
      ],
      correctIndex: 1,
      rationale: "2nd IR: steel, oil, internal combustion, electricity, chemicals — a categorical leap from coal/textiles.",
    },
    {
      prompt: "Internal combustion engines were transformative because they…",
      options: [
        "Replaced coal-fired steam in transportation (cars, trucks, airplanes, ships)",
        "Replaced food entirely",
        "Banned rail travel",
        "Were less efficient than steam",
      ],
      correctIndex: 0,
      rationale: "Internal combustion + oil reshaped transport — the modern transportation system rests on it.",
    },
    {
      prompt: "The US Transcontinental Railroad was completed in…",
      options: ["1815", "1848", "1869", "1900"],
      correctIndex: 2,
      rationale: "The US Transcontinental Railroad was completed in 1869 (Promontory Summit).",
    },
    {
      prompt: "The telegraph's main effect on global trade was…",
      options: [
        "Faster shipment of goods",
        "Near-instant long-distance communication, allowing real-time pricing and coordination",
        "Replacing all railroads",
        "Encouraging local-only trade",
      ],
      correctIndex: 1,
      rationale: "Telegraph gave merchants + governments same-day price + intelligence — first information revolution.",
    },
    {
      prompt: "Railroads created which kind of economic structure?",
      options: [
        "Local subsistence economies",
        "National + integrated commodity markets",
        "Independent micro-states",
        "Religious trade monopolies",
      ],
      correctIndex: 1,
      rationale: "Railroads created national markets — uniform prices, mass distribution.",
    },
    {
      prompt: "Steel was important to 2nd IR construction because it…",
      options: [
        "Replaced wood and stone for skyscrapers, bridges, rails, ships",
        "Was lighter than aluminum",
        "Was harder to produce than iron",
        "Was banned in industrial cities",
      ],
      correctIndex: 0,
      rationale: "Cheaper steel (Bessemer process) enabled skyscrapers, bridges, and modern infrastructure.",
    },
    {
      prompt: "Oil refining and petroleum chemistry were associated with which industrial wave?",
      options: ["1st IR", "2nd IR", "Pre-industrial era", "Renaissance"],
      correctIndex: 1,
      rationale: "Oil and petrochemicals are 2nd IR products.",
    },
    {
      prompt: "An overall result of the 2nd IR was…",
      options: [
        "Massive expansion of available energy and goods, fueling consumer societies",
        "Decline of cities",
        "Decrease in global trade",
        "End of empire-building",
      ],
      correctIndex: 0,
      rationale: "2nd IR put cars, electric lights, telegrams, mass-produced goods within reach of millions.",
    },
  ],

  "u5-bi6": [
    {
      prompt: "Adam Smith argued for…",
      options: [
        "Government-directed mercantilism",
        "Free-market capitalism — market 'invisible hand', limited government in the economy",
        "Communism",
        "Theocracy",
      ],
      correctIndex: 1,
      rationale: "Wealth of Nations (1776): supply + demand, invisible hand, free trade.",
    },
    {
      prompt: "Smith's Wealth of Nations was published in…",
      options: ["1689", "1776", "1815", "1848"],
      correctIndex: 1,
      rationale: "1776 — same year as the American Declaration of Independence, fittingly.",
    },
    {
      prompt: "Mercantilism declined in the 19th century because…",
      options: [
        "States wanted finite-pie thinking",
        "Industrial productivity gains made free-trade capitalism more profitable",
        "Religion required mercantilism",
        "Mercantilism had always been illegal",
      ],
      correctIndex: 1,
      rationale: "Industrialized economies could grow the pie — free trade + capitalism became more profitable than zero-sum mercantilism.",
    },
    {
      prompt: "Unilever is an example of a…",
      options: [
        "Joint-stock company of the 1600s",
        "Transnational corporation operating across national borders",
        "Soviet collective farm",
        "Mercantilist colonial monopoly",
      ],
      correctIndex: 1,
      rationale: "Unilever is a 19th-century-rooted Anglo-Dutch transnational — modern global corporate form.",
    },
    {
      prompt: "Industrial capitalism produced a new class structure including…",
      options: [
        "An expanding middle class with disposable income for mass-produced goods",
        "Only nobles + peasants",
        "Universal poverty",
        "Equality of wealth",
      ],
      correctIndex: 0,
      rationale: "Industrialization expanded the middle class as consumers + professionals.",
    },
    {
      prompt: "Free-market capitalism reduced which barrier to international trade?",
      options: [
        "Tariffs",
        "Religious doctrine",
        "Astronomy",
        "Monarchy",
      ],
      correctIndex: 0,
      rationale: "Free trade meant lower tariffs and freer goods movement.",
    },
    {
      prompt: "The 'invisible hand' is shorthand for…",
      options: [
        "State direction of the market",
        "The idea that individual self-interest in markets produces collective benefit",
        "Religious moral law",
        "Hidden taxes",
      ],
      correctIndex: 1,
      rationale: "Smith's metaphor: individual self-interested decisions lead to optimal collective outcomes — in theory.",
    },
    {
      prompt: "Capitalism's spread led to the rise of which corporate form?",
      options: [
        "Monasteries",
        "Transnational corporations",
        "Royal trading monopolies",
        "Indigenous tribute systems",
      ],
      correctIndex: 1,
      rationale: "Free-market expansion + industrial scale produced multinational corporate forms.",
    },
  ],

  "u5-bi7": [
    {
      prompt: "Karl Marx and Friedrich Engels published the Communist Manifesto in…",
      options: ["1789", "1848", "1900", "1917"],
      correctIndex: 1,
      rationale: "1848 — same year as Europe's revolutions.",
    },
    {
      prompt: "Marx divided industrial society into which two main classes?",
      options: [
        "Nobles and serfs",
        "Proletariat (working class) and bourgeoisie (capitalist class)",
        "Citizens and metics",
        "Believers and infidels",
      ],
      correctIndex: 1,
      rationale: "Marx's class analysis: proletariat vs bourgeoisie.",
    },
    {
      prompt: "Labor unions in industrial states won which reforms?",
      options: [
        "Minimum wage, shorter work day, 5-day work week",
        "Slavery",
        "Mercantilism",
        "Royal absolutism",
      ],
      correctIndex: 0,
      rationale: "Unions secured min-wage laws, hour limits, and weekends.",
    },
    {
      prompt: "Tanzimat reforms were undertaken by which empire?",
      options: ["Mughal", "Qing", "Ottoman", "Russian"],
      correctIndex: 2,
      rationale: "Tanzimat (1839-onward) = Ottoman attempt to modernize + reform.",
    },
    {
      prompt: "Marx's predicted endgame of capitalism was…",
      options: [
        "Perpetual capitalism",
        "Inevitable failure → workers' revolution → socialism → communism",
        "Restoration of monarchies",
        "Permanent feudalism",
      ],
      correctIndex: 1,
      rationale: "Marx predicted capitalism would self-destruct, replaced by workers' revolution → communism.",
    },
    {
      prompt: "Tanzimat reforms aimed to…",
      options: [
        "Industrialize + modernize the Ottoman state to resist Western pressure",
        "Restore Byzantine government",
        "Convert the empire to Christianity",
        "End all trade",
      ],
      correctIndex: 0,
      rationale: "Tanzimat tried to industrialize, secularize, and clean up Ottoman administration.",
    },
    {
      prompt: "Compared to Japan's Meiji reforms, Tanzimat was…",
      options: [
        "More successful",
        "Less successful — Ottoman state continued to weaken",
        "Identical in outcome",
        "Carried out earlier",
      ],
      correctIndex: 1,
      rationale: "Tanzimat was less institutionally successful than Meiji Japan.",
    },
    {
      prompt: "Industrial-era reform movements illustrate which AP World theme?",
      options: [
        "Industrialization created new pressures (inequality, exploitation) that produced political response",
        "Industrialization was universally beneficial",
        "Reform was limited to Asia",
        "Reform always failed",
      ],
      correctIndex: 0,
      rationale: "Industrialization's costs → reform movements (unions, Marxism, Tanzimat) trying to manage them.",
    },
  ],

  // =========================================================================
  // UNIT 6
  // =========================================================================
  "u6-bi1": [
    {
      prompt: "Social Darwinism applied which biological idea to politics?",
      options: [
        "Genetic mutation",
        "'Survival of the fittest' — used to justify imperial domination",
        "Photosynthesis",
        "Mendel's laws",
      ],
      correctIndex: 1,
      rationale: "Social Darwinism repackaged conquest as natural law — fittest nations rule.",
    },
    {
      prompt: "'The White Man's Burden' was…",
      options: [
        "A Kipling poem framing imperialism as a moral duty",
        "An economic policy in Indonesia",
        "A French Catholic newspaper",
        "A treaty with the Mongols",
      ],
      correctIndex: 0,
      rationale: "Kipling's 1899 poem captured the 'civilizing mission' ideology.",
    },
    {
      prompt: "Economic motives for imperialism included need for…",
      options: [
        "Raw materials and new markets for industrial goods",
        "Gold for monasteries",
        "Tribal labor only",
        "Exotic spices alone",
      ],
      correctIndex: 0,
      rationale: "2nd IR economies needed raw materials + captive markets — imperialism delivered both.",
    },
    {
      prompt: "Japan's imperial expansion in the late 19th century targeted…",
      options: [
        "Africa first",
        "Korea + parts of China + Pacific islands (after Meiji modernization)",
        "Mexico",
        "Brazil",
      ],
      correctIndex: 1,
      rationale: "Meiji-era Japan colonized Korea after defeating China in 1894–95 and built Pacific influence.",
    },
    {
      prompt: "Cultural ideologies that supported imperialism included…",
      options: [
        "Racial superiority + civilizing mission + universal Christianity",
        "Pacifism + tolerance",
        "Anti-nationalism",
        "Animism",
      ],
      correctIndex: 0,
      rationale: "Imperialism leaned on racial hierarchy, civilizing mission, missionary Christianity.",
    },
    {
      prompt: "Nationalism contributed to imperialism by…",
      options: [
        "Driving competition among states to demonstrate power through colonies",
        "Discouraging colonial expansion",
        "Promoting universal pacifism",
        "Eliminating military buildups",
      ],
      correctIndex: 0,
      rationale: "Nationalism + great-power rivalry made empire-building a prestige race.",
    },
    {
      prompt: "Britain's imperialism in India was justified ideologically through…",
      options: [
        "Mercantilism only",
        "Civilizing mission + free trade + racial-hierarchy thinking",
        "Hindu theology",
        "Confucianism",
      ],
      correctIndex: 1,
      rationale: "British rule in India was justified through a mix of civilizing mission, Christianity, and economic 'free trade'.",
    },
    {
      prompt: "The 2nd Industrial Revolution affected imperialism by…",
      options: [
        "Reducing demand for raw materials",
        "Increasing demand for raw materials + new markets, motivating colonial expansion",
        "Eliminating the need for colonies",
        "Replacing factories with farms",
      ],
      correctIndex: 1,
      rationale: "2nd IR demand for rubber, oil, copper, cotton, etc. = imperial expansion's economic engine.",
    },
  ],

  "u6-bi2": [
    {
      prompt: "The Berlin Conference (1884–85)…",
      options: [
        "Carved up Africa among European powers without African input",
        "Ended World War I",
        "Granted independence to all African states",
        "Established the United Nations",
      ],
      correctIndex: 0,
      rationale: "Bismarck's Berlin Conference partitioned Africa among European states — no Africans present.",
    },
    {
      prompt: "Belgian Congo was originally the personal colony of…",
      options: ["Queen Victoria", "King Leopold II", "Bismarck", "Napoleon"],
      correctIndex: 1,
      rationale: "Leopold II's Congo Free State was a private colony — its brutality eventually forced Belgian state takeover.",
    },
    {
      prompt: "The Sepoy Rebellion (1857) led to…",
      options: [
        "Indian independence",
        "British government taking direct control of India from the East India Company",
        "Mughal restoration",
        "Russian conquest of India",
      ],
      correctIndex: 1,
      rationale: "Post-Sepoy, the British state replaced the EIC and ruled India directly (the Raj).",
    },
    {
      prompt: "The US acquired the Philippines after which conflict?",
      options: [
        "World War I",
        "The Spanish-American War (1898)",
        "The Mexican-American War",
        "The Boxer Rebellion",
      ],
      correctIndex: 1,
      rationale: "After Spanish-American War, the US took the Philippines from Spain.",
    },
    {
      prompt: "Who organized the Berlin Conference?",
      options: ["Queen Victoria", "Otto von Bismarck", "Napoleon III", "Pope Leo XIII"],
      correctIndex: 1,
      rationale: "Bismarck convened the conference in Berlin.",
    },
    {
      prompt: "Russia's late-19th-century imperial expansion targeted…",
      options: [
        "Poland, parts of the Middle East, and northern China",
        "Mexico and Cuba",
        "Australia",
        "Brazil",
      ],
      correctIndex: 0,
      rationale: "Tsarist Russia expanded southwest into the Caucasus + Middle East and east into Manchuria.",
    },
    {
      prompt: "What replaced older Spanish/Portuguese empires in the late 19th century?",
      options: [
        "New imperial powers — Britain, France, Germany, Japan, US",
        "Indigenous federations",
        "Mongol khanates",
        "Vatican papal states",
      ],
      correctIndex: 0,
      rationale: "New imperial powers (esp. Britain, France, Germany, Japan, US) overtook the older Iberian empires.",
    },
    {
      prompt: "Charter / private-state colonization (e.g., Congo Free State, BEIC India) shows that…",
      options: [
        "States sometimes outsourced colonization to private actors with brutal results",
        "All colonies were directly state-run",
        "Charter colonies didn't exist",
        "Only the US used charter colonies",
      ],
      correctIndex: 0,
      rationale: "Private-actor colonialism (Leopold's Congo, BEIC India) was a major 19th-century pattern.",
    },
  ],

  "u6-bi3": [
    {
      prompt: "Tupac Amaru II led a rebellion against…",
      options: [
        "British rule in India",
        "Spanish rule in Peru",
        "Ottoman rule in Greece",
        "French rule in Algeria",
      ],
      correctIndex: 1,
      rationale: "Tupac Amaru II led a 1780 Indigenous rebellion against Spanish authorities in Peru.",
    },
    {
      prompt: "The Sepoy Mutiny was…",
      options: [
        "An 1857 Indian rebellion against the British East India Company",
        "An Ottoman rebellion against Greece",
        "A Mexican peasant uprising",
        "A French anti-monarchist uprising",
      ],
      correctIndex: 0,
      rationale: "Indian troops + civilians revolted against EIC rule, forcing the British state to take over.",
    },
    {
      prompt: "Greek, Serbian, and Bulgarian independence movements were resistance to…",
      options: ["British rule", "Ottoman rule", "French rule", "Russian rule"],
      correctIndex: 1,
      rationale: "Balkan nationalist movements rebelled against Ottoman rule throughout the 19th century.",
    },
    {
      prompt: "The Ghost Dance movement…",
      options: [
        "Originated among Indigenous Americans, prophesying that ritual would awaken ancestors",
        "Was a Buddhist revival in Japan",
        "Was a Hindu nationalist sect",
        "Was a Russian peasant movement",
      ],
      correctIndex: 0,
      rationale: "Ghost Dance was a religiously-inspired Indigenous resistance to US westward expansion.",
    },
    {
      prompt: "The Xhosa Cattle Killing was…",
      options: [
        "A response to British colonization in South Africa",
        "A Russian peasant uprising",
        "A Mexican land reform movement",
        "A Chinese Buddhist movement",
      ],
      correctIndex: 0,
      rationale: "Xhosa Cattle Killing (1856–57) was a religiously-inspired millenarian response to colonization.",
    },
    {
      prompt: "Religiously inspired resistance movements often emerge when…",
      options: [
        "Colonized peoples lack military or economic tools to resist conventionally",
        "Imperial powers are weak",
        "Local economies thrive",
        "Religion is forbidden",
      ],
      correctIndex: 0,
      rationale: "Religious frameworks become rallying points when conventional resistance is unavailable.",
    },
    {
      prompt: "Resistance through 'creating new states' was BEST exemplified by which region?",
      options: [
        "The Balkans, where Greek/Serbian/Bulgarian states gained independence from the Ottomans",
        "Sub-Saharan Africa in 1850",
        "South Asia in 1857",
        "North America in 1900",
      ],
      correctIndex: 0,
      rationale: "Balkan nationalism produced independent states — a textbook 'new state' resistance pattern.",
    },
    {
      prompt: "Resistance across colonized regions reveals which AP World theme?",
      options: [
        "Imperial control was always partial — coercion drives ongoing resistance in many forms",
        "Colonized people accepted imperialism passively",
        "Resistance only happened after 1900",
        "Resistance was always purely violent",
      ],
      correctIndex: 0,
      rationale: "Imperial systems were always contested — resistance is the rule, not the exception.",
    },
  ],

  "u6-bi4": [
    {
      prompt: "Cash crops differ from subsistence crops in that cash crops are…",
      options: [
        "Grown for export and sale, not local consumption",
        "Always rice or wheat",
        "Always grown by enslaved people",
        "Grown only in cold climates",
      ],
      correctIndex: 0,
      rationale: "Cash-crop agriculture orients the farm toward distant markets, not local food needs.",
    },
    {
      prompt: "Major Latin American cash crops included…",
      options: ["Coffee, sugar, and rubber", "Wheat and maize", "Bananas and apples", "Mussels and oysters"],
      correctIndex: 0,
      rationale: "Coffee (esp. Brazil), sugar (Caribbean + Brazil), rubber (Amazon) were the big Latin American cash crops.",
    },
    {
      prompt: "Guano was harvested in…",
      options: ["Argentina", "Peru and Chile", "Egypt", "Italy"],
      correctIndex: 1,
      rationale: "Peru/Chile produced guano (bird droppings) — a top fertilizer for industrial agriculture.",
    },
    {
      prompt: "Argentine and Uruguayan exports were dominated by…",
      options: ["Cattle / beef", "Spices", "Silk", "Tea"],
      correctIndex: 0,
      rationale: "Pampas cattle + refrigerated steamers made Argentina + Uruguay beef-export powerhouses.",
    },
    {
      prompt: "An effect of cash-crop reorientation in colonized regions was…",
      options: [
        "Subsistence farmers became increasingly dependent on volatile world prices",
        "Local food security improved",
        "Industrialization accelerated locally",
        "All wealth flowed to peasants",
      ],
      correctIndex: 0,
      rationale: "Tying farms to commodity prices made colonized regions vulnerable when prices crashed.",
    },
    {
      prompt: "Belgian Congo's main extractive product was…",
      options: ["Coffee", "Rubber", "Gold", "Tea"],
      correctIndex: 1,
      rationale: "Leopold II's Congo extracted rubber under brutal labor regimes.",
    },
    {
      prompt: "Cash-crop economies served whose needs primarily?",
      options: [
        "Local colonial populations",
        "Industrial Europe's urban centers",
        "Mongol horse breeders",
        "Buddhist monasteries",
      ],
      correctIndex: 1,
      rationale: "Colonial economies served European urban industrial demand — not local needs.",
    },
    {
      prompt: "Why does the cash-crop pattern matter long-term?",
      options: [
        "It seeded export-dependent economies that persist in many post-colonial states today",
        "It made all colonized regions wealthy",
        "It permanently industrialized colonies",
        "It eliminated all global trade",
      ],
      correctIndex: 0,
      rationale: "Many post-colonial economies still ride on cash-crop or raw-material exports — a 19th-c legacy.",
    },
  ],

  "u6-bi5": [
    {
      prompt: "The Opium Wars (1839–42, 1856–60) were fought between Britain and…",
      options: ["Japan", "China", "India", "Persia"],
      correctIndex: 1,
      rationale: "Britain forced China to open trade and accept opium imports through these wars.",
    },
    {
      prompt: "Britain smuggled opium into China primarily to…",
      options: [
        "Spread Christianity",
        "Reduce its trade deficit caused by Chinese tea + porcelain imports",
        "Test medical treatments",
        "Help Chinese workers",
      ],
      correctIndex: 1,
      rationale: "Opium reversed the silver outflow problem — trade deficit fixed, addiction crisis manufactured.",
    },
    {
      prompt: "Spheres of influence in China meant…",
      options: [
        "Each foreign power held exclusive trading + investment rights in a region",
        "China was equally divided into colonies",
        "China was uncolonized and untouched",
        "All powers shared rights equally",
      ],
      correctIndex: 0,
      rationale: "Britain, France, Germany, Russia, and US carved out exclusive zones in China.",
    },
    {
      prompt: "British dominance of cotton in which region was a classic example of economic imperialism?",
      options: ["India and Egypt", "Brazil and Cuba", "Australia and Vietnam", "Korea and Japan"],
      correctIndex: 0,
      rationale: "Britain economically dominated cotton extraction in India + Egypt without formally colonizing Egypt.",
    },
    {
      prompt: "Economic imperialism is BEST defined as…",
      options: [
        "Direct annexation of territory",
        "One country dominating another's economy without formal annexation",
        "A purely military strategy",
        "A religious mission",
      ],
      correctIndex: 1,
      rationale: "Economic imperialism: economic power forces compliance without formal colony status.",
    },
    {
      prompt: "Unequal treaties forced on China after the Opium Wars included…",
      options: [
        "Treaty of Nanjing — opening trading ports + ceding Hong Kong",
        "Treaty of Versailles",
        "Treaty of Tordesillas",
        "Magna Carta",
      ],
      correctIndex: 0,
      rationale: "Treaty of Nanjing (1842) opened ports + ceded Hong Kong to Britain.",
    },
    {
      prompt: "US economic involvement in Cuba and Mexico illustrates…",
      options: [
        "US economic imperialism in Latin America (infrastructure, mining, agriculture investments)",
        "American withdrawal from the Western Hemisphere",
        "US opposition to all empire",
        "End of US trade",
      ],
      correctIndex: 0,
      rationale: "US capital dominated Cuban sugar + Mexican mining + railways — economic imperialism in the hemisphere.",
    },
    {
      prompt: "Why is economic imperialism in China considered a 'subtle' form of imperialism?",
      options: [
        "China retained nominal sovereignty but was forced to follow foreign-imposed economic terms",
        "It was actually more violent than direct colonization",
        "It involved no foreign actors",
        "It produced no lasting effects",
      ],
      correctIndex: 0,
      rationale: "China was never formally colonized, but its economy was shaped by foreign demands — that's the definition.",
    },
  ],

  "u6-bi6": [
    {
      prompt: "Indentured servitude rose in the 19th century primarily as…",
      options: [
        "A replacement labor system after Britain abolished the slave trade (1807)",
        "An entirely new innovation never seen before",
        "A reform of feudalism",
        "A volunteer movement",
      ],
      correctIndex: 0,
      rationale: "Post-abolition demand for cheap labor in plantation + railway economies pulled in indentured workers.",
    },
    {
      prompt: "Chinese laborers were brought to the US primarily to…",
      options: [
        "Build the Transcontinental Railroad",
        "Run Christian missions",
        "Manage banks",
        "Explore the Arctic",
      ],
      correctIndex: 0,
      rationale: "Chinese workers built much of the Western US Transcontinental Railroad in the 1860s.",
    },
    {
      prompt: "Indian indentured laborers worked in places like…",
      options: [
        "Mauritius and Trinidad",
        "Russia and Japan",
        "Greenland",
        "Korea",
      ],
      correctIndex: 0,
      rationale: "Indians were sent under indenture to British colonies — Mauritius, the Caribbean, and beyond.",
    },
    {
      prompt: "Australia was settled by Britain primarily as a…",
      options: ["Penal colony for British convicts", "Religious refuge", "Mining colony", "Diplomatic outpost"],
      correctIndex: 0,
      rationale: "From 1788 onward Britain sent convicts to Australia for hard labor.",
    },
    {
      prompt: "The Chinese Exclusion Act (1882) was passed in…",
      options: ["Britain", "Australia", "United States", "Canada"],
      correctIndex: 2,
      rationale: "The 1882 US Chinese Exclusion Act banned Chinese laborer immigration — the first major race-based US immigration law.",
    },
    {
      prompt: "The White Australia Policy was meant to…",
      options: [
        "Restrict non-European immigration",
        "Attract Asian workers",
        "End British rule",
        "Promote Indigenous rights",
      ],
      correctIndex: 0,
      rationale: "White Australia Policy (1901-onward) restricted non-European immigration.",
    },
    {
      prompt: "Asian indentured laborers contributed to which kind of communities at their destinations?",
      options: [
        "Ethnic enclaves and diaspora communities (e.g., Chinatowns, Indian-Caribbean populations)",
        "Total assimilation with no community formation",
        "Disappearance from the historical record",
        "Religious converts to Christianity only",
      ],
      correctIndex: 0,
      rationale: "Indenture migration created lasting diaspora communities globally.",
    },
    {
      prompt: "Migration patterns in this period demonstrate which AP World theme?",
      options: [
        "Industrial economies + abolition created new global labor flows + new ethnic enclaves",
        "Migration declined dramatically",
        "All migration was voluntary and prosperous",
        "No migration occurred",
      ],
      correctIndex: 0,
      rationale: "Industrial demand + abolition reshaped global labor migration in the 19th century.",
    },
  ],

  // =========================================================================
  // UNIT 7
  // =========================================================================
  "u7-bi1": [
    {
      prompt: "The Russian Revolution (1917) installed which political system?",
      options: ["Constitutional monarchy", "Bolshevik communism", "Liberal democracy", "Theocracy"],
      correctIndex: 1,
      rationale: "Bolsheviks under Lenin overthrew the Provisional Government and installed communism.",
    },
    {
      prompt: "The Qing dynasty was overthrown by which figure / movement?",
      options: [
        "Sun Yat-sen and the Xinhai Revolution (1911)",
        "Mao Zedong's Long March",
        "Chiang Kai-shek's Northern Expedition",
        "The Boxer Rebellion",
      ],
      correctIndex: 0,
      rationale: "1911 Revolution under Sun Yat-sen ended the Qing dynasty and established the Republic of China.",
    },
    {
      prompt: "The Boxer Rebellion (1899–1901) was a Chinese reaction to…",
      options: [
        "Mongol invasion",
        "Foreign / Western imperial influence + Christian missionaries",
        "Buddhist persecution",
        "Confucian reforms",
      ],
      correctIndex: 1,
      rationale: "Boxer Rebellion = anti-foreign + anti-Christian uprising in late Qing China.",
    },
    {
      prompt: "The Mexican Revolution (1910) was driven by…",
      options: [
        "Massive wealth + land inequality and resentment of US economic dominance via the Porfirio Díaz regime",
        "Religious schism alone",
        "Foreign invasion",
        "Volcanic eruption",
      ],
      correctIndex: 0,
      rationale: "Land + wealth inequality + foreign investment produced the Mexican Revolution under Madero.",
    },
    {
      prompt: "Causes of the Russian Revolution included…",
      options: [
        "Defeats in the Russo-Japanese War + WWI + economic backwardness + autocratic rule",
        "Industrial overproduction only",
        "Excessive religious tolerance",
        "Adoption of Confucianism",
      ],
      correctIndex: 0,
      rationale: "Multiple long-running pressures converged: wars, autocracy, industrial backwardness.",
    },
    {
      prompt: "The Taiping Rebellion was…",
      options: [
        "Pre-Qing dynasty",
        "A massive 19th-century uprising against the Qing led by Hong Xiuquan",
        "An Ottoman uprising",
        "A Russian peasant revolt",
      ],
      correctIndex: 1,
      rationale: "Taiping (1850–64) was one of the deadliest civil wars in history; weakened the Qing severely.",
    },
    {
      prompt: "What pattern is shared by the Russian, Chinese, and Mexican revolutions?",
      options: [
        "Long-running internal pressures + defeats / economic stress → regime change",
        "All driven by religious revival",
        "All led to monarchy",
        "All occurred peacefully",
      ],
      correctIndex: 0,
      rationale: "Similar pressure pattern: economic + military weakness + popular grievances → regime change.",
    },
    {
      prompt: "Francisco Madero is associated with which event?",
      options: ["Mexican Revolution", "Russian Revolution", "Boxer Rebellion", "1917 February Revolution"],
      correctIndex: 0,
      rationale: "Madero led the Mexican Revolution against Porfirio Díaz's regime.",
    },
  ],

  "u7-bi2": [
    {
      prompt: "MAIN stands for…",
      options: [
        "Militarism, Alliances, Imperialism, Nationalism",
        "Monarchy, Atheism, Internationalism, Neutrality",
        "Modernism, Atomism, Industrialism, Nominalism",
        "Marxism, Anglicanism, Imperialism, Nazism",
      ],
      correctIndex: 0,
      rationale: "MAIN: the four main long-term causes of WWI.",
    },
    {
      prompt: "The immediate trigger of WWI was…",
      options: [
        "The sinking of the Lusitania",
        "Assassination of Archduke Franz Ferdinand in Sarajevo (1914)",
        "Pearl Harbor",
        "The Treaty of Versailles",
      ],
      correctIndex: 1,
      rationale: "Franz Ferdinand's assassination triggered the alliance cascade that became WWI.",
    },
    {
      prompt: "The Triple Entente included…",
      options: [
        "France, Britain, Russia",
        "Germany, Austria-Hungary, Italy",
        "US, Japan, China",
        "Ottoman, Bulgaria, Albania",
      ],
      correctIndex: 0,
      rationale: "Triple Entente: France + Britain + Russia. Triple Alliance: Germany + Austria-Hungary + Italy.",
    },
    {
      prompt: "Why did one assassination cascade into a world war?",
      options: [
        "Mutual-defense treaties (alliance system) committed every major power to fight",
        "Religious war was inevitable",
        "Economies were too connected",
        "All powers wanted peace and stumbled",
      ],
      correctIndex: 0,
      rationale: "Alliances had no off-ramp — once Austria declared war on Serbia, treaties pulled in everyone.",
    },
    {
      prompt: "Industrial militarism contributed to WWI by…",
      options: [
        "Producing huge standing armies + new mass-produced weapons + arms-race tension",
        "Decreasing military spending",
        "Disarming all states",
        "Replacing soldiers with monks",
      ],
      correctIndex: 0,
      rationale: "Industrial economies = mass-producible armies + weapons + arms-race competition.",
    },
    {
      prompt: "Imperialism contributed to WWI tensions by…",
      options: [
        "Eliminating colonial competition",
        "Creating fierce competition for the remaining colonial lands",
        "Removing all great-power rivalries",
        "Bringing peace to Africa",
      ],
      correctIndex: 1,
      rationale: "Late-stage scramble for colonies + economic interests heightened great-power rivalry.",
    },
    {
      prompt: "Nationalism contributed to WWI by…",
      options: [
        "Encouraging states to prove their power on the world stage; encouraging ethnic groups to demand independence",
        "Promoting universal pacifism",
        "Leading to disarmament",
        "Centralizing all governments under one ruler",
      ],
      correctIndex: 0,
      rationale: "Nationalism inflamed both great-power rivalry and minority-nation independence movements.",
    },
    {
      prompt: "The assassination of Franz Ferdinand was carried out by…",
      options: [
        "A Russian sailor",
        "A Serbian nationalist (Gavrilo Princip)",
        "A French soldier",
        "A British spy",
      ],
      correctIndex: 1,
      rationale: "Gavrilo Princip, a Serbian nationalist, assassinated Franz Ferdinand in Sarajevo.",
    },
  ],

  "u7-bi3": [
    {
      prompt: "'Total war' means…",
      options: [
        "A war fought only at sea",
        "A war in which all of a state's resources, civilians, and economy are mobilized",
        "A war fought only with religious soldiers",
        "A war won quickly with minimal effort",
      ],
      correctIndex: 1,
      rationale: "Total war pulls in the whole society — economy, civilians, propaganda.",
    },
    {
      prompt: "WWI ended with which treaty?",
      options: [
        "Treaty of Versailles (1919)",
        "Treaty of Tordesillas",
        "Treaty of Westphalia",
        "Treaty of Nanjing",
      ],
      correctIndex: 0,
      rationale: "Versailles formally ended WWI in 1919 — and seeded WWII through its harsh terms.",
    },
    {
      prompt: "Trench warfare was particularly deadly because…",
      options: [
        "Industrial economies could endlessly resupply machine guns + artillery, producing static stalemates",
        "Soldiers had no weapons",
        "Trenches were unprotected",
        "Combatants only fought hand-to-hand",
      ],
      correctIndex: 0,
      rationale: "Industrial supply chains turned trenches into endless meat-grinder stalemates.",
    },
    {
      prompt: "New WWI weapons technologies included…",
      options: [
        "Poison gas, machine guns, tanks, submarines",
        "Atomic bombs",
        "Drones",
        "Cruise missiles",
      ],
      correctIndex: 0,
      rationale: "Gas (Ypres), machine guns, tanks (Somme), and submarines (U-boats) were WWI innovations.",
    },
    {
      prompt: "Propaganda in WWI was used to…",
      options: [
        "Mobilize the home front + recruit soldiers + demonize the enemy",
        "Promote pacifism",
        "Discourage industrial production",
        "Limit press freedom only in neutral countries",
      ],
      correctIndex: 0,
      rationale: "Total war required mass mobilization → propaganda became a state-managed weapon.",
    },
    {
      prompt: "WWI casualties were massive because…",
      options: [
        "Industrial weapons + trench warfare + total mobilization led to unprecedented kill rates",
        "Soldiers refused to fight",
        "Wars were short and decisive",
        "Disease was the only killer",
      ],
      correctIndex: 0,
      rationale: "Industrial-scale war × trench tactics × total mobilization = millions dead.",
    },
    {
      prompt: "The Treaty of Versailles harshly punished…",
      options: ["Russia", "Germany", "Britain", "Japan"],
      correctIndex: 1,
      rationale: "War-guilt clause + reparations targeted Germany.",
    },
    {
      prompt: "Why is WWI called the FIRST 'modern' or 'industrial' war?",
      options: [
        "It used industrial economies + mass-produced weapons + total mobilization at unprecedented scale",
        "It involved only one country",
        "It was fought only on horseback",
        "It produced no casualties",
      ],
      correctIndex: 0,
      rationale: "WWI fully unleashed industrial-economy warfare — a categorical change from earlier wars.",
    },
  ],

  "u7-bi4": [
    {
      prompt: "The Great Depression began in…",
      options: ["Britain", "United States", "Germany", "Japan"],
      correctIndex: 1,
      rationale: "The 1929 US stock market crash spread globally — the start of the Great Depression.",
    },
    {
      prompt: "FDR's response to the Depression was the…",
      options: ["New Deal — large-scale federal spending + reform programs", "Neutrality Acts only", "Marshall Plan", "Bretton Woods agreement"],
      correctIndex: 0,
      rationale: "The New Deal expanded federal economic intervention dramatically.",
    },
    {
      prompt: "Stalin's Five-Year Plans aimed to…",
      options: [
        "Rapidly industrialize the USSR + collectivize agriculture",
        "Privatize Soviet industry",
        "Reverse the Bolshevik Revolution",
        "Adopt free-market capitalism",
      ],
      correctIndex: 0,
      rationale: "Five-Year Plans = forced industrialization + collectivized agriculture, often disastrous in human cost.",
    },
    {
      prompt: "Weimar Germany's hyperinflation was caused mainly by…",
      options: [
        "Too few exports + Versailles reparations + economic mismanagement",
        "Excellent fiscal management",
        "Atomic energy programs",
        "Pre-war stability",
      ],
      correctIndex: 0,
      rationale: "Reparations + mismanagement collapsed the mark in the early 1920s — political fuel for Nazism.",
    },
    {
      prompt: "Why did 1929 push every major government deeper into the economy?",
      options: [
        "Hands-off responses (Hoover) failed; states felt forced to manage their economies actively",
        "It made governments smaller",
        "It promoted free trade",
        "It eliminated all economic policy",
      ],
      correctIndex: 0,
      rationale: "1929 broke the pre-1914 consensus on minimal state economic intervention.",
    },
    {
      prompt: "Stalin's collectivization of agriculture caused…",
      options: [
        "Massive famine — most infamously the Holodomor in Ukraine",
        "Universal prosperity",
        "Religious revival",
        "Fall of the Soviet Union",
      ],
      correctIndex: 0,
      rationale: "Forced collectivization devastated rural USSR; Ukrainian famine killed 7–10 million.",
    },
    {
      prompt: "Why did fascist economic policy appeal in interwar Germany?",
      options: [
        "Promised national restoration + employment + military buildup, blaming Versailles + minorities",
        "Promised democracy and pacifism",
        "Restored the Weimar gold standard",
        "Encouraged international cooperation",
      ],
      correctIndex: 0,
      rationale: "Nazis combined economic intervention with extreme nationalism + scapegoating.",
    },
    {
      prompt: "The Great Depression's reach was…",
      options: [
        "Confined to the US only",
        "Global — its effects spread through interconnected economies and trade",
        "Limited to Europe only",
        "Limited to colonies only",
      ],
      correctIndex: 1,
      rationale: "Globalization meant 1929's shock spread to every major economy.",
    },
  ],

  "u7-bi5": [
    {
      prompt: "The Treaty of Versailles' War Guilt Clause assigned blame for WWI to…",
      options: ["Russia", "Germany", "Austria-Hungary alone", "France"],
      correctIndex: 1,
      rationale: "Article 231 placed full war-guilt on Germany — fueling German national resentment.",
    },
    {
      prompt: "British and French policy toward Hitler in the late 1930s is BEST described as…",
      options: ["Aggressive containment", "Appeasement", "Total economic embargo", "Direct invasion"],
      correctIndex: 1,
      rationale: "Appeasement: ceding territory (Sudetenland) to Hitler to avoid war.",
    },
    {
      prompt: "WWII began in Europe with the German invasion of…",
      options: ["France", "Poland (1939)", "Soviet Union", "Britain"],
      correctIndex: 1,
      rationale: "Hitler's invasion of Poland (Sept 1, 1939) was the trigger; Britain + France declared war.",
    },
    {
      prompt: "Hyperinflation + the Great Depression contributed to WWII by…",
      options: [
        "Discrediting Weimar democracy + creating a market for fascist promises of national restoration",
        "Making Germans pacifist",
        "Encouraging international cooperation",
        "Strengthening the League of Nations",
      ],
      correctIndex: 0,
      rationale: "Economic chaos opened space for extremist political movements — fascism rode that wave.",
    },
    {
      prompt: "Hitler's actions before the invasion of Poland included…",
      options: [
        "Remilitarizing the Rhineland, annexing Austria (Anschluss), taking the Sudetenland",
        "Withdrawing from all of Germany",
        "Invading the US",
        "Allying with Britain",
      ],
      correctIndex: 0,
      rationale: "Hitler tested boundaries with Rhineland (1936), Austria (1938), Sudetenland (1938), Czechoslovakia (1939).",
    },
    {
      prompt: "The Versailles reparations…",
      options: [
        "Crippled Germany economically and fueled fascist political movements",
        "Made Germany the wealthiest nation",
        "Were never paid",
        "Were forgiven in 1919",
      ],
      correctIndex: 0,
      rationale: "Reparations + war guilt = economic + political pressure cooker.",
    },
    {
      prompt: "Fascism in interwar Europe was characterized by…",
      options: [
        "Extreme nationalism, militarism, anti-democratic + anti-communist ideology",
        "Pacifism + democratic socialism",
        "Religious tolerance",
        "Free-market liberalism",
      ],
      correctIndex: 0,
      rationale: "Fascism = ultranationalism + militarism + authoritarian state + scapegoating.",
    },
    {
      prompt: "Britain's red line — what finally triggered WWII — was…",
      options: ["Invasion of Austria", "Invasion of Poland", "Annexation of Czechoslovakia", "The Nuremberg Laws"],
      correctIndex: 1,
      rationale: "Britain's red line was Poland — once Hitler crossed it, Britain + France declared war.",
    },
  ],

  "u7-bi6": [
    {
      prompt: "WWII was a 'total war' because…",
      options: [
        "Combatants mobilized entire economies + civilian populations",
        "Only soldiers participated",
        "Civilians were exempted from all wartime duties",
        "Industry shut down",
      ],
      correctIndex: 0,
      rationale: "Both Allied + Axis states mobilized full economies, factories, women, propaganda.",
    },
    {
      prompt: "US wartime mobilization included…",
      options: [
        "Bringing women into factories ('Rosie the Riveter') + repurposing industry for munitions",
        "Eliminating military spending",
        "Withdrawing from the war effort",
        "Banning industrial labor",
      ],
      correctIndex: 0,
      rationale: "US factories + women workers produced unmatched Allied output.",
    },
    {
      prompt: "Nazi Germany's labor mobilization relied heavily on…",
      options: [
        "Voluntary German workers only",
        "Forced labor from concentration camps and conquered populations",
        "International unions",
        "Female factory labor as the primary force",
      ],
      correctIndex: 1,
      rationale: "Germany used forced labor extensively — counterproductive due to brutal conditions.",
    },
    {
      prompt: "Civil liberties were curtailed in WWII even by democracies — example?",
      options: [
        "US internment of Japanese-Americans",
        "British abolition of Parliament",
        "French elimination of taxation",
        "Soviet democratic reforms",
      ],
      correctIndex: 0,
      rationale: "FDR's executive order interned Japanese-Americans during WWII — civil-liberties violation by a democracy.",
    },
    {
      prompt: "Firebombing of Tokyo and Dresden refers to…",
      options: [
        "Allied incendiary bombing campaigns that destroyed cities + killed civilians on a mass scale",
        "Naval blockades only",
        "Atomic bombings",
        "Use of poison gas",
      ],
      correctIndex: 0,
      rationale: "Firebombing was a deliberate Allied tactic against Axis cities.",
    },
    {
      prompt: "The atomic bombs were dropped on…",
      options: [
        "Tokyo and Yokohama",
        "Hiroshima and Nagasaki",
        "Berlin and Hamburg",
        "Manchuria",
      ],
      correctIndex: 1,
      rationale: "Hiroshima (Aug 6, 1945) + Nagasaki (Aug 9, 1945) — first uses of atomic weapons.",
    },
    {
      prompt: "Why did US industry outproduce Axis industry in WWII?",
      options: [
        "Atlantic Ocean protected US factories from invasion + huge industrial capacity + free labor (women in factories)",
        "Smaller workforce",
        "Less natural resources",
        "Fewer railroads",
      ],
      correctIndex: 0,
      rationale: "Geographic safety + industrial capacity + mobilized civilian labor = US production advantage.",
    },
    {
      prompt: "Colonial troops + workers played what role in WWII?",
      options: [
        "Fought in Allied + Axis armies + provided crucial wartime labor (often coerced)",
        "Were exempt entirely",
        "Refused all participation",
        "Only served in noncombat roles in Europe",
      ],
      correctIndex: 0,
      rationale: "Colonial subjects fought + labored in WWII, accelerating decolonization pressures afterward.",
    },
  ],

  "u7-bi7": [
    {
      prompt: "The 'Final Solution' refers to…",
      options: [
        "Nazi Germany's plan to systematically exterminate European Jews + other groups",
        "A Soviet agricultural plan",
        "An Allied invasion strategy",
        "A diplomatic agreement",
      ],
      correctIndex: 0,
      rationale: "Final Solution = Nazi systematic genocide of Jews (and Roma, disabled, gays, others).",
    },
    {
      prompt: "The Holodomor (1932–33) was a famine in…",
      options: ["Bengal", "Ukraine", "Ireland", "China"],
      correctIndex: 1,
      rationale: "Holodomor = Soviet-engineered famine in Ukraine; 7–10 million died.",
    },
    {
      prompt: "Holocaust death tolls are estimated at approximately…",
      options: [
        "300,000",
        "1 million",
        "6 million Jews + millions of others",
        "100,000",
      ],
      correctIndex: 2,
      rationale: "~6 million Jews + millions of Roma, disabled people, Soviet POWs, Polish civilians, gays, etc.",
    },
    {
      prompt: "Nazi persecution moved through which stages?",
      options: [
        "Forced removal (laws, ghettoization) → concentration camps → extermination camps",
        "Forced removal only",
        "Direct killing only, no preceding policies",
        "Deportation back to home countries",
      ],
      correctIndex: 0,
      rationale: "Persecution escalated step by step from legal exclusion to genocide.",
    },
    {
      prompt: "Stalin's collectivization caused famine in Ukraine because…",
      options: [
        "Soviet policy stripped grain from Ukrainian farms to feed urban industrial centers",
        "Ukrainians refused to grow food",
        "Drought destroyed all crops naturally",
        "American sanctions prevented imports",
      ],
      correctIndex: 0,
      rationale: "Forced grain requisitioning + collectivization = engineered famine.",
    },
    {
      prompt: "Both the Holocaust and Holodomor are categorized as…",
      options: [
        "State-engineered mass killings",
        "Random natural disasters",
        "Wartime accidents only",
        "Religious wars",
      ],
      correctIndex: 0,
      rationale: "Both involved state policy directly causing mass civilian death — that's the AP grouping.",
    },
    {
      prompt: "Why is the Holodomor often grouped with the Holocaust in AP World?",
      options: [
        "Both were state-policy-driven mass killings of specific populations through deliberate action",
        "Both were committed by the same state",
        "Both involved nuclear weapons",
        "Both occurred in Western Europe",
      ],
      correctIndex: 0,
      rationale: "AP World groups them as state-sponsored mass killings, despite different mechanisms.",
    },
    {
      prompt: "Why did the Nazi regime build extermination camps?",
      options: [
        "To industrialize the killing process — concentrating + murdering at unprecedented scale",
        "For agricultural purposes",
        "For trade and commerce",
        "For peaceful resettlement",
      ],
      correctIndex: 0,
      rationale: "Extermination camps were the industrial endpoint of Nazi genocide planning.",
    },
  ],

  // =========================================================================
  // UNIT 8
  // =========================================================================
  "u8-bi1": [
    {
      prompt: "The Cold War was primarily a conflict between…",
      options: [
        "Britain and Germany",
        "United States and the Soviet Union",
        "China and Japan",
        "France and Italy",
      ],
      correctIndex: 1,
      rationale: "US-USSR rivalry shaped global geopolitics 1945–1991.",
    },
    {
      prompt: "The 'Iron Curtain' was a…",
      options: [
        "Physical wall built across Europe",
        "Symbolic line dividing Western Europe from the Soviet bloc",
        "Steel-trade alliance",
        "Religious doctrine",
      ],
      correctIndex: 1,
      rationale: "Churchill's metaphor for the political division between Western Europe + Soviet-dominated Eastern Europe.",
    },
    {
      prompt: "The Berlin Wall was built in…",
      options: ["1945", "1949", "1961", "1989"],
      correctIndex: 2,
      rationale: "Built 1961, fell 1989. Symbol of the Cold War.",
    },
    {
      prompt: "The Non-Aligned Movement was led in part by…",
      options: [
        "Indonesia (Sukarno) + India (Nehru) + Egypt (Nasser) + Yugoslavia (Tito)",
        "US + USSR jointly",
        "Britain + France",
        "China + Japan",
      ],
      correctIndex: 0,
      rationale: "NAM united newly-independent states refusing to align with either superpower.",
    },
    {
      prompt: "What did US-USSR Cold War tensions emerge from?",
      options: [
        "Conflicting ideologies (capitalism vs communism) + disputes over post-WWII Eastern Europe",
        "Religious schism",
        "Linguistic differences",
        "Sports rivalry",
      ],
      correctIndex: 0,
      rationale: "Ideological + post-war territorial disputes (esp. Eastern Europe) created Cold War tension.",
    },
    {
      prompt: "Stalin's Eastern European policy involved…",
      options: [
        "Establishing communist 'satellite' states + refusing the democratic elections he had agreed to",
        "Restoring monarchies",
        "Granting full independence to the Baltics",
        "Withdrawing all Soviet troops by 1946",
      ],
      correctIndex: 0,
      rationale: "Stalin imposed communist regimes across Eastern Europe — broke wartime agreements.",
    },
    {
      prompt: "Germany after WWII was divided into…",
      options: [
        "Two zones (East + West)",
        "Four occupation zones (US, UK, France, USSR)",
        "Six separate states",
        "Not divided at all",
      ],
      correctIndex: 1,
      rationale: "Four zones initially; later consolidated into West Germany + East Germany.",
    },
    {
      prompt: "Why did decolonization shape the Cold War?",
      options: [
        "New independent states became potential Cold War clients on either side — or Non-Aligned",
        "Decolonization had no Cold War impact",
        "It created new monarchies allied with Britain",
        "It froze great-power rivalry",
      ],
      correctIndex: 0,
      rationale: "Decolonization created the proxy battleground — newly independent states could lean US, USSR, or NAM.",
    },
  ],

  "u8-bi2": [
    {
      prompt: "MAD stands for…",
      options: [
        "Mutually Assured Destruction",
        "Multilateral Atomic Disarmament",
        "Major Arms Defense",
        "Massive Arms Doctrine",
      ],
      correctIndex: 0,
      rationale: "MAD = if either superpower used nukes, both would be destroyed — kept direct war off the table.",
    },
    {
      prompt: "NATO is the…",
      options: [
        "Western Cold War military alliance",
        "Soviet bloc alliance",
        "Asian-Pacific military pact",
        "Latin American economic union",
      ],
      correctIndex: 0,
      rationale: "NATO (1949) = North Atlantic Treaty Organization, Western alliance against the USSR.",
    },
    {
      prompt: "The Warsaw Pact was the Soviet bloc's…",
      options: ["Trade union", "Mutual-defense alliance", "Religious organization", "Cultural festival"],
      correctIndex: 1,
      rationale: "Warsaw Pact (1955) was the USSR's military alliance with Eastern European satellites.",
    },
    {
      prompt: "The Korean War (1950–53) was a Cold War proxy because…",
      options: [
        "Communist North (USSR/PRC-backed) fought anti-communist South (US-backed)",
        "It was a religious conflict",
        "It was an internal British conflict",
        "It involved no superpower involvement",
      ],
      correctIndex: 0,
      rationale: "Korea was the textbook proxy war — direct superpower fighting was off-limits, so they backed sides.",
    },
    {
      prompt: "The Vietnam War involved which actors?",
      options: [
        "Communist North Vietnam (USSR/China-backed) vs anti-communist South Vietnam (US-backed)",
        "Britain vs France",
        "Mongol vs Han",
        "Spain vs Portugal",
      ],
      correctIndex: 0,
      rationale: "Vietnam followed the Cold War proxy template.",
    },
    {
      prompt: "The Sandinistas vs Contras conflict was in…",
      options: ["Cuba", "Nicaragua", "Vietnam", "Angola"],
      correctIndex: 1,
      rationale: "US-backed Contras fought Sandinista government in Nicaragua during the 1980s.",
    },
    {
      prompt: "The Angolan Civil War's outcome was…",
      options: [
        "US-backed forces won",
        "Soviet-backed (MPLA) communist forces won",
        "Both sides agreed to peaceful coexistence in 1980",
        "British colonial rule resumed",
      ],
      correctIndex: 1,
      rationale: "Angolan civil war ended with the Soviet-backed MPLA in control.",
    },
    {
      prompt: "Why did US + USSR avoid direct combat during the Cold War?",
      options: [
        "Mutually Assured Destruction made nuclear war catastrophic + thus deterrent",
        "They were allies",
        "They had no military",
        "Both were too poor to fight",
      ],
      correctIndex: 0,
      rationale: "MAD made direct conflict suicidal — proxy wars were the substitute.",
    },
  ],

  "u8-bi3": [
    {
      prompt: "The PRC was founded in…",
      options: ["1911", "1927", "1949", "1989"],
      correctIndex: 2,
      rationale: "Mao Zedong proclaimed the People's Republic of China on October 1, 1949.",
    },
    {
      prompt: "Mao Zedong defeated which faction in the Chinese Civil War?",
      options: [
        "The Manchus",
        "The Nationalists (Kuomintang) under Chiang Kai-shek",
        "The Mongols",
        "The Japanese army (in WWII)",
      ],
      correctIndex: 1,
      rationale: "Mao's Communist forces defeated Chiang Kai-shek's Nationalists in 1949.",
    },
    {
      prompt: "Chinese collectivization, compared to Soviet collectivization, was…",
      options: [
        "Initially less violent — peasants who supported the revolution were more accepting",
        "Far more violent than the Soviet version",
        "Identical to Stalin's",
        "Reversed within five years",
      ],
      correctIndex: 0,
      rationale: "Chinese collectivization was relatively more peaceful early on; later Mao's policies became disastrous.",
    },
    {
      prompt: "The Great Leap Forward (1958–62) led to…",
      options: [
        "Successful industrialization without cost",
        "Mass famine — tens of millions died",
        "Restoration of the Qing dynasty",
        "Adoption of Western capitalism",
      ],
      correctIndex: 1,
      rationale: "The Great Leap Forward caused one of the deadliest famines in history (~30M deaths).",
    },
    {
      prompt: "Egypt's Suez Canal was nationalized by…",
      options: ["Sadat", "Mubarak", "Nasser", "Mohammed Ali"],
      correctIndex: 2,
      rationale: "Gamal Abdel Nasser nationalized the Suez Canal in 1956.",
    },
    {
      prompt: "The Suez Crisis (1956) involved which countries invading Egypt?",
      options: [
        "Britain, France, and Israel",
        "USSR and Cuba",
        "US and Britain",
        "China and India",
      ],
      correctIndex: 0,
      rationale: "Britain + France + Israel invaded; the US (Eisenhower) forced their withdrawal.",
    },
    {
      prompt: "Maoism differed from Soviet communism by emphasizing…",
      options: [
        "Peasant-based revolution rather than urban-worker revolution",
        "Free-market reform",
        "Religious leadership",
        "Hereditary monarchy",
      ],
      correctIndex: 0,
      rationale: "Maoist theory centered on the peasantry — distinct from Marx's industrial-worker focus.",
    },
    {
      prompt: "Why did peasants initially accept Mao's collectivization?",
      options: [
        "They had supported the Communist revolution + initial reforms had given them land",
        "They had no choice — only military force was used",
        "Mao paid them in gold",
        "They were forced by foreign powers",
      ],
      correctIndex: 0,
      rationale: "Peasant support gave Mao buy-in Stalin never had.",
    },
  ],

  "u8-bi4": [
    {
      prompt: "Indian decolonization is associated with which leader's nonviolent strategy?",
      options: ["Nasser", "Gandhi", "Bolívar", "Mao"],
      correctIndex: 1,
      rationale: "Mahatma Gandhi led nonviolent civil-disobedience campaigns against British rule.",
    },
    {
      prompt: "India became independent in…",
      options: ["1939", "1945", "1947", "1957"],
      correctIndex: 2,
      rationale: "India + Pakistan gained independence in 1947, with the partition that triggered massive violence.",
    },
    {
      prompt: "Algerian decolonization (1954–62) was achieved through…",
      options: [
        "Peaceful negotiation",
        "Armed conflict led by the National Liberation Front (FLN)",
        "British arbitration",
        "Religious reforms",
      ],
      correctIndex: 1,
      rationale: "Algeria fought a brutal war of independence against France.",
    },
    {
      prompt: "The Indian National Congress (1885) initially demanded…",
      options: [
        "Complete and immediate independence",
        "A greater degree of self-rule under British government",
        "Restoration of the Mughal Empire",
        "Conversion of India to Christianity",
      ],
      correctIndex: 1,
      rationale: "Early INC sought self-rule within the British Empire; Gandhi-era pushed harder.",
    },
    {
      prompt: "Why did Britain decolonize India after WWII rather than before?",
      options: [
        "Britain emerged from WWII economically + politically depleted, less able to maintain empire",
        "Gandhi convinced them earlier",
        "WWII strengthened Britain's grip",
        "Britain was conquered by India",
      ],
      correctIndex: 0,
      rationale: "Post-WWII Britain was bankrupt + facing nationalist movements globally.",
    },
    {
      prompt: "The partition of India created…",
      options: [
        "India + Pakistan, with massive Hindu-Muslim violence + displacement",
        "A unified democratic India",
        "Three states: India, Pakistan, Bangladesh (in 1947)",
        "An Indian-Burmese federation",
      ],
      correctIndex: 0,
      rationale: "1947 partition split India along religious lines, triggering brutal violence and population transfer.",
    },
    {
      prompt: "The chronological pattern of Algerian decolonization was…",
      options: [
        "Post-WWII nationalism → FLN war (1954–62) → French withdrawal under De Gaulle",
        "Quick peaceful decolonization in 1945",
        "British administration after 1945",
        "Adoption of US protectorate status",
      ],
      correctIndex: 0,
      rationale: "Standard timeline: post-war nationalism → FLN war → De Gaulle's decision to grant independence.",
    },
    {
      prompt: "Why did some decolonizations succeed nonviolently while others required armed struggle?",
      options: [
        "It depended on the colonizer's flexibility + strength + the presence of settler populations",
        "Random chance",
        "All decolonizations were identical",
        "Nonviolence always worked",
      ],
      correctIndex: 0,
      rationale: "Britain in India (broke + flexible) vs France in settler-heavy Algeria — different colonizers, different paths.",
    },
  ],

  "u8-bi5": [
    {
      prompt: "Pre-WWI Palestine was part of which empire?",
      options: ["British", "Ottoman", "French", "Russian"],
      correctIndex: 1,
      rationale: "Palestine was part of the Ottoman Empire until WWI — then a British Mandate.",
    },
    {
      prompt: "Zionism aimed to…",
      options: [
        "Establish a Jewish state in Palestine",
        "Convert Christians to Judaism",
        "Restore the Roman Empire",
        "Abolish national borders",
      ],
      correctIndex: 0,
      rationale: "Zionism = late-19th-c movement to create a Jewish national state in Palestine.",
    },
    {
      prompt: "The 1947 partition of British India created which two states?",
      options: ["India + Bangladesh", "India + Pakistan", "India + Burma", "India + Sri Lanka"],
      correctIndex: 1,
      rationale: "1947 partition: Hindu-majority India + Muslim-majority Pakistan (East Pakistan = future Bangladesh).",
    },
    {
      prompt: "Decolonization-era boundary changes often led to…",
      options: [
        "Violent population displacement and ongoing conflict over the new borders",
        "Universal peace and stability",
        "Economic prosperity for all",
        "Restoration of pre-colonial borders",
      ],
      correctIndex: 0,
      rationale: "Drawing new borders often relocated rather than ended conflict (India/Pakistan, Palestine, etc.).",
    },
    {
      prompt: "After WWI, Palestine was placed under…",
      options: [
        "British Mandate (League of Nations)",
        "Direct Ottoman rule",
        "Independent Jewish-Arab co-government",
        "French protection",
      ],
      correctIndex: 0,
      rationale: "League of Nations gave Britain the Mandate of Palestine after Ottoman defeat.",
    },
    {
      prompt: "The Indian-Pakistani partition involved…",
      options: [
        "Mass migration of Hindus + Muslims across new borders, with major violence",
        "Quick peaceful resettlement",
        "No population movement",
        "Forced conversion of all Hindus",
      ],
      correctIndex: 0,
      rationale: "An estimated 10–15 million people moved during partition, with hundreds of thousands killed.",
    },
    {
      prompt: "Why did the British and French often draw arbitrary post-WWI borders in Africa + the Middle East?",
      options: [
        "They prioritized imperial convenience over ethnic / religious / geographic realities",
        "They consulted local populations carefully",
        "They followed pre-colonial borders exactly",
        "They invented new ethnic groups",
      ],
      correctIndex: 0,
      rationale: "Mandate-era borders ignored local realities — seeded long-term conflicts.",
    },
    {
      prompt: "An AP World theme illustrated by Palestine + India partition is…",
      options: [
        "Border-drawing by departing imperial powers can seed long-term conflicts",
        "Decolonization always produces stability",
        "Religious differences never affect borders",
        "Independence eliminates all tension",
      ],
      correctIndex: 0,
      rationale: "Bad borders → durable conflict, a recurring AP theme.",
    },
  ],

  "u8-bi6": [
    {
      prompt: "Egypt's Nasser nationalized which strategic asset?",
      options: ["The Aswan Dam", "The Suez Canal", "The Nile Delta oil fields", "The Pyramids"],
      correctIndex: 1,
      rationale: "Suez Canal nationalization (1956) — major economic + symbolic move.",
    },
    {
      prompt: "Indira Gandhi's most important economic initiative was…",
      options: [
        "Adoption of the Green Revolution",
        "Privatization of all banks",
        "Opening India to foreign investment in 1980",
        "Nationalizing the Suez Canal",
      ],
      correctIndex: 0,
      rationale: "Green Revolution: high-yield grain strains + state agricultural support to feed India's growing population.",
    },
    {
      prompt: "Newly independent states often took strong economic roles because…",
      options: [
        "They didn't trust private + foreign-dominated economies after colonization",
        "They were forced by the US",
        "Religious leaders required it",
        "They wanted to imitate Western capitalism",
      ],
      correctIndex: 0,
      rationale: "Post-colonial states wanted economic sovereignty → state-led models.",
    },
    {
      prompt: "Egypt's alignment during the Suez Crisis was supported by…",
      options: ["Britain", "USSR", "France", "Israel"],
      correctIndex: 1,
      rationale: "USSR backed Egypt; UK + France + Israel invaded; US forced their withdrawal.",
    },
    {
      prompt: "The Green Revolution's main innovation was…",
      options: [
        "Cross-bred high-yield grain strains + chemical fertilizers + irrigation",
        "Subsistence farming",
        "Hand-tilled fields",
        "Lab-grown meat",
      ],
      correctIndex: 0,
      rationale: "Green Revolution = scientific crop breeding + fertilizer + irrigation.",
    },
    {
      prompt: "Why was Suez Canal nationalization so contentious?",
      options: [
        "The canal was crucial for British/French oil + trade routes from the Indian Ocean",
        "The canal was unprofitable",
        "Egypt didn't actually own it",
        "The canal was ceremonial only",
      ],
      correctIndex: 0,
      rationale: "The canal was a key economic asset — controlling it threatened British + French interests.",
    },
    {
      prompt: "State-led economic development in newly independent states often involved…",
      options: [
        "Nationalization of resources + foreign-owned industries + state planning",
        "Pure free-market economies",
        "Returning to feudalism",
        "Adoption of US economic policy",
      ],
      correctIndex: 0,
      rationale: "Common pattern: nationalize + plan, sometimes successfully, sometimes not.",
    },
    {
      prompt: "The Green Revolution's impact in India included…",
      options: [
        "Increased agricultural productivity but also environmental + class-inequality concerns",
        "Universal prosperity",
        "Total agricultural collapse",
        "End of Indian agriculture",
      ],
      correctIndex: 0,
      rationale: "Green Revolution boosted yields massively but produced environmental + social side effects.",
    },
  ],

  "u8-bi7": [
    {
      prompt: "Gandhi's homespun movement protested…",
      options: [
        "British dominance of cotton industry",
        "Indian textile workers",
        "Religious inequality",
        "Caste hierarchy",
      ],
      correctIndex: 0,
      rationale: "Encouraging home-spinning of cloth boycotted British textile imports.",
    },
    {
      prompt: "The Salt March (1930) was a protest against…",
      options: [
        "British monopoly on Indian salt production / sales",
        "Indian-state taxes on alcohol",
        "Hindu-Muslim conflict",
        "American sugar tariffs",
      ],
      correctIndex: 0,
      rationale: "Gandhi led 240+ miles to the sea to make salt, defying British salt laws.",
    },
    {
      prompt: "Martin Luther King Jr. drew tactical inspiration from…",
      options: ["Gandhi's nonviolent civil disobedience", "Mao's revolutionary war", "Stalin's purges", "FLN guerrilla tactics"],
      correctIndex: 0,
      rationale: "MLK explicitly drew from Gandhi's nonviolent methods.",
    },
    {
      prompt: "The Montgomery Bus Boycott (1955–56) was sparked by…",
      options: [
        "Rosa Parks' arrest for refusing to give up her seat",
        "An economic depression",
        "World War II",
        "Indian independence",
      ],
      correctIndex: 0,
      rationale: "Rosa Parks's arrest triggered the year-long bus boycott; MLK led the organization.",
    },
    {
      prompt: "Apartheid was the system of…",
      options: [
        "Racial segregation in South Africa",
        "Religious segregation in Iran",
        "Caste segregation in Mexico",
        "Linguistic segregation in Belgium",
      ],
      correctIndex: 0,
      rationale: "Apartheid (1948–1994) = legal racial segregation + Black political exclusion in South Africa.",
    },
    {
      prompt: "Nelson Mandela was…",
      options: [
        "Imprisoned for ~27 years before being released and elected president of South Africa in 1994",
        "Permanently exiled and never returned",
        "Always a free politician",
        "A British prime minister",
      ],
      correctIndex: 0,
      rationale: "Mandela: imprisoned 1962–1990, released, ANC president, elected SA president in 1994.",
    },
    {
      prompt: "Apartheid ended through…",
      options: [
        "Mandela's release + negotiated transition + 1994 multiracial elections",
        "Civil war",
        "Foreign invasion",
        "Religious revival",
      ],
      correctIndex: 0,
      rationale: "Negotiated transition + first multiracial election in 1994.",
    },
    {
      prompt: "Civil rights, anti-apartheid, and Indian independence movements all share which feature?",
      options: [
        "Use of mass mobilization and (often) civil disobedience to pressure entrenched power",
        "Reliance on traditional aristocracy",
        "Religious uniformity",
        "Economic isolation",
      ],
      correctIndex: 0,
      rationale: "All used mass mobilization + civil disobedience + sometimes violence to challenge unjust systems.",
    },
  ],

  "u8-bi8": [
    {
      prompt: "Mikhail Gorbachev's two key reforms were…",
      options: [
        "Perestroika (economic restructuring) and glasnost (openness)",
        "Marshallplan and Yalta",
        "Détente and SALT",
        "Bretton Woods and GATT",
      ],
      correctIndex: 0,
      rationale: "Perestroika + glasnost = Gorbachev's late-1980s reforms intended to save the Soviet Union.",
    },
    {
      prompt: "The Soviet invasion of Afghanistan began in…",
      options: ["1965", "1979", "1985", "1991"],
      correctIndex: 1,
      rationale: "Soviet troops entered Afghanistan in December 1979.",
    },
    {
      prompt: "Why did the Soviet-Afghan war drain the USSR?",
      options: [
        "Long, expensive guerrilla war + US/Saudi/Pakistani support for the Mujahideen rebels",
        "Brief and successful intervention",
        "USSR was uninvolved",
        "It generated massive Soviet profits",
      ],
      correctIndex: 0,
      rationale: "The 10-year war was a Soviet quagmire that hemorrhaged money + lives.",
    },
    {
      prompt: "Reagan's strategy against the USSR included…",
      options: [
        "Major military spending — forcing the USSR into an unaffordable budget race",
        "Diplomatic isolation only",
        "Withdrawal from NATO",
        "Buying Soviet bonds",
      ],
      correctIndex: 0,
      rationale: "Reagan-era defense buildup pressured Soviet finances.",
    },
    {
      prompt: "Glasnost allowed for…",
      options: [
        "Greater press freedom + more open political discussion in the USSR",
        "Reintroduction of the gulag",
        "Stricter censorship",
        "Bans on foreign trade",
      ],
      correctIndex: 0,
      rationale: "Glasnost = openness; relaxed censorship + opened public discussion.",
    },
    {
      prompt: "Why did Eastern European communist states fall in 1989?",
      options: [
        "Gorbachev announced the USSR would not use military force to keep them in line",
        "They were invaded by NATO",
        "Religious revolution",
        "Famine",
      ],
      correctIndex: 0,
      rationale: "Without Soviet enforcement, satellite states moved toward independence — 1989's velvet revolutions + Berlin Wall fall.",
    },
    {
      prompt: "The Berlin Wall fell in…",
      options: ["1985", "1989", "1991", "1992"],
      correctIndex: 1,
      rationale: "November 9, 1989 — Berlin Wall fell, accelerating Eastern bloc collapse.",
    },
    {
      prompt: "The USSR formally dissolved in…",
      options: ["1985", "1989", "1991", "1995"],
      correctIndex: 2,
      rationale: "December 1991 — Supreme Soviet dissolved the USSR.",
    },
  ],

  // =========================================================================
  // UNIT 9
  // =========================================================================
  "u9-bi1": [
    {
      prompt: "Shipping containers transformed global trade by…",
      options: [
        "Standardizing cargo so it could move ship→train→truck without repacking, slashing costs",
        "Eliminating the need for ports",
        "Reducing all trade",
        "Forcing all goods to travel by air",
      ],
      correctIndex: 0,
      rationale: "Standardized containers cut shipping costs dramatically, enabling modern global supply chains.",
    },
    {
      prompt: "The Green Revolution introduced…",
      options: [
        "High-yield grain strains, fertilizers, and irrigation, mostly in developing countries",
        "Organic-only farming",
        "End of agricultural science",
        "Subsistence farming everywhere",
      ],
      correctIndex: 0,
      rationale: "Green Revolution boosted crop yields dramatically — esp. in India, Mexico, Philippines.",
    },
    {
      prompt: "20th-century medical advances included…",
      options: [
        "Vaccines (polio, measles), antibiotics, birth control",
        "Cup-and-leech bleeding only",
        "Witch-doctor consults",
        "Pure herbal medicine without science",
      ],
      correctIndex: 0,
      rationale: "Vaccines + antibiotics + birth control reshaped public health globally.",
    },
    {
      prompt: "Birth control's effect on which countries was MOST dramatic?",
      options: [
        "Italy, Japan, Germany — declining birth rates + aging populations",
        "Sub-Saharan Africa — rapidly expanding populations",
        "All countries equally",
        "Mongolia and Bhutan",
      ],
      correctIndex: 0,
      rationale: "Western Europe + Japan saw major fertility declines tied to access to contraception + women's rights.",
    },
    {
      prompt: "Air travel's main effect on globalization was…",
      options: [
        "Faster movement of people + perishable goods + business across continents",
        "Eliminated all railroads",
        "Made shipping more expensive",
        "Required nuclear power",
      ],
      correctIndex: 0,
      rationale: "Air travel compressed time + distance — both for tourism + business.",
    },
    {
      prompt: "Petroleum + nuclear power…",
      options: [
        "Provided new + plentiful energy sources for industry, transportation, and electricity",
        "Made cars obsolete",
        "Were banned globally",
        "Replaced all renewable energy",
      ],
      correctIndex: 0,
      rationale: "Both energy sources expanded available power — petroleum especially central to modern transport.",
    },
    {
      prompt: "Information technology (radio, cellphones, internet) impacted globalization by…",
      options: [
        "Bringing people into contact with ideas + cultures outside their own",
        "Limiting communication",
        "Reducing literacy",
        "Eliminating language differences",
      ],
      correctIndex: 0,
      rationale: "Communications tech accelerated cultural diffusion + global awareness.",
    },
    {
      prompt: "Why are technologies of globalization considered an 'accelerator' rather than just a feature?",
      options: [
        "They sped up the rate of trade, cultural exchange, and migration to historically unprecedented levels",
        "They had no impact",
        "They slowed down trade",
        "They reverted to older patterns",
      ],
      correctIndex: 0,
      rationale: "Globalization tech accelerated trends already in motion — orders of magnitude faster than before.",
    },
  ],

  "u9-bi2": [
    {
      prompt: "Diseases of poverty include…",
      options: [
        "Malaria, tuberculosis, cholera",
        "Heart disease, Alzheimer's, cancer",
        "Influenza only",
        "Smallpox + bubonic plague exclusively",
      ],
      correctIndex: 0,
      rationale: "Diseases of poverty — controllable with public-health investment but still kill in poor countries.",
    },
    {
      prompt: "The 1918 Spanish flu pandemic…",
      options: [
        "Killed 50–100 million people globally — more than WWI itself",
        "Was confined to Spain",
        "Caused no significant deaths",
        "Only affected Asia",
      ],
      correctIndex: 0,
      rationale: "Spanish flu was a global pandemic, killing more than WWI.",
    },
    {
      prompt: "AIDS emerged as a major global pandemic in the…",
      options: ["1900s", "1950s", "1980s", "2010s"],
      correctIndex: 2,
      rationale: "HIV/AIDS spread globally in the 1980s; became one of the defining pandemics of the era.",
    },
    {
      prompt: "Ebola outbreaks were concentrated in…",
      options: ["Eastern Europe", "West Africa", "Australia", "Korea"],
      correctIndex: 1,
      rationale: "Major Ebola outbreaks (especially 2014–16) hit West Africa.",
    },
    {
      prompt: "COVID-19 accelerated which medical advance?",
      options: [
        "mRNA vaccine technology",
        "Penicillin discovery",
        "Smallpox eradication",
        "Anesthesia",
      ],
      correctIndex: 0,
      rationale: "COVID's mRNA vaccines deployed mRNA technology at unprecedented scale.",
    },
    {
      prompt: "Diseases of old age in wealthier countries include…",
      options: [
        "Heart disease + Alzheimer's + cancer",
        "Tuberculosis + malaria + cholera",
        "Smallpox + plague",
        "Polio + measles",
      ],
      correctIndex: 0,
      rationale: "Wealthy nations face age-related chronic diseases as their main burdens.",
    },
    {
      prompt: "Globalization's effect on disease is…",
      options: [
        "Pathogens move faster + further than ever via air travel + trade",
        "It made disease impossible",
        "It eliminated all viruses",
        "It only affected animals",
      ],
      correctIndex: 0,
      rationale: "Connectivity = faster pandemics (COVID is the textbook example).",
    },
    {
      prompt: "The split between disease burdens in rich vs poor countries reveals…",
      options: [
        "Global health inequality — treatable diseases still kill in the Global South",
        "All diseases affect all countries equally",
        "Wealthy countries are more disease-prone",
        "Disease has no relationship to wealth",
      ],
      correctIndex: 0,
      rationale: "Disease patterns map onto inequality — same pathogens, very different mortality.",
    },
  ],

  "u9-bi3": [
    {
      prompt: "The Kyoto Protocol (1997) committed signatories to…",
      options: [
        "Limit greenhouse gas emissions",
        "Build more coal plants",
        "Eliminate the UN",
        "End deforestation in Russia",
      ],
      correctIndex: 0,
      rationale: "Kyoto = first major international climate-change treaty, with binding emission reduction targets.",
    },
    {
      prompt: "The Paris Agreement (2015)…",
      options: [
        "Set climate-change emission goals signed by most countries",
        "Banned all fossil fuels immediately",
        "Replaced the UN",
        "Made all countries adopt nuclear power",
      ],
      correctIndex: 0,
      rationale: "Paris Agreement = global climate commitment with national reduction targets.",
    },
    {
      prompt: "Deforestation in the modern era is driven heavily by…",
      options: [
        "Demand for cattle land (Amazon), palm oil (SE Asia), and timber",
        "Religious pilgrimages",
        "Renewable energy projects only",
        "Glaciation",
      ],
      correctIndex: 0,
      rationale: "Modern deforestation = agriculture + commercial logging + global commodity demand.",
    },
    {
      prompt: "The 1952 Great Smog of London was caused by…",
      options: [
        "Coal-fired heating + factories combined with weather inversion",
        "Volcanic eruption",
        "Nuclear accident",
        "Gas pipeline failure",
      ],
      correctIndex: 0,
      rationale: "Coal + fog + temperature inversion = lethal smog event in 1952 London.",
    },
    {
      prompt: "Desertification refers to…",
      options: [
        "Productive land becoming arid + losing agricultural capacity",
        "New deserts forming from rainfall",
        "Expansion of forests",
        "Conversion of cities to deserts",
      ],
      correctIndex: 0,
      rationale: "Desertification: loss of productive farmland to drying conditions, often human-driven.",
    },
    {
      prompt: "Increasing freshwater consumption in the modern era is driven primarily by…",
      options: [
        "Industrial agriculture + urban growth + climate change",
        "Recreational swimming",
        "Religious rituals",
        "Construction of dams alone",
      ],
      correctIndex: 0,
      rationale: "Big agriculture + cities + warming put unprecedented pressure on freshwater.",
    },
    {
      prompt: "Climate change is fundamentally a 'globalization-shaped' problem because…",
      options: [
        "No single country produced it; no single country can fix it",
        "Only one country emitted greenhouse gases",
        "Only Europe is affected",
        "It has no economic dimension",
      ],
      correctIndex: 0,
      rationale: "Climate change reflects global emissions + requires global coordination — pure globalization-era issue.",
    },
    {
      prompt: "Which problem links global agriculture + freshwater + climate?",
      options: [
        "Industrial farming + rising population + warming temperatures = pressure on water + soil + emissions",
        "All three are unrelated",
        "Religious migration",
        "Urban poetry",
      ],
      correctIndex: 0,
      rationale: "These environmental challenges cluster together as a single integrated crisis.",
    },
  ],

  "u9-bi4": [
    {
      prompt: "Reagan and Thatcher are associated with…",
      options: [
        "Deregulation, tax cuts, and free-market economics",
        "Communist reform",
        "Nationalization of industries",
        "Mercantilist colonization",
      ],
      correctIndex: 0,
      rationale: "Reagan/Thatcher led the 1980s shift toward free-market economics + deregulation.",
    },
    {
      prompt: "Knowledge economies are characterized by…",
      options: [
        "Workers facilitating production rather than producing physical goods directly",
        "Subsistence farming",
        "Industrial mass production only",
        "Tribal exchange",
      ],
      correctIndex: 0,
      rationale: "Wealthy economies shifted from manufacturing to services + intellectual + tech work.",
    },
    {
      prompt: "Multinational corporations…",
      options: [
        "Are incorporated in one country but operate globally",
        "Operate only in one country",
        "Are run by religious orders",
        "Are illegal under international law",
      ],
      correctIndex: 0,
      rationale: "Multinationals = global supply chains + global markets, headquartered in one country.",
    },
    {
      prompt: "NAFTA was a trade agreement among…",
      options: [
        "US + Canada + Mexico",
        "Britain + France + Germany",
        "China + Japan + Korea",
        "Brazil + Argentina + Chile",
      ],
      correctIndex: 0,
      rationale: "North American Free Trade Agreement (1994) — US, Canada, Mexico.",
    },
    {
      prompt: "ASEAN groups countries from…",
      options: ["Latin America", "Southeast Asia", "Sub-Saharan Africa", "Eastern Europe"],
      correctIndex: 1,
      rationale: "Association of Southeast Asian Nations: Indonesia, Vietnam, Thailand, Philippines, etc.",
    },
    {
      prompt: "Manufacturing in the 21st century has shifted heavily to…",
      options: [
        "Lower-wage economies like Vietnam, Mexico, China",
        "Western Europe only",
        "Sub-Saharan Africa exclusively",
        "Antarctica",
      ],
      correctIndex: 0,
      rationale: "Multinationals locate production where wages are low — manufacturing has shifted to developing economies.",
    },
    {
      prompt: "Free-market economic globalization involves…",
      options: [
        "Reduced trade barriers + global supply chains + multinational corporations",
        "Nationalist economic isolation",
        "Mercantilist gold accumulation",
        "End of all trade",
      ],
      correctIndex: 0,
      rationale: "Modern globalization = trade liberalization + integrated supply chains + global firms.",
    },
    {
      prompt: "An effect of free trade has been…",
      options: [
        "Cheaper consumer goods + faster technology diffusion + manufacturing job loss in wealthy economies",
        "Universal economic growth without costs",
        "End of poverty",
        "Restoration of feudalism",
      ],
      correctIndex: 0,
      rationale: "Trade liberalization brings benefits + costs (job displacement, inequality).",
    },
  ],

  "u9-bi5": [
    {
      prompt: "Apartheid in South Africa ended through…",
      options: [
        "Mass mobilization, international sanctions, Mandela's leadership, and 1994 multiracial elections",
        "A foreign invasion",
        "Religious revival",
        "Civil war that destroyed all institutions",
      ],
      correctIndex: 0,
      rationale: "Internal pressure + global sanctions + leadership ended apartheid.",
    },
    {
      prompt: "The US Civil Rights Movement targeted…",
      options: [
        "Jim Crow segregation laws",
        "Soviet espionage",
        "British rule in America",
        "Wage controls",
      ],
      correctIndex: 0,
      rationale: "Civil Rights Movement: against legal racial segregation + voting suppression in the US South.",
    },
    {
      prompt: "India's caste reservation system is intended to…",
      options: [
        "Reserve a portion of jobs + university seats for historically marginalized castes",
        "Maintain caste hierarchy",
        "Eliminate Hinduism",
        "Convert lower castes to Christianity",
      ],
      correctIndex: 0,
      rationale: "Reservation = affirmative-action quotas for Scheduled Castes / Tribes / Other Backward Classes.",
    },
    {
      prompt: "The 1975 UN World Conference on Women issued a…",
      options: [
        "Declaration of women's rights, including political participation + the right to vote",
        "Treaty banning women's suffrage",
        "Demand to abolish democracy",
        "Trade agreement",
      ],
      correctIndex: 0,
      rationale: "1975 UN Conference (Mexico City) was a landmark in global women's rights advocacy.",
    },
    {
      prompt: "Modern human-rights reform movements often combine…",
      options: [
        "Domestic mobilization + international pressure + transnational solidarity",
        "Pure isolation",
        "Conquest by foreign armies",
        "Religious orthodoxy alone",
      ],
      correctIndex: 0,
      rationale: "Reform = local + international + diaspora pressure working together.",
    },
    {
      prompt: "Why is the anti-apartheid movement considered transnational?",
      options: [
        "Global sanctions + boycotts + diaspora networks supplemented domestic resistance",
        "It happened only in South Africa",
        "It was led by foreign governments only",
        "It had no international dimension",
      ],
      correctIndex: 0,
      rationale: "Apartheid's defeat involved global pressure (sports boycotts, divestment, etc.) alongside domestic struggle.",
    },
    {
      prompt: "20th-century reform movements share which feature?",
      options: [
        "Use of mass mobilization, civil disobedience, or organized nonviolence to challenge entrenched inequalities",
        "Reliance on hereditary monarchy",
        "Religious orthodoxy",
        "Military conquest",
      ],
      correctIndex: 0,
      rationale: "Mass + organized + often nonviolent challenges to power are the common 20th-c reform pattern.",
    },
    {
      prompt: "An effect of globalized human-rights advocacy is…",
      options: [
        "International institutions + treaties recognizing universal rights",
        "End of all national governments",
        "Universal religious uniformity",
        "Restoration of slavery",
      ],
      correctIndex: 0,
      rationale: "Globalization-era rights advocacy → UN human rights frameworks, international NGOs, etc.",
    },
  ],

  "u9-bi6": [
    {
      prompt: "Reggae's most globally famous figure is…",
      options: ["Bob Marley", "BTS", "Beyoncé", "ABBA"],
      correctIndex: 0,
      rationale: "Bob Marley made Jamaican reggae a globally recognized musical genre.",
    },
    {
      prompt: "K-pop's global breakout is associated with which group?",
      options: ["BTS", "ABBA", "The Beatles", "Coldplay"],
      correctIndex: 0,
      rationale: "BTS spearheaded K-pop's global crossover in the 2010s.",
    },
    {
      prompt: "Hollywood and Bollywood reflect…",
      options: [
        "Globalized film industries that export cultural values",
        "Local theater traditions only",
        "Religious cinema only",
        "Anti-globalization movements",
      ],
      correctIndex: 0,
      rationale: "Both have global reach + influence cultural values across borders.",
    },
    {
      prompt: "Online commerce platforms like Amazon and Alibaba enable…",
      options: [
        "Cross-border consumer goods purchasing",
        "Local-only sales",
        "Communist central planning",
        "Religious pilgrimage",
      ],
      correctIndex: 0,
      rationale: "Amazon + Alibaba globalized retail + supply chains.",
    },
    {
      prompt: "Global brands like Coca-Cola and McDonald's symbolize…",
      options: [
        "Spread of consumer culture across borders",
        "End of capitalism",
        "Religious revival",
        "Indigenous food preservation",
      ],
      correctIndex: 0,
      rationale: "Global brands = cultural globalization in physical, edible form.",
    },
    {
      prompt: "Why are American films particularly influential globally?",
      options: [
        "Hollywood combines large production budgets + global distribution + appealing entertainment forms",
        "American films are required viewing globally",
        "The US bans non-American films",
        "Hollywood is funded by foreign governments",
      ],
      correctIndex: 0,
      rationale: "Hollywood's industrial scale + distribution networks + entertainment formula make it dominant globally.",
    },
    {
      prompt: "Cultural globalization moves primarily through which channels?",
      options: [
        "Entertainment, brands, and digital communication — not formal government policy",
        "International treaties only",
        "Religious councils",
        "Military pacts",
      ],
      correctIndex: 0,
      rationale: "Cultural globalization rides entertainment + commerce, not state policy.",
    },
    {
      prompt: "Why have some governments tried to restrict cultural globalization?",
      options: [
        "Concerns about loss of national / local cultural identity (e.g., France's quotas, China's restrictions)",
        "Religious doctrine alone",
        "Economic isolation",
        "Restoration of feudalism",
      ],
      correctIndex: 0,
      rationale: "Some states see cultural globalization (esp. American) as a threat to national identity.",
    },
  ],

  "u9-bi7": [
    {
      prompt: "The 1999 Battle for Seattle protested…",
      options: [
        "The World Trade Organization",
        "The United Nations",
        "Microsoft",
        "Christianity",
      ],
      correctIndex: 0,
      rationale: "Anti-WTO protests in Seattle (1999) brought together labor + environmental + Global South activists.",
    },
    {
      prompt: "Anti-globalization protests targeted institutions like…",
      options: [
        "WTO + IMF + World Bank, claiming they favored wealthy nations + corporations",
        "The Boy Scouts",
        "FIFA",
        "The Rotary Club",
      ],
      correctIndex: 0,
      rationale: "Anti-globalization = critique of WTO/IMF/World Bank policies + corporate power.",
    },
    {
      prompt: "Critics of globalization argue that benefits flow disproportionately to the…",
      options: [
        "Global North (developed nations + corporations)",
        "Global South",
        "Indigenous communities",
        "Soviet bloc",
      ],
      correctIndex: 0,
      rationale: "Globalization's benefits have largely concentrated in wealthier nations.",
    },
    {
      prompt: "The IMF was criticized for…",
      options: [
        "Imposing harsh structural-adjustment conditions on borrowing countries that hurt poor populations",
        "Donating money freely",
        "Refusing to lend at all",
        "Ending all global trade",
      ],
      correctIndex: 0,
      rationale: "IMF structural adjustment was a major target of Global South + activist criticism.",
    },
    {
      prompt: "Why did anti-globalization movements grow in the late 1990s + early 2000s?",
      options: [
        "Visible inequality + environmental costs + labor exploitation made globalization politically charged",
        "Globalization had ended",
        "All countries became wealthy equally",
        "There were no critics",
      ],
      correctIndex: 0,
      rationale: "By the late '90s, the unevenness of globalization was politically unavoidable.",
    },
    {
      prompt: "Critics often argue that free-trade agreements…",
      options: [
        "Pressure poorer countries to follow rich-country rules + can hurt local industries / labor protections",
        "Are universally beneficial",
        "Eliminate all trade",
        "Are forms of feudalism",
      ],
      correctIndex: 0,
      rationale: "Free trade has costs that fall disproportionately on weaker economies + labor.",
    },
    {
      prompt: "Anti-globalization protests typically involved which constituencies?",
      options: [
        "Labor unions + environmental groups + human rights activists + Global South representatives",
        "Only governments",
        "Only religious orders",
        "Only corporations",
      ],
      correctIndex: 0,
      rationale: "Anti-globalization was a broad coalition of various civil-society groups.",
    },
    {
      prompt: "An AP World theme illustrated by anti-globalization movements is…",
      options: [
        "Economic systems produce both winners + losers, and losers organize politically",
        "All economic systems are universally accepted",
        "Resistance never happens",
        "Globalization has only positive effects",
      ],
      correctIndex: 0,
      rationale: "Resistance is a recurring AP theme — economic transformations always have political dissent.",
    },
  ],

  "u9-bi8": [
    {
      prompt: "The United Nations was founded in…",
      options: ["1919", "1945", "1973", "1991"],
      correctIndex: 1,
      rationale: "UN founded 1945 after WWII to maintain international peace + cooperation.",
    },
    {
      prompt: "The Universal Declaration of Human Rights was adopted in…",
      options: ["1789", "1919", "1948", "1972"],
      correctIndex: 2,
      rationale: "UDHR adopted by the UN General Assembly in 1948.",
    },
    {
      prompt: "The UN's Security Council includes which permanent members?",
      options: [
        "US, UK, France, Russia, China",
        "US, France, Brazil, India, Japan",
        "All UN members",
        "Only European nations",
      ],
      correctIndex: 0,
      rationale: "P5 = US, UK, France, Russia, China — each with veto power.",
    },
    {
      prompt: "The International Court of Justice is located in…",
      options: ["Geneva", "The Hague (Netherlands)", "New York", "Brussels"],
      correctIndex: 1,
      rationale: "The ICJ sits in The Hague — UN's principal judicial organ.",
    },
    {
      prompt: "The UN was founded primarily to…",
      options: [
        "Maintain international peace + foster cooperation among nations",
        "Promote one religion globally",
        "Replace national governments",
        "Conduct global trade",
      ],
      correctIndex: 0,
      rationale: "UN's founding mission: prevent another world war + promote human rights + cooperation.",
    },
    {
      prompt: "The UDHR establishes that all humans have rights to…",
      options: [
        "Life, liberty, gender equality, freedom from slavery, refugee protection, etc.",
        "Property only",
        "Religious uniformity",
        "Mercantilist trade",
      ],
      correctIndex: 0,
      rationale: "UDHR: a comprehensive list of universal human rights — life, liberty, equality, freedom from torture/slavery.",
    },
    {
      prompt: "Why is the UN considered a globalization-era institution?",
      options: [
        "Its mission, structure, and reach assume that some problems require global cooperation across borders",
        "It only operates in one country",
        "It is a religious organization",
        "It replaces all national sovereignty",
      ],
      correctIndex: 0,
      rationale: "UN = globalization in institutional form — built around the idea that some problems are too big for one state.",
    },
    {
      prompt: "An AP-relevant theme of UN existence is…",
      options: [
        "Globalization has driven the creation of international institutions to address border-crossing problems",
        "All international institutions are useless",
        "Globalization has reduced international cooperation",
        "Borders prevent any cooperation",
      ],
      correctIndex: 0,
      rationale: "Globalization-era problems → globalization-era institutions like the UN, IMF, WTO, ICJ.",
    },
  ],
};
