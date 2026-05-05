"use client";

import { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { events } from "@/lib/data/events";
import { regions } from "@/lib/data/regions";
import { routesAtYear } from "@/lib/data/tradeRoutes";
import { territoriesAtYear, empireAtCodeAndYear } from "@/lib/data/empires";
import { categoryFor } from "@/lib/data/eventCategories";
import { poisAtYear, pois as allPois } from "@/lib/data/pois";
import YearScrubber from "@/components/YearScrubber";
import InfoPopover, { type InfoSelection } from "@/components/InfoPopover";
import type { EventMarker } from "@/components/Globe";
import type { TradeRoute, HistoricalEvent } from "@/lib/types";

const Globe = dynamic(() => import("@/components/Globe"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 grid place-items-center" role="status">
      <div className="text-center" style={{ color: "var(--text-dim)" }}>
        <div className="eyebrow">Loading globe</div>
      </div>
    </div>
  ),
});

const VISIBILITY_PADDING = 5;

// Events that paint the map automatically when the year falls in their range.
// Shorter-range items win when ranges overlap (e.g. Cuban Missile beats Cold War in 1962).
const AUTO_HIGHLIGHT_IDS = [
  "wwi",
  "wwii",
  "black-death",
  "cold-war-alliances",
  "cuban-missile",
  "korean-war",
  "vietnam-war",
];

function pickAutoHighlight(year: number): HistoricalEvent | null {
  let best: HistoricalEvent | null = null;
  let bestRange = Infinity;
  for (const id of AUTO_HIGHLIGHT_IDS) {
    const e = events.find((ev) => ev.id === id);
    if (!e || !e.highlight) continue;
    const start = e.year;
    const end = e.endYear ?? e.year;
    if (year >= start && year <= end) {
      const range = end - start;
      if (range < bestRange) {
        best = e;
        bestRange = range;
      }
    }
  }
  return best;
}

import { heimlerUnits, type HeimlerUnit } from "@/lib/data/heimlerUnits";

export default function GlobeStage() {
  const [year, setYear] = useState(1325);
  const [selection, setSelection] = useState<InfoSelection | null>(null);

  const activeRoutes = useMemo(() => routesAtYear(year), [year]);
  const territories = useMemo(() => territoriesAtYear(year), [year]);
  const visiblePois = useMemo(() => poisAtYear(year), [year]);

  // Auto-pick a war/disaster highlight based on year.
  const autoEvent = useMemo(() => pickAutoHighlight(year), [year]);

  // Manual selection of an event with a highlight beats auto.
  const overrideEvent: HistoricalEvent | null =
    selection?.kind === "event" && selection.event.highlight
      ? selection.event
      : autoEvent;
  const overrideHighlight = overrideEvent?.highlight ?? null;

  const countryColors = useMemo(() => {
    if (overrideHighlight && (overrideHighlight.splits || overrideHighlight.countryCodes)) {
      const m = new Map<string, string>();
      if (overrideHighlight.splits) {
        for (const s of overrideHighlight.splits) {
          for (const code of s.countryCodes) m.set(code, s.color);
        }
      }
      if (overrideHighlight.countryCodes) {
        const c = overrideHighlight.color ?? "#fde68a";
        for (const code of overrideHighlight.countryCodes) {
          if (!m.has(code)) m.set(code, c);
        }
      }
      return m;
    }
    const m = new Map<string, string>();
    for (const t of territories) {
      for (const code of t.countryCodes) m.set(code, t.empire.color);
    }
    return m;
  }, [overrideHighlight, territories]);

  const countryLabels = useMemo(() => {
    if (overrideHighlight && (overrideHighlight.splits || overrideHighlight.countryCodes)) {
      const m = new Map<string, string>();
      if (overrideHighlight.splits) {
        for (const s of overrideHighlight.splits) {
          for (const code of s.countryCodes) m.set(code, s.label);
        }
      }
      if (overrideHighlight.countryCodes) {
        const label = overrideEvent?.title ?? "Highlighted";
        for (const code of overrideHighlight.countryCodes) {
          if (!m.has(code)) m.set(code, label);
        }
      }
      return m;
    }
    const m = new Map<string, string>();
    for (const t of territories) {
      for (const code of t.countryCodes) m.set(code, t.empire.name);
    }
    return m;
  }, [overrideHighlight, territories, overrideEvent]);

  const eventMarkers = useMemo<EventMarker[]>(() => {
    const out: EventMarker[] = [];
    for (const e of events) {
      const start = e.year;
      const end = e.endYear ?? e.year + VISIBILITY_PADDING;
      if (year < start || year > end) continue;
      const region = regions.find((r) => r.id === e.regionIds[0]);
      if (!region) continue;
      let h = 0;
      for (let i = 0; i < e.id.length; i++) h = ((h << 5) - h + e.id.charCodeAt(i)) | 0;
      const a = ((h % 1000) / 1000) * Math.PI * 2;
      const r = 1.6;
      out.push({
        id: e.id,
        lat: region.lat + Math.sin(a) * r,
        lng: region.lng + Math.cos(a) * r,
        year: e.year,
        endYear: e.endYear,
        title: e.title,
        category: categoryFor(e.id),
      });
    }
    return out;
  }, [year]);

  function selectCountry(code: string, name: string) {
    // If the map is currently auto-highlighting a war / alliance event,
    // a country click opens that event's full details.
    if (autoEvent && !selection) {
      setSelection({ kind: "event", event: autoEvent });
      return;
    }
    const empire = empireAtCodeAndYear(code, year);
    if (!empire) return;
    setSelection({ kind: "empire", empire, year, countryName: name, countryCode: code });
  }
  function selectRoute(route: TradeRoute) {
    setSelection({ kind: "route", route, year });
  }
  function selectEvent(eventId: string) {
    const ev = events.find((e) => e.id === eventId);
    if (ev) setSelection({ kind: "event", event: ev });
  }
  function selectPOI(poiId: string) {
    const p = allPois.find((x) => x.id === poiId);
    if (p) setSelection({ kind: "poi", poi: p, year });
  }
  function selectUnit(unit: HeimlerUnit) {
    setYear(unit.centerYear);
    setSelection({ kind: "unit", unit });
  }

  return (
    <div className="fixed inset-0 flex flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 btn btn-primary"
      >
        Skip to map
      </a>

      <header
        className="flex items-center justify-between gap-4 px-4 md:px-6 py-2.5 z-30 relative flex-shrink-0"
        style={{ borderBottom: "1px solid var(--border-soft)", background: "var(--bg)" }}
      >
        <h1 className="font-display t-20">AP World Studier</h1>
        <span className="eyebrow" style={{ color: "var(--text-dim)" }}>
          Heimler follow-along
        </span>
      </header>

      <main id="main" className="flex-1 relative">
        <Globe
          routes={activeRoutes}
          countryColors={countryColors}
          countryLabels={countryLabels}
          events={eventMarkers}
          pois={visiblePois}
          eventPins={overrideEvent?.highlight?.pins ?? []}
          onSelectCountry={selectCountry}
          onSelectRoute={selectRoute}
          onSelectEvent={selectEvent}
          onSelectPOI={selectPOI}
        />

        {/* Subtle indicator when an auto-highlight is painting the map */}
        {autoEvent && !selection && (
          <button
            onClick={() => selectEvent(autoEvent.id)}
            className="absolute top-3 left-3 z-10 surface px-3 py-1.5 t-12 hover:brightness-110 transition"
            style={{ color: "var(--text-muted)" }}
            title="Click for details"
          >
            <span className="eyebrow mr-2">showing</span>
            <span className="font-display" style={{ color: "var(--text)" }}>
              {autoEvent.title}
            </span>
            <span className="ml-2" style={{ color: "var(--text-dim)" }}>
              {autoEvent.year}
              {autoEvent.endYear ? `–${autoEvent.endYear}` : ""}
            </span>
          </button>
        )}

        {selection && (
          <div
            className="fixed top-3 right-3"
            style={{ zIndex: 9999 }}
          >
            <InfoPopover selection={selection} onClose={() => setSelection(null)} />
          </div>
        )}
      </main>

      <footer
        className="flex-shrink-0 z-20 px-4 md:px-6 pb-3 pt-2"
        style={{ background: "linear-gradient(to top, var(--bg) 70%, transparent)" }}
      >
        <UnitStrip
          year={year}
          activeUnit={selection?.kind === "unit" ? selection.unit.unitNumber : null}
          onSelect={selectUnit}
        />
        <div className="h-2" />
        <YearScrubber year={year} onChange={setYear} />
      </footer>
    </div>
  );
}

function UnitStrip({
  year,
  activeUnit,
  onSelect,
}: {
  year: number;
  activeUnit: number | null;
  onSelect: (u: HeimlerUnit) => void;
}) {
  const TIMELINE_MIN = 1200;
  const TIMELINE_MAX = 2025;
  const span = TIMELINE_MAX - TIMELINE_MIN;
  return (
    <div
      className="surface px-3 py-2"
      role="group"
      aria-label="Heimler units"
    >
      <div className="flex items-baseline justify-between gap-3 mb-1.5">
        <div className="eyebrow" style={{ color: "var(--text-dim)" }}>
          Heimler · 9 units
        </div>
        <div className="t-12" style={{ color: "var(--text-dim)" }}>
          Tap a unit to load its world
        </div>
      </div>
      <div className="relative h-7">
        <div
          aria-hidden
          className="absolute left-0 right-0 top-1/2 h-px"
          style={{ background: "var(--border-soft)" }}
        />
        {heimlerUnits.map((u) => {
          const left = ((u.centerYear - TIMELINE_MIN) / span) * 100;
          const inRange = year >= u.yearStart && year <= u.yearEnd;
          const isActive = activeUnit === u.unitNumber;
          return (
            <button
              key={u.unitNumber}
              onClick={() => onSelect(u)}
              className="absolute -translate-x-1/2 top-0 bottom-0 flex flex-col items-center justify-center gap-0.5"
              style={{ left: `${left}%` }}
              aria-label={`Open Unit ${u.unitNumber}: ${u.title}`}
              title={`Unit ${u.unitNumber}: ${u.title} (${u.yearStart}–${u.yearEnd})`}
            >
              <span
                aria-hidden
                className="block rounded-full transition-all"
                style={{
                  width: isActive ? 14 : inRange ? 11 : 9,
                  height: isActive ? 14 : inRange ? 11 : 9,
                  background: isActive ? u.accent : inRange ? u.accent : "var(--bg)",
                  border: `2px solid ${u.accent}`,
                  boxShadow: isActive
                    ? `0 0 0 4px color-mix(in oklch, ${u.accent} 28%, transparent)`
                    : "none",
                }}
              />
              <span
                className="t-12 font-display"
                style={{
                  color: isActive
                    ? "var(--text)"
                    : inRange
                      ? "var(--text-muted)"
                      : "var(--text-dim)",
                  fontSize: 10,
                  lineHeight: 1,
                }}
              >
                U{u.unitNumber}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
