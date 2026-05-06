"use client";

import { useEffect, useMemo, useState } from "react";
import { briefingUnits, type BigIdea } from "@/lib/data/briefing";
import { regionPalette, countryToRegion } from "@/lib/data/regionPalette";

type Props = {
  shaky: Set<string>;
  onOpenIdea: (id: string) => void;
};

export default function StudyDeck({ shaky, onOpenIdea }: Props) {
  const deck = useMemo<{ idea: BigIdea; unitNumber: number; accent: string }[]>(() => {
    const out: { idea: BigIdea; unitNumber: number; accent: string }[] = [];
    for (const u of briefingUnits) {
      for (const i of u.bigIdeas) {
        if (shaky.has(i.id)) {
          out.push({ idea: i, unitNumber: u.unitNumber, accent: u.accent });
        }
      }
    }
    return out;
  }, [shaky]);

  const [pos, setPos] = useState(0);
  const [reveal, setReveal] = useState(false);
  // Reset to start whenever the deck membership changes (e.g. user added/removed cards).
  useEffect(() => {
    setPos(0);
    setReveal(false);
  }, [deck.length]);

  // Keyboard nav: ←/→ to move, Space to reveal.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (deck.length === 0) return;
      if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 1));
      if (e.key === "ArrowRight") setPos((p) => Math.min(deck.length - 1, p + 1));
      if (e.key === " ") {
        e.preventDefault();
        setReveal((r) => !r);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [deck.length]);

  useEffect(() => {
    setReveal(false);
  }, [pos]);

  if (deck.length === 0) {
    return <EmptyState />;
  }

  const current = deck[pos];
  return (
    <div>
      <div className="mb-6">
        <div className="eyebrow mb-2" style={{ color: "var(--text-dim)" }}>
          Study Deck · {deck.length} flagged Big Idea{deck.length === 1 ? "" : "s"}
        </div>
        <h2 className="font-display t-26 md:text-4xl leading-tight">Slide by slide.</h2>
        <p className="t-14 mt-3 prose-cap" style={{ color: "var(--text-muted)", maxWidth: 720 }}>
          Try to recall the thesis from just the title and year. Tap <em>Reveal</em> (or hit Space) to see
          the bullets. Use ← / → to move between cards. When you&apos;ve got it, jump to the globe view to
          re-anchor it spatially.
        </p>
      </div>

      <SlideCard
        idea={current.idea}
        accent={current.accent}
        unitNumber={current.unitNumber}
        revealed={reveal}
        onReveal={() => setReveal((r) => !r)}
        onOpenGlobe={() => onOpenIdea(current.idea.id)}
      />

      <div className="flex items-center justify-between mt-4 gap-3">
        <button
          className="t-12"
          onClick={() => setPos((p) => Math.max(0, p - 1))}
          disabled={pos === 0}
          style={{
            background: "var(--bg-elev)",
            border: "1px solid var(--border-soft)",
            color: pos === 0 ? "var(--text-dim)" : "var(--text)",
            borderRadius: 999,
            padding: "8px 16px",
            cursor: pos === 0 ? "not-allowed" : "pointer",
            opacity: pos === 0 ? 0.5 : 1,
          }}
        >
          ‹ Prev
        </button>

        <div className="flex items-center gap-1.5 flex-wrap justify-center">
          {deck.map((d, i) => (
            <button
              key={d.idea.id}
              onClick={() => setPos(i)}
              aria-label={`Go to card ${i + 1}`}
              style={{
                width: i === pos ? 18 : 6,
                height: 6,
                borderRadius: 999,
                background: i === pos ? d.accent : "var(--border)",
                border: "none",
                cursor: "pointer",
                transition: "width 200ms var(--ease)",
              }}
            />
          ))}
        </div>

        <button
          className="t-12"
          onClick={() => setPos((p) => Math.min(deck.length - 1, p + 1))}
          disabled={pos === deck.length - 1}
          style={{
            background: "var(--bg-elev)",
            border: "1px solid var(--border-soft)",
            color: pos === deck.length - 1 ? "var(--text-dim)" : "var(--text)",
            borderRadius: 999,
            padding: "8px 16px",
            cursor: pos === deck.length - 1 ? "not-allowed" : "pointer",
            opacity: pos === deck.length - 1 ? 0.5 : 1,
          }}
        >
          Next ›
        </button>
      </div>
    </div>
  );
}

function EmptyState() {
  return (
    <div
      style={{
        background: "var(--bg-elev)",
        border: "1px solid var(--border-soft)",
        borderRadius: 8,
        padding: "32px 24px",
        textAlign: "center",
      }}
    >
      <div className="font-display t-20 leading-tight mb-2">Your Study Deck is empty.</div>
      <p className="t-14 prose-cap mx-auto" style={{ color: "var(--text-muted)", maxWidth: 540 }}>
        On the Units tab, expand any unit and tap the <span style={{ color: "var(--text)", fontWeight: 700 }}>★</span>
        on Big Ideas you don&apos;t remember. They&apos;ll show up here, and we&apos;ll walk through them one
        slide at a time.
      </p>
    </div>
  );
}

function SlideCard({
  idea,
  accent,
  unitNumber,
  revealed,
  onReveal,
  onOpenGlobe,
}: {
  idea: BigIdea;
  accent: string;
  unitNumber: number;
  revealed: boolean;
  onReveal: () => void;
  onOpenGlobe: () => void;
}) {
  // The single dominant region for the visual flair on the card.
  const dominantRegionId = idea.spotlightRegions[0];
  const dominantRegion = dominantRegionId ? regionPalette[dominantRegionId] : null;

  return (
    <article
      style={{
        background: "var(--bg-elev)",
        border: `1px solid ${accent}`,
        borderRadius: 12,
        padding: "20px 22px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative gradient stripe */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse at top right, ${accent}22, transparent 60%)`,
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative" }}>
        <div className="flex items-center gap-3 mb-2 flex-wrap">
          <span className="eyebrow" style={{ color: accent }}>
            Unit {unitNumber} · BI {idea.ideaNumber}
          </span>
          <span className="t-12" style={{ color: "var(--text-dim)" }}>
            {idea.year}{idea.endYear ? `–${idea.endYear}` : ""}
          </span>
          {dominantRegion && (
            <span
              className="t-12 inline-flex items-center gap-1.5"
              style={{
                background: "var(--bg)",
                border: "1px solid var(--border-soft)",
                color: "var(--text)",
                borderRadius: 999,
                padding: "2px 8px",
              }}
            >
              <span
                aria-hidden
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 999,
                  background: dominantRegion.color,
                }}
              />
              {dominantRegion.name}
            </span>
          )}
        </div>

        <h3 className="font-display text-2xl md:text-3xl leading-tight mb-3">{idea.title}</h3>

        {!revealed ? (
          <PromptOnly idea={idea} accent={accent} onReveal={onReveal} />
        ) : (
          <RevealedContent idea={idea} accent={accent} onOpenGlobe={onOpenGlobe} />
        )}
      </div>
    </article>
  );
}

function PromptOnly({
  idea,
  accent,
  onReveal,
}: {
  idea: BigIdea;
  accent: string;
  onReveal: () => void;
}) {
  // Show just the most evocative features as emoji teasers — give the user
  // a faint memory cue without spoiling the bullets.
  const emojiTease = idea.features.slice(0, 6).map((f) => f.emoji).join("  ");
  // Compute a faint country-summary for the spotlit region.
  const sampleCountries = useMemo(() => {
    const codes: string[] = [];
    for (const code of Object.keys(countryToRegion)) {
      if (idea.spotlightRegions.includes(countryToRegion[code])) codes.push(code);
      if (codes.length >= 4) break;
    }
    return codes.join(" · ");
  }, [idea]);

  return (
    <div>
      <p
        className="t-14 mt-1 mb-4 prose-cap"
        style={{ color: "var(--text-muted)" }}
      >
        Try to recall the thesis. What states / events / ideas does this Big Idea cover?
      </p>
      {emojiTease && (
        <div
          className="t-26 mb-4"
          style={{
            background: "var(--bg)",
            border: "1px solid var(--border-soft)",
            borderRadius: 8,
            padding: "12px 14px",
            letterSpacing: "0.4em",
          }}
        >
          {emojiTease}
        </div>
      )}
      {sampleCountries && (
        <p className="t-12 prose-cap" style={{ color: "var(--text-dim)" }}>
          Region cue: {sampleCountries}…
        </p>
      )}
      <button
        onClick={onReveal}
        className="mt-5 t-14"
        style={{
          background: accent,
          color: "var(--bg)",
          border: "none",
          borderRadius: 999,
          padding: "9px 20px",
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        Reveal (or press Space)
      </button>
    </div>
  );
}

function RevealedContent({
  idea,
  accent,
  onOpenGlobe,
}: {
  idea: BigIdea;
  accent: string;
  onOpenGlobe: () => void;
}) {
  return (
    <div>
      <p
        className="t-16 leading-snug font-display"
        style={{ color: "var(--text)", borderLeft: `3px solid ${accent}`, paddingLeft: 12 }}
      >
        {idea.thesis}
      </p>

      <ul className="space-y-1.5 mt-4">
        {idea.bullets.map((b, i) => (
          <li
            key={i}
            className="t-14 prose-cap"
            style={{ color: "var(--text-muted)", paddingLeft: 14, position: "relative" }}
          >
            <span
              aria-hidden
              style={{
                position: "absolute",
                left: 0,
                top: 8,
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
            Visuals on the map
          </div>
          <div className="flex flex-wrap gap-2">
            {idea.features.map((f) => (
              <span
                key={f.id}
                className="inline-flex items-center gap-1.5 t-12"
                style={{
                  background: "var(--bg)",
                  border: `1px solid ${accent}55`,
                  borderRadius: 999,
                  padding: "3px 10px 3px 4px",
                  color: "var(--text)",
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 22,
                    height: 22,
                    borderRadius: 999,
                    background: `${accent}22`,
                    fontSize: 14,
                  }}
                >
                  {f.emoji}
                </span>
                {f.label}
              </span>
            ))}
          </div>
        </>
      )}

      {idea.saq && (
        <>
          <div className="eyebrow mt-5 mb-1.5" style={{ color: "var(--text-dim)" }}>
            Sample SAQ (CER)
          </div>
          <p
            className="t-14 mb-2 font-display"
            style={{ color: "var(--text)" }}
          >
            {idea.saq.prompt}
          </p>
          <p className="t-12 mt-1 prose-cap" style={{ color: "var(--text-muted)" }}>
            <strong style={{ color: accent }}>Claim · </strong>{idea.saq.cer.claim}
          </p>
          <p className="t-12 mt-1 prose-cap" style={{ color: "var(--text-muted)" }}>
            <strong style={{ color: accent }}>Evidence · </strong>{idea.saq.cer.evidence}
          </p>
          <p className="t-12 mt-1 prose-cap" style={{ color: "var(--text-muted)" }}>
            <strong style={{ color: accent }}>Reasoning · </strong>{idea.saq.cer.reasoning}
          </p>
        </>
      )}

      <button
        onClick={onOpenGlobe}
        className="mt-5 t-14"
        style={{
          background: "transparent",
          color: "var(--text)",
          border: `1px solid ${accent}`,
          borderRadius: 999,
          padding: "9px 18px",
          fontWeight: 500,
          cursor: "pointer",
        }}
      >
        Open on globe →
      </button>
    </div>
  );
}
