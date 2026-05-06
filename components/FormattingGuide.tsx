"use client";

import { useState } from "react";

type Section = "saq" | "dbq" | "leq" | "hipp" | "prompts";

export default function FormattingGuide() {
  const [section, setSection] = useState<Section>("saq");

  return (
    <div>
      <div className="mb-6 md:mb-8">
        <div className="eyebrow mb-2" style={{ color: "var(--text-dim)" }}>
          Writing Guide
        </div>
        <h2 className="font-display t-26 md:text-4xl leading-tight">How to format every AP World response.</h2>
        <p className="t-14 mt-3 prose-cap" style={{ color: "var(--text-muted)", maxWidth: 720 }}>
          SAQ uses <strong style={{ color: "var(--text)" }}>CER</strong> (not TEA). Source documents using
          <strong style={{ color: "var(--text)" }}> HIPP</strong> — but in practice just lean on{" "}
          <strong style={{ color: "var(--text)" }}>Purpose</strong>. Pick a section.
        </p>
      </div>

      <div
        className="inline-flex flex-wrap rounded-full p-1 mb-6"
        style={{ border: "1px solid var(--border-soft)", background: "var(--bg-elev)" }}
        role="tablist"
      >
        <SectionTab active={section === "saq"} onClick={() => setSection("saq")}>SAQ</SectionTab>
        <SectionTab active={section === "dbq"} onClick={() => setSection("dbq")}>DBQ</SectionTab>
        <SectionTab active={section === "leq"} onClick={() => setSection("leq")}>LEQ</SectionTab>
        <SectionTab active={section === "hipp"} onClick={() => setSection("hipp")}>HIPP &amp; Sourcing</SectionTab>
        <SectionTab active={section === "prompts"} onClick={() => setSection("prompts")}>Common prompts</SectionTab>
      </div>

      {section === "saq" && <SAQGuide />}
      {section === "dbq" && <DBQGuide />}
      {section === "leq" && <LEQGuide />}
      {section === "hipp" && <HIPPGuide />}
      {section === "prompts" && <PromptsGuide />}
    </div>
  );
}

function SectionTab({
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

// ---------------------------------------------------------------------------
// SAQ — Claim, Evidence, Reasoning (CER, NOT TEA)
// ---------------------------------------------------------------------------

function SAQGuide() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card title="Format" eyebrow="STRUCTURE" accent="#fbbf24">
        <p className="t-12 prose-cap" style={{ color: "var(--text-muted)" }}>
          Three short parts (3 questions: A / B / C). Don&apos;t write a paragraph for each — write 3–5 tight
          sentences that hit Claim → Evidence → Reasoning.
        </p>
        <CERStack />
      </Card>

      <Card title="The trick" eyebrow="PRO TIP" accent="#fbbf24">
        <ul className="space-y-2 t-12 prose-cap" style={{ color: "var(--text-muted)" }}>
          <li>
            <strong style={{ color: "var(--text)" }}>Claim</strong> — directly answer the prompt in 1
            sentence. Use the verb of the prompt: &quot;Identify…&quot; → &quot;One way was X.&quot;
          </li>
          <li>
            <strong style={{ color: "var(--text)" }}>Evidence</strong> — a SPECIFIC fact (year,
            person, place, treaty). General claims sink the response.
          </li>
          <li>
            <strong style={{ color: "var(--text)" }}>Reasoning</strong> — connect the evidence back
            to the claim. Why does this prove your point?
          </li>
          <li>Use CER, not TEA. The College Board wants reasoning to do the heavy lifting.</li>
        </ul>
      </Card>

      <Card title="CER vs TEA" eyebrow="VENN" accent="#fbbf24">
        <Venn
          left="CER"
          right="TEA"
          leftOnly={["Reasoning is its own step", "Used for SAQ", "Pushes you to explain WHY"]}
          rightOnly={["Topic sentence emphasis", "Common in 5-paragraph essays", "Less analytic"]}
          both={["Need a clear claim", "Need specific evidence", "Argument-style writing"]}
          accent="#fbbf24"
        />
      </Card>

      <div className="md:col-span-3">
        <Card title="Worked example" eyebrow="MODEL" accent="#fbbf24">
          <p className="t-14 mb-2 font-display" style={{ color: "var(--text)" }}>
            Prompt: <em style={{ color: "var(--text-muted)" }}>Identify ONE way the Mongol empire facilitated cultural exchange across Afro-Eurasia.</em>
          </p>
          <CERPart label="Claim" body="One way the Mongols facilitated cultural exchange was by deliberately moving skilled scholars across the empire." />
          <CERPart label="Evidence" body="At observatories like Maragha in Persia, Mongol khans brought Chinese astronomers and Persian mathematicians together to compile new astronomical tables." />
          <CERPart label="Reasoning" body="This wasn't accidental diffusion through trade — the Mongol state actively engineered the contact, which is why the 'Pax Mongolica' produced such a dense burst of cross-cultural innovation in just one century." />
        </Card>
      </div>
    </div>
  );
}

function CERStack() {
  return (
    <div className="mt-3 space-y-1.5">
      <Stack label="C — Claim" body="Direct answer to the prompt." color="#fbbf24" />
      <Stack label="E — Evidence" body="Specific fact (year, name, place)." color="#10b981" />
      <Stack label="R — Reasoning" body="Why the evidence proves the claim." color="#60a5fa" />
    </div>
  );
}

function Stack({ label, body, color }: { label: string; body: string; color: string }) {
  return (
    <div
      style={{
        background: "var(--bg-elev)",
        border: `1px solid ${color}55`,
        borderLeft: `3px solid ${color}`,
        borderRadius: 6,
        padding: "6px 10px",
      }}
    >
      <div className="t-12 font-display" style={{ color }}>{label}</div>
      <div className="t-12" style={{ color: "var(--text-muted)" }}>{body}</div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// DBQ — 7-point rubric
// ---------------------------------------------------------------------------

function DBQGuide() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card title="Rubric (7 pts)" eyebrow="POINTS" accent="#10b981">
        <ul className="space-y-1.5 t-12" style={{ color: "var(--text-muted)" }}>
          <Bullet n="1">Thesis (1) — historically defensible, takes a stance.</Bullet>
          <Bullet n="2">Contextualization (1) — broader background BEFORE the prompt window.</Bullet>
          <Bullet n="3">Evidence from docs (2) — use 4 docs (1 pt) → 6 docs (2 pts).</Bullet>
          <Bullet n="5">Outside evidence (1) — 1 specific piece of evidence NOT in the docs.</Bullet>
          <Bullet n="6">Sourcing (1) — explain HIPP for 2 docs (just use Purpose).</Bullet>
          <Bullet n="7">Complex understanding (1) — nuance: similarity + difference, change + continuity, etc.</Bullet>
        </ul>
      </Card>

      <Card title="Pacing (60 min)" eyebrow="STRATEGY" accent="#10b981">
        <ul className="space-y-1.5 t-12 prose-cap" style={{ color: "var(--text-muted)" }}>
          <li>15 min reading + planning. Annotate every doc with HIPP-Purpose.</li>
          <li>40 min writing — intro + 3 body paragraphs + conclusion.</li>
          <li>5 min check — did I cite 6 docs, source 2, add 1 outside fact?</li>
        </ul>
        <p className="t-12 mt-3 prose-cap" style={{ color: "var(--text-dim)" }}>
          You&apos;re not interpreting docs in isolation — you&apos;re using docs as evidence for an argument
          you already made.
        </p>
      </Card>

      <Card title="Sourcing (just Purpose)" eyebrow="SHORTCUT" accent="#10b981">
        <p className="t-12 prose-cap" style={{ color: "var(--text-muted)" }}>
          You only need 2 docs sourced. Don&apos;t do 4 separate HIPP attempts — pick the easiest 2 docs and
          write a clean Purpose explanation:
        </p>
        <p
          className="t-12 mt-3 prose-cap font-display"
          style={{
            color: "var(--text)",
            background: "var(--bg-elev)",
            border: "1px solid var(--border-soft)",
            borderLeft: "3px solid #10b981",
            padding: "8px 10px",
            borderRadius: 6,
          }}
        >
          &quot;The author wrote this in order to ___, which is significant because ___.&quot;
        </p>
        <p className="t-12 mt-2 prose-cap" style={{ color: "var(--text-dim)" }}>
          That single move usually gets the sourcing point on its own.
        </p>
      </Card>

      <div className="md:col-span-3">
        <Card title="Thesis template" eyebrow="MODEL" accent="#10b981">
          <p className="t-12 mb-2 prose-cap" style={{ color: "var(--text-muted)" }}>
            Take a stance, give a reason, name nuance. Don&apos;t restate the prompt.
          </p>
          <p
            className="t-14 mt-2 font-display prose-cap"
            style={{ color: "var(--text)", borderLeft: "3px solid #10b981", paddingLeft: 10 }}
          >
            &quot;Although [counter], [main argument], because [reason 1] and [reason 2].&quot;
          </p>
          <p className="t-12 mt-3 prose-cap" style={{ color: "var(--text-dim)" }}>
            Keep it ONE sentence. Anything more and you&apos;ll bury the claim.
          </p>
        </Card>
      </div>
    </div>
  );
}

function Bullet({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <li
      className="t-12 prose-cap"
      style={{ color: "var(--text-muted)", paddingLeft: 24, position: "relative" }}
    >
      <span
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 18,
          height: 18,
          borderRadius: 999,
          background: "var(--bg-elev)",
          border: "1px solid var(--border-soft)",
          color: "var(--text)",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 10,
          fontWeight: 700,
        }}
      >
        {n}
      </span>
      {children}
    </li>
  );
}

// ---------------------------------------------------------------------------
// LEQ — 6-point rubric
// ---------------------------------------------------------------------------

function LEQGuide() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card title="Rubric (6 pts)" eyebrow="POINTS" accent="#60a5fa">
        <ul className="space-y-1.5 t-12" style={{ color: "var(--text-muted)" }}>
          <Bullet n="1">Thesis (1).</Bullet>
          <Bullet n="2">Contextualization (1).</Bullet>
          <Bullet n="3">Evidence (2) — 2 specific examples (1 pt) → use them to support the argument (2 pts).</Bullet>
          <Bullet n="5">Historical reasoning (1) — comparison / causation / CCOT.</Bullet>
          <Bullet n="6">Complex understanding (1) — multiple POVs, qualifications, comparison + contrast.</Bullet>
        </ul>
      </Card>

      <Card title="Reasoning skills" eyebrow="PICK ONE" accent="#60a5fa">
        <ul className="space-y-1.5 t-12 prose-cap" style={{ color: "var(--text-muted)" }}>
          <li>
            <strong style={{ color: "var(--text)" }}>Comparison</strong> — similarity + difference between two things.
          </li>
          <li>
            <strong style={{ color: "var(--text)" }}>Causation</strong> — causes / effects of a development.
          </li>
          <li>
            <strong style={{ color: "var(--text)" }}>CCOT</strong> — what changed, what stayed the same.
          </li>
        </ul>
      </Card>

      <Card title="Pacing (40 min)" eyebrow="STRATEGY" accent="#60a5fa">
        <ul className="space-y-1.5 t-12 prose-cap" style={{ color: "var(--text-muted)" }}>
          <li>5 min plan — outline: thesis, 3 body paragraph topics, evidence per body.</li>
          <li>30 min write.</li>
          <li>5 min check — did each body para tie back to the thesis with reasoning?</li>
        </ul>
      </Card>

      <div className="md:col-span-3">
        <Card title="LEQ vs DBQ" eyebrow="VENN" accent="#60a5fa">
          <Venn
            left="LEQ"
            right="DBQ"
            leftOnly={["No documents", "40 min", "6 points", "Need outside evidence only"]}
            rightOnly={["7 documents", "60 min", "7 points", "Source 2 docs (HIPP / Purpose)"]}
            both={[
              "Defensible thesis",
              "Contextualization point",
              "Specific evidence supports argument",
              "Complex-understanding point",
            ]}
            accent="#60a5fa"
          />
        </Card>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// HIPP & sourcing
// ---------------------------------------------------------------------------

function HIPPGuide() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card title="HIPP" eyebrow="ACRONYM" accent="#a855f7">
        <ul className="space-y-2 t-12 prose-cap" style={{ color: "var(--text-muted)" }}>
          <li>
            <strong style={{ color: "var(--text)" }}>H — Historical situation:</strong> What was
            going on at the time the doc was made?
          </li>
          <li>
            <strong style={{ color: "var(--text)" }}>I — Intended audience:</strong> Who is the
            author writing TO?
          </li>
          <li>
            <strong style={{ color: "var(--text)" }}>P — Point of view:</strong> What is the
            author&apos;s position / role?
          </li>
          <li>
            <strong style={{ color: "var(--text)" }}>P — Purpose:</strong> WHY is the author
            writing this? (← lean here)
          </li>
        </ul>
        <p
          className="t-12 mt-3 prose-cap"
          style={{
            color: "var(--text)",
            background: "var(--bg-elev)",
            border: "1px solid #a855f7",
            borderLeft: "3px solid #a855f7",
            padding: "8px 10px",
            borderRadius: 6,
          }}
        >
          Recommended: just use Purpose. It&apos;s the most reliable way to nail the sourcing point —
          one move, one sentence, one point.
        </p>
      </Card>

      <Card title="Purpose template" eyebrow="ONE LINE" accent="#a855f7">
        <p className="t-12 prose-cap" style={{ color: "var(--text-muted)" }}>
          Read the doc, ask &quot;why did they bother writing this?&quot; Then use this template:
        </p>
        <div
          className="mt-3"
          style={{
            background: "var(--bg-elev)",
            border: "1px solid var(--border-soft)",
            borderLeft: "3px solid #a855f7",
            borderRadius: 6,
            padding: "10px 12px",
          }}
        >
          <p className="t-12 font-display" style={{ color: "var(--text)" }}>
            &quot;The author wrote this <em>in order to</em> [persuade / justify / mobilize /
            warn] [audience], <em>which supports my argument that</em> ___.&quot;
          </p>
        </div>
        <p className="t-12 mt-3 prose-cap" style={{ color: "var(--text-dim)" }}>
          Don&apos;t just describe the purpose — connect it to your argument. That second clause is what
          earns the point.
        </p>
      </Card>

      <div className="md:col-span-2">
        <Card title="Sourcing tips & tricks" eyebrow="SHORTCUTS" accent="#a855f7">
          <ul className="space-y-2 t-12 prose-cap" style={{ color: "var(--text-muted)" }}>
            <li>
              <strong style={{ color: "var(--text)" }}>Pick the &quot;loud&quot; docs:</strong> letters,
              speeches, propaganda, advertisements — they have an obvious purpose. Skip dry tables for
              your sourcing picks.
            </li>
            <li>
              <strong style={{ color: "var(--text)" }}>Spot the bias:</strong> a Spanish missionary writing
              about the Aztecs has a wildly different purpose than an Aztec elder. Use that gap.
            </li>
            <li>
              <strong style={{ color: "var(--text)" }}>Don&apos;t guess H, I, P:</strong> if you&apos;re
              confused about the historical situation or audience, skip them. Purpose alone earns the
              point.
            </li>
            <li>
              <strong style={{ color: "var(--text)" }}>Connect, don&apos;t describe:</strong> &quot;The
              author&apos;s purpose is to do X&quot; → 0 pts. &quot;The author&apos;s purpose is X, which
              supports my argument that Y&quot; → 1 pt.
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Common College Board prompt patterns
// ---------------------------------------------------------------------------

function PromptsGuide() {
  return (
    <div className="grid gap-4">
      <Card title="SAQ verb cues" eyebrow="LEARN THE VERBS" accent="#fbbf24">
        <ul className="space-y-1.5 t-12 prose-cap" style={{ color: "var(--text-muted)" }}>
          <li>
            <strong style={{ color: "var(--text)" }}>&quot;Identify ONE …&quot;</strong> — name + 1 sentence of context.
          </li>
          <li>
            <strong style={{ color: "var(--text)" }}>&quot;Explain ONE …&quot;</strong> — name + reasoning. Use full CER.
          </li>
          <li>
            <strong style={{ color: "var(--text)" }}>&quot;Describe ONE similarity / difference&quot;</strong>{" "}
            — give a comparison fact + why it matters.
          </li>
          <li>
            <strong style={{ color: "var(--text)" }}>&quot;Cause / effect&quot;</strong> — pick ONE clear
            causal link. Don&apos;t list multiple weak ones.
          </li>
        </ul>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card title="DBQ patterns" eyebrow="REPEAT OFFENDERS" accent="#10b981">
          <ul className="space-y-2 t-12 prose-cap" style={{ color: "var(--text-muted)" }}>
            <li>&quot;Causes / effects of [Industrial Rev / WWI / decolonization].&quot;</li>
            <li>&quot;Continuities / changes in [labor systems / women&apos;s roles].&quot;</li>
            <li>&quot;Compare two empires / states / responses.&quot;</li>
            <li>&quot;Effects of [imperialism / globalization / Columbian Exchange].&quot;</li>
          </ul>
          <p className="t-12 mt-3 prose-cap" style={{ color: "var(--text-dim)" }}>
            All of these are CCOT or comparison in disguise. Plan two body paragraphs around two
            categories (economic + political / cultural + environmental).
          </p>
        </Card>

        <Card title="LEQ patterns" eyebrow="REPEAT OFFENDERS" accent="#60a5fa">
          <ul className="space-y-2 t-12 prose-cap" style={{ color: "var(--text-muted)" }}>
            <li>&quot;Compare X and Y between [date] and [date].&quot;</li>
            <li>&quot;Explain causes of [Atlantic Revolutions / Cold War / decolonization].&quot;</li>
            <li>&quot;Continuities and changes in [trade / state-building / migration] in [region].&quot;</li>
          </ul>
        </Card>
      </div>

      <Card title="DBQ vs LEQ" eyebrow="VENN" accent="#a855f7">
        <Venn
          left="DBQ"
          right="LEQ"
          leftOnly={[
            "7 documents provided",
            "60 min total (15 plan + 40 write + 5 check)",
            "Sourcing 2 docs (Purpose)",
            "4 docs = 1pt, 6 docs = 2pts",
          ]}
          rightOnly={[
            "No documents",
            "40 min total",
            "Pure outside evidence",
            "Lean harder on reasoning skill",
          ]}
          both={[
            "Defensible thesis (1pt)",
            "Contextualization (1pt)",
            "Specific evidence used in argument",
            "Complex understanding (1pt)",
          ]}
          accent="#a855f7"
        />
      </Card>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Shared
// ---------------------------------------------------------------------------

function Card({
  title,
  eyebrow,
  accent,
  children,
}: {
  title: string;
  eyebrow: string;
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

function Venn({
  left,
  right,
  leftOnly,
  rightOnly,
  both,
  accent,
}: {
  left: string;
  right: string;
  leftOnly: string[];
  rightOnly: string[];
  both: string[];
  accent: string;
}) {
  return (
    <div className="grid grid-cols-3 gap-2 mt-2">
      <VennCol title={`${left} only`} items={leftOnly} color={accent} />
      <VennCol title="Both" items={both} color="var(--text)" highlight />
      <VennCol title={`${right} only`} items={rightOnly} color="var(--text-dim)" />
    </div>
  );
}

function VennCol({
  title,
  items,
  color,
  highlight,
}: {
  title: string;
  items: string[];
  color: string;
  highlight?: boolean;
}) {
  return (
    <div
      style={{
        background: highlight ? "var(--surface-2)" : "var(--bg-elev)",
        border: "1px solid var(--border-soft)",
        borderTop: `3px solid ${color}`,
        borderRadius: 6,
        padding: "8px 10px",
      }}
    >
      <div className="eyebrow mb-2" style={{ color }}>{title}</div>
      <ul className="space-y-1.5">
        {items.map((it, i) => (
          <li
            key={i}
            className="t-12 prose-cap"
            style={{ color: "var(--text-muted)", paddingLeft: 12, position: "relative" }}
          >
            <span
              aria-hidden
              style={{
                position: "absolute",
                left: 0,
                top: 7,
                width: 4,
                height: 4,
                borderRadius: 999,
                background: color,
              }}
            />
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

function CERPart({
  label,
  body,
}: {
  label: string;
  body: string;
}) {
  return (
    <div className="mt-2.5">
      <div
        className="eyebrow"
        style={{
          color: "var(--bg)",
          background: "#fbbf24",
          display: "inline-block",
          padding: "2px 8px",
          borderRadius: 4,
          fontWeight: 700,
        }}
      >
        {label}
      </div>
      <p className="t-12 mt-1.5 prose-cap" style={{ color: "var(--text-muted)" }}>
        {body}
      </p>
    </div>
  );
}
