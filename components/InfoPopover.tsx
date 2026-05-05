"use client";

import type { TradeRoute, HistoricalEvent } from "@/lib/types";
import type { Empire } from "@/lib/data/empires";
import type { POI } from "@/lib/data/pois";
import type { HeimlerUnit, TopicFeature } from "@/lib/data/heimlerUnits";
import { findGlossary } from "@/lib/data/glossary";

export type InfoSelection =
  | { kind: "empire"; empire: Empire; year: number; countryName: string; countryCode: string }
  | { kind: "country"; countryName: string; countryCode: string; year: number }
  | { kind: "route"; route: TradeRoute; year: number }
  | { kind: "event"; event: HistoricalEvent }
  | { kind: "poi"; poi: POI; year: number }
  | { kind: "unit"; unit: HeimlerUnit }
  | { kind: "feature"; feature: TopicFeature; accent: string }
  | { kind: "mention"; term: string; explanation: string; accent: string };

export type TopicContext = {
  unit: HeimlerUnit;
  topic: {
    title: string;
    code: string;
    summary: string;
    mentions?: string[];
    features?: TopicFeature[];
  };
  /** Which features have been clicked (so they show on the map). */
  activeFeatureIds: Set<string>;
  /** Click a feature in the panel: pin it to the map and open its explanation. */
  onSelectFeature: (id: string) => void;
  /** Click a mention chip: open its glossary definition (if any). */
  onSelectMention: (term: string) => void;
};

type Props = {
  selection: InfoSelection;
  onClose: () => void;
  /**
   * Optional topic context. When set on an empire / route selection, the
   * popover renders a "What Heimler covers in this topic" section with the
   * topic summary, clickable feature cards (pin emoji on map + read
   * explanation), and clickable mention chips (read glossary definition).
   */
  topicContext?: TopicContext;
};

export default function InfoPopover({ selection, onClose, topicContext }: Props) {
  return (
    <div
      role="dialog"
      aria-modal="false"
      className={
        selection.kind === "unit"
          ? "surface w-[440px] max-w-[92vw] p-5 pointer-events-auto"
          : "surface w-[380px] max-w-[92vw] p-5 pointer-events-auto"
      }
      style={{ maxHeight: "80vh", overflowY: "auto" }}
    >
      <div className="flex items-start justify-between gap-2 mb-1">
        <Header selection={selection} />
        <button
          onClick={onClose}
          aria-label="Close"
          className="t-12 px-2 py-0.5 rounded-full"
          style={{ color: "var(--text-dim)" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-dim)")}
        >
          ✕
        </button>
      </div>

      <Body selection={selection} />

      {topicContext &&
        (selection.kind === "empire" ||
          selection.kind === "route" ||
          selection.kind === "country") && (
          <TopicCoverage ctx={topicContext} />
        )}
    </div>
  );
}

function TopicCoverage({ ctx }: { ctx: TopicContext }) {
  const accent = ctx.unit.accent;
  const features = ctx.topic.features ?? [];
  const mentions = ctx.topic.mentions ?? [];

  return (
    <div
      className="mt-4 p-3 rounded space-y-3"
      style={{
        borderTop: `1px solid color-mix(in oklch, ${accent} 30%, transparent)`,
        background: `color-mix(in oklch, ${accent} 8%, transparent)`,
      }}
    >
      <div>
        <div className="eyebrow mb-1" style={{ color: accent }}>
          What Heimler covers · {ctx.topic.code}
        </div>
        <p className="t-12 prose-cap" style={{ color: "var(--text-muted)" }}>
          {ctx.topic.summary}
        </p>
      </div>

      {features.length > 0 && (
        <div>
          <div className="eyebrow mb-1.5" style={{ color: "var(--text-dim)" }}>
            Highlights — click to drop on the map
          </div>
          <ul className="grid grid-cols-2 gap-1.5">
            {features.map((f) => {
              const isActive = f.pinned || ctx.activeFeatureIds.has(f.id);
              return (
                <li key={f.id}>
                  <button
                    onClick={() => ctx.onSelectFeature(f.id)}
                    className="w-full text-left flex items-center gap-2 px-2 py-1.5 rounded transition hover:brightness-125"
                    style={{
                      background: isActive
                        ? `color-mix(in oklch, ${accent} 22%, transparent)`
                        : "var(--bg-elev)",
                      border: isActive
                        ? `1px solid ${accent}`
                        : "1px solid var(--border-soft)",
                    }}
                    title={f.explanation}
                  >
                    <span
                      aria-hidden
                      className="flex-shrink-0"
                      style={{
                        fontSize: 16,
                        lineHeight: 1,
                        opacity: isActive ? 1 : 0.6,
                      }}
                    >
                      {f.emoji}
                    </span>
                    <span
                      className="t-12 truncate"
                      style={{ color: isActive ? "var(--text)" : "var(--text-muted)" }}
                    >
                      {f.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {mentions.length > 0 && (
        <div>
          <div className="eyebrow mb-1.5" style={{ color: "var(--text-dim)" }}>
            Also mentioned
          </div>
          <ul className="flex flex-wrap gap-1">
            {mentions.map((m, i) => {
              const hasDef = findGlossary(m) !== null;
              return (
                <li key={i}>
                  <button
                    onClick={() => hasDef && ctx.onSelectMention(m)}
                    disabled={!hasDef}
                    className="t-12 px-2 py-1 rounded transition"
                    style={{
                      background: "var(--bg-elev)",
                      border: hasDef
                        ? `1px solid color-mix(in oklch, ${accent} 30%, transparent)`
                        : "1px solid var(--border-soft)",
                      color: hasDef ? "var(--text)" : "var(--text-muted)",
                      cursor: hasDef ? "pointer" : "default",
                    }}
                    title={hasDef ? "Click for definition" : "No definition yet"}
                  >
                    {m}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

function Header({ selection }: { selection: InfoSelection }) {
  if (selection.kind === "empire") {
    return (
      <div className="eyebrow" style={{ color: selection.empire.color }}>
        EMPIRE · {selection.year}
      </div>
    );
  }
  if (selection.kind === "country") {
    return <div className="eyebrow">COUNTRY · {selection.year}</div>;
  }
  if (selection.kind === "route") {
    return (
      <div className="eyebrow" style={{ color: selection.route.color }}>
        TRADE NETWORK · {selection.year}
      </div>
    );
  }
  if (selection.kind === "poi") {
    return <div className="eyebrow">{selection.poi.category.toUpperCase()} · {selection.year}</div>;
  }
  if (selection.kind === "unit") {
    return (
      <div className="eyebrow" style={{ color: selection.unit.accent }}>
        UNIT {selection.unit.unitNumber} · {selection.unit.yearStart}–{selection.unit.yearEnd}
      </div>
    );
  }
  if (selection.kind === "feature") {
    return (
      <div className="eyebrow" style={{ color: selection.accent }}>
        {selection.feature.category.toUpperCase()}
      </div>
    );
  }
  if (selection.kind === "mention") {
    return (
      <div className="eyebrow" style={{ color: selection.accent }}>
        TERM
      </div>
    );
  }
  return <div className="eyebrow">EVENT · {selection.event.year}{selection.event.endYear ? "–" + selection.event.endYear : ""}</div>;
}

function Body({ selection }: { selection: InfoSelection }) {
  if (selection.kind === "empire") {
    const e = selection.empire;
    return (
      <>
        <h2 className="font-display t-26 leading-tight" style={{ color: e.color }}>
          {e.name}
        </h2>
        <p className="t-14 mt-2 prose-cap" style={{ color: "var(--text-muted)" }}>
          {e.blurb}
        </p>
        <p
          className="t-12 mt-2"
          style={{ color: "var(--text-dim)" }}
        >
          {selection.countryName} was part of {e.name} in {selection.year}.
        </p>
        <ul className="mt-3 space-y-1.5">
          {e.facts.map((f, i) => (
            <li key={i} className="flex gap-2 t-14" style={{ color: "var(--text)" }}>
              <span style={{ color: e.color }}>›</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </>
    );
  }

  if (selection.kind === "country") {
    return (
      <>
        <h2 className="font-display t-26 leading-tight">{selection.countryName}</h2>
        <p className="t-14 mt-2" style={{ color: "var(--text-muted)" }}>
          In {selection.year}, this region had no major empire indexed in this study tool. Try
          scrubbing the timeline to see when it joins something bigger.
        </p>
      </>
    );
  }

  if (selection.kind === "route") {
    const r = selection.route;
    return (
      <>
        <h2 className="font-display t-26 leading-tight" style={{ color: r.color }}>
          {r.name}
        </h2>
        <p className="t-14 mt-2 prose-cap" style={{ color: "var(--text-muted)" }}>
          {r.description}
        </p>
        <div className="mt-3">
          <div className="eyebrow mb-1.5">Goods</div>
          <div className="flex flex-wrap gap-1.5">
            {r.goods.map((g) => (
              <span key={g} className="chip">{g}</span>
            ))}
          </div>
        </div>
        {r.ideas.length > 0 && (
          <div className="mt-3">
            <div className="eyebrow mb-1.5">Ideas / Tech</div>
            <p className="t-14" style={{ color: "var(--text-muted)" }}>
              {r.ideas.join(", ")}
            </p>
          </div>
        )}
        <div className="mt-3 t-12" style={{ color: "var(--text-dim)" }}>
          Active {r.yearStart}–{r.yearEnd} · {r.mode}
        </div>
      </>
    );
  }

  if (selection.kind === "poi") {
    const p = selection.poi;
    return (
      <>
        <h2 className="font-display t-26 leading-tight">{p.name}</h2>
        <p className="t-14 mt-2 prose-cap" style={{ color: "var(--text-muted)" }}>
          {p.blurb}
        </p>
        {(p.yearStart || p.yearEnd) && (
          <p className="t-12 mt-3" style={{ color: "var(--text-dim)" }}>
            Active {p.yearStart ?? "—"}{p.yearEnd ? `–${p.yearEnd}` : ""}
          </p>
        )}
      </>
    );
  }

  if (selection.kind === "unit") {
    const u = selection.unit;
    return (
      <>
        <h2 className="font-display t-26 leading-tight" style={{ color: u.accent }}>
          {u.title}
        </h2>
        <p className="t-14 mt-2 prose-cap" style={{ color: "var(--text-muted)" }}>
          {u.subtitle}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <a
            href={u.videoUrl}
            target="_blank"
            rel="noreferrer"
            className="t-12 px-3 py-1 rounded-full"
            style={{
              border: `1px solid ${u.accent}`,
              color: u.accent,
              background: `color-mix(in oklch, ${u.accent} 12%, transparent)`,
            }}
          >
            Watch unit video ↗
          </a>
          <a
            href={u.playlistUrl}
            target="_blank"
            rel="noreferrer"
            className="t-12 px-3 py-1 rounded-full"
            style={{
              border: "1px solid var(--border-soft)",
              color: "var(--text-muted)",
            }}
          >
            Full playlist ↗
          </a>
        </div>

        <div className="mt-4 eyebrow" style={{ color: "var(--text-dim)" }}>
          What Heimler covers ({u.topics.length} videos)
        </div>
        <ol className="mt-2 space-y-2">
          {u.topics.map((t) => (
            <li
              key={t.code}
              className="rounded-md p-3"
              style={{
                border: "1px solid var(--border-soft)",
                background: "var(--bg-elev)",
              }}
            >
              <div className="flex items-baseline justify-between gap-2 mb-1">
                <div className="flex items-baseline gap-2 min-w-0">
                  <span
                    className="t-12 font-display flex-shrink-0"
                    style={{ color: u.accent }}
                  >
                    {t.code}
                  </span>
                  <span className="font-display t-14 leading-tight">{t.title}</span>
                </div>
                <a
                  href={t.videoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="t-12 flex-shrink-0"
                  style={{ color: u.accent }}
                  aria-label={`Watch ${t.title}`}
                >
                  ▶
                </a>
              </div>
              <p
                className="t-12 prose-cap"
                style={{ color: "var(--text-muted)" }}
              >
                {t.summary}
              </p>
            </li>
          ))}
        </ol>
      </>
    );
  }

  if (selection.kind === "feature") {
    const f = selection.feature;
    return (
      <>
        <div className="flex items-baseline gap-2 mb-1">
          <span aria-hidden style={{ fontSize: 28, lineHeight: 1 }}>{f.emoji}</span>
          <h2
            className="font-display t-26 leading-tight"
            style={{ color: selection.accent }}
          >
            {f.label}
          </h2>
        </div>
        <p className="t-14 mt-2 prose-cap" style={{ color: "var(--text-muted)" }}>
          {f.explanation}
        </p>
      </>
    );
  }

  if (selection.kind === "mention") {
    return (
      <>
        <h2
          className="font-display t-26 leading-tight"
          style={{ color: selection.accent }}
        >
          {selection.term}
        </h2>
        <p className="t-14 mt-2 prose-cap" style={{ color: "var(--text-muted)" }}>
          {selection.explanation}
        </p>
      </>
    );
  }

  // event
  const e = selection.event;
  return (
    <>
      <h2 className="font-display t-26 leading-tight">{e.title}</h2>
      <p className="t-14 mt-2 prose-cap" style={{ color: "var(--text-muted)" }}>
        {e.description}
      </p>
      {e.facts && e.facts.length > 0 && (
        <ul className="mt-3 space-y-1.5">
          {e.facts.map((f, i) => (
            <li key={i} className="flex gap-2 t-14" style={{ color: "var(--text)" }}>
              <span style={{ color: "var(--accent)" }}>›</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
      )}
      <p
        className="t-12 mt-3 italic prose-cap"
        style={{ color: "var(--text-dim)" }}
      >
        <span className="not-italic eyebrow mr-1">Why it matters</span>
        {e.significance}
      </p>
      {e.highlight?.splits && (
        <div className="mt-3 flex flex-wrap gap-2">
          {e.highlight.splits.map((s) => (
            <span
              key={s.label}
              className="t-12 px-2 py-0.5 rounded-full"
              style={{
                background: s.color + "33",
                border: `1px solid ${s.color}`,
                color: "var(--text)",
              }}
            >
              <span
                aria-hidden
                className="inline-block w-1.5 h-1.5 rounded-full mr-1.5 align-middle"
                style={{ background: s.color }}
              />
              {s.label}
            </span>
          ))}
        </div>
      )}
    </>
  );
}
