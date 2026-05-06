"use client";

import { useMemo, useState } from "react";
import { briefingUnits, type BigIdea } from "@/lib/data/briefing";
import BriefingHome from "./BriefingHome";
import BigIdeaView from "./BigIdeaView";
import FormattingGuide from "./FormattingGuide";
import StudyDeck from "./StudyDeck";

type Tab = "units" | "formatting" | "study";

export default function BriefingApp() {
  const [tab, setTab] = useState<Tab>("units");
  const [openIdeaId, setOpenIdeaId] = useState<string | null>(null);
  // Set of big-idea IDs the user marked "I don't remember this" — used by Study Deck.
  const [shaky, setShaky] = useState<Set<string>>(() => new Set());

  const openIdea = useMemo<BigIdea | null>(() => {
    if (!openIdeaId) return null;
    for (const u of briefingUnits) {
      const i = u.bigIdeas.find((x) => x.id === openIdeaId);
      if (i) return i;
    }
    return null;
  }, [openIdeaId]);

  function toggleShaky(id: string) {
    setShaky((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  // Big Idea view takes over the whole screen when an idea is open.
  if (openIdea) {
    return (
      <BigIdeaView
        idea={openIdea}
        onBack={() => setOpenIdeaId(null)}
        onPickNeighbor={(id) => setOpenIdeaId(id)}
      />
    );
  }

  return (
    <div className="fixed inset-0 overflow-y-auto" style={{ background: "var(--bg)" }}>
      <header
        className="sticky top-0 z-30 flex items-center justify-between gap-2 px-4 md:px-6 py-2.5"
        style={{ borderBottom: "1px solid var(--border-soft)", background: "var(--bg)" }}
      >
        <h1 className="font-display t-20">AP World Studier</h1>
        <nav
          className="inline-flex rounded-full p-1"
          style={{ border: "1px solid var(--border-soft)", background: "var(--bg-elev)" }}
          role="tablist"
        >
          <TabButton active={tab === "units"} onClick={() => setTab("units")}>Units</TabButton>
          <TabButton active={tab === "formatting"} onClick={() => setTab("formatting")}>Formatting</TabButton>
          <TabButton
            active={tab === "study"}
            onClick={() => setTab("study")}
            badge={shaky.size > 0 ? shaky.size : undefined}
          >
            Study Deck
          </TabButton>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-4 md:px-8 py-6 md:py-10">
        {tab === "units" && (
          <BriefingHome
            shaky={shaky}
            onToggleShaky={toggleShaky}
            onOpenIdea={(id) => setOpenIdeaId(id)}
          />
        )}
        {tab === "formatting" && <FormattingGuide />}
        {tab === "study" && (
          <StudyDeck shaky={shaky} onOpenIdea={(id) => setOpenIdeaId(id)} />
        )}
      </main>
    </div>
  );
}

function TabButton({
  active,
  onClick,
  badge,
  children,
}: {
  active: boolean;
  onClick: () => void;
  badge?: number;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      role="tab"
      aria-selected={active}
      className="px-4 py-1.5 t-12 rounded-full transition relative"
      style={{
        background: active ? "var(--text)" : "transparent",
        color: active ? "var(--bg)" : "var(--text-muted)",
        fontWeight: active ? 600 : 400,
      }}
    >
      {children}
      {badge !== undefined && badge > 0 && (
        <span
          className="ml-1.5 inline-flex items-center justify-center"
          style={{
            background: active ? "var(--bg)" : "var(--text)",
            color: active ? "var(--text)" : "var(--bg)",
            borderRadius: 999,
            minWidth: 18,
            height: 18,
            fontSize: 10,
            fontWeight: 700,
            padding: "0 5px",
          }}
        >
          {badge}
        </span>
      )}
    </button>
  );
}
