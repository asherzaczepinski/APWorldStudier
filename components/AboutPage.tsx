"use client";

type Props = {
  onStart: () => void;
};

export default function AboutPage({ onStart }: Props) {
  return (
    <div>
      <div className="mb-6 md:mb-8">
        <div className="eyebrow mb-2" style={{ color: "var(--text-dim)" }}>
          Welcome
        </div>
        <h2 className="font-display t-26 md:text-4xl leading-tight">
          AP World Studier — quick tour.
        </h2>
        <p className="t-14 mt-3 prose-cap" style={{ color: "var(--text-muted)", maxWidth: 720 }}>
          Three tabs at the top: <strong style={{ color: "var(--text)" }}>Units</strong> for the
          content,{" "}<strong style={{ color: "var(--text)" }}>Formatting</strong> for the writing
          side, and <strong style={{ color: "var(--text)" }}>Study Deck</strong> for review +
          multiple-choice practice on whatever you flagged.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card eyebrow="STEP 1" title="Pick a unit on the Units tab" accent="#f59e0b">
          <p className="t-12 prose-cap" style={{ color: "var(--text-muted)" }}>
            All 9 units of AP World Modern (1200–present) live there. Click a unit and it expands into
            its Big Ideas. Each Big Idea is a single thesis with a side panel of bullets, a sample SAQ
            in CER format, and (sometimes) a Venn comparison.
          </p>
        </Card>

        <Card eyebrow="STEP 2" title="Open a Big Idea" accent="#10b981">
          <p className="t-12 prose-cap" style={{ color: "var(--text-muted)" }}>
            Click any Big Idea card to fly the globe to its region. Every country stays
            colored by its home region — China red, Middle East gold, Latin America purple, etc. — so
            you build a stable mental map.
          </p>
        </Card>

        <Card eyebrow="STEP 3" title="Move around the globe" accent="#60a5fa">
          <p className="t-12 prose-cap" style={{ color: "var(--text-muted)" }}>
            Drag to spin, scroll to zoom. Click any pin or trade-route line on the map and the camera
            flies right to it. Hover or click a route to dim the pins so you can read the line. Click
            an empty spot to reset.
          </p>
        </Card>

        <Card eyebrow="STEP 4" title="Flag what you don't know" accent="#a855f7">
          <p className="t-12 prose-cap" style={{ color: "var(--text-muted)" }}>
            Tap the <span style={{ color: "var(--text)", fontWeight: 700 }}>★</span> on any
            Big Idea card to add it to your Study Deck. Those flagged ideas become your review pile —
            and the basis for the multiple-choice quiz.
          </p>
        </Card>

        <Card eyebrow="STEP 5" title="Study Deck = review + quiz" accent="#dc2626">
          <p className="t-12 prose-cap" style={{ color: "var(--text-muted)" }}>
            The Study Deck shows your flagged Big Ideas all at once — thesis, bullets, visuals, sample
            SAQ. Switch to <strong style={{ color: "var(--text)" }}>Quiz</strong> mode to drill yourself
            with multiple-choice questions auto-generated from the same set.
          </p>
        </Card>

        <Card eyebrow="STEP 6" title="Formatting tab for writing" accent="#0ea5e9">
          <p className="t-12 prose-cap" style={{ color: "var(--text-muted)" }}>
            How to actually structure SAQs (CER), DBQs (with a full model essay), LEQs, and the HIPP
            sourcing trick (lean on Purpose). Open it before writing anything.
          </p>
        </Card>
      </div>

      <div className="mt-8 flex justify-center">
        <button
          onClick={onStart}
          className="t-14"
          style={{
            background: "var(--text)",
            color: "var(--bg)",
            border: "none",
            borderRadius: 999,
            padding: "10px 24px",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Start studying →
        </button>
      </div>
    </div>
  );
}

function Card({
  eyebrow,
  title,
  accent,
  children,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  children: React.ReactNode;
}) {
  return (
    <section
      style={{
        background: "var(--bg-elev)",
        border: "1px solid var(--border-soft)",
        borderLeft: `3px solid ${accent}`,
        borderRadius: 8,
        padding: "14px 16px",
      }}
    >
      <div className="eyebrow mb-1.5" style={{ color: accent }}>{eyebrow}</div>
      <h3 className="font-display t-16 leading-tight mb-2">{title}</h3>
      {children}
    </section>
  );
}
