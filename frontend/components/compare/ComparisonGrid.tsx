"use client";

import { useMemo } from "react";
import { StoreColumn } from "@/components/compare/StoreColumn";
import { RecommendationBanner } from "@/components/compare/RecommendationBanner";
import { STORES } from "@/data/mockStoreData";
import { buildComparison, computeTotals, findCheapestStore } from "@/lib/priceUtils";

interface ComparisonGridProps {
  itemNames: string[];
}

export function ComparisonGrid({ itemNames }: ComparisonGridProps) {
  const rows = useMemo(() => buildComparison(itemNames), [itemNames]);
  const totals = useMemo(() => computeTotals(rows), [rows]);
  const cheapestStore = useMemo(() => findCheapestStore(totals), [totals]);

  return (
    <div className="w-full space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {STORES.map((store) => (
          <StoreColumn
            key={store.id}
            store={store}
            rows={rows}
            totals={totals}
            cheapestStore={cheapestStore}
          />
        ))}
      </div>

      <RecommendationBanner totals={totals} cheapestStore={cheapestStore} />
    </div>
  );
}
