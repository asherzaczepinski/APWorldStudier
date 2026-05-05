"use client";

import { useState } from "react";
import HeimlerHome from "@/components/HeimlerHome";
import HeimlerTopicView from "@/components/HeimlerTopicView";
import type { HeimlerTopic, HeimlerUnit } from "@/lib/data/heimlerUnits";

type Active = { unit: HeimlerUnit; topic: HeimlerTopic };

export default function Page() {
  const [active, setActive] = useState<Active | null>(null);

  if (active) {
    return (
      <HeimlerTopicView
        unit={active.unit}
        topic={active.topic}
        onBack={() => setActive(null)}
      />
    );
  }
  return <HeimlerHome onSelectTopic={(unit, topic) => setActive({ unit, topic })} />;
}
