"use client";

import { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { events } from "@/lib/data/events";
import { tradeRoutes } from "@/lib/data/tradeRoutes";
import { empires, empireAtCodeAndYear, territoriesAtYear, type Empire } from "@/lib/data/empires";
import { pois as allPois } from "@/lib/data/pois";
import InfoPopover, { type InfoSelection } from "@/components/InfoPopover";
import type { TradeRoute } from "@/lib/types";
import type { HeimlerTopic, HeimlerUnit, TopicFeature } from "@/lib/data/heimlerUnits";

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
  unit: HeimlerUnit;
  topic: HeimlerTopic;
  onBack: () => void;
};

export default function HeimlerTopicView({ unit, topic: rawTopic, onBack }: Props) {
  // Unit-summary topics merge in everything from the unit's other topics so
  // the user can see the whole unit on one map.
  const topic = useMemo<HeimlerTopic>(() => {
    if (!rawTopic.isUnitSummary) return rawTopic;
    const empireIds = new Set<string>(rawTopic.empireIds ?? []);
    const routeIds = new Set<string>(rawTopic.routeIds ?? []);
    const eventIds = new Set<string>(rawTopic.eventIds ?? []);
    const poiIds = new Set<string>(rawTopic.poiIds ?? []);
    const regionIds = new Set<string>(rawTopic.regionIds ?? []);
    const mentionsArr: string[] = [...(rawTopic.mentions ?? [])];
    const featureMap = new Map<string, TopicFeature>();
    for (const f of rawTopic.features ?? []) featureMap.set(f.id, f);
    for (const t of unit.topics) {
      if (t.code === rawTopic.code) continue;
      for (const id of t.empireIds ?? []) empireIds.add(id);
      for (const id of t.routeIds ?? []) routeIds.add(id);
      for (const id of t.eventIds ?? []) eventIds.add(id);
      for (const id of t.poiIds ?? []) poiIds.add(id);
      for (const id of t.regionIds ?? []) regionIds.add(id);
      for (const m of t.mentions ?? []) {
        if (!mentionsArr.includes(m)) mentionsArr.push(m);
      }
      for (const f of t.features ?? []) {
        if (!featureMap.has(f.id)) featureMap.set(f.id, f);
      }
    }
    return {
      ...rawTopic,
      empireIds: Array.from(empireIds),
      routeIds: Array.from(routeIds),
      eventIds: Array.from(eventIds),
      poiIds: Array.from(poiIds),
      regionIds: Array.from(regionIds),
      mentions: mentionsArr,
      features: Array.from(featureMap.values()),
    };
  }, [rawTopic, unit.topics]);

  const [selection, setSelection] = useState<InfoSelection | null>(null);

  const year = topic.year;
  const empireIds = topic.empireIds ?? [];
  const routeIds = topic.routeIds ?? [];

  // Topic-specific empires shown in full color.
  const territoriesForTopic = useMemo(() => {
    const out: { empire: Empire; countryCodes: string[] }[] = [];
    for (const id of empireIds) {
      const empire = empires.find((e) => e.id === id);
      if (!empire) continue;
      const phase = empire.phases.find((p) => year >= p.yearStart && year <= p.yearEnd);
      const fallback = phase ?? empire.phases[empire.phases.length - 1];
      if (fallback) out.push({ empire, countryCodes: fallback.countryCodes });
    }
    return out;
  }, [empireIds, year]);

  // Background: every other empire that exists at topic.year, dimmer.
  const backgroundTerritories = useMemo(() => {
    const all = territoriesAtYear(year);
    return all.filter((t) => !empireIds.includes(t.empire.id));
  }, [year, empireIds]);

  const countryColors = useMemo(() => {
    const m = new Map<string, string>();
    for (const t of backgroundTerritories) {
      const base = /^#[0-9a-fA-F]{6}$/.test(t.empire.color)
        ? t.empire.color + "55"
        : t.empire.color;
      for (const code of t.countryCodes) m.set(code, base);
    }
    for (const t of territoriesForTopic) {
      for (const code of t.countryCodes) m.set(code, t.empire.color);
    }
    return m;
  }, [territoriesForTopic, backgroundTerritories]);

  const countryLabels = useMemo(() => {
    const m = new Map<string, string>();
    for (const t of backgroundTerritories) {
      for (const code of t.countryCodes) m.set(code, t.empire.name);
    }
    for (const t of territoriesForTopic) {
      for (const code of t.countryCodes) m.set(code, t.empire.name);
    }
    return m;
  }, [territoriesForTopic, backgroundTerritories]);

  const visibleRoutes = useMemo<TradeRoute[]>(
    () => tradeRoutes.filter((r) => routeIds.includes(r.id)),
    [routeIds]
  );

  // Compute camera focus from territories' first capital-ish point + routes.
  const focus = useMemo(() => {
    const points: { lat: number; lng: number }[] = [];
    for (const r of visibleRoutes) {
      for (const p of r.path) points.push({ lat: p.lat, lng: p.lng });
    }
    // If no routes, use the topic's POIs as fallback geometry for centering.
    if (points.length === 0) {
      for (const id of topic.poiIds ?? []) {
        const p = allPois.find((x) => x.id === id);
        if (p) points.push({ lat: p.lat, lng: p.lng });
      }
    }
    if (points.length === 0) return undefined;
    const lat = points.reduce((s, p) => s + p.lat, 0) / points.length;
    const lng = points.reduce((s, p) => s + p.lng, 0) / points.length;
    let span = 0;
    for (const p of points) {
      span = Math.max(span, Math.abs(p.lat - lat), Math.abs(p.lng - lng));
    }
    const altitude = span < 15 ? 1.4 : span < 35 ? 1.8 : span < 60 ? 2.1 : 2.4;
    return { lat, lng, altitude };
  }, [visibleRoutes, topic.poiIds]);

  function selectCountry(code: string, name: string) {
    // Prefer a topic-specific empire first; fall back to whatever empire owns
    // the country at topic.year (the dimmed background).
    let empire: Empire | null = null;
    for (const t of territoriesForTopic) {
      if (t.countryCodes.includes(code)) {
        empire = t.empire;
        break;
      }
    }
    if (!empire) empire = empireAtCodeAndYear(code, year);
    if (!empire) return;
    setSelection({ kind: "empire", empire, year, countryName: name, countryCode: code });
  }
  function selectRoute(route: TradeRoute) {
    setSelection({ kind: "route", route, year });
  }

  return (
    <div className="fixed inset-0 flex flex-col">
      <header
        className="flex items-center justify-between gap-4 px-4 md:px-6 py-2.5 z-30 relative flex-shrink-0"
        style={{ borderBottom: "1px solid var(--border-soft)", background: "var(--bg)" }}
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
            aria-label="Back to all topics"
          >
            ← All topics
          </button>
          <div className="min-w-0">
            <div className="flex items-baseline gap-2">
              <span className="eyebrow flex-shrink-0" style={{ color: unit.accent }}>
                Unit {unit.unitNumber} · {topic.code}
              </span>
              <span className="t-12" style={{ color: "var(--text-dim)" }}>
                {year}
              </span>
            </div>
            <h1 className="font-display t-20 leading-tight truncate">{topic.title}</h1>
          </div>
        </div>
      </header>

      <main className="flex-1 relative">
        <Globe
          routes={visibleRoutes}
          countryColors={countryColors}
          countryLabels={countryLabels}
          events={[]}
          pois={[]}
          eventPins={[]}
          autoRotate={false}
          focus={focus}
          features={[]}
          onSelectCountry={selectCountry}
          onSelectRoute={selectRoute}
          onSelectEvent={() => {}}
          onSelectPOI={() => {}}
        />

        {selection && (
          <div
            className="fixed top-3 left-3"
            style={{ zIndex: 9999 }}
          >
            <InfoPopover
              selection={selection}
              onClose={() => setSelection(null)}
              topicContext={
                selection.kind === "empire" && empireIds.includes(selection.empire.id)
                  ? { unit, topic }
                  : selection.kind === "route" && routeIds.includes(selection.route.id)
                  ? { unit, topic }
                  : undefined
              }
            />
          </div>
        )}
      </main>
    </div>
  );
}
