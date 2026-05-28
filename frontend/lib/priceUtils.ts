import { GROCERY_ITEMS } from "@/data/mockStoreData";
import type { ComparisonRow, GroceryItem, StoreId, StoreTotals } from "@/types";

export function findItem(name: string): GroceryItem | undefined {
  const normalized = name.trim().toLowerCase();
  return GROCERY_ITEMS.find(
    (item) =>
      item.id === normalized ||
      item.name.toLowerCase().includes(normalized) ||
      normalized.includes(item.id)
  );
}

export function buildComparison(itemNames: string[]): ComparisonRow[] {
  return itemNames.map((name) => {
    const item = findItem(name);
    if (!item) {
      const notFound: GroceryItem = {
        id: name.toLowerCase(),
        name,
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=200&h=200&fit=crop&auto=format",
        walmart: null,
        kroger: null,
        heb: null,
      };
      return { item: notFound, cheapestStores: [], found: false };
    }

    const prices: { store: StoreId; price: number }[] = (
      ["walmart", "kroger", "heb"] as StoreId[]
    )
      .filter((s) => item[s] !== null)
      .map((s) => ({ store: s, price: item[s] as number }));

    const minPrice = Math.min(...prices.map((p) => p.price));
    const cheapestStores = prices
      .filter((p) => p.price === minPrice)
      .map((p) => p.store);

    return { item, cheapestStores, found: true };
  });
}

export function computeTotals(rows: ComparisonRow[]): StoreTotals {
  const totals: StoreTotals = { walmart: 0, kroger: 0, heb: 0 };
  for (const { item } of rows) {
    if (item.walmart !== null) totals.walmart += item.walmart;
    if (item.kroger !== null) totals.kroger += item.kroger;
    if (item.heb !== null) totals.heb += item.heb;
  }
  return totals;
}

export function findCheapestStore(totals: StoreTotals): StoreId {
  const entries = Object.entries(totals) as [StoreId, number][];
  return entries.reduce((min, cur) => (cur[1] < min[1] ? cur : min))[0];
}

export function formatPrice(price: number | null): string {
  if (price === null) return "—";
  return `$${price.toFixed(2)}`;
}
