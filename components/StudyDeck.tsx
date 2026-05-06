"use client";

import { useEffect, useMemo, useState } from "react";
import { briefingUnits, type BigIdea } from "@/lib/data/briefing";
import { regionPalette } from "@/lib/data/regionPalette";
import { ideaQuizzes } from "@/lib/data/quizQuestions";

type Props = {
  shaky: Set<string>;
  onOpenIdea: (id: string) => void;
};

type Mode = "review" | "quiz";

export default function StudyDeck({ shaky, onOpenIdea }: Props) {
  const [mode, setMode] = useState<Mode>("review");
  // When set, a focused-quiz overlay covers the screen with questions for
  // ONLY that one Big Idea. Triggered by each review card's "Open quiz" button.
  const [focusedQuizIdeaId, setFocusedQuizIdeaId] = useState<string | null>(null);

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

  if (deck.length === 0) {
    return <EmptyState />;
  }

  return (
    <div>
      <div className="mb-6 flex items-baseline justify-between flex-wrap gap-3">
        <div>
          <div className="eyebrow mb-2" style={{ color: "var(--text-dim)" }}>
            Study Deck · {deck.length} flagged Big Idea{deck.length === 1 ? "" : "s"}
          </div>
          <h2 className="font-display t-26 md:text-4xl leading-tight">
            {mode === "review" ? "Everything you flagged." : "Quiz yourself."}
          </h2>
        </div>
        <div
          className="inline-flex rounded-full p-1"
          style={{ border: "1px solid var(--border-soft)", background: "var(--bg-elev)" }}
        >
          <ModeBtn active={mode === "review"} onClick={() => setMode("review")}>Review</ModeBtn>
          <ModeBtn active={mode === "quiz"} onClick={() => setMode("quiz")}>Quiz</ModeBtn>
        </div>
      </div>

      {mode === "review" ? (
        <ReviewList
          deck={deck}
          onOpenIdea={onOpenIdea}
          onOpenQuiz={(id) => setFocusedQuizIdeaId(id)}
        />
      ) : (
        <QuizMode deck={deck} onOpenIdea={onOpenIdea} />
      )}

      {focusedQuizIdeaId && (
        <FocusedQuizOverlay
          ideaId={focusedQuizIdeaId}
          onClose={() => setFocusedQuizIdeaId(null)}
          onOpenIdea={onOpenIdea}
        />
      )}
    </div>
  );
}

function ModeBtn({
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
        on Big Ideas you don&apos;t remember. They&apos;ll show up here for review and quizzing.
      </p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Review mode — every flagged Big Idea, fully revealed, all in one scroll
// ---------------------------------------------------------------------------

function ReviewList({
  deck,
  onOpenIdea,
  onOpenQuiz,
}: {
  deck: { idea: BigIdea; unitNumber: number; accent: string }[];
  onOpenIdea: (id: string) => void;
  onOpenQuiz: (id: string) => void;
}) {
  return (
    <ol className="space-y-4">
      {deck.map(({ idea, unitNumber, accent }) => (
        <li key={idea.id}>
          <SlideCard
            idea={idea}
            accent={accent}
            unitNumber={unitNumber}
            onOpenGlobe={() => onOpenIdea(idea.id)}
            onOpenQuiz={() => onOpenQuiz(idea.id)}
          />
        </li>
      ))}
    </ol>
  );
}

function SlideCard({
  idea,
  accent,
  unitNumber,
  onOpenGlobe,
  onOpenQuiz,
}: {
  idea: BigIdea;
  accent: string;
  unitNumber: number;
  onOpenGlobe: () => void;
  onOpenQuiz: () => void;
}) {
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
            <p className="t-14 mb-2 font-display" style={{ color: "var(--text)" }}>
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

        <div className="flex flex-wrap gap-2 mt-5">
          <button
            onClick={onOpenQuiz}
            className="t-14"
            style={{
              background: accent,
              color: "var(--bg)",
              border: "none",
              borderRadius: 999,
              padding: "9px 18px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Open quiz
          </button>
          <button
            onClick={onOpenGlobe}
            className="t-14"
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
      </div>
    </article>
  );
}

// ---------------------------------------------------------------------------
// Focused-quiz overlay — runs questions for ONE Big Idea only.
// ---------------------------------------------------------------------------

function FocusedQuizOverlay({
  ideaId,
  onClose,
  onOpenIdea,
}: {
  ideaId: string;
  onClose: () => void;
  onOpenIdea: (id: string) => void;
}) {
  const idea = useMemo<BigIdea | null>(() => {
    for (const u of briefingUnits) {
      const i = u.bigIdeas.find((x) => x.id === ideaId);
      if (i) return i;
    }
    return null;
  }, [ideaId]);

  const accent = useMemo(() => {
    for (const u of briefingUnits) {
      if (u.bigIdeas.some((x) => x.id === ideaId)) return u.accent;
    }
    return "#fbbf24";
  }, [ideaId]);

  const pool = useMemo<Question[]>(() => {
    const out: Question[] = [];
    const handCrafted = ideaQuizzes[ideaId] ?? [];
    for (let i = 0; i < handCrafted.length; i++) {
      const q = handCrafted[i];
      out.push({
        id: `${ideaId}-focused-${i}`,
        ideaId,
        kind: "feature",
        prompt: q.prompt,
        options: q.options,
        correctIndex: q.correctIndex,
        rationale: q.rationale,
      });
    }
    return out;
  }, [ideaId]);

  const [pos, setPos] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [hits, setHits] = useState(0);
  const [misses, setMisses] = useState(0);

  // Esc key closes the overlay.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!idea) return null;

  function submit(idx: number) {
    if (picked !== null) return;
    setPicked(idx);
    if (idx === pool[pos].correctIndex) setHits((h) => h + 1);
    else setMisses((m) => m + 1);
  }

  function next() {
    setPicked(null);
    setPos((p) => Math.min(pool.length - 1, p + 1));
  }

  const done = pos >= pool.length - 1 && picked !== null;
  const current = pool[pos];

  return (
    <div
      className="fixed inset-0"
      style={{
        background: "color-mix(in oklch, black 82%, transparent)",
        backdropFilter: "blur(6px)",
        zIndex: 60,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px 16px",
        animation: "info-pop-in 200ms cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      role="dialog"
      aria-label={`Focused quiz: ${idea.title}`}
    >
      <div
        style={{
          background: "var(--bg-elev)",
          border: `1px solid ${accent}`,
          borderRadius: 14,
          width: "min(720px, 100%)",
          maxHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          boxShadow: "0 24px 60px -20px oklch(0% 0 0 / 0.7)",
        }}
      >
        <div
          className="flex items-baseline justify-between gap-3"
          style={{
            padding: "14px 18px",
            borderBottom: "1px solid var(--border-soft)",
          }}
        >
          <div>
            <div className="eyebrow" style={{ color: accent }}>
              Focused quiz · Unit {idea.unitNumber} · BI {idea.ideaNumber}
            </div>
            <h3 className="font-display t-20 leading-tight mt-0.5">{idea.title}</h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close quiz"
            className="t-12"
            style={{
              background: "transparent",
              color: "var(--text-dim)",
              border: "1px solid var(--border-soft)",
              borderRadius: 999,
              padding: "5px 11px",
              cursor: "pointer",
            }}
          >
            ✕ Esc
          </button>
        </div>

        <div style={{ padding: "18px", overflowY: "auto", flex: 1 }}>
          {pool.length === 0 ? (
            <p className="t-14 prose-cap" style={{ color: "var(--text-muted)" }}>
              No questions available yet for this Big Idea.
            </p>
          ) : (
            <>
              <div className="flex items-center gap-2 mb-3 t-12" style={{ color: "var(--text-dim)" }}>
                <span>Question {pos + 1} of {pool.length}</span>
                <span style={{ color: "#10b981" }}>· ✓ {hits}</span>
                <span style={{ color: "#ef4444" }}>· ✗ {misses}</span>
              </div>

              <h4 className="font-display t-20 leading-snug mb-4">{current.prompt}</h4>

              <ol className="space-y-2">
                {current.options.map((opt, i) => {
                  const answered = picked !== null;
                  const isCorrect = i === current.correctIndex;
                  const isPicked = i === picked;
                  let bg = "var(--bg)";
                  let border = "1px solid var(--border-soft)";
                  let color = "var(--text)";
                  if (answered && isCorrect) {
                    bg = "color-mix(in oklch, #10b981 18%, var(--bg-elev))";
                    border = "1px solid #10b981";
                  } else if (answered && isPicked && !isCorrect) {
                    bg = "color-mix(in oklch, #ef4444 18%, var(--bg-elev))";
                    border = "1px solid #ef4444";
                  } else if (answered) {
                    color = "var(--text-muted)";
                  }
                  return (
                    <li key={i}>
                      <button
                        onClick={() => submit(i)}
                        disabled={answered}
                        className="w-full text-left t-14"
                        style={{
                          background: bg,
                          border,
                          color,
                          borderRadius: 8,
                          padding: "10px 14px",
                          cursor: answered ? "default" : "pointer",
                        }}
                      >
                        <span className="font-display" style={{ marginRight: 10, color: "var(--text-dim)" }}>
                          {String.fromCharCode(65 + i)}.
                        </span>
                        {opt}
                      </button>
                    </li>
                  );
                })}
              </ol>

              {picked !== null && (
                <div
                  className="mt-4"
                  style={{
                    background: "var(--bg)",
                    border: "1px solid var(--border-soft)",
                    borderLeft: `3px solid ${picked === current.correctIndex ? "#10b981" : "#ef4444"}`,
                    borderRadius: 6,
                    padding: "10px 12px",
                  }}
                >
                  <div className="eyebrow" style={{ color: picked === current.correctIndex ? "#10b981" : "#ef4444" }}>
                    {picked === current.correctIndex ? "Correct" : "Missed"}
                  </div>
                  <p className="t-12 mt-1.5 prose-cap" style={{ color: "var(--text-muted)" }}>
                    {current.rationale}
                  </p>
                </div>
              )}
            </>
          )}
        </div>

        <div
          className="flex items-center justify-between gap-2 flex-wrap"
          style={{
            padding: "12px 18px",
            borderTop: "1px solid var(--border-soft)",
          }}
        >
          <button
            onClick={() => onOpenIdea(ideaId)}
            className="t-12"
            style={{
              background: "transparent",
              color: "var(--text-dim)",
              border: "1px solid var(--border-soft)",
              borderRadius: 999,
              padding: "7px 14px",
              cursor: "pointer",
            }}
          >
            Open on globe
          </button>
          {!done && picked !== null && (
            <button
              onClick={next}
              className="t-12"
              style={{
                background: "var(--text)",
                color: "var(--bg)",
                border: "none",
                borderRadius: 999,
                padding: "7px 16px",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Next →
            </button>
          )}
          {done && (
            <button
              onClick={onClose}
              className="t-12"
              style={{
                background: accent,
                color: "var(--bg)",
                border: "none",
                borderRadius: 999,
                padding: "7px 16px",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Done — {hits}/{pool.length} correct
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Quiz mode — multiple choice, generated from the flagged set, weighted to
// the Big Ideas the user gets wrong most often. Tracks miss counts.
// ---------------------------------------------------------------------------

type QuestionKind = "thesis" | "year" | "region" | "feature";

type Question = {
  id: string;
  ideaId: string;
  kind: QuestionKind;
  prompt: string;
  options: string[];
  correctIndex: number;
  // Plain-language explanation shown after answering.
  rationale: string;
};

function QuizMode({
  deck,
  onOpenIdea,
}: {
  deck: { idea: BigIdea; unitNumber: number; accent: string }[];
  onOpenIdea: (id: string) => void;
}) {
  // Per-Big-Idea miss + hit counts. Higher misses → questions on it weighted
  // higher in the queue.
  const [stats, setStats] = useState<Record<string, { hits: number; misses: number }>>({});
  const [pool] = useState<Question[]>(() => generateQuestions(deck.map((d) => d.idea)));
  const [current, setCurrent] = useState<Question | null>(() => pickWeighted(pool, {}));
  const [picked, setPicked] = useState<number | null>(null);
  const [answeredCount, setAnsweredCount] = useState(0);

  // When deck changes (user adds / removes flags), rebuild the pool implicitly
  // by remounting via a key — this is good enough; the parent passes a stable
  // shaky set, which is the source of truth.
  useEffect(() => {
    if (!current && pool.length > 0) {
      setCurrent(pickWeighted(pool, stats));
    }
  }, [pool, current, stats]);

  if (pool.length === 0) {
    return (
      <div
        style={{
          background: "var(--bg-elev)",
          border: "1px solid var(--border-soft)",
          borderRadius: 8,
          padding: "24px",
        }}
      >
        <p className="t-14 prose-cap" style={{ color: "var(--text-muted)" }}>
          You need at least 2 flagged Big Ideas in your Study Deck for the quiz to have enough wrong
          answers to choose from. Flag a few more on the Units tab.
        </p>
      </div>
    );
  }

  if (!current) {
    return null;
  }

  function submit(idx: number) {
    if (picked !== null || !current) return;
    setPicked(idx);
    const correct = idx === current.correctIndex;
    setStats((s) => {
      const cur = s[current.ideaId] ?? { hits: 0, misses: 0 };
      return {
        ...s,
        [current.ideaId]: {
          hits: cur.hits + (correct ? 1 : 0),
          misses: cur.misses + (correct ? 0 : 1),
        },
      };
    });
    setAnsweredCount((n) => n + 1);
  }

  function next() {
    setPicked(null);
    setCurrent(pickWeighted(pool, stats));
  }

  // Weakest Big Idea (most misses) — shown so user sees what's tripping them up.
  const weakest = useMemo(() => {
    let worst: { id: string; misses: number } | null = null;
    for (const [id, s] of Object.entries(stats)) {
      if (!worst || s.misses > worst.misses) {
        worst = { id, misses: s.misses };
      }
    }
    if (!worst || worst.misses === 0) return null;
    for (const u of briefingUnits) {
      const i = u.bigIdeas.find((x) => x.id === worst!.id);
      if (i) return { idea: i, misses: worst.misses };
    }
    return null;
  }, [stats]);

  const totalHits = Object.values(stats).reduce((a, s) => a + s.hits, 0);
  const totalMisses = Object.values(stats).reduce((a, s) => a + s.misses, 0);

  return (
    <div className="grid gap-4">
      {/* Stats strip */}
      <div className="flex items-center gap-3 flex-wrap">
        <Stat label="Answered" value={answeredCount} />
        <Stat label="Correct" value={totalHits} good />
        <Stat label="Missed" value={totalMisses} bad />
        {weakest && (
          <button
            onClick={() => onOpenIdea(weakest.idea.id)}
            className="t-12"
            style={{
              background: "var(--bg-elev)",
              border: "1px solid var(--border-soft)",
              borderLeft: "3px solid #ef4444",
              color: "var(--text)",
              borderRadius: 6,
              padding: "6px 10px",
              cursor: "pointer",
              marginLeft: "auto",
            }}
            title="Open this Big Idea on the globe"
          >
            <span style={{ color: "var(--text-dim)" }}>weakest:</span>{" "}
            <strong>{weakest.idea.title}</strong>{" "}
            <span style={{ color: "var(--text-dim)" }}>· {weakest.misses} miss{weakest.misses === 1 ? "" : "es"}</span>
          </button>
        )}
      </div>

      <QuestionCard
        q={current}
        picked={picked}
        onPick={submit}
        onNext={next}
        onOpenIdea={() => onOpenIdea(current.ideaId)}
      />
    </div>
  );
}

function Stat({
  label,
  value,
  good,
  bad,
}: {
  label: string;
  value: number;
  good?: boolean;
  bad?: boolean;
}) {
  const color = good ? "#10b981" : bad ? "#ef4444" : "var(--text)";
  return (
    <div
      style={{
        background: "var(--bg-elev)",
        border: "1px solid var(--border-soft)",
        borderRadius: 6,
        padding: "5px 12px",
      }}
    >
      <div className="eyebrow" style={{ color: "var(--text-dim)" }}>{label}</div>
      <div className="font-display t-20" style={{ color }}>
        {value}
      </div>
    </div>
  );
}

function QuestionCard({
  q,
  picked,
  onPick,
  onNext,
  onOpenIdea,
}: {
  q: Question;
  picked: number | null;
  onPick: (i: number) => void;
  onNext: () => void;
  onOpenIdea: () => void;
}) {
  const answered = picked !== null;
  return (
    <article
      style={{
        background: "var(--bg-elev)",
        border: "1px solid var(--border-soft)",
        borderRadius: 12,
        padding: "20px 22px",
      }}
    >
      <div className="eyebrow mb-2" style={{ color: "var(--text-dim)" }}>
        Multiple choice · {labelForKind(q.kind)}
      </div>
      <h3 className="font-display t-20 leading-snug mb-4">{q.prompt}</h3>

      <ol className="space-y-2">
        {q.options.map((opt, i) => {
          const isCorrect = i === q.correctIndex;
          const isPicked = i === picked;
          let bg = "var(--bg)";
          let border = "1px solid var(--border-soft)";
          let color = "var(--text)";
          if (answered && isCorrect) {
            bg = "color-mix(in oklch, #10b981 18%, var(--bg-elev))";
            border = "1px solid #10b981";
          } else if (answered && isPicked && !isCorrect) {
            bg = "color-mix(in oklch, #ef4444 18%, var(--bg-elev))";
            border = "1px solid #ef4444";
          } else if (answered) {
            color = "var(--text-muted)";
          }
          return (
            <li key={i}>
              <button
                onClick={() => onPick(i)}
                disabled={answered}
                className="w-full text-left t-14 transition"
                style={{
                  background: bg,
                  border,
                  color,
                  borderRadius: 8,
                  padding: "10px 14px",
                  cursor: answered ? "default" : "pointer",
                }}
              >
                <span
                  className="font-display"
                  style={{ marginRight: 10, color: "var(--text-dim)" }}
                >
                  {String.fromCharCode(65 + i)}.
                </span>
                {opt}
              </button>
            </li>
          );
        })}
      </ol>

      {answered && (
        <div
          className="mt-4"
          style={{
            background: "var(--bg)",
            border: "1px solid var(--border-soft)",
            borderLeft: `3px solid ${picked === q.correctIndex ? "#10b981" : "#ef4444"}`,
            borderRadius: 6,
            padding: "10px 12px",
          }}
        >
          <div
            className="eyebrow"
            style={{ color: picked === q.correctIndex ? "#10b981" : "#ef4444" }}
          >
            {picked === q.correctIndex ? "Correct" : "Missed"}
          </div>
          <p className="t-12 mt-1.5 prose-cap" style={{ color: "var(--text-muted)" }}>
            {q.rationale}
          </p>
          <div className="flex gap-2 mt-3 flex-wrap">
            <button
              onClick={onNext}
              className="t-12"
              style={{
                background: "var(--text)",
                color: "var(--bg)",
                border: "none",
                borderRadius: 999,
                padding: "7px 16px",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Next question →
            </button>
            <button
              onClick={onOpenIdea}
              className="t-12"
              style={{
                background: "transparent",
                color: "var(--text)",
                border: "1px solid var(--border-soft)",
                borderRadius: 999,
                padding: "7px 14px",
                cursor: "pointer",
              }}
            >
              Open on globe
            </button>
          </div>
        </div>
      )}
    </article>
  );
}

function labelForKind(k: QuestionKind): string {
  switch (k) {
    case "thesis": return "Thesis";
    case "year": return "Date";
    case "region": return "Region";
    case "feature": return "Detail";
  }
}

// ---------------------------------------------------------------------------
// Question generation
// ---------------------------------------------------------------------------

function generateQuestions(ideas: BigIdea[]): Question[] {
  const out: Question[] = [];
  if (ideas.length === 0) return out;

  // 1) Hand-curated questions take priority — these are the high-quality ones.
  for (const idea of ideas) {
    const handCrafted = ideaQuizzes[idea.id];
    if (handCrafted && handCrafted.length > 0) {
      for (let i = 0; i < handCrafted.length; i++) {
        const q = handCrafted[i];
        out.push({
          id: `${idea.id}-curated-${i}`,
          ideaId: idea.id,
          kind: "feature",
          prompt: q.prompt,
          options: q.options,
          correctIndex: q.correctIndex,
          rationale: q.rationale,
        });
      }
    }
  }

  // 2) Auto-generated questions as a small supplement (only when the user has
  //    flagged enough Big Ideas that we can sample distractors from siblings).
  for (const idea of ideas) {
    // 1) "Which Big Idea is about ___?" — given the thesis, pick the title.
    {
      const wrongTitles = ideas
        .filter((x) => x.id !== idea.id)
        .map((x) => x.title);
      if (wrongTitles.length >= 1) {
        const options = pickN(wrongTitles, 3);
        const insertAt = Math.floor(Math.random() * (options.length + 1));
        options.splice(insertAt, 0, idea.title);
        out.push({
          id: `${idea.id}-thesis`,
          ideaId: idea.id,
          kind: "thesis",
          prompt: `Which Big Idea matches this thesis: "${idea.thesis}"`,
          options,
          correctIndex: insertAt,
          rationale: `That thesis is the core of "${idea.title}" (Unit ${idea.unitNumber}, BI ${idea.ideaNumber}).`,
        });
      }
    }

    // 2) Year question — given a description, when did this happen?
    {
      const yearStr = idea.endYear
        ? `${idea.year}–${idea.endYear}`
        : `${idea.year}`;
      const wrongYears = ideas
        .filter((x) => x.id !== idea.id)
        .map((x) => (x.endYear ? `${x.year}–${x.endYear}` : `${x.year}`))
        .filter((y) => y !== yearStr);
      if (wrongYears.length >= 1) {
        const options = pickN(wrongYears, 3);
        const insertAt = Math.floor(Math.random() * (options.length + 1));
        options.splice(insertAt, 0, yearStr);
        out.push({
          id: `${idea.id}-year`,
          ideaId: idea.id,
          kind: "year",
          prompt: `When did "${idea.title}" mainly take place?`,
          options,
          correctIndex: insertAt,
          rationale: `${idea.title} centers on ${yearStr}.`,
        });
      }
    }

    // 3) Region question — given the title, where did this mainly happen?
    {
      const regions = idea.spotlightRegions
        .map((id) => regionPalette[id]?.name)
        .filter(Boolean) as string[];
      if (regions.length > 0) {
        const correct = regions.join(" + ");
        const allRegionNames = Object.values(regionPalette).map((r) => r.name);
        const wrong = allRegionNames.filter((n) => !regions.includes(n));
        const options = pickN(wrong, 3);
        const insertAt = Math.floor(Math.random() * (options.length + 1));
        options.splice(insertAt, 0, correct);
        out.push({
          id: `${idea.id}-region`,
          ideaId: idea.id,
          kind: "region",
          prompt: `Which region(s) is "${idea.title}" mainly about?`,
          options,
          correctIndex: insertAt,
          rationale: `${idea.title} is set in ${correct}.`,
        });
      }
    }

    // 4) Feature questions — match a feature blurb to its label.
    for (const f of idea.features.slice(0, 2)) {
      const otherLabels: string[] = [];
      for (const other of ideas) {
        for (const ff of other.features) {
          if (ff.id !== f.id && ff.label !== f.label) otherLabels.push(ff.label);
        }
      }
      if (otherLabels.length < 3) continue;
      const options = pickN(uniq(otherLabels), 3);
      const insertAt = Math.floor(Math.random() * (options.length + 1));
      options.splice(insertAt, 0, f.label);
      out.push({
        id: `${idea.id}-${f.id}-feature`,
        ideaId: idea.id,
        kind: "feature",
        prompt: `Which of these matches: "${f.blurb}"`,
        options,
        correctIndex: insertAt,
        rationale: `${f.label} appears in "${idea.title}".`,
      });
    }
  }

  return out;
}

function uniq<T>(arr: T[]): T[] {
  const seen = new Set<T>();
  const out: T[] = [];
  for (const x of arr) {
    if (seen.has(x)) continue;
    seen.add(x);
    out.push(x);
  }
  return out;
}

function pickN<T>(arr: T[], n: number): T[] {
  const copy = [...arr];
  const out: T[] = [];
  while (out.length < n && copy.length > 0) {
    const idx = Math.floor(Math.random() * copy.length);
    out.push(copy.splice(idx, 1)[0]);
  }
  return out;
}

/** Pick a question, biased toward Big Ideas the user has missed most often. */
function pickWeighted(
  pool: Question[],
  stats: Record<string, { hits: number; misses: number }>
): Question | null {
  if (pool.length === 0) return null;
  // Each Big Idea gets weight = (misses + 1) ^ 1.5 — recently-missed ideas
  // dominate, but un-tested ideas (weight 1) still appear regularly.
  const weights = pool.map((q) => {
    const s = stats[q.ideaId];
    const misses = s?.misses ?? 0;
    return Math.pow(misses + 1, 1.5);
  });
  const total = weights.reduce((a, w) => a + w, 0);
  let r = Math.random() * total;
  for (let i = 0; i < pool.length; i++) {
    r -= weights[i];
    if (r <= 0) return pool[i];
  }
  return pool[pool.length - 1];
}
