"use client";

import { useCallback, useRef, useState } from "react";
import { periods } from "@/lib/data/periods";

const MIN = 1200;
const MAX = 2025;

type Props = {
  year: number;
  onChange: (y: number) => void;
};

export default function YearScrubber({ year, onChange }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);
  const [hoverYear, setHoverYear] = useState<number | null>(null);

  const period =
    periods.find((p) => year >= p.startYear && year <= p.endYear) ?? periods[0];
  const progress = (year - MIN) / (MAX - MIN);

  const yearFromX = useCallback(
    (clientX: number): number => {
      const el = trackRef.current;
      if (!el) return year;
      const rect = el.getBoundingClientRect();
      const t = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
      return Math.round(MIN + t * (MAX - MIN));
    },
    [year]
  );

  const onPointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      e.currentTarget.setPointerCapture(e.pointerId);
      draggingRef.current = true;
      onChange(yearFromX(e.clientX));
    },
    [onChange, yearFromX]
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      const next = yearFromX(e.clientX);
      setHoverYear(next);
      if (draggingRef.current) onChange(next);
    },
    [onChange, yearFromX]
  );

  const onPointerUp = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.releasePointerCapture(e.pointerId);
    draggingRef.current = false;
  }, []);

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      let delta = 0;
      if (e.key === "ArrowLeft") delta = -1;
      else if (e.key === "ArrowRight") delta = 1;
      else if (e.key === "PageDown") delta = -10;
      else if (e.key === "PageUp") delta = 10;
      else if (e.key === "Home") {
        e.preventDefault();
        onChange(MIN);
        return;
      } else if (e.key === "End") {
        e.preventDefault();
        onChange(MAX);
        return;
      }
      if (delta !== 0) {
        e.preventDefault();
        onChange(Math.max(MIN, Math.min(MAX, year + delta)));
      }
    },
    [onChange, year]
  );

  return (
    <div className="surface px-3 py-1" aria-label="Year scrubber">

      <div
        ref={trackRef}
        role="slider"
        tabIndex={0}
        aria-valuemin={MIN}
        aria-valuemax={MAX}
        aria-valuenow={year}
        aria-label={`Year, currently ${year}. Drag or use arrow keys.`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={() => setHoverYear(null)}
        onKeyDown={onKeyDown}
        className="relative h-3 cursor-grab active:cursor-grabbing select-none rounded-full"
        style={{
          touchAction: "none",
          border: "1px solid var(--border-soft)",
          background: "var(--bg-elev)",
        }}
      >
        <div className="absolute inset-0 flex rounded-full overflow-hidden pointer-events-none">
          {periods.map((p) => {
            const span = (p.endYear - p.startYear) / (MAX - MIN);
            const active = p.id === period.id;
            return (
              <div
                key={p.id}
                style={{
                  flexBasis: `${span * 100}%`,
                  background: active
                    ? `color-mix(in oklch, ${p.color} 70%, transparent)`
                    : `color-mix(in oklch, ${p.color} 38%, transparent)`,
                  borderRight:
                    "1px solid color-mix(in oklch, var(--text) 14%, transparent)",
                }}
              />
            );
          })}
        </div>

        {hoverYear !== null && hoverYear !== year && (
          <div
            aria-hidden
            className="absolute top-0 bottom-0 pointer-events-none"
            style={{
              left: `${((hoverYear - MIN) / (MAX - MIN)) * 100}%`,
              width: 1,
              transform: "translateX(-0.5px)",
              background: "color-mix(in oklch, var(--text) 25%, transparent)",
            }}
          />
        )}

        <div
          aria-hidden
          className="absolute top-0 bottom-0 pointer-events-none transition-[left] duration-75"
          style={{
            left: `${progress * 100}%`,
            width: 3,
            transform: "translateX(-1.5px)",
            background: "var(--accent)",
            borderRadius: 3,
            boxShadow:
              "0 0 0 5px color-mix(in oklch, var(--accent) 22%, transparent), 0 0 12px 2px color-mix(in oklch, var(--accent) 60%, transparent)",
          }}
        />

        {hoverYear !== null && (() => {
          const hoverPeriod =
            periods.find(
              (p) => hoverYear >= p.startYear && hoverYear <= p.endYear
            ) ?? period;
          return (
            <div
              aria-hidden
              className="absolute -top-8 t-12 px-2 py-1 rounded-md pointer-events-none whitespace-nowrap"
              style={{
                left: `${((hoverYear - MIN) / (MAX - MIN)) * 100}%`,
                transform: "translateX(-50%)",
                background: "var(--bg)",
                border: `1px solid ${hoverPeriod.color}`,
                color: "var(--text)",
                boxShadow:
                  "0 4px 12px -6px color-mix(in oklch, var(--text) 30%, transparent)",
              }}
            >
              <span className="font-display">{hoverYear}</span>
              <span style={{ color: hoverPeriod.color, marginLeft: 6 }}>
                · {hoverPeriod.name}
              </span>
            </div>
          );
        })()}
      </div>

      <div
        className="flex justify-between mt-0.5 px-0.5"
        style={{ color: "var(--text-dim)", fontSize: 9 }}
        aria-hidden
      >
        <span>1200</span>
        <span>1450</span>
        <span>1750</span>
        <span>1900</span>
        <span>2025</span>
      </div>
    </div>
  );
}
