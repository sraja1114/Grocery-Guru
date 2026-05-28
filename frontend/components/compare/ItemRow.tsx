import Image from "next/image";
import { Badge } from "@/components/shared/Badge";
import type { ComparisonRow, StoreId } from "@/types";
import { formatPrice } from "@/lib/priceUtils";

interface ItemRowProps {
  row: ComparisonRow;
  storeId: StoreId;
}

export function ItemRow({ row, storeId }: ItemRowProps) {
  const { item, cheapestStores, found } = row;
  const price = item[storeId];
  const isCheapest = found && cheapestStores.includes(storeId);

  return (
    <div
      className={`
        flex items-center gap-3 px-4 py-3 rounded-xl transition-colors
        ${isCheapest
          ? "bg-brand-50 border border-brand-500/20"
          : "bg-surface border border-border"}
        ${!found ? "opacity-60" : ""}
      `}
    >
      <div className="relative h-12 w-12 shrink-0 rounded-lg overflow-hidden bg-muted">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
          sizes="48px"
          unoptimized
        />
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-ink truncate">{item.name}</p>
        {!found && (
          <span className="text-xs text-subtle">Not in database</span>
        )}
      </div>

      <div className="shrink-0 text-right">
        {isCheapest && price !== null ? (
          <div className="flex flex-col items-end gap-1">
            <span className="text-base font-bold text-brand-600">
              {formatPrice(price)}
            </span>
            <Badge variant="green">Best price</Badge>
          </div>
        ) : (
          <span className={`text-base font-semibold ${price === null ? "text-subtle" : "text-ink"}`}>
            {formatPrice(price)}
          </span>
        )}
      </div>
    </div>
  );
}
