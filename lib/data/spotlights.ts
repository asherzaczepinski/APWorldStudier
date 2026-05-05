// Visual moments from the AP World CED — what shows up on the globe
// when the user is in the right place at the right time.

export type SpotlightEffect = "gold" | "silver" | "slave" | "nuke" | "ships" | "plague";

export type Spotlight = {
  id: string;
  title: string;
  blurb: string; // AP-style one-liner
  yearStart: number;
  yearEnd: number;
  periodId: string;
  effect: SpotlightEffect;
  lat: number;
  lng: number;
  cityId?: string;
};

export const spotlights: Spotlight[] = [
  {
    id: "mansa-musa",
    title: "Mansa Musa's hajj",
    blurb: "1324 pilgrimage to Mecca; gold spending crashed Cairo's currency for years.",
    yearStart: 1324,
    yearEnd: 1325,
    periodId: "p1",
    effect: "gold",
    lat: 16.78,
    lng: -3.0,
    cityId: "timbuktu",
  },
  {
    id: "black-death",
    title: "Black Death",
    blurb: "Plague spread along Mongol trade routes; killed ~1/3 of Europe.",
    yearStart: 1347,
    yearEnd: 1351,
    periodId: "p1",
    effect: "plague",
    lat: 41.9,
    lng: 12.5,
  },
  {
    id: "potosi-silver",
    title: "Potosí silver",
    blurb: "1545– world's largest silver mine; American silver fueled Ming China's economy.",
    yearStart: 1545,
    yearEnd: 1700,
    periodId: "p2",
    effect: "silver",
    lat: -19.58,
    lng: -65.75,
    cityId: "potosi",
  },
  {
    id: "atlantic-slave",
    title: "Atlantic slave trade",
    blurb: "~12.5 million Africans shipped to the Americas via the Middle Passage.",
    yearStart: 1500,
    yearEnd: 1850,
    periodId: "p2",
    effect: "slave",
    lat: 0,
    lng: -25,
  },
  {
    id: "manila-galleon",
    title: "Manila Galleon",
    blurb: "Acapulco–Manila silver-for-silk trade ran 250 years.",
    yearStart: 1565,
    yearEnd: 1815,
    periodId: "p2",
    effect: "ships",
    lat: 14.6,
    lng: 120.98,
    cityId: "manila",
  },
  {
    id: "cold-war-arms",
    title: "Cold War arms race",
    blurb: "US and USSR stockpile peaks at ~70k warheads in 1986.",
    yearStart: 1945,
    yearEnd: 1991,
    periodId: "p4",
    effect: "nuke",
    lat: 50,
    lng: 0,
  },
];

export function spotlightsForPeriod(periodId: string, year: number): Spotlight[] {
  return spotlights.filter(
    (s) => s.periodId === periodId && year >= s.yearStart && year <= s.yearEnd
  );
}

// US/USSR (then Russia) nuclear stockpile by year — public estimates from FAS/SIPRI.
export const coldWarStockpile: Array<{ year: number; us: number; ussr: number }> = [
  { year: 1945, us: 6, ussr: 0 },
  { year: 1949, us: 235, ussr: 1 },
  { year: 1955, us: 2422, ussr: 200 },
  { year: 1960, us: 18638, ussr: 1605 },
  { year: 1965, us: 31139, ussr: 6129 },
  { year: 1970, us: 26008, ussr: 11643 },
  { year: 1975, us: 27519, ussr: 19055 },
  { year: 1980, us: 24304, ussr: 30062 },
  { year: 1986, us: 23317, ussr: 45000 }, // peak
  { year: 1990, us: 21392, ussr: 35993 },
  { year: 1995, us: 12000, ussr: 27000 },
  { year: 2000, us: 10577, ussr: 21500 },
  { year: 2010, us: 5113, ussr: 11000 },
  { year: 2020, us: 3750, ussr: 6375 },
];

export function stockpileAtYear(year: number): { us: number; ussr: number; year: number } {
  if (year <= coldWarStockpile[0].year) return coldWarStockpile[0];
  if (year >= coldWarStockpile[coldWarStockpile.length - 1].year)
    return coldWarStockpile[coldWarStockpile.length - 1];

  for (let i = 0; i < coldWarStockpile.length - 1; i++) {
    const a = coldWarStockpile[i];
    const b = coldWarStockpile[i + 1];
    if (year >= a.year && year <= b.year) {
      const t = (year - a.year) / (b.year - a.year);
      return {
        year,
        us: Math.round(a.us + (b.us - a.us) * t),
        ussr: Math.round(a.ussr + (b.ussr - a.ussr) * t),
      };
    }
  }
  return coldWarStockpile[0];
}
