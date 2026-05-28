import { Trophy } from "lucide-react";
import { STORES } from "@/data/mockStoreData";
import type { StoreId, StoreTotals } from "@/types";
import { formatPrice } from "@/lib/priceUtils";

interface RecommendationBannerProps {
  totals: StoreTotals;
  cheapestStore: StoreId;
}

export function RecommendationBanner({ totals, cheapestStore }: RecommendationBannerProps) {
  const winner = STORES.find((s) => s.id === cheapestStore)!;
  const allTotals = STORES.map((s) => totals[s.id]);
  const maxTotal = Math.max(...allTotals);
  const savings = maxTotal - totals[cheapestStore];

  return (
    <div className="rounded-2xl bg-hero p-6 text-white shadow-lg">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 shrink-0">
            <Trophy size={24} className="text-brand-300" aria-hidden="true" />
          </div>
          <div>
            <p className="text-sm font-medium text-brand-300">Our recommendation</p>
            <p className="text-2xl font-extrabold text-white">{winner.name}</p>
          </div>
        </div>

        <div className="sm:ml-auto flex flex-wrap gap-6">
          {STORES.map((store) => (
            <div key={store.id} className="text-center">
              <p className="text-xs font-medium text-brand-400">{store.name}</p>
              <p
                className={`text-lg font-bold ${
                  store.id === cheapestStore ? "text-brand-300" : "text-white/60"
                }`}
              >
                {formatPrice(totals[store.id])}
              </p>
            </div>
          ))}
        </div>
      </div>

      {savings > 0.01 && (
        <div className="mt-4 rounded-xl bg-white/10 border border-white/10 px-4 py-2.5 text-sm font-medium text-white">
          Shop at <strong>{winner.name}</strong> and save{" "}
          <strong className="text-brand-300">{formatPrice(savings)}</strong> compared to
          the most expensive option.
        </div>
      )}
    </div>
  );
}
