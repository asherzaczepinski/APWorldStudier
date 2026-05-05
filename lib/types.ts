export type LatLng = { lat: number; lng: number };

export type Period = {
  id: string;
  unit: string;
  name: string;
  startYear: number;
  endYear: number;
  description: string;
  themes: string[];
  color: string;
};

export type Region = {
  id: string;
  name: string;
  lat: number;
  lng: number;
  countryCodes: string[];
  blurb: string;
};

export type RouteMode = "sea" | "land" | "rail" | "modern";

export type TradeRoute = {
  id: string;
  name: string;
  periodIds: string[];
  goods: string[];
  ideas: string[];
  path: LatLng[];
  color: string;
  regionIds: string[];
  description: string;
  mode: RouteMode;
  yearStart: number;
  yearEnd: number;
};

export type HighlightSplit = {
  label: string;
  color: string;
  countryCodes: string[];
};

export type EventHighlight = {
  /** Country ISO A3 codes to colour-fill on the globe. */
  countryCodes?: string[];
  /** Override the highlight tint (otherwise period color). */
  color?: string;
  /** Multiple groups, e.g. US bloc vs Soviet bloc. */
  splits?: HighlightSplit[];
  /** A trade route to thicken/feature. */
  routeId?: string;
  /** Camera target. */
  focus?: { lat: number; lng: number; altitude: number };
  /** Optional point markers (specific cities/places to pulse). */
  pins?: { lat: number; lng: number; label: string; color?: string }[];
  /**
   * A polyline drawn on the surface — for events with a journey or route
   * (Mansa Musa's hajj, da Gama, Magellan, Berlin Airlift, etc.). Drawn with
   * arrow segments showing direction.
   */
  path?: { lat: number; lng: number }[];
};

export type EventCategory =
  | "war"
  | "treaty"
  | "disaster"
  | "discovery"
  | "founding"
  | "religious"
  | "tech"
  | "economic"
  | "independence"
  | "rebellion";

export type HistoricalEvent = {
  id: string;
  year: number;
  endYear?: number;
  periodId: string;
  regionIds: string[];
  title: string;
  description: string;
  significance: string;
  category?: EventCategory;
  /** Bullet-point study facts. Optional. */
  facts?: string[];
  /** Map visualization. Optional — falls back to region tints if absent. */
  highlight?: EventHighlight;
};
