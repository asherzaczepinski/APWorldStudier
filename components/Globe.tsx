"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import dynamic from "next/dynamic";
import type { GlobeMethods } from "react-globe.gl";
import type { TradeRoute } from "@/lib/types";
import { CATEGORY_META } from "@/lib/data/eventCategories";
import type { EventCategory } from "@/lib/types";
import type { POI } from "@/lib/data/pois";

const ReactGlobe = dynamic(() => import("react-globe.gl"), { ssr: false });

type CountryFeature = {
  type: "Feature";
  properties: {
    name?: string;
    ISO_A3?: string;
    ADM0_A3?: string;
    iso_a3?: string;
    ADMIN?: string;
    CONTINENT?: string;
  };
  geometry: unknown;
};

export type EventMarker = {
  id: string;
  lat: number;
  lng: number;
  year: number;
  endYear?: number;
  title: string;
  category: EventCategory;
};

export type EventPin = { lat: number; lng: number; label: string; color?: string };

export type FeatureMarker = {
  id: string;
  lat: number;
  lng: number;
  label: string;
  emoji: string;
  color?: string;
};

type GlobeProps = {
  routes: TradeRoute[];
  /** ISO A3 → fill color for empire-controlled countries. */
  countryColors: Map<string, string>;
  /** ISO A3 → empire name to show on hover. Hovers on un-mapped countries show nothing. */
  countryLabels: Map<string, string>;
  events: EventMarker[];
  pois: POI[];
  /** Extra pins drawn for the active event (if any) — usually colony / battle markers. */
  eventPins?: EventPin[];
  /** Slow auto-rotate. Default true. */
  autoRotate?: boolean;
  /** Camera target. When set, the globe smoothly points here on mount and on changes. */
  focus?: { lat: number; lng: number; altitude?: number };
  /** When true, every supplied POI is rendered at every zoom (no importance gating). */
  showAllPois?: boolean;
  /** Feature markers (emoji + label) for "cool stuff" mentioned in the topic. */
  features?: FeatureMarker[];
  onSelectCountry: (code: string, name: string) => void;
  onSelectRoute: (route: TradeRoute) => void;
  onSelectEvent: (eventId: string) => void;
  onSelectPOI: (poiId: string) => void;
  onSelectFeature?: (featureId: string) => void;
};

const ATMOSPHERE = "#9bc7e6";
const POLY_BASE_TINT = "rgba(120, 145, 165, 0.04)";
const POLY_SIDE = "rgba(120, 145, 165, 0.10)";
const POLY_STROKE = "rgba(255, 255, 255, 0.14)";

const TOOLTIP_BG = "oklch(17% 0.014 245)";
const TOOLTIP_BORDER = "oklch(34% 0.020 245)";
const TOOLTIP_TEXT = "oklch(95% 0.012 80)";

// Pick the most central waypoint of a route as its pin location.
function midpoint(path: { lat: number; lng: number }[]): { lat: number; lng: number } {
  if (path.length === 0) return { lat: 0, lng: 0 };
  return path[Math.floor(path.length / 2)];
}

export default function Globe({
  routes,
  countryColors,
  countryLabels,
  events,
  pois,
  eventPins = [],
  autoRotate = true,
  focus,
  showAllPois = false,
  features = [],
  onSelectCountry,
  onSelectRoute,
  onSelectEvent,
  onSelectPOI,
  onSelectFeature,
}: GlobeProps) {
  const [countries, setCountries] = useState<CountryFeature[]>([]);
  const [size, setSize] = useState({ w: 800, h: 800 });
  const [altitude, setAltitude] = useState(2.5);
  const containerRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<GlobeMethods | undefined>(undefined);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson"
    )
      .then((r) => r.json())
      .then((data: { features: CountryFeature[] }) => setCountries(data.features))
      .catch(() => setCountries([]));
  }, []);

  useEffect(() => {
    function update() {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setSize({ w: rect.width, h: rect.height });
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Slow auto-rotate (toggleable via prop)
  useEffect(() => {
    const g = globeRef.current;
    if (!g || typeof g.controls !== "function") return;
    const c = g.controls() as { autoRotate: boolean; autoRotateSpeed: number };
    c.autoRotate = autoRotate;
    c.autoRotateSpeed = 0.18;
  }, [autoRotate]);

  // Camera focus — fly to coords when prop changes.
  useEffect(() => {
    const g = globeRef.current;
    if (!g || !focus || typeof g.pointOfView !== "function") return;
    const t = setTimeout(() => {
      g.pointOfView(
        { lat: focus.lat, lng: focus.lng, altitude: focus.altitude ?? 1.6 },
        1200
      );
    }, 80);
    return () => clearTimeout(t);
  }, [focus]);

  const getCode = (f: CountryFeature) =>
    f.properties.ISO_A3 ?? f.properties.ADM0_A3 ?? f.properties.iso_a3 ?? "";

  // Arcs: one per consecutive waypoint pair
  type ArcDatum = {
    startLat: number;
    startLng: number;
    endLat: number;
    endLng: number;
    color: string;
    route: TradeRoute;
  };
  const arcsData = useMemo<ArcDatum[]>(() => {
    const out: ArcDatum[] = [];
    for (const r of routes) {
      for (let i = 0; i < r.path.length - 1; i++) {
        const a = r.path[i];
        const b = r.path[i + 1];
        out.push({
          startLat: a.lat,
          startLng: a.lng,
          endLat: b.lat,
          endLng: b.lng,
          color: r.color,
          route: r,
        });
      }
    }
    return out;
  }, [routes]);

  // HTML markers: one pin per network + every event marker + visible POIs + event-attached pins + feature emojis
  type HtmlMarker =
    | { kind: "network-pin"; id: string; lat: number; lng: number; route: TradeRoute }
    | { kind: "event"; id: string; lat: number; lng: number; payload: EventMarker }
    | { kind: "poi"; id: string; lat: number; lng: number; poi: POI; showLabel: boolean }
    | { kind: "event-pin"; id: string; lat: number; lng: number; pin: EventPin }
    | { kind: "feature"; id: string; lat: number; lng: number; feature: FeatureMarker };

  // POI visibility tiers based on altitude.
  // alt > 2.0: only importance-1
  // alt 1.3–2.0: importance-1 (label) + importance-2 (label)
  // alt < 1.3: all importance levels
  const visiblePois = useMemo<POI[]>(() => {
    if (showAllPois) return pois;
    const out: POI[] = [];
    for (const p of pois) {
      if (p.importance === 1) out.push(p);
      else if (p.importance === 2 && altitude < 2.0) out.push(p);
      else if (p.importance === 3 && altitude < 1.25) out.push(p);
    }
    return out;
  }, [pois, altitude, showAllPois]);

  // A marker shows its full label when:
  //   1. the camera is zoomed in past LABEL_ALT, AND
  //   2. its anchor lat/lng doesn't fall within ~LABEL_GAP° of an
  //      already-labeled higher-priority marker.
  // We sort priority: feature > event > network > poi(imp1) > poi(imp2) > poi(imp3).
  const LABEL_ALT = 1.4;
  const LABEL_GAP_DEG = 6;

  const htmlElements = useMemo<HtmlMarker[]>(() => {
    type Stage = {
      m: HtmlMarker;
      priority: number;
      lat: number;
      lng: number;
    };
    const staged: Stage[] = [];

    for (const r of routes) {
      const m = midpoint(r.path);
      staged.push({
        m: { kind: "network-pin", id: r.id, lat: m.lat, lng: m.lng, route: r },
        priority: 30,
        lat: m.lat,
        lng: m.lng,
      });
    }
    for (const e of events) {
      staged.push({
        m: { kind: "event", id: e.id, lat: e.lat, lng: e.lng, payload: e },
        priority: 40,
        lat: e.lat,
        lng: e.lng,
      });
    }
    for (const p of visiblePois) {
      // showLabel will be re-decided by collision below.
      staged.push({
        m: { kind: "poi", id: p.id, lat: p.lat, lng: p.lng, poi: p, showLabel: false },
        priority: p.importance === 1 ? 25 : p.importance === 2 ? 20 : 15,
        lat: p.lat,
        lng: p.lng,
      });
    }
    for (let i = 0; i < eventPins.length; i++) {
      const ep = eventPins[i];
      staged.push({
        m: { kind: "event-pin", id: `evpin-${i}`, lat: ep.lat, lng: ep.lng, pin: ep },
        priority: 35,
        lat: ep.lat,
        lng: ep.lng,
      });
    }
    for (const f of features) {
      staged.push({
        m: { kind: "feature", id: `feat-${f.id}`, lat: f.lat, lng: f.lng, feature: f },
        priority: 50,
        lat: f.lat,
        lng: f.lng,
      });
    }

    // Decide which POIs get to show their label.
    const showLabels = altitude < LABEL_ALT;
    if (!showLabels) {
      // No labels at all on POIs, but everything else still shows its bubble.
      return staged.map((s) => s.m);
    }

    // Sort by priority desc and claim space; lower priority that overlaps
    // an already-claimed marker drops its label.
    const sorted = [...staged].sort((a, b) => b.priority - a.priority);
    const claimed: { lat: number; lng: number }[] = [];

    // Scale collision radius with altitude — closer in, smaller radius (more labels can fit).
    const radius = LABEL_GAP_DEG * (altitude / LABEL_ALT);

    for (const s of sorted) {
      const collides = claimed.some(
        (c) => Math.abs(c.lat - s.lat) < radius && Math.abs(c.lng - s.lng) < radius
      );
      if (s.m.kind === "poi") {
        // POI labels only appear when uncrowded.
        if (!collides) {
          s.m = { ...s.m, showLabel: true };
          claimed.push({ lat: s.lat, lng: s.lng });
        }
      } else {
        // Higher-priority markers always claim their space (label baked into bubble).
        claimed.push({ lat: s.lat, lng: s.lng });
      }
    }

    return staged.map((s) => s.m);
  }, [routes, events, visiblePois, altitude, eventPins, features]);

  return (
    <div ref={containerRef} className="absolute inset-0">
      <ReactGlobe
        ref={globeRef}
        width={size.w}
        height={size.h}
        backgroundColor="rgba(0,0,0,0)"
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        showAtmosphere
        atmosphereColor={ATMOSPHERE}
        atmosphereAltitude={0.18}
        onZoom={(pov: { altitude: number }) => setAltitude(pov.altitude)}
        polygonsData={countries}
        polygonAltitude={(d: object) => {
          const f = d as CountryFeature;
          return countryColors.has(getCode(f)) ? 0.018 : 0.005;
        }}
        polygonCapColor={(d: object) => {
          const f = d as CountryFeature;
          const c = countryColors.get(getCode(f));
          if (!c) return POLY_BASE_TINT;
          // Short hex (#rrggbb) → append alpha. Anything else (rgba, color-mix,
          // 8-char hex) → assume the caller already chose its own opacity.
          if (/^#[0-9a-fA-F]{6}$/.test(c)) return c + "cc";
          return c;
        }}
        polygonSideColor={() => POLY_SIDE}
        polygonStrokeColor={() => POLY_STROKE}
        polygonLabel={(d: object) => {
          const f = d as CountryFeature;
          const code = getCode(f);
          const empireName = countryLabels.get(code);
          if (!empireName) return "";
          return `<div style="background:${TOOLTIP_BG};padding:6px 12px;border-radius:8px;border:1px solid ${TOOLTIP_BORDER};color:${TOOLTIP_TEXT};font:600 13px ui-serif,Georgia,serif;letter-spacing:-0.01em;box-shadow:0 8px 24px -12px rgba(0,0,0,0.7)">${empireName}</div>`;
        }}
        onPolygonClick={(d: object) => {
          const f = d as CountryFeature;
          const name = f.properties.ADMIN ?? f.properties.name ?? "";
          onSelectCountry(getCode(f), name);
        }}
        polygonsTransitionDuration={500}

        // Arcs ("shooting lines") between consecutive route waypoints
        arcsData={arcsData}
        arcStartLat="startLat"
        arcStartLng="startLng"
        arcEndLat="endLat"
        arcEndLng="endLng"
        arcColor={(d: object) => {
          const a = d as ArcDatum;
          return [a.color + "ee", a.color + "44"];
        }}
        arcDashLength={0.4}
        arcDashGap={0.16}
        arcDashAnimateTime={4500}
        arcStroke={0.6}
        arcAltitudeAutoScale={0.45}
        arcLabel={(d: object) => {
          const a = d as ArcDatum;
          return `<div style="background:${TOOLTIP_BG};padding:8px 12px;border-radius:10px;border:1px solid ${a.color};color:${TOOLTIP_TEXT};font:500 12px ui-sans-serif,system-ui;max-width:280px;box-shadow:0 12px 36px -16px rgba(0,0,0,0.7)">
            <div style="font-family:ui-serif,Georgia,serif;font-size:14px;color:${a.color};letter-spacing:-0.01em">${a.route.name}</div>
            <div style="font-size:11px;margin-top:3px;opacity:0.75">click the pin for details</div>
          </div>`;
        }}

        // Empty layers we don't use
        labelsData={[]}
        pointsData={[]}
        ringsData={[]}
        pathsData={[]}
        customLayerData={[]}

        htmlElementsData={htmlElements}
        htmlLat="lat"
        htmlLng="lng"
        htmlAltitude={0.001}
        htmlElement={(d: object) => {
          const m = d as HtmlMarker;
          const wrap = document.createElement("div");
          wrap.style.transform = "translate(-50%, -50%)";
          wrap.style.userSelect = "none";
          wrap.style.pointerEvents = "auto";
          wrap.style.cursor = "pointer";

          if (m.kind === "event-pin") {
            const color = m.pin.color ?? "#fde68a";
            wrap.style.pointerEvents = "none";
            wrap.innerHTML = `
              <div style="display:flex;align-items:center;gap:5px">
                <span style="display:inline-block;width:8px;height:8px;border-radius:999px;background:${color};box-shadow:0 0 0 2px rgba(15,22,28,0.85), 0 0 10px ${color}cc"></span>
                <span style="font-family:ui-serif,Georgia,serif;font-size:11px;color:#fff;text-shadow:0 1px 2px rgba(0,0,0,0.85),0 0 6px rgba(0,0,0,0.6);white-space:nowrap;letter-spacing:-0.005em">${m.pin.label}</span>
              </div>
            `;
            return wrap;
          }

          if (m.kind === "poi") {
            const p = m.poi;
            const isImportant = p.importance === 1;
            const dotSize = isImportant ? 6 : 5;
            const dotColor = isImportant ? "#fde68a" : "#cfd8e3";
            const labelHTML = m.showLabel
              ? `<span style="font-family:ui-serif,Georgia,serif;font-size:11px;color:#fff;text-shadow:0 1px 2px rgba(0,0,0,0.85),0 0 6px rgba(0,0,0,0.6);white-space:nowrap;letter-spacing:-0.005em">${p.name}</span>`
              : "";
            wrap.innerHTML = `
              <div data-marker="poi" style="display:flex;align-items:center;gap:5px;transition:transform 200ms cubic-bezier(0.16,1,0.3,1)">
                <span style="display:inline-block;width:${dotSize}px;height:${dotSize}px;border-radius:999px;background:${dotColor};box-shadow:0 0 0 1.5px rgba(15,22,28,0.85), 0 0 8px ${dotColor}aa"></span>
                ${labelHTML}
              </div>
            `;
            attachHover(wrap);
            wrap.addEventListener("click", (e) => {
              e.stopPropagation();
              onSelectPOI(p.id);
            });
            return wrap;
          }

          if (m.kind === "network-pin") {
            const r = m.route;
            wrap.innerHTML = `
              <div data-marker="net" style="display:flex;align-items:center;gap:6px;padding:4px 10px 4px 6px;border-radius:999px;background:rgba(15,22,28,0.92);border:1.5px solid ${r.color};color:#fff;font:600 11px ui-sans-serif,system-ui;white-space:nowrap;box-shadow:0 0 0 4px ${r.color}22, 0 6px 18px -8px rgba(0,0,0,0.7);transition:transform 200ms cubic-bezier(0.16,1,0.3,1)">
                <span style="display:inline-block;width:8px;height:8px;border-radius:999px;background:${r.color};box-shadow:0 0 10px ${r.color}cc"></span>
                <span>${r.name}</span>
              </div>
            `;
            attachHover(wrap);
            wrap.addEventListener("click", (e) => {
              e.stopPropagation();
              onSelectRoute(r);
            });
            return wrap;
          }

          if (m.kind === "feature") {
            const f = m.feature;
            const accent = f.color ?? "#fbbf24";
            const labelled = altitude < LABEL_ALT;
            if (labelled) {
              wrap.innerHTML = `
                <div data-marker="feat" style="display:flex;align-items:center;gap:6px;padding:4px 10px 4px 6px;border-radius:999px;background:rgba(15,22,28,0.92);border:1.5px solid ${accent};color:#fff;font:500 11px ui-sans-serif,system-ui;white-space:nowrap;box-shadow:0 0 0 4px ${accent}22, 0 6px 18px -8px rgba(0,0,0,0.7);transition:transform 200ms cubic-bezier(0.16,1,0.3,1)">
                  <span style="display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:999px;background:${accent}33;font-size:14px;line-height:1">${f.emoji}</span>
                  <span>${f.label}</span>
                </div>
              `;
            } else {
              wrap.innerHTML = `
                <div data-marker="feat-min" style="display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;border-radius:999px;background:rgba(15,22,28,0.92);border:1.5px solid ${accent};box-shadow:0 0 0 3px ${accent}22, 0 4px 12px -6px rgba(0,0,0,0.7);font-size:14px;line-height:1;transition:transform 200ms cubic-bezier(0.16,1,0.3,1)">
                  ${f.emoji}
                </div>
              `;
            }
            attachHover(wrap);
            wrap.addEventListener("click", (e) => {
              e.stopPropagation();
              onSelectFeature?.(f.id);
            });
            return wrap;
          }

          // event marker
          const meta = CATEGORY_META[m.payload.category];
          const yr = `${m.payload.year}${m.payload.endYear ? "–" + m.payload.endYear : ""}`;
          wrap.innerHTML = `
            <div data-marker="ev" style="display:flex;align-items:center;gap:5px;padding:3px 9px 3px 4px;border-radius:999px;background:rgba(15,22,28,0.94);border:1.5px solid ${meta.color};color:#fff;font:500 11px ui-sans-serif,system-ui;white-space:nowrap;box-shadow:0 0 0 3px ${meta.color}22, 0 6px 16px -8px rgba(0,0,0,0.8);transition:transform 200ms cubic-bezier(0.16,1,0.3,1)">
              <span style="display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;border-radius:999px;background:${meta.color}33;font-size:11px">${meta.icon}</span>
              <span style="font-family:ui-serif,Georgia,serif;font-size:11px;color:${meta.color}">${yr}</span>
              <span style="font-weight:500;opacity:0.92;max-width:170px;overflow:hidden;text-overflow:ellipsis">${m.payload.title}</span>
            </div>
          `;
          attachHover(wrap);
          wrap.addEventListener("click", (e) => {
            e.stopPropagation();
            onSelectEvent(m.payload.id);
          });
          return wrap;
        }}
      />
    </div>
  );
}

function attachHover(wrap: HTMLElement) {
  wrap.addEventListener("mouseenter", () => {
    const el = wrap.firstElementChild as HTMLElement | null;
    if (el) el.style.transform = "scale(1.06)";
  });
  wrap.addEventListener("mouseleave", () => {
    const el = wrap.firstElementChild as HTMLElement | null;
    if (el) el.style.transform = "scale(1)";
  });
}
