"use client";

import { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { events } from "@/lib/data/events";
import { regions } from "@/lib/data/regions";
import { tradeRoutes } from "@/lib/data/tradeRoutes";
import { empires, type Empire } from "@/lib/data/empires";
import InfoPopover, { type InfoSelection } from "@/components/InfoPopover";
import type { TradeRoute, HistoricalEvent, Region } from "@/lib/types";
import type { HeimlerUnit } from "@/lib/data/heimlerUnits";

const Globe = dynamic(() => import("@/components/Globe"), {
  ssr: false,
  loading: () => <GlobeLoader />,
});

function GlobeLoader() {
  return (
    <div
      className="absolute inset-0 grid place-items-center"
      role="status"
      aria-live="polite"
      style={{ background: "var(--bg)" }}
    >
      <div className="flex flex-col items-center gap-3">
        <div
          style={{
            width: 38,
            height: 38,
            border: "3px solid var(--border-soft)",
            borderTopColor: "var(--text)",
            borderRadius: "50%",
            animation: "spin 0.9s linear infinite",
          }}
        />
        <div className="eyebrow" style={{ color: "var(--text-dim)" }}>
          Loading globe
        </div>
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

type Props = {
  unit: HeimlerUnit;
  onBack: () => void;
};

// Distinct, high-contrast colors used to differentiate regions an event touches.
// Loops if an event hits more regions than colors (very rare).
const REGION_PALETTE = [
  "#f97316", // orange
  "#3b82f6", // blue
  "#22c55e", // green
  "#a855f7", // purple
  "#eab308", // yellow
  "#ec4899", // pink
  "#06b6d4", // cyan
  "#ef4444", // red
  "#14b8a6", // teal
  "#84cc16", // lime
];

export default function HeimlerUnitView({ unit, onBack }: Props) {
  const [selection, setSelection] = useState<InfoSelection | null>(() => ({
    kind: "intro",
    eyebrow: `UNIT ${unit.unitNumber} · ${unit.yearStart}–${unit.yearEnd}`,
    title: unit.title,
    summary: unit.subtitle,
    accent: unit.accent,
    directions: [
      "Click any event in the timeline below to color-code the regions it touches.",
      "Click a country on the globe to see which empire ruled it that year.",
      "Click ★ Full Unit Overview to return to this default view.",
    ],
  }));
  const [activeEventId, setActiveEventId] = useState<string | null>(null);
  const [focusOverride, setFocusOverride] = useState<
    { lat: number; lng: number; altitude: number } | null
  >(null);

  // Aggregate everything from every topic in the unit.
  const aggregated = useMemo(() => {
    const empireIds = new Set<string>();
    const routeIds = new Set<string>();
    const eventIds = new Set<string>();
    for (const t of unit.topics) {
      for (const id of t.empireIds ?? []) empireIds.add(id);
      for (const id of t.routeIds ?? []) routeIds.add(id);
      for (const id of t.eventIds ?? []) eventIds.add(id);
    }
    return {
      empireIds: Array.from(empireIds),
      routeIds: Array.from(routeIds),
      eventIds: Array.from(eventIds),
    };
  }, [unit.topics]);

  const activeEvent = useMemo<HistoricalEvent | null>(() => {
    if (!activeEventId) return null;
    return events.find((e) => e.id === activeEventId) ?? null;
  }, [activeEventId]);

  // The year used for empire phase lookup. Default = unit center; while an
  // event is selected, snap to the event's year so phases match what was
  // actually happening.
  const year = activeEvent?.year ?? unit.centerYear;

  // Default territory paint: every empire mentioned anywhere in the unit, at
  // its phase for the current year.
  const baseTerritories = useMemo(() => {
    const out: { empire: Empire; countryCodes: string[] }[] = [];
    for (const id of aggregated.empireIds) {
      const empire = empires.find((e) => e.id === id);
      if (!empire) continue;
      const phase = empire.phases.find(
        (p) => year >= p.yearStart && year <= p.yearEnd
      );
      const fallback = phase ?? empire.phases[empire.phases.length - 1];
      if (fallback) out.push({ empire, countryCodes: fallback.countryCodes });
    }
    return out;
  }, [aggregated.empireIds, year]);

  // When an event is selected, override coloring with one color per region the
  // event touches, so the user can see the spread visually.
  const eventRegionPaint = useMemo<
    { region: Region; color: string }[]
  >(() => {
    if (!activeEvent) return [];
    return activeEvent.regionIds
      .map((rid, i) => {
        const r = regions.find((x) => x.id === rid);
        if (!r) return null;
        return { region: r, color: REGION_PALETTE[i % REGION_PALETTE.length] };
      })
      .filter((x): x is { region: Region; color: string } => x !== null);
  }, [activeEvent]);

  const countryColors = useMemo(() => {
    const m = new Map<string, string>();
    if (activeEvent) {
      // Region colors first.
      for (const { region, color } of eventRegionPaint) {
        for (const code of region.countryCodes) m.set(code, color);
      }
      // Then any explicit highlight country codes from the event override
      // with the event's chosen color (or keep the region color if set).
      const hl = activeEvent.highlight;
      if (hl?.countryCodes && hl.color) {
        for (const code of hl.countryCodes) m.set(code, hl.color);
      }
      if (hl?.splits) {
        for (const split of hl.splits) {
          for (const code of split.countryCodes) m.set(code, split.color);
        }
      }
      return m;
    }
    for (const t of baseTerritories) {
      for (const code of t.countryCodes) m.set(code, t.empire.color);
    }
    return m;
  }, [activeEvent, eventRegionPaint, baseTerritories]);

  const countryLabels = useMemo(() => {
    const m = new Map<string, string>();
    if (activeEvent) {
      for (const { region } of eventRegionPaint) {
        for (const code of region.countryCodes) m.set(code, region.name);
      }
      return m;
    }
    for (const t of baseTerritories) {
      for (const code of t.countryCodes) m.set(code, t.empire.name);
    }
    return m;
  }, [activeEvent, eventRegionPaint, baseTerritories]);

  const visibleRoutes = useMemo<TradeRoute[]>(
    () =>
      activeEvent
        ? []
        : tradeRoutes.filter((r) => aggregated.routeIds.includes(r.id)),
    [aggregated.routeIds, activeEvent]
  );

  // When the active event has a journey path (Mansa Musa hajj, da Gama,
  // Magellan, etc.), draw it on the globe as elevated animated arcs.
  const eventJourneyRoutes = useMemo<TradeRoute[]>(() => {
    if (!activeEvent?.highlight?.path) return [];
    const pts = activeEvent.highlight.path;
    if (pts.length < 2) return [];
    const color = activeEvent.highlight.color ?? unit.accent;
    return [
      {
        id: `event-journey-${activeEvent.id}`,
        name: activeEvent.title,
        path: pts,
        color,
        // Required-by-type fields we don't actually use for this synthetic route.
        periodIds: [],
        goods: [],
        ideas: [],
        regionIds: [],
        description: activeEvent.description,
        mode: "sea",
        yearStart: activeEvent.year,
        yearEnd: activeEvent.endYear ?? activeEvent.year,
      },
    ];
  }, [activeEvent, unit.accent]);

  // Pins are intentionally not rendered — the journey arc + region color
  // already convey location without cluttering the globe.

  const timelineEntries = useMemo(() => {
    const seen = new Set<string>();
    const out: HistoricalEvent[] = [];
    for (const id of aggregated.eventIds) {
      if (seen.has(id)) continue;
      const ev = events.find((e) => e.id === id);
      if (!ev) continue;
      seen.add(id);
      out.push(ev);
    }
    out.sort(
      (a, b) =>
        a.year - b.year || (a.endYear ?? a.year) - (b.endYear ?? b.year)
    );
    return out;
  }, [aggregated.eventIds]);

  // Camera focus. Override > event highlight focus > unit center fallback.
  const focus = useMemo(() => {
    if (focusOverride) return focusOverride;
    if (activeEvent?.highlight?.focus) return activeEvent.highlight.focus;
    return undefined;
  }, [focusOverride, activeEvent]);

  function selectEvent(ev: HistoricalEvent | null) {
    if (ev === null) {
      // Back to "Full Unit Overview" — clear event, restore unit-wide view.
      setActiveEventId(null);
      setSelection(null);
      setFocusOverride(null);
      return;
    }
    if (activeEventId === ev.id) {
      // Toggle off.
      setActiveEventId(null);
      setSelection(null);
      setFocusOverride(null);
      return;
    }
    setActiveEventId(ev.id);
    setSelection({ kind: "event", event: ev });
    if (ev.highlight?.focus) {
      setFocusOverride(ev.highlight.focus);
    } else if (ev.regionIds.length > 0) {
      const region = regions.find((r) => r.id === ev.regionIds[0]);
      if (region) {
        setFocusOverride({ lat: region.lat, lng: region.lng, altitude: 1.8 });
      } else {
        setFocusOverride(null);
      }
    } else {
      setFocusOverride(null);
    }
  }

  function selectCountry(code: string, name: string) {
    if (activeEvent) {
      // Show the event detail (countries belong to the active event).
      setSelection({ kind: "event", event: activeEvent });
      return;
    }
    for (const t of baseTerritories) {
      if (t.countryCodes.includes(code)) {
        setSelection({
          kind: "empire",
          empire: t.empire,
          year,
          countryName: name,
          countryCode: code,
        });
        return;
      }
    }
  }

  function selectRoute(route: TradeRoute) {
    setSelection({ kind: "route", route, year });
  }

  return (
    <div className="fixed inset-0 flex flex-col">
      <header
        className="flex items-center justify-between gap-4 pl-4 pr-4 md:pl-5 md:pr-6 py-2.5 z-30 relative flex-shrink-0"
        style={{
          borderBottom: "1px solid var(--border-soft)",
          background: "var(--bg)",
        }}
      >
        <div className="flex items-center gap-3 min-w-0">
          <button
            onClick={onBack}
            className="t-12 px-3 py-1.5 rounded-full flex-shrink-0"
            style={{
              border: "1px solid var(--border-soft)",
              color: "var(--text-muted)",
              background: "var(--bg-elev)",
            }}
            aria-label="Back to all units"
          >
            ← All units
          </button>
          <div className="min-w-0">
            <div className="flex items-baseline gap-2">
              <span className="eyebrow flex-shrink-0" style={{ color: unit.accent }}>
                Unit {unit.unitNumber}
              </span>
              <span className="t-12" style={{ color: "var(--text-dim)" }}>
                {unit.yearStart}–{unit.yearEnd}
              </span>
            </div>
            <h1 className="font-display t-20 leading-tight truncate">{unit.title}</h1>
          </div>
        </div>
      </header>

      <main className="flex-1 relative">
        <Globe
          routes={visibleRoutes}
          journeyRoutes={eventJourneyRoutes}
          countryColors={countryColors}
          countryLabels={countryLabels}
          events={[]}
          pois={[]}
          eventPins={[]}
          autoRotate={false}
          focus={focus}
          onSelectCountry={selectCountry}
          onSelectRoute={selectRoute}
          onSelectEvent={() => {}}
          onSelectPOI={() => {}}
        />

        {selection && (
          <div className="fixed top-3 right-3" style={{ zIndex: 9999 }}>
            <InfoPopover
              selection={selection}
              onClose={() => {
                setSelection(null);
                // If the popover was showing the active timeline event, also
                // clear the timeline selection so colors revert to base.
                if (selection.kind === "event" && activeEventId === selection.event.id) {
                  setActiveEventId(null);
                  setFocusOverride(null);
                }
              }}
            />
          </div>
        )}

        {timelineEntries.length > 0 && (
          <UnitTimeline
            entries={timelineEntries}
            activeEventId={activeEventId}
            accent={unit.accent}
            unitStart={unit.yearStart}
            unitEnd={unit.yearEnd}
            onPick={selectEvent}
          />
        )}
      </main>
    </div>
  );
}

function UnitTimeline({
  entries,
  activeEventId,
  accent,
  unitStart,
  unitEnd,
  onPick,
}: {
  entries: HistoricalEvent[];
  activeEventId: string | null;
  accent: string;
  unitStart: number;
  unitEnd: number;
  onPick: (ev: HistoricalEvent | null) => void;
}) {
  const minYear = Math.min(unitStart, ...entries.map((e) => e.year));
  const maxYear = Math.max(
    unitEnd,
    ...entries.map((e) => e.endYear ?? e.year)
  );

  return (
    <div
      className="absolute bottom-0 left-0 right-0"
      style={{
        // Smoother fade so the globe behind the timeline isn't sharply cut off.
        background:
          "linear-gradient(to top, var(--bg) 55%, color-mix(in oklch, var(--bg) 60%, transparent) 80%, transparent)",
        paddingTop: 36,
        zIndex: 25,
      }}
    >
      <div className="surface mx-3 md:mx-4 mb-3 px-3 py-2.5 overflow-x-auto">
        <div className="flex items-baseline justify-between gap-3 mb-1.5">
          <div className="eyebrow" style={{ color: accent }}>
            Unit timeline · {minYear}–{maxYear}
          </div>
        </div>
        <div
          className="flex items-start gap-2"
          role="list"
          aria-label="Unit timeline"
        >
          <button
            onClick={() => onPick(null)}
            role="listitem"
            className="flex-shrink-0 text-left rounded transition hover:brightness-125"
            style={{
              width: 150,
              height: 76,
              padding: 10,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              background: activeEventId === null
                ? `color-mix(in oklch, ${accent} 28%, transparent)`
                : "var(--bg-elev)",
              border: activeEventId === null
                ? `1px solid ${accent}`
                : "1px solid var(--border-soft)",
            }}
            title="Full Unit Overview — everything at once"
          >
            <div className="t-12 font-display" style={{ color: accent }}>
              ★ Overview
            </div>
            <div
              className="t-12 mt-0.5 leading-tight"
              style={{ color: "var(--text)" }}
            >
              Full Unit Overview
            </div>
          </button>
          {entries.map((e) => {
            const isActive = activeEventId === e.id;
            const range =
              e.endYear && e.endYear !== e.year
                ? `${e.year}–${e.endYear}`
                : `${e.year}`;
            return (
              <button
                key={e.id}
                onClick={() => onPick(e)}
                role="listitem"
                className="flex-shrink-0 text-left rounded transition hover:brightness-125"
                style={{
                  width: 150,
                  height: 76,
                  padding: 10,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  transition:
                    "background 180ms ease, border-color 180ms ease, filter 180ms ease, transform 180ms ease",
                  background: isActive
                    ? `color-mix(in oklch, ${accent} 28%, transparent)`
                    : "var(--bg-elev)",
                  border: isActive
                    ? `1px solid ${accent}`
                    : "1px solid var(--border-soft)",
                }}
                title={`${range} · ${e.title}`}
              >
                <div className="t-12 font-display" style={{ color: accent }}>
                  {range}
                </div>
                <div
                  className="t-12 mt-0.5 leading-tight"
                  style={{
                    color: "var(--text)",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {e.title}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
