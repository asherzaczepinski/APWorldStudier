"use client";

import { useState } from "react";
import HeimlerHome from "@/components/HeimlerHome";
import HeimlerUnitView from "@/components/HeimlerTopicView";
import HeimlerRegionView from "@/components/HeimlerRegionView";
import type { HeimlerUnit } from "@/lib/data/heimlerUnits";
import type { HomeRegion } from "@/lib/data/homeRegions";

type View =
  | { kind: "home" }
  | { kind: "unit"; unit: HeimlerUnit }
  | { kind: "region"; region: HomeRegion };

export default function Page() {
  const [view, setView] = useState<View>({ kind: "home" });

  if (view.kind === "unit") {
    return (
      <HeimlerUnitView
        unit={view.unit}
        onBack={() => setView({ kind: "home" })}
      />
    );
  }
  if (view.kind === "region") {
    return (
      <HeimlerRegionView
        region={view.region}
        onBack={() => setView({ kind: "home" })}
      />
    );
  }
  return (
    <HeimlerHome
      onSelectUnit={(unit) => setView({ kind: "unit", unit })}
      onSelectRegion={(region) => setView({ kind: "region", region })}
    />
  );
}
