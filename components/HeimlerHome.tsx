"use client";

import { heimlerUnits, type HeimlerUnit } from "@/lib/data/heimlerUnits";

type Props = {
  onSelectUnit: (unit: HeimlerUnit) => void;
};

export default function HeimlerHome({ onSelectUnit }: Props) {
  return (
    <div className="fixed inset-0 overflow-y-auto" style={{ background: "var(--bg)" }}>
      <header
        className="sticky top-0 z-30 flex items-center justify-between gap-4 px-4 md:px-6 py-2.5"
        style={{ borderBottom: "1px solid var(--border-soft)", background: "var(--bg)" }}
      >
        <h1 className="font-display t-20">AP World Studier</h1>
        <span className="eyebrow" style={{ color: "var(--text-dim)" }}>
          Heimler follow-along
        </span>
      </header>

      <main className="max-w-5xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="mb-8 md:mb-12">
          <div className="eyebrow mb-2" style={{ color: "var(--text-dim)" }}>
            Heimler&apos;s History · AP World Modern
          </div>
          <h2 className="font-display t-26 md:text-4xl leading-tight">
            Pick a unit.
          </h2>
          <p className="t-14 mt-3 prose-cap" style={{ color: "var(--text-muted)", maxWidth: 640 }}>
            Each unit loads its empires, routes, and a timeline of every dated event.
            Click a timeline event to color-code the regions it touches.
          </p>
        </div>

        <ol className="grid gap-3 md:gap-4 sm:grid-cols-2">
          {heimlerUnits.map((u) => (
            <li key={u.unitNumber}>
              <button
                onClick={() => onSelectUnit(u)}
                className="w-full text-left p-5 transition hover:brightness-110"
                style={{
                  background: "var(--bg-elev)",
                  border: `1px solid ${u.accent}`,
                  borderRadius: 8,
                }}
              >
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="eyebrow" style={{ color: u.accent }}>
                    Unit {u.unitNumber}
                  </span>
                  <span className="t-12" style={{ color: "var(--text-dim)" }}>
                    {u.yearStart}–{u.yearEnd}
                  </span>
                </div>
                <h3 className="font-display t-20 leading-tight mb-2">{u.title}</h3>
                <p className="t-14 prose-cap" style={{ color: "var(--text-muted)" }}>
                  {u.subtitle}
                </p>
              </button>
            </li>
          ))}
        </ol>

        <div
          className="mt-12 t-12 text-center"
          style={{ color: "var(--text-dim)" }}
        >
          {heimlerUnits.length} units · one Heimler.
        </div>
      </main>
    </div>
  );
}
