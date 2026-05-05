// Quick definitions for the "mentions" chips. When a chip is clicked,
// HeimlerTopicView looks up the term here and shows a small popover.
// Terms not in this list still appear as chips, just non-clickable.
//
// Keys are case-insensitive after trimming and stripping trailing parentheses /
// punctuation — see findGlossary().

export const glossary: Record<string, string> = {
  // ── Unit 1 ────────────────────────────────────────────────────────────
  "Song Dynasty":
    "Chinese dynasty (960–1279) that dominates AP World's opening period. Restored the civil service exam, ran a meritocratic bureaucracy, imported Champa rice, and produced paper money, gunpowder, and the magnetic compass.",
  "Confucianism revival":
    "The Song state revived Confucian teaching as the foundation of government and society — hierarchy, filial piety, and the scholar-official as the ideal man.",
  "civil service exam":
    "Standardized test on Confucian classics. Open (in theory) to most men; in practice favored the wealthy. Created a shared scholar-official elite.",
  "filial piety":
    "Confucian virtue: obedience and respect for parents and ancestors. The model for all hierarchical relationships, including subjects to ruler.",
  "foot binding":
    "Practice of breaking and binding young girls' feet to keep them small. Began in elite Song households and signaled status by making women dependent.",
  "Champa rice":
    "Fast-ripening, drought-resistant strain imported from the Champa kingdom (Vietnam). Two harvests a year fueled a Song population boom.",
  "Grand Canal":
    "1,100-mile waterway linking the Yellow River and Yangzi. Originally Sui-era; rebuilt and extended under the Yuan. Moved grain, troops, and merchants.",
  "paper money":
    "Issued by Song banks (Sichuan first, then state-backed). 'Flying cash' — paper notes redeemable for coin elsewhere. World's first true paper currency.",
  "woodblock printing":
    "Carve a page in reverse on a wooden block, ink it, press paper. Made books cheap. Spread Buddhist sutras and Confucian classics.",
  gunpowder:
    "Chinese alchemists' accidental discovery, weaponized by the Song (fire arrows, bombs, early cannons). Travels west via the Mongols and changes warfare.",
  "magnetic compass":
    "Song navigators floated magnetized needles in water. Made open-water sailing reliable. Diffuses to Arab and European sailors via the Indian Ocean.",
  "tributary system":
    "China's diplomatic protocol: surrounding states sent envoys + gifts and acknowledged Chinese cultural superiority; in exchange they got trade access and titles.",
  "Korea (Goryeo)":
    "Korean kingdom (918–1392) closely modeled on China — Confucianism, Chinese-style bureaucracy, Buddhism. Invented metal movable type before Gutenberg.",
  "Heian Japan":
    "Court culture (794–1185) that selectively copied China while developing its own writing system, courtly literature (Tale of Genji), and feudal warrior class.",
  "samurai / shogun / daimyo":
    "Japan's military class. The shogun is the de-facto military ruler; daimyo are regional lords; samurai are their warrior retainers bound by the bushido code.",
  bushido:
    "Samurai code of honor — loyalty, discipline, frugality, and willingness to die for one's lord. Codified in the Tokugawa era but rooted in medieval Japan.",
  "Vietnam (Dai Viet)":
    "Vietnamese state that adopted Chinese-style administration but fiercely resisted Chinese rule. Source of Champa rice.",
  Buddhism:
    "Founded in India c. 500 BCE; spreads via Silk Roads to East Asia (Mahayana) and Indian Ocean to Southeast Asia (Theravada). Major source of monasteries, art, and learning.",
  "Neo-Confucianism":
    "Song-era synthesis (Zhu Xi) of Confucian ethics with Buddhist and Daoist metaphysics. Becomes the official Chinese state philosophy until 1905.",
  porcelain:
    "Hard, white, translucent ceramic perfected in China (Jingdezhen). 'China' becomes synonymous with the dish. Major Indian Ocean export.",

  "Abbasid Caliphate":
    "Sunni Islamic empire (750–1258) ruling from Baghdad. Patron of the Islamic Golden Age. Effective power fragmented well before Mongol sack in 1258.",
  "Seljuk Turks":
    "Turkic Sunni dynasty that took over much of the Abbasid realm in the 11th century. Defeated the Byzantines at Manzikert (1071), opening Anatolia to Turks.",
  "Mamluk Sultanate":
    "Slave-soldier dynasty in Egypt and Syria (1250–1517). Stopped the Mongols at Ain Jalut (1260) — only force to do so. Patrons of trade through Cairo.",
  "Delhi Sultanate":
    "Series of five Muslim Turkic dynasties ruling North India (1206–1526). Brought Persianate Islamic court culture to South Asia.",
  "House of Wisdom":
    "Abbasid Baghdad's translation and research institute. Greek, Persian, and Indian texts translated to Arabic; kept classical knowledge alive while Europe lagged.",
  "Islamic Golden Age":
    "Roughly 8th–13th c. flourishing of math, medicine, astronomy, philosophy, and engineering across the Islamic world.",
  Sufism:
    "Mystical, devotional Islam emphasizing personal experience of God. Sufi missionaries spread Islam to South Asia, Southeast Asia, and West Africa.",
  sharia:
    "Islamic law derived from the Qur'an and hadith. Governs personal conduct, family, and (in Islamic states) public life.",
  "algebra (al-Khwarizmi)":
    "9th-century Baghdad mathematician whose book gave us 'algebra' (al-jabr) and 'algorithm' (his Latinized name).",
  "Avicenna / Ibn Sina":
    "Persian polymath (980–1037). Canon of Medicine was the standard medical text in Europe and the Islamic world for ~600 years.",
  "Averroes / Ibn Rushd":
    "Andalusian (Cordoba) philosopher (1126–1198) whose commentaries on Aristotle reintroduced Greek philosophy to Latin Europe.",
  "Ibn Battuta":
    "Moroccan jurist (1304–c.1369) who traveled ~75,000 miles across Dar al-Islam — Mali, Mecca, Constantinople, India, China — and wrote the Rihla.",
  "Sunni vs Shia":
    "Original split: who succeeds Muhammad? Sunnis accept the elected caliphs; Shia hold leadership belongs to Muhammad's family (Ali and his descendants).",

  "Vijayanagara Empire":
    "Hindu South Indian empire (1336–1646) that resisted Muslim sultanates to the north. Capital at Vijayanagara (Hampi) was one of the largest cities of its day.",
  "bhakti movement":
    "Hindu devotional tradition stressing personal love of a chosen god (often Krishna or Shiva). Cut across caste lines and influenced Sikhism.",
  "Khmer Empire":
    "Hindu-Buddhist empire of Cambodia (802–1431). Built Angkor Wat (originally to Vishnu, later Buddhist). Massive water-management system.",
  Srivijaya:
    "Buddhist maritime empire of Sumatra (c. 650–1377) controlling the Strait of Malacca. Major node in Indian Ocean trade.",
  Majapahit:
    "Last great Hindu-Buddhist empire of Java (1293–c. 1527). Lost ground to the spread of Islam through Indian Ocean trade.",

  "Aztec Triple Alliance":
    "Tenochtitlán + Texcoco + Tlacopan, founded 1428. Mesoamerica's dominant political force until Cortés in 1519–21.",
  Tenochtitlán:
    "Aztec capital on islands in Lake Texcoco; up to 200,000 people, larger than any European city in 1500. Razed by Cortés; Mexico City built on top.",
  chinampas:
    "Aztec floating gardens — silt-built fields in lake shallows. Among the most productive agriculture in the pre-modern world.",
  "human sacrifice":
    "Aztec ritual to feed the sun god Huitzilopochtli with the 'precious water' of human blood. Captives from 'flower wars' were the main victims.",
  "Inca Empire":
    "Andean empire (c. 1438–1533) stretching ~2,500 miles from Ecuador to Chile. Capital at Cuzco; 25,000 miles of stone roads.",
  "mit'a labor":
    "Inca rotating labor draft — every household owed weeks of work per year on state projects (roads, terraces, temples). Revived by Spanish at Potosí.",
  quipu:
    "Inca knotted-cord recording system used for census, taxes, and possibly narrative. Inca had no alphabet.",
  "Mississippian culture":
    "North American mound-building society (c. 800–1600) centered on Cahokia. Maize agriculture; declined before European contact.",
  Cahokia:
    "Largest pre-Columbian city north of Mexico (c. 1050–1350). Up to 20,000 people; massive earthen pyramids in modern Illinois.",

  "Mali Empire":
    "West African empire (c. 1235–1670) built on trans-Saharan gold–salt trade. Famous for Mansa Musa.",
  "Mansa Musa":
    "Mali's 9th emperor (r. 1312–1337). His 1324 hajj to Mecca gave away so much gold it crashed the Egyptian economy for a decade.",
  "Hausa Kingdoms":
    "Walled city-states of West Africa (modern N. Nigeria) that grew rich on trans-Saharan trade and converted to Islam.",
  "Songhai Empire":
    "Mali's successor (c. 1464–1591). Capital at Gao. Conquered by a Moroccan invasion that crossed the Sahara.",
  "Great Zimbabwe":
    "Stone-walled capital (1100–1450) of a southern African gold-trade state. Linked to the Swahili coast.",
  Ethiopia:
    "Christian East African kingdom that traced itself to King Solomon. Survived as one of the few non-Muslim African states.",
  "Swahili coast":
    "String of city-states along East Africa (Mogadishu to Sofala) speaking Swahili — a Bantu language with heavy Arabic loans. Key Indian Ocean nodes.",
  Kilwa:
    "Wealthiest Swahili city-state (peak c. 1300s). Coral-stone palaces, gold from Great Zimbabwe.",
  griots:
    "Hereditary West African oral historians, poets, and musicians. Carriers of memory in a largely oral tradition.",

  feudalism:
    "Medieval European political system: kings grant land (fiefs) to nobles in exchange for military service; nobles grant land to lesser lords. A pyramid of personal loyalty.",
  manorialism:
    "Feudalism's economic backbone — self-sufficient agricultural estate (the manor) worked by serfs in exchange for protection.",
  serfdom:
    "Peasants legally tied to a manor. Not slaves, but couldn't leave without permission. Owed labor and a share of crops.",
  Crusades:
    "Series of religious wars (1095–1291) launched by the Papacy to retake the Holy Land from Muslim rulers. Eight major Crusades; only the First succeeded.",
  "Magna Carta":
    "1215 English document forced on King John. Limited royal power and laid the seed for later constitutional government.",
  "Hundred Years' War":
    "England vs. France, 1337–1453, over the French crown. Joan of Arc, longbows, Black Death disruption. Helped consolidate national monarchies.",
  "Black Death":
    "Bubonic plague pandemic (1347–1351 in Europe) that killed an estimated 30–50% of Europeans. Hit Eurasia along Silk Road and Indian Ocean networks.",
  "Hanseatic League":
    "Trading confederation of North German + Baltic cities (~1356–1862). Dominated medieval North Sea / Baltic commerce.",
  "Marco Polo":
    "Venetian merchant (1254–1324) who served at Kublai Khan's Yuan court (1275–92). His Travels introduced Europeans to East Asia.",

  // ── Unit 2 ────────────────────────────────────────────────────────────
  silk:
    "Premium luxury fabric monopolized by China for centuries — sericulture (silkworm farming) was a state secret. The original 'cool stuff transferred' on the Silk Roads.",
  "flying cash (paper money)":
    "Song-era promissory notes that let merchants deposit copper coin in one city and redeem it in another. Forerunner of modern paper currency.",
  caravanserai:
    "Roadside inns spaced a day's camel-ride apart along the Silk Roads. Provided shelter, water, fodder, and a marketplace.",
  "bills of exchange":
    "Medieval finance instrument: written orders to pay a fixed sum to the bearer in another city. Let merchants travel without carrying coin.",
  spices:
    "Black pepper, cinnamon, cloves, nutmeg, mace. Drove Indian Ocean trade and later European exploration. Worth their weight in gold in Europe.",

  "Genghis Khan / Temüjin":
    "Mongol founder (c. 1162–1227). Unified the Mongol tribes in 1206 and launched the conquests that built history's largest contiguous empire.",
  "Pax Mongolica":
    "13th-century 'Mongol peace' — relative safety along the Silk Roads under Mongol overlordship. Marco Polo, Ibn Battuta, gunpowder, plague all travel.",
  "Yuan Dynasty (Kublai Khan)":
    "Mongol-ruled Chinese dynasty (1271–1368). First non-Han dynasty to rule all of China. Marco Polo served at the court.",
  Ilkhanate:
    "Mongol khanate ruling Persia and the Middle East (1256–1335). Sacked Baghdad in 1258. Eventually converted to Islam.",
  "Golden Horde":
    "Mongol khanate of the Russian steppe and beyond (1240s–1500s). Russian princes paid tribute (the 'Mongol yoke') for ~240 years.",
  "Yam relay system":
    "Mongol postal network of relay stations across Eurasia. Riders changed horses at each station; messages crossed the empire in days.",

  "monsoon winds":
    "Predictable seasonal wind reversal in the Indian Ocean. Sailors traveled west in summer and east in winter — basis of Indian Ocean trade.",
  "dhow ships":
    "Arab/Indian sailing vessels with triangular lateen sails. Workhorse of Indian Ocean trade for over a millennium.",
  "lateen sail":
    "Triangular sail rigged on a long yardarm. Lets ships sail closer to the wind than square sails. Spread from the Indian Ocean to Europe.",
  astrolabe:
    "Astronomical instrument used to measure latitude by finding the altitude of stars or the sun. Refined by Muslim astronomers.",
  "Zheng He":
    "Ming-era admiral (1371–1433). Led seven huge treasure-fleet voyages from China to East Africa (1405–1433). Halted by Confucian court conservatives.",

  "camel saddle":
    "North African + Arabian innovation that let camels carry heavy loads, opening the Sahara to caravan trade.",
  "1324 hajj — Cairo gold crash":
    "Mansa Musa passed through Cairo on hajj giving away so much gold that Cairo's gold market collapsed for a decade.",
  "Sankoré madrasa":
    "Major Islamic university at Timbuktu, peak under Mansa Musa. Center of scholarship in West Africa.",

  // ── Unit 3 ────────────────────────────────────────────────────────────
  "gunpowder empires":
    "Heimler's umbrella term for the early modern Asian empires (Ottoman, Safavid, Mughal, Ming/Qing) that consolidated power using artillery and firearms.",
  "fall of Constantinople 1453":
    "Mehmed II's Ottoman armies, with massive cannons, took the 1,000-year Byzantine capital — ending the Eastern Roman Empire.",
  "Suleiman the Magnificent":
    "Ottoman sultan (r. 1520–66). Empire's high tide — besieged Vienna, codified law, built Suleymaniye Mosque.",
  Akbar:
    "Mughal emperor (r. 1556–1605). Famous for religious tolerance, abolished the jizya tax, married a Hindu princess, tried to fuse Hinduism + Islam (Din-i Ilahi).",
  Babur:
    "Founder of the Mughal Empire (r. 1526–30). Descendant of both Genghis Khan and Tamerlane.",
  "Forbidden City":
    "Vast palace complex in Beijing, completed 1420. Off-limits to the public for ~500 years. Symbol of the Mandate of Heaven.",
  "Peter the Great":
    "Russian tsar (r. 1682–1725). Forcibly Westernized Russia — beard tax, new capital at St. Petersburg, modern army, Table of Ranks.",
  "Ivan IV / Ivan the Terrible":
    "First Russian Tsar (r. 1547–84). Centralized power; killed thousands in his Oprichnina; expanded into Siberia.",

  devshirme:
    "Ottoman 'levy' of Christian boys from the Balkans, converted to Islam, trained, and assigned to imperial service — best of them as Janissaries.",
  Janissaries:
    "Elite Ottoman infantry, originally devshirme slaves of the sultan. Among the first standing armies in Europe to use firearms en masse.",
  zamindars:
    "Local Mughal landowners who collected taxes for the empire and kept a cut. Held real power in the countryside.",
  mansabdari:
    "Mughal ranking system that bundled military command + tax-collection rights. Akbar's structural innovation.",
  jizya:
    "Tax on non-Muslim subjects under Islamic law, in exchange for protection and exemption from military service. Akbar abolished it; Aurangzeb restored it.",
  "Sunni–Shia split":
    "Hardened in this period: Ottomans championed Sunni Islam, Safavid Persia made Twelver Shi'ism state religion. Border was the Iraq/Iran area.",
  "Sikhism (Guru Nanak)":
    "Religion founded c. 1500 by Guru Nanak in Punjab. Monotheistic, rejects caste, blends elements of Hinduism and Islam.",
  "95 Theses (Luther 1517)":
    "Martin Luther's protest against indulgences nailed to a Wittenberg church door. Lit the Protestant Reformation.",
  Calvinism:
    "John Calvin's Protestant theology — predestination, austere worship. Influential in Geneva, the Netherlands, Scotland, and Puritan New England.",
  "Catholic Counter-Reformation":
    "Catholic response: Council of Trent reaffirmed doctrine, Jesuits became the Catholic shock troops of education and missions, Inquisition tightened.",
  Jesuits:
    "Society of Jesus, founded by Ignatius of Loyola (1540). Catholic order known for elite schools and global missions (Matteo Ricci in China, etc.).",

  // ── Unit 4 ────────────────────────────────────────────────────────────
  caravel:
    "Small, agile Portuguese sailing ship (15th c.) with lateen + square sails. Could sail close to the wind — perfect for African coastal exploration.",
  carrack:
    "Larger 3-masted ocean-going ship (15th–16th c.). Workhorse of Spanish and Portuguese transatlantic / Indian Ocean trade.",
  fluyt:
    "Dutch cargo ship (16th c.) — cheap, big hold, small crew. Made the Dutch the dominant carriers of European trade.",
  "Henry the Navigator":
    "Portuguese prince (1394–1460) who sponsored a school for cartographers + navigators at Sagres. Funded the African coast voyages.",
  "Treaty of Tordesillas 1494":
    "Pope-brokered deal that split the non-Christian world between Spain and Portugal along a north-south line. Brazil ended up Portuguese.",
  "God, glory, gold":
    "Heimler's mnemonic for European motives in exploration: spread Christianity, win national prestige, get rich on Asian luxuries + American silver.",

  "maize / corn":
    "Mesoamerican domesticate. Spreads to Africa (becomes a staple), Europe, Asia. Allows population growth across the Old World.",
  potatoes:
    "Andean staple. Spreads to Europe (esp. Ireland) and northern China. Massive caloric boost — supports population growth.",
  "cassava / manioc":
    "Amazonian root crop. Spreads to Africa where it becomes a staple in many regions.",
  cacao:
    "Mesoamerican bean used for chocolate. Becomes a global luxury after the Spanish conquest.",
  smallpox:
    "Old World viral disease the Americas had no immunity to. Killed up to 90% of Indigenous populations — single biggest factor in Spanish conquest.",
  syphilis:
    "Probably went the other direction — New World to Old. Becomes a major European health problem after 1493.",
  horses:
    "Reintroduced to the Americas by Spanish (extinct there since the Ice Age). Transforms Plains Indian life and Argentine pampas economy.",

  "Hernán Cortés":
    "Spanish conquistador (1485–1547). Conquered the Aztec Empire (1519–21) with ~600 men, native allies, smallpox, and steel.",
  "Francisco Pizarro":
    "Spanish conquistador (c. 1471–1541). Conquered the Inca Empire (1532–33) with ~180 men by capturing the emperor Atahualpa.",
  "Dutch East India Company (VOC, 1602)":
    "World's first joint-stock company with state-granted monopoly. Dominated the Indian Ocean spice trade; private army; private war powers.",
  "British East India Company (1600)":
    "English chartered company that ended up ruling India. Took over after Plassey (1757); dissolved 1858.",
  "Manila Galleon trade":
    "Spanish silver-for-silk trade between Acapulco (Mexico) and Manila (Philippines), 1565–1815. First true trans-Pacific trade.",

  encomienda:
    "Spanish system in the Americas: a colonist gets the right to extract labor from a group of Indigenous people in exchange for nominal protection + Christianization. Effectively slavery.",
  hacienda:
    "Large Spanish-American agricultural estate. Replaced encomienda; ran on debt-bound peon labor.",
  "Atlantic slave trade":
    "Forced shipment of ~12.5 million enslaved Africans to the Americas (1500s–1800s). About 2 million died on the Middle Passage.",
  "Middle Passage":
    "The transatlantic leg of the slave trade. Brutal conditions in chained-down ships; ~15% mortality.",
  "indentured servitude":
    "Worker signs a contract for X years of labor in exchange for passage and (often) eventual land. Common in early American colonies; revived after slavery ends.",
  "triangular trade":
    "Atlantic triangle: manufactured goods → Africa → enslaved people → Americas → sugar/tobacco/cotton → Europe.",
  mercantilism:
    "Pre-industrial economic doctrine: a nation's wealth = its gold. Maximize exports, minimize imports; colonies exist to enrich the mother country.",

  "casta system":
    "Spanish American racial hierarchy based on ancestry: peninsulares > criollos > mestizos > mulattos > Indigenous > Africans. Painted in elaborate 'casta paintings.'",
  peninsulares:
    "Spaniards born in Spain, top of the colonial hierarchy. Got the best jobs in colonial government.",
  "creoles / criollos":
    "American-born people of Spanish descent. Wealthy but blocked from the highest offices — major leaders of independence movements.",
  mestizos:
    "Mixed Spanish + Indigenous ancestry. The largest group in much of Spanish America.",
  mulattos:
    "Mixed European + African ancestry.",

  // ── Unit 5 ────────────────────────────────────────────────────────────
  "John Locke (natural rights)":
    "English philosopher (1632–1704). Argued people have natural rights to life, liberty, property; government exists by consent and can be replaced if it fails.",
  Voltaire:
    "French philosopher (1694–1778). Champion of religious tolerance, free speech, and skepticism of the Church.",
  "Jean-Jacques Rousseau (social contract)":
    "Genevan philosopher (1712–78). 'The general will' — sovereignty resides in the people, not the king.",
  "Montesquieu (separation of powers)":
    "French philosopher (1689–1755). Argued for splitting government into legislative, executive, judicial branches that check each other.",
  "Adam Smith (Wealth of Nations 1776)":
    "Scottish economist. Free markets coordinated by the 'invisible hand' produce prosperity; division of labor; opposed mercantilism.",
  deism:
    "Enlightenment view that God set the universe in motion like a clockmaker but doesn't intervene. Many founding-era figures (Jefferson, Franklin) were deists.",
  "Mary Wollstonecraft":
    "English writer (1759–97). 'Vindication of the Rights of Woman' (1792) — pioneering feminist text arguing women aren't naturally inferior, just under-educated.",

  "American Revolution (1775–83)":
    "13 British colonies break away. Inspired by Enlightenment ideas; sets the model for later revolutions.",
  "Declaration of Independence":
    "1776 document drafted by Jefferson. Channels Locke directly — 'unalienable rights,' 'consent of the governed.'",
  "French Revolution (1789)":
    "Overthrow of the Bourbon monarchy. Phases: liberal reform → radical Republic + Reign of Terror → Napoleon.",
  "Reign of Terror":
    "1793–94 phase of the French Revolution. The Committee of Public Safety guillotined ~17,000 'enemies of the revolution.' Robespierre eventually got it too.",
  "Napoleon Bonaparte":
    "French general turned emperor (1769–1821). Spread French revolutionary ideas — and conquest — across Europe before defeat at Waterloo (1815).",
  "Haitian Revolution (1791–1804)":
    "Only successful slave-led revolution. Enslaved Africans + free people of color overthrew French rule and abolished slavery — 60 years before the US.",
  "Toussaint L'Ouverture":
    "Brilliant Haitian general (c. 1743–1803) who led the early phase of the revolution before being captured by the French.",
  "Simón Bolívar":
    "Venezuelan-born 'Liberator' (1783–1830). Led independence wars across northern South America; envisioned (briefly) a united Gran Colombia.",
  "Italian unification":
    "Risorgimento (1815–71). Cavour (statecraft) + Garibaldi (red shirts) + Mazzini (idealism) merged the peninsula's states under the King of Sardinia.",
  "German unification":
    "Bismarck's Prussia engineered three short wars (vs. Denmark, Austria, France) to unify Germany under the Prussian king. Done by 1871.",

  "agricultural revolution":
    "Late-1700s Britain: enclosed fields, crop rotation, new equipment (seed drill) boost yields. Frees up rural labor to work in cities.",
  "enclosure movement":
    "British landlords fenced off common land into private fields. Pushed peasants off the land and into industrial cities — the workforce of the factory.",
  "spinning jenny (Hargreaves)":
    "Multi-spool spinning machine (1764). Let one worker do the work of many; broke the cottage industry.",
  "factory system":
    "Centralized production with workers + machines under one roof, set hours, supervised. Replaced piecework done at home.",
  "James Watt (steam engine)":
    "Scottish engineer (1736–1819). His improved steam engine (1769) made coal power efficient enough to run factories, trains, and ships.",
  "Suez Canal (1869)":
    "Connected the Mediterranean to the Red Sea — cut Europe-Asia voyage by ~7,000 km. Built with French money, Egyptian labor; British took control 1882.",
  "Bessemer process (steel)":
    "1850s technique to mass-produce steel cheaply. Made railroads, skyscrapers, and modern infrastructure possible.",
  "internal combustion engine":
    "Late 1800s. Burns fuel (gasoline) inside the cylinder. Powers cars, planes, ships — the second industrial revolution.",

  "Karl Marx + Friedrich Engels":
    "German thinkers. Communist Manifesto (1848) and Das Kapital. Diagnosed industrial capitalism and predicted (incorrectly) its collapse via worker revolution.",
  "Communist Manifesto (1848)":
    "Short, fierce political pamphlet by Marx and Engels. 'Workers of the world, unite!' Lays out the theory of class struggle.",
  "labor unions":
    "Organized workers bargaining collectively. Initially illegal in most industrial countries; legalized through 19th-century strikes and pressure.",
  "Seneca Falls (1848)":
    "First US women's rights convention. Declaration of Sentiments — 'all men and women are created equal.'",

  // ── Unit 6 ────────────────────────────────────────────────────────────
  nationalism:
    "Belief that a 'nation' (people sharing language/culture/history) deserves its own state. Drove imperialism abroad and unification at home (Italy, Germany).",
  "social Darwinism":
    "Misapplied Darwin: 'survival of the fittest' societies. Used to justify imperialism, racism, and laissez-faire capitalism.",
  "scientific racism":
    "19th-century pseudo-science classifying races by 'superiority,' often using skull measurements. Provided cover for colonial domination.",
  "civilizing mission":
    "European justification: bringing 'civilization' (Christianity, Western education, capitalism) to colonized peoples for their own good.",
  "White Man's Burden (Kipling)":
    "Rudyard Kipling poem (1899) framing imperialism as a heavy moral duty white Westerners owed to non-white peoples. Often quoted ironically.",
  "Berlin Conference (1884–85)":
    "Bismarck-hosted summit where European powers carved up Africa among themselves with no Africans present. Established 'effective occupation' rule.",
  "Sepoy Rebellion / Indian Rebellion of 1857":
    "Indian troops (sepoys) in the British EIC army revolted, joined by displaced princes and peasants. Crushed; led to direct British Crown rule over India (1858).",
  "Boxer Rebellion (1899–1901)":
    "Anti-foreign, anti-Christian uprising in China. Crushed by an 8-nation coalition. Hastened Qing collapse.",
  "Taiping Rebellion (Hong Xiuquan)":
    "Chinese civil war (1850–64) led by a man who believed he was Jesus's brother. Killed ~20 million. Devastated south China; weakened the Qing.",
  "Battle of Adwa (1896)":
    "Ethiopia under Menelik II crushed an invading Italian army. Only major colonial defeat in Africa during the scramble — kept Ethiopia independent.",
  "First Opium War (1839–42)":
    "Britain forced China to keep accepting opium imports. Treaty of Nanjing opened ports, ceded Hong Kong, and started the 'century of humiliation.'",
  "unequal treaties":
    "Series of post-Opium-War deals that gave Western powers extraterritoriality, low tariffs, and treaty ports in China. Lasted until WWII.",
  "Chinese Exclusion Act (US, 1882)":
    "First US law banning a specific national group from immigrating. Stayed on the books until 1943.",

  // ── Unit 7 ────────────────────────────────────────────────────────────
  "MAIN: Militarism, Alliances, Imperialism, Nationalism":
    "Standard mnemonic for the long-term causes of WWI. Plus the spark: Franz Ferdinand's assassination in Sarajevo, June 28, 1914.",
  "Archduke Franz Ferdinand assassination (June 28, 1914)":
    "Heir to the Austro-Hungarian throne shot in Sarajevo by Gavrilo Princip (Black Hand, Serbian nationalist). The spark for WWI.",
  "trench warfare":
    "WWI Western Front: parallel trenches with 'no man's land' in between. Defensive technology (machine guns, barbed wire) made offensives suicidal.",
  "Treaty of Versailles (1919)":
    "Ended WWI with crushing terms on Germany — war guilt, reparations, lost territory, no military. Sowed seeds of WWII.",
  "Wilson's 14 Points":
    "Idealistic US peace plan — self-determination, free trade, League of Nations. Mostly ignored by Britain/France in the actual treaty.",
  "League of Nations":
    "First global IGO (1920). Goal: prevent another world war. Failed because the US refused to join and aggressors (Japan, Italy, Germany) ignored it.",
  "Russian Revolution":
    "1917 — Tsar overthrown in February; Bolsheviks (Lenin) seize power in October. Russia exits WWI; civil war 1918–22 establishes the USSR.",
  Lenin:
    "Vladimir Lenin (1870–1924). Bolshevik leader, architect of the Soviet state. NEP, vanguard party theory.",
  "Mexican Revolution (1910)":
    "Overthrew Porfirio Díaz's dictatorship. Pancho Villa, Emiliano Zapata, land reform. The 1917 constitution one of the world's most progressive at the time.",

  "Weimar hyperinflation (1923)":
    "Germany printed money to pay reparations and ended up with prices doubling every few days. People used wheelbarrows of marks to buy bread.",
  "Wall Street Crash (October 1929)":
    "US stock market collapsed. Global trade froze; banks failed. Triggered the Great Depression worldwide.",
  "Great Depression":
    "1929–1939 global economic collapse. ~25% unemployment in the US; worse in Germany. Discredited liberal capitalism, fueled fascism + communism.",
  "FDR's New Deal":
    "Franklin Roosevelt's response to the Depression — public works (CCC, WPA), Social Security, banking reform. Massive expansion of US federal government.",
  "Mahatma Gandhi":
    "Indian independence leader (1869–1948). Strategy: satyagraha (non-violent resistance) — boycotts, marches, civil disobedience.",
  "Salt March (1930)":
    "Gandhi's 240-mile march to the sea to make salt in defiance of British monopoly. Brilliant act of mass civil disobedience.",
  "Ho Chi Minh":
    "Vietnamese Communist leader (1890–1969). Founded the Viet Minh, declared Vietnamese independence in 1945, fought France then the US.",

  fascism:
    "Far-right ultranationalist ideology — strong leader, suppressed opposition, glorified violence, racial/national myths. Italy (Mussolini), Germany (Nazis), Japan (militarist).",
  "Adolf Hitler":
    "Austrian-born German dictator (1889–1945). NSDAP leader; came to power 1933; launched WWII; orchestrated the Holocaust.",
  appeasement:
    "Britain + France's policy of letting Hitler swallow Austria, the Sudetenland, etc. to avoid war. Failed disastrously — convinced Hitler the West was weak.",
  "Munich Agreement (1938)":
    "Britain (Chamberlain) and France gave Hitler the Sudetenland, hoping it'd be enough. 'Peace for our time.' Six months later he took the rest of Czechoslovakia.",
  "Pearl Harbor (Dec 7, 1941)":
    "Japanese surprise attack on the US Pacific Fleet in Hawaii. Brought the US into WWII.",
  Blitzkrieg:
    "'Lightning war' — Nazi tactic combining tanks, air power, and motorized infantry for fast deep penetration. Crushed Poland, France, USSR (initially).",
  "Battle of Stalingrad":
    "Brutal urban battle (1942–43). Soviet victory turned the tide of the Eastern Front and arguably WWII. ~2 million casualties.",
  "atomic bomb":
    "Nuclear weapons developed by the US Manhattan Project. Used on Hiroshima (Aug 6, 1945) and Nagasaki (Aug 9, 1945) — Japan surrendered Aug 15.",
  Holocaust:
    "Nazi systematic murder of ~6 million Jews + millions of Roma, disabled people, LGBT people, Slavs, political prisoners. The 20th century's central atrocity.",
  Auschwitz:
    "Largest Nazi concentration / extermination camp, in occupied Poland. ~1.1 million people murdered, mostly Jews. Liberated Jan 27, 1945.",
  "Armenian Genocide (1915, Ottoman)":
    "Ottoman government's mass deportation and murder of ~1.5 million Armenians during WWI. First major 20th-c. genocide.",
  Holodomor:
    "Stalin's man-made famine in Ukraine (1932–33) during forced collectivization. Killed millions; recognized as genocide by Ukraine + many countries.",

  // ── Unit 8 ────────────────────────────────────────────────────────────
  "Marshall Plan (1948)":
    "$13 billion of US aid to rebuild Western Europe after WWII. Strengthened pro-US, anti-communist governments. Crucial Cold War move.",
  "Truman Doctrine":
    "1947 — US would support 'free peoples' resisting communism. Containment as official policy. Started with aid to Greece + Turkey.",
  "Iron Curtain":
    "Churchill's metaphor (1946) for the line dividing Soviet-controlled Eastern Europe from the democratic West.",
  "NATO (1949)":
    "North Atlantic Treaty Organization — US-led military alliance of Western capitalist countries.",
  "Warsaw Pact (1955)":
    "Soviet-led military alliance of Eastern Bloc countries. Soviet response to NATO + West German rearmament.",
  "Cuban Missile Crisis (1962)":
    "13 days when the US and USSR came closest to nuclear war over Soviet missiles in Cuba. Ended with USSR pulling missiles, US (secretly) pulling missiles from Turkey.",
  "Berlin Wall (1961)":
    "East Germany built a wall to stop people fleeing to West Berlin. Stood until November 9, 1989 — its fall symbolized the Cold War's end.",
  Sputnik:
    "First artificial satellite (USSR, 1957). Shocked the US and kicked off the space race.",
  "Korean War (1950–53)":
    "North (Soviet/Chinese-backed) vs South (US-led UN) Korea. Ended in stalemate at the 38th parallel — still no peace treaty.",
  "Vietnam War":
    "North Vietnamese + Viet Cong vs. South Vietnam + US (1955–75). US lost; communist Vietnam unified 1976. ~3 million Vietnamese killed.",
  "Tet Offensive (1968)":
    "Surprise communist attack across South Vietnam during Tet (Lunar New Year). Tactically a US victory but turned American public opinion against the war.",

  "Mao Zedong":
    "Chinese Communist Party founder (1893–1976). Won the Chinese Civil War, founded the PRC, launched the Great Leap Forward and Cultural Revolution.",
  "Long March (1934–35)":
    "Mao's 6,000-mile retreat from Nationalist forces. Cemented his leadership of the CCP and became foundational myth.",
  "PRC founded (Oct 1, 1949)":
    "Mao announces the People's Republic of China from Tiananmen. Nationalists (Chiang Kai-shek) flee to Taiwan.",
  "Great Leap Forward (1958–62)":
    "Mao's forced collectivization + backyard steel furnaces. Caused famine that killed ~30 million people. The largest single-decade death toll in modern history.",
  "Cultural Revolution (1966–76)":
    "Mao mobilized youth (Red Guards) to attack 'old' culture and his own party rivals. Schools closed; intellectuals exiled / killed; chaos until Mao's death.",
  "Fidel Castro":
    "Cuban revolutionary (1926–2016). Overthrew US-backed Batista 1959; allied with USSR; survived the Bay of Pigs and 60+ years of US embargo.",

  "India + Pakistan partition (1947)":
    "British India split into Hindu-majority India and Muslim-majority Pakistan. ~15 million people displaced; up to 2 million killed in communal violence.",
  "Algerian War (1954–62)":
    "Brutal independence war against France. France lost; ~1 million Algerians killed; foundational text: Fanon's Wretched of the Earth.",
  "Year of Africa (1960)":
    "17 African countries gained independence in 1960 alone. Symbol of decolonization momentum.",
  "Suez Crisis (1956)":
    "Nasser nationalized the Suez Canal; Britain, France, and Israel invaded; the US + USSR forced them to withdraw — humiliated old colonial powers.",
  apartheid:
    "South African system of legal racial segregation (1948–94). Ended after decades of resistance + global pressure; Mandela elected president 1994.",

  "Non-Aligned Movement (Bandung 1955)":
    "Newly independent states (Nehru, Nasser, Sukarno, Tito) banding together to refuse to align with either Cold War superpower.",
  "Iranian Revolution (1979)":
    "Overthrow of the US-backed Shah by Islamic clerics led by Ayatollah Khomeini. Created the Islamic Republic of Iran.",

  "Mikhail Gorbachev":
    "Last Soviet leader (r. 1985–91). Tried to reform the system through glasnost + perestroika; instead it collapsed.",
  "perestroika (restructuring)":
    "Gorbachev's economic reforms — limited markets, private cooperatives, decentralization. Half-measures couldn't save the Soviet economy.",
  "glasnost (openness)":
    "Gorbachev's political reforms — free speech, criticism of the past. Opened the floodgates of dissent that the system couldn't survive.",
  "fall of the Berlin Wall (Nov 9, 1989)":
    "East German government bumbled into announcing free travel; East Berliners poured through the Wall and started tearing it down. Cold War effectively over.",
  "dissolution of the USSR (Dec 25, 1991)":
    "Gorbachev resigns; Soviet flag comes down over the Kremlin. 15 successor states. Russia (Yeltsin) inherits seat at UN.",

  // ── Unit 9 ────────────────────────────────────────────────────────────
  internet:
    "Global network of networks. ARPANET (1969) → World Wide Web (Tim Berners-Lee, 1989) → mass adoption in the 1990s.",
  "shipping container revolution (1956)":
    "Standardized 20'/40' boxes that fit ships, trains, trucks. Cut shipping costs ~90% and built modern globalization.",
  "Special Economic Zones (Shenzhen 1980)":
    "Chinese coastal regions where capitalism was allowed early. Shenzhen went from fishing village to megacity in 30 years.",
  "Green Revolution (Norman Borlaug)":
    "Mid-20th-c. effort to boost food production via high-yield seeds, fertilizer, and pesticides. Probably saved a billion lives; degraded soils + groundwater.",
  GMOs:
    "Genetically modified organisms — crops engineered for traits like pest resistance or higher yield. Politically controversial in Europe; common in the US.",
  "Spanish flu":
    "1918–20 H1N1 pandemic. Killed ~50 million worldwide — more than WWI itself. Spread by mass troop movements.",
  "HIV / AIDS":
    "Virus that emerged in the 1970s–80s. ~40 million deaths to date; antiretroviral therapy now manages it as a chronic disease.",
  "COVID-19":
    "SARS-CoV-2 pandemic, 2019–. ~7 million confirmed deaths; reshaped work, travel, supply chains. Vaccines developed in under a year.",
  "anthropogenic climate change":
    "Warming of the planet driven by human CO₂ emissions (mostly fossil fuels). ~1.2°C above pre-industrial; major focus of late-20th c. politics.",
  "Paris Agreement (2015)":
    "Near-universal climate accord — countries set their own emissions targets. Goal: limit warming to well below 2°C.",
  Anthropocene:
    "Proposed name for our current geological epoch — defined by human-driven changes to climate, biosphere, and earth systems.",

  neoliberalism:
    "Late-20th-c. push for free markets, deregulation, privatization, low taxes, and free trade. Reagan + Thatcher its avatars.",
  "Margaret Thatcher":
    "British PM (1979–90). Privatized state industries, broke the unions, championed free markets — reshaped British politics.",
  "Ronald Reagan":
    "US president (1981–89). Tax cuts, deregulation, military buildup, anti-communism. Helped end the Cold War.",
  "World Trade Organization (1995)":
    "Replaced GATT. Sets and enforces global trade rules. Symbol of (and target of) globalization.",
  "NAFTA (1994)":
    "North American Free Trade Agreement among Canada, Mexico, US. Replaced 2020 by USMCA. Boosted trade; criticized for outsourcing US manufacturing.",
  "Deng Xiaoping":
    "Chinese leader (1978–92). Opened China to markets — 'Reform and Opening Up.' Doubled life expectancy and lifted ~800 million out of poverty.",
  "China joins WTO (2001)":
    "Locked in China's integration into the global economy. Massive boost to Chinese manufacturing exports; mass loss of US/EU manufacturing jobs.",
  "2008 Global Financial Crisis":
    "US housing bubble burst → banking crisis → global recession. Bailouts, austerity in Europe; populist backlash that's still rippling.",

  "Al-Qaeda":
    "Sunni jihadist group founded by Osama bin Laden, late 1980s. Carried out 9/11. Splintered into many regional affiliates.",
  "9/11 attacks (2001)":
    "Coordinated Al-Qaeda hijacking attacks: World Trade Center, Pentagon, plane crashed in PA. ~3,000 killed. Triggered the War on Terror.",
  "War on Terror":
    "Post-9/11 US military + intelligence campaign. Wars in Afghanistan (2001–21) and Iraq (2003–11). Drone strikes, surveillance, torture controversies.",
  "ISIS / Daesh":
    "Sunni jihadist group, peak 2014–17. Briefly controlled territory in Iraq + Syria; declared a caliphate. Mostly defeated as a state by 2019.",
  "Arab Spring (2010–11)":
    "Wave of uprisings across the Arab world — Tunisia, Egypt, Libya, Syria, Yemen, Bahrain. Mixed outcomes: democracy in Tunisia, civil wars elsewhere.",
  "European Union":
    "Successor to the European Community. 27 members; single market, mostly free movement, common currency for ~20 (the Eurozone). Brexit 2020.",
  "Mercosur":
    "South American trade bloc — Argentina, Brazil, Paraguay, Uruguay (Venezuela suspended). Latin America's biggest economic alliance.",
  ASEAN:
    "Association of Southeast Asian Nations (1967). 10 members. Coordinated SE Asia's response to Cold War, then to Chinese economic rise.",
  "Brexit (2016)":
    "UK referendum to leave the EU. Fundamental break with 50 years of European integration; final exit Jan 2020.",
};

// Look up a term, tolerating minor variations in capitalization, trailing
// parens like "(1969)", and similar fluff.
export function findGlossary(term: string): string | null {
  const direct = glossary[term];
  if (direct) return direct;
  // Try trimmed / lowercase exact match.
  const lower = term.trim().toLowerCase();
  for (const [key, value] of Object.entries(glossary)) {
    if (key.toLowerCase() === lower) return value;
  }
  // Strip a trailing parenthetical and try again.
  const stripped = term.replace(/\s*\([^)]*\)\s*$/, "").trim();
  if (stripped !== term) {
    const v = glossary[stripped];
    if (v) return v;
    for (const [key, value] of Object.entries(glossary)) {
      if (key.toLowerCase() === stripped.toLowerCase()) return value;
    }
  }
  return null;
}
