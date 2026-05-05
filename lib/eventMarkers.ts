import { events } from "@/lib/data/events";
import { regions } from "@/lib/data/regions";
import { periods } from "@/lib/data/periods";

export type MapEventMarker = {
  id: string;
  year: number;
  endYear?: number;
  title: string;
  description: string;
  significance: string;
  color: string;
  lat: number;
  lng: number;
};

const VISIBILITY_PADDING = 5; // years past a point-in-time event before it disappears
const MAX_AT_ONCE = 8;

// Tiny deterministic offset so events anchored to the same region don't stack on top of each other.
function jitter(seed: string): { lat: number; lng: number } {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = ((h << 5) - h + seed.charCodeAt(i)) | 0;
  const a = ((h % 1000) / 1000) * Math.PI * 2;
  const r = 1.8; // degrees
  return { lat: Math.sin(a) * r, lng: Math.cos(a) * r };
}

export function eventMarkersForYear(year: number): MapEventMarker[] {
  const out: MapEventMarker[] = [];
  for (const e of events) {
    const start = e.year;
    const end = e.endYear ?? e.year + VISIBILITY_PADDING;
    if (year < start || year > end) continue;

    const region = regions.find((r) => r.id === e.regionIds[0]);
    if (!region) continue;
    const j = jitter(e.id);
    const period = periods.find((p) => p.id === e.periodId);
    out.push({
      id: e.id,
      year: e.year,
      endYear: e.endYear,
      title: e.title,
      description: e.description,
      significance: e.significance,
      color: period?.color ?? "#7ac3c4",
      lat: region.lat + j.lat,
      lng: region.lng + j.lng,
    });
  }
  // If too many overlap, prefer the ones whose center is closest to `year`.
  out.sort((a, b) => {
    const da = Math.min(Math.abs(year - a.year), Math.abs(year - (a.endYear ?? a.year)));
    const db = Math.min(Math.abs(year - b.year), Math.abs(year - (b.endYear ?? b.year)));
    return da - db;
  });
  return out.slice(0, MAX_AT_ONCE);
}
