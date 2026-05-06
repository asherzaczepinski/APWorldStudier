"use client";

import { useState } from "react";

type Section = "saq" | "dbq" | "leq" | "hipp";

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
          SAQ uses <strong style={{ color: "var(--text)" }}>CER</strong>. Source documents using
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
      </div>

      {section === "saq" && <SAQGuide />}
      {section === "dbq" && <DBQGuide />}
      {section === "leq" && <LEQGuide />}
      {section === "hipp" && <HIPPGuide />}
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
// SAQ — Claim, Evidence, Reasoning (CER)
// ---------------------------------------------------------------------------

function SAQGuide() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card title="Format" eyebrow="STRUCTURE" accent="#fbbf24">
        <p className="t-12 prose-cap" style={{ color: "var(--text-muted)" }}>
          Three short parts (3 questions: A / B / C). Don&apos;t write a paragraph for each — write
          3–5 tight sentences that hit Claim → Evidence → Reasoning.
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
        </ul>
      </Card>

      <div className="md:col-span-2">
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
// DBQ — 7-point rubric + full model essay at the bottom
// ---------------------------------------------------------------------------

function DBQGuide() {
  return (
    <div className="grid gap-4">
      <div className="grid gap-4 md:grid-cols-2">
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
            <li>5 min check — did I cite 6 docs and add 1 outside fact?</li>
          </ul>
          <p className="t-12 mt-3 prose-cap" style={{ color: "var(--text-dim)" }}>
            You&apos;re not interpreting docs in isolation — you&apos;re using docs as evidence for
            an argument you already made.
          </p>
        </Card>
      </div>

      <Card title="Thesis: the “Although, ultimately” move" eyebrow="MODEL THESIS" accent="#10b981">
        <p className="t-12 mb-3 prose-cap" style={{ color: "var(--text-muted)" }}>
          Take a stance, give a reason, name nuance. Don&apos;t restate the prompt. Keep it ONE
          sentence — anything more buries the claim.
        </p>
        <p
          className="t-12 mt-2 prose-cap font-display"
          style={{
            color: "var(--text)",
            background: "var(--bg-elev)",
            border: "1px dashed var(--border-soft)",
            borderLeft: "3px solid #10b981",
            padding: "10px 12px",
            borderRadius: 6,
          }}
        >
          &quot;Although [counter], ultimately [main argument], because [reason 1] and [reason 2].&quot;
        </p>
        <div className="eyebrow mt-4 mb-1.5" style={{ color: "#10b981" }}>
          Real example — prompt: &quot;Evaluate the extent to which industrialization reshaped global trade 1750–1900.&quot;
        </div>
        <p
          className="t-14 leading-snug font-display"
          style={{
            color: "var(--text)",
            borderLeft: "3px solid #10b981",
            paddingLeft: 12,
            background: "var(--bg-elev)",
            padding: "10px 12px",
            borderRadius: 6,
          }}
        >
          Although older trade circuits like the Indian Ocean spice trade persisted into the 19th
          century, ultimately industrialization fundamentally restructured global trade by collapsing
          Asian manufacturing dominance and reorganizing colonized economies around raw-material
          exports, because British factories outproduced Mughal artisans at a fraction of the cost
          and steam-powered shipping plus rail collapsed transport times worldwide.
        </p>
      </Card>

      <Card title="Full model DBQ" eyebrow="FULL ESSAY" accent="#10b981">
        <p className="t-12 mb-3 prose-cap" style={{ color: "var(--text-muted)" }}>
          Same prompt: <em style={{ color: "var(--text)" }}>Evaluate the extent to which industrialization reshaped global trade between 1750 and 1900.</em>
        </p>

        <ModelParagraph label="Contextualization" body="Before 1750, mercantilism dominated European economic policy and most manufactured goods came from skilled artisans in places like Mughal India, Qing China, and Ottoman cities. India alone produced roughly a quarter of the world's manufactured output. The Industrial Revolution — born in Britain because of its concentrated coal and iron, navigable rivers, and stable financial institutions — would shatter this Asian-led balance of production and reorient world trade around European cores and colonial peripheries." />

        <ModelParagraph label="Thesis" body="Although older trade circuits like the Indian Ocean spice trade persisted into the 19th century, ultimately industrialization fundamentally restructured global trade by collapsing Asian manufacturing dominance and reorganizing colonized economies around raw-material exports, because British factories outproduced Mughal artisans at a fraction of the cost and steam-powered shipping plus rail collapsed transport times worldwide." italic />

        <ModelParagraph label="Body 1 — Manufacturing shifts West" body="The most dramatic effect of industrialization was the relocation of textile production from India to Britain. As Doc 2 (a British MP defending free trade in 1840) shows, Britain framed dismantling protective tariffs as universal benefit while simultaneously imposing tariffs on Indian cloth. Doc 4's mill-output figures confirm the result: by 1850 Manchester produced more cotton textiles annually than all of South Asia combined. Outside the docs, India's share of global manufacturing collapsed from 25% in 1750 to under 2% by 1900. Sourcing — Doc 2's purpose, written by an MP defending British free trade, is to justify dismantling the Corn Laws, which supports my argument that industrial states pursued legal regimes designed to keep raw materials cheap and Asian competitors out." />

        <ModelParagraph label="Body 2 — Colonial economies reorganized" body="Industrialization simultaneously restructured colonized regions around raw-material extraction. Doc 5 (a French colonial planner's memo, 1875) explicitly describes Indochina as an exporter of rice and rubber to feed industrial Europe. Doc 6 shows Belgian Congo rubber tonnage rising 800% under Leopold II's brutal regime. Across the Atlantic, Brazilian coffee exports to Hamburg and Argentine beef shipments to Liverpool created export-monoculture economies whose effects still mark Latin America. Sourcing — Doc 5's purpose, a French colonial official addressing Paris, is to justify continued investment in Indochina, which supports my argument that industrialization drove imperial states to deliberately reshape colonies around raw-material exports." />

        <ModelParagraph label="Body 3 — Transport tech collapsed distance" body="None of this would have worked at scale without 2nd-Industrial-Revolution transport. Steam-powered iron-hulled ships, the Suez Canal (1869), the Trans-Siberian and US Transcontinental railways, and the global telegraph network compressed transport times and information lags by an order of magnitude. Doc 1's freight-rate table shows the price of shipping wheat London-to-Chicago falling 80% between 1860 and 1900. The result was the first truly global commodity market — Egyptian cotton, Argentine beef, and Burmese rice could be priced against each other in real time." />

        <ModelParagraph label="Complex understanding" body="The reshaping was not uniform. Japan's Meiji Restoration (1868) shows that non-European states could selectively adopt industrial methods to RESIST imperial economic pressure rather than be flattened by it; by 1900 Japan was colonizing Korea rather than being colonized. This complicates any simple Europe-imposes-Asia-receives narrative — industrialization was a tool whose effects depended heavily on which state grabbed it first." />

        <ModelParagraph label="Conclusion" body="By 1900, industrialization had remade global trade more thoroughly than any change since the Columbian Exchange. Old trade circuits survived, but the underlying balance — who manufactured, who supplied raw materials, who set the terms — had completely flipped. The 20th-century world economy, with its sharp Global North / Global South split, is built directly on the foundations laid in this period." />
      </Card>
    </div>
  );
}

function ModelParagraph({
  label,
  body,
  italic,
}: {
  label: string;
  body: string;
  italic?: boolean;
}) {
  return (
    <div className="mt-3">
      <div
        className="eyebrow"
        style={{
          color: "var(--bg)",
          background: "#10b981",
          display: "inline-block",
          padding: "1.5px 8px",
          borderRadius: 4,
          fontWeight: 700,
        }}
      >
        {label}
      </div>
      <p
        className="t-12 mt-1.5 prose-cap"
        style={{
          color: "var(--text-muted)",
          fontStyle: italic ? "italic" : "normal",
          maxWidth: "70ch",
        }}
      >
        {body}
      </p>
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
// LEQ — chill version
// ---------------------------------------------------------------------------

function LEQGuide() {
  return (
    <div className="grid gap-4">
      <Card title="LEQ — just write" eyebrow="DON'T STRESS" accent="#60a5fa">
        <p className="t-14 prose-cap mb-3" style={{ color: "var(--text)" }}>
          Honestly? Just write. Don&apos;t worry about it.
        </p>
        <p className="t-12 prose-cap" style={{ color: "var(--text-muted)" }}>
          You don&apos;t have docs to anchor against, so the LEQ is mostly your reading + the same
          thesis muscle the DBQ uses. Pick a thesis you can actually back up with two specific
          examples, write a few paragraphs, and move on.
        </p>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card title="Rubric (6 pts)" eyebrow="POINTS" accent="#60a5fa">
          <ul className="space-y-1.5 t-12" style={{ color: "var(--text-muted)" }}>
            <Bullet n="1">Thesis (1).</Bullet>
            <Bullet n="2">Contextualization (1).</Bullet>
            <Bullet n="3">Evidence (2) — 2 specific examples (1 pt) → use them to support the argument (2 pts).</Bullet>
            <Bullet n="5">Historical reasoning (1) — comparison / causation / CCOT.</Bullet>
            <Bullet n="6">Complex understanding (1).</Bullet>
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
