export type StoreId = "walmart" | "kroger" | "heb";

export interface GroceryItem {
  id: string;
  name: string;
  image: string;
  walmart: number | null;
  kroger: number | null;
  heb: number | null;
}

export interface Store {
  id: StoreId;
  name: string;
  color: string;
  textColor: string;
}

export interface ComparisonRow {
  item: GroceryItem;
  cheapestStores: StoreId[];
  found: boolean;
}

export interface StoreTotals {
  walmart: number;
  kroger: number;
  heb: number;
}
