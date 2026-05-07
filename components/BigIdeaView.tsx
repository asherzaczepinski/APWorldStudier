"use client";

import { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { briefingUnits, findBigIdea, type BigIdea } from "@/lib/data/briefing";
import {
  countryToRegion,
  buildBaseCountryColors,
  buildBaseCountryLabels,
} from "@/lib/data/regionPalette";
import { contextualizationFor } from "@/lib/data/contextualizations";
import type { TradeRoute } from "@/lib/types";
import type { EventPin, FeatureMarker, FeaturePath } from "@/components/Globe";

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
  idea: BigIdea;
  onBack: () => void;
  onPickNeighbor: (id: string) => void;
};

export default function BigIdeaView({ idea, onBack, onPickNeighbor }: Props) {
  const located = findBigIdea(idea.id);
  const unit = located?.unit ?? null;
  const accent = unit?.accent ?? "#fde68a";

  // The "cool stuff" markers that live as emoji bubbles on the globe.
  const features = useMemo<FeatureMarker[]>(() => {
    return idea.features
      .filter((f) => f.lat !== undefined && f.lng !== undefined)
      .map((f) => ({
        id: f.id,
        lat: f.lat as number,
        lng: f.lng as number,
        label: f.label,
        emoji: f.emoji,
        color: f.color ?? accent,
      }));
  }, [idea, accent]);

  // Optional surface paths (Mansa Musa hajj, Salt March, Trans-Sib, etc.).
  const featurePaths = useMemo<FeaturePath[]>(() => {
    return idea.features
      .filter((f) => f.path && f.path.length >= 2)
      .map((f) => ({
        id: `path-${f.id}`,
        label: f.label,
        color: f.color ?? accent,
        points: f.path!.map((p) => [p.lat, p.lng] as [number, number]),
      }));
  }, [idea, accent]);

  // Build the globe color map. Step 1: every country tinted by its home region
  // (so the user *always* sees every country at all times, with a stable color
  // per region). Step 2: the spotlit region's countries get repainted brighter
  // in the unit accent so the active region pops.
  const countryColors = useMemo(() => {
    const map = buildBaseCountryColors("4d");
    const spotlitCountries = new Set<string>();
    for (const code of Object.keys(countryToRegion)) {
      // We only have macro-region tags in regionPalette (e.g. "china",
      // "westAfrica") — the briefing's spotlightRegions reference the same keys,
      // so this is a direct match.
      const regionId = countryToRegion[code];
      if (idea.spotlightRegions.includes(regionId)) spotlitCountries.add(code);
    }
    for (const code of idea.spotlightCountries ?? []) spotlitCountries.add(code);
    for (const code of spotlitCountries) {
      // Repaint at near-full opacity in the unit accent.
      map.set(code, accent + "e0");
    }
    return map;
  }, [idea, accent]);

  const countryLabels = useMemo(() => buildBaseCountryLabels(), []);

  // Don't drop a title pin on the globe — the focus is sometimes mid-ocean
  // (Atlantic-rev big ideas, Columbian Exchange) and the long title label
  // ends up sitting right on top of the animated route. The side panel
  // already shows the title prominently, so the duplicate is dead weight.
  const eventPins = useMemo<EventPin[]>(() => [], []);

  // Empty for this view — we don't draw arc routes here.
  const journeyRoutes: TradeRoute[] = [];

  // Side panel + popover state
  const [activeFeatureId, setActiveFeatureId] = useState<string | null>(null);
  const activeFeature = useMemo(
    () => idea.features.find((f) => f.id === activeFeatureId) ?? null,
    [idea, activeFeatureId]
  );

  // Camera-override: when the user clicks a feature pin or a path on the globe,
  // we fly the camera to that thing. null = use idea.focus.
  const [userFocus, setUserFocus] = useState<{ lat: number; lng: number; altitude: number } | null>(null);

  // Reset camera override + selection whenever the user opens a different Big Idea.
  useEffect(() => {
    setUserFocus(null);
    setActiveFeatureId(null);
  }, [idea.id]);

  // Phone tab — on narrow screens we show either the overview *or* the globe,
  // toggled by a small bar at the top. Wider screens see both at once.
  const [phoneTab, setPhoneTab] = useState<"overview" | "globe">("overview");

  function focusOnFeature(featureId: string) {
    const f = idea.features.find((x) => x.id === featureId);
    if (!f) return;
    if (f.lat !== undefined && f.lng !== undefined) {
      // Single-pin feature → close-in zoom.
      setUserFocus({ lat: f.lat, lng: f.lng, altitude: 1.35 });
    } else if (f.path && f.path.length > 0) {
      // Path-only feature → frame the whole route.
      focusOnPathPoints(f.path);
    }
  }

  function focusOnPathPoints(points: { lat: number; lng: number }[]) {
    const lats = points.map((p) => p.lat);
    const lngs = points.map((p) => p.lng);
    const lat = (Math.min(...lats) + Math.max(...lats)) / 2;
    const lng = (Math.min(...lngs) + Math.max(...lngs)) / 2;
    const span = Math.max(
      Math.max(...lats) - Math.min(...lats),
      Math.max(...lngs) - Math.min(...lngs)
    );
    // Heuristic: longer routes need more altitude to fit on-screen.
    const altitude = Math.max(1.5, Math.min(2.8, span * 0.04 + 1.4));
    setUserFocus({ lat, lng, altitude });
  }

  function handleSelectFeature(id: string) {
    const next = id === activeFeatureId ? null : id;
    setActiveFeatureId(next);
    if (next) focusOnFeature(next);
    else setUserFocus(null);
  }

  function handleSelectPath(pathId: string | null) {
    if (!pathId) {
      setUserFocus(null);
      return;
    }
    // Globe gives us the path id with our "path-" prefix (see featurePaths
    // construction below). Strip it back to the original feature id.
    const featureId = pathId.replace(/^path-/, "");
    const feature = idea.features.find((f) => f.id === featureId);
    if (feature?.path && feature.path.length > 0) {
      focusOnPathPoints(feature.path);
    }
  }

  void onPickNeighbor;
  return (
    <div className="fixed inset-0 flex flex-col" data-phone-tab={phoneTab}>
      <PhoneTabBar tab={phoneTab} onChange={setPhoneTab} onBack={onBack} />
      <main className="flex-1 relative">
        <div className="bigidea-globe-pane absolute inset-0">
          <Globe
            routes={[]}
            journeyRoutes={journeyRoutes}
            countryColors={countryColors}
            countryLabels={countryLabels}
            events={[]}
            pois={[]}
            eventPins={eventPins}
            features={features}
            featurePaths={featurePaths}
            autoRotate={false}
            focus={userFocus ?? idea.focus}
            onSelectCountry={() => {}}
            onSelectRoute={() => {}}
            onSelectEvent={() => {}}
            onSelectPOI={() => {}}
            onSelectFeature={handleSelectFeature}
            onSelectPath={handleSelectPath}
          />
        </div>

        <SidePanel
          idea={idea}
          accent={accent}
          unitNumber={unit?.unitNumber ?? 0}
          unitTitle={unit?.title ?? ""}
          activeFeatureId={activeFeatureId}
          onPickFeature={handleSelectFeature}
          onBack={onBack}
        />

        {activeFeature && (
          <FeaturePopover
            feature={activeFeature}
            accent={accent}
            onClose={() => setActiveFeatureId(null)}
          />
        )}
      </main>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Phone tab bar — only visible on narrow screens (CSS-driven). Lets the user
// switch between the overview panel and the globe, since they fill the screen.
// ---------------------------------------------------------------------------

function PhoneTabBar({
  tab,
  onChange,
  onBack,
}: {
  tab: "overview" | "globe";
  onChange: (t: "overview" | "globe") => void;
  onBack: () => void;
}) {
  return (
    <div className="bigidea-phone-tabs">
      <button
        onClick={onBack}
        className="t-12 inline-flex items-center gap-1"
        aria-label="Back to units"
        style={{
          color: "var(--text-dim)",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          padding: "6px 10px",
        }}
      >
        <span aria-hidden>‹</span> Back
      </button>
      <div
        className="inline-flex rounded-full p-0.5"
        style={{
          border: "1px solid var(--border-soft)",
          background: "var(--bg-elev)",
        }}
        role="tablist"
      >
        <PhoneTab active={tab === "overview"} onClick={() => onChange("overview")}>
          Overview
        </PhoneTab>
        <PhoneTab active={tab === "globe"} onClick={() => onChange("globe")}>
          Globe
        </PhoneTab>
      </div>
      <div style={{ width: 56 }} aria-hidden />
    </div>
  );
}

function PhoneTab({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      role="tab"
      aria-selected={active}
      className="px-4 py-1 t-12 rounded-full transition"
      style={{
        background: active ? "var(--text)" : "transparent",
        color: active ? "var(--bg)" : "var(--text-muted)",
        fontWeight: active ? 600 : 400,
        cursor: "pointer",
        border: "none",
      }}
    >
      {children}
    </button>
  );
}

// ---------------------------------------------------------------------------
// Side panel — the meat of each Big Idea (bullets, features, SAQ)
// ---------------------------------------------------------------------------

function SidePanel({
  idea,
  accent,
  unitNumber,
  unitTitle,
  activeFeatureId,
  onPickFeature,
  onBack,
}: {
  idea: BigIdea;
  accent: string;
  unitNumber: number;
  unitTitle: string;
  activeFeatureId: string | null;
  onPickFeature: (id: string) => void;
  onBack: () => void;
}) {
  const [tab, setTab] = useState<"context" | "ctx" | "saq">("context");
  const ctxParagraph = contextualizationFor(idea.id);
  // If the user lands on a Big Idea without the active tab's data, fall back
  // to Context.
  useEffect(() => {
    if (tab === "saq" && !idea.saq) setTab("context");
    if (tab === "ctx" && !ctxParagraph) setTab("context");
  }, [idea, tab, ctxParagraph]);

  return (
    <aside
      className="surface absolute info-popover bigidea-side-panel"
      aria-label={`Big Idea ${idea.ideaNumber}: ${idea.title}`}
    >
      <div
        style={{
          padding: "10px 12px 8px 12px",
          borderBottom: "1px solid var(--border-soft)",
          flexShrink: 0,
        }}
      >
        <button
          onClick={onBack}
          className="t-12 mb-2 inline-flex items-center gap-1"
          style={{
            color: "var(--text-dim)",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
        >
          <span aria-hidden>‹</span> Back to units
        </button>
        <div className="eyebrow" style={{ color: accent }}>
          Unit {unitNumber} · {unitTitle.toUpperCase()}
        </div>
        <h2 className="font-display t-20 leading-tight mt-1">
          Big Idea {idea.ideaNumber}: {idea.title}
        </h2>
        <p className="t-12 mt-1.5" style={{ color: "var(--text-muted)" }}>
          {idea.year}{idea.endYear ? `–${idea.endYear}` : ""}
        </p>

        <div
          className="inline-flex rounded-full p-0.5 mt-3 flex-wrap"
          style={{ border: "1px solid var(--border-soft)", background: "var(--bg-elev)" }}
        >
          <PanelTab active={tab === "context"} onClick={() => setTab("context")}>Context</PanelTab>
          {ctxParagraph && (
            <PanelTab active={tab === "ctx"} onClick={() => setTab("ctx")}>Contextualization</PanelTab>
          )}
          {idea.saq && (
            <PanelTab active={tab === "saq"} onClick={() => setTab("saq")}>SAQ</PanelTab>
          )}
        </div>
      </div>

      <div
        style={{
          padding: "10px 12px 14px 12px",
          overflowY: "auto",
          flex: 1,
        }}
      >
        {tab === "context" && (
          <ContextTab
            idea={idea}
            accent={accent}
            activeFeatureId={activeFeatureId}
            onPickFeature={onPickFeature}
          />
        )}
        {tab === "ctx" && ctxParagraph && <CtxTab ctx={ctxParagraph} accent={accent} />}
        {tab === "saq" && idea.saq && <SAQTab saq={idea.saq} accent={accent} />}
      </div>
    </aside>
  );
}

function PanelTab({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className="px-3 py-1 t-12 rounded-full transition"
      style={{
        background: active ? "var(--text)" : "transparent",
        color: active ? "var(--bg)" : "var(--text-muted)",
        fontWeight: active ? 600 : 400,
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}

function ContextTab({
  idea,
  accent,
  activeFeatureId,
  onPickFeature,
}: {
  idea: BigIdea;
  accent: string;
  activeFeatureId: string | null;
  onPickFeature: (id: string) => void;
}) {
  return (
    <>
      <p
        className="t-14 leading-snug font-display"
        style={{ color: "var(--text)", borderLeft: `3px solid ${accent}`, paddingLeft: 10 }}
      >
        {idea.thesis}
      </p>

      <ul className="space-y-1.5 mt-4">
        {idea.bullets.map((b, i) => (
          <li
            key={i}
            className="t-12 prose-cap"
            style={{ color: "var(--text-muted)", paddingLeft: 14, position: "relative" }}
          >
            <span
              aria-hidden
              style={{
                position: "absolute",
                left: 0,
                top: 7,
                width: 5,
                height: 5,
                borderRadius: 999,
                background: accent,
              }}
            />
            {b}
          </li>
        ))}
      </ul>

      {idea.features.length > 0 && (
        <>
          <div className="eyebrow mt-5 mb-2" style={{ color: "var(--text-dim)" }}>
            On the map
          </div>
          <ul className="grid grid-cols-1 gap-1.5">
            {idea.features.map((f) => {
              const active = activeFeatureId === f.id;
              return (
                <li key={f.id}>
                  <button
                    onClick={() => onPickFeature(f.id)}
                    className="w-full text-left rounded transition"
                    style={{
                      background: active
                        ? "color-mix(in oklch, var(--text) 12%, var(--bg-elev))"
                        : "var(--bg-elev)",
                      border: active
                        ? `1px solid ${accent}`
                        : "1px solid var(--border-soft)",
                      padding: "7px 9px",
                      cursor: "pointer",
                    }}
                  >
                    <div className="flex items-start gap-2">
                      <span
                        style={{
                          fontSize: 18,
                          lineHeight: 1.2,
                          width: 24,
                          flexShrink: 0,
                          textAlign: "center",
                        }}
                      >
                        {f.emoji}
                      </span>
                      <div style={{ minWidth: 0, flex: 1 }}>
                        <div
                          className="t-12 font-display"
                          style={{ color: "var(--text)" }}
                        >
                          {f.label}
                        </div>
                        <div
                          className="t-12 mt-0.5 prose-cap"
                          style={{
                            color: "var(--text-muted)",
                            display: "-webkit-box",
                            WebkitLineClamp: active ? 99 : 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                          }}
                        >
                          {f.blurb}
                        </div>
                      </div>
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </>
  );
}

function CtxTab({
  ctx,
  accent,
}: {
  ctx: { leadUp: string; thesis: string };
  accent: string;
}) {
  return (
    <>
      <div className="eyebrow mb-2" style={{ color: "var(--text-dim)" }}>
        Lead-up · use as your contextualization paragraph
      </div>
      <p className="t-12 prose-cap mb-3" style={{ color: "var(--text-dim)" }}>
        Pure background — what was happening BEFORE the events of this Big Idea. Paraphrase + adjust
        to fit the prompt; don&apos;t copy verbatim.
      </p>
      <p
        className="t-14 prose-cap"
        style={{
          color: "var(--text)",
          background: "var(--bg-elev)",
          border: "1px solid var(--border-soft)",
          borderLeft: `3px solid ${accent}`,
          padding: "12px 14px",
          borderRadius: 6,
          lineHeight: 1.65,
        }}
      >
        {ctx.leadUp}
      </p>

      <div className="eyebrow mb-2 mt-5" style={{ color: "var(--text-dim)" }}>
        Although, ultimately… · use as your DBQ thesis
      </div>
      <p className="t-12 prose-cap mb-3" style={{ color: "var(--text-dim)" }}>
        One-sentence thesis built off the lead-up. Names a counter, takes a stance, and gives the
        reasons.
      </p>
      <p
        className="t-14 leading-snug font-display"
        style={{
          color: "var(--text)",
          background: "var(--bg-elev)",
          border: `1px dashed ${accent}`,
          padding: "12px 14px",
          borderRadius: 6,
          lineHeight: 1.55,
        }}
      >
        {ctx.thesis}
      </p>
    </>
  );
}

function SAQTab({
  saq,
  accent,
}: {
  saq: NonNullable<BigIdea["saq"]>;
  accent: string;
}) {
  return (
    <>
      <div className="eyebrow mb-2" style={{ color: "var(--text-dim)" }}>
        Sample SAQ prompt
      </div>
      <p
        className="t-14 leading-snug font-display"
        style={{ color: "var(--text)", borderLeft: `3px solid ${accent}`, paddingLeft: 10 }}
      >
        {saq.prompt}
      </p>

      <div className="eyebrow mt-5 mb-2" style={{ color: "var(--text-dim)" }}>
        Modeled answer · CER
      </div>
      <p className="t-12" style={{ color: "var(--text-dim)" }}>
        SAQs use Claim → Evidence → Reasoning (not TEA).
      </p>
      <CERPart label="Claim" body={saq.cer.claim} accent={accent} />
      <CERPart label="Evidence" body={saq.cer.evidence} accent={accent} />
      <CERPart label="Reasoning" body={saq.cer.reasoning} accent={accent} />
    </>
  );
}

function CERPart({
  label,
  body,
  accent,
}: {
  label: string;
  body: string;
  accent: string;
}) {
  return (
    <div className="mt-3">
      <div
        className="eyebrow"
        style={{
          color: "var(--bg)",
          background: accent,
          display: "inline-block",
          padding: "1.5px 8px",
          borderRadius: 4,
          fontWeight: 700,
        }}
      >
        {label}
      </div>
      <p
        className="t-12 mt-1.5 prose-cap"
        style={{ color: "var(--text-muted)" }}
      >
        {body}
      </p>
    </div>
  );
}


// ---------------------------------------------------------------------------
// Feature popover — appears when the user clicks a feature on the globe
// ---------------------------------------------------------------------------

function FeaturePopover({
  feature,
  accent,
  onClose,
}: {
  feature: BigIdea["features"][number];
  accent: string;
  onClose: () => void;
}) {
  return (
    <div
      className="surface info-popover absolute"
      style={{
        bottom: 16,
        right: 16,
        zIndex: 25,
        width: "clamp(240px, 28vw, 360px)",
        padding: "12px 14px",
        animation: "info-pop-in 220ms cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      role="dialog"
      aria-label={feature.label}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        style={{
          position: "absolute",
          top: 8,
          right: 8,
          width: 22,
          height: 22,
          borderRadius: 999,
          color: "var(--text-dim)",
          background: "transparent",
          border: "1px solid transparent",
          cursor: "pointer",
        }}
      >
        ✕
      </button>
      <div className="flex items-center gap-2 mb-2">
        <span style={{ fontSize: 22, lineHeight: 1 }}>{feature.emoji}</span>
        <div className="font-display t-16" style={{ color: "var(--text)" }}>
          {feature.label}
        </div>
      </div>
      <p
        className="t-12 prose-cap"
        style={{ color: "var(--text-muted)", borderLeft: `3px solid ${accent}`, paddingLeft: 10 }}
      >
        {feature.blurb}
      </p>
    </div>
  );
}

// Avoid unused-import warnings for the briefingUnits import (used implicitly
// via findBigIdea's types) — TS is already happy since the named export is
// referenced by the type alias chain.
void briefingUnits;
