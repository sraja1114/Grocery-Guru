"use client";

import { useState } from "react";
import { ArrowRight, RotateCcw } from "lucide-react";
import { GroceryListInput } from "@/components/compare/GroceryListInput";
import { ComparisonGrid } from "@/components/compare/ComparisonGrid";
import { Button } from "@/components/shared/Button";

type Phase = "input" | "results";

export default function ComparePage() {
  const [phase, setPhase] = useState<Phase>("input");
  const [items, setItems] = useState<string[]>([]);

  function handleCompare() {
    if (items.length > 0) setPhase("results");
  }

  function handleEditList() {
    setPhase("input");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 space-y-8">
      {phase === "input" && (
        <>
          <div>
            <h1 className="text-2xl font-bold text-ink">Build your grocery list</h1>
            <p className="mt-1 text-sm text-subtle">
              Add the items you need. We&apos;ll compare prices at Walmart, Kroger, and H-E-B.
            </p>
          </div>

          <div className="rounded-2xl bg-surface border border-border shadow-sm p-6 space-y-5">
            <GroceryListInput items={items} onChange={setItems} />

            <div className="flex items-center justify-between pt-3 border-t border-border">
              <p className="text-sm text-subtle">
                {items.length === 0
                  ? "Add at least one item to compare prices"
                  : `${items.length} item${items.length !== 1 ? "s" : ""} ready to compare`}
              </p>
              <Button onClick={handleCompare} disabled={items.length === 0} size="lg">
                Compare prices
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </>
      )}

      {phase === "results" && (
        <>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
            <div>
              <h1 className="text-2xl font-bold text-ink">Price comparison</h1>
              <p className="text-sm text-subtle mt-0.5">
                {items.length} item{items.length !== 1 ? "s" : ""} across Walmart, Kroger, and H-E-B
              </p>
            </div>
            <Button variant="secondary" onClick={handleEditList}>
              <RotateCcw size={15} />
              Edit list
            </Button>
          </div>

          <div className="flex flex-wrap gap-2">
            {items.map((item, i) => (
              <span
                key={`${item}-${i}`}
                className="rounded-full bg-muted border border-gray-200 px-3 py-1 text-sm text-ink"
              >
                {item}
              </span>
            ))}
          </div>

          <ComparisonGrid itemNames={items} />
        </>
      )}
    </div>
  );
}
