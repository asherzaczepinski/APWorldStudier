"use client";

import { useState } from "react";
import { heimlerUnits, type HeimlerUnit } from "@/lib/data/heimlerUnits";
import { regions } from "@/lib/data/regions";
import type { Region } from "@/lib/types";

type Props = {
  onSelectUnit: (unit: HeimlerUnit) => void;
  onSelectRegion: (region: Region) => void;
};

type Tab = "unit" | "region";

export default function HeimlerHome({ onSelectUnit, onSelectRegion }: Props) {
  const [tab, setTab] = useState<Tab>("unit");

  return (
    <div className="fixed inset-0 overflow-y-auto" style={{ background: "var(--bg)" }}>
      <header
        className="sticky top-0 z-30 flex items-center justify-between gap-4 px-4 md:px-6 py-2.5"
        style={{ borderBottom: "1px solid var(--border-soft)", background: "var(--bg)" }}
      >
        <h1 className="font-display t-20">AP World Studier</h1>
      </header>

      <main className="max-w-5xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="mb-6 md:mb-8">
          <div className="eyebrow mb-2" style={{ color: "var(--text-dim)" }}>
            AP World Modern · 1200–present
          </div>
          <h2 className="font-display t-26 md:text-4xl leading-tight">
            {tab === "unit" ? "Pick a unit." : "Pick a region."}
          </h2>
          <p className="t-14 mt-3 prose-cap" style={{ color: "var(--text-muted)", maxWidth: 640 }}>
            {tab === "unit"
              ? "Each unit loads its empires, routes, and a timeline of every dated event. Click an event to color-code the regions it touches."
              : "Pick a region to see every event that happened there across the four AP periods, in one timeline."}
          </p>
        </div>

        <div
          className="inline-flex rounded-full p-1 mb-6"
          style={{
            border: "1px solid var(--border-soft)",
            background: "var(--bg-elev)",
          }}
          role="tablist"
          aria-label="Browse mode"
        >
          <TabButton active={tab === "unit"} onClick={() => setTab("unit")}>
            By unit
          </TabButton>
          <TabButton active={tab === "region"} onClick={() => setTab("region")}>
            By region
          </TabButton>
        </div>

        {tab === "unit" ? (
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
        ) : (
          <ol className="grid gap-2.5 md:gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {regions.map((r) => (
              <li key={r.id}>
                <button
                  onClick={() => onSelectRegion(r)}
                  className="w-full text-left p-4 transition hover:brightness-110"
                  style={{
                    background: "var(--bg-elev)",
                    border: "1px solid var(--border-soft)",
                    borderRadius: 8,
                  }}
                >
                  <h3 className="font-display t-16 leading-tight mb-1">{r.name}</h3>
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
                    {r.blurb}
                  </p>
                </button>
              </li>
            ))}
          </ol>
        )}

        <div
          className="mt-12 t-12 text-center"
          style={{ color: "var(--text-dim)" }}
        >
          {tab === "unit"
            ? `${heimlerUnits.length} units.`
            : `${regions.length} regions.`}
        </div>
      </main>
    </div>
  );
}

function TabButton({
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
      className="px-4 py-1.5 t-12 rounded-full transition"
      style={{
        background: active ? "var(--text)" : "transparent",
        color: active ? "var(--bg)" : "var(--text-muted)",
        fontWeight: active ? 600 : 400,
      }}
    >
      {children}
    </button>
  );
}
