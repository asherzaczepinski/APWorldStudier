// Contextualization for each Big Idea — DBQ-ready content. Each entry has:
//
//   leadUp:  ONLY the background that comes BEFORE the Big Idea's events.
//            The events of the Big Idea itself are not described here — that's
//            what the rest of the side panel is for. This is pure run-up.
//
//   thesis:  An "Although [counter], ultimately [main argument], because …"
//            sentence the student can adapt for the DBQ thesis point.
//
// Scoped to Units 3–8 — the AP World periods (1450–1991) where DBQs land
// most often. Units 1, 2, and 9 are excluded by request.

export type Contextualization = {
  leadUp: string;
  thesis: string;
};

export const contextualizations: Record<string, Contextualization> = {
  // =========================================================================
  // UNIT 3 — Land-Based Empires (1450–1750)
  // =========================================================================
  "u3-bi1": {
    leadUp:
      "Gunpowder weaponry originated in Song China and spread along the Silk Roads under Mongol-protected exchange. By the early 1400s, it had been used militarily for over a century. The Mongol Empire, which had unified much of Eurasia, was fragmenting — leaving Persian administrative traditions, Mongol cavalry tactics, and Chinese technology floating free, available for new state-builders to inherit. Across Eurasia, regional rulers were consolidating territory and centralizing taxation, accumulating the resources needed to organize professional armies.",
    thesis:
      "Although gunpowder weapons had existed for centuries before 1450, ultimately the period 1450–1750 transformed Eurasian politics because emerging empires combined gunpowder with bureaucratic capacity, standardizing firearms across whole armies and using them to consolidate vast new territories.",
  },

  "u3-bi2": {
    leadUp:
      "Empires across the early modern world inherited a long history of state-building. Roman tax-farming, Chinese Confucian bureaucracy, Persian provincial administration, and post-feudal European monarchy each had centuries of institutional development behind them. By 1450 the Mongol Empire had collapsed, leaving its successors with administrative templates but also with the ongoing problem of how to project authority across vast distances without modern communications.",
    thesis:
      "Although early modern rulers inherited diverse state-building traditions, ultimately the period 1450–1750 produced increasingly sophisticated systems of imperial control because rulers combined inherited institutions with new tools — sponsored art, centralized taxation, and professional bureaucracies — to legitimize and enforce their power.",
  },

  "u3-bi3": {
    leadUp:
      "Religion had been central to state legitimacy across Afro-Eurasia for over a millennium — Constantine's adoption of Christianity, the Caliphate as defender of Islam, China's Confucian state ideology. By 1450, the post-Mongol fragmentation of Dar al-Islam, the rise of new Islamic dynasties, and the long European tradition of papal authority over Latin Christendom had set up a religious map full of unresolved tensions and uneven boundaries.",
    thesis:
      "Although religion had long served as a unifying tool for empires, ultimately the period 1450–1750 saw belief systems play a sharply double-edged role because new religious movements (the Reformation, intensifying Sunni-Shia divisions) drove violent conflict, while interaction between traditions also produced syncretic outcomes like Sikhism.",
  },

  // =========================================================================
  // UNIT 4 — Transoceanic Interconnections (1450–1750)
  // =========================================================================
  "u4-bi1": {
    leadUp:
      "European maritime technology before 1450 lagged behind Chinese, Arab, and South Asian shipping traditions. The astrolabe came from Hellenistic Greek and Islamic origins; the magnetic compass from Song China; the lateen sail from Arab dhows. Iberian seafarers under Henry the Navigator's patronage, alongside Genoese and Venetian sailors with Indian Ocean familiarity, had spent decades quietly learning and combining these foreign technologies in their Atlantic exploration of the African coast.",
    thesis:
      "Although Europeans inherited their core maritime technologies from outside Europe, ultimately the period 1450–1750 enabled the rise of European sea-based empires because Iberian shipbuilders synthesized those borrowed tools into the caravel, carrack, and fluyt — vessels capable of routine transoceanic voyages with cargo and cannon.",
  },

  "u4-bi2": {
    leadUp:
      "Several long-running trends pushed Europe toward exploration by 1450. The Crusades had raised European appetite for Asian luxury goods. The fall of Constantinople in 1453 disrupted older land-based trade through Muslim middlemen. The Reconquista had created restless Iberian military classes searching for new outlets, and emerging mercantilist economic theory framed wealth as a finite pie that empires must accumulate.",
    thesis:
      "Although European exploration looks like a sudden invention, ultimately the period 1450–1750 saw rapid state-sponsored expansion because converging political, religious, and economic pressures — combined with new maritime technology — made transatlantic and Indian Ocean voyages feasible and profitable for the first time.",
  },

  "u4-bi3": {
    leadUp:
      "Before 1492, the Americas and Afro-Eurasia had been biologically separated for at least 12,000 years. American crops like the potato, maize, and tomato had been domesticated independently. American populations had no exposure to Eurasian crowd diseases — smallpox, measles, influenza — and therefore no built-up immunity. Iberian states were assembling the maritime tools that would, for the first time, allow regular travel between these long-separated biospheres.",
    thesis:
      "Although the two biospheres had been long separated, ultimately the post-1492 period reunified them with catastrophic consequences because Eurasian diseases collapsed Indigenous American populations by up to 90% while New World crops fueled population growth across Afro-Eurasia.",
  },

  "u4-bi4": {
    leadUp:
      "Coerced labor had ancient precedents — Roman slavery, Han Chinese corvée, the Inca mit'a labor draft. Pre-existing African slave-trade networks moved enslaved people across the Sahara and into the Indian Ocean. By 1450, mercantilist thinking framed colonies as instruments to enrich the metropole, and Spanish and Portuguese rulers had centuries of experience using forced labor in Iberian estates and Atlantic island plantations.",
    thesis:
      "Although forced labor was a familiar tool of empire, ultimately the period 1450–1750 industrialized it on an unprecedented scale because mercantilist demand and Indigenous demographic collapse drove a massive Atlantic slave trade that reshaped the economies of Europe, Africa, and the Americas.",
  },

  "u4-bi5": {
    leadUp:
      "Italian Renaissance trading houses, Hanseatic League agreements, and Portuguese coastal trading-post networks had all experimented with shared-risk commercial structures since the late medieval period. Before 1600, however, no European state had attempted to underwrite global colonization with private investor capital at scale.",
    thesis:
      "Although precursors of pooled commercial capital existed in the late medieval period, ultimately the post-1600 period transformed Atlantic and Indian Ocean economies because joint-stock corporations like the VOC and EIC let states scale colonization globally — restructuring local economies, religion, and labor wherever they operated.",
  },

  "u4-bi6": {
    leadUp:
      "Resistance to imperial authority was as old as imperial authority itself — Spartacus's revolt in Rome, the Yellow Turban Rebellion in Han China, peasant uprisings across medieval Europe. By 1450 colonized peoples and enslaved Africans had centuries of religious, ethnic, and class-based resistance traditions to draw on.",
    thesis:
      "Although resistance to imposed power had ancient precedents, ultimately the period 1450–1750 saw new and far-reaching forms of revolt because European empires imposed labor systems, religions, and political structures on a global scale, generating rebellions that drew on the same religious and political ideologies the colonizers themselves had introduced.",
  },

  "u4-bi7": {
    leadUp:
      "Pre-conquest American societies had their own steep social hierarchies — the Aztec ranked tributary system, Inca aristocratic ranks. China's Confucian civil-service exam had been a fixture of social mobility for over a thousand years. Before 1450, social rank was almost everywhere a function of birth, wealth, or office.",
    thesis:
      "Although hierarchical social organization was nothing new, ultimately the period 1450–1750 reshaped social categories worldwide because conquering powers layered new race-based legal hierarchies (like the casta system) on top of existing structures, while continuing earlier institutions like the Confucian exam under new dynasties.",
  },

  // =========================================================================
  // UNIT 5 — Revolutions (1750–1900)
  // =========================================================================
  "u5-bi1": {
    leadUp:
      "Enlightenment thinking grew out of more than a century of European intellectual ferment. The Scientific Revolution of the 1600s (Newton, Galileo) had shifted authority from religious tradition toward empirical observation. Hobbes's Leviathan, Aristotelian + Christian political philosophy, and the English constitutional tradition had laid the groundwork for thinking about consent and the basis of government.",
    thesis:
      "Although the intellectual roots of Enlightenment political thought stretched back well over a century, ultimately the period 1750–1900 produced sweeping reform and revolution because Enlightenment writers (Locke, Rousseau) translated empirical reasoning into a doctrine of natural rights that could be deployed to justify abolition, suffrage, and the overthrow of monarchies.",
  },

  "u5-bi2": {
    leadUp:
      "By 1750, Enlightenment ideas were spreading through coffeehouses, pamphlets, and salons across Europe and into colonies. Britain's Glorious Revolution of 1688 had already established a constitutional monarchy with a Bill of Rights. Atlantic colonies were growing economically integrated but politically subordinate, and rising nationalism among colonized populations was sharpening resentment of repressive metropolitan policies.",
    thesis:
      "Although Atlantic colonial grievances had been building for decades, ultimately the period 1750–1825 produced a chain of revolutions because Enlightenment natural-rights theory gave activists a shared ideological framework to challenge colonial and monarchical rule — a framework copied from one revolution to the next, from Philadelphia to Paris to Saint-Domingue.",
  },

  "u5-bi3": {
    leadUp:
      "Britain in the mid-18th century enjoyed a uniquely favorable mix of conditions: a previous Agricultural Revolution (enclosure, seed drill, four-field rotation) had freed labor from the land; concentrated coal and iron deposits sat near navigable rivers and canals; political stability after 1688 protected investor property rights; and Atlantic colonial trade networks supplied raw cotton and consumer markets.",
    thesis:
      "Although Britain's preconditions had been assembling for over a century, ultimately the period 1750–1900 produced an industrial revolution that began in Britain because the convergence of cheap coal, abundant capital, displaced rural labor, and colonial supply chains made factory-based mass production newly feasible at scale.",
  },

  "u5-bi4": {
    leadUp:
      "Once Britain industrialized, every other major state faced a strategic problem: catch up or be eclipsed. By the mid-19th century, British steam-powered manufacturing was outpricing artisan production in India, the Ottoman Empire, and Qing China, while British and French gunboats were demonstrating military superiority. Russia was still semi-feudal, and Tokugawa Japan had spent two centuries in deliberate isolation.",
    thesis:
      "Although industrialization spread very unevenly across the world, ultimately the period 1750–1900 saw global manufacturing shares shift dramatically toward the West because some states (Britain, the US, Japan after Meiji) successfully adopted industrial methods, while others (India, the Ottomans) were partially de-industrialized by tariffs and competition.",
  },

  "u5-bi5": {
    leadUp:
      "By the 1860s the first Industrial Revolution had laid down a transportation, manufacturing, and scientific infrastructure that the next generation would build on. Coal-fired steam, mechanized textiles, and rail networks were already reshaping daily life, and capital-intensive scientific research was beginning to professionalize in places like Germany and the United States.",
    thesis:
      "Although the Second Industrial Revolution built on the first IR's foundations, ultimately the period 1870–1900 fundamentally changed manufacturing because steel, oil, internal combustion, electricity, and the telegraph created national-scale markets and a categorical leap in productive and communicative capacity.",
  },

  "u5-bi6": {
    leadUp:
      "Adam Smith's 1776 Wealth of Nations had argued for free-market capitalism over mercantilism, but for decades most European states continued to enforce protective tariffs and chartered monopolies. By the early 19th century, however, industrialized economies were producing surpluses that mercantilist trade restrictions made it harder to sell, and Ricardo's theories of comparative advantage were sharpening Smith's argument.",
    thesis:
      "Although Smith had written nearly a century earlier, ultimately the period 1850–1900 institutionalized free-market capitalism because industrial productivity made trade liberalization more profitable than mercantilism — repealing the Corn Laws, scaling transnational corporations, and producing visibly higher standards of living for an expanding middle class.",
  },

  "u5-bi7": {
    leadUp:
      "Industrial capitalism by the 1830s had visibly produced both wealth for owners and brutal conditions for workers — long hours, child labor, urban slums. Older guild traditions had collapsed, leaving workers without traditional protections, and the 1848 wave of European revolutions had already demonstrated that industrial-era political pressure was building.",
    thesis:
      "Although the costs of industrialization were unmistakable from the start, ultimately the period 1830–1900 produced a wide range of reform responses — labor unions, Marxist socialism, Tanzimat-style modernization — because the contradictions of industrial capitalism forced states and movements alike to invent new institutions to manage them.",
  },

  // =========================================================================
  // UNIT 6 — Consequences of Industrialization (1750–1900)
  // =========================================================================
  "u6-bi1": {
    leadUp:
      "European empires had been growing in the Americas and along Asian coasts for over 250 years before 1750. Mercantilist colonization had focused mostly on coastal trading posts and plantation islands. The Enlightenment had introduced ideas about universal human progress, while pseudo-scientific racial hierarchy was beginning to congeal in late-18th-century European thought.",
    thesis:
      "Although imperialism was nothing new in 1750, ultimately the period 1750–1900 saw a categorical wave of new imperialism because Social Darwinism, the 'civilizing mission,' nationalism, and Second Industrial Revolution demand for raw materials combined to fuel territorial conquest at a scale and ideology earlier empires hadn't possessed.",
  },

  "u6-bi2": {
    leadUp:
      "Older European empires had used a mix of charter companies (the British and Dutch East India Companies), direct crown rule, and trading-post networks. The Spanish and Portuguese empires had peaked in the 17th and early 18th centuries and were in steady decline. Industrialization meanwhile was producing a new generation of imperial powers — Germany, Belgium, the United States, Japan — eager for colonies of their own.",
    thesis:
      "Although European powers had long used varied methods of imperial control, ultimately the period 1750–1900 introduced new patterns of consolidation because crises like the Sepoy Rebellion forced state takeovers of charters, while the Berlin Conference and the Spanish-American War showed new imperial powers carving up Africa and Asia in entirely new ways.",
  },

  "u6-bi3": {
    leadUp:
      "Resistance to colonial rule was already old by 1750. The Andes had seen indigenous uprisings since the Spanish conquest; Chinese peasants had rebelled against various dynasties; subjects of the Ottoman Empire had pushed back against centralizing reforms. Each colonized region had decades-old traditions of religious and political resistance to draw on.",
    thesis:
      "Although colonial resistance was a long-running pattern, ultimately the period 1750–1900 saw a distinctive new wave of resistance because new imperialism — more invasive economically, racially, and culturally — produced direct rebellions, the creation of new nation-states (Greece, Serbia), and religiously-inspired millenarian movements like the Ghost Dance.",
  },

  "u6-bi4": {
    leadUp:
      "Cash-crop agriculture in colonized regions had precedents in earlier sugar plantations of the Caribbean and Brazil and the spice plantations of the Dutch East Indies, where local economies were already partly oriented toward European markets. Older plantation economies had long depended on coerced labor; what was changing by 1850 was the scale of European industrial demand.",
    thesis:
      "Although cash-crop colonization was nothing new, ultimately the period 1750–1900 transformed the global economy because Second Industrial Revolution demand for rubber, coffee, sugar, and cotton converted subsistence farmers across Latin America, Africa, and Asia into export producers serving Europe's industrial cities.",
  },

  "u6-bi5": {
    leadUp:
      "Western states had been imposing unequal terms on weaker non-European powers since the 18th century — through the capitulations system in the Ottoman Empire, the British East India Company's manipulations in India, and rising Western military superiority everywhere. By the early 19th century the gap between industrial and non-industrial economies was wide enough that economic leverage could substitute for direct annexation.",
    thesis:
      "Although Western economic leverage over weaker states was already a pattern, ultimately the period 1750–1900 perfected economic imperialism as a distinct strategy because industrial powers could now use unequal treaties, opium-fueled trade deficits, and 'spheres of influence' to extract resources from places like China and Latin America without paying the costs of formal colonization.",
  },

  "u6-bi6": {
    leadUp:
      "Long-distance migration was old — but the slave trade had supplied much of the Atlantic labor force for centuries. After Britain abolished the slave trade in 1807 and slavery in 1833, industrializing economies still needed cheap labor for plantations, mines, and railroads, while accelerating industrialization in places like China and India was disrupting local livelihoods.",
    thesis:
      "Although migration is one of the oldest human patterns, ultimately the period 1750–1900 produced unprecedented global labor flows because abolition + industrial demand + colonial reorganization pulled millions of Chinese and Indian indentured workers, European migrants, and convicts across oceans, often to face new racist immigration laws on arrival.",
  },

  // =========================================================================
  // UNIT 7 — Global Conflict (1900–1945)
  // =========================================================================
  "u7-bi1": {
    leadUp:
      "By 1900, several major states were under massive accumulated pressure. Russia was an autocracy with a backward economy, fresh from defeats in the Crimean and Russo-Japanese wars. Qing China had been weakened by the Taiping (1850–64) and Boxer rebellions plus decades of unequal treaties. Mexico had lived under Porfirio Díaz's authoritarian regime for over thirty years, with deep wealth and land inequality.",
    thesis:
      "Although these tensions had been building for decades, ultimately the period 1900–1920 produced cascading state changes — the Russian Revolution, the fall of the Qing, the Mexican Revolution — because internal grievances combined with industrial-era external pressures to make existing regimes politically unsustainable.",
  },

  "u7-bi2": {
    leadUp:
      "Several long-term tensions had been building in Europe since 1871. German unification had upset the European balance of power. Industrial competition produced an arms race after 1890. Imperial competition created repeated near-confrontations in Morocco and the Balkans. The 1907 Triple Entente and the existing Triple Alliance had locked every great power into mutual-defense commitments. Nationalism across Eastern Europe was sharpening calls for independence.",
    thesis:
      "Although war between Europe's great powers had been waiting for a trigger for decades, ultimately the period 1914–1918 turned those structural tensions into world war because the alliance system + militarism + imperial competition + nationalism combined with the Sarajevo assassination to remove every off-ramp.",
  },

  "u7-bi3": {
    leadUp:
      "Industrial wars of the mid-19th century — the American Civil War, the Crimean War, the Franco-Prussian War — had foreshadowed mass-produced weapons, mass conscription, and rail-based logistics. By 1914, fully industrial economies could mass-produce machine guns, artillery, and chemical weapons at unprecedented scale, while propaganda techniques and mass-press culture were maturing alongside.",
    thesis:
      "Although total-war elements had appeared in earlier industrial conflicts, ultimately the period 1914–1918 produced a categorically new kind of war because every belligerent state mobilized its full economy, deployed propaganda to its civilian population, and unleashed industrial weapons that locked the Western Front into a four-year stalemate.",
  },

  "u7-bi4": {
    leadUp:
      "Before 1914, most major economies operated on roughly laissez-faire principles. WWI itself had pulled most belligerent governments into massive temporary state direction of their economies — wage controls, rationing, war-bond drives — but afterward governments largely tried to return to the prewar norm. The 1929 Wall Street crash made that impossible.",
    thesis:
      "Although large-scale state intervention had begun temporarily during WWI, ultimately the period after 1929 made government economic management permanent because the Great Depression's severity discredited laissez-faire and forced wildly different responses — the New Deal, Nazi economic policy, Stalin's Five-Year Plans — that all featured the state managing the economy directly.",
  },

  "u7-bi5": {
    leadUp:
      "By the 1930s, Europe was struggling under the consequences of WWI's unsustainable peace. The Treaty of Versailles had imposed a war-guilt clause, massive reparations, and territorial losses on Germany. Weimar hyperinflation had wiped out middle-class savings, and the Great Depression had then crippled what remained of the German economy. Britain and France, exhausted by WWI, had little appetite for new conflict.",
    thesis:
      "Although the conditions for renewed war had been accumulating since 1919, ultimately the period 1933–1939 produced WWII because the unsustainable peace + economic crisis + the rise of fascist regimes combined with British and French appeasement to embolden Hitler's escalating aggression up to and including the invasion of Poland.",
  },

  "u7-bi6": {
    leadUp:
      "WWI had introduced industrial total-war mobilization, propaganda, civilian targeting, and chemical weapons. The interwar decades saw further refinement of military technology, including airplanes, tanks, and (secretly) atomic physics. By 1939 the major powers had a clearer picture than in 1914 of just how much industrial economies could be repurposed for war.",
    thesis:
      "Although WWII built directly on WWI's total-war template, ultimately the period 1939–1945 reached an even greater scale because participants now systematically deployed full industrial economies, mobilized civilian populations including women, and ended the war with new categorical weapons — firebombing of cities and the atomic bomb.",
  },

  "u7-bi7": {
    leadUp:
      "By the early 20th century, modern states had developed the bureaucratic capacity to track, register, and move populations on an industrial scale — capacity unimaginable before the 19th century. The Armenian Genocide (1915–23) under the Ottomans had already shown how that administrative capacity could be turned to systematic destruction of a population. Pseudo-scientific racial hierarchy and ideological revolutionary movements were maturing across Europe.",
    thesis:
      "Although state-sponsored mass killings had earlier precedents, ultimately the period 1915–1945 industrialized genocide because totalitarian regimes — Nazi Germany and Stalin's USSR — combined modern administrative capacity, ideological frameworks, and full state control of communications and transportation to attempt the systematic destruction of entire peoples.",
  },

  // =========================================================================
  // UNIT 8 — Cold War + Decolonization (1945–1991)
  // =========================================================================
  "u8-bi1": {
    leadUp:
      "Cold War tensions predated WWII. The Bolshevik Revolution of 1917 had created the world's first communist state, ideologically opposed to capitalism. Western intervention in the Russian Civil War (1918–22) and US refusal to recognize the USSR until 1933 had produced deep Soviet mistrust. WWII alliance was a marriage of convenience against Hitler — and as Allied victory approached, disagreements over post-war Eastern Europe were already visible at Yalta and Potsdam.",
    thesis:
      "Although the wartime US-USSR alliance had been useful against the Nazis, ultimately the period 1945–1991 produced four decades of Cold War because deep ideological mistrust + disputes over post-war Europe + the rise of nuclear weapons turned the rivalry into a global structural conflict shaping every continent.",
  },

  "u8-bi2": {
    leadUp:
      "By the 1950s the US and USSR had both built nuclear arsenals capable of destroying each other. The 1949 Soviet atomic test had ended the brief American monopoly; by the early 1960s both sides had hydrogen bombs and intercontinental delivery systems. Decolonization, accelerating after 1945, was creating dozens of new states whose alignment was up for grabs.",
    thesis:
      "Although direct US-Soviet conflict was suicidal under Mutually Assured Destruction, ultimately the period 1945–1991 saw rivalry play out through arms races, formal alliances (NATO, Warsaw Pact), and proxy wars from Korea to Vietnam to Nicaragua to Angola, because superpower competition had to find some outlet that didn't risk nuclear annihilation.",
  },

  "u8-bi3": {
    leadUp:
      "Communist organizing in China grew out of decades of revolutionary turmoil. The Qing dynasty had fallen in 1911, replaced by warlord chaos. The Chinese Communist Party, founded in 1921, survived Chiang Kai-shek's Nationalist persecution and the Japanese occupation, building a peasant-based revolutionary tradition through the Long March and rural base-building. By 1945 the CCP had won mass support among the peasantry.",
    thesis:
      "Although Mao's path took decades to walk, ultimately the period 1945–1976 made China the most consequential communist state in the world because the CCP's distinct peasant-based revolution and Mao's economic plans (collectivization, Great Leap Forward, Cultural Revolution) reshaped a fifth of humanity along communist lines.",
  },

  "u8-bi4": {
    leadUp:
      "Anti-colonial nationalism had been organizing for decades. The Indian National Congress was founded in 1885; African and Vietnamese nationalist movements had emerged before WWI. Colonial troops and workers had served in both world wars, expecting political reward. By 1945 Britain and France emerged from WWII economically and politically depleted, while the US and USSR — both rhetorically anti-colonial — had become the dominant powers.",
    thesis:
      "Although nationalist movements had been organizing for many decades, ultimately the period 1945–1975 produced a sweeping wave of decolonization because post-WWII conditions — weakened metropoles, anti-colonial superpower rhetoric, and mature nationalist movements — combined to win independence through both negotiation (India) and armed struggle (Algeria).",
  },

  "u8-bi5": {
    leadUp:
      "Imperial powers had been drawing arbitrary borders for over a century before decolonization began. The Berlin Conference of 1884–85 had carved up Africa with no African input, ignoring ethnic, linguistic, and political realities. The post-WWI Mandate system had assigned Ottoman Arab territories to Britain and France, including Mandate Palestine. Many of these borders remained intact as decolonization began in 1945.",
    thesis:
      "Although bad colonial-era borders had been waiting to fail since the late 19th century, ultimately the period 1945–1991 saw decolonization-era boundary changes produce new violent conflicts and refugee crises, because partitioning along religious or ethnic lines (India/Pakistan, Israel/Palestine) often relocated rather than resolved underlying tensions.",
  },

  "u8-bi6": {
    leadUp:
      "Most colonized economies had been organized for decades to serve the metropole — single-crop exports, low-value manufacturing, weak local institutions. Newly independent governments inherited that distorted economic structure along with a deep distrust of both former colonizers and Western capital. The Bretton Woods system (1944) had created an international economic framework, but Cold War competition gave new states leverage.",
    thesis:
      "Although the post-colonial economic situation was fundamentally constrained by colonial-era structures, ultimately the period 1945–1991 saw newly independent governments take strong directing roles because colonial extraction patterns and Cold War competition pushed them toward state-led models — nationalizations like Nasser's Suez, India's Green Revolution — to assert economic sovereignty.",
  },

  "u8-bi7": {
    leadUp:
      "Mass nonviolent and armed resistance traditions had deep roots. Hindu and Jain ahimsa traditions, Tolstoyan Christian pacifism, and Western suffragette tactics had been combined and re-combined for over a century. Anti-colonial organizations like the African National Congress (founded 1912) had decades of mass-mobilization experience by the time apartheid solidified after WWII.",
    thesis:
      "Although traditions of mass political resistance were old, ultimately the period 1945–1991 produced a string of transformative movements because Gandhi, MLK, and Mandela synthesized those traditions into mass civil-disobedience campaigns powerful enough to force British withdrawal from India, end Jim Crow segregation, and dismantle South African apartheid.",
  },

  "u8-bi8": {
    leadUp:
      "By the late 1970s the Soviet Union faced mounting economic stagnation. Reagan-era US defense spending was forcing Soviet finances into an unaffordable budget race. The 1979 Soviet invasion of Afghanistan was becoming a long, expensive military quagmire as US, Pakistani, and Saudi support for Mujahideen rebels stretched the war out for years.",
    thesis:
      "Although Soviet economic and military weakness had been building for over a decade, ultimately the period 1985–1991 brought the Cold War to a sudden end because Gorbachev's perestroika and glasnost reforms — combined with his refusal to use force to keep Eastern European satellites in line — accelerated the unraveling that culminated in the fall of the Berlin Wall and the dissolution of the USSR.",
  },
};

export function contextualizationFor(ideaId: string): Contextualization | null {
  return contextualizations[ideaId] ?? null;
}
