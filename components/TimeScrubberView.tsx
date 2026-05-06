"use client";

import { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { events as allEvents } from "@/lib/data/events";
import { empires, type Empire } from "@/lib/data/empires";
import { periods } from "@/lib/data/periods";
import { regions } from "@/lib/data/regions";
import { homeRegions } from "@/lib/data/homeRegions";
import YearScrubber from "@/components/YearScrubber";
import type { HistoricalEvent, TradeRoute } from "@/lib/types";
import type { EventPin } from "@/components/Globe";

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


export default function TimeScrubberView() {
  const [year, setYear] = useState<number>(1325);
  // Region filter — start with every macro-region enabled. The user can
  // toggle individual regions off, but at least one always stays on.
  const [enabledRegions, setEnabledRegions] = useState<Set<string>>(
    () => new Set(homeRegions.map((r) => r.id))
  );
  const [settingsOpen, setSettingsOpen] = useState(false);

  // Union of all event-region IDs from currently-enabled macro regions.
  const activeEventRegionIds = useMemo(() => {
    const s = new Set<string>();
    for (const r of homeRegions) {
      if (!enabledRegions.has(r.id)) continue;
      for (const rid of r.eventRegionIds) s.add(rid);
    }
    return s;
  }, [enabledRegions]);
  // Camera target. Set when an event is clicked; cleared when the user drags
  // the year scrubber so it doesn't keep snapping back.
  const [focus, setFocus] = useState<
    { lat: number; lng: number; altitude: number } | null
  >(null);
  // Which event card the user just clicked, so we can highlight it.
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);

  const selectedEvent = useMemo<HistoricalEvent | null>(() => {
    if (!selectedEventId) return null;
    return allEvents.find((e) => e.id === selectedEventId) ?? null;
  }, [selectedEventId]);

  // A single label dropped on the globe at the selected event's location.
  // Priority: actual destination pin > journey path start > region centroid >
  // camera focus (last resort — camera focus is often a wide-angle centroid
  // out in the ocean for journey events, so we avoid it when we can).
  const selectedEventPin = useMemo<EventPin[]>(() => {
    if (!selectedEvent) return [];
    const hl = selectedEvent.highlight;
    let lat: number | null = null;
    let lng: number | null = null;
    if (hl?.pins && hl.pins.length > 0) {
      // Use the LAST pin — for journeys (hajj, da Gama) this is the
      // destination, which feels right when labeling "where this ended up".
      const p = hl.pins[hl.pins.length - 1];
      lat = p.lat;
      lng = p.lng;
    } else if (hl?.path && hl.path.length > 0) {
      const p = hl.path[hl.path.length - 1];
      lat = p.lat;
      lng = p.lng;
    } else if (selectedEvent.regionIds.length > 0) {
      const r = regions.find((x) => x.id === selectedEvent.regionIds[0]);
      if (r) {
        lat = r.lat;
        lng = r.lng;
      }
    } else if (hl?.focus) {
      lat = hl.focus.lat;
      lng = hl.focus.lng;
    }
    if (lat === null || lng === null) return [];
    return [
      {
        lat,
        lng,
        label: selectedEvent.title,
        color: hl?.color ?? "#fde68a",
      },
    ];
  }, [selectedEvent]);

  // Render the journey arc for the selected event (Marco Polo, Mansa Musa,
  // da Gama, Magellan, etc.) — these are the key interactive lines.
  const journeyRoutes = useMemo<TradeRoute[]>(() => {
    if (!selectedEvent?.highlight?.path) return [];
    const pts = selectedEvent.highlight.path;
    if (pts.length < 2) return [];
    const color = selectedEvent.highlight.color ?? "#fbbf24";
    return [
      {
        id: `event-journey-${selectedEvent.id}`,
        name: selectedEvent.title,
        path: pts,
        color,
        periodIds: [],
        goods: [],
        ideas: [],
        regionIds: [],
        description: selectedEvent.description,
        mode: "sea",
        yearStart: selectedEvent.year,
        yearEnd: selectedEvent.endYear ?? selectedEvent.year,
      },
    ];
  }, [selectedEvent]);

  function jumpToEvent(ev: HistoricalEvent) {
    // Clamp the cursor inside the *current* period so clicking an event with
    // a date outside the period (e.g. a long-running dynasty whose start year
    // sits in the previous period) doesn't kick the user into another period.
    const clamped = Math.max(
      period.startYear,
      Math.min(period.endYear, ev.year)
    );
    setYear(clamped);
    setSelectedEventId(ev.id);
    if (ev.highlight?.focus) {
      setFocus(ev.highlight.focus);
    } else if (ev.regionIds.length > 0) {
      const r = regions.find((x) => x.id === ev.regionIds[0]);
      if (r) setFocus({ lat: r.lat, lng: r.lng, altitude: 1.8 });
    }
  }

  function handleScrub(y: number) {
    setYear(y);
    // Manual scrub clears any pinned focus + selection.
    setFocus(null);
    setSelectedEventId(null);
  }

  const period = useMemo(
    () =>
      periods.find((p) => year >= p.startYear && year <= p.endYear) ??
      periods[0],
    [year]
  );

  // Empires whose phase covers the current year — paint these on the globe.
  const activeEmpires = useMemo(() => {
    const out: { empire: Empire; countryCodes: string[]; phaseEnd: number }[] = [];
    for (const e of empires) {
      const phase = e.phases.find(
        (p) => year >= p.yearStart && year <= p.yearEnd
      );
      if (phase) {
        out.push({
          empire: e,
          countryCodes: phase.countryCodes,
          phaseEnd: phase.yearEnd,
        });
      }
    }
    return out;
  }, [year]);

  const countryColors = useMemo(() => {
    const m = new Map<string, string>();
    for (const a of activeEmpires) {
      for (const code of a.countryCodes) m.set(code, a.empire.color);
    }
    return m;
  }, [activeEmpires]);

  const countryLabels = useMemo(() => {
    const m = new Map<string, string>();
    for (const a of activeEmpires) {
      for (const code of a.countryCodes) m.set(code, a.empire.name);
    }
    return m;
  }, [activeEmpires]);

  // Only events explicitly tagged for this AP period AND touching at least
  // one of the user's currently-enabled macro regions.
  const happenings = useMemo<HistoricalEvent[]>(() => {
    return allEvents
      .filter((e) => e.periodId === period.id)
      .filter((e) =>
        e.regionIds.some((rid) => activeEventRegionIds.has(rid))
      )
      .sort((a, b) => b.year - a.year || (b.endYear ?? b.year) - (a.endYear ?? a.year));
  }, [period.id, activeEventRegionIds]);

  return (
    <div className="fixed inset-0 flex flex-col">
      <main className="flex-1 relative">
        <Globe
          routes={[]}
          journeyRoutes={journeyRoutes}
          countryColors={countryColors}
          countryLabels={countryLabels}
          events={[]}
          pois={[]}
          eventPins={selectedEventPin}
          autoRotate={false}
          focus={focus ?? undefined}
          onSelectCountry={() => {}}
          onSelectRoute={() => {}}
          onSelectEvent={() => {}}
          onSelectPOI={() => {}}
        />

        <SidePanel
          year={year}
          period={period}
          happenings={happenings}
          selectedEventId={selectedEventId}
          onPickEvent={jumpToEvent}
        />

        <SettingsControl
          open={settingsOpen}
          onToggle={() => setSettingsOpen((o) => !o)}
          onClose={() => setSettingsOpen(false)}
          enabledRegions={enabledRegions}
          onChangeEnabled={setEnabledRegions}
        />

        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            background: "linear-gradient(to top, var(--bg) 65%, transparent)",
            paddingTop: 8,
            zIndex: 25,
          }}
        >
          <div className="mx-3 md:mx-4 mb-2">
            <YearScrubber year={year} onChange={handleScrub} />
          </div>
        </div>
      </main>
    </div>
  );
}

function SidePanel({
  year,
  period,
  happenings,
  selectedEventId,
  onPickEvent,
}: {
  year: number;
  period: (typeof periods)[number];
  happenings: HistoricalEvent[];
  selectedEventId: string | null;
  onPickEvent: (ev: HistoricalEvent) => void;
}) {
  return (
    <aside
      className="surface absolute info-popover time-side-panel"
      style={{
        // Reach from near the top all the way down to just above the scrubber.
        top: 8,
        left: 8,
        bottom: 56,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        zIndex: 20,
      }}
      aria-label="What's happening this year"
    >
      <div
        className="flex items-baseline justify-between gap-2"
        style={{
          padding: "10px 12px 6px 12px",
          borderBottom: "1px solid var(--border-soft)",
          flexShrink: 0,
        }}
      >
        <div>
          <div className="eyebrow" style={{ color: period.color }}>
            {period.name.toUpperCase()}
          </div>
          <div className="font-display t-20 leading-none mt-1">{year}</div>
        </div>
      </div>

      <div
        style={{
          padding: "8px 10px 10px 10px",
          overflowY: "auto",
          flex: 1,
        }}
      >
        {happenings.length > 0 && (
          <>
            <div className="eyebrow mb-2" style={{ color: "var(--text-dim)" }}>
              What&apos;s happening
            </div>
            <ul className="space-y-2">
              {happenings.map((e) => (
                <li key={e.id}>
                  <EventChat
                    event={e}
                    year={year}
                    selected={selectedEventId === e.id}
                    onPick={() => onPickEvent(e)}
                  />
                </li>
              ))}
            </ul>
          </>
        )}

        {happenings.length === 0 && (
          <p className="t-14 prose-cap" style={{ color: "var(--text-muted)" }}>
            Quiet stretch — drag the timeline to find the next big moment.
          </p>
        )}
      </div>
    </aside>
  );
}

function EventChat({
  event,
  selected,
  onPick,
}: {
  event: HistoricalEvent;
  year: number;
  selected: boolean;
  onPick: () => void;
}) {
  const span =
    event.endYear && event.endYear !== event.year
      ? `${event.year}–${event.endYear}`
      : `${event.year}`;
  return (
    <button
      onClick={onPick}
      className="w-full text-left rounded-[10px] hover:brightness-125"
      style={{
        background: selected
          ? "color-mix(in oklch, var(--text) 14%, var(--bg-elev))"
          : "var(--bg-elev)",
        border: selected
          ? "1px solid var(--text)"
          : "1px solid var(--border-soft)",
        padding: "7px 9px",
        transition:
          "background 180ms ease, border-color 180ms ease, filter 180ms ease",
        cursor: "pointer",
      }}
      title="Jump to this event"
    >
      <div className="t-12 font-display mb-1" style={{ color: "var(--text)" }}>
        {span}
      </div>
      <div className="t-14 leading-snug" style={{ color: "var(--text)" }}>
        {event.title}
      </div>
      <div
        className="t-12 mt-1 prose-cap"
        style={{ color: "var(--text-muted)" }}
      >
        {event.description}
      </div>
    </button>
  );
}

function SettingsControl({
  open,
  onToggle,
  onClose,
  enabledRegions,
  onChangeEnabled,
}: {
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
  enabledRegions: Set<string>;
  onChangeEnabled: (next: Set<string>) => void;
}) {
  function toggle(id: string) {
    const next = new Set(enabledRegions);
    if (next.has(id)) {
      // Always keep at least one region enabled.
      if (next.size === 1) return;
      next.delete(id);
    } else {
      next.add(id);
    }
    onChangeEnabled(next);
  }

  function selectAll() {
    onChangeEnabled(new Set(homeRegions.map((r) => r.id)));
  }

  return (
    <>
      <button
        onClick={onToggle}
        aria-label="Region filters"
        aria-expanded={open}
        title="Region filters"
        className="absolute"
        style={{
          top: 8,
          right: 8,
          zIndex: 30,
          width: 36,
          height: 36,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 999,
          background: "var(--bg-elev)",
          border: "1px solid var(--border-soft)",
          color: "var(--text)",
          fontSize: 16,
          cursor: "pointer",
          transition: "background 150ms ease, border-color 150ms ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "var(--text-dim)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "var(--border-soft)";
        }}
      >
        ⚙
      </button>

      {open && (
        <div
          className="surface info-popover absolute"
          style={{
            top: 52,
            right: 8,
            zIndex: 30,
            width: "clamp(220px, 22vw, 280px)",
            maxHeight: "calc(100vh - 100px)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            animation: "info-pop-in 220ms cubic-bezier(0.16, 1, 0.3, 1)",
          }}
          role="dialog"
          aria-label="Region filters"
        >
          <div
            className="flex items-baseline justify-between gap-2"
            style={{
              padding: "10px 12px 6px 12px",
              borderBottom: "1px solid var(--border-soft)",
              flexShrink: 0,
            }}
          >
            <div>
              <div className="eyebrow" style={{ color: "var(--text-dim)" }}>
                FILTER
              </div>
              <div className="font-display t-16 leading-tight mt-0.5">
                Show regions
              </div>
            </div>
            <button
              onClick={onClose}
              aria-label="Close"
              className="rounded-full"
              style={{
                color: "var(--text-dim)",
                width: 24,
                height: 24,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--text)";
                e.currentTarget.style.borderColor = "var(--border-soft)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-dim)";
                e.currentTarget.style.borderColor = "transparent";
              }}
            >
              ✕
            </button>
          </div>

          <div
            style={{
              padding: "8px 10px 10px 10px",
              overflowY: "auto",
              flex: 1,
            }}
          >
            <ul className="space-y-1">
              {homeRegions.map((r) => {
                const on = enabledRegions.has(r.id);
                const isOnly = on && enabledRegions.size === 1;
                return (
                  <li key={r.id}>
                    <button
                      onClick={() => toggle(r.id)}
                      disabled={isOnly}
                      className="w-full text-left rounded"
                      style={{
                        padding: "6px 8px",
                        background: on
                          ? "color-mix(in oklch, var(--text) 10%, var(--bg-elev))"
                          : "var(--bg-elev)",
                        border: on
                          ? "1px solid var(--text-dim)"
                          : "1px solid var(--border-soft)",
                        color: on ? "var(--text)" : "var(--text-muted)",
                        cursor: isOnly ? "not-allowed" : "pointer",
                        opacity: isOnly ? 0.7 : 1,
                        transition:
                          "background 150ms ease, border-color 150ms ease",
                      }}
                      title={
                        isOnly
                          ? "At least one region must stay on"
                          : on
                            ? `Hide ${r.name}`
                            : `Show ${r.name}`
                      }
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="t-14">{r.name}</span>
                        <span
                          aria-hidden
                          className="t-12"
                          style={{
                            color: on ? "var(--text)" : "var(--text-dim)",
                          }}
                        >
                          {on ? "✓" : ""}
                        </span>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>

            {enabledRegions.size < homeRegions.length && (
              <button
                onClick={selectAll}
                className="t-12 mt-3 px-2 py-1 rounded"
                style={{
                  background: "transparent",
                  border: "1px solid var(--border-soft)",
                  color: "var(--text-dim)",
                  width: "100%",
                }}
              >
                Show all
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
