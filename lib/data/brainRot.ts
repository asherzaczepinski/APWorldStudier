// Brain Rot — sticky, dumb-on-purpose mnemonics for every Big Idea. Each one
// is a single catchphrase with a chunky emoji string + a one-liner explaining
// the actual mnemonic. Animations are picked from a small set of CSS classes
// in globals.css.

export type BrainRotAnim = "bounce" | "spin" | "wobble" | "pulse" | "shake" | "float";

export type BrainRot = {
  ideaId: string;
  /** The catchphrase. Big text, the thing you'll say in your head. */
  phrase: string;
  /** Big emoji combo. Should be 4–8 chars max. */
  emojis: string;
  /** Animation pattern for the emoji block. */
  anim: BrainRotAnim;
  /** What the mnemonic actually maps to. */
  hook: string;
};

// Reminder for future-me: this is stylistic, intentionally goofy. The phrases
// are sticky on purpose — they pair with the actual content in `hook` so the
// student remembers the mnemonic, not just the slang. Where the topic is
// genocide / mass killing, slang is dialed WAY back.

export const brainRot: BrainRot[] = [
  // ─── Unit 1 ──────────────────────────────────────────────────────────────
  {
    ideaId: "u1-bi1",
    phrase: "Song China caught the gyatt with Confucianism, low-key ate 🍚",
    emojis: "📜🍚🛶💴",
    anim: "bounce",
    hook: "Civil service exam (📜) + Champa rice (🍚) + Grand Canal (🛶) + paper money (💴). Song economy = sigma.",
  },
  {
    ideaId: "u1-bi2",
    phrase: "Abbasids got fanum-taxed by Turkic sigmas",
    emojis: "🌙⚔️📚🐪",
    anim: "shake",
    hook: "Mamluk + Delhi Sultans replaced the Abbasids. Arabic translations of Greek + algebra + paper-making relayed to Europe.",
  },
  {
    ideaId: "u1-bi3",
    phrase: "Delhi taxing Hindus the ocky way",
    emojis: "🛕☪️🪷⛵",
    anim: "float",
    hook: "Delhi (Muslim) made Hindus pay jizya. Srivijaya (Hindu) and Majapahit (Buddhist) taxed ships in Malacca.",
  },
  {
    ideaId: "u1-bi4",
    phrase: "Aztecs ran it back from the Maya — ritual sacrifice arc",
    emojis: "🏯⛰️🏔️🩸",
    anim: "pulse",
    hook: "Tenochtitlán + Cuzco + Cahokia. Aztecs inherited Maya tribute + monumental architecture + human sacrifice.",
  },
  {
    ideaId: "u1-bi5",
    phrase: "Great Zimbabwe = sigma alpha gold rizz",
    emojis: "🪨⛵🗣️✝️",
    anim: "wobble",
    hook: "Great Zimbabwe (gold + cattle) + Swahili = Bantu × Arabic. Christian Ethiopia stood out hard.",
  },
  {
    ideaId: "u1-bi6",
    phrase: "Manor lords gave peasants the lightskin stare",
    emojis: "👑🏰⚔️🌾",
    anim: "bounce",
    hook: "King → Lord → Knight → Peasant pyramid. Manorial system + three-field rotation = decentralized Europe.",
  },

  // ─── Unit 2 ──────────────────────────────────────────────────────────────
  {
    ideaId: "u2-bi1",
    phrase: "Silk Road rizzed up the global gyatt",
    emojis: "🐫⛵🐪🏨",
    anim: "float",
    hook: "Three networks: Silk Roads, Indian Ocean, Trans-Saharan. Caravanserai + lateen sails + Arabian camels + Chinese paper money.",
  },
  {
    ideaId: "u2-bi2",
    phrase: "Buddhism hitting the GRIDDY along the Silk Road",
    emojis: "☸️☪️📚🌐",
    anim: "spin",
    hook: "Trade goods always carry trade vibes. Buddhism + Islam diffused with the merchants. NPC behavior.",
  },
  {
    ideaId: "u2-bi3",
    phrase: "Black Death ratio'd half of Europe — 6 7",
    emojis: "🍌☠️🦠🐀",
    anim: "shake",
    hook: "Bananas: SE Asia → Africa. Black Death: Crimea → Constantinople → London. Trade routes = pandemic delivery.",
  },
  {
    ideaId: "u2-bi4",
    phrase: "Mongols hit the GRIDDY across Eurasia, made Silk Road bing chilling",
    emojis: "🐎🛡️🏹📡",
    anim: "wobble",
    hook: "Pax Mongolica = Silk Road safer than ever. Yam relay + Persian/Chinese knowledge swap. Marco Polo took a vacation.",
  },

  // ─── Unit 3 ──────────────────────────────────────────────────────────────
  {
    ideaId: "u3-bi1",
    phrase: "Gunpowder = the metal pipe falling on Constantinople",
    emojis: "🕌💥🐘🐉",
    anim: "shake",
    hook: "Ottomans (Janissaries), Safavids (Shah Ismail, Shia), Mughals (Babur, Akbar), Qing Manchus (Mandate of Heaven).",
  },
  {
    ideaId: "u3-bi2",
    phrase: "Louis XIV bedrotting at Versailles like a sigma",
    emojis: "📜👑☀️💰",
    anim: "bounce",
    hook: "Devshirme, Versailles, Cuzco Sun Temple, Mughal Zamindars, Ottoman tax farming, Kangxi posing with Confucian books.",
  },
  {
    ideaId: "u3-bi3",
    phrase: "Luther 95 thesis: 'Catholics are mid'",
    emojis: "📜🖨️☪️🕉️",
    anim: "shake",
    hook: "Reformation + printing press + Sunni/Shia tensions intensify. Sikhism = Hindu × Islam syncretism (delulu mash-up).",
  },

  // ─── Unit 4 ──────────────────────────────────────────────────────────────
  {
    ideaId: "u4-bi1",
    phrase: "Europeans copying tech homework — no rizz of their own",
    emojis: "🧭🧲⛵🚢",
    anim: "float",
    hook: "Astrolabe (Islamic), compass (China), lateen (Arab dhow). Caravel + fluyt = Europe's glow-up.",
  },
  {
    ideaId: "u4-bi2",
    phrase: "Columbus speedran the Atlantic for spice gyatt",
    emojis: "🚢🌶️✝️💰",
    anim: "bounce",
    hook: "Portuguese trading posts → Spanish conquest → English/French/Dutch chasing the route. Mercantilism: empire = bag.",
  },
  {
    ideaId: "u4-bi3",
    phrase: "Potatoes for smallpox = worst trade ever",
    emojis: "🥔🌽💀🐎",
    anim: "spin",
    hook: "Columbian Exchange. Old World gets buffed by potato + maize. New World 1-shot by smallpox + measles. Horses ate the Plains.",
  },
  {
    ideaId: "u4-bi4",
    phrase: "Encomienda → hacienda = goofy ahh exploitation pipeline",
    emojis: "⛏️🪓🏚️🪙",
    anim: "shake",
    hook: "Encomienda → Hacienda → Mit'a. Mercantilism. As Indigenous die from disease, demand for enslaved African labor spikes.",
  },
  {
    ideaId: "u4-bi5",
    phrase: "VOC IPO had the most rizz before IPOs were a thing",
    emojis: "💼🔺🌍🤝",
    anim: "float",
    hook: "Joint-stock companies (VOC, EIC, BEIC) + Triangle trade. Atlantic remixes everything.",
  },
  {
    ideaId: "u4-bi6",
    phrase: "Don't make me hit you with the rebellion (sigma)",
    emojis: "🛡️🪶✊🏿🔥",
    anim: "wobble",
    hook: "Maratha rebellion ended Mughals. Pueblo Revolt burned Spanish churches. Stono Rebellion in S. Carolina.",
  },
  {
    ideaId: "u4-bi7",
    phrase: "Casta system = lightskin-stare hierarchy",
    emojis: "🪜📜🚫⚖️",
    anim: "pulse",
    hook: "Qing kept Confucian bureaucracy. Spanish casta system: peninsulares > criollos > mestizos > Africans/Indigenous.",
  },

  // ─── Unit 5 ──────────────────────────────────────────────────────────────
  {
    ideaId: "u5-bi1",
    phrase: "Locke + Rousseau = main character era",
    emojis: "📖💡♀️🛠️",
    anim: "float",
    hook: "Natural rights + social contract + empirical thinking. Suffrage, abolition, end of serfdom in Russia.",
  },
  {
    ideaId: "u5-bi2",
    phrase: "America went first, France copied homework, Haiti pulled up — all delulu, all valid",
    emojis: "🇺🇸🇫🇷✊🏿📜",
    anim: "bounce",
    hook: "American (1776) → French (1789, inspired by US) → Haitian → Latin American revolutions. Bolívar's Letter from Jamaica.",
  },
  {
    ideaId: "u5-bi3",
    phrase: "Britain caught a gyatt of coal",
    emojis: "🏭⛏️🚧🧵",
    anim: "shake",
    hook: "Coal + iron + waterways + enclosure → factory system → textiles boom. Industrial Rev starts in Britain.",
  },
  {
    ideaId: "u5-bi4",
    phrase: "Japan said 'we go gym' and hit the Meiji Restoration",
    emojis: "🚂🎌🧵🌐",
    anim: "spin",
    hook: "US immigration, Trans-Siberian railroad, Meiji Japan. India textiles got tariffed into oblivion.",
  },
  {
    ideaId: "u5-bi5",
    phrase: "Steel + oil + telegraph = unhinged 1880s ohio",
    emojis: "🏗️🛢️🚂📡",
    anim: "bounce",
    hook: "Second Industrial Revolution. Internal combustion. Railroads everywhere. Telegraph for sigma comms.",
  },
  {
    ideaId: "u5-bi6",
    phrase: "Adam Smith: 'let the market cook'",
    emojis: "📘🤝🏢💼",
    anim: "float",
    hook: "Mercantilism out, capitalism in. Wealth of Nations. Transnationals like Unilever rise.",
  },
  {
    ideaId: "u5-bi7",
    phrase: "Marx redpilled the proletariat",
    emojis: "✊📕🏛️📉",
    anim: "shake",
    hook: "Labor unions win minimum wage + 5-day week. Marx writes Communist Manifesto. Tanzimat = late-game Ottoman industrialization.",
  },

  // ─── Unit 6 ──────────────────────────────────────────────────────────────
  {
    ideaId: "u6-bi1",
    phrase: "White man's burden = racist ohio energy",
    emojis: "📜🦠🎌🌍",
    anim: "shake",
    hook: "Civilizing mission, social Darwinism, nationalism, Christianity. Britain in India, France in Africa, Japan in Korea.",
  },
  {
    ideaId: "u6-bi2",
    phrase: "Berlin conference: Africa got fanum-taxed over wine",
    emojis: "🗺️🪵🪖🇵🇭",
    anim: "wobble",
    hook: "Belgian Congo, Sepoy → British Raj, US grabs Philippines, Russia/Japan rising. Bismarck slices Africa with no Africans.",
  },
  {
    ideaId: "u6-bi3",
    phrase: "Ghost dance hit different",
    emojis: "🛡️👻🐂🇬🇷",
    anim: "wobble",
    hook: "Tupac Amaru, Sepoy mutiny, Balkan independence, Ghost Dance, Xhosa Cattle Killing.",
  },
  {
    ideaId: "u6-bi4",
    phrase: "Cash crops go BRRR, no edging the workers",
    emojis: "☕🌳🍬🐦",
    anim: "spin",
    hook: "Coffee, rubber, sugar, guano, pampas beef. Subsistence → export economies. Colonies feed urban Europe.",
  },
  {
    ideaId: "u6-bi5",
    phrase: "Britain to China: 'forced free trade fr'",
    emojis: "💊🗺️🧵🇺🇸",
    anim: "shake",
    hook: "Opium Wars + spheres of influence. Indian + Egyptian cotton dominated by Britain. US owns Cuba/Mexico infra.",
  },
  {
    ideaId: "u6-bi6",
    phrase: "Indentured labor moving like skibidi toilet",
    emojis: "🚂📜🇦🇺🚫",
    anim: "float",
    hook: "Chinese laborers → Americas. Indian indentured → Mauritius/Caribbean. Aussie penal colonies. Chinese Exclusion Act.",
  },

  // ─── Unit 7 ──────────────────────────────────────────────────────────────
  {
    ideaId: "u7-bi1",
    phrase: "Old empires speedran their own deletion",
    emojis: "☭🇨🇳🇲🇽👊",
    anim: "shake",
    hook: "Bolsheviks (1917), Sun Yat-sen (1911), Madero (Mexican Revolution). Three regime changes in two decades.",
  },
  {
    ideaId: "u7-bi2",
    phrase: "M.A.I.N character syndrome started WWI (sus)",
    emojis: "🪖🤝🚫🔫",
    anim: "shake",
    hook: "Militarism + Alliances + Imperialism + Nationalism + Archduke Franz Ferdinand assassinated.",
  },
  {
    ideaId: "u7-bi3",
    phrase: "Trench warfare: aura -10000",
    emojis: "🪖☠️🚙📜",
    anim: "wobble",
    hook: "Total war + propaganda + machine guns + gas + tanks → Treaty of Versailles. Industrial output = endless stalemate.",
  },
  {
    ideaId: "u7-bi4",
    phrase: "FDR said 'we go gym' to the economy",
    emojis: "🇺🇸💸📈🏛️",
    anim: "bounce",
    hook: "Depression hits → New Deal, Weimar hyperinflation, Stalin's 5-Year Plans. After 1929 governments get hands-on.",
  },
  {
    ideaId: "u7-bi5",
    phrase: "Versailles cooked Germany too hard, Hitler responded",
    emojis: "⚖️🤝🚫🪖",
    anim: "shake",
    hook: "War-guilt clause + reparations + hyperinflation + appeasement → invasion of Poland.",
  },
  {
    ideaId: "u7-bi6",
    phrase: "Total war 2: this time with atom bomb (mid response, devastating)",
    emojis: "🏭🚫🔥☢️",
    anim: "shake",
    hook: "US factories print munitions. Women into factories. Forced labor in Germany. Firebombing + atom bomb.",
  },
  {
    ideaId: "u7-bi7",
    phrase: "The most evil chapter — no humor here.",
    emojis: "🕯️🌾💀⚠️",
    anim: "pulse",
    hook: "Holocaust + Holodomor. State-engineered mass killing. Don't joke; remember.",
  },

  // ─── Unit 8 ──────────────────────────────────────────────────────────────
  {
    ideaId: "u8-bi1",
    phrase: "USA vs USSR: subtweet beef edition (no direct smoke)",
    emojis: "🧱🕊️🛡️🌍",
    anim: "wobble",
    hook: "Berlin Wall + Iron Curtain + Non-Aligned Movement. Four decades of mutual mistrust.",
  },
  {
    ideaId: "u8-bi2",
    phrase: "MAD: don't shoot, send the proxies fr",
    emojis: "🇰🇷🇻🇳🇳🇮🇦🇴",
    anim: "shake",
    hook: "Korean War, Vietnam War, Sandinistas/Contras, Angolan Civil War. NATO vs Warsaw Pact.",
  },
  {
    ideaId: "u8-bi3",
    phrase: "Mao ate the Nationalists, then Great-Leap-Forward'd his own people",
    emojis: "☭📉🚢🇪🇬",
    anim: "shake",
    hook: "Mao defeats Nationalists → peaceful collectivization → Great Leap Forward = millions starved. Suez Crisis 1956.",
  },
  {
    ideaId: "u8-bi4",
    phrase: "Gandhi peaceful sigma vs FLN alpha violence — both worked",
    emojis: "🇮🇳✂️🇩🇿✊",
    anim: "float",
    hook: "India: nonviolence + violent partition. Algeria: FLN guerrilla war.",
  },
  {
    ideaId: "u8-bi5",
    phrase: "Partition redrew borders, didn't fix the beef",
    emojis: "✂️🏳️🪶📍",
    anim: "wobble",
    hook: "India/Pakistan partition + British Mandate Palestine. New borders moved the conflict, didn't end it.",
  },
  {
    ideaId: "u8-bi6",
    phrase: "Nasser hit the griddy on the Suez Canal",
    emojis: "🇪🇬🌾🚢🛠️",
    anim: "bounce",
    hook: "Nasser nationalizes Suez. Indira Gandhi runs the Green Revolution. State-led economies in newly independent states.",
  },
  {
    ideaId: "u8-bi7",
    phrase: "Salt March: Gandhi looksmaxxed nonviolence",
    emojis: "🧂🧵✊🏿🇿🇦",
    anim: "spin",
    hook: "Gandhi (homespun + Salt March) → MLK (Montgomery Bus Boycott) → Mandela (anti-apartheid).",
  },
  {
    ideaId: "u8-bi8",
    phrase: "Reagan: 'we go gym' — USSR ran out of cash, Afghanistan ran out of patience",
    emojis: "🪖🇺🇸📜🧱",
    anim: "shake",
    hook: "Afghan invasion drained USSR. Reagan's defense spending = budget race. Gorbachev's perestroika + glasnost = unraveling.",
  },

  // ─── Unit 9 ──────────────────────────────────────────────────────────────
  {
    ideaId: "u9-bi1",
    phrase: "Containers hitting the GRIDDY across the Pacific",
    emojis: "📦🌐🌾💉",
    anim: "float",
    hook: "Containers + Internet + Green Revolution + vaccines = world goes brrr.",
  },
  {
    ideaId: "u9-bi2",
    phrase: "TB still rizzing up the Global South while rich kids get Alzheimer's",
    emojis: "🦠🦠💉💉",
    anim: "pulse",
    hook: "Old diseases (TB, malaria, cholera) still kill in poor countries. New pandemics: Ebola, AIDS, COVID.",
  },
  {
    ideaId: "u9-bi3",
    phrase: "Earth's bing-chilling-ass climate (it's overheating)",
    emojis: "🌳🌫️📜♨️",
    anim: "wobble",
    hook: "Deforestation, smog, freshwater stress, climate change. Kyoto + Paris.",
  },
  {
    ideaId: "u9-bi4",
    phrase: "Knowledge work in Berlin, factory in Vietnam, sip espresso",
    emojis: "💼🍫🤝🏭",
    anim: "float",
    hook: "Reagan/Thatcher capitalism + multinationals (Nestlé) + free-trade blocs (NAFTA, ASEAN).",
  },
  {
    ideaId: "u9-bi5",
    phrase: "Mandela had the most rizz of the 20th century",
    emojis: "🇿🇦✊🏿🛕♀️",
    anim: "bounce",
    hook: "End of apartheid, US civil rights, Indian caste reservation, 1975 UN World Conference on Women.",
  },
  {
    ideaId: "u9-bi6",
    phrase: "BTS + Big Mac = global brain rot",
    emojis: "🎵🎤🎬🍔",
    anim: "bounce",
    hook: "Jamaican reggae, K-pop (BTS), Hollywood/Bollywood, McDonald's everywhere.",
  },
  {
    ideaId: "u9-bi7",
    phrase: "Battle for Seattle: 'WTO got ratio'd'",
    emojis: "🪧🌍🚫🏛️",
    anim: "shake",
    hook: "Anti-WTO + anti-IMF protests. Globalization mostly a Global North win.",
  },
  {
    ideaId: "u9-bi8",
    phrase: "UN = world Discord server (everyone in one chat)",
    emojis: "🇺🇳📜⚖️🌍",
    anim: "float",
    hook: "United Nations + Universal Declaration of Human Rights + International Court of Justice.",
  },
];

export function brainRotById(ideaId: string): BrainRot | null {
  return brainRot.find((b) => b.ideaId === ideaId) ?? null;
}
