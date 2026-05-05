"use client";

import { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { events } from "@/lib/data/events";
import { regions } from "@/lib/data/regions";
import { periods } from "@/lib/data/periods";
import InfoPopover, { type InfoSelection } from "@/components/InfoPopover";
import type { TradeRoute, HistoricalEvent, Region } from "@/lib/types";
import type { HomeRegion } from "@/lib/data/homeRegions";

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

type Props = {
  region: HomeRegion;
  onBack: () => void;
};

const REGION_PALETTE = [
  "#f97316", "#3b82f6", "#22c55e", "#a855f7", "#eab308",
  "#ec4899", "#06b6d4", "#ef4444", "#14b8a6", "#84cc16",
];

const REGION_ACCENT = "#f59e0b";

export default function HeimlerRegionView({ region, onBack }: Props) {
  const [selection, setSelection] = useState<InfoSelection | null>(null);
  const [activeEventId, setActiveEventId] = useState<string | null>(null);
  const [focusOverride, setFocusOverride] = useState<
    { lat: number; lng: number; altitude: number } | null
  >(null);

  // Every event whose regionIds intersects the macro-region's eventRegionIds.
  const regionEvents = useMemo<HistoricalEvent[]>(() => {
    const set = new Set(region.eventRegionIds);
    return events
      .filter((e) => e.regionIds.some((rid) => set.has(rid)))
      .sort(
        (a, b) =>
          a.year - b.year || (a.endYear ?? a.year) - (b.endYear ?? b.year)
      );
  }, [region.eventRegionIds]);

  // Group events by AP period for timeline section headings.
  const eventsByPeriod = useMemo(() => {
    const groups = new Map<string, HistoricalEvent[]>();
    for (const p of periods) groups.set(p.id, []);
    for (const e of regionEvents) {
      const arr = groups.get(e.periodId);
      if (arr) arr.push(e);
    }
    return groups;
  }, [regionEvents]);

  const activeEvent = useMemo<HistoricalEvent | null>(() => {
    if (!activeEventId) return null;
    return regionEvents.find((e) => e.id === activeEventId) ?? null;
  }, [activeEventId, regionEvents]);

  // Color paint: region in its accent by default; when an event is active,
  // each region the event touches gets its own distinct color.
  const eventRegionPaint = useMemo<{ region: Region; color: string }[]>(() => {
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
      for (const { region: r, color } of eventRegionPaint) {
        for (const code of r.countryCodes) m.set(code, color);
      }
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
    for (const code of region.countryCodes) m.set(code, REGION_ACCENT);
    return m;
  }, [activeEvent, eventRegionPaint, region.countryCodes]);

  const countryLabels = useMemo(() => {
    const m = new Map<string, string>();
    if (activeEvent) {
      for (const { region: r } of eventRegionPaint) {
        for (const code of r.countryCodes) m.set(code, r.name);
      }
      return m;
    }
    for (const code of region.countryCodes) m.set(code, region.name);
    return m;
  }, [activeEvent, eventRegionPaint, region]);

  const eventJourneyRoutes = useMemo<TradeRoute[]>(() => {
    if (!activeEvent?.highlight?.path) return [];
    const pts = activeEvent.highlight.path;
    if (pts.length < 2) return [];
    const color = activeEvent.highlight.color ?? REGION_ACCENT;
    return [
      {
        id: `event-journey-${activeEvent.id}`,
        name: activeEvent.title,
        path: pts,
        color,
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
  }, [activeEvent]);

  // Pins intentionally not rendered.

  const focus = useMemo(() => {
    if (focusOverride) return focusOverride;
    if (activeEvent?.highlight?.focus) return activeEvent.highlight.focus;
    return { lat: region.lat, lng: region.lng, altitude: region.altitude };
  }, [focusOverride, activeEvent, region]);

  function selectEvent(ev: HistoricalEvent | null) {
    if (ev === null) {
      // Back to "Full Region Overview" — clear event, restore region-wide view.
      setActiveEventId(null);
      setSelection(null);
      setFocusOverride(null);
      return;
    }
    if (activeEventId === ev.id) {
      setActiveEventId(null);
      setSelection(null);
      setFocusOverride(null);
      return;
    }
    setActiveEventId(ev.id);
    setSelection({ kind: "event", event: ev });
    if (ev.highlight?.focus) {
      setFocusOverride(ev.highlight.focus);
    } else {
      setFocusOverride(null);
    }
  }

  function selectCountry() {
    if (activeEvent) {
      setSelection({ kind: "event", event: activeEvent });
    }
  }

  function selectRoute(route: TradeRoute) {
    setSelection({ kind: "route", route, year: activeEvent?.year ?? 1500 });
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
            aria-label="Back to home"
          >
            ← Home
          </button>
          <div className="min-w-0">
            <div className="flex items-baseline gap-2">
              <span className="eyebrow flex-shrink-0" style={{ color: REGION_ACCENT }}>
                Region
              </span>
              <span className="t-12" style={{ color: "var(--text-dim)" }}>
                {regionEvents.length} events
              </span>
            </div>
            <h1 className="font-display t-20 leading-tight truncate">{region.name}</h1>
          </div>
        </div>
      </header>

      <main className="flex-1 relative">
        <Globe
          routes={[]}
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
                if (selection.kind === "event" && activeEventId === selection.event.id) {
                  setActiveEventId(null);
                  setFocusOverride(null);
                }
              }}
            />
          </div>
        )}

        {regionEvents.length > 0 && (
          <RegionTimeline
            eventsByPeriod={eventsByPeriod}
            activeEventId={activeEventId}
            onPick={selectEvent}
          />
        )}
      </main>
    </div>
  );
}

function RegionTimeline({
  eventsByPeriod,
  activeEventId,
  onPick,
}: {
  eventsByPeriod: Map<string, HistoricalEvent[]>;
  activeEventId: string | null;
  onPick: (ev: HistoricalEvent | null) => void;
}) {
  // Flatten back to one chronological row, but tag each entry with its period
  // color so the user still gets the period cue without per-period rows.
  type Row = { event: HistoricalEvent; periodColor: string };
  const rows: Row[] = [];
  for (const p of periods) {
    const list = eventsByPeriod.get(p.id) ?? [];
    for (const e of list) rows.push({ event: e, periodColor: p.color });
  }
  rows.sort(
    (a, b) =>
      a.event.year - b.event.year ||
      (a.event.endYear ?? a.event.year) - (b.event.endYear ?? b.event.year)
  );

  return (
    <div
      className="absolute bottom-0 left-0 right-0"
      style={{
        background: "linear-gradient(to top, var(--bg) 70%, transparent)",
        paddingTop: 28,
        zIndex: 25,
      }}
    >
      <div className="surface mx-3 md:mx-4 mb-3 px-3 py-2.5 overflow-x-auto">
        <div className="flex items-baseline justify-between gap-3 mb-1.5">
          <div className="eyebrow" style={{ color: REGION_ACCENT }}>
            Region timeline
          </div>
          <div className="flex items-center gap-3 t-12" style={{ color: "var(--text-dim)" }}>
            {periods.map((p) => (
              <span key={p.id} className="flex items-center gap-1">
                <span
                  style={{
                    display: "inline-block",
                    width: 8,
                    height: 8,
                    borderRadius: 999,
                    background: p.color,
                  }}
                />
                {p.startYear}–{p.endYear}
              </span>
            ))}
          </div>
        </div>
        <div
          className="flex items-start gap-2"
          role="list"
          aria-label="Region timeline"
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
                ? `color-mix(in oklch, ${REGION_ACCENT} 28%, transparent)`
                : "var(--bg-elev)",
              border: activeEventId === null
                ? `1px solid ${REGION_ACCENT}`
                : "1px solid var(--border-soft)",
            }}
            title="Full Region Overview — everything at once"
          >
            <div className="t-12 font-display" style={{ color: REGION_ACCENT }}>
              ★ Overview
            </div>
            <div
              className="t-12 mt-0.5 leading-tight"
              style={{ color: "var(--text)" }}
            >
              Full Region Overview
            </div>
          </button>
          {rows.map(({ event: e, periodColor }) => {
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
                  background: isActive
                    ? `color-mix(in oklch, ${periodColor} 28%, transparent)`
                    : "var(--bg-elev)",
                  border: isActive
                    ? `1px solid ${periodColor}`
                    : "1px solid var(--border-soft)",
                }}
                title={`${range} · ${e.title}`}
              >
                <div className="t-12 font-display" style={{ color: periodColor }}>
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
