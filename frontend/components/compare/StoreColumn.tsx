import { ItemRow } from "@/components/compare/ItemRow";
import type { ComparisonRow, Store, StoreId, StoreTotals } from "@/types";
import { formatPrice } from "@/lib/priceUtils";

interface StoreColumnProps {
  store: Store;
  rows: ComparisonRow[];
  totals: StoreTotals;
  cheapestStore: StoreId;
}

function StoreLogo({ store }: { store: Store }) {
  return (
    <div
      className="flex items-center justify-center h-14 w-full rounded-xl px-4"
      style={{ backgroundColor: store.color }}
    >
      <span
        className="text-xl font-extrabold tracking-tight"
        style={{ color: store.textColor }}
      >
        {store.name}
      </span>
    </div>
  );
}

export function StoreColumn({ store, rows, totals, cheapestStore }: StoreColumnProps) {
  const total = totals[store.id];
  const isWinner = store.id === cheapestStore;

  return (
    <div
      className={`
        flex flex-col rounded-2xl overflow-hidden shadow-sm border
        ${isWinner
          ? "border-brand-500 ring-2 ring-brand-500/20"
          : "border-border"}
      `}
    >
      {/* Column header */}
      <div className="p-4">
        <StoreLogo store={store} />
      </div>

      {/* Item rows */}
      <div className="flex flex-col gap-2 px-3 pb-3 flex-1">
        {rows.map((row) => (
          <ItemRow key={row.item.id} row={row} storeId={store.id} />
        ))}
      </div>

      {/* Column footer — total */}
      <div
        className={`
          mt-auto px-4 py-3 border-t flex items-center justify-between
          ${isWinner
            ? "bg-brand-50 border-brand-500/20"
            : "bg-muted border-border"}
        `}
      >
        <span className={`text-sm font-medium ${isWinner ? "text-brand-600" : "text-subtle"}`}>
          {isWinner ? "Best total" : "Total"}
        </span>
        <span className={`text-lg font-bold ${isWinner ? "text-brand-600" : "text-ink"}`}>
          {formatPrice(total)}
        </span>
      </div>
    </div>
  );
}
