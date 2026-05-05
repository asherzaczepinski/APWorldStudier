"use client";

import { useState } from "react";
import HeimlerHome from "@/components/HeimlerHome";
import HeimlerUnitView from "@/components/HeimlerTopicView";
import type { HeimlerUnit } from "@/lib/data/heimlerUnits";

export default function Page() {
  const [unit, setUnit] = useState<HeimlerUnit | null>(null);

  if (unit) {
    return <HeimlerUnitView unit={unit} onBack={() => setUnit(null)} />;
  }
  return <HeimlerHome onSelectUnit={setUnit} />;
}
