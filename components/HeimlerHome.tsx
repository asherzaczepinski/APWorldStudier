"use client";

import { heimlerUnits, type HeimlerTopic, type HeimlerUnit } from "@/lib/data/heimlerUnits";

type Props = {
  onSelectTopic: (unit: HeimlerUnit, topic: HeimlerTopic) => void;
};

export default function HeimlerHome({ onSelectTopic }: Props) {
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

      <main className="max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="mb-8 md:mb-12">
          <div className="eyebrow mb-2" style={{ color: "var(--text-dim)" }}>
            Heimler&apos;s History · AP World Modern
          </div>
          <h2 className="font-display t-26 md:text-4xl leading-tight">
            Pick a topic.
          </h2>
          <p className="t-14 mt-3 prose-cap" style={{ color: "var(--text-muted)", maxWidth: 640 }}>
            Each topic is one of Heimler&apos;s videos. Click in to load only the empires, routes,
            cities, and events he mentions in that video — nothing else.
          </p>
        </div>

        <div className="space-y-8 md:space-y-10">
          {heimlerUnits.map((u) => (
            <section key={u.unitNumber}>
              <div className="flex items-baseline justify-between gap-3 mb-3">
                <div className="flex items-baseline gap-3">
                  <span className="eyebrow" style={{ color: u.accent }}>
                    Unit {u.unitNumber}
                  </span>
                  <h3 className="font-display t-20 md:t-26 leading-tight">{u.title}</h3>
                  <span className="t-12" style={{ color: "var(--text-dim)" }}>
                    {u.yearStart}–{u.yearEnd}
                  </span>
                </div>
                <a
                  href={u.playlistUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="t-12"
                  style={{ color: "var(--text-dim)" }}
                >
                  Playlist ↗
                </a>
              </div>
              <p className="t-14 mb-3 prose-cap" style={{ color: "var(--text-muted)" }}>
                {u.subtitle}
              </p>
              <ol className="grid gap-2 md:gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                {u.topics.map((t) => {
                  const summary = t.isUnitSummary;
                  return (
                    <li
                      key={t.code}
                      className={summary ? "sm:col-span-2 lg:col-span-3" : undefined}
                    >
                      <button
                        onClick={() => onSelectTopic(u, t)}
                        className="w-full text-left p-3 transition hover:brightness-110"
                        style={{
                          background: summary
                            ? `color-mix(in oklch, ${u.accent} 16%, transparent)`
                            : "var(--bg-elev)",
                          border: summary
                            ? `1px solid ${u.accent}`
                            : "1px solid var(--border-soft)",
                          borderRadius: 6,
                        }}
                      >
                        <div className="flex items-baseline gap-2 mb-1">
                          <span
                            className="t-12 font-display flex-shrink-0"
                            style={{ color: u.accent }}
                          >
                            {summary ? "★ " : ""}{t.code}
                          </span>
                          <span className="font-display t-14 leading-tight">
                            {t.title}
                          </span>
                          {summary && (
                            <span
                              className="t-12 ml-auto flex-shrink-0"
                              style={{ color: u.accent }}
                            >
                              everything at once
                            </span>
                          )}
                        </div>
                        <p
                          className="t-12 prose-cap"
                          style={{ color: "var(--text-muted)" }}
                        >
                          {t.summary}
                        </p>
                      </button>
                    </li>
                  );
                })}
              </ol>
            </section>
          ))}
        </div>

        <div
          className="mt-12 t-12 text-center"
          style={{ color: "var(--text-dim)" }}
        >
          {heimlerUnits.reduce((sum, u) => sum + u.topics.length, 0)} topics · 9 units · one Heimler.
        </div>
      </main>
    </div>
  );
}
