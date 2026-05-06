"use client";

import { useMemo } from "react";
import { briefingUnits, type BigIdea } from "@/lib/data/briefing";
import { brainRot, type BrainRot } from "@/lib/data/brainRot";

type Props = {
  onOpenIdea: (id: string) => void;
};

export default function BrainRotTab({ onOpenIdea }: Props) {
  const rotById = useMemo(() => {
    const m = new Map<string, BrainRot>();
    for (const r of brainRot) m.set(r.ideaId, r);
    return m;
  }, []);

  return (
    <div>
      <div className="mb-6 md:mb-8">
        <div className="eyebrow mb-2" style={{ color: "var(--text-dim)" }}>
          BRAIN ROT
        </div>
        <h2 className="font-display t-26 md:text-4xl leading-tight">
          Mnemonic mode — sigma alpha study grindset.
        </h2>
        <p className="t-14 mt-3 prose-cap" style={{ color: "var(--text-muted)", maxWidth: 720 }}>
          Every Big Idea, paired with a goofy catchphrase + animated emoji combo. The dumber it is,
          the more it sticks. Each card&apos;s hook line tells you what the brain rot actually maps
          to in the real history. Click a card to open it on the globe.
        </p>
      </div>

      {briefingUnits.map((u) => (
        <section key={u.unitNumber} className="mb-8">
          <div className="flex items-baseline gap-3 mb-3">
            <span className="eyebrow" style={{ color: u.accent }}>
              Unit {u.unitNumber}
            </span>
            <h3 className="font-display t-20 leading-tight">{u.title}</h3>
            <span className="t-12" style={{ color: "var(--text-dim)" }}>
              {u.yearStart}–{u.yearEnd}
            </span>
          </div>

          <ol className="grid gap-3 md:grid-cols-2">
            {u.bigIdeas.map((idea) => {
              const rot = rotById.get(idea.id);
              if (!rot) return null;
              return (
                <li key={idea.id}>
                  <BrainRotCard
                    idea={idea}
                    rot={rot}
                    accent={u.accent}
                    onOpen={() => onOpenIdea(idea.id)}
                  />
                </li>
              );
            })}
          </ol>
        </section>
      ))}
    </div>
  );
}

function BrainRotCard({
  idea,
  rot,
  accent,
  onOpen,
}: {
  idea: BigIdea;
  rot: BrainRot;
  accent: string;
  onOpen: () => void;
}) {
  return (
    <button
      onClick={onOpen}
      className="w-full text-left transition hover:brightness-110"
      style={{
        background: "var(--bg-elev)",
        border: `1px solid ${accent}`,
        borderRadius: 12,
        padding: "16px 18px",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse at top right, ${accent}22, transparent 65%)`,
          pointerEvents: "none",
        }}
      />
      <div style={{ position: "relative" }}>
        <div className="flex items-baseline gap-2 mb-2 flex-wrap">
          <span className="eyebrow" style={{ color: accent }}>
            BI {idea.ideaNumber}
          </span>
          <span className="t-12 font-display" style={{ color: "var(--text-dim)" }}>
            {idea.title}
          </span>
        </div>

        <div
          className={`brainrot-emoji brainrot-${rot.anim}`}
          aria-hidden
          style={{
            fontSize: 44,
            letterSpacing: "0.08em",
            lineHeight: 1,
            marginTop: 4,
            marginBottom: 8,
          }}
        >
          {rot.emojis}
        </div>

        <p
          className="font-display"
          style={{
            fontSize: 18,
            lineHeight: 1.25,
            color: "var(--text)",
            margin: 0,
          }}
        >
          {rot.phrase}
        </p>

        <p
          className="t-12 prose-cap mt-3"
          style={{ color: "var(--text-muted)", borderLeft: `3px solid ${accent}55`, paddingLeft: 8 }}
        >
          {rot.hook}
        </p>
      </div>
    </button>
  );
}
