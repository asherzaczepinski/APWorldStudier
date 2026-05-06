"use client";

import { useState } from "react";
import { briefingUnits, type BriefingUnit, type BigIdea } from "@/lib/data/briefing";

type Props = {
  shaky: Set<string>;
  onToggleShaky: (id: string) => void;
  onOpenIdea: (id: string) => void;
};

export default function BriefingHome({ shaky, onToggleShaky, onOpenIdea }: Props) {
  const [openUnit, setOpenUnit] = useState<number | null>(null);

  return (
    <div>
      <div className="mb-6 md:mb-8">
        <div className="eyebrow mb-2" style={{ color: "var(--text-dim)" }}>
          AP World Modern · 1200–present
        </div>
        <h2 className="font-display t-26 md:text-4xl leading-tight">Pick a unit, then a Big Idea.</h2>
        <p className="t-14 mt-3 prose-cap" style={{ color: "var(--text-muted)", maxWidth: 720 }}>
          Each unit unfolds into its Big Ideas. Click a Big Idea to fly the globe to its region —
          you can drag and zoom freely, then read the bullets, study the visuals, and check the SAQ
          (in CER format). Tick the <em style={{ color: "var(--text)" }}>Don&apos;t remember</em> star on any
          shaky Big Idea — your Study Deck will only run those.
        </p>
      </div>

      <ol className="space-y-3 md:space-y-4">
        {briefingUnits.map((u) => {
          const isOpen = openUnit === u.unitNumber;
          const unitShaky = u.bigIdeas.filter((b) => shaky.has(b.id)).length;
          return (
            <li key={u.unitNumber}>
              <UnitRow
                unit={u}
                open={isOpen}
                shakyInUnit={unitShaky}
                onToggle={() => setOpenUnit(isOpen ? null : u.unitNumber)}
              />
              {isOpen && (
                <ul className="grid gap-2 md:gap-3 sm:grid-cols-2 lg:grid-cols-3 mt-3">
                  {u.bigIdeas.map((idea) => (
                    <li key={idea.id}>
                      <IdeaCard
                        idea={idea}
                        accent={u.accent}
                        shaky={shaky.has(idea.id)}
                        onToggleShaky={() => onToggleShaky(idea.id)}
                        onOpen={() => onOpenIdea(idea.id)}
                      />
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

function UnitRow({
  unit,
  open,
  shakyInUnit,
  onToggle,
}: {
  unit: BriefingUnit;
  open: boolean;
  shakyInUnit: number;
  onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      className="w-full text-left p-4 md:p-5 transition hover:brightness-110"
      style={{
        background: "var(--bg-elev)",
        border: `1px solid ${unit.accent}`,
        borderRadius: 10,
      }}
      aria-expanded={open}
    >
      <div className="flex items-baseline gap-3 mb-1">
        <span className="eyebrow" style={{ color: unit.accent }}>
          Unit {unit.unitNumber}
        </span>
        <span className="t-12" style={{ color: "var(--text-dim)" }}>
          {unit.yearStart}–{unit.yearEnd}
        </span>
        <span className="t-12 ml-auto" style={{ color: "var(--text-dim)" }}>
          {unit.bigIdeas.length} Big Ideas
          {shakyInUnit > 0 ? ` · ${shakyInUnit} flagged` : ""}
        </span>
        <span
          aria-hidden
          style={{
            color: "var(--text-dim)",
            fontFamily: "ui-sans-serif",
            fontSize: 14,
            transition: "transform 200ms var(--ease)",
            transform: open ? "rotate(90deg)" : "rotate(0deg)",
            display: "inline-block",
          }}
        >
          ›
        </span>
      </div>
      <h3 className="font-display t-20 md:t-26 leading-tight mb-1">{unit.title}</h3>
      <p className="t-14 prose-cap" style={{ color: "var(--text-muted)" }}>
        {unit.blurb}
      </p>
    </button>
  );
}

function IdeaCard({
  idea,
  accent,
  shaky,
  onToggleShaky,
  onOpen,
}: {
  idea: BigIdea;
  accent: string;
  shaky: boolean;
  onToggleShaky: () => void;
  onOpen: () => void;
}) {
  return (
    <div
      className="relative h-full"
      style={{
        background: "var(--bg-elev)",
        border: shaky ? `1px solid ${accent}` : "1px solid var(--border-soft)",
        borderRadius: 8,
        boxShadow: shaky ? `inset 0 0 0 1px ${accent}55` : "none",
      }}
    >
      <button
        onClick={onOpen}
        className="w-full h-full text-left p-4 transition hover:brightness-110"
        style={{ background: "transparent" }}
      >
        <div className="flex items-baseline gap-2 mb-1.5 pr-7">
          <span className="eyebrow" style={{ color: accent }}>
            Big Idea {idea.ideaNumber}
          </span>
          <span className="t-12" style={{ color: "var(--text-dim)" }}>
            {idea.year}{idea.endYear ? `–${idea.endYear}` : ""}
          </span>
        </div>
        <h4 className="font-display t-16 leading-tight mb-1.5">{idea.title}</h4>
        <p
          className="t-12 prose-cap"
          style={{
            color: "var(--text-muted)",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {idea.thesis}
        </p>
      </button>

      <button
        onClick={onToggleShaky}
        aria-label={shaky ? "Unmark — I remember this" : "Mark — I don't remember this"}
        title={shaky ? "Remembered — remove from Study Deck" : "Add to Study Deck"}
        className="absolute"
        style={{
          top: 6,
          right: 6,
          width: 28,
          height: 28,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 999,
          background: shaky ? accent : "transparent",
          color: shaky ? "var(--bg)" : "var(--text-dim)",
          border: shaky ? "none" : "1px solid var(--border-soft)",
          fontSize: 14,
          fontWeight: 700,
          cursor: "pointer",
          transition: "background 150ms ease, color 150ms ease, border-color 150ms ease",
        }}
      >
        ★
      </button>
    </div>
  );
}
